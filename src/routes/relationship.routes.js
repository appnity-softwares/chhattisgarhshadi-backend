import { Router } from 'express';
import relationshipController from '../controllers/relationship.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { objectIdSchema } from '../validation/profile.validation.js';

const router = Router();

router.use(authenticate, requireCompleteProfile);

router.get(
  '/:userId',
  validate(objectIdSchema),
  relationshipController.getRelationship
);

export default router;
