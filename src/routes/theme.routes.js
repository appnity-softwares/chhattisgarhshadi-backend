import { Router } from 'express';
import { adminThemeController } from '../controllers/admin.theme.controller.js';

const router = Router();

// Public route for the mobile app to fetch the theme
router.get('/', adminThemeController.getActiveTheme);

export default router;
