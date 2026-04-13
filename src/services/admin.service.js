import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
// ADDED: Imports for new functions
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';

/**
 * Get dashboard statistics
 */
const getDashboardStats = async () => {
  try {
    // Helper to safely count even if table doesn't exist yet
    const safeCount = async (model, where = {}) => {
      try {
        return await prisma[model].count({ where });
      } catch (err) {
        logger.warn(`SafeCount failed for ${model}, returning 0. Error: ${err.message}`);
        return 0;
      }
    };

    const [
      totalUsers,
      totalProfiles,
      totalMatches,
      totalMessages,
      totalPayments,
      pendingReports,
      pendingStories,
      activeSubscriptions,
    ] = await Promise.all([
      safeCount('user'),
      safeCount('profile'),
      safeCount('matchRequest'),
      safeCount('message'),
      safeCount('payment'),
      safeCount('report', { status: 'PENDING' }),
      safeCount('successStory', { status: 'PENDING' }),
      safeCount('userSubscription', { status: 'ACTIVE', endDate: { gt: new Date() } }),
    ]);

    return {
      totalUsers,
      totalProfiles,
      totalMatches,
      totalMessages,
      totalPayments,
      pendingReports, // ADDED
      pendingStories, // NEW
      activeSubscriptions, // NEW
    };
  } catch (error) {
    logger.error('Error in getDashboardStats:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to retrieve dashboard stats'
    );
  }
};

/**
 * Clean up expired refresh tokens
 */
const cleanupExpiredTokens = async () => {
  try {
    const result = await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
    logger.info(`Admin cleanup: ${result.count} expired tokens deleted.`);
    return result.count;
  } catch (error) {
    logger.error('Error in cleanupExpiredTokens:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to clean up tokens'
    );
  }
};

/**
 * Get recent users
 */
const getRecentUsers = async (limit = 10) => {
  try {
    return await prisma.user.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        profile: true,
      },
    });
  } catch (error) {
    logger.error('Error in getRecentUsers:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to retrieve recent users'
    );
  }
};

/**
 * Get recent matches
 */
const getRecentMatches = async (limit = 10) => {
  try {
    return await prisma.matchRequest.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        sender: {
          include: { profile: true },
        },
        receiver: {
          include: { profile: true },
        },
      },
    });
  } catch (error) {
    logger.error('Error in getRecentMatches:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to retrieve recent matches'
    );
  }
};

/**
 * [NEW] Get all payments (paginated, filterable, searchable)
 * @param {Object} query - Validated query params
 * @returns {Promise<Object>} Paginated list of payments with summary
 */
