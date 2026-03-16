/**
 * FAQ Routes
 * Public: GET /api/v1/faq — fetch all active FAQs
 * Admin:  GET/POST/PUT/DELETE — full CRUD
 * 
 * Uses the SystemConfig table with category='FAQ' to store FAQs.
 * No schema changes needed!
 */

import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';
import prisma from '../config/database.js';

const router = Router();

/**
 * PUBLIC: Get all published FAQs grouped by category
 * GET /api/v1/faq
 */
router.get('/', asyncHandler(async (req, res) => {
    const faqs = await prisma.systemConfig.findMany({
        where: {
            category: 'FAQ',
            isPublic: true,
        },
        orderBy: [
            { createdAt: 'asc' },
        ],
    });

    // Parse FAQ data from the key-value store
    const parsed = faqs.map(faq => {
        try {
            const data = JSON.parse(faq.value);
            return {
                id: faq.id,
                key: faq.key,
                question: data.question || '',
                questionHi: data.questionHi || '',
                answer: data.answer || '',
                answerHi: data.answerHi || '',
                faqCategory: data.faqCategory || 'General',
                order: data.order || 0,
                isActive: data.isActive !== false,
            };
        } catch {
            return null;
        }
    }).filter(Boolean).filter(f => f.isActive).sort((a, b) => a.order - b.order);

    // Group by faqCategory
    const grouped = {};
    for (const faq of parsed) {
        if (!grouped[faq.faqCategory]) {
            grouped[faq.faqCategory] = [];
        }
        grouped[faq.faqCategory].push(faq);
    }

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, {
            faqs: parsed,
            grouped,
            total: parsed.length,
        }, 'FAQs retrieved successfully')
    );
}));

/**
 * ADMIN: Get all FAQs (including inactive)
 * GET /api/v1/faq/admin
 */
router.get('/admin', authenticate, requireAdmin, asyncHandler(async (req, res) => {
    const faqs = await prisma.systemConfig.findMany({
        where: { category: 'FAQ' },
        orderBy: { createdAt: 'asc' },
    });

    const parsed = faqs.map(faq => {
        try {
            const data = JSON.parse(faq.value);
            return {
                id: faq.id,
                key: faq.key,
                question: data.question || '',
                questionHi: data.questionHi || '',
                answer: data.answer || '',
                answerHi: data.answerHi || '',
                faqCategory: data.faqCategory || 'General',
                order: data.order || 0,
                isActive: data.isActive !== false,
                createdAt: faq.createdAt,
                updatedAt: faq.updatedAt,
            };
        } catch {
            return null;
        }
    }).filter(Boolean).sort((a, b) => a.order - b.order);

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, parsed, 'Admin FAQs retrieved')
    );
}));

/**
 * ADMIN: Create a new FAQ
 * POST /api/v1/faq
 */
router.post('/', authenticate, requireAdmin, asyncHandler(async (req, res) => {
    const { question, questionHi, answer, answerHi, faqCategory, order, isActive } = req.body;

    if (!question || !answer) {
        return res.status(400).json(
            new ApiResponse(400, null, 'Question and answer are required')
        );
    }

    const key = `faq_${Date.now()}`;
    const value = JSON.stringify({
        question,
        questionHi: questionHi || '',
        answer,
        answerHi: answerHi || '',
        faqCategory: faqCategory || 'General',
        order: order || 0,
        isActive: isActive !== false,
    });

    const faq = await prisma.systemConfig.create({
        data: {
            key,
            value,
            dataType: 'JSON',
            category: 'FAQ',
            description: question.substring(0, 100),
            isPublic: true,
        },
    });

    const parsed = JSON.parse(faq.value);

    res.status(HTTP_STATUS.CREATED).json(
        new ApiResponse(HTTP_STATUS.CREATED, {
            id: faq.id,
            key: faq.key,
            ...parsed,
        }, 'FAQ created successfully')
    );
}));

/**
 * ADMIN: Update a FAQ
 * PUT /api/v1/faq/:id
 */
router.put('/:id', authenticate, requireAdmin, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { question, questionHi, answer, answerHi, faqCategory, order, isActive } = req.body;

    const existing = await prisma.systemConfig.findUnique({ where: { id } });
    if (!existing || existing.category !== 'FAQ') {
        return res.status(404).json(
            new ApiResponse(404, null, 'FAQ not found')
        );
    }

    let existingData = {};
    try { existingData = JSON.parse(existing.value); } catch {}

    const value = JSON.stringify({
        ...existingData,
        ...(question !== undefined && { question }),
        ...(questionHi !== undefined && { questionHi }),
        ...(answer !== undefined && { answer }),
        ...(answerHi !== undefined && { answerHi }),
        ...(faqCategory !== undefined && { faqCategory }),
        ...(order !== undefined && { order }),
        ...(isActive !== undefined && { isActive }),
    });

    const faq = await prisma.systemConfig.update({
        where: { id },
        data: {
            value,
            description: (question || existingData.question || '').substring(0, 100),
        },
    });

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, {
            id: faq.id,
            key: faq.key,
            ...JSON.parse(faq.value),
        }, 'FAQ updated successfully')
    );
}));

/**
 * ADMIN: Delete a FAQ
 * DELETE /api/v1/faq/:id
 */
router.delete('/:id', authenticate, requireAdmin, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const existing = await prisma.systemConfig.findUnique({ where: { id } });
    if (!existing || existing.category !== 'FAQ') {
        return res.status(404).json(
            new ApiResponse(404, null, 'FAQ not found')
        );
    }

    await prisma.systemConfig.delete({ where: { id } });

    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, null, 'FAQ deleted successfully')
    );
}));

export default router;
