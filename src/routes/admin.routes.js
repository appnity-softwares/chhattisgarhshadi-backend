import { Router } from 'express';
import multer from 'multer'; // ADDED
import { adminController } from '../controllers/admin.controller.js';
import { runDiagnostics } from '../controllers/diagnostics.controller.js'; // ADDED
import { adminBulkController } from '../controllers/admin.bulk.controller.js'; // ADDED
import { authenticate, requireAdmin } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  paginationQuerySchema,
  recentQuerySchema,
  userIdParamSchema,
  updateUserRoleSchema,
  getReportsSchema,
  reportIdParamSchema,
  updateReportSchema,
} from '../validation/admin.validation.js';

import agentRoutes from './agent.routes.js';
// ADDED: Import analytics routes
import analyticsRoutes from './analytics.routes.js';
// ADDED: Import activity log routes
import activityLogRoutes from './activityLog.routes.js';
// ADDED: Import new admin features
import promoCodeRoutes from './promoCode.routes.js';
import adminNotificationRoutes from './admin.notification.routes.js';
import adminThemeRoutes from './admin.theme.routes.js';
import adminSuccessStoryRoutes from './admin.successStory.routes.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() }); // ADDED: Memory storage for Excel

// --- Admin Auth ---
router.post('/login', adminController.adminLogin);

// All routes require authentication and admin role
router.use(authenticate, requireAdmin);

// --- User Management ---
router.get(
  '/users',
  validate(paginationQuerySchema),
  adminController.getAllUsers
);

// ADDED: Bulk User Upload
router.post(
  '/users/bulk-upload',
  upload.single('file'),
  adminBulkController.uploadUsers
);

router.get(
  '/users/recent',
  validate(recentQuerySchema),
  adminController.getRecentUsers
);
router.get(
  '/users/:userId',
  validate(userIdParamSchema),
  adminController.getUserById
);
router.put(
  '/users/:userId/role',
  validate(updateUserRoleSchema),
  adminController.updateUserRole
);
router.delete(
  '/users/:userId',
  validate(userIdParamSchema),
  adminController.deleteUser
);
router.post(
  '/users/:userId/ban',
  validate(userIdParamSchema),
  adminController.banUser
);
router.post(
  '/users/:userId/unban',
  validate(userIdParamSchema),
  adminController.unbanUser
);
router.post(
  '/users/:userId/grant-subscription',
  validate(userIdParamSchema),
  adminController.grantSubscription
);

// --- Profile Management ---
router.get(
  '/profiles',
  validate(paginationQuerySchema),
  adminController.getAllProfiles
);
router.put('/profiles/:profileId/verify', adminController.verifyProfile);
router.put('/profiles/:profileId/status', adminController.updateProfileStatus);

// --- Match Management ---
router.get(
  '/matches/recent',
  validate(recentQuerySchema),
  adminController.getRecentMatches
);

// --- Dashboard & System ---
router.get('/stats', adminController.getDashboardStats);
router.post('/cleanup/tokens', adminController.cleanupExpiredTokens);
router.get('/diagnostics', runDiagnostics); // ADDED: New Diagnostics route

// --- Report Management ---
router.get(
  '/reports',
  validate(getReportsSchema),
  adminController.getReports
);
router.get(
  '/reports/:id',
  validate(reportIdParamSchema),
  adminController.getReportById
);
router.put(
  '/reports/:id',
  validate(updateReportSchema),
  adminController.updateReport
);

router.use('/agents', agentRoutes);

// --- ADDED: Analytics ---
// All routes will be prefixed with /admin/analytics
router.use('/analytics', analyticsRoutes);

// --- SUBSCRIPTION PLAN MANAGEMENT ---
router.get('/plans', adminController.getPlans);
router.put('/plans/:planId', adminController.updatePlan); // ADDED: Update plan details
router.patch('/plans/:planId/discount', adminController.updatePlanDiscount);

// --- ADDED: Activity Logs ---
// All routes will be prefixed with /admin/activity-logs
router.use('/activity-logs', activityLogRoutes);

// --- ADDED: Marketing & Notifications ---
router.use('/promo-codes', promoCodeRoutes);
router.use('/notifications', adminNotificationRoutes);
router.use('/theme', adminThemeRoutes);
router.use('/success-stories', adminSuccessStoryRoutes);

export default router;