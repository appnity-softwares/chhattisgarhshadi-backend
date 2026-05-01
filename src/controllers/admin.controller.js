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
import { uploadService } from '../services/upload.service.js';
import { cacheHelper } from '../utils/cache.helper.js';
import { MEDIA_TYPES } from '../utils/constants.js';
import { contactRequestService } from '../services/contactRequest.service.js';
import { photoRequestService } from '../services/photoRequest.service.js';
import { chatModerationController } from '../controllers/chatModeration.controller.js';
import { bulkModerationController } from '../controllers/bulkModeration.controller.js';
import { logger } from '../config/logger.js';

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
  const user = await userService.getFullUserById(parseInt(req.params.userId, 10));
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User retrieved successfully'));
});

/**
 * Update user role (Admin)
 */
export const updateUserRole = asyncHandler(async (req, res) => {
  const { role } = req.body;
  const userId = parseInt(req.params.userId, 10);

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
  const userId = parseInt(req.params.userId, 10);
  await userService.hardDeleteUser(userId);
  await logAdminAction(req, 'USER_PERMANENTLY_DELETED', `Permanently deleted user ID: ${userId}`, { userId });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'User permanently deleted from database'));
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
  const report = await adminService.getReportById(parseInt(req.params.id, 10));
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, report, 'Report retrieved successfully'));
});

/**
 * [NEW] Update a report's status (Admin)
 */
export const updateReport = asyncHandler(async (req, res) => {
  const reportId = parseInt(req.params.id, 10);
  const updatedReport = await adminService.updateReportStatus(
    reportId,
    req.body
  );
  await logAdminAction(req, 'REPORT_UPDATED', `Updated report ${reportId}`, { reportId, update: req.body });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedReport, 'Report updated successfully'));
});

/**
 * [NEW] Ban a user (Admin)
 */
export const banUser = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
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
  const userId = parseInt(req.params.userId, 10);
  const user = await userService.unbanUser(userId);
  await logAdminAction(req, 'USER_UNBANNED', `Unbanned user ${user.email}`, { userId });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User unbanned successfully'));
});

/**
 * [NEW] Bulk Ban Users (Admin)
 */
export const bulkBanUsers = asyncHandler(async (req, res) => {
  const { userIds, reason } = req.body;
  
  if (!Array.isArray(userIds) || userIds.length === 0) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No user IDs provided');
  }

  const results = await Promise.allSettled(
    userIds.map(id => userService.banUser(parseInt(id, 10), reason || 'Bulk banned by admin', req.user.id))
  );

  const successful = results.filter(r => r.status === 'fulfilled').length;
  await logAdminAction(req, 'BULK_USER_BANNED', `Bulk banned ${successful}/${userIds.length} users`, { userIds, reason });

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, { successful, total: userIds.length }, `Successfully banned ${successful} users`)
  );
});

/**
 * [NEW] Bulk Unban Users (Admin)
 */
export const bulkUnbanUsers = asyncHandler(async (req, res) => {
  const { userIds } = req.body;
  
  if (!Array.isArray(userIds) || userIds.length === 0) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No user IDs provided');
  }

  const results = await Promise.allSettled(
    userIds.map(id => userService.unbanUser(parseInt(id, 10)))
  );

  const successful = results.filter(r => r.status === 'fulfilled').length;
  await logAdminAction(req, 'BULK_USER_UNBANNED', `Bulk unbanned ${successful}/${userIds.length} users`, { userIds });

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, { successful, total: userIds.length }, `Successfully unbanned ${successful} users`)
  );
});

/**
 * [NEW] Bulk Permanent Delete Users (Admin)
 * WARNING: This action cannot be undone.
 */
export const bulkDeleteUsers = asyncHandler(async (req, res) => {
  const { userIds } = req.body;
  
  if (!Array.isArray(userIds) || userIds.length === 0) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No user IDs provided');
  }

  const results = await Promise.allSettled(
    userIds.map(id => userService.hardDeleteUser(parseInt(id, 10)))
  );

  const successful = results.filter(r => r.status === 'fulfilled').length;
  await logAdminAction(req, 'BULK_USER_PERMANENT_DELETED', `Permanently hard-deleted ${successful}/${userIds.length} users from database`, { userIds });

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, { successful, total: userIds.length }, `Successfully removed ${successful} users permanently from database`)
  );
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
  const updateData = { ...req.body };

  // Format date of birth if provided
  if (updateData.dateOfBirth) {
    updateData.dateOfBirth = new Date(updateData.dateOfBirth);
  }

  // Safe height parsing
  if (Object.prototype.hasOwnProperty.call(updateData, 'height')) {
    updateData.height = (updateData.height && !isNaN(parseInt(updateData.height))) 
      ? parseInt(updateData.height) 
      : null;
  }

  const profile = await profileService.updateProfile(parseInt(userId), updateData);
  await logAdminAction(req, 'PROFILE_UPDATED', `Updated profile for user ${userId}`, { userId, update: updateData });
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

/**
 * [NEW] Admin: Create user and profile together
 */
