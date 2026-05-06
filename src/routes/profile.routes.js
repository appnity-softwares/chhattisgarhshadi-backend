import { Router } from 'express';
import { profileController } from '../controllers/profile.controller.js';
import { authenticate, requireCompleteProfile, requireProfileForBrowsing } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createProfileSchema,
  updateProfileSchema,
  searchProfilesSchema,
  objectIdSchema,
  mediaIdSchema
} from '../validation/profile.validation.js';

const router = Router();

// All routes require authentication
router.use(authenticate);


router.post('/', validate(createProfileSchema), profileController.createProfile);


router.get('/me', profileController.getMyProfile);
router.put('/me', validate(updateProfileSchema), profileController.updateMyProfile);
router.delete('/me', profileController.deleteMyProfile);


// Search profiles - cached for 5 minutes
router.get(
  '/search',
  requireProfileForBrowsing,
  validate(searchProfilesSchema),
  profileController.searchProfiles
);

router.delete(
  '/photos/:mediaId',
  validate(mediaIdSchema),
  profileController.deletePhoto
);

router.patch(
  '/photos/:mediaId/profile-photo',
  validate(mediaIdSchema),
  profileController.setProfilePhoto
);

// Get Recommendations (Smart Algorithm)
router.get(
  '/recommendations',
  requireProfileForBrowsing,
  profileController.getRecommendations
);

// Get public profile by userId
router.get(
  '/:userId/contact',
  requireCompleteProfile,
  validate(objectIdSchema),
  profileController.getProfileContactInfo
);

router.get(
  '/:userId',
  requireProfileForBrowsing,
  validate(objectIdSchema),
  profileController.getProfileByUserId
);

export default router;
