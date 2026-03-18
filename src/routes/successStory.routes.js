import { Router } from 'express';
import { successStoryController } from '../controllers/successStory.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { z } from 'zod';

const router = Router();

// Validation schema
const submitStorySchema = z.object({
  body: z.object({
    partnerName: z.string().max(100).optional(),
    userId2: z.number().optional(),
    title: z.string().max(200).optional(),
    story: z.string().min(50, "Story must be at least 50 characters"),
    weddingDate: z.string().optional(), // Zod handles date strings well
    imageUrl: z.string().url().optional(),
    galleryUrls: z.array(z.string().url()).optional()
  }).refine((data) => data.partnerName || data.userId2, {
    message: "Either partnerName or userId2 must be provided",
    path: ["partnerName"]
  })
});

router.get('/', successStoryController.list);
router.get('/:id', successStoryController.getById);

// Submit (Requires authentication)
router.post('/', authenticate, validate(submitStorySchema), successStoryController.submit);

export default router;
