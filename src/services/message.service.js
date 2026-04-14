import prisma from '../config/database.js';
import { Prisma } from '@prisma/client';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES, NOTIFICATION_TYPES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
// ADDED: Import the blockService to check for blocks
import { blockService } from './block.service.js';
import { chatPolicyService } from './chatPolicy.service.js';
import { assertValidMessageContent } from '../utils/chatValidation.js';
import { assertPerSecondLimit, assertDailyLimit } from './chatRateLimit.service.js';
// ADDED: Import notificationService to send push notifications
import { notificationService } from './notification.service.js';
import { hasPremiumAccess } from '../utils/premium.helper.js';
import { enqueueMessageNotification } from './messageQueue.service.js';
import { incrementUsage } from './usageLimits.service.js';

// Define a reusable Prisma select for public-facing user data
// This prevents leaking sensitive fields like email, phone, etc.
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  profile: {
    select: {
      firstName: true,
      lastName: true,
      media: {
        select: {
          url: true,
          type: true,
        },
        take: 1, // Only get the first image (profile pic)
      },
    },
  },
};

/**
 * Send message
 * @param {number} senderId - Sender user ID
 * @param {number} receiverId - Receiver user ID
 * @param {string} content - Message content
 * @param {string} contentType - Message content type (TEXT, IMAGE, SYSTEM)
 * @returns {Promise<Object>}
 */
export const sendMessage = async (
  senderId,
  receiverId,
  content,
  contentType = 'TEXT',
  clientMessageId = null
) => {
  try {
    if (senderId === receiverId) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'Cannot send message to yourself'
      );
    }

    // Validate & sanitize content (privacy + length)
    const normalizedContent = assertValidMessageContent(content);

    // Anti-spam: 1 msg/sec per conversation (drop early)
    if (!(await assertPerSecondLimit(senderId, receiverId))) {
      throw new ApiError(HTTP_STATUS.TOO_MANY_REQUESTS, 'You are sending messages too fast');
    }

    const allowedTypes = new Set(['TEXT', 'IMAGE', 'SYSTEM']);
    if (!allowedTypes.has(contentType)) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid content type');
    }

    const eligibility = await chatPolicyService.assertCanChat(senderId, receiverId);
    const isMatched = eligibility.relationshipStatus === 'accepted';

    // Check if receiver exists and is active
    const receiver = await prisma.user.findFirst({
      where: { id: receiverId, isActive: true, isBanned: false },
    });

    if (!receiver) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Receiver not found');
    }

    // Daily rate limits (pre/post match)
    if (!(await assertDailyLimit(senderId, receiverId, isMatched))) {
      throw new ApiError(
        HTTP_STATUS.TOO_MANY_REQUESTS,
        'Daily message limit reached'
      );
    }

    // --- NEW: Find or create Conversation ---
    const userAId = Math.min(senderId, receiverId);
    const userBId = Math.max(senderId, receiverId);

    let conversation = await prisma.conversation.findUnique({
      where: {
        userAId_userBId: { userAId, userBId },
      },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: { userAId, userBId },
      });
    }
    // --- End Conversation ---

    // Idempotency: return existing message if clientMessageId already used
    if (clientMessageId) {
      const existing = await prisma.message.findFirst({
        where: { senderId, clientMessageId },
        include: {
          sender: { select: userPublicSelect },
          receiver: { select: userPublicSelect },
        },
      });
      if (existing) {
        return { message: existing, isDuplicate: true };
      }
    }

    const message = await prisma.message.create({
      data: {
        senderId,
        receiverId,
        conversationId: conversation.id,
        content: normalizedContent,
        contentType, // NEW: explicit content type
        clientMessageId: clientMessageId || null,
      },
      include: {
        sender: {
          select: userPublicSelect,
        },
        receiver: {
          select: userPublicSelect,
        },
      },
    });

    // Update conversation timestamp
    await prisma.conversation.update({
      where: { id: conversation.id },
      data: { updatedAt: new Date() },
    });

    // Track daily usage (for rate limiting and plan enforcement)
    await incrementUsage(senderId, 'messagesCount');

    // Track plan total usage if part of a specific subscription
    if (eligibility.access?.subscriptionId) {
      await prisma.userSubscription.update({
        where: { id: eligibility.access.subscriptionId },
        data: { messagesUsed: { increment: 1 } },
      });
    }
    // --- End Usage Tracking ---

    // Async notification via queue (cluster-safe dedupe)
    const senderName = message.sender?.profile?.firstName || 'Someone';
    const preview = normalizedContent.length > 50 ? normalizedContent.substring(0, 50) + '...' : normalizedContent;
    const queued = await enqueueMessageNotification({
      type: 'NEW_MESSAGE',
      messageId: message.id,
      receiverId,
      title: `New message from ${senderName}`,
      preview,
      data: {
        type: 'NEW_MESSAGE',
        userId: String(senderId),
        userName: senderName,
        conversationId: String(conversation.id),
      },
    });

    if (!queued) {
      notificationService.createNotification({
        userId: receiverId,
        type: NOTIFICATION_TYPES.NEW_MESSAGE,
        title: `New message from ${senderName}`,
        message: preview,
        data: {
          type: 'NEW_MESSAGE',
          userId: String(senderId),
          userName: senderName,
          conversationId: String(conversation.id),
        },
        pushPolicy: 'offline-only',
      }).catch(err => logger.error('Failed to send message notification:', err));
    }

    // Capture limits info for the response
    const usage = await prisma.dailyUsage.findUnique({
      where: {
        userId_date: {
          userId: senderId,
          date: new Date().toISOString().split('T')[0], // IST offset applied in getTodayKey usually, let's use the helper
        },
      },
    });
    // Re-calculating with offset logic native to usageLimits
    const istOffset = 5.5 * 60 * 60 * 1000;
    const dateKey = new Date(new Date().getTime() + istOffset).toISOString().split('T')[0];
    const accurateUsage = await prisma.dailyUsage.findUnique({ where: { userId_date: { userId: senderId, date: dateKey } } });
    
    // Check remaining using accurate usage + 1 (since it just incremented asynchronously)
    const storedCount = accurateUsage?.messagesCount || 0;
    const messagesUsed = storedCount; 
    
    const limit = eligibility.access.messageLimitPerDay;
    const planTypeStr = !eligibility.access.isPremium ? "free" : (limit === -1 ? "premium_pro" : "premium_basic");
    const remainingMessages = limit === -1 ? 999999 : Math.max(0, limit - messagesUsed);

    logger.info(`Message sent from ${senderId} to ${receiverId}`);
    return { 
      message, 
      isDuplicate: false,
      limitsInfo: {
        canSendMessage: limit === -1 ? true : messagesUsed < limit,
        remainingMessages,
        planType: planTypeStr
      }
    };
  } catch (error) {
    logger.error('Error in sendMessage:', error);
    if (error instanceof ApiError) throw error;
    
    // Improved error reporting: include original error message in dev/logs
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR, 
      process.env.NODE_ENV === 'production' ? 'Error sending message' : `Error sending message: ${error.message}`
    );
  }
};

