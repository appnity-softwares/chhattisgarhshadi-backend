import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { uploadService } from '../services/upload.service.js';
import { profileService } from '../services/profile.service.js';
import { HTTP_STATUS, MEDIA_TYPES } from '../utils/constants.js'; // Ensure MEDIA_TYPES is in constants.js
import { cacheHelper } from '../utils/cache.helper.js';
import { logger } from '../config/logger.js';
import prisma from '../config/database.js';

const summarizeFile = (file) => ({
  fieldname: file.fieldname,
  originalname: file.originalname,
  mimetype: file.mimetype,
  size: file.size,
});

const logUploadRequest = (req, files) => {
  logger.info('Profile photo upload request received', {
    requestId: req.id,
    userId: req.user?.id,
    contentType: req.headers['content-type'],
    authAttached: Boolean(req.headers.authorization),
    files: files.map(summarizeFile),
  });
};

const uploadMetrics = {
  profilePhoto: { success: 0, failure: 0 },
  profilePhotos: { success: 0, failure: 0 },
};

const recordUploadMetric = (route, result, req, error = null) => {
  const metric = uploadMetrics[route];
  if (!metric) return;

  metric[result] += 1;
  const total = metric.success + metric.failure;
  logger.info('Upload API metric', {
    requestId: req.id,
    userId: req.user?.id,
    route,
    result,
    success: metric.success,
    failure: metric.failure,
    successRate: total ? Number(((metric.success / total) * 100).toFixed(2)) : 0,
    error: error?.message,
  });
};

/**
 * Upload single profile photo
 */
export const uploadProfilePhoto = asyncHandler(async (req, res) => {
  try {
    logUploadRequest(req, req.file ? [req.file] : []);
    if (!req.file) {
      logger.warn('Profile photo upload rejected: no file received', {
        requestId: req.id,
        userId: req.user?.id,
        contentType: req.headers['content-type'],
        authAttached: Boolean(req.headers.authorization),
      });
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No file uploaded');
    }

    // 1. Process and upload image to R2 (public)
    const result = await uploadService.processAndUploadImage(
      req.file,
      `users/${req.user.id}/photos`
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
      req.user.id,
      mediaData,
      MEDIA_TYPES.PROFILE_PHOTO
    );

    // Invalidate profile cache so subsequent fetches include the new photo
    await cacheHelper.del(`profile:userId:${req.user.id}`);

    logger.info('Profile photo upload succeeded', {
      requestId: req.id,
      userId: req.user.id,
      mediaId: media.id,
      url: media.url,
    });

    recordUploadMetric('profilePhoto', 'success', req);

    res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(HTTP_STATUS.OK, media, 'Profile photo uploaded successfully')
      );
  } catch (error) {
    recordUploadMetric('profilePhoto', 'failure', req, error);
    throw error;
  }
});

/**
 * Upload multiple profile photos
 */
export const uploadProfilePhotos = asyncHandler(async (req, res) => {
  try {
    logUploadRequest(req, req.files || []);
    if (!req.files || req.files.length === 0) {
      logger.warn('Profile photos upload rejected: no files received', {
        requestId: req.id,
        userId: req.user?.id,
        contentType: req.headers['content-type'],
        authAttached: Boolean(req.headers.authorization),
      });
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No files uploaded');
    }

    const uploadPromises = req.files.map((file) =>
      uploadService.processAndUploadImage(
        file,
        `users/${req.user.id}/photos`
      )
    );

    const results = await Promise.all(uploadPromises);

    // Create Media records in database
    const hasProfilePhoto = await prisma.media.findFirst({
      where: {
        userId: req.user.id,
        type: MEDIA_TYPES.PROFILE_PHOTO,
      },
      select: { id: true },
    });

    const addMediaPromises = results.map((result, index) => {
      const mediaData = {
        url: result.original.url,
        thumbnailUrl: result.thumbnail.url,
        key: result.original.key,
        thumbnailKey: result.thumbnail.key,
        fileName: result.original.filename,
        fileSize: result.original.size,
        mimeType: result.original.mimetype,
      };
      return profileService.addPhoto(
        req.user.id,
        mediaData,
        !hasProfilePhoto && index === 0
          ? MEDIA_TYPES.PROFILE_PHOTO
          : MEDIA_TYPES.GALLERY_PHOTO
      );
    });

    const mediaItems = await Promise.all(addMediaPromises);

    // Invalidate profile cache so subsequent fetches include the new photos
    await cacheHelper.del(`profile:userId:${req.user.id}`);

    logger.info('Profile photos upload succeeded', {
      requestId: req.id,
      userId: req.user.id,
      count: mediaItems.length,
      media: mediaItems.map(m => ({ id: m.id, type: m.type, url: m.url })),
    });

    recordUploadMetric('profilePhotos', 'success', req);

    res
      .status(HTTP_STATUS.OK)
      .json(
        new ApiResponse(
          HTTP_STATUS.OK,
          mediaItems,
          'Profile photos uploaded successfully'
        )
      );
  } catch (error) {
    recordUploadMetric('profilePhotos', 'failure', req, error);
    throw error;
  }
});

/**
 * Upload ID proof
 */
export const uploadIdProof = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No file uploaded');
  }

  // 1. Upload to R2 as PRIVATE
  const result = await uploadService.uploadToR2(
    req.file,
    `users/${req.user.id}/documents`,
    false // isPublic = false
  );

  // 2. Create Media record in database
  const mediaData = {
    url: null, // No public URL
    thumbnailUrl: null,
    key: result.key, // Store the private key
    thumbnailKey: null,
    fileName: result.filename,
    fileSize: result.size,
    mimeType: result.mimetype,
  };

  const media = await profileService.addPhoto(
    req.user.id,
    mediaData,
    MEDIA_TYPES.ID_PROOF
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        {
          message: 'ID proof uploaded successfully and is pending verification.',
          mediaId: media.id,
        },
        'ID proof uploaded successfully'
      )
    );
});

export const uploadController = {
  uploadProfilePhoto,
  uploadProfilePhotos,
  uploadIdProof,
};
