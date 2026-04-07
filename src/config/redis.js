/**
 * Redis Configuration
 * Provides Redis client for caching with automatic reconnection
 */

import Redis from 'ioredis';
import { logger } from './logger.js';
import { config } from './config.js';

// Redis connection URL (set in env for production)
const REDIS_URL = config.REDIS_URL || 'redis://localhost:6379';

let redisClient = null;
let isConnected = false;

/**
 * Initialize Redis connection
 */
export const initializeRedis = () => {
    try {
        redisClient = new Redis(REDIS_URL, {
            maxRetriesPerRequest: 3,
            retryDelayOnFailover: 100,
            enableReadyCheck: true,
            lazyConnect: true,
            // Connection pool settings
            connectionName: 'chhattisgarh-shadi-cache',
            // Reconnection settings
            retryStrategy: (times) => {
                if (times > 10) {
                    logger.error('Redis: Max reconnection attempts reached');
                    return null; // Stop retrying
                }
                const delay = Math.min(times * 200, 2000);
                logger.warn(`Redis: Reconnecting in ${delay}ms (attempt ${times})`);
                return delay;
            },
        });

        redisClient.on('connect', () => {
            logger.info('Redis: Connecting...');
        });

        redisClient.on('ready', () => {
            isConnected = true;
            logger.info('Redis: Connected and ready ✅');
        });

        redisClient.on('error', (err) => {
            isConnected = false;
            logger.error('Redis: Connection error:', err.message);
        });

        redisClient.on('close', () => {
            isConnected = false;
            logger.warn('Redis: Connection closed');
        });

        // Connect
        redisClient.connect().catch((err) => {
            logger.error('Redis: Initial connection failed:', err.message);
        });

        return redisClient;
    } catch (error) {
        logger.error('Redis: Failed to initialize:', error);
        return null;
    }
};

/**
 * Get Redis client instance
 */
export const getRedisClient = () => redisClient;
export const getRedisUrl = () => REDIS_URL;

/**
 * Create a new Redis client instance (for pub/sub, queues, etc.)
 */
export const createRedisClient = (connectionName) => {
    return new Redis(REDIS_URL, {
        maxRetriesPerRequest: 3,
        retryDelayOnFailover: 100,
        enableReadyCheck: true,
        lazyConnect: true,
        connectionName,
        retryStrategy: (times) => {
            if (times > 10) return null;
            return Math.min(times * 200, 2000);
        },
    });
};

/**
 * Check if Redis is connected
 */
export const isRedisConnected = () => isConnected;

/**
 * Gracefully close Redis connection
 */
export const closeRedis = async () => {
    if (redisClient) {
        await redisClient.quit();
        logger.info('Redis: Connection closed gracefully');
    }
};

export default {
    initializeRedis,
    getRedisClient,
    isRedisConnected,
    closeRedis,
};
