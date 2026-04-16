import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, CONTACT_REQUEST_STATUS, NOTIFICATION_TYPES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import { blockService } from './block.service.js';
// ADDED: Import notification service for push notifications
import { notificationService } from './notification.service.js';
import { hasPremiumAccess } from '../utils/premium.helper.js';
import { logAdminAction } from './activityLog.service.js';
import { isRateLimited } from './rateLimit.service.js';

// Reusable select for public user data
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  profile: true,
};

/**
 * Create a new contact request
 * @param {number} requesterId - The user making the request
 * @param {Object} data - Validated request data
 * @returns {Promise<Object>} The created contact request
 */
export const createContactRequest = async (requesterId, data) => {
  const { profileId, requestType, message } = data;

  if (requesterId === profileId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'You cannot request your own contact info');
  }

  try {
    // 1. Check Rate Limiter First (Safety Layer)
    if (isRateLimited(requesterId, 'CONTACT_REQUEST')) {
      // Flag user for spam behavior by creating a System Auto-Report
      const existingReport = await prisma.report.findFirst({
        where: { reportedUserId: requesterId, reason: 'SPAM', status: 'PENDING' }
      });
      if (!existingReport) {
        await prisma.report.create({
          data: {
            reporterId: requesterId,
            reportedUserId: requesterId,
            reason: 'SPAM',
            description: 'System Auto-Flag: User exceeded contact request rate limits (Potential spam/bot behavior).',
            status: 'PENDING',
          }
        });
      }
      throw new ApiError(HTTP_STATUS.TOO_MANY_REQUESTS, 'Rate limit exceeded. Too many requests sent recently.');
    }

    // 2. Check for Blocks
    const blockedIdSet = await blockService.getAllBlockedUserIds(requesterId);
    if (blockedIdSet.has(profileId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot interact with this user');
    }

    // 3. Get Requester (to check subscription) and Receiver (to check privacy)
    const [requester, receiver] = await Promise.all([
      prisma.user.findUnique({
        where: { id: requesterId },
        include: {
          subscriptions: {
            where: { status: 'ACTIVE', endDate: { gt: new Date() } },
            take: 1,
          },
        },
      }),
      prisma.user.findUnique({
        where: { id: profileId, isActive: true },
        include: { profilePrivacySettings: true }
      })
    ]);

    if (!receiver) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'The user you are requesting from does not exist');
    }

    // 3. Check if Requester is a Premium User (premium feature)
    const isPremium = hasPremiumAccess(requester);

    if (!isPremium) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Viewing contact information is a Premium feature. Upgrade to Premium to view phone and email.');
    }

    // 4. Check Receiver's privacy settings
    const privacy = receiver.profilePrivacySettings;
    if (privacy) {
      if (requestType === 'PHONE' && privacy.showPhoneNumber === 'HIDDEN') {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'This user does not accept phone requests');
      }
      if (requestType === 'EMAIL' && privacy.showEmail === 'HIDDEN') {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'This user does not accept email requests');
      }
      // Add more checks as needed (e.g., social media)
    }

    // 5. Check for existing pending request
    const existingRequest = await prisma.contactRequest.findFirst({
      where: {
        requesterId,
        profileId,
        requestType,
        status: CONTACT_REQUEST_STATUS.PENDING,
      },
    });

    if (existingRequest) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'You already have a pending request of this type for this user');
    }

    // 6. Create the request
    const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14-day expiry
    const request = await prisma.contactRequest.create({
      data: {
        requesterId,
        profileId,
        requestType,
        message: message || null,
        status: CONTACT_REQUEST_STATUS.PENDING,
        expiresAt,
      },
    });

    // 7. Send notification to the profile owner about contact request
    const requesterName = requester?.profile?.firstName || 'Someone';
    notificationService.createNotification({
      userId: profileId,
      type: NOTIFICATION_TYPES.CONTACT_REQUEST || 'CONTACT_REQUEST',
      title: 'Contact Info Requested 📞',
      message: `${requesterName} wants to view your ${requestType.toLowerCase()} details.`,
      data: {
        type: 'CONTACT_REQUEST',
        requestId: String(request.id),
        userId: String(requesterId),
        userName: requesterName,
        requestType,
      },
    }).catch(err => logger.error('Failed to send contact request notification:', err));

    logger.info(`Contact request sent from ${requesterId} to ${profileId} for ${requestType}`);
    return request;

  } catch (error) {
    logger.error('Error in createContactRequest:', error);
    if (error instanceof ApiError) throw error;
    if (error.code === 'P2002') {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'A similar request already exists');
    }
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error creating contact request');
  }
};

/**
 * Get all contact requests sent by the user
 * @param {number} userId - The user's ID
 * @param {Object} query - Pagination and filter query
 * @returns {Promise<Object>} Paginated list of sent requests
 */
