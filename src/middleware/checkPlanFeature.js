/**
 * Plan Feature Check Middleware
 * Checks if user's subscription plan has specific features enabled
 * Differentiates between Basic (₹299) and Premium (₹999) plans
 */

import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';
import { hasPremiumAccess } from '../utils/premium.helper.js';

/**
 * Check if user's subscription plan has a specific feature
 * @param {string} featureName - The feature to check (e.g., 'canSeeProfileVisitors', 'incognitoMode')
 * @returns {Function} Express middleware
 */
export const requirePlanFeature = (featureName) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
            }

            // [FIX] Allow ADMIN and explicit PREMIUM_USER role to bypass plan checks
            // This ensures admins can use all features even without an active Subscription record
            if (req.user.role === 'ADMIN' || req.user.role === 'SUPER_ADMIN') {
                return next();
            }

            // Get active subscription with plan details
            const activeSubscription = await prisma.userSubscription.findFirst({
                where: {
                    userId: req.user.id,
                    status: 'ACTIVE',
                    endDate: { gt: new Date() },
                },
                orderBy: {
                    endDate: 'desc',
                },
                include: {
                    plan: true,
                },
            });

            if (!activeSubscription) {
                // Check if user has a premium role that doesn't require a subscription record (Lifetime)
                if (hasPremiumAccess(req.user)) {
                    return next();
                }

                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    'Active subscription required. Subscribe to access this feature.',
                    { requiresSubscription: true }
                ));
            }

            // Check if the plan has the required feature
            const plan = activeSubscription.plan;
            if (!plan[featureName]) {
                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    `This feature requires ${plan.name === 'Basic Plan' ? 'Premium' : 'a higher'} plan. Upgrade to access.`,
                    {
                        currentPlan: plan.name,
                        requiredFeature: featureName,
                        upgradeRequired: true,
                    }
                ));
            }

            // Feature is available, attach subscription to request
            req.subscription = activeSubscription;
            next();
        } catch (error) {
            logger.error('Plan feature check error:', error.message);
            return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking plan features'));
        }
    };
};

/**
 * Check and enforce usage limits based on subscription plan
 * @param {'contactViews' | 'messages' | 'interests'} limitType - The type of limit to check
 * @returns {Function} Express middleware
 */
export const checkPlanLimit = (limitType) => {
    const limitMap = {
        contactViews: { max: 'maxContactViews', used: 'contactViewsUsed' },
        messages: { max: 'maxMessagesSend', used: 'messagesUsed' },
        interests: { max: 'maxInterestsSend', used: 'interestsUsed' },
    };

    return async (req, res, next) => {
        try {
            if (!req.user) {
                return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
            }

            // [FIX] Admin bypass for limits
            if (req.user.role === 'ADMIN' || req.user.role === 'SUPER_ADMIN') {
                return next();
            }

            // Get active subscription with plan details
            const activeSubscription = await prisma.userSubscription.findFirst({
                where: {
                    userId: req.user.id,
                    status: 'ACTIVE',
                    endDate: { gt: new Date() },
                },
                orderBy: {
                    endDate: 'desc',
                },
                include: {
                    plan: true,
                },
            });

            if (!activeSubscription) {
                // If they have premium role, they get unlimited Everything (ADMIN/PREMIUM_USER)
                if (hasPremiumAccess(req.user)) {
                    req.remaining = 'unlimited';
                    return next();
                }

                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    'Active subscription required to access this feature.',
                    { requiresSubscription: true }
                ));
            }

            const { max, used } = limitMap[limitType];
            const maxLimit = activeSubscription.plan[max];
            const currentUsage = activeSubscription[used];

            // 0 means unlimited
            if (maxLimit !== 0 && currentUsage >= maxLimit) {
                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    `You have reached your ${limitType} limit (${maxLimit}). Upgrade to Premium for unlimited access.`,
                    {
                        currentPlan: activeSubscription.plan.name,
                        limitType,
                        used: currentUsage,
                        max: maxLimit,
                        upgradeRequired: true,
                    }
                ));
            }

            // Attach subscription and remaining count to request
            req.subscription = activeSubscription;
            req.remaining = maxLimit === 0 ? 'unlimited' : maxLimit - currentUsage;
            next();
        } catch (error) {
            logger.error('Plan limit check error:', error.message);
            return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking plan limits'));
        }
    };
};

/**
 * Increment usage counter after successful action
 * Call this AFTER the action succeeds
 * @param {'contactViews' | 'messages' | 'interests'} limitType - The type of usage to increment
 */
export const incrementUsage = async (subscriptionId, limitType) => {
    // If no subscriptionId (due to admin bypass), just return
    if (!subscriptionId) return;

    const usedField = {
        contactViews: 'contactViewsUsed',
        messages: 'messagesUsed',
        interests: 'interestsUsed',
    }[limitType];

    if (!usedField) return;

    try {
        await prisma.userSubscription.update({
            where: { id: subscriptionId },
            data: {
                [usedField]: { increment: 1 },
            },
        });
    } catch (e) {
        logger.error(`Failed to increment usage for sub ${subscriptionId}:`, e.message);
    }
};

/**
 * Get user's subscription details with usage information
 * @param {number} userId - User ID
 * @returns {Object|null} Subscription with plan and usage details
 */
export const getUserSubscriptionDetails = async (userId) => {
    const subscription = await prisma.userSubscription.findFirst({
        where: {
            userId,
            status: 'ACTIVE',
            endDate: { gt: new Date() },
        },
        orderBy: {
            endDate: 'desc',
        },
        include: {
            plan: true,
        },
    });

    if (!subscription) {
        // Fallback check for Role-based premium
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (hasPremiumAccess(user)) {
             return {
                planName: 'Premium (Lifetime)',
                planSlug: 'premium-lifetime',
                endDate: null,
                features: {
                    canSeeProfileVisitors: true,
                    incognitoMode: true,
                    priorityListing: true,
                    verifiedBadge: true,
                },
                limits: {
                    contactViews: { max: 'unlimited', used: 0, remaining: 'unlimited' },
                    messages: { max: 'unlimited', used: 0, remaining: 'unlimited' },
                    interests: { max: 'unlimited', used: 0, remaining: 'unlimited' },
                },
            };
        }
        return null;
    }

    const plan = subscription.plan;
    return {
        planName: plan.name,
        planSlug: plan.slug,
        endDate: subscription.endDate,
        features: {
            canSeeProfileVisitors: plan.canSeeProfileVisitors,
            incognitoMode: plan.incognitoMode,
            priorityListing: plan.priorityListing,
            verifiedBadge: plan.verifiedBadge,
        },
        limits: {
            contactViews: {
                max: plan.maxContactViews || 'unlimited',
                used: subscription.contactViewsUsed,
                remaining: plan.maxContactViews === 0 ? 'unlimited' : plan.maxContactViews - subscription.contactViewsUsed,
            },
            messages: {
                max: plan.maxMessagesSend || 'unlimited',
                used: subscription.messagesUsed,
                remaining: plan.maxMessagesSend === 0 ? 'unlimited' : plan.maxMessagesSend - subscription.messagesUsed,
            },
            interests: {
                max: plan.maxInterestsSend || 'unlimited',
                used: subscription.interestsUsed,
                remaining: plan.maxInterestsSend === 0 ? 'unlimited' : plan.maxInterestsSend - subscription.interestsUsed,
            },
        },
    };
};

export default {
    requirePlanFeature,
    checkPlanLimit,
    incrementUsage,
    getUserSubscriptionDetails,
};
