import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logAdminAction } from '../services/activityLog.service.js';
import prisma from '../config/database.js';

export const bulkModeration = asyncHandler(async (req, res) => {
  const { ids, type, action, reason } = req.body;
  const adminId = req.user.id;

  // 🔒 VALIDATION
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json(new ApiResponse(400, null, 'Invalid IDs'));
  }

  if (!['users', 'profiles', 'reports'].includes(type)) {
    return res.status(400).json(new ApiResponse(400, null, 'Invalid type'));
  }

  if (!['ban', 'delete', 'approve'].includes(action)) {
    return res.status(400).json(new ApiResponse(400, null, 'Invalid action'));
  }

  try {
    let results = [];
    let successCount = 0;
    let failedCount = 0;
    const errors = [];

    for (const id of ids) {
      try {
        const entityId = Number(id);
        if (!entityId) throw new Error('Invalid ID');

        let result;

        // ================= USERS =================
        if (type === 'users') {
          if (action === 'ban') {
            result = await prisma.user.update({
              where: { id: entityId },
              data: {
                isBanned: true,
                banReason: reason || 'Bulk banned',
                bannedAt: new Date(),
                bannedBy: adminId,
              },
            });
          }

          if (action === 'delete') {
            await prisma.profile.deleteMany({ where: { userId: entityId } });
            await prisma.matchRequest.deleteMany({
              where: { OR: [{ requesterId: entityId }, { requesteeId: entityId }] },
            });
            await prisma.contactRequest.deleteMany({
              where: { OR: [{ senderId: entityId }, { receiverId: entityId }] },
            });
            await prisma.photoRequest.deleteMany({
              where: { OR: [{ requesterId: entityId }, { requesteeId: entityId }] },
            });
            await prisma.conversation.deleteMany({
              where: { OR: [{ participant1Id: entityId }, { participant2Id: entityId }] },
            });
            await prisma.message.deleteMany({ where: { senderId: entityId } });

            result = await prisma.user.delete({
              where: { id: entityId },
            });
          }

          if (action === 'approve') {
            result = await prisma.profile.updateMany({
              where: { userId: entityId },
              data: {
                isVerified: true,
                verifiedAt: new Date(),
                verifiedBy: adminId,
              },
            });
          }
        }

        // ================= PROFILES =================
        if (type === 'profiles') {
          if (action === 'delete') {
            result = await prisma.profile.delete({
              where: { id: entityId },
            });
          }

          if (action === 'approve') {
            result = await prisma.profile.update({
              where: { id: entityId },
              data: {
                isVerified: true,
                verifiedAt: new Date(),
                verifiedBy: adminId,
              },
            });
          }
        }

        // ================= REPORTS =================
        if (type === 'reports') {
          if (action === 'delete') {
            result = await prisma.report.delete({
              where: { id: entityId },
            });
          }

          if (action === 'approve') {
            result = await prisma.report.update({
              where: { id: entityId },
              data: {
                status: 'RESOLVED',
                resolvedAt: new Date(),
                resolvedBy: adminId,
                resolution: reason || 'Resolved by admin',
              },
            });
          }
        }

        successCount++;

        results.push({
          id: entityId,
          success: true,
          result,
        });

      } catch (error) {
        failedCount++;

        results.push({
          id,
          success: false,
          error: error.message,
        });

        errors.push({ id, error: error.message });
      }
    }

    // 🧠 LOG ADMIN ACTION
    await logAdminAction(
      adminId,
      'BULK_MODERATION',
      `Bulk ${action} on ${type}`,
      { ids, successCount, failedCount }
    );

    return res.status(200).json(
      new ApiResponse(200, {
        total: ids.length,
        success: successCount,
        failed: failedCount,
        results,
        errors,
      }, 'Bulk operation completed')
    );

  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message)
    );
  }
});

export const bulkModerationController = {
  bulkModeration,
};