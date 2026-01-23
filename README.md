# Chhattisgarh Shadi - Matrimonial Backend

A production-ready backend API for a **React Native CLI mobile app** matrimonial platform built with Express.js, Prisma ORM, and PostgreSQL.

**🌐 Production URL:** `https://chhattisgarhshadi-backend.onrender.com`

**📖 API Base URL:** `https://chhattisgarhshadi-backend.onrender.com/api/v1`

---

## 🚀 Quick StartD989-6C7B

**👉 New here? Start with:** [START_HERE.md](./START_HERE.md)

**Backend is LIVE:** Test it now at `https://chhattisgarhshadi-backend.onrender.com/api/v1/health`

----

## 📚 Complete Documentation

| Document | Purpose | Time |
|----------|---------|------|
| **[🎯 START HERE](./START_HERE.md)** | **Begin here! Immediate action items** | 5 min |
| [📋 Setup Summary](./SETUP_SUMMARY.md) | What's done & what's pending | 5 min |
| [🚀 Quick Reference](./QUICK_REFERENCE.md) | Quick links, examples, troubleshooting | 10 min |
| [📖 API Documentation](./API_DOCUMENTATION.md) | Complete API reference with all endpoints | 20 min |
| [📱 React Native Setup](./REACT_NATIVE_SETUP.md) | Connect your mobile app | 30 min |
| [🚢 Deployment Guide](./DEPLOYMENT_GUIDE.md) | Deploy to Render.com | 15 min |

---

> 📱 **For React Native developers:** See [START_HERE.md](./START_HERE.md) for immediate action items, then follow [REACT_NATIVE_SETUP.md](./REACT_NATIVE_SETUP.md)

## 🚀 Features

- **Authentication**: Phone OTP Authentication (Firebase) with JWT tokens
- **Real-time**: Socket.io for messaging and notifications
- **File Storage**: Cloudflare R2 for photo and document uploads
- **Payments**: Razorpay integration for premium subscriptions
- **Push Notifications**: Firebase Cloud Messaging (FCM)
- **Security**: Helmet, CORS, rate limiting, input validation
- **Logging**: Winston for structured logging
- **Database**: PostgreSQL (Neon) with Prisma ORM

## 📋 Prerequisites

- Node.js (v20 or higher)
- PostgreSQL (v14 or higher)
- npm (v9 or higher)
- Cloudflare R2 account (S3-compatible)
- Razorpay account
- Firebase project (for Phone Auth and Push Notifications)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chhattisgarhshadi-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and fill in all required values.

4. **Set up database**
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run migrations
   npm run prisma:migrate
   
   # (Optional) Seed database
   npm run prisma:seed
   ```

5. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📁 Project Structure

```
chhattisgarh-shadi-backend/
├── prisma/
│   └── schema.prisma           # Database schema
├── src/
│   ├── config/                 # Configuration files
│   │   ├── r2.js              # Cloudflare R2 setup
│   │   ├── database.js        # Prisma client
│   │   ├── firebase.js        # Firebase Admin SDK
│   │   ├── logger.js          # Winston logger 
│   │   └── razorpay.js        # Razorpay client
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Express middleware
│   ├── routes/               # API routes
│   ├── services/             # Business logic
│   ├── socket/               # Socket.io setup
│   ├── utils/                # Utility functions
│   └── app.js               # Express app
├── server.js                 # Entry point
├── package.json
└── README.md
```

## 🔑 Environment Variables

See `.env.example` for all required environment variables.

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/phone/login` - Login with Firebase Phone Auth Token
- `POST /api/v1/auth/phone/verify-firebase` - Verify phone with Firebase Token
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - Logout

### Users
- `GET /api/v1/users/me` - Get current user profile
- `DELETE /api/v1/users/me` - Delete account

### Profiles
- `POST /api/v1/profiles` - Create profile
- `GET /api/v1/profiles/me` - Get my profile
- `PUT /api/v1/profiles/me` - Update my profile
- `GET /api/v1/profiles/search` - Search profiles

### Matches
- `POST /api/v1/matches` - Send match request
- `GET /api/v1/matches/sent` - Get sent requests
- `GET /api/v1/matches/received` - Get received requests
- `PUT /api/v1/matches/:matchId/accept` - Accept request

### Messages
- `POST /api/v1/messages` - Send message
- `GET /api/v1/messages/conversations` - Get all conversations
- `GET /api/v1/messages/:userId` - Get conversation

### And more... See Swagger docs at `/api-docs`

## 🔐 Security Features

- JWT Authentication with refresh tokens
- Firebase Phone Authentication
- Rate limiting
- Helmet security headers
- CORS configuration
- Input validation
- SQL injection protection

## 📝 Logging

Logs are written to:
- Console (development)
- `logs/combined.log` (all logs)
- `logs/error.log` (errors only)

## 🚢 Deployment

1. Set up PostgreSQL database
2. Configure environment variables
3. Run migrations: `npm run prisma:migrate`
4. Start server: `npm start`

## 📄 License

ISC

---

Built with ❤️ for Chhattisgarh Shadi
# chhattisgarhshadi-backend
# chhattisgarh-shaadi-app
# chhattisgarhshadi-backend
# chhattisgarhshadi-backend
