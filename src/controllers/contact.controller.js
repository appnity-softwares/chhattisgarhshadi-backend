import * as contactService from '../services/contact.service.js';
import { catchAsync } from '../utils/catchAsync.js';

/**
 * Handle contact form submission
 */
export const submitContactForm = catchAsync(async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name, email and message',
        });
    }

    const contactMessage = await contactService.createContactMessage({
        name,
        email,
        phone,
        subject,
        message,
    });

    res.status(201).json({
        success: true,
        message: 'Message sent successfully! We will get back to you soon.',
        data: contactMessage,
    });
});

/**
 * Handle getting all contact messages (Admin)
 */
export const getContactMessages = catchAsync(async (req, res) => {
    const { page, limit, status } = req.query;

    const result = await contactService.getAllContactMessages({
        page,
        limit,
        status,
    });

    res.status(200).json({
        success: true,
        data: result.messages,
        pagination: result.pagination,
    });
});

/**
 * Handle updating message status (Admin)
 */
export const updateStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({
            success: false,
            message: 'Status is required',
        });
    }

    const updatedMessage = await contactService.updateMessageStatus(id, status);

    res.status(200).json({
        success: true,
        message: 'Message status updated successfully',
        data: updatedMessage,
    });
});

/**
 * Handle getting single message (Admin)
 */
export const getSingleMessage = catchAsync(async (req, res) => {
    const { id } = req.params;
    const message = await contactService.getMessageById(id);

    if (!message) {
        return res.status(404).json({
            success: false,
            message: 'Message not found',
        });
    }

    res.status(200).json({
        success: true,
        data: message,
    });
});

/**
 * Handle deleting message (Admin)
 */
export const deleteContactMessage = catchAsync(async (req, res) => {
    const { id } = req.params;
    await contactService.deleteMessage(id);

    res.status(200).json({
        success: true,
        message: 'Message deleted successfully',
    });
});
