import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { verifyAccessToken } from '../utils/jwt.js';
import { logger } from '../config/logger.js';
import { SOCKET_EVENTS } from '../utils/constants.js';
import { setupMessageHandlers } from './handlers/message.handler.js';
import { setupNotificationHandlers } from './handlers/notification.handler.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { setOnline, setOffline, trackOnlineSocket, trackOfflineSocket, isUserOnlineRedis, getOnlineUsersRedis } from '../services/onlineStatus.service.js';
import { messageService } from '../services/message.service.js';
import { createRedisClient, isRedisConnected } from '../config/redis.js';

let ioInstance = null;

/**
 * Get the singleton Socket.io instance
 * @returns {Server|null}
 */
export const getSocketIoInstance = () => {
  return ioInstance;
};

/**
 * Initialize Socket.io server
 * @param {Object} httpServer - HTTP server instance
 * @param {Object} config - Configuration object
 * @returns {Object} Socket.io server instance
 */
export const initializeSocket = (httpServer, config) => {
  const io = new Server(httpServer, {
    cors: {
      origin: config.CORS_ORIGIN || config.FRONTEND_URL,
      credentials: true,
    },
    pingTimeout: 60000,
    maxHttpBufferSize: 1e6, // 1 MB payload limit
  });

  // Redis adapter for multi-node scaling
  if (isRedisConnected()) {
    const pubClient = createRedisClient('socket-io-pub');
    const subClient = pubClient.duplicate();
    pubClient.connect().catch((err) => logger.error('Redis pub connect failed:', err.message));
    subClient.connect().catch((err) => logger.error('Redis sub connect failed:', err.message));
    io.adapter(createAdapter(pubClient, subClient));
    logger.info('Socket.io Redis adapter enabled ✅');
  } else {
    logger.warn('Socket.io Redis adapter not enabled (Redis not connected)');
  }

  // Authentication middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token || socket.handshake.query.token;

      if (!token) {
        return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication token required'));
      }

      // FIX: Use `decoded.id` as defined in our jwt.js util
      const decoded = verifyAccessToken(token);
      socket.userId = decoded.id; // Use decoded.id
      socket.userEmail = decoded.email;

      if (socket.userId === undefined || socket.userId === null) {
        return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid token payload'));
      }

      logger.info(`Socket authenticating for user: ${socket.userId}`);
      next();
    } catch (error) {
      logger.error('Socket authentication error:', error.message);
      next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication failed'));
    }
  });

  // Connection handler
  io.on(SOCKET_EVENTS.CONNECTION, (socket) => {
    logger.info(`User connected: ${socket.userId} (Socket ID: ${socket.id})`);

    // --- Per-socket event rate limiting (anti-flood) ---
    const EVENT_LIMITS = {
      [SOCKET_EVENTS.MESSAGE_SEND]: { max: 5, windowMs: 1000 },
      [SOCKET_EVENTS.MESSAGE_READ]: { max: 5, windowMs: 1000 },
      [SOCKET_EVENTS.TYPING_START]: { max: 3, windowMs: 1000 },
      [SOCKET_EVENTS.TYPING_STOP]: { max: 6, windowMs: 1000 },
      'notification:read': { max: 5, windowMs: 1000 },
      'notification:unread-count': { max: 5, windowMs: 1000 },
    };

    socket.data.rateLimit = new Map();
    socket.use((packet, next) => {
      const event = packet[0];
      const limit = EVENT_LIMITS[event];
      if (!limit) return next();

      const now = Date.now();
      const entry = socket.data.rateLimit.get(event);
      if (!entry || entry.resetAt <= now) {
        socket.data.rateLimit.set(event, { count: 1, resetAt: now + limit.windowMs });
        return next();
      }

      if (entry.count >= limit.max) {
        logger.warn(`Socket rate limit exceeded for user ${socket.userId}, event: ${event}`);
        return next(new ApiError(HTTP_STATUS.TOO_MANY_REQUESTS, 'Rate limit exceeded'));
      }

      entry.count += 1;
      return next();
    });

    // --- Presence Management (Redis, multi-node safe) ---
    trackOnlineSocket(socket.userId, socket.id)
      .then(({ isFirstOnline }) => {
        if (isFirstOnline) {
          socket.broadcast.emit(SOCKET_EVENTS.USER_ONLINE, { userId: socket.userId });
          setOnline(socket.userId).catch(err => logger.error('Failed to set online status:', err));
        }
      })
      .catch((err) => logger.error('Failed to track online socket:', err));

    // 3. Join user's personal room (for targeted emits)
    socket.join(`user:${socket.userId}`);

    // Handle explicit join event from frontend
    socket.on('join', (_data) => {
      logger.info(`User ${socket.userId} explicitly joined via 'join' event`);
      // User already in their room, just acknowledge
      socket.emit('joined', { userId: socket.userId, success: true });
    });

    // Setup message handlers
    setupMessageHandlers(io, socket);

    // Setup notification handlers
    setupNotificationHandlers(io, socket);

    // On connect: emit undelivered messages to this socket only
    messageService
      .getUndeliveredMessages(socket.userId)
      .then((messages) => {
        for (const message of messages) {
          socket.emit(SOCKET_EVENTS.MESSAGE_RECEIVED, message);
        }
        if (messages.length > 0) {
          logger.info(`Delivered ${messages.length} undelivered messages to user ${socket.userId}`);
        }
      })
      .catch((err) => logger.error('Failed to fetch undelivered messages:', err));

    // Handle disconnect
    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      logger.info(`User disconnected: ${socket.userId} (Socket ID: ${socket.id})`);

      // --- Presence Management (Redis, multi-node safe) ---
      trackOfflineSocket(socket.id, socket.userId)
        .then(({ isNowOffline }) => {
          if (isNowOffline) {
            socket.broadcast.emit(SOCKET_EVENTS.USER_OFFLINE, { userId: socket.userId });
            setOffline(socket.userId).catch(err => logger.error('Failed to set offline status:', err));
          }
        })
        .catch((err) => logger.error('Failed to track offline socket:', err));
    });

    // Handle errors
    socket.on('error', (error) => {
      logger.error(`Socket error for user ${socket.userId}:`, error.message);
    });
  });

  logger.info('Socket.io server initialized successfully');
  ioInstance = io;
  return io;
};

/**
 * Check if user is online (has at least one active socket)
 * @param {number} userId - User ID
 * @returns {boolean}
 */
export const isUserOnline = async (userId) => {
  return isUserOnlineRedis(userId);
};

/**
 * Get all online user IDs
 * @returns {number[]} Array of online user IDs
 */
export const getOnlineUsers = async () => {
  return getOnlineUsersRedis();
};

/**
 * [DEPRECATED] This function is unsafe as it only targets one socket.
 * Do not use. Use io.to(`user:${userId}`).emit(...) instead.
 */
// export const emitToUser = (io, userId, event, data) => { ... }
// ^^^ We remove this function entirely to prevent bugs.
// All emits should be done via rooms, which is handled in controllers/handlers.
