import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { successStoryService } from '../services/successStory.service.js';

/**
 * Controller for success stories
 */
export const successStoryController = {
    /**
     * Publicly list approved success stories
     */
    list: asyncHandler(async (req, res) => {
        const { stories, pagination } = await successStoryService.getApprovedStories(req.query);
        return res.json(new ApiResponse(200, { stories, pagination }, 'Success stories retrieved'));
    }),

    /**
     * Get details of a single story
     */
    getById: asyncHandler(async (req, res) => {
        const story = await successStoryService.getStoryById(parseInt(req.params.id));
        return res.json(new ApiResponse(200, story, 'Success story details retrieved'));
    }),

    /**
     * Allow a logged-in user to submit their own story
     */
    submit: asyncHandler(async (req, res) => {
        const userId = req.user.id;
        const story = await successStoryService.submitStory(userId, req.body);
        return res.json(new ApiResponse(201, story, 'Success story submitted for approval!'));
    })
};
