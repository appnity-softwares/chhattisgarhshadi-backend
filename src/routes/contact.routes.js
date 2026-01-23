import express from 'express';
import * as contactController from '../controllers/contact.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Submit contact form (Public)
 * @access  Public
 */
router.post('/', contactController.submitContactForm);

/**
 * @route   GET /api/contact
 * @desc    Get all contact messages (Admin)
 * @access  Private (Admin)
 */
router.get('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.getContactMessages);

/**
 * @route   GET /api/contact/:id
 * @desc    Get single message (Admin)
 * @access  Private (Admin)
 */
router.get('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.getSingleMessage);

/**
 * @route   PATCH /api/contact/:id/status
 * @desc    Update message status (Admin)
 * @access  Private (Admin)
 */
router.patch('/:id/status', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.updateStatus);

/**
 * @route   DELETE /api/contact/:id
 * @desc    Delete message (Admin)
 * @access  Private (Admin)
 */
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.deleteContactMessage);

export default router;
