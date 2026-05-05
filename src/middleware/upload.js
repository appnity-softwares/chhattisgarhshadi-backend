import multer from 'multer';
import { ApiError } from '../utils/ApiError.js';
import {
  ALLOWED_DOCUMENT_TYPES,
  ALLOWED_IMAGE_TYPES,
  HTTP_STATUS,
  MAX_FILE_SIZES,
} from '../utils/constants.js';
import { isValidFileType } from '../utils/validators.js';
import { logger } from '../config/logger.js';

// Configure memory storage for multer
const storage = multer.memoryStorage();

/**
 * File filter function
 * @param {Array} allowedTypes - Allowed MIME types
 * @returns {Function} Multer file filter
 */
const createFileFilter = (allowedTypes) => {
  return (req, file, cb) => {
    if (isValidFileType(file.mimetype, allowedTypes)) {
      cb(null, true);
    } else {
      logger.warn('Upload rejected due to invalid MIME type', {
        requestId: req.id,
        userId: req.user?.id,
        fieldname: file.fieldname,
        originalname: file.originalname,
        mimetype: file.mimetype,
        allowedTypes,
      });
      cb(
        new ApiError(
          HTTP_STATUS.BAD_REQUEST,
          'Invalid photo type. Please upload a JPG or PNG image.'
        ),
        false
      );
    }
  };
};

/**
 * Create multer upload instance
 * @param {Object} options - Upload options
 * @returns {Object} Multer instance
 */
const createUploader = (options = {}) => {
  const {
    allowedTypes = ALLOWED_IMAGE_TYPES,
    maxSize = MAX_FILE_SIZES.IMAGE, // MB
  } = options;

  return multer({
    storage,
    fileFilter: createFileFilter(allowedTypes),
    limits: {
      fileSize: maxSize * 1024 * 1024, // Convert to bytes
    },
  });
};

/**
 * Middleware for profile photo upload
 */
export const uploadProfilePhoto = createUploader({
  allowedTypes: ALLOWED_IMAGE_TYPES,
  maxSize: MAX_FILE_SIZES.IMAGE,
}).single('photo'); // Field name 'photo'

/**
 * Middleware for multiple profile photos
 */
export const uploadProfilePhotos = createUploader({
  allowedTypes: ALLOWED_IMAGE_TYPES,
  maxSize: MAX_FILE_SIZES.IMAGE,
}).array('photos', 6); // Field name 'photos', max 6 files

/**
 * Middleware for document upload (ID proof, etc.)
 */
export const uploadDocument = createUploader({
  allowedTypes: ALLOWED_DOCUMENT_TYPES,
  maxSize: MAX_FILE_SIZES.DOCUMENT,
}).single('document'); // Field name 'document'

/**
 * Error handler for multer errors
 */
export const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    logger.warn('Multer upload rejected', {
      requestId: req.id,
      userId: req.user?.id,
      code: err.code,
      field: err.field,
      limit: err.limit,
    });

    if (err.code === 'LIMIT_FILE_SIZE') {
      const isDocument = err.field === 'document';
      const limitMb = isDocument ? MAX_FILE_SIZES.DOCUMENT : MAX_FILE_SIZES.IMAGE;
      const label = isDocument ? 'Document' : 'Photo';
      return next(new ApiError(HTTP_STATUS.BAD_REQUEST, `${label} size must be ${limitMb} MB or smaller.`));
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'You can upload a maximum of 6 profile photos.'));
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'Unexpected upload field. Use "photo" for one image or "photos" for multiple images.'));
    }
  }
  next(err);
};
