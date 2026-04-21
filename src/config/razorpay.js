import Razorpay from 'razorpay';
import { config } from './config.js';
import { logger } from './logger.js';
import prisma from './database.js';

/**
 * Get dynamic Razorpay credentials from DB or fallback to ENV
 */
export const getRazorpayConfig = async () => {
    try {
        const dbConfig = await prisma.systemConfiguration.findMany({
            where: {
                key: { in: ['RAZORPAY_KEY_ID', 'RAZORPAY_KEY_SECRET'] }
            }
        });

        const keyId = dbConfig.find(c => c.key === 'RAZORPAY_KEY_ID')?.value || config.RAZORPAY_KEY_ID;
        const keySecret = dbConfig.find(c => c.key === 'RAZORPAY_KEY_SECRET')?.value || config.RAZORPAY_KEY_SECRET;
        const webhookSecret = config.RAZORPAY_WEBHOOK_SECRET;

        return { keyId, keySecret, webhookSecret };
    } catch (error) {
        return {
            keyId: config.RAZORPAY_KEY_ID,
            keySecret: config.RAZORPAY_KEY_SECRET,
            webhookSecret: config.RAZORPAY_WEBHOOK_SECRET
        };
    }
};

/**
 * Get a dynamic Razorpay instance
 */
export const getRazorpayInstance = async () => {
  const { keyId, keySecret } = await getRazorpayConfig();
  
  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
};

/**
 * Check if Razorpay is configured
 * @returns {Promise<boolean>}
 */
export const isRazorpayConfigured = async () => {
  const { keyId, keySecret } = await getRazorpayConfig();
  return !!(keyId && keySecret);
};

/**
 * Initialize Razorpay instance (only if configured)
 */
export const razorpayInstance = isRazorpayConfigured()
  ? new Razorpay({
      key_id: config.RAZORPAY_KEY_ID,
      key_secret: config.RAZORPAY_KEY_SECRET,
    })
  : null;

if (isRazorpayConfigured()) {
  logger.info('Razorpay client initialized successfully');
} else {
  logger.warn('Razorpay is not configured. Payment features will be disabled.');
}

/**
 * Get Razorpay webhook secret
 * @returns {string}
 */
export const getWebhookSecret = () => config.RAZORPAY_WEBHOOK_SECRET;