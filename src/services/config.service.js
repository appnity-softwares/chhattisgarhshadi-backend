import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';
import Razorpay from 'razorpay';

class ConfigService {
  /**
   * Get all system configurations grouped by group
   */
  async getAllConfig() {
    const configs = await prisma.systemConfiguration.findMany({
      orderBy: { group: 'asc' }
    });
    
    // Group them for easier UI rendering
    return configs.reduce((acc, config) => {
      const group = config.group;
      if (!acc[group]) acc[group] = [];
      
      // Mask secret values
      const sanitized = { ...config };
      if (config.isSecret && config.value) {
        sanitized.value = '********';
      }
      
      acc[group].push(sanitized);
      return acc;
    }, {});
  }

  /**
   * Get a specific config value by key
   */
  async getConfigValue(key, defaultValue = null) {
    const config = await prisma.systemConfiguration.findUnique({
      where: { key }
    });
    
    if (!config) return defaultValue;
    
    if (config.type === 'BOOLEAN') return config.value === 'true';
    if (config.type === 'NUMBER') return Number(config.value);
    if (config.type === 'JSON') return JSON.parse(config.value);
    
    return config.value;
  }

  /**
   * Update or Create a config
   */
  async updateConfig(key, value, options = {}) {
    const { type = 'STRING', group = 'GENERAL', isSecret = false } = options;
    
    let stringValue = String(value);
    if (type === 'JSON') stringValue = JSON.stringify(value);
    
    const config = await prisma.systemConfiguration.upsert({
      where: { key },
      update: { 
        value: stringValue,
        isSecret
      },
      create: {
        key,
        value: stringValue,
        type,
        group,
        isSecret
      }
    });

    logger.info(`System configuration updated: ${key}`);
    return config;
  }

  /**
   * Validate Razorpay Keys
   */
  async validateRazorpayKeys(keyId, keySecret) {
    try {
      const instance = new Razorpay({
        key_id: keyId,
        key_secret: keySecret
      });
      
      // Test the keys by trying to fetch payments (minimal call)
      await instance.payments.all({ count: 1 });
      return true;
    } catch (error) {
      logger.error('Razorpay key validation failed:', error.message);
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, `Invalid Razorpay Keys: ${error.message}`);
    }
  }
}

export const configService = new ConfigService();