/**
 * Get conversation between two users
 * @param {number} userId - Current user ID
 * @param {number} otherUserId - Other user ID
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>}
 */
export const getConversation = async (userId, otherUserId, query) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    if (blockedIdSet.has(otherUserId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot view this conversation');
    }
    // --- End Block Check ---
    // Enforce chat eligibility (match/contact accepted)
    await chatPolicyService.assertCanChat(userId, otherUserId);

    const { page, limit, skip } = getPaginationParams(query);

    // NEW: Per-user deletion visibility filter
    const where = {
      OR: [
        { senderId: userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: userId },
      ],
      // NEW: Only show messages not deleted by this user
      AND: [
        {
          OR: [
            { senderId: userId, isDeletedBySender: false },
            { receiverId: userId, isDeletedByReceiver: false },
          ],
        },
      ],
    };

    const [messages, total] = await Promise.all([
      prisma.message.findMany({
        where,
        skip,
        take: limit,
        include: {
          sender: {
            select: userPublicSelect,
          },
        },
        // Deterministic ordering for same timestamp
        orderBy: [
          { createdAt: 'desc' },
          { id: 'desc' },
        ],
      }),
      prisma.message.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      messages,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getConversation:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving conversation');
  }
};

/**
 * Get all conversations for a user
 * @param {number} userId - User ID
 * @returns {Promise<Array>}
 */
export const getAllConversations = async (userId) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    // --- End Block Check ---

    // Step 1: Get all distinct conversation partners and the timestamp of the last message
    const conversationPartners = await prisma.$queryRaw`
      SELECT "otherUserId", MAX("createdAt") as "lastMessageAt"
      FROM (
        SELECT "receiverId" as "otherUserId", "createdAt" FROM "messages" WHERE "senderId" = ${userId}
        UNION ALL
        SELECT "senderId" as "otherUserId", "createdAt" FROM "messages" WHERE "receiverId" = ${userId}
      ) as "allConversations"
      GROUP BY "otherUserId"
      ORDER BY "lastMessageAt" DESC
    `;

    // [MODIFIED] Filter out blocked partners
    const filteredPartners = conversationPartners.filter(
      (c) => !blockedIdSet.has(c.otherUserId)
    );

    if (filteredPartners.length === 0) {
      return [];
    }

    const otherUserIds = filteredPartners.map((c) => c.otherUserId);

    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: {
          where: {
            status: 'ACTIVE',
            endDate: { gt: new Date() },
          },
          include: { plan: true },
        },
      },
    });

    let eligiblePartners = filteredPartners;
    if (!hasPremiumAccess(currentUser)) {
      const matches = await prisma.matchRequest.findMany({
        where: {
          status: 'ACCEPTED',
          OR: [
            { senderId: userId, receiverId: { in: otherUserIds } },
            { receiverId: userId, senderId: { in: otherUserIds } },
          ],
        },
        select: { senderId: true, receiverId: true },
      });

      const allowedSet = new Set();
      for (const m of matches) {
        const otherId = m.senderId === userId ? m.receiverId : m.senderId;
        allowedSet.add(otherId);
      }
      eligiblePartners = filteredPartners.filter((c) => allowedSet.has(c.otherUserId));
    }

    if (eligiblePartners.length === 0) {
      return [];
    }

    const eligibleUserIds = eligiblePartners.map((c) => c.otherUserId);

    // Step 2: Get all user details for these partners in one query
    const users = await prisma.user.findMany({
      where: { id: { in: eligibleUserIds } },
      select: userPublicSelect,
    });
    const userMap = new Map(users.map((user) => [user.id, user]));

    // Step 3: Get all last messages for these conversations in one query
    const lastMessages = await prisma.$queryRaw`
      SELECT m.*
      FROM "messages" m
      INNER JOIN (
        SELECT
          LEAST("senderId", "receiverId") as u1,
          GREATEST("senderId", "receiverId") as u2,
          MAX("createdAt") as "maxCreatedAt"
        FROM "messages"
        WHERE ("senderId" = ${userId} AND "receiverId" IN (${Prisma.join(eligibleUserIds)}))
           OR ("receiverId" = ${userId} AND "senderId" IN (${Prisma.join(eligibleUserIds)}))
        GROUP BY u1, u2
      ) lm ON LEAST(m."senderId", m."receiverId") = lm.u1
           AND GREATEST(m."senderId", m."receiverId") = lm.u2
           AND m."createdAt" = lm."maxCreatedAt"
    `;
    const lastMessageMap = new Map(
      lastMessages.map((m) => [
        m.senderId === userId ? m.receiverId : m.senderId,
        m,
      ])
    );

    // Step 4: Get all unread counts in one query (NEW: use status field)
    const unreadCounts = await prisma.message.groupBy({
      by: ['senderId'],
      where: {
        receiverId: userId,
        senderId: { in: eligibleUserIds },
        status: { in: ['SENT', 'DELIVERED'] }, // All non-READ statuses
        isDeletedByReceiver: false,
      },
      _count: {
        id: true,
      },
    });
    const unreadCountMap = new Map(
      unreadCounts.map((c) => [c.senderId, c._count.id])
    );

    // Step 5: Combine all the data
    const conversationsWithDetails = eligiblePartners.map((conv) => { // [MODIFIED]
      const otherUser = userMap.get(conv.otherUserId);
      const lastMessage = lastMessageMap.get(conv.otherUserId);
      const unreadCount = unreadCountMap.get(conv.otherUserId) || 0;

      return {
        user: otherUser,
        lastMessage,
        unreadCount,
        lastMessageAt: conv.lastMessageAt,
      };
    });

    return conversationsWithDetails;
  } catch (error) {
    logger.error('Error in getAllConversations:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving conversations');
  }
};


