import prisma from '../config/database.js';
import jwtUtils from '../utils/jwt.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

class AuthService {

  async refreshAccessToken(refreshToken, ipAddress) {
    try {
      // Verify refresh token
      const decoded = jwtUtils.verifyRefreshToken(refreshToken);

      // Check if token exists in database
      const tokenRecord = await prisma.refreshToken.findFirst({
        where: {
          token: refreshToken,
          userId: decoded.id,
          isRevoked: false,
          expiresAt: {
            gt: new Date(),
          },
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
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid or expired refresh token');
      }

      // Check if user is active
      if (!tokenRecord.user.isActive || tokenRecord.user.isBanned) {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is not active');
      }

      // Generate new tokens
      const newAccessToken = jwtUtils.generateAccessToken(tokenRecord.user);
      const newRefreshToken = jwtUtils.generateRefreshToken(tokenRecord.user);
      const newRefreshExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      // Revoke old refresh token and create new one in a transaction
      await prisma.$transaction([
        prisma.refreshToken.update({
          where: { id: tokenRecord.id },
          data: {
            isRevoked: true,
            revokedAt: new Date(),
          },
        }),
        prisma.refreshToken.create({
          data: {
            userId: tokenRecord.userId,
            token: newRefreshToken,
            deviceId: tokenRecord.deviceId,
            deviceName: tokenRecord.deviceName,
            deviceType: tokenRecord.deviceType,
            ipAddress,
            userAgent: tokenRecord.userAgent,
            expiresAt: newRefreshExpiresAt,
          },
        })
      ]);

      logger.info(`✅ Token refreshed for user ${tokenRecord.userId}`);

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };

    } catch (error) {
      logger.error('❌ Refresh token error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, error.message || 'Token refresh failed');
      }
      throw error;
    }
  }

  async logout(userId, refreshToken) {
    try {
      if (refreshToken) {
        // Revoke only the specific refresh token
        await prisma.refreshToken.updateMany({
          where: {
            userId,
            token: refreshToken,
          },
          data: {
            isRevoked: true,
            revokedAt: new Date(),
          },
        });
      } else {
        // Revoke all refresh tokens for the user (logout all devices)
        await prisma.refreshToken.updateMany({
          where: { userId },
          data: {
            isRevoked: true,
            revokedAt: new Date(),
          },
        });
      }

      logger.info(`✅ User ${userId} logged out`);
    } catch (error) {
      logger.error('❌ Logout error:', error.message);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Logout failed');
    }
  }

  /**
   * Login with Phone (Firebase Auth)
   * @param {string} firebaseIdToken - Firebase ID token
   * @param {string} ipAddress - User IP address
   * @param {Object} deviceInfo - Device information
   * @param {string} [agentCode] - Optional agent referral code
   * @returns {Promise<Object>} Auth result with user and tokens
   */
  async loginWithPhone(firebaseIdToken, ipAddress, deviceInfo = {}, agentCode = null) {
    try {
      // Import Firebase Admin SDK and helper
      const admin = (await import('firebase-admin')).default;
      const { getFirebaseApp } = await import('../config/firebase.js');

      // Ensure Firebase is initialized
      const firebaseApp = getFirebaseApp();
      if (!firebaseApp) {
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Firebase Admin SDK not initialized.');
      }

      // Verify the Firebase ID token
      const decodedToken = await admin.auth().verifyIdToken(firebaseIdToken);
      const phoneNumber = decodedToken.phone_number;

      if (!phoneNumber) {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Phone number not found in Firebase token');
      }

      // Parse country code from phone number (assuming +91 format usually)
      let countryCode = "+91";
      let localPhone = phoneNumber;
      if (phoneNumber.startsWith('+')) {
        // Extract first 3 chars as country code (e.g. +91)
        countryCode = phoneNumber.substring(0, 3);
        localPhone = phoneNumber.substring(3);
      }

      // Check if user exists by phone
      let user = await prisma.user.findFirst({
        where: {
          phone: localPhone,
          countryCode: countryCode
        },
        include: { profile: true }
      });

      let isNewUser = false;
      let agentId = null;

      if (!user) {
        // Create new user
        isNewUser = true;

        // Handle Agent Code
        if (agentCode) {
          const agent = await prisma.agent.findUnique({
            where: { agentCode: agentCode, status: 'ACTIVE' },
          });
          if (agent) {
            agentId = agent.id;
          }
        }

        // Transaction to create user
        user = await prisma.$transaction(async (tx) => {
          const newUser = await tx.user.create({
            data: {
              phone: localPhone,
              countryCode: countryCode,
              isPhoneVerified: true,
              phoneVerifiedAt: new Date(),
              authProvider: 'PHONE',
              lastLoginAt: new Date(),
              lastLoginIp: ipAddress,
              deviceInfo: JSON.stringify(deviceInfo),
              agentId: agentId,
              agentCodeUsed: agentId ? agentCode : null,
              referredAt: agentId ? new Date() : null,
            },
            include: { profile: true }
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
        logger.info(`✅ New user created via Phone: ${phoneNumber}`);

      } else {
        // Update login info
        user = await prisma.user.update({
          where: { id: user.id },
          data: {
            lastLoginAt: new Date(),
            lastLoginIp: ipAddress,
            deviceInfo: JSON.stringify(deviceInfo),
            isPhoneVerified: true,
            phoneVerifiedAt: user.phoneVerifiedAt || new Date()
          },
          include: { profile: true }
        });
        logger.info(`✅ User logged in via Phone: ${phoneNumber}`);
      }

      if (user.isBanned) throw new ApiError(HTTP_STATUS.FORBIDDEN, `Account suspended: ${user.banReason}`);
      if (!user.isActive) throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is inactive');

      const accessToken = jwtUtils.generateAccessToken(user);
      const refreshToken = jwtUtils.generateRefreshToken(user);
      const refreshExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      await prisma.refreshToken.create({
        data: {
          userId: user.id,
          token: refreshToken,
          deviceId: deviceInfo?.deviceId || null,
          ipAddress,
          expiresAt: refreshExpiresAt,
        }
      });

      const userResponse = {
        id: user.id,
        phone: user.phone,
        firstName: user.profile?.firstName || null,
        lastName: user.profile?.lastName || null,
        profilePicture: user.profilePicture,
        role: user.role,
        isPhoneVerified: user.isPhoneVerified,
        isActive: user.isActive,
        profile: user.profile,
      };

      return {
        user: userResponse,
        accessToken,
        refreshToken,
        isNewUser
      };

    } catch (error) {
      logger.error('❌ Login with Phone error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, error.message || 'Phone login failed');
      }
      throw error;
    }
  }

  /**
   * Verify Firebase Phone Auth Token and mark phone as verified
   */
  async verifyFirebasePhone(userId, firebaseIdToken) {
    try {
      const admin = (await import('firebase-admin')).default;
      const { getFirebaseApp } = await import('../config/firebase.js');

      const firebaseApp = getFirebaseApp();
      if (!firebaseApp) {
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Firebase Admin SDK not initialized.');
      }

      const decodedToken = await admin.auth().verifyIdToken(firebaseIdToken);
      const phoneNumber = decodedToken.phone_number;

      if (!phoneNumber) {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Phone number not found in Firebase token');
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');
      }

      const countryCode = phoneNumber.substring(0, 3);
      const localPhone = phoneNumber.substring(3);

      if (user.isPhoneVerified && user.phone === localPhone && user.countryCode === countryCode) {
        return { success: true, message: 'Phone already verified' };
      }

      const existingPhone = await prisma.user.findFirst({
        where: {
          phone: localPhone,
          countryCode: countryCode,
          isPhoneVerified: true,
          id: { not: userId },
        },
      });

      if (existingPhone) {
        throw new ApiError(HTTP_STATUS.CONFLICT, 'Phone number already registered to another account');
      }

      await prisma.user.update({
        where: { id: userId },
        data: {
          phone: localPhone,
          countryCode: countryCode,
          isPhoneVerified: true,
          phoneVerifiedAt: new Date(),
        },
      });

      logger.info(`✅ Firebase Phone verified for user ${userId}: ${phoneNumber}`);

      return { success: true, phone: phoneNumber };

    } catch (error) {
      logger.error('❌ Firebase phone verification error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message || 'Phone verification failed');
      }
      throw error;
    }
  }
}

export default new AuthService();