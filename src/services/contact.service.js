import prisma from '../config/database.js';

/**
 * Create a new contact message
 * @param {Object} data Message data
 * @returns {Promise<Object>} Created message
 */
export const createContactMessage = async (data) => {
  return await prisma.contactMessage.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    },
  });
};

/**
 * Get all contact messages (for admin)
 * @param {Object} filters Pagination and filters
 * @returns {Promise<Object>} Messages and count
 */
export const getAllContactMessages = async (filters = {}) => {
  const { page = 1, limit = 10, status } = filters;
  const skip = (page - 1) * limit;

  const where = {};
  if (status) where.status = status;

  const [messages, total] = await Promise.all([
    prisma.contactMessage.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.contactMessage.count({ where }),
  ]);

  return {
    messages,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Update message status
 * @param {number} id Message ID
 * @param {string} status New status
 * @returns {Promise<Object>} Updated message
 */
export const updateMessageStatus = async (id, status) => {
  return await prisma.contactMessage.update({
    where: { id: Number(id) },
    data: { status },
  });
};

/**
 * Get message by ID
 * @param {number} id Message ID
 * @returns {Promise<Object>} Message
 */
export const getMessageById = async (id) => {
  return await prisma.contactMessage.findUnique({
    where: { id: Number(id) },
  });
};

/**
 * Delete message
 * @param {number} id Message ID
 * @returns {Promise<Object>} Deleted message
 */
export const deleteMessage = async (id) => {
  return await prisma.contactMessage.delete({
    where: { id: Number(id) },
  });
};
