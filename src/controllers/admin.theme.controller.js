import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

export const adminThemeController = {
  /**
   * Get the active app theme
   * Returns default fallback colors if none found
   */
  getActiveTheme: asyncHandler(async (req, res) => {
    // Default fallback colors
    const DEFAULT_THEME = {
      primaryColor: '#E94057',
      secondaryColor: '#8A2387',
      accentColor: '#F27121',
      backgroundColor: '#FFFFFF',
      surfaceColor: '#F8F9FA',
      textPrimary: '#1A1A1A',
      textSecondary: '#757575',
      successColor: '#4CAF50',
      errorColor: '#F44336',
      gradientStart: '#E94057',
      gradientEnd: '#8A2387'
    };

    let theme = null;

    try {
      theme = await prisma.themeConfiguration.findFirst({
        where: { isActive: true },
        orderBy: { updatedAt: 'desc' }
      });
    } catch (error) {
      // Table likely does not exist yet (Database Migration Pending)
      // Log it but don't fail, fallback to defaults
      logger.warn('ThemeConfiguration table not found or query failed, using defaults:', error.message);
    }

    if (!theme) {
      theme = DEFAULT_THEME;
    }

    return res.status(HTTP_STATUS.OK).json(
      new ApiResponse(HTTP_STATUS.OK, theme, 'Active theme fetched successfully')
    );
  }),

  /**
   * Update or Create Active Theme
   */
  updateTheme: asyncHandler(async (req, res) => {
    const {
      primaryColor, secondaryColor, accentColor,
      backgroundColor, surfaceColor,
      textPrimary, textSecondary,
      successColor, errorColor,
      gradientStart, gradientEnd
    } = req.body;

    // First deactivate any currently active models
    await prisma.themeConfiguration.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });

    // Create new active theme config
    const newTheme = await prisma.themeConfiguration.create({
      data: {
        primaryColor: primaryColor || '#E94057',
        secondaryColor: secondaryColor || '#8A2387',
        accentColor: accentColor || '#F27121',
        backgroundColor: backgroundColor || '#FFFFFF',
        surfaceColor: surfaceColor || '#F8F9FA',
        textPrimary: textPrimary || '#1A1A1A',
        textSecondary: textSecondary || '#757575',
        successColor: successColor || '#4CAF50',
        errorColor: errorColor || '#F44336',
        gradientStart: gradientStart || primaryColor || '#E94057',
        gradientEnd: gradientEnd || secondaryColor || '#8A2387',
        isActive: true
      }
    });

    return res.status(HTTP_STATUS.OK).json(
      new ApiResponse(HTTP_STATUS.OK, newTheme, 'Theme updated successfully')
    );
  })
};
