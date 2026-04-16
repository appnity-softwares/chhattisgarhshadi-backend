import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logAdminAction } from '../services/activityLog.service.js';
import prisma from '../config/database.js';

/**
 * [ADMIN] Bulk moderation actions
 */
export const bulkModeration = asyncHandler(async (req, res) => {
  const { ids, type, action, reason } = req.body;
  const adminId = req.user.id;

  // Validate input
  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(new ApiResponse(HTTP_STATUS.BAD_REQUEST, null, 'No valid IDs provided for bulk action'));
  }

  if (!type || !['users', 'profiles', 'reports'].includes(type)) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(new ApiResponse(HTTP_STATUS.BAD_REQUEST, null, 'Invalid entity type. Must be users, profiles, or reports'));
  }

  if (!action || !['ban', 'delete', 'approve'].includes(action)) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(new ApiResponse(HTTP_STATUS.BAD_REQUEST, null, 'Invalid action. Must be ban, delete, or approve'));
  }

  try {
    let results = [];
    let successCount = 0;
    let failedCount = 0;
    const errors = [];

    // Process each item based on entity type and action
    for (const id of ids) {
      try {
        let result;
        const entityId = parseInt(id, 10);

        switch (type) {
          case 'users':
            switch (action) {
              case 'ban':
                result = await prisma.user.update({
                  where: { id: entityId },
                  data: {
                    isBanned: true,
                    banReason: reason || 'Bulk banned by admin',
                    bannedAt: new Date(),
                    bannedBy: adminId
                  }
                });
                break;
              case 'delete':
                // First delete related records
                await prisma.profile.deleteMany({
                  where: { userId: entityId }
                });
                await prisma.matchRequest.deleteMany({
                  where: { OR: [{ requesterId: entityId }, { requesteeId: entityId }] }
                });
                await prisma.contactRequest.deleteMany({
                  where: { OR: [{ senderId: entityId }, { receiverId: entityId }] }
                });
                await prisma.photoRequest.deleteMany({
                  where: { OR: [{ requesterId: entityId }, { requesteeId: entityId }] }
                });
                await prisma.conversation.deleteMany({
                  where: { OR: [{ participant1Id: entityId }, { participant2Id: entityId }] }
                });
                await prisma.message.deleteMany({
                  where: { senderId: entityId }
                });
                await prisma.report.deleteMany({
                  where: { reporterId: entityId }
                });
                await prisma.blockedUser.deleteMany({
                  where: { blockerId: entityId }
                });
                await prisma.shortlist.deleteMany({
                  where: { OR: [{ userId: entityId }, { shortlistedUserId: entityId }] }
                });
                await prisma.profileView.deleteMany({
                  where: { viewerId: entityId }
                });
                
                // Finally delete the user
                result = await prisma.user.delete({
                  where: { id: entityId }
                });
                break;
              case 'delete':
                // Similar to ban but without banning
                await prisma.profile.deleteMany({
                  where: { userId: entityId }
                });
                await prisma.matchRequest.deleteMany({
                  where: { OR: [{ requesterId: entityId }, { requesteeId: entityId }] }
                });
                await prisma.contactRequest.deleteMany({
                  where: { OR: [{ senderId: entityId }, { receiverId: entityId }] }
                });
                await prisma.photoRequest.deleteMany({
                  where: { OR: [{ requesterId: entityId }, { requesteeId: entityId }] }
                });
                await prisma.conversation.deleteMany({
                  where: { OR: [{ participant1Id: entityId }, { participant2Id: entityId }] }
                });
                await prisma.message.deleteMany({
                  where: { senderId: entityId }
                });
                await prisma.report.deleteMany({
                  where: { reporterId: entityId }
                });
                await prisma.blockedUser.deleteMany({
                  where: { blockerId: entityId }
                });
                await prisma.shortlist.deleteMany({
                  where: { OR: [{ userId: entityId }, { shortlistedUserId: entityId }] }
                });
                await prisma.profileView.deleteMany({
                  where: { viewerId: entityId }
                });
                break;
              case 'approve':
                // Approve profiles
                result = await prisma.profile.updateMany({
                  where: { id: { in: ids } },
                  data: {
                    isVerified: true,
                    verifiedAt: new Date(),
                    verifiedBy: adminId
                  }
                });
                break;
            }
            break;

          case 'profiles':
            switch (action) {
              case 'delete':
                await prisma.profile.deleteMany({
                  where: { id: { in: ids } }
                });
                await prisma.matchRequest.deleteMany({
                  where: { OR: [{ requesterProfileId: { in: ids } }, { requesteeProfileId: { in: ids } }] }
                });
                await prisma.contactRequest.deleteMany({
                  where: { OR: [{ senderProfileId: { in: ids } }, { receiverProfileId: { in: ids } }] }
                });
                await prisma.photoRequest.deleteMany({
                  where: { OR: [{ requesterProfileId: { in: ids } }, { requesteeProfileId: { in: ids } }] }
                });
                break;
              case 'approve':
                result = await prisma.profile.updateMany({
                  where: { id: { in: ids } },
                  data: {
                    isVerified: true,
                    verifiedAt: new Date(),
                    verifiedBy: adminId
                  }
                });
                break;
            }

          case 'reports':
            switch (action) {
              case 'delete':
                result = await prisma.report.deleteMany({
                  where: { id: { in: ids } }
                });
                break;
              case 'approve':
                result = await prisma.report.updateMany({
                  where: { id: { in: ids } },
                  data: {
                    status: 'RESOLVED',
                    resolvedAt: new Date(),
                    resolvedBy: adminId,
                    resolution: reason || 'Bulk resolved by admin'
                  }
                });
                break;
            }
            break;
        }

        successCount++;
        results.push({
          id: entityId,
          success: true,
          action: result
        });

      } catch (error) {
        failedCount++;
        results.push({
          id: entityId,
          success: false,
          error: error.message
        });
        errors.push({
          id: entityId,
          error: error.message
        });
      }
    }

    // Log the bulk action
    await logAdminAction(adminId, 'BULK_MODERATION', 
      `Bulk ${action} on ${type}: ${successCount} successful, ${failedCount} failed`, 
      { 
        type, 
        action, 
        reason, 
        ids, 
        successCount, 
        failedCount, 
        errors 
      }
    );

    res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(
          HTTP_STATUS.OK,
          {
            total: ids.length,
            success: successCount,
            failed: failedCount,
            results,
            errors
          },
          `Bulk ${action} completed: ${successCount} successful, ${failedCount} failed`
        )
      );
  });


export const bulkModerationController = {
  bulkModeration,
  bulkModerationReport: bulkModeration,
};
