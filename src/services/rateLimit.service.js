/**
 * Rate Limiting Service for Notifications
 * Prevents notification spam and implements per-type rate limits
 */

import { logger } from '../config/logger.js';

// Rate limit configurations (per user)
const RATE_LIMITS = {
    MESSAGE: { max: 100, windowMs: 60 * 60 * 1000 }, // 100 messages/hour
    MATCH_REQUEST: { max: 10, windowMs: 60 * 60 * 1000 }, // 10 requests/hour
    MATCH_ACCEPTED: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PROFILE_VIEWED: { max: 50, windowMs: 60 * 60 * 1000 }, // 50/hour
    SHORTLIST: { max: 30, windowMs: 60 * 60 * 1000 }, // 30/hour
    CONTACT_REQUEST: { max: 15, windowMs: 60 * 60 * 1000 }, // 15/hour
    CONTACT_ACCEPTED: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PHOTO_REQUEST: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PHOTO_ACCEPTED: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PAYMENT_SUCCESS: { max: 5, windowMs: 24 * 60 * 60 * 1000 }, // 5/day
    SUBSCRIPTION_EXPIRING: { max: 3, windowMs: 24 * 60 * 60 * 1000 }, // 3/day
    SUBSCRIPTION_EXPIRED: { max: 3, windowMs: 24 * 60 * 60 * 1000 }, // 3/day
    GENERAL: { max: 50, windowMs: 60 * 60 * 1000 }, // 50/hour
};

// Instead of Map, we will use Redis for distributed rate-limiting
import { getRedisClient, isRedisConnected } from '../config/redis.js';

/**
 * Check if a notification should be rate limited
 * @param {number} userId - User ID
 * @param {string} type - Notification type
 * @returns {Promise<boolean>} - True if rate limited, false if allowed
 */
export const isRateLimited = async (userId, type) => {
    const limit = RATE_LIMITS[type] || RATE_LIMITS.GENERAL;
    const now = Date.now();

    if (!isRedisConnected()) {
      logger.warn('Redis not connected, bypassing rate limit (unsafe)');
      return false; // Fallback to allow if Redis is down
    }

    const redis = getRedisClient();
    const key = `ratelimit:${type}:${userId}`;
    
    try {
        const countStr = await redis.get(key);
        let count = countStr ? parseInt(countStr, 10) : 0;

        if (count >= limit.max) {
            logger.warn(
                `Rate limit exceeded for user ${userId}, type: ${type} ` +
                `(${count}/${limit.max} in ${limit.windowMs}ms)`
            );
            return true;
        }

        const multi = redis.multi();
        multi.incr(key);
        if (count === 0) {
            // Set TTL in seconds on the first request
            multi.pexpire(key, limit.windowMs);
        }
        await multi.exec();

        return false;
    } catch (error) {
        logger.error(`Redis rate limit error: ${error.message}`);
        return false; // Fallback
    }
};

/**
 * Get current rate limit status for a user and type
 * @param {number} userId - User ID
 * @param {string} type - Notification type
 * @returns {Promise<object>} - { allowed: boolean, remaining: number, resetAt: timestamp }
 */
export const getRateLimitStatus = async (userId, type) => {
    const limit = RATE_LIMITS[type] || RATE_LIMITS.GENERAL;
    const now = Date.now();

    if (!isRedisConnected()) {
        return { allowed: true, remaining: limit.max, resetAt: now + limit.windowMs };
    }

    const redis = getRedisClient();
    const key = `ratelimit:${type}:${userId}`;
    
    try {
        const countStr = await redis.get(key);
        const count = countStr ? parseInt(countStr, 10) : 0;
        const ttl = await redis.pttl(key); // Returns TTL in ms

        return {
            allowed: count < limit.max,
            remaining: Math.max(0, limit.max - count),
            resetAt: ttl > 0 ? now + ttl : now + limit.windowMs,
        };
    } catch (err) {
        return { allowed: true, remaining: limit.max, resetAt: now + limit.windowMs };
    }
};

/**
 * Reset rate limit for a user (admin function)
 * @param {number} userId - User ID
 * @param {string} [type] - Optional specific type to reset
 */
export const resetRateLimit = async (userId, type = null) => {
    if (!isRedisConnected()) return;
    const redis = getRedisClient();
    
    try {
        if (type) {
            await redis.del(`ratelimit:${type}:${userId}`);
            logger.info(`Rate limit reset for user ${userId}, type: ${type}`);
        } else {
            const keys = await redis.keys(`ratelimit:*:${userId}`);
            if (keys.length > 0) {
                await redis.del(...keys);
            }
            logger.info(`All rate limits reset for user ${userId}`);
        }
    } catch (err) {
        logger.error(`Error resetting rate limit for ${userId}: ${err.message}`);
    }
};

/**
 * Get rate limit configuration
 * @returns {object} - Rate limit configurations
 */
export const getRateLimitConfig = () => {
    return { ...RATE_LIMITS };
};

export default {
    isRateLimited,
    getRateLimitStatus,
    resetRateLimit,
    getRateLimitConfig,
};
