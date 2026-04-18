import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import {
  HTTP_STATUS,
  PAYMENT_STATUS,
  SUBSCRIPTION_STATUS,
  USER_ROLES,
} from '../utils/constants.js';

const DAY_MS = 24 * 60 * 60 * 1000;

const addDays = (date, days) =>
  new Date(new Date(date).getTime() + days * DAY_MS);

const parseMetadata = (metadata) => {
  if (!metadata) return {};
  try {
    return JSON.parse(metadata);
  } catch (error) {
    logger.warn(`Invalid subscription metadata: ${metadata}`);
    return {};
  }
};

export const getActiveSubscription = async (userId, tx = prisma, excludeId = null) =>
  tx.userSubscription.findFirst({
    where: {
      userId,
      status: SUBSCRIPTION_STATUS.ACTIVE,
      endDate: { gt: new Date() },
      ...(excludeId ? { id: { not: excludeId } } : {}),
    },
    include: { plan: true },
    orderBy: { endDate: 'desc' },
  });

export const getQueuedSubscription = async (userId, tx = prisma) =>
  tx.userSubscription.findFirst({
    where: {
      userId,
      status: SUBSCRIPTION_STATUS.QUEUED,
    },
    include: { plan: true },
    orderBy: { startDate: 'asc' },
  });

export const reconcileUserRole = async (userId, tx = prisma) => {
  const user = await tx.user.findUnique({
    where: { id: userId },
    select: { id: true, role: true },
  });

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');
  }

  if ([USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN].includes(user.role)) {
    return user.role;
  }

  const activeSubscription = await getActiveSubscription(userId, tx);
  const nextRole = activeSubscription?.plan?.roleToAssign || USER_ROLES.USER;

  if (user.role !== nextRole) {
    await tx.user.update({
      where: { id: userId },
      data: { role: nextRole },
    });
  }

  return nextRole;
};

export const activateNextQueuedSubscription = async (userId, activationDate = new Date()) =>
  prisma.$transaction(async (tx) => {
    const queued = await getQueuedSubscription(userId, tx);

    if (!queued) {
      await reconcileUserRole(userId, tx);
      return null;
    }

    const startDate = new Date(activationDate);
    const endDate = addDays(startDate, queued.plan.duration);

    const updatedSubscription = await tx.userSubscription.update({
      where: { id: queued.id },
      data: {
        status: SUBSCRIPTION_STATUS.ACTIVE,
        startDate,
        endDate,
      },
      include: { plan: true },
    });

    await reconcileUserRole(userId, tx);

    return updatedSubscription;
  });

export const finalizeCapturedPayment = async ({
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature = null,
  paymentMethod = 'RAZORPAY',
  paidAt = new Date(),
  paymentId = null, // Path for free/internal processing
}) =>
  prisma.$transaction(async (tx) => {
    // Lookup by paymentId if provided, otherwise fallback to razorpayOrderId
    const where = paymentId ? { id: paymentId } : { razorpayOrderId };
    
    const payment = await tx.payment.findFirst({
      where,
      include: {
        subscription: {
          include: { plan: true },
        },
      },
    });

    if (!payment) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        `Payment not found for order ${razorpayOrderId}`
      );
    }

    if (payment.status === PAYMENT_STATUS.COMPLETED) {
      return {
        alreadyProcessed: true,
        payment,
        subscription: payment.subscription,
      };
    }

    if (!payment.subscriptionId || !payment.subscription) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        `Payment ${payment.id} is missing subscription metadata`
      );
    }

    const metadata = parseMetadata(payment.subscription.metadata);
    const currentActive = await getActiveSubscription(
      payment.userId,
      tx,
      payment.subscriptionId
    );

    const isUpgrade =
      metadata.activationMode === 'REPLACE_ACTIVE' || Boolean(metadata.previousSubscriptionId);

    let nextStatus = SUBSCRIPTION_STATUS.ACTIVE;
    let nextStartDate = new Date(paidAt);
    let nextEndDate = addDays(nextStartDate, payment.subscription.plan.duration);

    if (isUpgrade) {
      const carriedDays = Number(metadata.remainingDaysCarried || 0);
      nextEndDate = addDays(nextStartDate, payment.subscription.plan.duration + carriedDays);

      if (metadata.previousSubscriptionId) {
        await tx.userSubscription.updateMany({
          where: {
            id: metadata.previousSubscriptionId,
            userId: payment.userId,
            status: SUBSCRIPTION_STATUS.ACTIVE,
          },
          data: {
            status: SUBSCRIPTION_STATUS.EXPIRED,
          },
        });
      }
    } else if (currentActive) {
      nextStatus = SUBSCRIPTION_STATUS.QUEUED;
      nextStartDate = new Date(currentActive.endDate);
      nextEndDate = addDays(nextStartDate, payment.subscription.plan.duration);
    }

    const updatedPayment = await tx.payment.update({
      where: { id: payment.id },
      data: {
        razorpayPaymentId,
        ...(razorpaySignature ? { razorpaySignature } : {}),
        status: PAYMENT_STATUS.COMPLETED,
        paidAt,
        paymentMethod,
      },
    });

    const updatedSubscription = await tx.userSubscription.update({
      where: { id: payment.subscriptionId },
      data: {
        status: nextStatus,
        startDate: nextStartDate,
        endDate: nextEndDate,
      },
      include: { plan: true },
    });

    if (metadata.promoId) {
      await tx.promoCode.update({
        where: { id: metadata.promoId },
        data: { usageCount: { increment: 1 } },
      });
    }

    if (nextStatus === SUBSCRIPTION_STATUS.ACTIVE) {
      await reconcileUserRole(payment.userId, tx);
    }

    return {
      alreadyProcessed: false,
      payment: updatedPayment,
      subscription: updatedSubscription,
      status: nextStatus,
      isUpgrade,
    };
  });

export default {
  activateNextQueuedSubscription,
  finalizeCapturedPayment,
  getActiveSubscription,
  getQueuedSubscription,
  reconcileUserRole,
};
