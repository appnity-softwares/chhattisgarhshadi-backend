import cron from 'node-cron';
import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

const RETENTION_DAYS = parseInt(process.env.MESSAGE_RETENTION_DAYS || '30', 10);

export const cleanupDeletedMessages = async () => {
  try {
    const cutoff = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);
    const result = await prisma.message.deleteMany({
      where: {
        isDeletedBySender: true,
        isDeletedByReceiver: true,
        createdAt: { lt: cutoff },
      },
    });
    logger.info(`GDPR cleanup: deleted ${result.count} messages older than ${RETENTION_DAYS} days`);
  } catch (error) {
    logger.error('GDPR cleanup failed:', error);
  }
};

export const initMessageCleanupCron = () => {
  cron.schedule('30 2 * * *', async () => {
    logger.info('⏰ Running GDPR message cleanup...');
    await cleanupDeletedMessages();
  });
  logger.info('Message cleanup cron initialized ✅');
};

export default {
  cleanupDeletedMessages,
  initMessageCleanupCron,
};
