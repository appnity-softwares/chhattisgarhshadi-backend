import { Router } from 'express';
import { adminSuccessStoryController } from '../controllers/admin.successStory.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import Joi from 'joi';

const router = Router();

// Validation schema
const updateStorySchema = Joi.object({
    status: Joi.string().valid('PENDING', 'APPROVED', 'REJECTED', 'ARCHIVED'),
    isFeatured: Joi.boolean(),
    title: Joi.string().max(200).optional(),
    story: Joi.string().optional().min(50)
});

router.get('/', adminSuccessStoryController.list);
router.patch('/:id', validate(updateStorySchema), adminSuccessStoryController.update);
router.delete('/:id', adminSuccessStoryController.delete);

export default router;
