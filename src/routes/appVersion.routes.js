import { Router } from 'express';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';

const router = Router();

const appVersionConfig = {
  latestVersion: process.env.APP_LATEST_VERSION || '1.0.0',
  minimumVersion: process.env.APP_MINIMUM_VERSION || '1.0.0',
  forceUpdate: process.env.APP_FORCE_UPDATE === 'true',
  updateUrl: process.env.APP_UPDATE_URL || '',
};

router.get('/version', (_req, res) => {
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, appVersionConfig, 'App version retrieved successfully')
  );
});

export default router;
