import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { messageService } from '../services/message.service.js';
// FIX: Import SOCKET_EVENTS here
import {
  HTTP_STATUS,
  SUCCESS_MESSAGES,
  SOCKET_EVENTS,
} from '../utils/constants.js';
import { getSocketIoInstance } from '../socket/index.js';

/**
 * Send message
 */
export const sendMessage = asyncHandler(async (req, res) => {
  const { receiverId, content, contentType = 'TEXT', clientMessageId = null } = req.body; // NEW: contentType param

  // The service now returns a message with a "safe" user object
  const { message, isDuplicate, limitsInfo } = await messageService.sendMessage(
    req.user.id,
    receiverId,
    content,
    contentType, // NEW: pass contentType
    clientMessageId
  );

  // Emit to receiver via socket
  const io = getSocketIoInstance();
  if (io && !isDuplicate) {
    io.to(`user:${receiverId}`).emit(SOCKET_EVENTS.MESSAGE_RECEIVED, message);
  }

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(HTTP_STATUS.CREATED, { message, limitsInfo }, SUCCESS_MESSAGES.MESSAGE_SENT)
    );
});

/**
 * Get conversation with a user
 */
export const getConversation = asyncHandler(async (req, res) => {
  // Convert userId to integer (route params are always strings)
  const otherUserId = parseInt(req.params.userId, 10);
  const result = await messageService.getConversation(
    req.user.id,
    otherUserId,
    req.query
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Conversation retrieved successfully')
    );
});

/**
 * Get server-owned chat eligibility for a user pair
 */
export const getChatEligibility = asyncHandler(async (req, res) => {
  const otherUserId = parseInt(req.params.userId, 10);
  const eligibility = await messageService.getChatEligibility(req.user.id, otherUserId);

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, eligibility, 'Chat eligibility retrieved successfully'));
});

/**
 * Get all conversations
 */
export const getAllConversations = asyncHandler(async (req, res) => {
  const conversations = await messageService.getAllConversations(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        conversations,
        'Conversations retrieved successfully'
      )
    );
});

/**
 * Mark messages as read
 */
export const markMessagesAsRead = asyncHandler(async (req, res) => {
  // Convert userId to integer (route params are always strings)
  const otherUserId = parseInt(req.params.userId, 10);

  const result = await messageService.markMessagesAsRead(req.user.id, otherUserId);

  // Emit to other user that their messages were read
  const io = getSocketIoInstance();
  if (io) {
    // This line now works
    io.to(`user:${otherUserId}`).emit(SOCKET_EVENTS.MESSAGE_READ, {
      byUser: req.user.id,
    });
  }

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Messages marked as read'));
});

/**
 * Delete message
 */
export const deleteMessage = asyncHandler(async (req, res) => {
  // Convert messageId to integer (route params are always strings)
  const messageId = parseInt(req.params.messageId, 10);
  await messageService.deleteMessage(messageId, req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Message deleted successfully'));
});

/**
 * Delete entire conversation
 */
export const deleteConversation = asyncHandler(async (req, res) => {
  const otherUserId = parseInt(req.params.userId, 10);
  await messageService.deleteConversation(req.user.id, otherUserId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Conversation deleted successfully'));
});

/**
 * Get unread message count
 */
export const getUnreadCount = asyncHandler(async (req, res) => {
  const count = await messageService.getUnreadCount(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, { unreadCount: count }, 'Unread count retrieved successfully')
    );
});

export const messageController = {
  sendMessage,
  getChatEligibility,
  getConversation,
  getAllConversations,
  markMessagesAsRead,
  deleteMessage,
  deleteConversation,
  getUnreadCount,
};
