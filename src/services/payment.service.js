import crypto from 'crypto';
import prisma from '../config/database.js';
import { config } from '../config/config.js';
import {
  getRazorpayInstance,
  getRazorpayConfig,
  getWebhookSecret,
  isRazorpayConfigured,
} from '../config/razorpay.js';
import { ApiError } from '../utils/ApiError.js';
import {
  HTTP_STATUS,
  NOTIFICATION_TYPES,
  PAYMENT_STATUS,
  SUBSCRIPTION_STATUS,
} from '../utils/constants.js';
import { logger } from '../config/logger.js';
import { getSocketIoInstance } from '../socket/index.js';
import { notificationService } from './notification.service.js';
import {
  finalizeCapturedPayment,
} from './subscriptionLifecycle.service.js';

const DAY_MS = 24 * 60 * 60 * 1000;

const addDays = (date, days) =>
  new Date(new Date(date).getTime() + days * DAY_MS);

const verifyClientSignature = async ({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}) => {
  const { keySecret } = await getRazorpayConfig();
  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(body)
    .digest('hex');

  if (expectedSignature !== razorpay_signature) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid payment signature');
  }
};

const verifyWebhookSignature = (event, signature) => {
  const expectedSignature = crypto
    .createHmac('sha256', getWebhookSecret())
    .update(JSON.stringify(event))
    .digest('hex');

  if (expectedSignature !== signature) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid webhook signature');
  }
};

const getPlanOrThrow = async (planId) => {
  const plan = await prisma.subscriptionPlan.findFirst({
    where: {
      id: planId,
      isActive: true,
    },
  });

  if (!plan) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,
      'Subscription plan not found or inactive'
    );
  }

  return plan;
};

const getPromoOrNull = async (promoCode) => {
  if (!promoCode) return null;

  const promo = await prisma.promoCode.findFirst({
    where: {
      code: promoCode.toUpperCase(),
      isActive: true,
    },
  });

  if (!promo) return null;
  if (promo.expiresAt && new Date(promo.expiresAt) <= new Date()) return null;
  if (promo.maxUsage && promo.usageCount >= promo.maxUsage) return null;

  return promo;
};

const getDiscountedAmount = (plan, promo) => {
  const baseAmount = Number(plan.price);
  if (!promo) {
    return { baseAmount, finalAmount: baseAmount, discountApplied: 0 };
  }

  const discountApplied =
    promo.discountType === 'PERCENTAGE'
      ? (baseAmount * Number(promo.discount)) / 100
      : Number(promo.discount);

  return {
    baseAmount,
    finalAmount: Math.max(0, baseAmount - discountApplied),
    discountApplied,
  };
};

const createPendingRecords = async ({
  userId,
  plan,
  amount,
  metadata,
  endDate,
}) =>
  prisma.$transaction(async (tx) => {
    const subscription = await tx.userSubscription.create({
      data: {
        userId,
        planId: plan.id,
        status: SUBSCRIPTION_STATUS.PENDING,
        startDate: new Date(),
        endDate,
        metadata: JSON.stringify(metadata),
      },
    });

    const payment = await tx.payment.create({
      data: {
        userId,
        subscriptionId: subscription.id,
        amount,
        currency: plan.currency || 'INR',
        status: PAYMENT_STATUS.PENDING,
        transactionId: `txn_${Date.now()}_${userId}_${plan.id}`,
      },
    });

    return { subscription, payment };
  });

const cancelPendingRecords = async ({ paymentId, subscriptionId, reason }) => {
  await prisma.$transaction([
    prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: PAYMENT_STATUS.CANCELLED,
        failureReason: reason,
      },
    }),
    prisma.userSubscription.update({
      where: { id: subscriptionId },
      data: {
        status: SUBSCRIPTION_STATUS.CANCELLED,
      },
    }),
  ]);
};

const createGatewayOrder = async ({ payment, subscription, plan, amount, notes }) => {
  const razorpay = await getRazorpayInstance();
  const razorpayOrder = await razorpay.orders.create({
    amount: Math.round(amount * 100),
    currency: plan.currency || 'INR',
    receipt: `sub_${subscription.id}_pay_${payment.id}`,
    notes,
  });

  await prisma.payment.update({
    where: { id: payment.id },
    data: {
      razorpayOrderId: razorpayOrder.id,
      transactionId: `txn_${payment.id}`,
    },
  });

  return razorpayOrder;
};

const notifySubscriptionOutcome = async ({ userId, subscription, status }) => {
  const io = getSocketIoInstance();

  if (io) {
    io.to(`user:${userId}`).emit('SUBSCRIPTION_UPDATED', {
      subscriptionId: subscription.id,
      planId: subscription.planId,
      status,
      startDate: subscription.startDate,
      endDate: subscription.endDate,
    });
  }

  const queued = status === SUBSCRIPTION_STATUS.QUEUED;
  await notificationService.createNotification({
    userId,
    type: NOTIFICATION_TYPES.SUBSCRIPTION_ACTIVATED,
    title: queued ? 'Subscription queued' : 'Subscription active',
    message: queued
      ? `Your new ${subscription.plan.name} plan is queued and will start on ${new Date(subscription.startDate).toLocaleDateString()}.`
      : `Your ${subscription.plan.name} subscription is now active.`,
    data: {
      type: 'SUBSCRIPTION_ACTIVATED',
      subscriptionId: String(subscription.id),
      status,
      planId: String(subscription.planId),
    },
  });
};

