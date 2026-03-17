import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const promoCodeController = {
    getAll: asyncHandler(async (req, res) => {
        const codes = await prisma.promoCode.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return res.json(new ApiResponse(200, codes, 'Promo codes fetched'));
    }),

    create: asyncHandler(async (req, res) => {
        const { code, discount, discountType, expiresAt, maxUsage } = req.body;
        
        const existing = await prisma.promoCode.findUnique({ where: { code } });
        if (existing) throw new ApiError(400, 'Code already exists');

        const newCode = await prisma.promoCode.create({
            data: {
                code,
                discount: parseFloat(discount),
                discountType,
                expiresAt: new Date(expiresAt),
                maxUsage: maxUsage ? parseInt(maxUsage) : null
            }
        });

        return res.status(201).json(new ApiResponse(201, newCode, 'Promo code created'));
    }),

    delete: asyncHandler(async (req, res) => {
        const { id } = req.params;
        await prisma.promoCode.delete({ where: { id: parseInt(id) } });
        return res.json(new ApiResponse(200, null, 'Promo code deleted'));
    }),

    getStats: asyncHandler(async (req, res) => {
        const total = await prisma.promoCode.count();
        const active = await prisma.promoCode.count({ where: { isActive: true } });
        const totalUsage = await prisma.promoCode.aggregate({
            _sum: { usageCount: true }
        });

        return res.json(new ApiResponse(200, {
            total,
            active,
            totalUsage: totalUsage._sum.usageCount || 0
        }, 'Stats fetched'));
    })
};
