import {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2Client, getBucketName, isR2Configured, getRegion } from '../config/r2.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { generateUniqueFilename, generateStorageKey } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import sharp from 'sharp';

/**
 * Upload file to Cloudflare R2
 * @param {Object} file - File object from multer
 * @param {string} folder - R2 folder name
 * @param {boolean} isPublic - Whether the file should be publicly readable
 * @returns {Promise<Object>}
 */
export const uploadToR2 = async (
  file,
  folder = 'uploads',
  isPublic = false
) => {
  try {
    // Check if R2 is configured
    if (!isR2Configured()) {
      throw new ApiError(
        HTTP_STATUS.SERVICE_UNAVAILABLE,
        'Cloudflare R2 storage is not configured. Please contact administrator.'
      );
    }
    const filename = generateUniqueFilename(file.originalname);
    const key = generateStorageKey(folder, filename);

    const command = new PutObjectCommand({
      Bucket: getBucketName(),
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      // Note: ACL removed - bucket uses 'Bucket owner enforced' Object Ownership
      // Make sure bucket policy allows public read access for profile photos
    });

    await r2Client.send(command);

    const region = getRegion();

    // Construct public URL
    // Priority 1: Custom Public URL (e.g., https://media.mydomain.com) - BEST FOR PROD
    // Priority 2: R2.dev URL (e.g., https://pub-<hash>.r2.dev)
    let storageUrl;
    if (process.env.R2_PUBLIC_URL) {
      // Remove trailing slash if present
      const baseUrl = process.env.R2_PUBLIC_URL.replace(/\/$/, '');
      storageUrl = `${baseUrl}/${key}`;
    } else {
      // Fallback (Generic R2 naming)
      storageUrl = `https://${getBucketName()}.${region}.r2.cloudflarestorage.com/${key}`;
    }

    logger.info(`File uploaded to R2: ${key} (public: ${isPublic})`);

    return {
      key, // Always return the key
      url: isPublic ? storageUrl : null, // Only return public URL if public
      filename,
      size: file.size,
      mimetype: file.mimetype,
    };
  } catch (error) {
    logger.error('Error in uploadToR2:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      `Failed to upload file: ${error.message}` // Expose error for debugging
    );
  }
};

/**
 * Process and upload image with thumbnail (Public)
 * @param {Object} file - File object from multer
 * @param {string} folder - S3 folder name
 * @returns {Promise<Object>}
 */
export const processAndUploadImage = async (file, folder = 'photos') => {
  try {
    // Process main image
    const processedImage = await sharp(file.buffer)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 90 })
      .toBuffer();

    // Process thumbnail
    const thumbnail = await sharp(file.buffer)
      .resize(300, 300, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toBuffer();

    // Upload main image
    const mainImageFile = {
      ...file,
      buffer: processedImage,
      originalname: file.originalname.replace(/\.[^/.]+$/, '.jpg'),
      mimetype: 'image/jpeg',
    };
    // Profile photos are public
    const mainImage = await uploadToR2(mainImageFile, folder, true);

    // Upload thumbnail
    const thumbnailFile = {
      ...file,
      buffer: thumbnail,
      originalname: `thumb_${file.originalname.replace(
        /\.[^/.]+$/,
        '.jpg'
      )}`,
      mimetype: 'image/jpeg',
    };
    // Thumbnails are also public
    const thumbnailImage = await uploadToR2(
      thumbnailFile,
      `${folder}/thumbnails`,
      true
    );

    return {
      original: mainImage,
      thumbnail: thumbnailImage,
    };
  } catch (error) {
    logger.error('Error in processAndUploadImage:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to process and upload image'
    );
  }
};

/**
 * Delete file from R2
 * @param {string} key - R2 object key
 * @returns {Promise<void>}
 */
export const deleteFile = async (key) => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: getBucketName(),
      Key: key,
    });

    await r2Client.send(command);

    logger.info(`File deleted from R2: ${key}`);
  } catch (error) {
    logger.error('Error in deleteFile:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to delete file'
    );
  }
};

/**
 * Generate presigned URL for private files
 * @param {string} key - R2 object key
 * @param {number} expiresIn - URL expiry in seconds
 * @returns {Promise<string>}
 */
export const getPresignedUrl = async (key, expiresIn = 3600) => {
  if (!key) return null;

  try {
    const command = new GetObjectCommand({
      Bucket: getBucketName(),
      Key: key,
    });

    const url = await getSignedUrl(r2Client, command, { expiresIn });

    return url;
  } catch (error) {
    logger.error('Error in getPresignedUrl:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to generate presigned URL'
    );
  }
};

/**
 * Extract storage key from URL
 * @param {string} url - Storage URL
 * @returns {string} Storage key
 */
export const extractKeyFromUrl = (url) => {
  if (!url) return null;
  try {
    // Handle both full URLs and simple keys
    if (url.startsWith('http')) {
      const urlObj = new URL(url);
      return decodeURIComponent(urlObj.pathname.substring(1)); // Remove leading slash
    }
    // Assume it's already a key if no "http"
    return url;
  } catch (error) {
    logger.error('Error extracting key from URL:', error);
    return null; // Return null instead of throwing
  }
};

export const uploadService = {
  uploadToR2,
  processAndUploadImage,
  deleteFile,
  getPresignedUrl,
  extractKeyFromUrl,
};