export const adminCreateUserWithProfile = asyncHandler(async (req, res) => {
  const {
    phone, countryCode, email, role,
    ...profileData
  } = req.body;

  // 1. Create User & Profile in a transaction
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Check if user already exists
      if (phone) {
        const existingUser = await tx.user.findFirst({
          where: { phone, countryCode }
        });
        if (existingUser) {
          throw new ApiError(HTTP_STATUS.CONFLICT, `User with phone ${countryCode}${phone} already exists`);
        }
      }

      if (email) {
        const existingEmail = await tx.user.findUnique({
          where: { email }
        });
        if (existingEmail) {
          throw new ApiError(HTTP_STATUS.CONFLICT, `User with email ${email} already exists`);
        }
      }

      // Create User
      const user = await tx.user.create({
        data: {
          phone: phone || null,
          countryCode: countryCode || '+91',
          email: email || null,
          role: role || 'USER',
          isPhoneVerified: !!phone,
          phoneVerifiedAt: phone ? new Date() : null,
          isEmailVerified: !!email,
          emailVerifiedAt: email ? new Date() : null,
          isActive: true,
        }
      });

      // Create Profile with defaults for optional fields
      const profile = await tx.profile.create({
        data: {
          userId: user.id,
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          gender: profileData.gender,
          dateOfBirth: new Date(profileData.dateOfBirth),
          maritalStatus: profileData.maritalStatus || 'NEVER_MARRIED',
          religion: profileData.religion || 'HINDU',
          motherTongue: profileData.motherTongue || 'CHHATTISGARHI',
          category: profileData.category || null,
          caste: profileData.caste || null,
          subCaste: profileData.subCaste || null,
          nativeVillage: profileData.nativeVillage || null,
          city: profileData.city,
          state: profileData.state || 'Chhattisgarh',
          country: profileData.country || 'India',
          speaksChhattisgarhi: profileData.speaksChhattisgarhi ?? true,

          // Additional Fields (Safe numeric parsing)
          height: (profileData.height && !isNaN(parseInt(profileData.height))) ? parseInt(profileData.height) : null,
          weight: (profileData.weight && !isNaN(parseInt(profileData.weight))) ? parseInt(profileData.weight) : null,
          highestEducation: profileData.highestEducation || null,
          occupation: profileData.occupation || null,
          annualIncome: profileData.annualIncome || null,
          fatherOccupation: profileData.fatherOccupation || null,
          familyIncome: profileData.familyIncome || null,
          bio: profileData.bio || null,

          isDraft: false,
          isPublished: true,
          publishedAt: new Date(),
        }
      });

      return { user, profile };
    });

    await logAdminAction(req, 'USER_CREATED_WITH_PROFILE', `Created user ${result.user.id} and profile`, { userId: result.user.id });

    return res.status(HTTP_STATUS.CREATED).json(
      new ApiResponse(HTTP_STATUS.CREATED, result, 'User and profile created successfully by Admin')
    );
  } catch (error) {
    if (error instanceof ApiError) throw error;
    
    // Provide a clearer message for Prisma errors
    logger.error('Admin user creation failed:', error);
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST, 
      `Failed to create profile: ${error.message}. Please check if all required fields (Name, Gender, DOB, City) are correct.`
    );
  }
});

/**
 * [NEW] Admin: Upload profile photo for a user
 */
export const adminUploadProfilePhoto = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  
  if (!req.file) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No file uploaded');
  }

  // 1. Process and upload image to R2
  const result = await uploadService.processAndUploadImage(
    req.file,
    `users/${userId}/photos`
  );

  // 2. Create Media record in database
  const mediaData = {
    url: result.original.url,
    thumbnailUrl: result.thumbnail.url,
    key: result.original.key,
    thumbnailKey: result.thumbnail.key,
    fileName: result.original.filename,
    fileSize: result.original.size,
    mimeType: result.original.mimetype,
  };

  const media = await profileService.addPhoto(
    parseInt(userId),
    mediaData,
    MEDIA_TYPES.PROFILE_PHOTO
  );

  // Invalidate profile cache
  await cacheHelper.del(`profile:userId:${userId}`);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, media, 'Profile photo uploaded successfully by Admin')
  );
});

/**
 * [ADMIN] Get all contact requests with user details
 */
export const getAdminContactRequests = asyncHandler(async (req, res) => {
  const result = await contactRequestService.getAdminContactRequests(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Contact requests retrieved successfully'));
});

/**
 * [ADMIN] Update contact request status (approve/reject)
 */
export const updateAdminContactRequest = asyncHandler(async (req, res) => {
  const { status, reason } = req.body;
  const id = parseInt(req.params.id, 10);
  
  const updatedRequest = await contactRequestService.updateAdminContactRequest(
    id, 
    status, 
    reason, 
    req.user.id
  );
  
  const message = status === 'APPROVED' ? 'Request approved' : 'Request rejected';
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedRequest, message));
});

/**
 * [ADMIN] Get all photo requests with user details
 */
export const getAdminPhotoRequests = asyncHandler(async (req, res) => {
  const result = await photoRequestService.getAdminPhotoRequests(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Photo requests retrieved successfully'));
});

/**
 * [ADMIN] Update photo request status (approve/reject)
 */
export const updateAdminPhotoRequest = asyncHandler(async (req, res) => {
  const { status, reason } = req.body;
  const id = parseInt(req.params.id, 10);
  
  const updatedRequest = await photoRequestService.updateAdminPhotoRequest(
    id, 
    status, 
    reason, 
    req.user.id
  );
  
  const message = status === 'APPROVED' ? 'Request approved' : 'Request rejected';
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedRequest, message));
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
  adminCreateUserWithProfile,
  adminUploadProfilePhoto,
  bulkBanUsers,
  bulkUnbanUsers,
  bulkDeleteUsers,
  // Contact request admin methods
  getAdminContactRequests,
  updateAdminContactRequest,
  // Photo request admin methods
  getAdminPhotoRequests,
  updateAdminPhotoRequest,
  // Chat moderation admin methods
  getAllConversations: chatModerationController.getAllConversations,
  getConversationById: chatModerationController.getConversationById,
  deleteConversation: chatModerationController.deleteConversation,
  flagMessage: chatModerationController.flagMessage,
  // Bulk moderation admin methods
  bulkModeration: bulkModerationController.bulkModeration,
  bulkModerationReport: bulkModerationController.bulkModerationReport,
  bulkModerationAction: bulkModerationController.bulkModeration,
};
