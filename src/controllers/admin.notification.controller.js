import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { notificationService } from '../services/notification.service.js';

export const adminNotificationController = {
    sendBulk: asyncHandler(async (req, res) => {
        const { title, body, imageUrl, target } = req.body;

        let query = { isActive: true };
        if (target === 'PREMIUM') query.role = 'PREMIUM_USER';
        if (target === 'FREE') query.role = 'USER';
        // Add more targeting logic as needed

        const users = await prisma.user.findMany({
            where: query,
            select: { id: true, fcmTokens: true }
        });

        // Loop and send - In a real production app, this should be a background job
        const results = await Promise.all(users.map(async (user) => {
            if (user.fcmTokens.length > 0) {
                return notificationService.sendPushNotification(
                    user.fcmTokens.map(t => t.token),
                    {
                        notification: { title, body, image: imageUrl },
                        data: { type: 'SYSTEM_BROADCAST' }
                    }
                );
            }
            return null;
        }));

        return res.json(new ApiResponse(200, { sentCount: results.filter(r => r).length }, 'Bulk notification process started'));
    }),

    getHistory: asyncHandler(async (req, res) => {
        // Since we don't have a systemic "BroadcastHistory" model yet, 
        // we can fetch recent notifications of type SYSTEM_ALERT if we stored them individually,
        // or just return success.
        // For now, let's just return a placeholder or implement a simpleBroadcast table later.
        return res.json(new ApiResponse(200, [], 'History fetched'));
    })
};
