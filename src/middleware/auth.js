import jwtUtils from '../utils/jwt.js';
import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { hasPremiumAccess } from '../utils/premium.helper.js';

/**
 * Authenticate user with JWT token
 */
export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authorization token required'));
    }

    const token = authHeader.substring(7);

    // Verify JWT
    const decoded = jwtUtils.verifyAccessToken(token);

    // Special case for hardcoded admin (id: 0)
    if (decoded.id === 0 && decoded.role === 'ADMIN') {
      req.user = { id: 0, role: 'ADMIN', email: decoded.email, isActive: true, isBanned: false };
      return next();
    }

    // Try to find in admins table first if role suggests it
    if (decoded.role === 'ADMIN' || decoded.role === 'SUPER_ADMIN') {
      const admin = await prisma.admin.findUnique({ where: { id: decoded.id } });
      if (admin && admin.isActive) {
        req.user = admin;
        return next();
      }
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        profile: true,
        subscriptions: {
          where: {
            status: 'ACTIVE',
            endDate: { gt: new Date() },
          },
          include: {
            plan: true,
          },
          orderBy: {
            endDate: 'desc',
          },
        },
      },
    });

    if (!user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'User not found'));
    }

    if (!user.isActive || user.isBanned) {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is not active'));
    }

    if ((decoded.tokenVersion ?? 0) !== user.tokenVersion) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Session has expired. Please log in again.'));
    }

    // Attach user to request
    req.user = user;
    next();

  } catch (error) {
    logger.error('Authentication error:', error.message);
    return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid or expired token'));
  }
};

/**
 * Optional authentication (doesn't fail if no token)
 */
export const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const decoded = jwtUtils.verifyAccessToken(token);

      if (decoded.id === 0 && decoded.role === 'ADMIN') {
        req.user = { id: 0, role: 'ADMIN', email: decoded.email, isActive: true, isBanned: false };
      } else {
        // Try admin check first
        if (decoded.role === 'ADMIN' || decoded.role === 'SUPER_ADMIN') {
          const admin = await prisma.admin.findUnique({ where: { id: decoded.id } });
          if (admin && admin.isActive) {
            req.user = admin;
            return next();
          }
        }

        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
          include: {
            profile: true,
            subscriptions: {
              where: {
                status: 'ACTIVE',
                endDate: { gt: new Date() },
              },
              include: { plan: true },
              orderBy: { endDate: 'desc' },
            },
          },
        });

        if (
          user &&
          user.isActive &&
          !user.isBanned &&
          (decoded.tokenVersion ?? 0) === user.tokenVersion
        ) {
          req.user = user;
        }
      }
    }

    next();
  } catch (error) {
    // Silently fail for optional auth
    next();
  }
};

/**
 * Require user to have a complete profile
 */
export const requireCompleteProfile = async (req, res, next) => {
  try {
    // User must be authenticated first
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    // Check if profile exists
    if (!req.user.profile) {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Profile not found. Please create your profile first.'));
    }

    // Activation gate: optional profile fields must not block core app usage.
    const isActiveProfile = req.user.profile.profileStatus === 'ACTIVE' || req.user.profile.isPublished;

    if (!isActiveProfile) {
      const error = new ApiError(HTTP_STATUS.FORBIDDEN, 'Please add a profile photo to activate your profile');
      error.data = {
        profileStatus: req.user.profile.profileStatus || 'INCOMPLETE',
        profileCompletionPercentage: req.user.profile.profileCompletionPercentage ?? req.user.profile.profileCompleteness ?? 0,
      };
      return next(error);
    }

    next();

  } catch (error) {
    logger.error('Profile check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking profile status'));
  }
};

/**
 * Require only that the user has a profile. Browsing/viewing discovery surfaces
 * must stay available even while profile completion is still in progress.
 */
export const requireProfileForBrowsing = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    if (!req.user.profile) {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Profile not found. Please create your profile first.'));
    }

    next();
  } catch (error) {
    logger.error('Profile browse check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking profile status'));
  }
};

/**
 * Require user to have verified phone
 */
export const requirePhoneVerified = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    if (!req.user.isPhoneVerified) {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Phone verification required to access this feature'));
    }

    next();

  } catch (error) {
    logger.error('Phone verification check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking phone verification status'));
  }
};

/**
 * Require user to have active subscription
 */
export const requireSubscription = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    // FIRST: Check if user has a paid role (lifetime/grandathered/admin)
    if (hasPremiumAccess(req.user)) {
      req.subscription = { isPremiumRole: true };
      return next();
    }

    // Check for active subscription
    const activeSubscription = await prisma.userSubscription.findFirst({
      where: {
        userId: req.user.id,
        status: 'ACTIVE',
        endDate: {
          gt: new Date(),
        },
      },
      include: {
        plan: true,
      },
    });

    if (!activeSubscription) {
      const error = new ApiError(HTTP_STATUS.FORBIDDEN, 'Active subscription required to access this feature');
      error.data = {
        requiresSubscription: true,
      };
      return next(error);
    }

    // Attach subscription to request
    req.subscription = activeSubscription;
    next();

  } catch (error) {
    logger.error('Subscription check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking subscription status'));
  }
};

/**
 * Check if user has admin role
 */
export const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN') {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Admin access required'));
    }

    next();

  } catch (error) {
    logger.error('Admin check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking admin status'));
  }
};
/**
 * Authorize users with specific roles
 * @param {...string} roles - Allowed roles
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `User role ${req.user.role} is not authorized to access this route`
        )
      );
    }
    next();
  };
};
