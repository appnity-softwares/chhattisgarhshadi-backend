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
| [🔐 Google Cloud Setup](./GOOGLE_CLOUD_SETUP.md) | Step-by-step Google OAuth configuration | 15 min |
| [📱 React Native Setup](./REACT_NATIVE_SETUP.md) | Connect your mobile app | 30 min |
| [🔑 OAuth with InAppBrowser](./GOOGLE_OAUTH_INAPPBROWSER.md) | Mobile OAuth implementation guide | 20 min |
| [🚢 Deployment Guide](./DEPLOYMENT_GUIDE.md) | Deploy to Render.com | 15 min |

---

> 📱 **For React Native developers:** See [START_HERE.md](./START_HERE.md) for immediate action items, then follow [REACT_NATIVE_SETUP.md](./REACT_NATIVE_SETUP.md)

## 🚀 Features

- **Authentication**: Google OAuth 2.0 with JWT tokens
- **Real-time**: Socket.io for messaging and notifications
- **File Storage**: AWS S3 for photo and document uploads
- **Payments**: Razorpay integration for premium subscriptions
- **SMS/OTP**: MSG91 API integration
- **Push Notifications**: Firebase Cloud Messaging (FCM)
- **Security**: Helmet, CORS, rate limiting, input validation
- **Logging**: Winston for structured logging
- **Database**: PostgreSQL with Prisma ORM

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm (v9 or higher)
- AWS S3 account
- Google OAuth credentials
- Razorpay account
- MSG91 account
- Firebase project (optional, for push notifications)

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
│   │   ├── aws.js             # AWS S3 setup
│   │   ├── database.js        # Prisma client
│   │   ├── firebase.js        # Firebase Admin SDK
│   │   ├── logger.js          # Winston logger
│   │   ├── msg91.js           # MSG91 API
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
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - Google OAuth callback
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update current user
- `DELETE /api/users/me` - Delete account

### Profiles
- `POST /api/profiles` - Create profile
- `GET /api/profiles/me` - Get my profile
- `PUT /api/profiles/me` - Update my profile
- `GET /api/profiles/search` - Search profiles

### Matches
- `POST /api/matches` - Send match request
- `GET /api/matches/sent` - Get sent requests
- `GET /api/matches/received` - Get received requests
- `PUT /api/matches/:matchId/accept` - Accept request

### Messages
- `POST /api/messages` - Send message
- `GET /api/messages/conversations` - Get all conversations
- `GET /api/messages/:userId` - Get conversation

### And more... See code for complete API documentation.

## 🔐 Security Features

- JWT Authentication with refresh tokens
- Google OAuth 2.0
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
