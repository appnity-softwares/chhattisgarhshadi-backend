import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES, USER_ROLES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import { blockService } from './block.service.js';

// Define a reusable Prisma select for public-facing user data
// This prevents leaking sensitive fields like email, phone, etc.
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  createdAt: true,
  profile: true, // Include the full related profile
};

/**
 * Get a user's full details (for the user themselves OR ADMIN)
 * @param {string} userId - User ID
 * @returns {Promise<Object>}
 */
export const getFullUserById = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      include: {
        profile: true,
        subscriptions: {
          include: { plan: true },
          orderBy: { createdAt: 'desc' },
        },
        payments: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        reportsReceived: { // Reports filed AGAINST this user
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
        activityLogs: { // Actions performed BY this user
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        agent: {
          select: {
            agentCode: true,
            agentName: true,
          },
        },
      },
    });

    if (!user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.USER_NOT_FOUND);
    }

    return user;
  } catch (error) {
    logger.error('Error in getFullUserById:', error);
    if (!(error instanceof ApiError)) {
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving user data');
    }
    throw error;
  }
};

/**
 * Get another user's public-safe details
 */
export const getPublicUserById = async (userId, currentUserId) => {
  try {
    if (currentUserId && userId !== currentUserId) {
      const blockedIdSet = await blockService.getAllBlockedUserIds(currentUserId);
      if (blockedIdSet.has(userId)) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.USER_NOT_FOUND);
      }
    }

    const user = await prisma.user.findUnique({
      where: { id: userId, isActive: true },
      select: userPublicSelect,
    });

    if (!user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.USER_NOT_FOUND);
    }

    return user;
  } catch (error) {
    logger.error('Error in getPublicUserById:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving user data');
  }
};

/**
 * Update a user's safe, editable fields
 */
export const updateUser = async (userId, data) => {
  try {
    if (data.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: data.email,
          id: { not: userId },
        },
      });

      if (existingUser) {
        throw new ApiError(HTTP_STATUS.CONFLICT, 'An account with this email already exists.');
      }
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: data,
      include: { profile: true },
    });

    logger.info(`User updated: ${userId}`);
    return user;
  } catch (error) {
    logger.error('Error in updateUser:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating user');
  }
};

export const deleteUser = async (userId) => {
  try {
    await prisma.$transaction([
      prisma.user.update({
        where: { id: parseInt(userId) },
        data: {
          isActive: false,
          isBanned: true,
          banReason: 'Account deleted by user.',
          deletedAt: new Date(),
          email: `deleted_${userId}@placeholder.com`,
          phone: `deleted_${userId}`,
          profilePicture: null,
          deviceInfo: null,
          lastLoginIp: null,
          fcmTokens: {
            deleteMany: {},
          },
        },
      }),
      prisma.profile.update({
        where: { userId: parseInt(userId) },
        data: {
          firstName: 'Deleted',
          lastName: 'User',
          bio: 'This account has been deleted.',
          profileId: `DEL-${userId}`,
          city: 'Deleted',
          state: 'Deleted',
        }
      }),
      prisma.refreshToken.deleteMany({ where: { userId: parseInt(userId) } }),
    ]);

    logger.info(`User soft-deleted: ${userId}`);
    return { success: true };
  } catch (error) {
    logger.error('Error in deleteUser:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting account');
  }
};

/**
 * Search users (public, paginated)
 */
export const searchUsers = async (query, currentUserId = null) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const { search, role } = query;

    const where = {
      isActive: true,
    };

    if (currentUserId) {
      const blockedIds = Array.from(await blockService.getAllBlockedUserIds(currentUserId));
      blockedIds.push(currentUserId);
      where.id = { notIn: blockedIds };
    }

    if (role) {
      where.role = role;
    }

    if (search) {
      where.OR = [
        { profile: { firstName: { contains: search, mode: 'insensitive' } } },
        { profile: { lastName: { contains: search, mode: 'insensitive' } } },
        { profile: { profileId: { equals: search } } },
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        select: userPublicSelect,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.user.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      users,
      pagination,
    };
  } catch (error) {
    logger.error('Error in searchUsers:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error searching users');
  }
};

/**
 * Register or update an FCM token for a device
 */
export const registerFcmToken = async (userId, data) => {
  const { token, deviceId, deviceType, deviceName } = data;

  try {
    const fcmToken = await prisma.fcmToken.upsert({
      where: {
        userId_deviceId: {
          userId,
          deviceId,
        },
      },
      update: {
        token,
        deviceName: deviceName || null,
        isActive: true,
        lastUsedAt: new Date(),
      },
      create: {
        userId,
        token,
        deviceId,
        deviceType,
        deviceName: deviceName || null,
        isActive: true,
        lastUsedAt: new Date(),
      },
    });

    logger.info(`FCM token registered for user ${userId} on device ${deviceId}`);
    return fcmToken;
  } catch (error) {
    logger.error('Error in registerFcmToken:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error registering FCM token');
  }
};

/**
 * Get all users with pagination (Admin Only)
 */
export const getAllUsers = async (query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        include: {
          profile: true,
          agent: {
            select: {
              agentCode: true,
              agentName: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.user.count(),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      users,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getAllUsers:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving users');
  }
};

/**
 * Update user role (Admin Only)
 */
export const updateUserRole = async (userId, role) => {
  try {
    if (!Object.values(USER_ROLES).includes(role)) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid user role');
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
      include: { profile: true },
    });

    logger.info(`User role updated: ${userId} to ${role}`);
    return user;
  } catch (error) {
    logger.error('Error in updateUserRole:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating user role');
  }
};

/**
 * Delete an FCM token (on logout)
 */
export const deleteFcmToken = async (userId, token) => {
  try {
    const result = await prisma.fcmToken.deleteMany({
      where: {
        userId,
        token,
      },
    });

    if (result.count > 0) {
      logger.info(`🗑️  FCM token deleted for user ${userId}`);
    }
  } catch (error) {
    logger.error('Error in deleteFcmToken:', error);
  }
};

/**
 * Ban a user (Admin Only)
 */
export const banUser = async (userId, reason, bannedBy) => {
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: {
        isBanned: true,
        banReason: reason,
        bannedAt: new Date(),
        bannedBy: bannedBy ? parseInt(bannedBy) : null,
      },
      include: { profile: true },
    });

    logger.warn(`User banned: ${userId} for ${reason}`);
    return user;
  } catch (error) {
    logger.error('Error in banUser:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error banning user');
  }
};

/**
 * Unban a user (Admin Only)
 */
export const unbanUser = async (userId) => {
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: {
        isBanned: false,
        banReason: null,
        bannedAt: null,
        bannedBy: null,
      },
      include: { profile: true },
    });

    logger.info(`User unbanned: ${userId}`);
    return user;
  } catch (error) {
    logger.error('Error in unbanUser:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error unbanning user');
  }
};

export const userService = {
  getFullUserById,
  getPublicUserById,
  updateUser,
  deleteUser,
  searchUsers,
  registerFcmToken,
  deleteFcmToken,
  getAllUsers,
  updateUserRole,
  banUser,
  unbanUser,
};