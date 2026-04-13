import crypto from 'crypto';
import prisma from '../config/database.js';
import jwtUtils from '../utils/jwt.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

const hashToken = (token) =>
  crypto.createHash('sha256').update(token).digest('hex');

const getRefreshExpiryDate = () =>
  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

const sanitizeAuthUser = (user) => ({
  id: user.id,
  email: user.email,
  phone: user.phone,
  countryCode: user.countryCode,
  firstName: user.profile?.firstName || null,
  lastName: user.profile?.lastName || null,
  profilePicture: user.profilePicture,
  role: user.role,
  preferredLanguage: user.preferredLanguage,
  isPhoneVerified: user.isPhoneVerified,
  isActive: user.isActive,
  isBanned: user.isBanned,
  profile: user.profile,
});

class AuthService {
  async refreshAccessToken(refreshToken, ipAddress) {
    try {
      const decoded = jwtUtils.verifyRefreshToken(refreshToken);
      const tokenHash = hashToken(refreshToken);

      const tokenRecord = await prisma.refreshToken.findFirst({
        where: {
          token: tokenHash,
          userId: decoded.id,
          isRevoked: false,
          expiresAt: { gt: new Date() },
        },
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      });

      if (!tokenRecord) {
        throw new ApiError(
          HTTP_STATUS.UNAUTHORIZED,
          'Invalid or expired refresh token'
        );
      }

      if (!tokenRecord.user.isActive || tokenRecord.user.isBanned) {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is not active');
      }

      if ((decoded.tokenVersion ?? 0) !== tokenRecord.user.tokenVersion) {
        throw new ApiError(
          HTTP_STATUS.UNAUTHORIZED,
          'Session has been revoked. Please log in again.'
        );
      }

      const newAccessToken = jwtUtils.generateAccessToken(tokenRecord.user);
      const newRefreshToken = jwtUtils.generateRefreshToken(tokenRecord.user);
      const newRefreshTokenHash = hashToken(newRefreshToken);

      await prisma.$transaction([
        prisma.refreshToken.update({
          where: { id: tokenRecord.id },
          data: {
            isRevoked: true,
            revokedAt: new Date(),
            lastUsedAt: new Date(),
          },
        }),
        prisma.refreshToken.create({
          data: {
            userId: tokenRecord.userId,
            token: newRefreshTokenHash,
            deviceId: tokenRecord.deviceId,
            deviceName: tokenRecord.deviceName,
            deviceType: tokenRecord.deviceType,
            ipAddress,
            userAgent: tokenRecord.userAgent,
            expiresAt: getRefreshExpiryDate(),
          },
        }),
      ]);

      logger.info(`Token refreshed for user ${tokenRecord.userId}`);

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (error) {
      logger.error('Refresh token error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(
          HTTP_STATUS.UNAUTHORIZED,
          error.message || 'Token refresh failed'
        );
      }
      throw error;
    }
  }

  async logout(userId, refreshToken) {
    try {
      const where = refreshToken
        ? {
            userId,
            token: hashToken(refreshToken),
          }
        : { userId };

      await prisma.$transaction([
        prisma.refreshToken.updateMany({
          where,
          data: {
            isRevoked: true,
            revokedAt: new Date(),
          },
        }),
        prisma.user.update({
          where: { id: userId },
          data: {
            tokenVersion: { increment: 1 },
          },
        }),
      ]);

      logger.info(`User ${userId} logged out and sessions revoked`);
    } catch (error) {
      logger.error('Logout error:', error.message);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Logout failed');
    }
  }

