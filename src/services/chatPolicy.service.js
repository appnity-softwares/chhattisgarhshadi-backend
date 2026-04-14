import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import relationshipService from './relationship.service.js';
import { getUserAccess } from './access.service.js';

/**
 * Chat Policy Service
 * Enforces chat eligibility based on plan-based feature rules
 */

export const getChatEligibility = async (senderId, receiverId) => {
    const [relationship, access] = await Promise.all([
        relationshipService.getRelationship(senderId, receiverId),
        getUserAccess(senderId)
    ]);

    if (!access) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'User access data not found');
    }

    const dbDateKey = new Date().toISOString().split('T')[0];
    const _usage = await prisma.dailyUsage.findUnique({
        where: { userId_date: { userId: senderId, date: dbDateKey } },
    });
    const _messagesUsed = _usage?.messagesCount || 0;
    const _limit = access.messageLimitPerDay;
    const _remainingMessages = _limit === -1 ? 999999 : Math.max(0, _limit - _messagesUsed);
    const _planType = !access.isPremium ? "free" : (_limit === -1 ? "premium_pro" : "premium_basic");
    const _canSendMessage = _limit === -1 ? true : _messagesUsed < _limit;

    if (relationship.status === 'blocked') {
        return {
            canChat: false,
            reason: 'blocked',
            requiresMatchToChat: access.requiresMatchToChat,
            relationshipStatus: relationship.status,
            messagesRemaining: _remainingMessages,
            planType: _planType,
            canSendMessage: _canSendMessage,
        };
    }

    // 1. Check if match is required and exists
    const isMatched = relationship.status === 'accepted';
    if (access.requiresMatchToChat && !isMatched) {
        return {
            canChat: false,
            reason: 'match_required',
            requiresMatchToChat: true,
            relationshipStatus: relationship.status,
            messagesRemaining: _remainingMessages,
            planType: _planType,
            canSendMessage: _canSendMessage,
        };
    }

    // 2. Check daily message limits
    if (access.messageLimitPerDay !== -1) {
        const dateKey = new Date().toISOString().split('T')[0];
        const usage = await prisma.dailyUsage.findUnique({
            where: {
                userId_date: {
                    userId: senderId,
                    date: dateKey,
                },
            },
        });

        const messagesUsed = usage?.messagesCount || 0;
        if (_messagesUsed >= _limit) {
            return {
                canChat: false,
                reason: 'limit_reached',
                limit: _limit,
                used: _messagesUsed,
                requiresMatchToChat: access.requiresMatchToChat,
                relationshipStatus: relationship.status,
                messagesRemaining: 0,
                planType: _planType,
                canSendMessage: false,
            };
        }
    }

    // 3. Check if user can initiate chat if this is the first message
    const conversation = await prisma.conversation.findFirst({
        where: {
            OR: [
                { userAId: senderId, userBId: receiverId },
                { userAId: receiverId, userBId: senderId }
            ]
        }
    });

    // If no conversation exists yet, this is an initiation attempt
    if (!conversation && !access.canInitiateChat) {
        // If they are NOT matched, they definitely cannot initiate if their plan doesn't allow it
        if (!isMatched) {
            return {
                canChat: false,
                reason: 'cannot_initiate',
                requiresMatchToChat: access.requiresMatchToChat,
                relationshipStatus: relationship.status,
                messagesRemaining: _remainingMessages,
                planType: _planType,
                canSendMessage: _canSendMessage,
            };
        }
        
        // If matched, we allow initiation regardless of the canInitiateChat flag.
        // This prevents the "deadlock" where two matched basic users can't talk.
    }

    return {
        canChat: true,
        access,
        relationshipStatus: relationship.status,
        messagesRemaining: _remainingMessages,
        planType: _planType,
        canSendMessage: _canSendMessage,
    };
};

export const assertCanChat = async (senderId, receiverId) => {
    const eligibility = await getChatEligibility(senderId, receiverId);

    if (!eligibility.canChat) {
        let message = 'You cannot message this user';
        if (eligibility.reason === 'match_required') {
            message = 'Chat is available only after a mutual match';
        } else if (eligibility.reason === 'limit_reached') {
            message = `Daily message limit of ${eligibility.limit} reached. Upgrade for more.`;
        } else if (eligibility.reason === 'cannot_initiate' || eligibility.reason === 'cannot_initiate_conversation') {
            message = 'Upgrade to Premium to initiate conversations.';
        }

        throw new ApiError(HTTP_STATUS.FORBIDDEN, message, eligibility);
    }

    return eligibility;
};

export const chatPolicyService = {
    assertCanChat,
    getChatEligibility,
};

export default chatPolicyService;
