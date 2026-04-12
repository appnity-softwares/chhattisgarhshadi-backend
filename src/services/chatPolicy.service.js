import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, MATCH_STATUS, USER_ROLES } from '../utils/constants.js';
import { blockService } from './block.service.js';
import { logger } from '../config/logger.js';

/**
 * Check if two users are allowed to chat.
 * Rules:
 * - Must not be blocked in either direction
 * - Must have ACCEPTED match request OR APPROVED contact request
 */
export const assertCanChat = async (senderId, receiverId) => {
  if (senderId === receiverId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Cannot chat with yourself');
  }

  // Block check (both directions)
  const blockedIdSet = await blockService.getAllBlockedUserIds(senderId);
  if (blockedIdSet.has(receiverId)) {
    throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot message this user');
  }

  // Match Eligibility Check
  // PREMIUM OVERRIDE: If the sender is a premium user, they bypass the match requirement
  const sender = await prisma.user.findUnique({
    where: { id: senderId },
    include: { 
      subscriptions: {
        where: { status: 'ACTIVE', endDate: { gt: new Date() } }
      }
    }
  });

  const isPremium = sender?.role === USER_ROLES.PREMIUM_USER || (sender?.subscriptions && sender.subscriptions.length > 0);

  if (isPremium) {
    logger.info(`Premium user ${senderId} bypassing match check to message ${receiverId}`);
    return { isPremium: true, isMatched: false }; // Still let caller know it's a premium bypass
  }

  const match = await prisma.matchRequest.findFirst({
    where: {
      status: MATCH_STATUS.ACCEPTED,
      OR: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    },
    select: { id: true },
  });

  if (!match) {
    throw new ApiError(
      HTTP_STATUS.FORBIDDEN,
      'Chat is available only after interest is accepted'
    );
  }

  return { isMatched: Boolean(match) };
};

export const isMatched = async (userId, otherUserId) => {
  const match = await prisma.matchRequest.findFirst({
    where: {
      status: MATCH_STATUS.ACCEPTED,
      OR: [
        { senderId: userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: userId },
      ],
    },
    select: { id: true },
  });
  return Boolean(match);
};

export const chatPolicyService = { assertCanChat, isMatched };
