import { Queue, Worker } from 'bullmq';
import { createRedisClient, isRedisConnected } from '../config/redis.js';
import { logger } from '../config/logger.js';
import { notificationService } from './notification.service.js';
import { NOTIFICATION_TYPES } from '../utils/constants.js';

const QUEUE_NAME = 'message-events';
let queue = null;
let worker = null;

const getConnection = () => {
  const client = createRedisClient('bullmq-message');
  client.connect().catch((err) => logger.error('BullMQ Redis connect failed:', err.message));
  return client;
};

export const getMessageQueue = () => {
  if (!queue) {
    queue = new Queue(QUEUE_NAME, {
      connection: getConnection(),
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 2000 },
        removeOnComplete: { age: 60 * 60, count: 5000 },
        removeOnFail: { age: 24 * 60 * 60 },
      },
    });
  }
  return queue;
};

export const enqueueMessageNotification = async (payload) => {
  try {
    if (!isRedisConnected()) return false;
    const q = getMessageQueue();
    await q.add('notify', payload, {
      jobId: `msg-notify:${payload.messageId}`,
    });
    return true;
  } catch (error) {
    logger.error('Failed to enqueue message notification:', error);
    return false;
  }
};

export const initMessageQueueWorker = () => {
  if (!isRedisConnected() || worker) return;
  worker = new Worker(
    QUEUE_NAME,
    async (job) => {
      const data = job.data;
      if (data.type === 'NEW_MESSAGE') {
        await notificationService.createNotification({
          userId: data.receiverId,
          type: NOTIFICATION_TYPES.NEW_MESSAGE,
          title: data.title,
          message: data.preview,
          data: data.data,
          pushPolicy: 'offline-only',
        });
      }
    },
    {
      connection: getConnection(),
      concurrency: 50,
    }
  );

  worker.on('failed', (job, err) => {
    logger.error(`Message queue job failed ${job?.id}:`, err);
  });
  worker.on('error', (err) => {
    logger.error('Message queue worker error:', err);
  });
  logger.info('Message queue worker initialized ✅');
};

export default {
  enqueueMessageNotification,
  initMessageQueueWorker,
};
