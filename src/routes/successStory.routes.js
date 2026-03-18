import { Router } from 'express';
import { successStoryController } from '../controllers/successStory.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import Joi from 'joi';

const router = Router();

// Validation schema
const submitStorySchema = Joi.object({
    partnerName: Joi.string().max(100),
    userId2: Joi.number().optional(),
    title: Joi.string().max(200).optional(),
    story: Joi.string().required().min(50),
    weddingDate: Joi.date().optional(),
    imageUrl: Joi.string().uri().optional(),
    galleryUrls: Joi.array().items(Joi.string().uri()).optional()
}).or('partnerName', 'userId2'); // Must have partner name OR identify a user

router.get('/', successStoryController.list);
router.get('/:id', successStoryController.getById);

// Submit (Requires authentication)
router.post('/', authenticate, validate(submitStorySchema), successStoryController.submit);

export default router;
