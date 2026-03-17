import { Router } from 'express';
import { promoCodeController } from '../controllers/promoCode.controller.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();

router.use(authenticate, requireAdmin);

router.get('/', promoCodeController.getAll);
router.post('/', promoCodeController.create);
router.get('/stats', promoCodeController.getStats);
router.delete('/:id', promoCodeController.delete);

export default router;
