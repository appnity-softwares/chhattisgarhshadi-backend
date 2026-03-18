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

const createStorySchema = z.object({
  body: z.object({
    userId1: z.number(),
    userId2: z.number().optional(),
    partnerName: z.string().optional(),
    title: z.string().max(200),
    story: z.string().min(50),
    weddingDate: z.string().optional(),
    imageUrl: z.string().url().optional(),
    isFeatured: z.boolean().optional()
  })
});

router.get('/', adminSuccessStoryController.list);
router.post('/', validate(createStorySchema), adminSuccessStoryController.create);
router.patch('/:id', validate(updateStorySchema), adminSuccessStoryController.update);
router.delete('/:id', adminSuccessStoryController.delete);

export default router;
