import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { configService } from '../services/config.service.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logAdminAction } from '../services/activityLog.service.js';

/**
 * Get all system settings (Admin Only)
 */
export const getAllSettings = asyncHandler(async (req, res) => {
  const settings = await configService.getAllConfig();
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, settings, 'System settings retrieved successfully')
  );
});

/**
 * Update Razorpay Settings (Admin Only)
 */
export const updateRazorpaySettings = asyncHandler(async (req, res) => {
  const { keyId, keySecret } = req.body;
  
  if (!keyId || !keySecret) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(
      new ApiResponse(HTTP_STATUS.BAD_REQUEST, null, 'Key ID and Key Secret are required')
    );
  }

  // Validate the keys first
  await configService.validateRazorpayKeys(keyId, keySecret);
  
  // Save to database
  await configService.updateConfig('RAZORPAY_KEY_ID', keyId, { group: 'PAYMENTS', isSecret: false });
  await configService.updateConfig('RAZORPAY_KEY_SECRET', keySecret, { group: 'PAYMENTS', isSecret: true });
  
  await logAdminAction(req, 'CONFIG_UPDATED', 'Updated Razorpay payment credentials', { keyId });

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, { keyId }, 'Razorpay keys validated and updated successfully')
  );
});

/**
 * Reset a config to default (Remove from DB, falling back to ENV)
 */
export const resetConfig = asyncHandler(async (req, res) => {
    // Implementation for resetting if needed
});

/**
 * NEW: Get Public Configs for Mobile App
 */
export const getPublicConfigs = asyncHandler(async (req, res) => {
    const settings = await configService.getAllConfig();
    
    // Return a flat array of non-secret, general/ui settings for compatibility with frontend find()
    const publicSettings = [
        ...(settings.GENERAL || []),
        ...(settings.UI || [])
    ];
    
    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, publicSettings, 'Public settings retrieved successfully')
    );
});

/**
 * Aliases for existing methods to match config.routes.js expectations
 */
export const getAllConfigs = getAllSettings;
export const upsertConfig = asyncHandler(async (req, res) => {
    const { key, value, type, group, isSecret } = req.body;
    const config = await configService.updateConfig(key, value, { type, group, isSecret });
    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, config, 'Configuration updated successfully')
    );
});

export const configController = {
    getAllSettings,
    updateRazorpaySettings,
    resetConfig,
    getPublicConfigs,
    getAllConfigs,
    upsertConfig
};