const getPayments = async (query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const { status, search } = query;

    const normalizedSearch = search?.trim();
    const summaryWhere = {};

    if (normalizedSearch) {
      summaryWhere.OR = [
        { transactionId: { contains: normalizedSearch, mode: 'insensitive' } },
        { orderId: { contains: normalizedSearch, mode: 'insensitive' } },
        { razorpayOrderId: { contains: normalizedSearch, mode: 'insensitive' } },
        { razorpayPaymentId: { contains: normalizedSearch, mode: 'insensitive' } },
        { paymentMethod: { contains: normalizedSearch, mode: 'insensitive' } },
        { paymentGateway: { contains: normalizedSearch, mode: 'insensitive' } },
        {
          user: {
            is: {
              OR: [
                { email: { contains: normalizedSearch, mode: 'insensitive' } },
                { phone: { contains: normalizedSearch } },
                {
                  profile: {
                    is: {
                      OR: [
                        { firstName: { contains: normalizedSearch, mode: 'insensitive' } },
                        { lastName: { contains: normalizedSearch, mode: 'insensitive' } },
                        { profileId: { contains: normalizedSearch, mode: 'insensitive' } },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      ];
    }

    const where = {
      ...summaryWhere,
      ...(status ? { status } : {}),
    };

    const [
      payments,
      total,
      totalPayments,
      completedPayments,
      pendingPayments,
      failedPayments,
      refundedPayments,
      cancelledPayments,
      completedRevenue,
    ] = await Promise.all([
      prisma.payment.findMany({
        where,
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              phone: true,
              profile: {
                select: {
                  firstName: true,
                  lastName: true,
                  profileId: true,
                  city: true,
                  state: true,
                },
              },
            },
          },
          subscription: {
            include: {
              plan: {
                select: {
                  id: true,
                  name: true,
                  slug: true,
                  duration: true,
                  price: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.payment.count({ where }),
      prisma.payment.count({ where: summaryWhere }),
      prisma.payment.count({ where: { ...summaryWhere, status: 'COMPLETED' } }),
      prisma.payment.count({ where: { ...summaryWhere, status: 'PENDING' } }),
      prisma.payment.count({ where: { ...summaryWhere, status: 'FAILED' } }),
      prisma.payment.count({ where: { ...summaryWhere, status: 'REFUNDED' } }),
      prisma.payment.count({ where: { ...summaryWhere, status: 'CANCELLED' } }),
      prisma.payment.aggregate({
        where: { ...summaryWhere, status: 'COMPLETED' },
        _sum: {
          amount: true,
        },
      }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      payments,
      pagination,
      summary: {
        totalPayments,
        completedPayments,
        pendingPayments,
        failedPayments,
        refundedPayments,
        cancelledPayments,
        completedRevenue: Number(completedRevenue._sum.amount || 0),
      },
    };
  } catch (error) {
    logger.error('Error in getPayments:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to retrieve payments'
    );
  }
};

// --- ADDED FOR REPORTS ---

/**
 * [NEW] Get all reports (paginated, filterable)
 * @param {Object} query - Validated query params (page, limit, status)
 * @returns {Promise<Object>} Paginated list of reports
 */
const getReports = async (query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const { status } = query;

    const where = {};
    if (status) {
      where.status = status;
    }

    const [reports, total] = await Promise.all([
      prisma.report.findMany({
        where,
        skip,
        take: limit,
        include: {
          reporter: { select: { id: true, email: true, profile: { select: { firstName: true, lastName: true } } } },
          reportedUser: { select: { id: true, email: true, profile: { select: { firstName: true, lastName: true } } } },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.report.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { reports, pagination };

  } catch (error) {
    logger.error('Error in getReports:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve reports');
  }
};

/**
 * [NEW] Get a single report by ID with full details
 * @param {number} reportId - The ID of the report
 * @returns {Promise<Object>} The report object
 */
const getReportById = async (reportId) => {
  try {
    const report = await prisma.report.findUnique({
      where: { id: reportId },
      include: {
        reporter: { include: { profile: true } },
        reportedUser: { include: { profile: true } },
      },
    });

    if (!report) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Report not found');
    }

    // Parse the evidence string into an array
    let evidenceArray = [];
    if (report.evidence) {
      try {
        evidenceArray = JSON.parse(report.evidence);
      } catch (e) {
        logger.warn(`Failed to parse evidence JSON for report ${reportId}`);
      }
    }

    return { ...report, evidence: evidenceArray };
  } catch (error) {
    logger.error('Error in getReportById:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve report');
  }
};

/**
 * [NEW] Update a report's status and add notes
 * @param {number} reportId - The ID of the report
 * @param {Object} data - Validated update data (status, reviewNote, actionTaken)
 * @returns {Promise<Object>} The updated report
 */
const updateReportStatus = async (reportId, data) => {
  try {
    const report = await prisma.report.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Report not found');
    }

    const updatedReport = await prisma.report.update({
      where: { id: reportId },
      data: {
        ...data,
        reviewedAt: new Date(),
      },
    });

    // TODO: Add logic here to ban the user if status is 'RESOLVED' and action is 'BAN'
    // e.g., if (data.actionTaken === 'BAN_USER') { ... }

    logger.info(`Admin updated report ${reportId} to status ${data.status}`);
    return updatedReport;
  } catch (error) {
    logger.error('Error in updateReportStatus:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update report');
  }
};

// --- SUBSCRIPTION PLAN MANAGEMENT ---

/**
 * [NEW] Get all subscription plans
 * @returns {Promise<Array>} List of all plans
 */
const getPlans = async () => {
  try {
    const plans = await prisma.subscriptionPlan.findMany({
      orderBy: { displayOrder: 'asc' },
    });

    // Calculate effective price for each plan
    return plans.map(plan => {
      let effectivePrice = parseFloat(plan.price);

      // Check if discount is valid
      if (plan.discountPercentage > 0) {
        const isDiscountValid = !plan.discountValidUntil || new Date(plan.discountValidUntil) > new Date();
        if (isDiscountValid) {
          effectivePrice = effectivePrice * (1 - plan.discountPercentage / 100);
        }
      }

      return {
        ...plan,
        durationDays: plan.duration,
        effectivePrice: Math.round(effectivePrice),
        hasActiveDiscount: plan.discountPercentage > 0 && (!plan.discountValidUntil || new Date(plan.discountValidUntil) > new Date()),
      };
    });
  } catch (error) {
    logger.error('Error in getPlans:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve plans');
  }
};

/**
 * [NEW] Update plan discount (Admin)
 * @param {number} planId - The ID of the plan
 * @param {number} discountPercentage - Discount percentage (0-100)
 * @param {string|null} discountValidUntil - Expiry date or null for no expiry
 * @returns {Promise<Object>} The updated plan
 */
const updatePlanDiscount = async (planId, discountPercentage, discountValidUntil) => {
  try {
    const plan = await prisma.subscriptionPlan.findUnique({
      where: { id: planId },
    });

    if (!plan) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Plan not found');
    }

    // Validate discount percentage
    if (discountPercentage < 0 || discountPercentage > 100) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Discount percentage must be between 0 and 100');
    }

    // Set originalPrice if not already set
    const originalPrice = plan.originalPrice || plan.price;

    const updatedPlan = await prisma.subscriptionPlan.update({
      where: { id: planId },
      data: {
        originalPrice,
        discountPercentage,
        discountValidUntil: discountValidUntil ? new Date(discountValidUntil) : null,
        // Update the actual price based on discount
        price: Math.round(parseFloat(originalPrice) * (1 - discountPercentage / 100)),
      },
    });

    logger.info(`Admin updated plan ${planId} discount to ${discountPercentage}%`);
    return updatedPlan;
  } catch (error) {
    logger.error('Error in updatePlanDiscount:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update plan discount');
  }
};

/**
 * [NEW] Update plan details (Admin)
 * @param {number} planId - The ID of the plan
 * @param {Object} data - Update data (name, description, price, durationDays, features, isActive)
 * @returns {Promise<Object>} The updated plan
 */
const updatePlan = async (planId, data) => {
  try {
    const plan = await prisma.subscriptionPlan.findUnique({
      where: { id: planId },
    });

    if (!plan) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Plan not found');
    }

    const { name, description, price, durationDays, features, isActive, roleToAssign } = data;

    // Prepare update data
    const updateData = {};
    if (name) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (price !== undefined) {
      updateData.price = price;
      // If price changes, reset original price if discount is active, or update it
      if (!plan.originalPrice) {
        updateData.originalPrice = price; // Initial set
      }
    }
    if (durationDays) updateData.duration = durationDays;
    if (features) updateData.features = JSON.stringify(features);
    if (isActive !== undefined) updateData.isActive = isActive;
    if (roleToAssign) updateData.roleToAssign = roleToAssign;

    const updatedPlan = await prisma.subscriptionPlan.update({
      where: { id: planId },
      data: updateData,
    });

    logger.info(`Admin updated plan ${planId}`);
    return updatedPlan;
  } catch (error) {
    logger.error('Error in updatePlan:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update plan');
  }
};

/**
 * [NEW] Verify a profile (Admin)
 */
const verifyProfile = async (profileId, isVerified) => {
  try {
    const updatedProfile = await prisma.profile.update({
      where: { id: profileId },
      data: { isVerified },
    });
    return updatedProfile;
  } catch (error) {
    logger.error('Error in verifyProfile:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to verify profile');
  }
};

/**
 * [NEW] Update profile status (Admin)
 */
const updateProfileStatus = async (profileId, isPublished, _statusReason) => {
  try {
    const updatedProfile = await prisma.profile.update({
      where: { id: profileId },
      data: { 
        isPublished,
        // Using a metadata field if available or just update status
      },
    });
    return updatedProfile;
  } catch (error) {
    logger.error('Error in updateProfileStatus:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update profile status');
  }
};

/**
 * [NEW] Grant free premium subscription to a user
 * @param {number} userId - The user ID
 * @param {number} planId - The plan ID
 * @param {number|null} customDays - Optional override for duration
 * @returns {Promise<Object>}
 */
const grantPremiumSubscription = async (userId, planId, customDays = null) => {
  try {
    const userBuffer = await prisma.user.findUnique({ where: { id: userId } });
    if (!userBuffer) throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');

    const plan = await prisma.subscriptionPlan.findUnique({ where: { id: planId } });
    if (!plan) throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Plan not found');

    // 1. Calculate duration
    const duration = customDays || plan.duration;
    
    // 2. Resolve final end date (Extend if already active)
    const currentSub = await prisma.userSubscription.findFirst({
        where: { userId, status: 'ACTIVE', endDate: { gt: new Date() } },
        orderBy: { endDate: 'desc' }
    });

    let startDate = new Date();
    let endDate = new Date();

    if (currentSub) {
        // Extend from existing expiration
        endDate = new Date(currentSub.endDate);
        endDate.setDate(endDate.getDate() + duration);
        // Mark old sub as superceded
        await prisma.userSubscription.update({
            where: { id: currentSub.id },
            data: { status: 'EXPIRED' }
        });
    } else {
        endDate.setDate(endDate.getDate() + duration);
    }

    // 3. Create Subscription Record
    const newSubscription = await prisma.userSubscription.create({
      data: {
        userId,
        planId,
        status: 'ACTIVE',
        startDate,
        endDate,
        metadata: JSON.stringify({ grantedBy: 'ADMIN', originalDuration: plan.duration, customDays })
      },
    });

    // 4. Update User Role
    await prisma.user.update({
      where: { id: userId },
      data: { role: plan.roleToAssign || 'PREMIUM_USER' }
    });

    logger.info(`Admin granted ${plan.name} to user ${userId} for ${duration} days`);
    return newSubscription;
  } catch (error) {
    logger.error('Error in grantPremiumSubscription:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to grant subscription');
  }
};

export const adminService = {
  getDashboardStats,
  cleanupExpiredTokens,
  getRecentUsers,
  getRecentMatches,
  getPayments,
  getReports,
  getReportById,
  updateReportStatus,
  getPlans,
  updatePlanDiscount,
  updatePlan, // ADDED
  verifyProfile, // ADDED
  updateProfileStatus, // ADDED
  grantPremiumSubscription, // NEW
};
