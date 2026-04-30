import { Router } from 'express';
import { profileViewController } from '../controllers/profileView.controller.js';
import { authenticate, requireProfileForBrowsing } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  logProfileViewSchema,
  getProfileViewsSchema,
} from '../validation/profileView.validation.js';

const router = Router();

// Profile view history is part of browsing and should not require 50% completion.
router.use(authenticate, requireProfileForBrowsing);

router
  .route('/')
  .post(validate(logProfileViewSchema), profileViewController.logProfileView);


router
  .route('/who-viewed-me')
  .get(validate(getProfileViewsSchema), profileViewController.getWhoViewedMe);


router
  .route('/my-history')
  .get(validate(getProfileViewsSchema), profileViewController.getMyViewHistory);

export default router;
