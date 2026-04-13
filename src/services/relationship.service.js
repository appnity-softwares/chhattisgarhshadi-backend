import prisma from '../config/database.js';
import { blockService } from './block.service.js';
import { getUserAccess } from './access.service.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, MATCH_STATUS } from '../utils/constants.js';

const mapRelationshipStatus = (match, currentUserId) => {
  if (!match) return 'none';

  if (match.status === MATCH_STATUS.ACCEPTED) {
    return 'accepted';
  }

  if (match.status === MATCH_STATUS.PENDING) {
    return match.senderId === currentUserId ? 'sent' : 'received';
  }

  if (
    match.status === MATCH_STATUS.REJECTED ||
    match.status === MATCH_STATUS.CANCELLED ||
    match.status === MATCH_STATUS.EXPIRED
  ) {
    return 'declined';
  }

  return 'none';
};

export const getRelationship = async (currentUserId, otherUserId) => {
  if (currentUserId === otherUserId) {
    return {
      status: 'none',
      canSendInterest: false,
      canChat: false,
      reason: 'self',
      matchId: null,
    };
  }

  const blockedIds = await blockService.getAllBlockedUserIds(currentUserId);
  if (blockedIds.has(otherUserId)) {
    return {
      status: 'blocked',
      canSendInterest: false,
      canChat: false,
      reason: 'blocked',
      matchId: null,
    };
  }

  const [userAccess, otherUser] = await Promise.all([
    getUserAccess(currentUserId),
    prisma.user.findFirst({
      where: {
        id: otherUserId,
        isActive: true,
        isBanned: false,
      },
      select: { id: true },
    }),
  ]);

  if (!userAccess) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Current user not found');
  }

  if (!otherUser) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');
  }

  const latestMatch = await prisma.matchRequest.findFirst({
    where: {
      OR: [
        { senderId: currentUserId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: currentUserId },
      ],
    },
    orderBy: [{ updatedAt: 'desc' }, { createdAt: 'desc' }],
  });

  const status = mapRelationshipStatus(latestMatch, currentUserId);
  const isMatched = status === 'accepted';
  const canSendInterest = status === 'none' || status === 'declined';
  
  // DRIVEN BY ACCESS OBJECT
  // Basic: requiresMatchToChat = true -> canChat only if isMatched
  // Premium: requiresMatchToChat = false -> canChat true always
  const canChat = userAccess.requiresMatchToChat ? isMatched : true;
  const canViewContacts = userAccess.requiresMatchToChat ? isMatched : true;

  return {
    status,
    canSendInterest,
    canChat,
    canViewContacts,
    reason: canChat ? 'eligible' : 'interest_not_accepted',
    matchId: latestMatch?.id || null,
  };
};

export const relationshipService = {
  getRelationship,
};

export default relationshipService;
