import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { hasActivePaidSubscription, hasUnlimitedPremiumRole } from '../utils/premium.helper.js';

const getViewerSelect = () => ({
  id: true,
  role: true,
  subscriptions: {
    where: {
      status: 'ACTIVE',
      endDate: { gt: new Date() },
    },
    select: {
      id: true,
      status: true,
      endDate: true,
      contactViewsUsed: true,
      plan: true,
    },
    orderBy: { endDate: 'desc' },
  },
});

const ownerContactSelect = {
  phone: true,
  email: true,
  profile: {
    select: {
      alternatePhone: true,
      whatsappNumber: true,
    },
  },
};

export const canViewContactInfo = async (viewerId, profileOwnerId) => {
  if (viewerId === profileOwnerId) {
    return { canView: true, reason: 'own_profile' };
  }

  try {
    const viewer = await prisma.user.findUnique({
      where: { id: viewerId },
      select: getViewerSelect(),
    });

    if (!viewer) {
      return { canView: false, reason: 'viewer_not_found' };
    }

    if (hasUnlimitedPremiumRole(viewer)) {
      return { canView: true, reason: 'premium_access' };
    }

    if (viewer.role === 'PREMIUM_USER' || viewer.role === 'BASIC_USER') {
      return { canView: true, reason: 'premium_access' };
    }

    if (hasActivePaidSubscription(viewer)) {
      return { canView: true, reason: 'premium_access' };
    }

    const acceptedMatch = await prisma.matchRequest.findFirst({
      where: {
        status: 'ACCEPTED',
        OR: [
          { senderId: viewerId, receiverId: profileOwnerId },
          { senderId: profileOwnerId, receiverId: viewerId },
        ],
      },
      select: { id: true },
    });

    if (acceptedMatch) {
      return { canView: true, reason: 'accepted_match' };
    }

    return { canView: false, reason: 'premium_or_match_required' };
  } catch (error) {
    logger.error('Error checking contact visibility:', error);
    return { canView: false, reason: 'error' };
  }
};

export const getContactInfoIfAllowed = async (viewerId, profileOwnerId) => {
  try {
    const visibility = await canViewContactInfo(viewerId, profileOwnerId);

    if (!visibility.canView) {
      return {
        allowed: false,
        reason: visibility.reason,
        message: getVisibilityMessage(visibility.reason),
        contactInfo: null,
      };
    }

    const viewer = await prisma.user.findUnique({
      where: { id: viewerId },
      select: getViewerSelect(),
    });

    const owner = await prisma.user.findUnique({
      where: { id: profileOwnerId },
      select: ownerContactSelect,
    });

    if (!owner) {
      return {
        allowed: false,
        reason: 'profile_not_found',
        message: 'Profile not found',
        contactInfo: null,
      };
    }

    const activeSubscription = viewer?.subscriptions?.[0] || null;
    const hasUnlimitedAccess = viewer ? hasUnlimitedPremiumRole(viewer) : false;

    if (
      visibility.reason === 'premium_access' &&
      activeSubscription &&
      !hasUnlimitedAccess &&
      activeSubscription.plan?.maxContactViews > 0
    ) {
      const maxViews = activeSubscription.plan.maxContactViews;
      const remainingViews = maxViews - activeSubscription.contactViewsUsed;

      if (remainingViews <= 0) {
        return {
          allowed: false,
          reason: 'contact_limit_reached',
          message: `You have used all ${maxViews} contact views in your plan.`,
          contactInfo: null,
          remainingViews: 0,
          maxViews,
        };
      }

      await prisma.userSubscription.update({
        where: { id: activeSubscription.id },
        data: { contactViewsUsed: { increment: 1 } },
      });

      // Use updateMany to avoid P2025 if profile record is missing
      await prisma.profile.updateMany({
        where: { userId: profileOwnerId },
        data: { contactViewCount: { increment: 1 } },
      });

      return {
        allowed: true,
        reason: visibility.reason,
        contactInfo: {
          phone: owner.phone,
          email: owner.email,
          alternatePhone: owner.profile?.alternatePhone || null,
          whatsappNumber: owner.profile?.whatsappNumber || null,
        },
        remainingViews: remainingViews - 1,
        maxViews,
      };
    }

    // Use updateMany to avoid P2025 if profile record is missing
    await prisma.profile.updateMany({
      where: { userId: profileOwnerId },
      data: { contactViewCount: { increment: 1 } },
    });

    return {
      allowed: true,
      reason: visibility.reason,
      contactInfo: {
        phone: owner.phone,
        email: owner.email,
        alternatePhone: owner.profile?.alternatePhone || null,
        whatsappNumber: owner.profile?.whatsappNumber || null,
      },
    };
  } catch (error) {
    logger.error('Error in getContactInfoIfAllowed:', error);
    return {
      allowed: false,
      reason: 'error',
      message: 'Unable to load contact information. Please try again.',
      contactInfo: null,
    };
  }
};

const getVisibilityMessage = (reason) => {
  const messages = {
    premium_or_match_required: 'Contact details unlock only for premium users or accepted matches.',
    contact_limit_reached: 'Your current subscription has no remaining contact views.',
    viewer_not_found: 'Unable to verify your account.',
    error: 'Unable to check contact visibility right now. Please try again.',
  };

  return messages[reason] || 'Contact information is hidden';
};

export const maskContactInfo = (contactInfo) => {
  if (!contactInfo) return null;

  const maskPhone = (phone) => {
    if (!phone || phone.length < 6) return 'XXXXXXXXXX';
    return phone.slice(0, 2) + 'XXXXX' + phone.slice(-3);
  };

  const maskEmail = (email) => {
    if (!email) return null;
    const [name, domain] = email.split('@');
    if (!name || !domain) return 'xxx@xxx.com';
    return name[0] + '***@' + domain;
  };

  return {
    phone: maskPhone(contactInfo.phone),
    email: maskEmail(contactInfo.email),
    alternatePhone: contactInfo.alternatePhone ? maskPhone(contactInfo.alternatePhone) : null,
    whatsappNumber: contactInfo.whatsappNumber ? maskPhone(contactInfo.whatsappNumber) : null,
    isMasked: true,
  };
};

export default {
  canViewContactInfo,
  getContactInfoIfAllowed,
  maskContactInfo,
};