/**
 * Mark messages as read
 * @param {number} userId - Current user ID
 * @param {number} otherUserId - Other user ID
 * @returns {Promise<Object>}
 */
export const markMessagesAsRead = async (userId, otherUserId) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    if (blockedIdSet.has(otherUserId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Cannot interact with this user');
    }
    // --- End Block Check ---
    await chatPolicyService.assertCanChat(userId, otherUserId);

    // NEW: Use status field (single source of truth) instead of isRead
    const result = await prisma.message.updateMany({
      where: {
        senderId: otherUserId,
        receiverId: userId,
        status: { in: ['SENT', 'DELIVERED'] }, // Only update non-read messages
      },
      data: {
        status: 'READ',
        readAt: new Date(),
      },
    });

    logger.info(`Marked ${result.count} messages as read from ${otherUserId} for ${userId}`);
    return result;
  } catch (error) {
    logger.error('Error in markMessagesAsRead:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error marking messages as read');
  }
};

/**
 * Delete message (per-user soft delete)
 * @param {number} messageId - Message ID
 * @param {number} userId - User ID
 * @returns {Promise<void>}
 */
export const deleteMessage = async (messageId, userId) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.MESSAGE_NOT_FOUND);
    }

    // NEW: Per-user deletion - both sender AND receiver can delete for themselves
    const isSender = message.senderId === userId;
    const isReceiver = message.receiverId === userId;

    if (!isSender && !isReceiver) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'You cannot delete this message'
      );
    }

    // NEW: Set the appropriate per-user deletion flag
    await prisma.message.update({
      where: { id: messageId },
      data: {
        ...(isSender && { isDeletedBySender: true }),
        ...(isReceiver && { isDeletedByReceiver: true }),
      }
    });

    logger.info(`Message ${messageId} marked as deleted by user ${userId} (${isSender ? 'sender' : 'receiver'})`);
  } catch (error) {
    logger.error('Error in deleteMessage:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting message');
  }
};

