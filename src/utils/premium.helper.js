import { USER_ROLES } from './constants.js';
/**
 * Helper to determine user's premium status and feature limits
 * based on their active subscription, abstracting away hardcoded roles.
 */

/**
 * Checks if a user is considered "premium" (has paid access).
 * This eliminates the need to hardcode specific roles (like PREMIUM_USER, BASIC_USER, VIP_USER)
 * across multiple service files.
 * @param {Object} user - User object containing role and/or subscriptions
 * @returns {boolean}
 */
export const hasPremiumAccess = (user) => {
    if (!user) return false;

    // 1. Check if user has an explicitly granted premium role (for lifetime access or admins)
    const premiumRoles = [USER_ROLES.PREMIUM_USER, USER_ROLES.BASIC_USER, USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN];
    if (premiumRoles.includes(user.role)) {
        return true;
    }

    // 2. Check if user has an active subscription
    if (user.subscriptions && Array.isArray(user.subscriptions)) {
        const activeSub = user.subscriptions.find(sub => 
            sub.status === 'ACTIVE' && new Date(sub.endDate) > new Date()
        );
        if (activeSub) return true;
    }

    return false;
};

/**
 * Checks a specific feature capability based on the active subscription.
 * (For future use when limiting specific features like 'canSeeProfileVisitors')
 */
export const getSubscriptionFeature = (user, featureKey) => {
    if (!user || !user.subscriptions) return null;
    
    const activeSub = user.subscriptions.find(sub => 
        sub.status === 'ACTIVE' && new Date(sub.endDate) > new Date()
    );

    if (activeSub && activeSub.plan && activeSub.plan[featureKey] !== undefined) {
        return activeSub.plan[featureKey];
    }
    return null;
};
