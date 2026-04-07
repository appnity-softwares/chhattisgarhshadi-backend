import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Create a new report
 * @param {number} reporterId - The user filing the report
 * @param {Object} data - Validated report data
 * @param {number} data.reportedUserId - The user being reported
 * @param {string} data.reason - The reason for the report
 * @param {string} data.description - A detailed description
 * @param {string} [data.evidence] - Optional JSON string of evidence URLs
 * @returns {Promise<Object>} The created report entry
 */
export const createReport = async (reporterId, data) => {
  let { reportedUserId, reason, description, evidence, messageId } = data;

  if (reporterId === reportedUserId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'You cannot report yourself');
  }

  try {
    // Optional: validate message ownership and bind report to message
    if (messageId) {
      const message = await prisma.message.findUnique({
        where: { id: messageId },
        select: { senderId: true, receiverId: true },
      });

      if (!message) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Message not found');
      }

      const isParticipant = message.senderId === reporterId || message.receiverId === reporterId;
      if (!isParticipant) {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot report this message');
      }

      // Always report the "other" user in this message
      reportedUserId = message.senderId === reporterId ? message.receiverId : message.senderId;
    }

    // Check if the user being reported exists
    const userToReport = await prisma.user.findUnique({
      where: { id: reportedUserId },
    });

    if (!userToReport) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'The user you are trying to report does not exist');
    }

    // Check if this user has already reported this user for the same reason
    const existingReport = await prisma.report.findFirst({
      where: {
        reporterId,
        reportedUserId,
        reason,
        status: 'PENDING', // Only check against pending reports
      },
    });

    if (existingReport) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'You have already submitted a similar report for this user');
    }

    const report = await prisma.report.create({
      data: {
        reporterId,
        reportedUserId,
        reason,
        description,
        evidence: evidence || null,
        status: 'PENDING', // Default status
        messageId: messageId || null,
      },
    });

    logger.info(`User ${reporterId} reported user ${reportedUserId} for: ${reason}`);
    return report;

  } catch (error) {
    logger.error('Error in createReport:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error submitting report');
  }
};

export const reportService = {
  createReport,
};
