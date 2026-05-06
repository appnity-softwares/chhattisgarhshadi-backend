import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { profileService } from '../services/profile.service.js';
import matchingAlgorithmService from '../services/matchingAlgorithm.service.js';
import { HTTP_STATUS, SUCCESS_MESSAGES } from '../utils/constants.js';
import { cacheHelper } from '../utils/cache.helper.js';
import { blockService } from '../services/block.service.js';

/**
 * Create profile
 */
export const createProfile = asyncHandler(async (req, res) => {
  const profile = await profileService.createProfile(req.user.id, req.body);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        profile,
        SUCCESS_MESSAGES.PROFILE_CREATED
      )
    );
});

/**
 * Get my profile
 */
export const getMyProfile = asyncHandler(async (req, res) => {
  const profile = await profileService.getProfileByUserId(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, profile, 'Profile retrieved successfully'));
});

/**
 * Get profile by user ID
 * Security: Block check runs BEFORE cache to prevent bypass
 */
export const getProfileByUserId = asyncHandler(async (req, res) => {
  // Convert userId to integer (route params are always strings)
  const userId = parseInt(req.params.userId, 10);
  const currentUserId = req.user?.id;

  // SECURITY: Check blocks BEFORE cache — cache key doesn't include viewer
  if (currentUserId && userId !== currentUserId) {
    const blockedIdSet = await blockService.getAllBlockedUserIds(currentUserId);
    if (blockedIdSet.has(userId)) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(new ApiResponse(HTTP_STATUS.NOT_FOUND, null, 'Profile not found'));
    }
  }

  const profile = await profileService.getProfileByUserId(userId, currentUserId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, profile, 'Profile retrieved successfully'));
});

/**
 * Get contact info for a profile under backend policy controls
 */
export const getProfileContactInfo = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const contactInfo = await profileService.getProfileContactInfo(req.user.id, userId);

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, contactInfo, 'Contact info retrieved successfully'));
});

/**
 * Update my profile
 */
export const updateMyProfile = asyncHandler(async (req, res) => {
  // req.body is now pre-validated and safe
  const profile = await profileService.updateProfile(req.user.id, req.body);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, profile, SUCCESS_MESSAGES.PROFILE_UPDATED)
    );
});

/**
 * Delete my profile
 */
export const deleteMyProfile = asyncHandler(async (req, res) => {
  await profileService.deleteProfile(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Profile deleted successfully'));
});

/**
 * Search profiles
 */
export const searchProfiles = asyncHandler(async (req, res) => {
  // FIX: Pass req.user.id to the service so it can filter blocked users
  const result = await profileService.searchProfiles(req.query, req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Profiles retrieved successfully'));
});

/**
 * Delete a photo
 */
export const deletePhoto = asyncHandler(async (req, res) => {
  // Convert mediaId to integer (route params are always strings)
  const mediaId = parseInt(req.params.mediaId, 10);
  await profileService.deletePhoto(req.user.id, mediaId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Photo deleted successfully'));
});

/**
 * Set an existing photo as the profile photo
 */
export const setProfilePhoto = asyncHandler(async (req, res) => {
  const mediaId = parseInt(req.params.mediaId, 10);
  const media = await profileService.setProfilePhoto(req.user.id, mediaId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, media, 'Profile photo updated successfully'));
});

/**
 * Get Recommendations (Algorithm)
 */
export const getRecommendations = asyncHandler(async (req, res) => {
  const profiles = await cacheHelper.getOrFetch(
    `recommendations:${req.user.id}`,
    async () => {
      const recommendations = await matchingAlgorithmService.getDailyRecommendations(req.user.id, 20);

      return recommendations.map(rec => ({
        ...rec.profile,
        matchScore: rec.score,
        matchLabel: rec.compatibility,
        isSuperMatch: rec.isSuperMatch
      }));
    },
    21600 // 6 hours
  );

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, {
      profiles,
      pagination: {
        total: profiles.length,
        pages: 1,
        current: 1,
        limit: 20
      }
    }, 'Recommendations retrieved successfully')
  );
});


export const profileController = {
  createProfile,
  getMyProfile,
  getProfileByUserId,
  getProfileContactInfo,
  updateMyProfile,
  deleteMyProfile,
  searchProfiles,
  deletePhoto,
  setProfilePhoto,
  getRecommendations,
};
