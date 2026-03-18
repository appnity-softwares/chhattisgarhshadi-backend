import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import activityLogService from '../services/activityLog.service.js';

/**
 * Get activity logs with pagination and filters
 */
export const getActivityLogs = asyncHandler(async (req, res) => {
    const { page = 1, limit = 20, actionType, actorId, startDate, endDate } = req.query;

    const result = await activityLogService.getActivityLogs({
        page: parseInt(page),
        limit: parseInt(limit),
        actionType,
        actorId,
        startDate,
        endDate,
    });

    return res.json(new ApiResponse(200, result, 'Activity logs fetched'));
});

/**
 * Get activity log stats
 */
export const getActivityStats = asyncHandler(async (req, res) => {
    const stats = await activityLogService.getActivityStats();
    return res.json(new ApiResponse(200, stats, 'Activity stats fetched'));
});

export default {
    getActivityLogs,
    getActivityStats,
};
