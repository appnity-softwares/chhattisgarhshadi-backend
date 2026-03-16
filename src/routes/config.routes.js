import { Router } from 'express';
import { configController } from '../controllers/config.controller.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();

// Public route for mobile app to get theme/settings
router.get('/public', configController.getPublicConfigs);

// Admin routes (require auth and admin role)
router.get('/', authenticate, requireAdmin, configController.getAllConfigs);
router.post('/', authenticate, requireAdmin, configController.upsertConfig);

export default router;
