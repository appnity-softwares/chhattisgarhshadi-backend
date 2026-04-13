import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';

/**
 * Submit a success story
 * @param {number} userId1 - The user submitting the story
 * @param {Object} data - Story details
 */
export const submitStory = async (userId1, data) => {
    try {
        const { partnerName, userId2, title, story, weddingDate, imageUrl, galleryUrls } = data;

        // Check if user already submitted a story
        const existing = await prisma.successStory.findFirst({
            where: { userId1, status: { not: 'REJECTED' } }
        });

        if (existing) {
            throw new ApiError(HTTP_STATUS.CONFLICT, 'You have already submitted a success story');
        }

        const successStory = await prisma.successStory.create({
            data: {
                userId1,
                userId2: userId2 ? parseInt(userId2) : null,
                partnerName,
                title,
                story,
                weddingDate: weddingDate ? new Date(weddingDate) : null,
                imageUrl,
                galleryUrls: galleryUrls ? JSON.stringify(galleryUrls) : null,
                status: 'PENDING'
            }
        });

        logger.info(`Success story submitted by user ${userId1}`);
        return successStory;
    } catch (error) {
        logger.error('Error in submitStory:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to submit success story');
    }
};

/**
 * Get approved success stories
 * @param {Object} query - Pagination and featured filter
 */
export const getApprovedStories = async (query) => {
    const { page, limit, skip } = getPaginationParams(query);
    const { isFeatured } = query;

    const where = {
        status: 'APPROVED',
        ...(isFeatured === 'true' && { isFeatured: true })
    };

    try {
        const [stories, total] = await Promise.all([
            prisma.successStory.findMany({
                where,
                skip,
                take: limit,
                include: {
                    user1: {
                        select: {
                            id: true,
                            profilePicture: true,
                            profile: {
                                select: { firstName: true, lastName: true }
                            }
                        }
                    },
                    user2: {
                        select: {
                            id: true,
                            profilePicture: true,
                            profile: {
                                select: { firstName: true, lastName: true }
                            }
                        }
                    }
                },
                orderBy: [
                    { isFeatured: 'desc' },
                    { createdAt: 'desc' }
                ]
            }),
            prisma.successStory.count({ where })
        ]);

        const pagination = getPaginationMetadata(page, limit, total);
        return { stories, pagination };
    } catch (error) {
        logger.error('Error in getApprovedStories:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve success stories');
    }
};

/**
 * Get single story by ID
 * @param {number} id - Story ID
 */
export const getStoryById = async (id) => {
    try {
        const story = await prisma.successStory.findUnique({
            where: { id },
            include: {
                user1: { select: { id: true, profile: true } },
                user2: { select: { id: true, profile: true } }
            }
        });

        if (!story || story.status !== 'APPROVED') {
            throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Success story not found');
        }

        // Increment views
        await prisma.successStory.update({
            where: { id },
            data: { views: { increment: 1 } }
        });

        return story;
    } catch (error) {
        logger.error('Error in getStoryById:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve story');
    }
};

export const successStoryService = {
    submitStory,
    getApprovedStories,
    getStoryById
};
