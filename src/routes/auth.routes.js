import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authLimiter, otpLimiter } from '../middleware/rate-limiter.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  refreshTokenSchema,
  logoutSchema,
  verifyFirebasePhoneSchema,
  phoneLoginSchema,
} from '../validation/auth.validation.js';

const router = Router();

router.post(
  '/refresh',
  authLimiter,
  validate(refreshTokenSchema),
  authController.refreshToken
);

router.post(
  '/logout',
  authLimiter,
  authenticate,
  validate(logoutSchema),
  authController.logout
);

// Firebase Phone Login (New)
router.post(
  '/phone/login',
  otpLimiter,
  validate(phoneLoginSchema),
  authController.phoneLogin
);

// Firebase Phone Verification
router.post(
  '/phone/verify-firebase',
  authLimiter,
  authenticate,
  validate(verifyFirebasePhoneSchema),
  authController.verifyFirebasePhone
);

export default router;
