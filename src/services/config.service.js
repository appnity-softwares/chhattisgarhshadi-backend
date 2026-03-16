import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

class ConfigService {
  /**
   * Get all system configurations
   */
  async getAllConfigs() {
    return await prisma.systemConfig.findMany({
      orderBy: { category: 'asc' }
    });
  }

  /**
   * Get config by key
   */
  async getConfigByKey(key) {
    const config = await prisma.systemConfig.findUnique({
      where: { key }
    });
    return config;
  }

  /**
   * Upsert config (create or update)
   */
  async upsertConfig(data) {
    const { key, value, dataType, category, description, isPublic } = data;
    
    return await prisma.systemConfig.upsert({
      where: { key },
      update: {
        value,
        dataType: dataType || 'string',
        category: category || 'general',
        description,
        isPublic: isPublic !== undefined ? isPublic : false
      },
      create: {
        key,
        value,
        dataType: dataType || 'string',
        category: category || 'general',
        description,
        isPublic: isPublic !== undefined ? isPublic : false
      }
    });
  }

  /**
   * Get public configurations (for the mobile app)
   */
  async getPublicConfigs() {
    return await prisma.systemConfig.findMany({
      where: { isPublic: true }
    });
  }
}

export const configService = new ConfigService();