export const createOrder = async (userId, planId, promoCode = null) => {
  if (!(await isRazorpayConfigured())) {
    throw new ApiError(
      HTTP_STATUS.SERVICE_UNAVAILABLE,
      'Payment service is not configured. Please contact administrator.'
    );
  }

  const plan = await getPlanOrThrow(planId);
  const promo = await getPromoOrNull(promoCode);
  const { baseAmount, finalAmount, discountApplied } = getDiscountedAmount(plan, promo);

  let createdRecords = null;

  try {
    const provisionalEndDate = addDays(new Date(), plan.duration);
    const metadata = {
      activationMode: 'QUEUE_IF_ACTIVE',
      promoCode: promo?.code || null,
      promoId: promo?.id || null,
      baseAmount,
      discountApplied,
    };

    createdRecords = await createPendingRecords({
      userId,
      plan,
      amount: finalAmount,
      metadata,
      endDate: provisionalEndDate,
    });

    // HANDLE FREE TRANSACTIONS: Bypass Razorpay if amount is 0
    if (finalAmount <= 0) {
      logger.info(`Processing free subscription for user ${userId}, plan ${plan.id}`);
      
      // Auto-finalize the free payment
      const result = await finalizeCapturedPayment({
        razorpayOrderId: `free_${Date.now()}_${userId}`,
        razorpayPaymentId: `free_payment_${Date.now()}`,
        paymentMethod: 'PROMO_CODE',
        paidAt: new Date(),
        // We override logic slightly to find the specific payment we just created
        paymentId: createdRecords.payment.id
      });

      return {
        isFree: true,
        success: true,
        message: 'Subscription activated via promo code',
        subscriptionId: result.subscription.id,
        finalAmount: 0,
        discountApplied
      };
    }

    const razorpayOrder = await createGatewayOrder({
      payment: createdRecords.payment,
      subscription: createdRecords.subscription,
      plan,
      amount: finalAmount,
      notes: {
        type: 'SUBSCRIPTION',
        userId: String(userId),
        paymentId: String(createdRecords.payment.id),
        subscriptionId: String(createdRecords.subscription.id),
        planId: String(plan.id),
      },
    });

    logger.info(
      `Payment order created ${razorpayOrder.id} for user ${userId}, plan ${plan.id}`
    );

    const { keyId } = await getRazorpayConfig();

    return {
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      paymentId: createdRecords.payment.id,
      razorpayKey: keyId,
      key: keyId,
      finalAmount,
      discountApplied,
    };
  } catch (error) {
    if (createdRecords) {
      await cancelPendingRecords({
        paymentId: createdRecords.payment.id,
        subscriptionId: createdRecords.subscription.id,
        reason: error.message || 'Failed to create payment order',
      });
    }

    logger.error('Error in createOrder:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      `Failed to create payment order: ${error.error?.description || error.message}`
    );
  }
};

export const createUpgradeOrder = async (userId, newPlanId) => {
  if (!(await isRazorpayConfigured())) {
    throw new ApiError(
      HTTP_STATUS.SERVICE_UNAVAILABLE,
      'Payment service is not configured. Please contact administrator.'
    );
  }

  const currentSubscription = await prisma.userSubscription.findFirst({
    where: {
      userId,
      status: SUBSCRIPTION_STATUS.ACTIVE,
      endDate: { gt: new Date() },
    },
    include: { plan: true },
    orderBy: { endDate: 'desc' },
  });

  if (!currentSubscription) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      'Upgrade requires an active subscription'
    );
  }

  const newPlan = await getPlanOrThrow(newPlanId);
  const remainingDays = Math.max(
    0,
    Math.ceil((new Date(currentSubscription.endDate) - new Date()) / DAY_MS)
  );

  const totalDays = newPlan.duration + remainingDays;
  const endDate = addDays(new Date(), totalDays);
  const metadata = {
    activationMode: 'REPLACE_ACTIVE',
    previousSubscriptionId: currentSubscription.id,
    remainingDaysCarried: remainingDays,
  };

  let createdRecords = null;

  try {
    createdRecords = await createPendingRecords({
      userId,
      plan: newPlan,
      amount: Number(newPlan.price),
      metadata,
      endDate,
    });

    const razorpayOrder = await createGatewayOrder({
      payment: createdRecords.payment,
      subscription: createdRecords.subscription,
      plan: newPlan,
      amount: Number(newPlan.price),
      notes: {
        type: 'SUBSCRIPTION_UPGRADE',
        userId: String(userId),
        paymentId: String(createdRecords.payment.id),
        subscriptionId: String(createdRecords.subscription.id),
        planId: String(newPlan.id),
        previousSubscriptionId: String(currentSubscription.id),
      },
    });

    const { keyId } = await getRazorpayConfig();

    return {
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      paymentId: createdRecords.payment.id,
      razorpayKey: keyId,
      key: keyId,
      remainingDaysCredited: remainingDays,
      totalDays,
      newEndDate: endDate.toISOString(),
    };
  } catch (error) {
    if (createdRecords) {
      await cancelPendingRecords({
        paymentId: createdRecords.payment.id,
        subscriptionId: createdRecords.subscription.id,
        reason: error.message || 'Failed to create upgrade order',
      });
    }

    logger.error('Error in createUpgradeOrder:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      `Failed to create upgrade order: ${error.error?.description || error.message}`
    );
  }
};

