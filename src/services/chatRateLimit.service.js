import { getRedisClient, isRedisConnected } from '../config/redis.js';
import { logger } from '../config/logger.js';

const MAX_PER_SECOND = parseInt(process.env.CHAT_RATE_PER_SECOND || '1', 10);
const MAX_PREMATCH_PER_DAY = parseInt(process.env.CHAT_PREMATCH_DAILY_LIMIT || '20', 10);
const MAX_POSTMATCH_PER_DAY = parseInt(process.env.CHAT_POSTMATCH_DAILY_LIMIT || '200', 10);

const getSecondKey = (senderId, receiverId) => `chat:rl:sec:${senderId}:${receiverId}`;
const getDailyKey = (senderId, receiverId, type, dayKey) =>
  `chat:rl:day:${type}:${dayKey}:${senderId}:${receiverId}`;

const getUtcDayKey = () => {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, '0');
  const d = String(now.getUTCDate()).padStart(2, '0');
  return `${y}${m}${d}`;
};

const secondsUntilUtcDayEnd = () => {
  const now = new Date();
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
  return Math.max(1, Math.floor((end.getTime() - now.getTime()) / 1000));
};

export const assertPerSecondLimit = async (senderId, receiverId) => {
  try {
    if (!isRedisConnected()) return true;
    const redis = getRedisClient();
    const key = getSecondKey(senderId, receiverId);
    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, 1);
    }
    return count <= MAX_PER_SECOND;
  } catch (error) {
    logger.error('Per-second rate limit error:', error);
    return true; // fail open to avoid blocking
  }
};

export const assertDailyLimit = async (senderId, receiverId, isMatched) => {
  try {
    if (!isRedisConnected()) return true;
    const redis = getRedisClient();
    const dayKey = getUtcDayKey();
    const type = isMatched ? 'postmatch' : 'prematch';
    const key = getDailyKey(senderId, receiverId, type, dayKey);
    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, secondsUntilUtcDayEnd());
    }
    const limit = isMatched ? MAX_POSTMATCH_PER_DAY : MAX_PREMATCH_PER_DAY;
    return count <= limit;
  } catch (error) {
    logger.error('Daily rate limit error:', error);
    return true;
  }
};

export const getChatRateLimits = () => ({
  perSecond: MAX_PER_SECOND,
  preMatchPerDay: MAX_PREMATCH_PER_DAY,
  postMatchPerDay: MAX_POSTMATCH_PER_DAY,
});

export default {
  assertPerSecondLimit,
  assertDailyLimit,
  getChatRateLimits,
};
