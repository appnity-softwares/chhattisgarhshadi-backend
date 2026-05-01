import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logAdminAction } from '../services/activityLog.service.js';
import prisma from '../config/database.js';

const moderationUserSelect = {
  id: true,
  email: true,
  phone: true,
  role: true,
  isActive: true,
  isBanned: true,
  profile: {
    select: {
      firstName: true,
      lastName: true,
      profileId: true,
      city: true,
      state: true,
    },
  },
};

const messageModerationInclude = {
  sender: {
    select: moderationUserSelect,
  },
  receiver: {
    select: moderationUserSelect,
  },
  reports: {
    select: {
      id: true,
      reason: true,
      status: true,
      createdAt: true,
    },
  },
};

const normalizeModerationMessage = (message) => ({
  ...message,
  text: message.text ?? message.content ?? '',
  isFlagged: Boolean(message.isFlagged || message.reports?.length),
});

const normalizeModerationConversation = (conversation) => ({
  ...conversation,
  participant1: conversation.userA,
  participant2: conversation.userB,
  messages: conversation.messages?.map(normalizeModerationMessage) || [],
});

/**
 * [ADMIN] Get all conversations for moderation
 */
export const getAllConversations = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, search, flaggedOnly } = req.query;
  const skip = (page - 1) * limit;

  const where = {};
  
  if (flaggedOnly === 'true') {
    where.messages = { some: { reports: { some: {} } } };
  }
  
  if (search) {
    where.OR = [
      ...(where.OR || []),
      {
        OR: [
          { userA: { phone: { contains: search, mode: 'insensitive' } } },
          { userA: { email: { contains: search, mode: 'insensitive' } } },
          { userA: { profile: { firstName: { contains: search, mode: 'insensitive' } } } },
          { userA: { profile: { lastName: { contains: search, mode: 'insensitive' } } } },
          { userB: { phone: { contains: search, mode: 'insensitive' } } },
          { userB: { email: { contains: search, mode: 'insensitive' } } },
          { userB: { profile: { firstName: { contains: search, mode: 'insensitive' } } } },
          { userB: { profile: { lastName: { contains: search, mode: 'insensitive' } } } },
        ]
      }
    ];
  }

  const [conversations, total] = await Promise.all([
    prisma.conversation.findMany({
      where,
      include: {
        userA: { select: moderationUserSelect },
        userB: { select: moderationUserSelect },
        messages: {
          include: messageModerationInclude,
          orderBy: { createdAt: 'desc' },
          take: 3 // Last 3 messages for preview
        },
        _count: {
          select: { messages: true }
        }
      },
      orderBy: { updatedAt: 'desc' },
      skip,
      take: parseInt(limit, 10),
    }),
    prisma.conversation.count({ where })
  ]);

  const conversationsWithStats = conversations.map(conv => {
    const normalized = normalizeModerationConversation(conv);

    return {
      ...normalized,
      messageCount: conv._count.messages,
      lastMessage: normalized.messages[0]?.text || '',
      lastMessageTime: normalized.messages[0]?.createdAt,
      isFlagged: normalized.messages.some(msg => msg.isFlagged),
    };
  });

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        {
          conversations: conversationsWithStats,
          pagination: {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
            total,
            totalPages: Math.ceil(total / parseInt(limit, 10))
          }
        },
        'Conversations retrieved successfully'
      )
    );
});

/**
 * [ADMIN] Get specific conversation with all messages
 */
export const getConversationById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const conversationId = parseInt(id, 10);

  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: {
      userA: { select: moderationUserSelect },
      userB: { select: moderationUserSelect },
      messages: {
        include: messageModerationInclude,
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  if (!conversation) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Conversation not found');
  }

  const normalizedConversation = normalizeModerationConversation(conversation);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        normalizedConversation,
        'Conversation retrieved successfully'
      )
    );
});

/**
 * [ADMIN] Delete a conversation (moderation action)
 */
export const deleteConversation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const conversationId = parseInt(id, 10);
  const { reason } = req.body;

  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: {
      userA: { select: { id: true } },
      userB: { select: { id: true } }
    }
  });

  if (!conversation) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Conversation not found');
  }

  // Delete all messages in the conversation
  await prisma.message.deleteMany({
    where: { conversationId }
  });

  // Delete the conversation
  await prisma.conversation.delete({
    where: { id: conversationId }
  });

  // Log admin action
  await logAdminAction(req, 'CONVERSATION_DELETED', 
    `Deleted conversation ${conversationId}`, 
    { conversationId, reason }
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        null,
        'Conversation deleted successfully'
      )
    );
});

/**
 * [ADMIN] Flag a message as inappropriate
 */
export const flagMessage = asyncHandler(async (req, res) => {
  const { messageId, reason } = req.body;

  const message = await prisma.message.findUnique({
    where: { id: parseInt(messageId, 10) },
    include: {
      sender: { select: moderationUserSelect },
      receiver: { select: moderationUserSelect }
    }
  });

  if (!message) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Message not found');
  }

  const report = await prisma.report.create({
    data: {
      reporterId: req.user.id,
      reportedUserId: message.senderId,
      messageId: message.id,
      reason: 'INAPPROPRIATE_CONTENT',
      description: reason || 'Message flagged by admin',
      status: 'UNDER_REVIEW',
      reviewNote: 'Flagged from admin chat moderation',
      actionTaken: 'MESSAGE_FLAGGED',
      reviewedAt: new Date(),
    }
  });

  // Log admin action
  await logAdminAction(req, 'MESSAGE_FLAGGED', 
    `Flagged message ${messageId}`, 
    { messageId, reason }
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        normalizeModerationMessage({ ...message, reports: [report], isFlagged: true }),
        'Message flagged successfully'
      )
    );
});

export const chatModerationController = {
  getAllConversations,
  getConversationById,
  deleteConversation,
  flagMessage,
};