/**
 * Delete entire conversation for a user (per-user soft delete)
 * @param {number} userId - Current user ID
 * @param {number} otherUserId - Other user ID
 */
export const deleteConversation = async (userId, otherUserId) => {
  try {
    await prisma.message.updateMany({
      where: { senderId: userId, receiverId: otherUserId },
      data: { isDeletedBySender: true },
    });
    await prisma.message.updateMany({
      where: { senderId: otherUserId, receiverId: userId },
      data: { isDeletedByReceiver: true },
    });

    logger.info(`Conversation between ${userId} and ${otherUserId} marked deleted for user ${userId}`);
  } catch (error) {
    logger.error('Error in deleteConversation:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting conversation');
  }
};

/**
 * Get unread message count
 * @param {number} userId - User ID
 * @returns {Promise<number>}
 */
export const getUnreadCount = async (userId) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    // --- End Block Check ---

    // NEW: Use status field instead of isRead
    const count = await prisma.message.count({
      where: {
        receiverId: userId,
        status: { in: ['SENT', 'DELIVERED'] }, // All non-READ statuses
        senderId: { notIn: Array.from(blockedIdSet) },
        isDeletedByReceiver: false, // Don't count deleted messages
      },
    });

    return count;
  } catch (error) {
    logger.error('Error in getUnreadCount:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error getting unread count');
  }
};

export const getChatEligibility = async (senderId, receiverId) => {
  try {
    return await chatPolicyService.getChatEligibility(senderId, receiverId);
  } catch (error) {
    logger.error('Error in getChatEligibility:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Error retrieving chat eligibility'
    );
  }
};

/**
 * Get undelivered messages for a user (SENT only)
 * Used on socket reconnect to recover missed messages
 */
export const getUndeliveredMessages = async (userId, limit = 200) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        receiverId: userId,
        status: 'SENT',
        isDeletedByReceiver: false,
      },
      include: {
        sender: { select: userPublicSelect },
      },
      orderBy: [
        { createdAt: 'asc' },
        { id: 'asc' },
      ],
      take: limit,
    });

    return messages;
  } catch (error) {
    logger.error('Error in getUndeliveredMessages:', error);
    return [];
  }
};

export const messageService = {
  getChatEligibility,
  sendMessage,
  getConversation,
  getAllConversations,
  markMessagesAsRead,
  deleteMessage,
  deleteConversation,
  getUnreadCount,
  getUndeliveredMessages,
};