export const getSentRequests = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = {
    requesterId: userId,
    ...(query.status && { status: query.status }),
  };

  try {
    const [requests, total] = await Promise.all([
      prisma.contactRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          profile: { select: userPublicSelect }, // 'profile' is relation to User
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contactRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { requests, pagination };

  } catch (error) {
    logger.error('Error in getSentRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving sent requests');
  }
};

/**
 * Get all contact requests received by the user
 * @param {number} userId - The user's ID
 * @param {Object} query - Pagination and filter query
 * @returns {Promise<Object>} Paginated list of received requests
 */
export const getReceivedRequests = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  // Also filter out requests from users the receiver has blocked
  const blockedIdSet = await blockService.getAllBlockedUserIds(userId);

  const where = {
    profileId: userId,
    requesterId: { notIn: Array.from(blockedIdSet) },
    ...(query.status && { status: query.status }),
  };

  try {
    const [requests, total] = await Promise.all([
      prisma.contactRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          requester: { select: userPublicSelect }, // 'requester' is relation to User
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contactRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { requests, pagination };

  } catch (error) {
    logger.error('Error in getReceivedRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving received requests');
  }
};

/**
 * Respond to a contact request (Approve/Reject)
 * @param {number} userId - The user responding (must be the receiver)
 * @param {number} requestId - The ID of the contact request
 * @param {string} status - 'APPROVED' or 'REJECTED'
 * @returns {Promise<Object>} The updated contact request
 */
/**
 * [ADMIN] Get all contact requests with user details
 */
export const getAdminContactRequests = async (query) => {
  const { page = 1, limit = 10, status, search } = query;
  const skip = (page - 1) * limit;

  const where = {};
  
  if (status && status !== 'ALL') {
    where.status = status;
  }
  
  if (search) {
    where.OR = [
      { sender: { profile: { user: { profile: { firstName: { contains: search, mode: 'insensitive' } } } } } },
      { sender: { profile: { user: { profile: { lastName: { contains: search, mode: 'insensitive' } } } } } },
      { receiver: { profile: { user: { profile: { firstName: { contains: search, mode: 'insensitive' } } } } } },
      { receiver: { profile: { user: { profile: { lastName: { contains: search, mode: 'insensitive' } } } } } },
    ];
  }

  const [requests, total] = await Promise.all([
    prisma.contactRequest.findMany({
      where,
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
        },
        receiver: {
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
      skip,
      take: parseInt(limit, 10),
    }),
    prisma.contactRequest.count({ where })
  ]);

  return {
    requests,
    pagination: getPaginationMetadata(page, limit, total)
  };
};

/**
 * [ADMIN] Update contact request status with admin override
 */
export const updateAdminContactRequest = async (requestId, status, reason, adminId) => {
  const request = await prisma.contactRequest.findUnique({
    where: { id: requestId },
    include: {
      sender: { include: { user: true } },
      receiver: { include: { user: true } }
    }
  });

  if (!request) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Contact request not found');
  }

  const updatedRequest = await prisma.contactRequest.update({
    where: { id: requestId },
    data: {
      status,
      responseReason: reason,
      respondedAt: new Date(),
      respondedBy: adminId
    }
  });

  // Log admin action
  await logAdminAction(adminId, 'CONTACT_REQUEST_UPDATED', 
    `Updated contact request ${requestId} to ${status}`, 
    { requestId, status, reason }
  );

  // Send notification to users
  if (status === 'APPROVED') {
    await notificationService.sendNotification(
      request.receiverId,
      'Your contact request has been approved',
      NOTIFICATION_TYPES.CONTACT_REQUEST_APPROVED
    );
  } else if (status === 'REJECTED') {
    await notificationService.sendNotification(
      request.senderId,
      'Your contact request has been rejected',
      NOTIFICATION_TYPES.CONTACT_REQUEST_REJECTED
    );
  }

  return updatedRequest;
};

export const respondToRequest = async (userId, requestId, status) => {
  try {
    const request = await prisma.contactRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Contact request not found');
    }

    // Security check: Only the receiver can respond
    if (request.profileId !== userId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to respond to this request');
    }

    if (request.status !== CONTACT_REQUEST_STATUS.PENDING) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'This request has already been responded to');
    }

    const updatedRequest = await prisma.contactRequest.update({
      where: { id: requestId },
      data: {
        status,
        ...(status === CONTACT_REQUEST_STATUS.APPROVED && { approvedAt: new Date() }),
        ...(status === CONTACT_REQUEST_STATUS.REJECTED && { rejectedAt: new Date() }),
      },
    });

    // Send notification to requester about the response
    const responderName = (await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: { select: { firstName: true } } },
    }))?.profile?.firstName || 'Someone';

    const notificationType = status === CONTACT_REQUEST_STATUS.APPROVED
      ? (NOTIFICATION_TYPES.CONTACT_APPROVED || 'CONTACT_APPROVED')
      : (NOTIFICATION_TYPES.CONTACT_REJECTED || 'CONTACT_REJECTED');

    const notificationTitle = status === CONTACT_REQUEST_STATUS.APPROVED
      ? 'Contact Request Approved! ✅'
      : 'Contact Request Declined';

    const notificationMessage = status === CONTACT_REQUEST_STATUS.APPROVED
      ? `${responderName} approved your request. You can now view their contact info!`
      : `${responderName} declined your contact request.`;

    notificationService.createNotification({
      userId: request.requesterId,
      type: notificationType,
      title: notificationTitle,
      message: notificationMessage,
      data: {
        type: status === CONTACT_REQUEST_STATUS.APPROVED ? 'CONTACT_APPROVED' : 'CONTACT_REJECTED',
        requestId: String(requestId),
        userId: String(userId),
        userName: responderName,
      },
    }).catch(err => logger.error('Failed to send contact response notification:', err));

    logger.info(`Contact request ${requestId} was ${status} by user ${userId}`);
    return updatedRequest;

  } catch (error) {
    logger.error('Error in respondToRequest:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error responding to request');
  }
};

export const contactRequestService = {
  createContactRequest,
  getSentRequests,
  getReceivedRequests,
  respondToRequest,
};