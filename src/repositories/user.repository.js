/**
 * User Repository
 * Abstracts database operations for User model
 * Implements Repository Pattern for cleaner architecture
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

/**
 * @typedef {Object} UserCreateData
 * @property {string} [email] - User email
 * @property {string} phone - User phone number
 */

/**
 * @typedef {Object} UserUpdateData
 * @property {string} [phone] - Phone number
 * @property {boolean} [isPhoneVerified] - Phone verification status
 * @property {string} [preferredLanguage] - Language preference
 */

/**
 * Find user by ID
 * @param {number} id - User ID
 * @param {Object} options - Query options
 * @returns {Promise<Object|null>} User object or null
 */
export const findById = async (id, options = {}) => {
    const { includeProfile = false, includeSubscription = false } = options;

    return prisma.user.findUnique({
        where: { id },
        include: {
            profile: includeProfile,
            subscriptions: includeSubscription ? {
                where: { status: 'ACTIVE' },
                take: 1,
                orderBy: { endDate: 'desc' },
            } : false,
        },
    });
};

/**
 * Find user by email
 * @param {string} email - User email
 * @returns {Promise<Object|null>} User object or null
 */
export const findByEmail = async (email) => {
    return prisma.user.findUnique({
        where: { email: email.toLowerCase() },
        include: { profile: true },
    });
};

/**
 * Find user by phone number
 * @param {string} phone - Phone number
 * @param {string} [countryCode] - Optional country code
 * @returns {Promise<Object|null>} User object or null
 */
export const findByPhone = async (phone, countryCode = '+91') => {
    return prisma.user.findFirst({
        where: { phone, countryCode },
        include: { profile: true },
    });
};

/**
 * Create new user
 * @param {UserCreateData} data - User creation data
 * @returns {Promise<Object>} Created user
 */
export const create = async (data) => {
    const user = await prisma.user.create({
        data: {
            ...data,
            email: data.email ? data.email.toLowerCase() : null,
            authProvider: 'PHONE',
        },
    });

    logger.info(`User created: ${user.id}`);
    return user;
};

/**
 * Update user by ID
 * @param {number} id - User ID
 * @param {UserUpdateData} data - Update data
 * @returns {Promise<Object>} Updated user
 */
export const update = async (id, data) => {
    return prisma.user.update({
        where: { id },
        data: {
            ...data,
            email: data.email ? data.email.toLowerCase() : data.email
        },
        include: { profile: true },
    });
};

/**
 * Soft delete user
 * @param {number} id - User ID
 * @returns {Promise<Object>} Deleted user
 */
export const softDelete = async (id) => {
    return prisma.user.update({
        where: { id },
        data: {
            deletedAt: new Date(),
            isActive: false,
        },
    });
};

/**
 * Update last login info
 * @param {number} id - User ID
 * @param {string} ip - IP address
 * @returns {Promise<Object>} Updated user
 */
export const updateLastLogin = async (id, ip) => {
    return prisma.user.update({
        where: { id },
        data: {
            lastLoginAt: new Date(),
            lastLoginIp: ip,
            loginAttempts: 0,
        },
    });
};

/**
 * Find users with pagination
 * @param {Object} options - Query options
 * @returns {Promise<Object>} Paginated users
 */
export const findMany = async (options = {}) => {
    const { page = 1, limit = 20, where = {}, orderBy = { createdAt: 'desc' } } = options;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
        prisma.user.findMany({
            where: { ...where, deletedAt: null },
            skip,
            take: limit,
            orderBy,
            include: { profile: true },
        }),
        prisma.user.count({ where: { ...where, deletedAt: null } }),
    ]);

    return {
        data: users,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};

/**
 * Check if email exists
 * @param {string} email - Email to check
 * @returns {Promise<boolean>} True if exists
 */
export const emailExists = async (email) => {
    if (!email) return false;
    const count = await prisma.user.count({
        where: { email: email.toLowerCase() },
    });
    return count > 0;
};

/**
 * Count active users
 * @returns {Promise<number>} Count of active users
 */
export const countActive = async () => {
    return prisma.user.count({
        where: { isActive: true, isBanned: false, deletedAt: null },
    });
};

export const userRepository = {
    findById,
    findByEmail,
    findByPhone,
    create,
    update,
    softDelete,
    updateLastLogin,
    findMany,
    emailExists,
    countActive,
};

export default userRepository;
