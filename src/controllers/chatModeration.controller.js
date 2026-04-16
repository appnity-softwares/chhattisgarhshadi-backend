import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { chatService } from '../services/chat.service.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logAdminAction } from '../services/activityLog.service.js';

/**
 * [ADMIN] Get all conversations for moderation
 */
export const getAllConversations = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, search, flaggedOnly } = req.query;
  const skip = (page - 1) * limit;

  const where = {};
  
  if (flaggedOnly === 'true') {
    where.OR = [
      { messages: { some: { isFlagged: true } } },
      { isFlagged: true }
    ];
  }
  
  if (search) {
    where.OR = [
      ...(where.OR || []),
      {
        OR: [
          { participant1: { profile: { user: { profile: { firstName: { contains: search, mode: 'insensitive' } } } } } },
          { participant1: { profile: { user: { profile: { lastName: { contains: search, mode: 'insensitive' } } } } } },
          { participant2: { profile: { user: { profile: { firstName: { contains: search, mode: 'insensitive' } } } } } },
          { participant2: { profile: { user: { profile: { lastName: { contains: search, mode: 'insensitive' } } } } } },
        ]
      }
    ];
  }

  const [conversations, total] = await Promise.all([
    prisma.conversation.findMany({
      where,
      include: {
        participant1: {
          include: {
            profile: {
              include: {
                user: {
                  select: { id: true, email: true, role: true }
                }
              }
            }
          }
        },
        participant2: {
          include: {
            profile: {
              include: {
                user: {
                  select: { id: true, email: true, role: true }
                }
              }
            }
          }
        },
        messages: {
          include: {
            sender: {
              include: {
                profile: {
                  include: {
                    user: {
                      select: { id: true, email: true, role: true }
                    }
                  }
                }
              }
            }
          },
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

  const conversationsWithStats = conversations.map(conv => ({
    ...conv,
    messageCount: conv._count.messages,
    lastMessage: conv.messages[0]?.text || '',
    lastMessageTime: conv.messages[0]?.createdAt,
    isFlagged: conv.messages.some(msg => msg.isFlagged)
  }));

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
      participant1: {
        include: {
          profile: {
            include: {
              user: {
                select: { id: true, email: true, role: true }
              }
            }
          }
        }
      },
      participant2: {
        include: {
          profile: {
            include: {
              user: {
                select: { id: true, email: true, role: true }
              }
            }
          }
        }
      },
      messages: {
        include: {
          sender: {
            include: {
              profile: {
                include: {
                  user: {
                    select: { id: true, email: true, role: true }
                  }
                }
              }
            }
          }
        },
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  if (!conversation) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Conversation not found');
  }

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        conversation,
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
      participant1: { include: { user: true } },
      participant2: { include: { user: true } }
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
  await logAdminAction(req.user.id, 'CONVERSATION_DELETED', 
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
      sender: {
        include: {
          profile: {
            include: {
              user: {
                select: { id: true, email: true, role: true }
              }
            }
          }
        }
      }
    }
  });

  if (!message) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Message not found');
  }

  const updatedMessage = await prisma.message.update({
    where: { id: parseInt(messageId, 10) },
    data: {
      isFlagged: true,
      flagReason: reason,
      flaggedAt: new Date(),
      flaggedBy: req.user.id
    }
  });

  // Log admin action
  await logAdminAction(req.user.id, 'MESSAGE_FLAGGED', 
    `Flagged message ${messageId}`, 
    { messageId, reason }
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        updatedMessage,
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
