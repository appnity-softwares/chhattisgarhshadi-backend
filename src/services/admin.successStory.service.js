import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';

/**
 * List all stories for admin (with filtering by status)
 */
export const getAllStories = async (query) => {
    const { page, limit, skip } = getPaginationParams(query);
    const { status } = query;

    const where = {
        ...(status && { status })
    };

    try {
        const [stories, total] = await Promise.all([
            prisma.successStory.findMany({
                where,
                skip,
                take: limit,
                include: {
                    user1: { select: { id: true, email: true, phone: true, profile: true } },
                    user2: { select: { id: true, email: true, phone: true, profile: true } }
                },
                orderBy: { createdAt: 'desc' }
            }),
            prisma.successStory.count({ where })
        ]);

        const pagination = getPaginationMetadata(page, limit, total);
        return { stories, pagination };
    } catch (error) {
        logger.error('Error in admin getAllStories:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve stories');
    }
};

/**
 * Update story status (Approve/Reject) or Feature it
 */
export const updateStory = async (id, data) => {
    try {
        const { status, isFeatured, story, title } = data;

        const updated = await prisma.successStory.update({
            where: { id },
            data: {
                ...(status && { status }),
                ...(isFeatured !== undefined && { isFeatured }),
                ...(story && { story }),
                ...(title && { title })
            }
        });

        logger.info(`Success story ${id} updated by admin. Status: ${status}`);
        return updated;
    } catch (error) {
        logger.error('Error in updateStory:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update story');
    }
};

/**
 * Delete a story
 */
export const deleteStory = async (id) => {
    try {
        await prisma.successStory.delete({ where: { id } });
        logger.info(`Success story ${id} deleted by admin`);
    } catch (error) {
        logger.error('Error in deleteStory:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to delete story');
    }
};

/**
 * Create a success story (Admin can specify userId1)
 */
export const createStory = async (data) => {
    try {
        const { userId1, userId2, partnerName, title, story, weddingDate, imageUrl, isFeatured } = data;

        const newStory = await prisma.successStory.create({
            data: {
                userId1: parseInt(userId1),
                userId2: userId2 ? parseInt(userId2) : null,
                partnerName,
                title,
                story,
                weddingDate: weddingDate ? new Date(weddingDate) : null,
                imageUrl,
                isFeatured: isFeatured || false,
                status: 'APPROVED' // Admin created stories are auto-approved
            }
        });

        logger.info(`Success story created by admin for user ${userId1}`);
        return newStory;
    } catch (error) {
        logger.error('Error in creating story by admin:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to create story');
    }
};

export const adminSuccessStoryService = {
    getAllStories,
    updateStory,
    deleteStory,
    createStory, // ADDED
};
