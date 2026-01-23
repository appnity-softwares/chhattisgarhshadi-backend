import authService from '../services/auth.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

class AuthController {



  refreshToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;

    const result = await authService.refreshAccessToken(refreshToken, req.ip);

    const data = {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m',
    };

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, data, 'Token refreshed successfully'));
  });

  logout = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;
    const userId = req.user.id;

    await authService.logout(userId, refreshToken);

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, null, 'Logged out successfully'));
  });

  /**
   * Phone Login (Firebase Auth)
   * POST /auth/phone/login
   */
  phoneLogin = asyncHandler(async (req, res) => {
    const { firebaseIdToken, deviceInfo, agentCode } = req.body;

    if (!firebaseIdToken) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Firebase ID token is required');
    }

    const result = await authService.loginWithPhone(
      firebaseIdToken,
      req.ip,
      deviceInfo || {},
      agentCode
    );

    const message = result.isNewUser ? 'Account created successfully' : 'Login successful';
    const data = {
      user: result.user,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m',
      isNewUser: result.isNewUser,
    };

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, data, message));
  });

  /**
   * Verify Firebase Phone Auth Token
   * POST /auth/phone/verify-firebase
   */
  verifyFirebasePhone = asyncHandler(async (req, res) => {
    const { firebaseIdToken } = req.body;
    const userId = req.user.id;

    if (!firebaseIdToken) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Firebase ID token is required');
    }

    const result = await authService.verifyFirebasePhone(userId, firebaseIdToken);

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, result, 'Phone verified successfully'));
  });
}

export default new AuthController();