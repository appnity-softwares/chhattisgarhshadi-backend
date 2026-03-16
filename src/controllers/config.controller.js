import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { configService } from '../services/config.service.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logAdminAction } from '../services/activityLog.service.js';

/**
 * Get all configs
 */
export const getAllConfigs = asyncHandler(async (req, res) => {
  const configs = await configService.getAllConfigs();
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, configs, 'Configurations retrieved successfully')
  );
});

/**
 * Get public configs
 */
export const getPublicConfigs = asyncHandler(async (req, res) => {
  const configs = await configService.getPublicConfigs();
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, configs, 'Public configurations retrieved successfully')
  );
});

/**
 * Update/Set config
 */
export const upsertConfig = asyncHandler(async (req, res) => {
  const config = await configService.upsertConfig(req.body);
  
  await logAdminAction(req, 'CONFIG_UPDATED', `Updated system config: ${config.key}`, { 
    key: config.key, 
    value: config.value 
  });

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, config, 'Configuration updated successfully')
  );
});

export const configController = {
  getAllConfigs,
  getPublicConfigs,
  upsertConfig
};
