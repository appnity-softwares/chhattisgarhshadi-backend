import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { adminSuccessStoryService } from '../services/admin.successStory.service.js';

/**
 * Controller for admin-side success story management
 */
export const adminSuccessStoryController = {
    /**
     * List all stories with filtering
     */
    list: asyncHandler(async (req, res) => {
        const { stories, pagination } = await adminSuccessStoryService.getAllStories(req.query);
        return res.json(new ApiResponse(200, { stories, pagination }, 'Success stories retrieved for admin'));
    }),

    /**
     * Update story status (Approve/Reject) or Feature it
     */
    update: asyncHandler(async (req, res) => {
        const story = await adminSuccessStoryService.updateStory(parseInt(req.params.id), req.body);
        return res.json(new ApiResponse(200, story, 'Success story updated successfully'));
    }),

    /**
     * Delete a story
     */
    delete: asyncHandler(async (req, res) => {
        await adminSuccessStoryService.deleteStory(parseInt(req.params.id));
        return res.json(new ApiResponse(200, null, 'Success story deleted successfully'));
    })
};
