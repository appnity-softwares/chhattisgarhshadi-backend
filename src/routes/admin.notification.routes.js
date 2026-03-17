import { Router } from 'express';
import { adminNotificationController } from '../controllers/admin.notification.controller.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();

router.use(authenticate, requireAdmin);

router.post('/send', adminNotificationController.sendBulk);
router.get('/history', adminNotificationController.getHistory);

export default router;