export const verifyPayment = async (data) => {
  try {
    await verifyClientSignature(data);

    const payment = await prisma.payment.findFirst({
      where: {
        razorpayOrderId: data.razorpay_order_id,
      },
      include: {
        subscription: {
          include: { plan: true },
        },
      },
    });

    if (!payment) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Payment order not found');
    }

    if (payment.status !== PAYMENT_STATUS.COMPLETED) {
      await prisma.payment.update({
        where: { id: payment.id },
        data: {
          razorpayPaymentId: data.razorpay_payment_id,
          razorpaySignature: data.razorpay_signature,
        },
      });
    }

    return {
      success: true,
      paymentId: data.razorpay_payment_id,
      status: payment.status,
      activation: payment.status === PAYMENT_STATUS.COMPLETED ? 'processed' : 'awaiting_webhook',
      message:
        payment.status === PAYMENT_STATUS.COMPLETED
          ? 'Payment already processed'
          : 'Payment signature verified. Awaiting webhook confirmation.',
    };
  } catch (error) {
    logger.error('Error in verifyPayment:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Payment verification failed'
    );
  }
};

const handlePaymentCaptured = async (paymentEntity) => {
  const result = await finalizeCapturedPayment({
    razorpayOrderId: paymentEntity.order_id,
    razorpayPaymentId: paymentEntity.id,
    paymentMethod: paymentEntity.method || 'RAZORPAY',
    paidAt: new Date(),
  });

  if (!result.alreadyProcessed) {
    await notifySubscriptionOutcome({
      userId: result.payment.userId,
      subscription: result.subscription,
      status: result.status,
    });
  }

  logger.info(
    `Payment captured for order ${paymentEntity.order_id}; subscription status ${result.subscription.status}`
  );
};

const handlePaymentFailed = async (paymentEntity) => {
  const payment = await prisma.payment.findFirst({
    where: { razorpayOrderId: paymentEntity.order_id },
  });

  if (!payment || payment.status === PAYMENT_STATUS.FAILED) {
    return;
  }

  await prisma.$transaction([
    prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: PAYMENT_STATUS.FAILED,
        failureReason:
          paymentEntity.error_description || 'Payment failed at gateway',
      },
    }),
    ...(payment.subscriptionId
      ? [
          prisma.userSubscription.update({
            where: { id: payment.subscriptionId },
            data: { status: SUBSCRIPTION_STATUS.CANCELLED },
          }),
        ]
      : []),
  ]);

  logger.info(`Payment marked failed for order ${paymentEntity.order_id}`);
};

export const handleWebhook = async (event, signature) => {
  try {
    verifyWebhookSignature(event, signature);

    switch (event.event) {
      case 'payment.captured':
        await handlePaymentCaptured(event.payload.payment.entity);
        break;
      case 'payment.failed':
        await handlePaymentFailed(event.payload.payment.entity);
        break;
      default:
        logger.info(`Unhandled webhook event: ${event.event}`);
    }

    return { success: true };
  } catch (error) {
    logger.error('Error in handleWebhook:', error);
    throw error;
  }
};

export const getPaymentById = async (paymentId) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            profile: { select: { firstName: true, lastName: true } },
          },
        },
        subscription: {
          include: {
            plan: true,
          },
        },
      },
    });

    if (!payment) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Payment not found');
    }

    return payment;
  } catch (error) {
    logger.error('Error in getPaymentById:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Error retrieving payment'
    );
  }
};

export const getUserPayments = async (userId) => {
  try {
    return await prisma.payment.findMany({
      where: { userId },
      include: {
        subscription: {
          include: {
            plan: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    logger.error('Error in getUserPayments:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Error retrieving payments'
    );
  }
};

export const paymentService = {
  createOrder,
  createUpgradeOrder,
  verifyPayment,
  handleWebhook,
  getPaymentById,
  getUserPayments,
  getOrderStatus: async (orderId) => {
    const payment = await prisma.payment.findFirst({
      where: { razorpayOrderId: orderId },
    });

    if (!payment) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Payment order not found');
    }

    let status = 'PENDING';
    if (payment.status === PAYMENT_STATUS.COMPLETED) {
      status = 'SUCCESS';
    } else if (
      payment.status === PAYMENT_STATUS.FAILED ||
      payment.status === PAYMENT_STATUS.CANCELLED
    ) {
      status = 'FAILED';
    }

    return { status };
  },
};

