import prisma from '../config/database.js';

/**
 * Access Service
 * Computes feature access and permissions for a user based on their plan
 */

export const getUserAccess = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            subscriptions: {
                where: {
                    status: 'ACTIVE',
                    endDate: { gt: new Date() },
                },
                include: { plan: true },
                orderBy: { endDate: 'desc' },
                take: 1
            }
        }
    });

    if (!user) return null;

    const activeSub = user.subscriptions?.[0];
    const plan = activeSub?.plan;
    
    // Default FREE Access (Calculated if no plan OR if role is basic USER)
    const defaultAccess = {
        canChat: true,
        requiresMatchToChat: true,
        messageLimitPerDay: 5,
        canInitiateChat: false,
        canSeeProfileVisitors: false,
        priorityListing: false,
        verifiedBadge: false,
        planName: 'Free',
        isPremium: false,
        canViewContacts: false, // Free users can't view contacts
        photoLimit: 2 // Free users see max 2 photos
    };

    // If it's an admin/super admin, give full access
    if (user.role === 'ADMIN' || user.role === 'SUPER_ADMIN') {
        return {
            ...defaultAccess,
            requiresMatchToChat: false,
            messageLimitPerDay: -1, 
            canInitiateChat: true,
            canSeeProfileVisitors: true,
            priorityListing: true,
            verifiedBadge: true,
            planName: 'Admin',
            isPremium: true,
            canViewContacts: true,
            photoLimit: -1
        };
    }

    if (!plan) {
        return defaultAccess;
    }

    /**
     * TIER-BASED LOGIC (Data Driven)
     * We use the 'roleToAssign' field from the plan as the source of truth for the tier.
     * Premium features (visibility, badge, etc.) are read directly from the plan's DB flags.
     */
    const isPremiumTier = plan.roleToAssign === 'PREMIUM_USER';
    const isBasicTier = plan.roleToAssign === 'BASIC_USER';

    return {
        ...defaultAccess,
        // Rules based on Role Tier
        requiresMatchToChat: !isPremiumTier, // Only Premium tier can chat with anyone
        canInitiateChat: isPremiumTier,      // Only Premium tier can initiate chat
        canViewContacts: isPremiumTier,      // Premium has unrestricted contact viewing
        photoLimit: isPremiumTier ? -1 : 5,  // Basic users see 5, Premium unlimited
        
        // Limits & Features read directly from DB Plan object
        messageLimitPerDay: plan.maxMessagesSend === 0 ? -1 : plan.maxMessagesSend,
        canSeeProfileVisitors: plan.canSeeProfileVisitors || false,
        priorityListing: plan.priorityListing || false,
        verifiedBadge: plan.verifiedBadge || false,
        
        // Identity
        planName: plan.name,
        isPremium: isPremiumTier || isBasicTier,
    };
};

export default {
    getUserAccess
};
