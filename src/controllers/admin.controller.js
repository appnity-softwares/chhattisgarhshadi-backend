import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { userService } from '../services/user.service.js';
import { profileService } from '../services/profile.service.js';
import { adminService } from '../services/admin.service.js';
import { logAdminAction } from '../services/activityLog.service.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { ApiError } from '../utils/ApiError.js';
import jwtUtils from '../utils/jwt.js';
import bcrypt from 'bcryptjs';
import prisma from '../config/database.js';

/**
 * [NEW] Admin Login
 */
export const adminLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const adminUser = await prisma.admin.findUnique({ where: { email: username } });
  
  if (!adminUser || !adminUser.isActive) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid admin credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, adminUser.password);
  
  if (!isPasswordValid) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid admin credentials');
  }

  const tokenPayload = {
    id: adminUser.id,
    role: adminUser.role,
    email: adminUser.email
  };

  const accessToken = jwtUtils.generateAccessToken(tokenPayload);
  const refreshToken = jwtUtils.generateRefreshToken(tokenPayload);

  await prisma.admin.update({
    where: { id: adminUser.id },
    data: { lastLoginAt: new Date() }
  });

  return res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, {
      token: accessToken,
      refreshToken,
      user: { id: adminUser.id, email: adminUser.email, role: adminUser.role, firstName: adminUser.firstName, lastName: adminUser.lastName }
    }, 'Admin login successful')
  );
});

/**
 * Get all users (Admin)
 */
export const getAllUsers = asyncHandler(async (req, res) => {
  const result = await userService.getAllUsers(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Users retrieved successfully'));
});

/**
 * Get user by ID (Admin)
 */
export const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getFullUserById(req.params.userId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User retrieved successfully'));
});

/**
 * Update user role (Admin)
 */
export const updateUserRole = asyncHandler(async (req, res) => {
  const { role } = req.body;
  const { userId } = req.params;

  const user = await userService.updateUserRole(userId, role);
  await logAdminAction(req, 'USER_ROLE_CHANGED', `Changed role of user ${user.email} to ${role}`, { userId, role });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User role updated successfully'));
});

/**
 * Delete user (Admin)
 */
export const deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.userId);
  await logAdminAction(req, 'USER_DELETED', `Deleted user ${req.params.userId}`, { userId: req.params.userId });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'User deleted successfully'));
});

/**
 * Get all profiles (Admin)
 */
export const getAllProfiles = asyncHandler(async (req, res) => {
  // Pass `null` for currentUserId to skip block checks for admin
  const result = await profileService.searchProfiles(req.query, null);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Profiles retrieved successfully'));
});

/**
 * Get dashboard statistics (Admin)
 */
export const getDashboardStats = asyncHandler(async (req, res) => {
  const stats = await adminService.getDashboardStats();
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        stats,
        'Dashboard statistics retrieved successfully'
      )
    );
});

/**
 * Clean up expired tokens (Admin)
 */
export const cleanupExpiredTokens = asyncHandler(async (req, res) => {
  const count = await adminService.cleanupExpiredTokens();
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, { count }, `${count} expired tokens cleaned up`)
    );
});

/**
 * Get recent users (Admin)
 */
export const getRecentUsers = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const users = await adminService.getRecentUsers(limit);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, users, 'Recent users retrieved successfully'));
});

/**
 * Get recent matches (Admin)
 */
export const getRecentMatches = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const matches = await adminService.getRecentMatches(limit);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, matches, 'Recent matches retrieved successfully')
    );
});

/**
 * [NEW] Get payments (Admin)
 */
export const getPayments = asyncHandler(async (req, res) => {
  const result = await adminService.getPayments(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Payments retrieved successfully'));
});

// --- ADDED FOR REPORTS ---

/**
 * [NEW] Get all reports (Admin)
 */
export const getReports = asyncHandler(async (req, res) => {
  const result = await adminService.getReports(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Reports retrieved successfully'));
});

/**
 * [NEW] Get a single report by ID (Admin)
 */
export const getReportById = asyncHandler(async (req, res) => {
  const report = await adminService.getReportById(req.params.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, report, 'Report retrieved successfully'));
});

/**
 * [NEW] Update a report's status (Admin)
 */
export const updateReport = asyncHandler(async (req, res) => {
  const updatedReport = await adminService.updateReportStatus(
    req.params.id,
    req.body
  );
  await logAdminAction(req, 'REPORT_UPDATED', `Updated report ${req.params.id}`, { reportId: req.params.id, update: req.body });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedReport, 'Report updated successfully'));
});

/**
 * [NEW] Ban a user (Admin)
 */
