import { Router } from 'express';
import { adminThemeController } from '../controllers/admin.theme.controller.js';

const router = Router();

// Routes for mobile app theme - accessible by authentic Admin only (bound inside admin.routes.js)
router.get('/', adminThemeController.getActiveTheme);
router.post('/', adminThemeController.updateTheme);

export default router;
