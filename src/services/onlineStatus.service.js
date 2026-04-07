/**
 * Online Status Service
 * Manages last seen and online status
 */

import prisma from '../config/database.js';
import { getRedisClient, isRedisConnected } from '../config/redis.js';
import { logger } from '../config/logger.js';

const ONLINE_USERS_KEY = 'online:users';
const USER_SOCKETS_KEY = (userId) => `online:user:${userId}:sockets`;
const SOCKET_USER_KEY = (socketId) => `online:socket:${socketId}:user`;
const SOCKET_TTL_SECONDS = 60 * 60 * 24;

/**
 * Update user's online status
 */
export const updateOnlineStatus = async (userId, isOnline) => {
    try {
        await prisma.user.update({
            where: { id: userId },
            data: {
                isOnline,
                lastSeen: isOnline ? null : new Date(),
            },
        });
        return true;
    } catch (error) {
        logger.error('Error updating online status:', error);
        return false;
    }
};

/**
 * Track a socket connection in Redis (multi-node safe)
 * @returns {Promise<{isFirstOnline: boolean}>}
 */
export const trackOnlineSocket = async (userId, socketId) => {
    try {
        if (!isRedisConnected()) {
            return { isFirstOnline: true };
        }
        const redis = getRedisClient();

        const multi = redis.multi();
        multi.sadd(USER_SOCKETS_KEY(userId), socketId);
        multi.sadd(ONLINE_USERS_KEY, String(userId));
        multi.set(SOCKET_USER_KEY(socketId), String(userId), 'EX', SOCKET_TTL_SECONDS);
        multi.expire(USER_SOCKETS_KEY(userId), SOCKET_TTL_SECONDS);
        multi.scard(USER_SOCKETS_KEY(userId));
        const results = await multi.exec();
        const socketCount = results?.[4]?.[1] || 0;
        return { isFirstOnline: socketCount === 1 };
    } catch (error) {
        logger.error('Error tracking online socket:', error);
        return { isFirstOnline: false };
    }
};

/**
 * Track a socket disconnection in Redis (multi-node safe)
 * @returns {Promise<{isNowOffline: boolean}>}
 */
export const trackOfflineSocket = async (socketId, userId = null) => {
    try {
        if (!isRedisConnected()) {
            return { isNowOffline: true };
        }
        const redis = getRedisClient();
        let resolvedUserId = userId;
        if (!resolvedUserId) {
            resolvedUserId = await redis.get(SOCKET_USER_KEY(socketId));
        }
        if (!resolvedUserId) {
            return { isNowOffline: false };
        }

        const multi = redis.multi();
        multi.srem(USER_SOCKETS_KEY(resolvedUserId), socketId);
        multi.del(SOCKET_USER_KEY(socketId));
        multi.scard(USER_SOCKETS_KEY(resolvedUserId));
        const results = await multi.exec();
        const socketCount = results?.[2]?.[1] || 0;
        if (socketCount === 0) {
            await redis.srem(ONLINE_USERS_KEY, String(resolvedUserId));
            return { isNowOffline: true };
        }
        return { isNowOffline: false };
    } catch (error) {
        logger.error('Error tracking offline socket:', error);
        return { isNowOffline: false };
    }
};

export const isUserOnlineRedis = async (userId) => {
    try {
        if (!isRedisConnected()) return false;
        const redis = getRedisClient();
        const result = await redis.sismember(ONLINE_USERS_KEY, String(userId));
        return result === 1;
    } catch (error) {
        logger.error('Error checking online status in Redis:', error);
        return false;
    }
};

export const getOnlineUsersRedis = async () => {
    try {
        if (!isRedisConnected()) return [];
        const redis = getRedisClient();
        const ids = await redis.smembers(ONLINE_USERS_KEY);
        return ids.map((id) => parseInt(id, 10)).filter(Boolean);
    } catch (error) {
        logger.error('Error getting online users from Redis:', error);
        return [];
    }
};

/**
 * Set user as online
 */
export const setOnline = async (userId) => {
    return updateOnlineStatus(userId, true);
};

/**
 * Set user as offline and update last seen
 */
export const setOffline = async (userId) => {
    return updateOnlineStatus(userId, false);
};

/**
 * Get user's online status
 */
export const getOnlineStatus = async (userId) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                isOnline: true,
                lastSeen: true,
            },
        });

        if (!user) {
            return { isOnline: false, lastSeen: null };
        }

        return {
            isOnline: user.isOnline || false,
            lastSeen: user.lastSeen,
            lastSeenText: formatLastSeen(user.lastSeen, user.isOnline),
        };
    } catch (error) {
        logger.error('Error getting online status:', error);
        return { isOnline: false, lastSeen: null };
    }
};

/**
 * Format last seen for display
 */
const formatLastSeen = (lastSeen, isOnline) => {
    if (isOnline) return 'Online';
    if (!lastSeen) return 'Offline';

    const now = new Date();
    const diff = now - new Date(lastSeen);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;

    return new Date(lastSeen).toLocaleDateString();
};

/**
 * Get online status for multiple users
 */
export const getBulkOnlineStatus = async (userIds) => {
    try {
        const users = await prisma.user.findMany({
            where: { id: { in: userIds } },
            select: {
                id: true,
                isOnline: true,
                lastSeen: true,
            },
        });

        return users.reduce((acc, user) => {
            acc[user.id] = {
                isOnline: user.isOnline || false,
                lastSeen: user.lastSeen,
                lastSeenText: formatLastSeen(user.lastSeen, user.isOnline),
            };
            return acc;
        }, {});
    } catch (error) {
        logger.error('Error getting bulk online status:', error);
        return {};
    }
};

export default {
    setOnline,
    setOffline,
    getOnlineStatus,
    getBulkOnlineStatus,
    updateOnlineStatus,
    trackOnlineSocket,
    trackOfflineSocket,
    isUserOnlineRedis,
    getOnlineUsersRedis,
};