export const banUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { reason } = req.body;
  const user = await userService.banUser(userId, reason, req.user.id);
  await logAdminAction(req, 'USER_BANNED', `Banned user ${user.email} for: ${reason}`, { userId, reason });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User banned successfully'));
});

/**
 * [NEW] Unban a user (Admin)
 */
export const unbanUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const user = await userService.unbanUser(userId);
  await logAdminAction(req, 'USER_UNBANNED', `Unbanned user ${user.email}`, { userId });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User unbanned successfully'));
});

// --- SUBSCRIPTION PLAN MANAGEMENT ---

/**
 * [NEW] Get all subscription plans (Admin)
 */
export const getPlans = asyncHandler(async (req, res) => {
  const plans = await adminService.getPlans();
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, plans, 'Plans retrieved successfully'));
});

/**
 * [NEW] Update plan discount (Admin)
 */
export const updatePlanDiscount = asyncHandler(async (req, res) => {
  const { planId } = req.params;
  const { discountPercentage, discountValidUntil } = req.body;

  const updatedPlan = await adminService.updatePlanDiscount(
    parseInt(planId),
    discountPercentage,
    discountValidUntil
  );

  await logAdminAction(req, 'PLAN_DISCOUNT_UPDATED', `Updated discount for plan ${planId}`, { planId, discountPercentage });

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedPlan, 'Plan discount updated successfully'));
});


/**
 * [NEW] Update plan details (Admin)
 */
export const updatePlan = asyncHandler(async (req, res) => {
  const { planId } = req.params;
  const updateData = req.body;

  const updatedPlan = await adminService.updatePlan(parseInt(planId), updateData);
  await logAdminAction(req, 'PLAN_UPDATED', `Updated plan ${planId}`, { planId, updateData });

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedPlan, 'Plan updated successfully'));
});


/**
 * [NEW] Verify a profile (Admin)
 */
export const verifyProfile = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  const { isVerified } = req.body;

  const updatedProfile = await adminService.verifyProfile(parseInt(profileId), isVerified);
  await logAdminAction(req, 'PROFILE_VERIFIED', `Verified profile ${profileId}`, { profileId, isVerified });

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedProfile, `Profile ${isVerified ? 'verified' : 'unverified'} successfully`));
});


/**
 * [NEW] Update profile status (Admin)
 */
export const updateProfileStatus = asyncHandler(async (req, res) => {
  const { profileId } = req.params;
  const { isPublished, statusReason } = req.body;

  const updatedProfile = await adminService.updateProfileStatus(parseInt(profileId), isPublished, statusReason);
  await logAdminAction(req, 'PROFILE_STATUS_UPDATED', `Updated status of profile ${profileId}`, { profileId, isPublished });

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedProfile, 'Profile status updated successfully'));
});


/**
 * [NEW] Grant premium subscription to user (Admin)
 */
export const grantSubscription = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { planId, customDays } = req.body;

  const subscription = await adminService.grantPremiumSubscription(
    parseInt(userId),
    parseInt(planId),
    customDays ? parseInt(customDays) : null
  );

  await logAdminAction(req, 'SUBSCRIPTION_GRANTED_FREE', `Granted free subscription to user ${userId}`, { userId, planId, customDays });

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, subscription, 'Premium subscription granted successfully')
  );
});

/**
 * [NEW] Admin: Create profile for a user
 */
export const adminCreateProfile = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const profile = await profileService.createProfile(parseInt(userId), req.body);
  await logAdminAction(req, 'PROFILE_CREATED', `Created profile for user ${userId}`, { userId });
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(HTTP_STATUS.CREATED, profile, 'Profile created successfully by Admin'));
});

/**
 * [NEW] Admin: Update any user profile
 */
export const adminUpdateProfile = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const profile = await profileService.updateProfile(parseInt(userId), req.body);
  await logAdminAction(req, 'PROFILE_UPDATED', `Updated profile for user ${userId}`, { userId, update: req.body });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, profile, 'Profile updated successfully by Admin'));
});

/**
 * [NEW] Admin: Delete any user profile
 */
export const adminDeleteProfile = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  await profileService.deleteProfile(parseInt(userId));
  await logAdminAction(req, 'PROFILE_DELETED', `Deleted profile for user ${userId}`, { userId });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, null, 'Profile deleted successfully by Admin'));
});


export const adminController = {
  adminLogin,
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
  getAllProfiles,
  getDashboardStats,
  cleanupExpiredTokens,
  getRecentUsers,
  getRecentMatches,
  getPayments,
  getReports,
  getReportById,
  updateReport,
  getPlans,
  updatePlanDiscount,
  updatePlan,
  banUser,
  unbanUser,
  verifyProfile,
  updateProfileStatus,
  grantSubscription,
  adminCreateProfile,
  adminUpdateProfile,
  adminDeleteProfile,
};
