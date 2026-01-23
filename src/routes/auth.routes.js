import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  refreshTokenSchema,
  logoutSchema,
  verifyFirebasePhoneSchema,
  phoneLoginSchema,
} from '../validation/auth.validation.js';

const router = Router();

// Rate limiter removed for authentication routes


router.post(
  '/refresh',
  validate(refreshTokenSchema),
  authController.refreshToken
);

router.post(
  '/logout',
  authenticate,
  validate(logoutSchema),
  authController.logout
);

// Firebase Phone Login (New)
router.post(
  '/phone/login',
  validate(phoneLoginSchema),
  authController.phoneLogin
);

// Firebase Phone Verification
router.post(
  '/phone/verify-firebase',
  authenticate,
  validate(verifyFirebasePhoneSchema),
  authController.verifyFirebasePhone
);

export default router;