/**
 * Subscription Cron Jobs
 * Handles scheduled tasks for subscription management:
 * - Expiry reminders (3 days, 1 day, same day)
 * - Expired subscription handling
 */

import cron from 'node-cron';
import prisma from '../config/database.js';
import { notificationService } from '../services/notification.service.js';
import { NOTIFICATION_TYPES, SUBSCRIPTION_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';
import {
    activateNextQueuedSubscription,
    reconcileUserRole,
} from './subscriptionLifecycle.service.js';

/**
 * Send subscription expiry reminders
 * Run this daily (e.g., at 9 AM)
 */
export const sendExpiryReminders = async () => {
    logger.info('Running subscription expiry reminder job...');

    try {
        const now = new Date();

        // Define reminder intervals (in days)
        const reminders = [
            { days: 3, title: 'Subscription Expiring Soon ⏰', message: 'Your premium subscription will expire in 3 days. Renew now to continue enjoying premium features!' },
            { days: 1, title: 'Last Day Reminder! ⚠️', message: 'Your premium subscription expires tomorrow! Renew now to avoid losing premium features.' },
            { days: 0, title: 'Subscription Expires Today! 🚨', message: 'Your premium subscription expires today. Renew immediately to keep your premium benefits!' },
        ];

        let totalNotificationsSent = 0;

        for (const reminder of reminders) {
            const targetDate = new Date(now);
            targetDate.setDate(targetDate.getDate() + reminder.days);

            // Set to start and end of target day
            const dayStart = new Date(targetDate);
            dayStart.setHours(0, 0, 0, 0);

            const dayEnd = new Date(targetDate);
            dayEnd.setHours(23, 59, 59, 999);

            // Find subscriptions expiring on target date
            const expiringSubscriptions = await prisma.userSubscription.findMany({
                where: {
                    status: SUBSCRIPTION_STATUS.ACTIVE,
                    endDate: {
                        gte: dayStart,
                        lte: dayEnd,
                    },
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            profile: { select: { firstName: true } },
                        },
                    },
                    plan: {
                        select: { name: true },
                    },
                },
            });

            logger.info(`Found ${expiringSubscriptions.length} subscriptions expiring in ${reminder.days} days`);

            // Send notifications
            for (const subscription of expiringSubscriptions) {
                await notificationService.createNotification({
                    userId: subscription.userId,
                    type: NOTIFICATION_TYPES.SUBSCRIPTION_EXPIRING,
                    title: reminder.title,
                    message: reminder.message,
                    data: {
                        type: 'SUBSCRIPTION_EXPIRING',
                        daysRemaining: String(reminder.days),
                        subscriptionId: String(subscription.id),
                        planName: subscription.plan?.name || 'Premium',
                    },
                });

                totalNotificationsSent++;
            }
        }

        logger.info(`Subscription expiry reminder job completed. Sent ${totalNotificationsSent} notifications.`);
        return { success: true, notificationsSent: totalNotificationsSent };

    } catch (error) {
        logger.error('Error in sendExpiryReminders:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Mark expired subscriptions and downgrade users
 * Run this daily (e.g., at midnight)
 */
export const handleExpiredSubscriptions = async () => {
    logger.info('Running expired subscription handler...');

    try {
        const now = new Date();

        // Find expired active subscriptions
        const expiredSubscriptions = await prisma.userSubscription.findMany({
            where: {
                status: SUBSCRIPTION_STATUS.ACTIVE,
                endDate: {
                    lt: now,
                },
            },
        });

        logger.info(`Found ${expiredSubscriptions.length} expired subscriptions`);

        let processedCount = 0;

        for (const subscription of expiredSubscriptions) {
            try {
                // 1. Mark subscription as expired
                await prisma.userSubscription.update({
                    where: { id: subscription.id },
                    data: { status: SUBSCRIPTION_STATUS.EXPIRED },
                });

                const queuedSub = await activateNextQueuedSubscription(subscription.userId, new Date());

                if (queuedSub) {
                    logger.info(`Activated queued subscription ${queuedSub.id} for user ${subscription.userId}`);
                    
                    // Notify user
                    await notificationService.createNotification({
                        userId: subscription.userId,
                        type: NOTIFICATION_TYPES.SUBSCRIPTION_ACTIVATED,
                        title: 'New Plan Activated! 🚀',
                        message: `Your queued ${queuedSub.plan.name} plan is now active. Enjoy your benefits!`,
                        data: { type: 'SUBSCRIPTION_ACTIVATED', subscriptionId: String(queuedSub.id) },
                    });
                } else {
                    // 3. Downgrade Logic (if no active or queued plans left)
                    await reconcileUserRole(subscription.userId);

                    // Send expiration notification
                    await notificationService.createNotification({
                        userId: subscription.userId,
                        type: NOTIFICATION_TYPES.SUBSCRIPTION_EXPIRED,
                        title: 'Subscription Expired 😢',
                        message: 'Your premium subscription has expired. Renew now to restore your premium features!',
                        data: {
                            type: 'SUBSCRIPTION_EXPIRED',
                            subscriptionId: String(subscription.id),
                        },
                    });
                }

                processedCount++;
            } catch (err) {
                logger.error(`Error processing expired subscription ${subscription.id}:`, err);
            }
        }

        logger.info(`Expired subscription handler completed. Processed ${processedCount} subscriptions.`);
        return { success: true, processedCount };

    } catch (error) {
        logger.error('Error in handleExpiredSubscriptions:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Mark expired interest requests as EXPIRED
 * Run this daily (e.g., at midnight)
 */
export const handleExpiredInterests = async () => {
    logger.info('Running expired interest handler...');

    try {
        const now = new Date();

        // Find PENDING interests where expiresAt has passed
        const result = await prisma.matchRequest.updateMany({
            where: {
                status: 'PENDING',
                expiresAt: {
                    lt: now,
                    not: null, // Only if expiresAt is set
                },
            },
            data: {
                status: 'EXPIRED',
            },
        });

        logger.info(`Expired interest handler completed. Marked ${result.count} interests as EXPIRED.`);
        return { success: true, expiredCount: result.count };

    } catch (error) {
        logger.error('Error in handleExpiredInterests:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Send random engagement notifications to active users
 * Run daily at 6:00 PM
 */
export const sendRandomEngagementNotifications = async () => {
    logger.info('Running engagement notification job...');
    try {
        const usersWithTokens = await prisma.user.findMany({
            where: {
                fcmTokens: {
                    some: { isActive: true }
                }
            },
            select: {
                id: true,
                profile: { select: { firstName: true } }
            }
        });

        logger.info(`Found ${usersWithTokens.length} users with active FCM tokens for engagement`);

        const engagementMessages = [
            { title: "नया मैच इंतज़ार कर रहा है! 💖", message: "आपके प्रोफ़ाइल के लिए कुछ नए रिश्ते आए हैं। अभी चेक करें!" },
            { title: "रिश्ता तय करने का सही समय! 💍", message: "आज ही नए लोगों से बातचीत शुरू करें और अपना जीवनसाथी चुनें।" },
            { title: "छत्तीसगढ़ के सबसे भरोसेमंद ऐप पर! 🌟", message: "सैकड़ों परिवार हमसे जुड़े हैं। अपना सही जीवनसाथी ढूंढने के लिए प्रोफ़ाइल अपडेट करें।" },
            { title: "क्या आपने आज के मैच देखे? 👀", message: "आपकी पसंद के अनुसार आज कुछ नए प्रोफाइल जोड़े गए हैं। तुरंत देखें!" },
            { title: "शुभ विवाह की ओर बढ़ाएं कदम! 🕊️", message: "अपना संपूर्ण प्रोफ़ाइल विवरण पूरा करें ताकि लोग आपसे संपर्क कर सकें।" },
            { title: "अनलॉक करें प्रीमियम फीचर्स! ✨", message: "सीधे चैट और फोन कॉल करने के लिए प्रीमियम प्लान पर अपग्रेड करें।" }
        ];

        let sentCount = 0;
        for (const user of usersWithTokens) {
            // Select random message
            const randomIndex = Math.floor(Math.random() * engagementMessages.length);
            const msgTemplate = engagementMessages[randomIndex];
            
            const namePrefix = user.profile?.firstName ? `${user.profile.firstName}, ` : '';
            const personalizedMessage = `${namePrefix}${msgTemplate.message}`;

            await notificationService.createNotification({
                userId: user.id,
                type: NOTIFICATION_TYPES.SYSTEM_BROADCAST || 'SYSTEM_BROADCAST',
                title: msgTemplate.title,
                message: personalizedMessage,
                data: {
                    type: 'SYSTEM_BROADCAST',
                }
            });
            sentCount++;
        }

        logger.info(`Engagement notification job completed. Dispatched to ${sentCount} users.`);
        return { success: true, sentCount };
    } catch (error) {
        logger.error('Error in sendRandomEngagementNotifications:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Initialize cron jobs
 * Call this on server startup
 */
export const initSubscriptionCronJobs = () => {
    // Run expiry reminders daily at 9:00 AM
    cron.schedule('0 9 * * *', () => {
        sendExpiryReminders();
    });

    // Run engagement notifications daily at 6:00 PM
    cron.schedule('0 18 * * *', () => {
        sendRandomEngagementNotifications();
    });

    // Run expired subscriptions & interests handler every hour at minute 0
    cron.schedule('0 * * * *', () => {
        handleExpiredSubscriptions();
        handleExpiredInterests();
    });

    // Run once on startup (after 5 seconds delay to let server fully start)
    setTimeout(() => {
        handleExpiredSubscriptions();
        handleExpiredInterests();
    }, 5000);

    logger.info('Subscription node-cron jobs successfully initialized!');
};

export default {
    sendExpiryReminders,
    handleExpiredSubscriptions,
    handleExpiredInterests,
    sendRandomEngagementNotifications,
    initSubscriptionCronJobs,
};
