import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { uploadService } from '../services/upload.service.js';
import { profileService } from '../services/profile.service.js';
import { HTTP_STATUS, MEDIA_TYPES } from '../utils/constants.js'; // Ensure MEDIA_TYPES is in constants.js
import { cacheHelper } from '../utils/cache.helper.js';

/**
 * Upload single profile photo
 */
export const uploadProfilePhoto = asyncHandler(async (req, res) => {
  console.log('📸 uploadProfilePhoto - req.file:', req.file ? { fieldname: req.file.fieldname, size: req.file.size, mimetype: req.file.mimetype } : null);
  if (!req.file) {
    console.error('❌ uploadProfilePhoto - No file received! req.headers content-type:', req.headers['content-type']);
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

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, media, 'Profile photo uploaded successfully')
    );
});

/**
 * Upload multiple profile photos
 */
export const uploadProfilePhotos = asyncHandler(async (req, res) => {
  console.log('📸 uploadProfilePhotos - req.files count:', req.files?.length);
  console.log('📸 uploadProfilePhotos - req.files:', req.files?.map(f => ({ fieldname: f.fieldname, size: f.size, mimetype: f.mimetype })));
  if (!req.files || req.files.length === 0) {
    console.error('❌ uploadProfilePhotos - No files received! req.headers content-type:', req.headers['content-type']);
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
  const addMediaPromises = results.map((result) => {
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
      MEDIA_TYPES.GALLERY_PHOTO // Use GALLERY_PHOTO for non-default
    );
  });

  const mediaItems = await Promise.all(addMediaPromises);
  console.log('📸 uploadProfilePhotos - Saved media items:', mediaItems.map(m => ({ id: m.id, url: m.url, type: m.type })));

  // Invalidate profile cache so subsequent fetches include the new photos
  await cacheHelper.del(`profile:userId:${req.user.id}`);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        mediaItems,
        'Profile photos uploaded successfully'
      )
    );
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