import { Router } from 'express';
import { adminSuccessStoryController } from '../controllers/admin.successStory.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { z } from 'zod';

const router = Router();

// Validation schema
const updateStorySchema = z.object({
  body: z.object({
    status: z.enum(['PENDING', 'APPROVED', 'REJECTED', 'ARCHIVED']).optional(),
    isFeatured: z.boolean().optional(),
    title: z.string().max(200).optional(),
    story: z.string().min(50).optional()
  })
});

router.get('/', adminSuccessStoryController.list);
router.patch('/:id', validate(updateStorySchema), adminSuccessStoryController.update);
router.delete('/:id', adminSuccessStoryController.delete);

export default router;