  async loginWithPhone(firebaseIdToken, ipAddress, deviceInfo = {}, agentCode = null) {
    try {
      const admin = (await import('firebase-admin')).default;
      const { getFirebaseApp } = await import('../config/firebase.js');

      const firebaseApp = getFirebaseApp();
      if (!firebaseApp) {
        throw new ApiError(
          HTTP_STATUS.INTERNAL_SERVER_ERROR,
          'Firebase Admin SDK not initialized.'
        );
      }

      const decodedToken = await admin.auth().verifyIdToken(firebaseIdToken);
      const phoneNumber = decodedToken.phone_number;

      if (!phoneNumber) {
        throw new ApiError(
          HTTP_STATUS.BAD_REQUEST,
          'Phone number not found in Firebase token'
        );
      }

      let countryCode = '+91';
      let localPhone = phoneNumber;
      if (phoneNumber.startsWith('+')) {
        countryCode = phoneNumber.substring(0, 3);
        localPhone = phoneNumber.substring(3);
      }

      let user = await prisma.user.findFirst({
        where: {
          phone: localPhone,
          countryCode,
        },
        include: { profile: true },
      });

      let isNewUser = false;
      let agentId = null;

      if (!user) {
        isNewUser = true;

        if (agentCode) {
          const agent = await prisma.agent.findFirst({
            where: { agentCode, status: 'ACTIVE' },
          });
          if (agent) {
            agentId = agent.id;
          }
        }

        user = await prisma.$transaction(async (tx) => {
          const newUser = await tx.user.create({
            data: {
              phone: localPhone,
              countryCode,
              isPhoneVerified: true,
              phoneVerifiedAt: new Date(),
              authProvider: 'PHONE',
              lastLoginAt: new Date(),
              lastLoginIp: ipAddress,
              deviceInfo: JSON.stringify(deviceInfo),
              userAgent: deviceInfo?.userAgent || null,
              agentId,
              agentCodeUsed: agentId ? agentCode : null,
              referredAt: agentId ? new Date() : null,
            },
            include: { profile: true },
          });

          if (agentId) {
            await tx.agent.update({
              where: { id: agentId },
              data: {
                totalUsersAdded: { increment: 1 },
                activeUsers: { increment: 1 },
              },
            });
          }

          return newUser;
        });
        logger.info(`New user created via phone login: ${phoneNumber}`);
      } else {
        user = await prisma.user.update({
          where: { id: user.id },
          data: {
            lastLoginAt: new Date(),
            lastLoginIp: ipAddress,
            deviceInfo: JSON.stringify(deviceInfo),
            userAgent: deviceInfo?.userAgent || null,
            isPhoneVerified: true,
            phoneVerifiedAt: user.phoneVerifiedAt || new Date(),
          },
          include: { profile: true },
        });
        logger.info(`Existing user logged in via phone: ${phoneNumber}`);
      }

      if (user.isBanned) {
        throw new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `Account suspended: ${user.banReason}`
        );
      }
      if (!user.isActive) {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is inactive');
      }

      const accessToken = jwtUtils.generateAccessToken(user);
      const refreshToken = jwtUtils.generateRefreshToken(user);

      await prisma.refreshToken.create({
        data: {
          userId: user.id,
          token: hashToken(refreshToken),
          deviceId: deviceInfo?.deviceId || null,
          deviceName: deviceInfo?.deviceName || null,
          deviceType: deviceInfo?.deviceType || null,
          ipAddress,
          userAgent: deviceInfo?.userAgent || null,
          expiresAt: getRefreshExpiryDate(),
        },
      });

      return {
        user: sanitizeAuthUser(user),
        accessToken,
        refreshToken,
        isNewUser,
      };
    } catch (error) {
      logger.error('Login with phone error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(
          HTTP_STATUS.UNAUTHORIZED,
          error.message || 'Phone login failed'
        );
      }
      throw error;
    }
  }

  async verifyFirebasePhone(userId, firebaseIdToken) {
    try {
      const admin = (await import('firebase-admin')).default;
      const { getFirebaseApp } = await import('../config/firebase.js');

      const firebaseApp = getFirebaseApp();
      if (!firebaseApp) {
        throw new ApiError(
          HTTP_STATUS.INTERNAL_SERVER_ERROR,
          'Firebase Admin SDK not initialized.'
        );
      }

      const decodedToken = await admin.auth().verifyIdToken(firebaseIdToken);
      const phoneNumber = decodedToken.phone_number;

      if (!phoneNumber) {
        throw new ApiError(
          HTTP_STATUS.BAD_REQUEST,
          'Phone number not found in Firebase token'
        );
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');
      }

      const countryCode = phoneNumber.substring(0, 3);
      const localPhone = phoneNumber.substring(3);

      if (
        user.isPhoneVerified &&
        user.phone === localPhone &&
        user.countryCode === countryCode
      ) {
        return { success: true, message: 'Phone already verified' };
      }

      const existingPhone = await prisma.user.findFirst({
        where: {
          phone: localPhone,
          countryCode,
          isPhoneVerified: true,
          id: { not: userId },
        },
      });

      if (existingPhone) {
        throw new ApiError(
          HTTP_STATUS.CONFLICT,
          'Phone number already registered to another account'
        );
      }

      await prisma.user.update({
        where: { id: userId },
        data: {
          phone: localPhone,
          countryCode,
          isPhoneVerified: true,
          phoneVerifiedAt: new Date(),
        },
      });

      logger.info(`Firebase phone verified for user ${userId}: ${phoneNumber}`);

      return { success: true, phone: phoneNumber };
    } catch (error) {
      logger.error('Firebase phone verification error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(
          HTTP_STATUS.INTERNAL_SERVER_ERROR,
          error.message || 'Phone verification failed'
        );
      }
      throw error;
    }
  }
}

export default new AuthService();
