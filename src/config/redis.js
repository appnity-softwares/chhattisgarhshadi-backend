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
 * @returns {Promise<Object>} The redis client
 */
export const initializeRedis = () => {
    return new Promise((resolve, reject) => {
        try {
            if (redisClient) return resolve(redisClient);

            redisClient = new Redis(REDIS_URL, {
                maxRetriesPerRequest: 3,
                retryDelayOnFailover: 100,
                enableReadyCheck: true,
                lazyConnect: true,
                connectionName: 'chhattisgarh-shadi-cache',
                retryStrategy: (times) => {
                    if (times > 10) {
                        logger.error('Redis: Max reconnection attempts reached');
                        return null; 
                    }
                    const delay = Math.min(times * 200, 2000);
                    logger.warn(`Redis: Reconnecting in ${delay}ms (attempt ${times})`);
                    return delay;
                },
            });

            redisClient.on('ready', () => {
                isConnected = true;
                logger.info('Redis: Connected and ready ✅');
                resolve(redisClient);
            });

            redisClient.on('error', (err) => {
                isConnected = false;
                logger.error('Redis: Connection error:', err.message);
                // If it's a connection refused, we still resolve to let the app run without cache
                if (err.message.includes('ECONNREFUSED')) {
                    resolve(null);
                }
            });

            // Connect
            redisClient.connect().catch((err) => {
                logger.error('Redis: Initial connection failed:', err.message);
                resolve(null);
            });
        } catch (error) {
            logger.error('Redis: Failed to initialize:', error);
            resolve(null);
        }
    });
};

/**
 * Get Redis client instance
 */
export const getRedisClient = () => redisClient;
export const getRedisUrl = () => REDIS_URL;

/**
 * Create a new Redis client instance (for pub/sub, queues, etc.)
 */
export const createRedisClient = (connectionName, options = {}) => {
    return new Redis(REDIS_URL, {
        maxRetriesPerRequest: 3, // Default, can be overridden by options
        retryDelayOnFailover: 100,
        enableReadyCheck: true,
        lazyConnect: true,
        connectionName,
        retryStrategy: (times) => {
            if (times > 10) return null;
            return Math.min(times * 200, 2000);
        },
        ...options
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
