import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { notificationService } from '../services/notification.service.js';

export const adminNotificationController = {
    sendBulk: asyncHandler(async (req, res) => {
        const { title, body, imageUrl, target } = req.body;

        if (!title || !body) {
            throw new ApiError(400, 'Title and Body are required');
        }

        let query = { isActive: true };
        if (target === 'PREMIUM') {
            query.OR = [
                { role: { in: ['PREMIUM_USER', 'BASIC_USER', 'VIP_USER'] } },
                { subscriptions: { some: { status: 'ACTIVE', endDate: { gt: new Date() } } } }
            ];
        } else if (target === 'FREE') {
            query.AND = [
                { role: 'USER' },
                { subscriptions: { none: { status: 'ACTIVE', endDate: { gt: new Date() } } } }
            ];
        } else if (target === 'INACTIVE') {
          // Users who haven't logged in for 30 days
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
          query.lastLoginAt = { lt: thirtyDaysAgo };
        }

        const users = await prisma.user.findMany({
            where: query,
            select: { id: true, fcmTokens: true }
        });

        // 1. Create broadcast record
        const broadcast = await prisma.broadcast.create({
          data: {
            title,
            body,
            imageUrl,
            target: target || 'EVERYONE',
            status: 'SENDING'
          }
        });

        // 2. Loop and send - In a real production app, this should be a background job
        // Collect all tokens
        const allTokens = users.flatMap(u => u.fcmTokens.map(t => t.token));
        
        if (allTokens.length > 0) {
            // Using the multicast helper from notificationService
            await notificationService.sendPushNotification(
                allTokens,
                {
                    title,
                    body,
                    imageUrl,
                    data: { 
                      type: 'SYSTEM_BROADCAST',
                      broadcastId: String(broadcast.id)
                    },
                    notificationType: 'SYSTEM_BROADCAST'
                }
            );

            // Update record as sent
            await prisma.broadcast.update({
              where: { id: broadcast.id },
              data: { status: 'SENT', sentCount: allTokens.length, sentAt: new Date() }
            });
        } else {
          await prisma.broadcast.update({
            where: { id: broadcast.id },
            data: { status: 'FAILED', statusNote: 'No target devices found' }
          });
        }

        return res.json(new ApiResponse(200, { sentCount: allTokens.length }, 'Bulk notification process completed'));
    }),

    getHistory: asyncHandler(async (req, res) => {
        const broadcasts = await prisma.broadcast.findMany({
            orderBy: { createdAt: 'desc' },
            take: 20
        });
        return res.json(new ApiResponse(200, broadcasts, 'History fetched'));
    })
};
