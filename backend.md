# Backend Folder Structure
```text
.
./render.yaml
./redeploy.sh
./server.js
./prisma
./prisma/publish-profiles.js
./prisma/migrations
./prisma/migrations/migration_lock.toml
./prisma/migrations/20251215130445_add_pincode_table
./prisma/migrations/20251215130445_add_pincode_table/migration.sql
./prisma/migrations/20251117133518_simplified_agent_system
./prisma/migrations/20251117133518_simplified_agent_system/migration.sql
./prisma/migrations/20251222181801_update_profile_schema_add_category_remove_district
./prisma/migrations/20251222181801_update_profile_schema_add_category_remove_district/migration.sql
./prisma/migrations/20251212074924_add_subscription_metadata
./prisma/migrations/20251212074924_add_subscription_metadata/migration.sql
./prisma/migrations/20260123_remove_google_auth
./prisma/migrations/20260123_remove_google_auth/migration.sql
./prisma/migrations/20251212183703_final_features
./prisma/migrations/20251212183703_final_features/migration.sql
./prisma/migrations/20251110174706_fix_date_type
./prisma/migrations/20251110174706_fix_date_type/migration.sql
./prisma/migrations/20251222182435_update_profile_schema_correctly_v2
./prisma/migrations/20251222182435_update_profile_schema_correctly_v2/migration.sql
./prisma/seed-plans.js
./prisma/schema.prisma
./prisma/add-photos.js
./prisma/seed-subscriptions.js
./prisma/seed.js
./prisma/update-stock-photos.js
./README.md
./backend.md
./public
./package.json
./scripts
./scripts/check-connections.js
./scripts/test-metrics.sh
./scripts/make-admin.js
./api
./api/API_DOC.md
./ecosystem.config.cjs
./deploy.sh
./collect_backend.sh
./src
./src/middleware
./src/middleware/rate-limiter.middleware.js
./src/middleware/requestId.middleware.js
./src/middleware/auth.js
./src/middleware/validate.middleware.js
./src/middleware/upload.js
./src/middleware/error-handler.middleware.js
./src/middleware/checkPlanFeature.js
./src/middleware/cache.middleware.js
./src/middleware/auth.rate-limiter.js
./src/config
./src/config/database.js
./src/config/logger.js
./src/config/razorpay.js
./src/config/swagger.js
./src/config/config.js
./src/config/env.js
./src/config/prisma.js
./src/config/r2.js
./src/config/redis.js
./src/config/firebase.js
./src/utils
./src/utils/constants.js
./src/utils/validators.js
./src/utils/ApiResponse.js
./src/utils/ApiError.js
./src/utils/asyncHandler.js
./src/utils/jwt.js
./src/utils/profile.helpers.js
./src/utils/helpers.js
./src/utils/cache.helper.js
./src/utils/bcrypt.js
./src/repositories
./src/repositories/user.repository.js
./src/controllers
./src/controllers/block.controller.js
./src/controllers/photoRequest.controller.js
./src/controllers/occupation.controller.js
./src/controllers/boost.controller.js
./src/controllers/payment.controller.js
./src/controllers/verification.controller.js
./src/controllers/upload.controller.js
./src/controllers/match.controller.js
./src/controllers/message.controller.js
./src/controllers/astrology.controller.js
./src/controllers/subscription.controller.js
./src/controllers/recommendations.controller.js
./src/controllers/agent.controller.js
./src/controllers/analytics.controller.js
./src/controllers/profile.controller.js
./src/controllers/auth.controller.js
./src/controllers/report.controller.js
./src/controllers/contact.controller.js
./src/controllers/education.controller.js
./src/controllers/shortlist.controller.js
./src/controllers/privacy.controller.js
./src/controllers/horoscope.controller.js
./src/controllers/photoPrivacy.controller.js
./src/controllers/partnerPreference.controller.js
./src/controllers/profileView.controller.js
./src/controllers/notificationSettings.controller.js
./src/controllers/admin.bulk.controller.js
./src/controllers/profileCompletion.controller.js
./src/controllers/diagnostics.controller.js
./src/controllers/notification.controller.js
./src/controllers/user.controller.js
./src/controllers/admin.controller.js
./src/controllers/contactRequest.controller.js
./src/controllers/activityLog.controller.js
./src/routes
./src/routes/activityLog.routes.js
./src/routes/photoRequest.routes.js
./src/routes/block.routes.js
./src/routes/shortlist.routes.js
./src/routes/message.routes.js
./src/routes/auth.routes.js
./src/routes/partnerPreference.routes.js
./src/routes/boost.routes.js
./src/routes/subscription.routes.js
./src/routes/education.routes.js
./src/routes/notificationSettings.routes.js
./src/routes/analytics.routes.js
./src/routes/location.routes.js
./src/routes/report.routes.js
./src/routes/web.routes.js
./src/routes/notification.routes.js
./src/routes/index.js
./src/routes/agent.routes.js
./src/routes/upload.routes.js
./src/routes/occupation.routes.js
./src/routes/user.routes.js
./src/routes/photoPrivacy.routes.js
./src/routes/verification.routes.js
./src/routes/horoscope.routes.js
./src/routes/payment.routes.js
./src/routes/match.routes.js
./src/routes/contactRequest.routes.js
./src/routes/contact.routes.js
./src/routes/astrology.routes.js
./src/routes/auditLog.routes.js
./src/routes/privacy.routes.js
./src/routes/profileView.routes.js
./src/routes/profile.routes.js
./src/routes/recommendations.routes.js
./src/routes/admin.routes.js
./src/app.js
./src/services
./src/services/email.service.js
./src/services/admin.service.js
./src/services/report.service.js
./src/services/contact.service.js
./src/services/privacy.service.js
./src/services/fcmTokenCleanup.service.js
./src/services/user.service.js
./src/services/photoRequest.service.js
./src/services/education.service.js
./src/services/horoscope.service.js
./src/services/audit.service.js
./src/services/profileBoost.service.js
./src/services/match.service.js
./src/services/tokenBlacklist.service.js
./src/services/profile.service.js
./src/services/profileView.service.js
./src/services/location.service.js
./src/services/contactRequest.service.js
./src/services/cache.service.js
./src/services/notificationSettings.service.js
./src/services/block.service.js
./src/services/analytics.service.js
./src/services/onlineStatus.service.js
./src/services/photoPrivacy.service.js
./src/services/partnerPreference.service.js
./src/services/upload.service.js
./src/services/verification.service.js
./src/services/contactVisibility.service.js
./src/services/subscription.service.js
./src/services/auth.service.js
./src/services/subscriptionCron.service.js
./src/services/activityLog.service.js
./src/services/message.service.js
./src/services/shortlist.service.js
./src/services/notificationQueue.service.js
./src/services/payment.service.js
./src/services/matchingAlgorithm.service.js
./src/services/agent.service.js
./src/services/occupation.service.js
./src/services/astrology.service.js
./src/services/profileCompletion.service.js
./src/services/notification.service.js
./src/services/rateLimit.service.js
./src/services/readReceipts.service.js
./src/services/usageLimits.service.js
./src/validation
./src/validation/notificationSettings.validation.js
./src/validation/partnerPreference.validation.js
./src/validation/profileView.validation.js
./src/validation/photoPrivacy.validation.js
./src/validation/contactRequest.validation.js
./src/validation/admin.validation.js
./src/validation/notification.validation.js
./src/validation/user.validation.js
./src/validation/profile.validation.js
./src/validation/agent.validation.js
./src/validation/message.validation.js
./src/validation/subscription.validation.js
./src/validation/privacy.validation.js
./src/validation/horoscope.validation.js
./src/validation/education.validation.js
./src/validation/shortlist.validation.js
./src/validation/report.validation.js
./src/validation/auth.validation.js
./src/validation/match.validation.js
./src/validation/occupation.validation.js
./src/validation/photoRequest.validation.js
./src/validation/block.validation.js
./src/validation/verification.validation.js
./src/validation/payment.validation.js
./src/socket
./src/socket/index.js
./src/socket/handlers
./src/socket/handlers/message.handler.js
./src/socket/handlers/notification.handler.js
```

# Prisma Schema
## prisma/schema.prisma
```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextIndex", "fullTextSearch"]
  binaryTargets   = ["native", "linux-musl-openssl-3.0.x"]
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}


// ============================================
// ENUMS
// ============================================

enum AuthProvider {
  PHONE
  GOOGLE
}

enum UserRole {
  USER
  PREMIUM_USER
  VERIFIED_USER
  ADMIN
}

enum Gender {
  MALE
  FEMALE
  OTHER
}

enum MaritalStatus {
  NEVER_MARRIED
  DIVORCED
  WIDOWED
  AWAITING_DIVORCE
  ANNULLED
}

enum Religion {
  HINDU
  MUSLIM
  CHRISTIAN
  SIKH
  BUDDHIST
  JAIN
  PARSI
  JEWISH
  BAHAI
  NO_RELIGION
  SPIRITUAL
  OTHER
}

enum Caste {
  GENERAL
  OBC
  SC
  ST
  OTHER
}

enum MotherTongue {
  CHHATTISGARHI // Primary focus
  HINDI
  ENGLISH
  TAMIL
  TELUGU
  MALAYALAM
  KANNADA
  MARATHI
  GUJARATI
  BENGALI
  PUNJABI
  URDU
  ODIA
  ASSAMESE
  KONKANI
  KASHMIRI
  SANSKRIT
  SINDHI
  NEPALI
  MANIPURI
  BODO
  DOGRI
  MAITHILI
  SANTALI
  OTHER
}

enum EducationLevel {
  HIGH_SCHOOL
  INTERMEDIATE
  DIPLOMA
  BACHELORS
  MASTERS
  DOCTORATE
  POST_DOCTORATE
  PROFESSIONAL_DEGREE
  OTHER
}

enum OccupationType {
  SALARIED
  BUSINESS
  PROFESSIONAL
  SELF_EMPLOYED
  NOT_WORKING
  STUDENT
  RETIRED
}

enum MatchRequestStatus {
  PENDING
  ACCEPTED
  REJECTED
  CANCELLED
  EXPIRED
}

enum ContactRequestStatus {
  PENDING
  APPROVED
  REJECTED
  EXPIRED
}

enum SubscriptionStatus {
  ACTIVE
  EXPIRED
  CANCELLED
  PENDING
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
  CANCELLED
}

enum NotificationType {
  MATCH_REQUEST
  MATCH_ACCEPTED
  MATCH_REJECTED
  NEW_MESSAGE
  PROFILE_VIEW
  SHORTLISTED
  SUBSCRIPTION_EXPIRY
  PAYMENT_SUCCESS
  PAYMENT_FAILED
  PROFILE_VERIFIED
  PROFILE_REJECTED
  SYSTEM_ALERT
  SECURITY_ALERT
}

enum NotificationChannel {
  IN_APP
  SMS
  EMAIL
  PUSH
}

enum MediaType {
  PROFILE_PHOTO
  GALLERY_PHOTO
  ID_PROOF
  ADDRESS_PROOF
  INCOME_PROOF
  EDUCATION_CERTIFICATE
  CHAT_IMAGE
  OTHER_DOCUMENT
}

enum VerificationStatus {
  PENDING
  APPROVED
  REJECTED
  RESUBMIT_REQUIRED
}

enum AdminRole {
  SUPER_ADMIN
  ADMIN
  MODERATOR
  SUPPORT
}

enum AgentStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
  TERMINATED
}

enum ReportReason {
  FAKE_PROFILE
  INAPPROPRIATE_CONTENT
  HARASSMENT
  SCAM
  SPAM
  UNDERAGE
  IMPERSONATION
  PRIVACY_VIOLATION
  OTHER
}

enum ReportStatus {
  PENDING
  UNDER_REVIEW
  RESOLVED
  DISMISSED
  ESCALATED
}

enum Language {
  EN // English
  HI // Hindi
  CG // Chhattisgarhi
}

// ============================================
// USER MANAGEMENT
// ============================================

model User {
  id Int @id @default(autoincrement())

  // Authentication - PHONE OTP
  phone           String       @unique @db.VarChar(20)
  countryCode     String       @default("+91") @db.VarChar(5)
  isPhoneVerified Boolean      @default(false)
  phoneVerifiedAt DateTime?
  
  authProvider    AuthProvider @default(PHONE)
  email           String?      @unique @db.VarChar(255)

  // Account Verification
  isEmailVerified Boolean  @default(false)
  emailVerifiedAt DateTime?

  // Profile & Settings
  profilePicture String?  @db.Text // Local path: /uploads/profiles/{userId}/original/...
  role           UserRole @default(USER)

  // Language Preference (NEW)
  preferredLanguage Language @default(HI) // Hindi default for Indian users

  // Agent Tracking
  agentId       Int?
  agent         Agent?    @relation(fields: [agentId], references: [id], onDelete: SetNull)
  agentCodeUsed String?   @db.VarChar(20)
  referredAt    DateTime?

  // Account Status
  isActive  Boolean   @default(true)
  isBanned  Boolean   @default(false)
  banReason String?   @db.Text
  bannedAt  DateTime?
  bannedBy  Int?

  // Security
  lastLoginAt   DateTime?
  lastLoginIp   String?   @db.Inet
  loginAttempts Int       @default(0)
  lockedUntil   DateTime?

  // Metadata
  deviceInfo String? @db.Text // JSON
  userAgent  String? @db.Text

  // Online Status
  isOnline Boolean   @default(false)
  lastSeen DateTime?

  // Timestamps
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  deletedAt DateTime?

  // Relations
  profile               Profile?
  phoneVerifications    PhoneVerification[] // Changed from OtpVerification
  refreshTokens         RefreshToken[]
  sentMatchRequests     MatchRequest[]      @relation("MatchRequestSender")
  receivedMatchRequests MatchRequest[]      @relation("MatchRequestReceiver")
  sentMessages          Message[]           @relation("MessageSender")
  receivedMessages      Message[]           @relation("MessageReceiver")
  conversationsAsUserA  Conversation[]      @relation("ConversationUserA")
  conversationsAsUserB  Conversation[]      @relation("ConversationUserB")
  subscriptions         UserSubscription[]
  payments              Payment[]
  notifications         Notification[]
  activityLogs          ActivityLog[]
  profileViewsGiven     ProfileView[]       @relation("ProfileViewer")
  profileViewsReceived  ProfileView[]       @relation("ProfileViewed")
  shortlistsGiven       Shortlist[]         @relation("ShortlistGiver")
  shortlistsReceived    Shortlist[]         @relation("ShortlistReceiver")
  blocksGiven           BlockedUser[]       @relation("Blocker")
  blocksReceived        BlockedUser[]       @relation("Blocked")
  reportsGiven          Report[]            @relation("Reporter")
  reportsReceived       Report[]            @relation("Reported")

  // Privacy Settings
  profilePrivacySettings   ProfilePrivacySettings?
  communicationPreferences CommunicationPreferences?
  searchVisibilitySettings SearchVisibilitySettings?
  dataPrivacySettings      DataPrivacySettings?
  accountSecuritySettings  AccountSecuritySettings?
  notificationPreferences  NotificationPreferences?

  // Contact & Photo Requests
  contactRequestsSent       ContactRequest[]   @relation("ContactRequester")
  contactRequestsReceived   ContactRequest[]   @relation("ContactReceiver")
  photoViewRequestsSent     PhotoViewRequest[] @relation("PhotoViewRequester")
  photoViewRequestsReceived PhotoViewRequest[] @relation("PhotoViewReceiver")

  // Data Management
  dataDeletionRequests DataDeletionRequest[]
  dataExportRequests   DataExportRequest[]

  // Media
  mediaUploads         Media[]
  photoPrivacySettings PhotoPrivacySettings[]

  // FCM Tokens
  fcmTokens FcmToken[]

  @@index([email])
  @@index([phone])
  @@index([agentId])
  @@index([agentCodeUsed])
  @@index([isActive, isBanned])
  @@index([createdAt(sort: Desc)])
  @@index([lastLoginAt(sort: Desc)])
  @@index([preferredLanguage])
  @@map("users")
}

// ============================================
// PHONE VERIFICATION (ONE-TIME, NOT FOR LOGIN)
// ============================================

model PhoneVerification {
  id     Int  @id @default(autoincrement())
  userId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  phone       String @db.VarChar(20)
  countryCode String @default("+91") @db.VarChar(5)
  otpHash     String @db.VarChar(255) // Bcrypt hashed OTP

  attempts   Int       @default(0)
  isVerified Boolean   @default(false)
  verifiedAt DateTime?

  expiresAt DateTime // 5 minutes from creation
  createdAt DateTime @default(now())

  @@index([userId])
  @@index([phone, isVerified])
  @@index([expiresAt])
  @@map("phone_verifications")
}

// ============================================
// REFRESH TOKENS (JWT)
// ============================================

model RefreshToken {
  id     Int  @id @default(autoincrement())
  userId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  token      String  @unique @db.Text
  deviceId   String? @db.VarChar(255)
  deviceName String? @db.VarChar(100)
  deviceType String? @db.VarChar(50)
  ipAddress  String? @db.Inet
  userAgent  String? @db.Text

  isRevoked  Boolean   @default(false)
  revokedAt  DateTime?
  expiresAt  DateTime
  lastUsedAt DateTime?

  createdAt DateTime @default(now())

  @@index([userId])
  @@index([token])
  @@index([expiresAt])
  @@index([isRevoked])
  @@map("refresh_tokens")
}

// ============================================
// FCM TOKENS (Push Notifications)
// ============================================

model FcmToken {
  id     Int  @id @default(autoincrement())
  userId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  token      String  @db.Text
  deviceId   String  @db.VarChar(255)
  deviceType String  @db.VarChar(50) // IOS, ANDROID, WEB
  deviceName String? @db.VarChar(100)

  isActive   Boolean  @default(true)
  lastUsedAt DateTime @default(now())

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userId, deviceId])
  @@index([userId, isActive])
  @@map("fcm_tokens")
}

// ============================================
// AGENT SYSTEM (ADMIN-MANAGED ONLY)
// ============================================

model Agent {
  id Int @id @default(autoincrement())

  // Basic Information
  agentCode String @unique @db.VarChar(20) // AGT000001, AGT000002, etc.
  agentName String @db.VarChar(200)

  // Contact Information
  contactPerson  String? @db.VarChar(100)
  phone          String? @db.VarChar(20)
  email          String? @db.VarChar(255)
  alternatePhone String? @db.VarChar(20)

  // Location
  addressLine1 String? @db.VarChar(255)
  addressLine2 String? @db.VarChar(255)
  city         String? @db.VarChar(100)
  district     String? @db.VarChar(100) // Chhattisgarh district
  state        String? @db.VarChar(100)
  country      String  @default("India") @db.VarChar(100)
  postalCode   String? @db.VarChar(20)

  // Business Details
  businessName String? @db.VarChar(200)
  businessType String? @db.VarChar(50) // INDIVIDUAL, FRANCHISE, CORPORATE
  gstNumber    String? @db.VarChar(20)
  panNumber    String? @db.VarChar(20)

  // Statistics (Simplified as requested)
  totalUsersAdded Int @default(0)
  activeUsers     Int @default(0)
  premiumUsers    Int @default(0)

  // Status
  status   AgentStatus @default(ACTIVE)
  isActive Boolean     @default(true)

  // Documents (stored locally)
  idProofUrl      String? @db.Text // /uploads/documents/agents/{agentId}/id-proof.pdf
  addressProofUrl String? @db.Text
  panCardUrl      String? @db.Text

  // Admin Notes
  notes         String? @db.Text
  internalNotes String? @db.Text

  // Metadata
  source           String? @db.VarChar(50)
  websiteUrl       String? @db.VarChar(255)
  socialMediaLinks String? @db.Text // JSON

  // Language Preference
  preferredLanguage Language @default(HI)

  // Created By Admin
  createdBy      Int?
  createdByAdmin Admin? @relation("AgentCreatedBy", fields: [createdBy], references: [id], onDelete: SetNull)

  // Timestamps
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  deletedAt DateTime?

  // Relations
  users User[]

  @@index([agentCode])
  @@index([status, isActive])
  @@index([email])
  @@index([phone])
  @@index([district]) // For Chhattisgarh-specific filtering
  @@index([createdAt(sort: Desc)])
  @@index([totalUsersAdded(sort: Desc)])
  @@map("agents")
}

// ============================================
// PROFILE MANAGEMENT
// ============================================

model Profile {
  id     Int  @id @default(autoincrement())
  userId Int  @unique
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  profileId String @unique @default(cuid()) @db.VarChar(50)

  // Basic Information
  firstName     String        @db.VarChar(100)
  middleName    String?       @db.VarChar(100)
  lastName      String        @db.VarChar(100)
  displayName   String?       @db.VarChar(200)
  dateOfBirth   DateTime      @db.Date
  gender        Gender
  maritalStatus MaritalStatus

  // Religious Information
  religion     Religion
  category     String?      @db.VarChar(100) // Added for 3-step selection
  caste        String?      @db.VarChar(100)
  subCaste     String?      @db.VarChar(100)
  motherTongue MotherTongue
  gothram      String?      @db.VarChar(100)

  // Chhattisgarh-Specific Fields
  nativeVillage       String? @db.VarChar(100) // Village/Town name
  speaksChhattisgarhi Boolean @default(true) // Speaks Chhattisgarhi language?

  // Physical Attributes
  height             Int? // in cm
  weight             Int? // in kg
  physicalDisability String? @db.Text

  // Lifestyle
  diet          String? @db.VarChar(30)
  smokingHabit  String? @db.VarChar(30)
  drinkingHabit String? @db.VarChar(30)

  // Location
  country         String  @db.VarChar(100)
  state           String  @db.VarChar(100)
  city            String  @db.VarChar(100)
  residencyStatus String? @db.VarChar(50)

  // About
  bio                 String? @db.Text
  hobbies             String? @db.Text
  interests           String? @db.Text
  aboutFamily         String? @db.Text
  partnerExpectations String? @db.Text

  // Family Information
  fatherName       String? @db.VarChar(100)
  fatherOccupation String? @db.VarChar(100)
  fatherStatus     String? @db.VarChar(30) // EMPLOYED, RETIRED, DECEASED

  motherName       String? @db.VarChar(100)
  motherOccupation String? @db.VarChar(100)
  motherStatus     String? @db.VarChar(30)

  numberOfBrothers Int @default(0)
  numberOfSisters  Int @default(0)
  brothersMarried  Int @default(0)
  sistersMarried   Int @default(0)

  familyType      String? @db.VarChar(30) // NUCLEAR, JOINT
  familyValues    String? @db.VarChar(30) // TRADITIONAL, MODERATE, LIBERAL
  familyIncome    String? @db.VarChar(50)
  ancestralOrigin String? @db.VarChar(100)

  // Horoscope (Hindu specific)
  manglik    Boolean?
  birthTime  String?  @db.VarChar(10)
  birthPlace String?  @db.VarChar(100)
  rashi      String?  @db.VarChar(50)
  nakshatra  String?  @db.VarChar(50)

  // Professional (summary - detailed in Occupation model)
  highestEducation String? @db.VarChar(30)
  educationDetails String? @db.Text
  collegeName      String? @db.VarChar(200)

  occupationType String? @db.VarChar(30)
  occupation     String? @db.VarChar(100)
  designation    String? @db.VarChar(100)
  companyName    String? @db.VarChar(200)
  annualIncome   String? @db.VarChar(50)
  workLocation   String? @db.VarChar(100)

  // Settings
  visibility        String  @default("PUBLIC") @db.VarChar(30)
  showContactInfo   Boolean @default(false)
  allowPhotoRequest Boolean @default(true)
  showHoroscope     Boolean @default(false)

  // Metrics
  profileCompleteness Int @default(0)
  profileScore        Int @default(0) // Quality score
  viewCount           Int @default(0)
  contactViewCount    Int @default(0)
  shortlistCount      Int @default(0)
  matchRequestCount   Int @default(0)

  // Verification
  isVerified       Boolean   @default(false)
  verifiedAt       DateTime?
  verificationNote String?   @db.Text

  // Profile Status
  isDraft     Boolean   @default(true)
  isPublished Boolean   @default(false)
  publishedAt DateTime?

  // Timestamps
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  deletedAt DateTime?

  // Relations
  media             Media[]
  education         Education[]
  occupations       Occupation[]
  partnerPreference PartnerPreference?

  @@index([userId])
  @@index([profileId])
  @@index([gender, dateOfBirth])
  @@index([religion, caste])
  @@index([city, state, country])
  @@index([maritalStatus])
  @@index([isVerified, isPublished])
  @@index([profileCompleteness(sort: Desc)])
  @@index([nativeVillage]) // For Chhattisgarh-specific searches
  @@index([speaksChhattisgarhi])
  @@map("profiles")
}

// ============================================
// PARTNER PREFERENCES
// ============================================

model PartnerPreference {
  id        Int     @id @default(autoincrement())
  profileId Int     @unique
  profile   Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

  // Age Preference
  ageFrom Int?
  ageTo   Int?

  // Height Preference
  heightFrom Int? // in cm
  heightTo   Int?

  // Religion & Caste
  religion       String?  @db.Text // JSON array
  caste          String?  @db.Text
  casteMandatory Boolean? @default(false) // If true, only same/preferred caste matches
  motherTongue   String?  @db.Text

  // Marital Status
  maritalStatus String? @db.Text

  // Location
  country         String? @db.Text
  state           String? @db.Text
  city            String? @db.Text
  residencyStatus String? @db.Text

  // Chhattisgarh-Specific (NEW)
  mustSpeakChhattisgarhi Boolean? // Must speak Chhattisgarhi?

  // Education & Occupation
  education    String? @db.Text
  occupation   String? @db.Text
  annualIncome String? @db.VarChar(100)

  // Lifestyle
  diet     String? @db.Text
  smoking  String? @db.VarChar(30)
  drinking String? @db.VarChar(30)

  // Horoscope
  manglik Boolean?

  // Other
  description String? @db.Text

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("partner_preferences")
}

// ============================================
// EDUCATION
// ============================================

model Education {
  id        Int     @id @default(autoincrement())
  profileId Int
  profile   Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

  degree        String  @db.VarChar(100)
  field         String? @db.VarChar(100)
  institution   String  @db.VarChar(200)
  university    String? @db.VarChar(200)
  yearOfPassing Int?
  grade         String? @db.VarChar(20)
  isCurrent     Boolean @default(false)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([profileId])
  @@map("education")
}

// ============================================
// OCCUPATION
// ============================================

model Occupation {
  id        Int     @id @default(autoincrement())
  profileId Int
  profile   Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

  companyName    String    @db.VarChar(200)
  designation    String    @db.VarChar(100)
  employmentType String    @db.VarChar(50)
  industry       String?   @db.VarChar(100)
  annualIncome   String?   @db.VarChar(50)
  startDate      DateTime? @db.Date
  endDate        DateTime? @db.Date
  isCurrent      Boolean   @default(true)
  location       String?   @db.VarChar(100)
  description    String?   @db.Text

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([profileId])
  @@map("occupations")
}

// ============================================
// MEDIA MANAGEMENT (LOCAL STORAGE)
// ============================================

model Media {
  id        Int      @id @default(autoincrement())
  profileId Int?
  profile   Profile? @relation(fields: [profileId], references: [id], onDelete: Cascade)
  userId    Int
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  type MediaType

  // CLOUDFLARE R2 FILE PATHS
  url          String  @db.Text // /users/{userId}/photos/photo-{timestamp}.jpg
  thumbnailUrl String? @db.Text // /users/{userId}/photos/thumbnails/thumb_photo-{timestamp}.jpg
  mediumUrl    String? @db.Text 
  largeUrl     String? @db.Text 

  fileName String  @db.VarChar(255)
  fileSize Int? // in bytes
  mimeType String? @db.VarChar(100)

  displayOrder Int     @default(0)
  isDefault    Boolean @default(false)
  isVisible    Boolean @default(true)
  isPrivate    Boolean @default(false)

  verificationStatus VerificationStatus @default(PENDING)
  verifiedAt         DateTime?
  verifiedBy         Int?
  rejectionReason    String?            @db.Text

  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  deletedAt DateTime?

  // Relations
  privacySettings PhotoPrivacySettings?
  viewRequests    PhotoViewRequest[]

  @@index([profileId])
  @@index([userId])
  @@index([type])
  @@index([verificationStatus])
  @@map("media")
}

// ============================================
// MATCHING SYSTEM
// ============================================

model MatchRequest {
  id         Int  @id @default(autoincrement())
  senderId   Int
  sender     User @relation("MatchRequestSender", fields: [senderId], references: [id], onDelete: Cascade)
  receiverId Int
  receiver   User @relation("MatchRequestReceiver", fields: [receiverId], references: [id], onDelete: Cascade)

  status          MatchRequestStatus @default(PENDING)
  message         String?            @db.Text
  responseMessage String?            @db.Text

  respondedAt DateTime?
  expiresAt   DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([senderId, receiverId])
  @@index([senderId, status])
  @@index([receiverId, status])
  @@index([status])
  @@index([expiresAt])
  @@map("match_requests")
}

model ProfileView {
  id        Int  @id @default(autoincrement())
  viewerId  Int
  viewer    User @relation("ProfileViewer", fields: [viewerId], references: [id], onDelete: Cascade)
  profileId Int
  profile   User @relation("ProfileViewed", fields: [profileId], references: [id], onDelete: Cascade)

  isAnonymous Boolean  @default(false)
  viewedAt    DateTime @default(now())

  @@unique([viewerId, profileId]) // Prevent duplicate views at DB level
  @@index([viewerId])
  @@index([profileId, viewedAt(sort: Desc)])
  @@map("profile_views")
}

model Shortlist {
  id                Int  @id @default(autoincrement())
  userId            Int
  user              User @relation("ShortlistGiver", fields: [userId], references: [id], onDelete: Cascade)
  shortlistedUserId Int
  shortlistedUser   User @relation("ShortlistReceiver", fields: [shortlistedUserId], references: [id], onDelete: Cascade)

  note String? @db.Text

  createdAt DateTime @default(now())

  @@unique([userId, shortlistedUserId])
  @@index([userId])
  @@map("shortlists")
}

model BlockedUser {
  id        Int  @id @default(autoincrement())
  blockerId Int
  blocker   User @relation("Blocker", fields: [blockerId], references: [id], onDelete: Cascade)
  blockedId Int
  blocked   User @relation("Blocked", fields: [blockedId], references: [id], onDelete: Cascade)

  reason String? @db.VarChar(100)

  createdAt DateTime @default(now())

  @@unique([blockerId, blockedId])
  @@index([blockerId])
  @@map("blocked_users")
}

// ============================================
// MESSAGING SYSTEM
// ============================================

// NEW: Message content type for explicit type safety
enum MessageContentType {
  TEXT
  IMAGE
  SYSTEM
}

enum MessageStatus {
  SENT      // Message sent to server
  DELIVERED // Message received by recipient's device
  READ      // Message read by recipient
  FAILED    // Message failed to send
}

// NEW: Conversation abstraction for proper chat isolation
model Conversation {
  id        Int @id @default(autoincrement())

  userAId   Int
  userA     User @relation("ConversationUserA", fields: [userAId], references: [id], onDelete: Cascade)
  userBId   Int
  userB     User @relation("ConversationUserB", fields: [userBId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  messages  Message[]

  @@unique([userAId, userBId])
  @@index([userAId])
  @@index([userBId])
  @@index([updatedAt(sort: Desc)])
  @@map("conversations")
}

model Message {
  id Int @id @default(autoincrement())

  // Conversation reference (NEW - required after migration)
  conversationId Int?
  conversation   Conversation? @relation(fields: [conversationId], references: [id], onDelete: Cascade)

  senderId   Int
  sender     User @relation("MessageSender", fields: [senderId], references: [id], onDelete: Cascade)

  receiverId Int
  receiver   User @relation("MessageReceiver", fields: [receiverId], references: [id], onDelete: Cascade)

  // Content with explicit type (NEW)
  content     String? @db.Text
  contentType MessageContentType @default(TEXT)

  // Attachments with MIME type (IMPROVED)
  attachmentUrl  String? @db.Text
  attachmentMime String? @db.VarChar(100)

  // Delivery status - single source of truth (FIXED: removed isRead)
  status      MessageStatus @default(SENT)
  deliveredAt DateTime?
  readAt      DateTime?

  // Per-user soft deletion (FIXED: replaces isDeleted/deletedBy)
  isDeletedBySender   Boolean @default(false)
  isDeletedByReceiver Boolean @default(false)

  // Extensibility
  metadata Json?

  createdAt DateTime @default(now())

  @@index([conversationId, createdAt(sort: Desc)])
  @@index([receiverId, status])
  @@index([senderId])
  @@index([senderId, receiverId])
  @@map("messages")
}

// ============================================
// SUBSCRIPTION & PAYMENTS
// ============================================

model SubscriptionPlan {
  id   Int    @id @default(autoincrement())
  name String @unique @db.VarChar(100)
  slug String @unique @db.VarChar(100)

  // Multi-language names (NEW)
  nameEn String @db.VarChar(100) // English
  nameHi String @db.VarChar(100) // Hindi
  nameCg String @db.VarChar(100) // Chhattisgarhi

  description String? @db.Text
  price       Decimal @db.Decimal(10, 2)
  currency    String  @default("INR") @db.VarChar(5)
  duration    Int // in days

  // Discount fields (Admin controlled)
  originalPrice        Decimal?  @db.Decimal(10, 2) // Original price before discount
  discountPercentage   Int       @default(0) // 0-100
  discountValidUntil   DateTime? // When discount expires (null = no expiry)

  features String? @db.Text // JSON array

  maxContactViews       Int     @default(0) // 0 = unlimited
  maxMessagesSend       Int     @default(0)
  maxInterestsSend      Int     @default(0)
  canSeeProfileVisitors Boolean @default(false)
  priorityListing       Boolean @default(false)
  verifiedBadge         Boolean @default(false)
  incognitoMode         Boolean @default(false)
  dedicatedManager      Boolean @default(false)

  isActive     Boolean @default(true)
  displayOrder Int     @default(0)
  isPopular    Boolean @default(false)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  subscriptions UserSubscription[]

  @@map("subscription_plans")
}

model UserSubscription {
  id     Int              @id @default(autoincrement())
  userId Int
  user   User             @relation(fields: [userId], references: [id], onDelete: Cascade)
  planId Int
  plan   SubscriptionPlan @relation(fields: [planId], references: [id])

  status    SubscriptionStatus @default(PENDING)
  startDate DateTime
  endDate   DateTime

  // Usage Tracking
  contactViewsUsed Int @default(0)
  messagesUsed     Int @default(0)
  interestsUsed    Int @default(0)

  autoRenew Boolean @default(false)
  
  // Additional metadata for subscriptions (upgrade tracking, etc.)
  metadata String? @db.Text // JSON for additional data

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  payments Payment[]

  @@index([userId, status])
  @@index([endDate])
  @@index([planId]) // Added for plan-based queries
  @@map("user_subscriptions")
}

model Payment {
  id             Int               @id @default(autoincrement())
  userId         Int
  user           User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  subscriptionId Int?
  subscription   UserSubscription? @relation(fields: [subscriptionId], references: [id])

  amount   Decimal @db.Decimal(10, 2)
  currency String  @default("INR") @db.VarChar(5)

  // Payment Gateway Details (Razorpay ONLY)
  transactionId  String  @unique @db.VarChar(255)
  paymentGateway String  @default("RAZORPAY") @db.VarChar(50)
  paymentMethod  String? @db.VarChar(50)

  // Razorpay Specific
  razorpayOrderId   String? @db.VarChar(255)
  razorpayPaymentId String? @db.VarChar(255)
  razorpaySignature String? @db.VarChar(255)

  status PaymentStatus @default(PENDING)

  orderId    String? @db.VarChar(255)
  receiptUrl String? @db.Text // LOCAL PATH: /uploads/exports/receipts/receipt-{userId}-{timestamp}.pdf

  failureReason String?  @db.Text
  refundAmount  Decimal? @db.Decimal(10, 2)
  refundReason  String?  @db.Text

  paidAt     DateTime?
  refundedAt DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([transactionId])
  @@index([status])
  @@index([createdAt(sort: Desc)])
  @@map("payments")
}

// ============================================
// NOTIFICATIONS
// ============================================

model Notification {
  id     Int  @id @default(autoincrement())
  userId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  type    NotificationType
  channel NotificationChannel

  title   String  @db.VarChar(255)
  message String  @db.Text
  data    String? @db.Text // JSON

  actionUrl String? @db.Text

  isRead Boolean   @default(false)
  readAt DateTime?

  sentAt        DateTime?
  deliveredAt   DateTime?
  failureReason String?   @db.Text

  // Language (NEW)
  language Language @default(HI)

  createdAt DateTime @default(now())

  @@index([userId, isRead])
  @@index([createdAt(sort: Desc)])
  @@map("notifications")
}

// ============================================
// ADMIN SYSTEM
// ============================================

model Admin {
  id       Int    @id @default(autoincrement())
  email    String @unique @db.VarChar(255)
  password String @db.VarChar(255)

  firstName String @db.VarChar(100)
  lastName  String @db.VarChar(100)

  role AdminRole @default(ADMIN)

  // Language Preference (NEW)
  preferredLanguage Language @default(HI)

  isActive    Boolean   @default(true)
  lastLoginAt DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  activityLogs  AdminActivityLog[]
  agentsCreated Agent[]            @relation("AgentCreatedBy")

  @@map("admins")
}

model AdminActivityLog {
  id      Int   @id @default(autoincrement())
  adminId Int
  admin   Admin @relation(fields: [adminId], references: [id], onDelete: Cascade)

  action      String  @db.VarChar(100)
  description String  @db.Text
  entityType  String? @db.VarChar(50)
  entityId    Int?
  metadata    String? @db.Text // JSON

  ipAddress String? @db.Inet
  userAgent String? @db.Text

  createdAt DateTime @default(now())

  @@index([adminId])
  @@index([createdAt(sort: Desc)])
  @@map("admin_activity_logs")
}

model Report {
  id             Int  @id @default(autoincrement())
  reporterId     Int
  reporter       User @relation("Reporter", fields: [reporterId], references: [id], onDelete: Cascade)
  reportedUserId Int
  reportedUser   User @relation("Reported", fields: [reportedUserId], references: [id], onDelete: Cascade)

  reason      ReportReason
  description String       @db.Text
  evidence    String?      @db.Text // JSON array of local file paths

  status      ReportStatus @default(PENDING)
  reviewNote  String?      @db.Text
  actionTaken String?      @db.VarChar(100)

  reviewedAt DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([reportedUserId, status])
  @@index([status])
  @@map("reports")
}

// ============================================
// ACTIVITY & ANALYTICS
// ============================================

model ActivityLog {
  id     Int  @id @default(autoincrement())
  userId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  action      String  @db.VarChar(100)
  description String  @db.Text
  metadata    String? @db.Text // JSON

  ipAddress String? @db.Inet
  userAgent String? @db.Text

  createdAt DateTime @default(now())

  @@index([userId])
  @@index([createdAt(sort: Desc)])
  @@map("activity_logs")
}

model SystemConfig {
  id          Int     @id @default(autoincrement())
  key         String  @unique @db.VarChar(100)
  value       String  @db.Text
  dataType    String  @default("string") @db.VarChar(20)
  category    String  @db.VarChar(50)
  description String? @db.Text
  isPublic    Boolean @default(false)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("system_config")
}

// ============================================
// PRIVACY SETTINGS
// ============================================

model ProfilePrivacySettings {
  id     Int  @id @default(autoincrement())
  userId Int  @unique
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  profileVisibility    String  @default("PUBLIC") @db.VarChar(30)
  showLastName         Boolean @default(true)
  showExactAge         Boolean @default(false)
  showDateOfBirth      Boolean @default(false)
  showPhoneNumber      String  @default("MATCHED") @db.VarChar(30)
  showEmail            String  @default("MATCHED") @db.VarChar(30)
  showSocialMedia      String  @default("HIDDEN") @db.VarChar(30)
  showExactLocation    Boolean @default(false)
  showCity             Boolean @default(true)
  showState            Boolean @default(true)
  showCompanyName      Boolean @default(false)
  showAnnualIncome     String  @default("MATCHED") @db.VarChar(30)
  showWorkLocation     Boolean @default(true)
  showFamilyDetails    String  @default("REGISTERED") @db.VarChar(30)
  showParentOccupation Boolean @default(false)
  showSiblingDetails   Boolean @default(true)
  showHoroscope        Boolean @default(false)
  showHoroscopeTo      String  @default("MATCHED") @db.VarChar(30)
  showBirthTime        Boolean @default(false)
  showBirthPlace       Boolean @default(false)
  showDiet             Boolean @default(true)
  showSmokingDrinking  String  @default("REGISTERED") @db.VarChar(30)
  showLastActive       Boolean @default(true)
  showOnlineStatus     Boolean @default(true)
  showProfileViews     Boolean @default(false)
  showWhoViewedProfile Boolean @default(false)
  showShortlistedBy    Boolean @default(false)

  // Chhattisgarh-Specific (NEW)
  showNativeDistrict Boolean @default(true)
  showNativeVillage  Boolean @default(false)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("profile_privacy_settings")
}

model ContactRequest {
  id          Int       @id @default(autoincrement())
  requesterId Int
  requester   User      @relation("ContactRequester", fields: [requesterId], references: [id], onDelete: Cascade)
  profileId   Int
  profile     User      @relation("ContactReceiver", fields: [profileId], references: [id], onDelete: Cascade)
  requestType String    @db.VarChar(30)
  message     String?   @db.Text
  status      String    @default("PENDING") @db.VarChar(20)
  expiresAt   DateTime
  approvedAt  DateTime?
  rejectedAt  DateTime?
  createdAt   DateTime  @default(now())

  @@unique([requesterId, profileId, requestType, status])
  @@index([profileId, status])
  @@index([requesterId])
  @@map("contact_requests")
}

model PhotoPrivacySettings {
  id                  Int      @id @default(autoincrement())
  mediaId             Int      @unique
  media               Media    @relation(fields: [mediaId], references: [id], onDelete: Cascade)
  userId              Int
  user                User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  visibility          String   @default("REGISTERED") @db.VarChar(30)
  enableWatermark     Boolean  @default(true)
  watermarkText       String?  @db.VarChar(100)
  watermarkPosition   String   @default("BOTTOM_RIGHT") @db.VarChar(20)
  preventScreenshots  Boolean  @default(true)
  disableRightClick   Boolean  @default(true)
  blurForNonPremium   Boolean  @default(false)
  blurLevel           String   @default("MEDIUM") @db.VarChar(10)
  allowDownload       Boolean  @default(false)
  allowViewRequests   Boolean  @default(true)
  autoApprovePremium  Boolean  @default(false)
  autoApproveVerified Boolean  @default(false)
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  @@map("photo_privacy_settings")
}

model PhotoViewRequest {
  id          Int       @id @default(autoincrement())
  requesterId Int
  requester   User      @relation("PhotoViewRequester", fields: [requesterId], references: [id], onDelete: Cascade)
  profileId   Int
  profile     User      @relation("PhotoViewReceiver", fields: [profileId], references: [id], onDelete: Cascade)
  photoId     Int
  photo       Media     @relation(fields: [photoId], references: [id], onDelete: Cascade)
  message     String?   @db.Text
  status      String    @default("PENDING") @db.VarChar(20)
  validUntil  DateTime?
  viewCount   Int       @default(0)
  maxViews    Int       @default(10)
  approvedAt  DateTime?
  createdAt   DateTime  @default(now())

  @@unique([requesterId, photoId, status])
  @@index([profileId, status])
  @@map("photo_view_requests")
}

model CommunicationPreferences {
  id                            Int     @id @default(autoincrement())
  userId                        Int     @unique
  user                          User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  allowMatchRequestsFrom        String  @default("EVERYONE") @db.VarChar(30)
  minAgeForRequests             Int?
  maxAgeForRequests             Int?
  allowedReligions              String? @db.Text
  allowedLocations              String? @db.Text
  minEducationLevel             String? @db.VarChar(30)
  allowMessagesFrom             String  @default("MATCHED_ONLY") @db.VarChar(30)
  blockUnverifiedProfiles       Boolean @default(false)
  requireMinProfileCompleteness Int     @default(40)
  allowAnonymousViews           Boolean @default(true)
  notifyOnView                  Boolean @default(false)
  blockRepeatedViews            Boolean @default(false)
  autoResponseEnabled           Boolean @default(false)
  autoResponseMessage           String? @db.Text
  sendAutoResponseToNewMatches  Boolean @default(true)
  maxMatchRequestsPerDay        Int     @default(100)
  maxMessagesPerDay             Int     @default(50)

  // Chhattisgarh-Specific (NEW)
  preferChhattisgarhi Boolean @default(true) // Prefer Chhattisgarhi speakers

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("communication_preferences")
}

// ============================================
// SEARCH VISIBILITY SETTINGS (CONTINUED)
// ============================================

model SearchVisibilitySettings {
  id                     Int       @id @default(autoincrement())
  userId                 Int       @unique
  user                   User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  showInSearch           Boolean   @default(true)
  showInSuggestions      Boolean   @default(true)
  visibleToFreeUsers     Boolean   @default(true)
  visibleToPremiumUsers  Boolean   @default(true)
  visibleToVerifiedUsers Boolean   @default(true)
  showOnlyInCountry      Boolean   @default(false)
  showOnlyInState        Boolean   @default(false)
  showOnlyInCity         Boolean   @default(false)
  excludedCountries      String?   @db.Text
  showOnlyToAgeRange     Boolean   @default(false)
  visibleMinAge          Int?
  visibleMaxAge          Int?
  incognitoEnabled       Boolean   @default(false)
  hideFromSearch         Boolean   @default(false)
  hideLastActive         Boolean   @default(false)
  browseAnonymously      Boolean   @default(false)
  profilePaused          Boolean   @default(false)
  pauseReason            String?   @db.VarChar(100)
  pausedUntil            DateTime?

  // Chhattisgarh-Specific (NEW)
  showOnlyInChhattisgarh  Boolean @default(false) // Show only to Chhattisgarh users
  prioritizeChhattisgarhi Boolean @default(true) // Prioritize in Chhattisgarhi searches

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("search_visibility_settings")
}

// ============================================
// DATA PRIVACY SETTINGS (GDPR COMPLIANCE)
// ============================================

model DataPrivacySettings {
  id                           Int       @id @default(autoincrement())
  userId                       Int       @unique
  user                         User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  consentToProcessData         Boolean   @default(true)
  consentToMarketing           Boolean   @default(false)
  consentToAnalytics           Boolean   @default(true)
  consentToThirdPartySharing   Boolean   @default(false)
  consentDate                  DateTime?
  consentIpAddress             String?   @db.Inet
  dataRetentionPeriod          Int       @default(365)
  autoDeleteAfterInactivity    Boolean   @default(false)
  inactivityPeriod             Int       @default(180)
  allowDataForAiTraining       Boolean   @default(false)
  allowDataForResearch         Boolean   @default(false)
  allowProfileInSuccessStories Boolean   @default(true)
  lastDataExportDate           DateTime?
  dataExportCount              Int       @default(0)
  createdAt                    DateTime  @default(now())
  updatedAt                    DateTime  @updatedAt

  @@map("data_privacy_settings")
}

// ============================================
// DATA DELETION REQUESTS
// ============================================

model DataDeletionRequest {
  id                    Int       @id @default(autoincrement())
  userId                Int
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  deletionType          String    @db.VarChar(30) // SOFT, HARD, IMMEDIATE
  reason                String?   @db.Text
  scheduledDeletionDate DateTime
  status                String    @default("PENDING") @db.VarChar(20)
  canCancel             Boolean   @default(true)
  completedAt           DateTime?
  createdAt             DateTime  @default(now())

  @@index([userId])
  @@index([status, scheduledDeletionDate])
  @@map("data_deletion_requests")
}

// ============================================
// DATA EXPORT REQUESTS (GDPR)
// ============================================

model DataExportRequest {
  id            Int       @id @default(autoincrement())
  userId        Int
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  exportFormat  String    @default("JSON") @db.VarChar(10)
  status        String    @default("PENDING") @db.VarChar(20)
  fileUrl       String?   @db.Text // LOCAL PATH: /uploads/exports/user-data-{userId}-{timestamp}.json
  fileSizeBytes BigInt?
  expiresAt     DateTime?
  downloaded    Boolean   @default(false)
  downloadedAt  DateTime?
  createdAt     DateTime  @default(now())
  completedAt   DateTime?

  @@index([userId])
  @@index([status])
  @@map("data_export_requests")
}

// ============================================
// ACCOUNT SECURITY SETTINGS
// ============================================

model AccountSecuritySettings {
  id                    Int       @id @default(autoincrement())
  userId                Int       @unique
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  twoFactorEnabled      Boolean   @default(false)
  twoFactorMethod       String?   @db.VarChar(20) // SMS, EMAIL, BOTH
  twoFactorSecret       String?   @db.VarChar(100)
  backupCodes           String?   @db.Text
  requireOtpNewDevice   Boolean   @default(true)
  requireOtpNewLocation Boolean   @default(true)
  sessionTimeout        Int       @default(60)
  maxActiveSessions     Int       @default(5)
  lastPasswordChange    DateTime?
  forcePasswordChange   Boolean   @default(false)
  passwordExpiresAt     DateTime?
  recoveryEmail         String?   @db.VarChar(255)
  recoveryPhone         String?   @db.VarChar(20)
  recoveryEmailVerified Boolean   @default(false)
  recoveryPhoneVerified Boolean   @default(false)
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@map("account_security_settings")
}

// ============================================
// NOTIFICATION PREFERENCES
// ============================================

model NotificationPreferences {
  id     Int  @id @default(autoincrement())
  userId Int  @unique
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  // Match Request Notifications
  matchRequestInApp Boolean @default(true)
  matchRequestSms   Boolean @default(true)
  matchRequestEmail Boolean @default(false)
  matchRequestPush  Boolean @default(true)

  // Match Accepted Notifications
  matchAcceptedInApp Boolean @default(true)
  matchAcceptedSms   Boolean @default(true)
  matchAcceptedEmail Boolean @default(true)
  matchAcceptedPush  Boolean @default(true)

  // Message Notifications
  newMessageInApp Boolean @default(true)
  newMessageSms   Boolean @default(false)
  newMessageEmail Boolean @default(false)
  newMessagePush  Boolean @default(true)

  // Profile Activity Notifications
  profileViewInApp Boolean @default(true)
  profileViewEmail Boolean @default(false)
  shortlistedInApp Boolean @default(true)
  shortlistedPush  Boolean @default(true)

  // Subscription Notifications
  subscriptionExpiryInApp Boolean @default(true)
  subscriptionExpirySms   Boolean @default(true)
  subscriptionExpiryEmail Boolean @default(true)

  // Security Alerts
  securityAlertsInApp Boolean @default(true)
  securityAlertsSms   Boolean @default(true)
  securityAlertsEmail Boolean @default(true)

  // Marketing Notifications
  promotionalOffersEmail Boolean @default(false)
  promotionalOffersSms   Boolean @default(false)
  newsletterEmail        Boolean @default(false)

  // General Settings
  enableAllNotifications Boolean @default(true)

  // Quiet Hours
  quietHoursEnabled Boolean @default(false)
  quietHoursStart   String? @db.VarChar(5) // HH:MM format
  quietHoursEnd     String? @db.VarChar(5)

  // Digest Mode
  digestModeEnabled Boolean @default(false)
  digestFrequency   String  @default("DAILY") @db.VarChar(10)
  digestTime        String  @default("09:00") @db.VarChar(5)

  // Language for Notifications (NEW)
  notificationLanguage Language @default(HI)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("notification_preferences")
}

// ============================================
// AUDIT & MONITORING (A+ IMPROVEMENTS)
// ============================================

/// Audit Log tracks all critical database changes for compliance and debugging
model AuditLog {
  id Int @id @default(autoincrement())

  // What was changed
  tableName  String @db.VarChar(100)
  recordId   Int
  action     String @db.VarChar(20) // INSERT, UPDATE, DELETE

  // Change details
  oldValues Json? // Previous state (for UPDATE/DELETE)
  newValues Json? // New state (for INSERT/UPDATE)
  changedFields String? @db.Text // List of changed fields

  // Who made the change
  changedBy   Int?
  changedByType String @default("USER") @db.VarChar(20) // USER, ADMIN, SYSTEM

  // Request context
  ipAddress  String? @db.Inet
  userAgent  String? @db.Text
  requestId  String? @db.VarChar(50) // For tracing

  // Timestamps
  changedAt DateTime @default(now())

  @@index([tableName, recordId])
  @@index([changedBy])
  @@index([changedAt(sort: Desc)])
  @@index([action])
  @@index([tableName, changedAt(sort: Desc)])
  @@map("audit_logs")
}

/// Database Metrics for performance monitoring
model DatabaseMetrics {
  id Int @id @default(autoincrement())

  // Metric details
  metricName  String @db.VarChar(100) // e.g., "slow_query", "table_size", "index_usage"
  metricValue Float
  metricUnit  String @db.VarChar(20) // ms, rows, bytes, percent

  // Context
  tableName   String? @db.VarChar(100)
  queryType   String? @db.VarChar(20) // SELECT, INSERT, UPDATE, DELETE

  // Additional data
  metadata Json?

  // Timestamp
  recordedAt DateTime @default(now())

  @@index([metricName, recordedAt(sort: Desc)])
  @@index([tableName])
  @@map("database_metrics")
}

/// Search Log for analytics and query optimization
model SearchLog {
  id Int @id @default(autoincrement())

  // Who searched
  userId Int?

  // Search parameters
  searchFilters Json // All applied filters
  resultCount   Int  // Number of results returned

  // Performance
  executionTimeMs Int // Query execution time

  // Context
  searchType String @db.VarChar(50) // PROFILE, MATCH, QUICK
  platform   String @default("MOBILE") @db.VarChar(20) // MOBILE, WEB, ADMIN

  // Timestamp
  searchedAt DateTime @default(now())

  @@index([userId])
  @@index([searchedAt(sort: Desc)])
  @@index([searchType, searchedAt(sort: Desc)])
  @@index([executionTimeMs(sort: Desc)]) // Find slow searches
  @@map("search_logs")
}

/// API Rate Limit Tracking for security
model ApiRateLimitLog {
  id Int @id @default(autoincrement())

  // Who hit the limit
  userId    Int?
  ipAddress String @db.Inet

  // What endpoint
  endpoint String @db.VarChar(255)
  method   String @db.VarChar(10) // GET, POST, PUT, DELETE

  // Rate limit info
  limitHitCount Int @default(1)
  windowStart   DateTime
  windowEnd     DateTime

  // Timestamp
  createdAt DateTime @default(now())

  @@index([userId, createdAt(sort: Desc)])
  @@index([ipAddress, createdAt(sort: Desc)])
  @@index([endpoint])
  @@map("api_rate_limit_logs")
}

// ============================================
// DAILY USAGE TRACKING (Free User Limits)
// ============================================

/// Tracks daily usage for free and premium users
model DailyUsage {
  id     Int    @id @default(autoincrement())
  userId Int
  date   String @db.VarChar(10) // YYYY-MM-DD format

  // Usage counters (reset daily)
  profileViews    Int @default(0) // Free: 5/day
  contactRequests Int @default(0) // Free: 5/day
  interestsSent   Int @default(0) // Free: 5/day
  messagesCount   Int @default(0) // Free: 10/day

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userId, date])
  @@index([userId])
  @@index([date])
  @@map("daily_usage")
}

// ============================================
// PROFILE BOOST (Spotlight/Highlighter)
// ============================================

/// Tracks profile boosts for premium visibility
model ProfileBoost {
  id            Int      @id @default(autoincrement())
  userId        Int
  
  // Boost details
  boostType     String   @db.VarChar(50) // SPOTLIGHT_1HR, BOOST_24HR, HIGHLIGHTER
  multiplier    Float    @default(1) // Visibility multiplier (e.g., 5x for spotlight)
  isHighlighted Boolean  @default(false) // Golden border effect
  
  // Pricing
  price         Int      // Price in INR
  transactionId String?  @db.VarChar(100) // Payment reference
  
  // Timing
  activatedAt   DateTime
  expiresAt     DateTime
  status        String   @default("ACTIVE") @db.VarChar(20) // ACTIVE, EXPIRED, CANCELLED
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@index([userId])
  @@index([status, expiresAt])
  @@index([boostType])
  @@map("profile_boosts")
}

// ============================================
// PIN CODE LOCATION CACHE
// ============================================

/// Caches India Post PIN code lookups to avoid repeated external API calls
model Pincode {
  id        Int      @id @default(autoincrement())
  pincode   String   @unique @db.VarChar(6)
  city      String   @db.VarChar(100)
  district  String   @db.VarChar(100)
  state     String   @db.VarChar(100)
  createdAt DateTime @default(now()) @map("created_at")

  @@index([pincode])
  @@map("pincodes")
}

// ============================================
// CONTACT MESSAGES
// ============================================

model ContactMessage {
  id        Int      @id @default(autoincrement())
  name      String   @db.VarChar(100)
  email     String   @db.VarChar(255)
  phone     String?  @db.VarChar(20)
  subject   String?  @db.VarChar(200)
  message   String   @db.Text
  status    String   @default("PENDING") @db.VarChar(20) // PENDING, READ, REPLIED
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("contact_messages")
}

```

# Source Code
## src/app.js
```javascript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';

import routes from './routes/index.js';
import { logger } from './config/logger.js';
import requestIdMiddleware from './middleware/requestId.middleware.js';
import { rateLimiter } from './middleware/rate-limiter.middleware.js';
import { errorHandler } from './middleware/error-handler.middleware.js';
import { env } from './config/env.js';

const app = express();

// Trust proxy is required when running behind a load balancer (like Render, Heroku, AWS ELB)
// This fixes the "X-Forwarded-For" header validation error from express-rate-limit
app.set('trust proxy', 1);

// ============================================
// HTTPS ENFORCEMENT (Production Only) - A+ Security
// ============================================
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

// Request ID tracking (for debugging and logging)
app.use(requestIdMiddleware);

// ============================================
// SECURITY HEADERS - Enhanced for A+ Score
// ============================================
if (process.env.NODE_ENV === 'production') {
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: ["'self'", "https://*.cloudflarestorage.com", "wss:", "ws:"],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false, // Allow cross-origin resources
    hsts: {
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  }));
} else {
  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }));
}

// CORS - Fixed configuration
const allowedOrigins = env.CORS_ORIGIN ? env.CORS_ORIGIN.split(',').map(o => o.trim()) : [];

const corsOptions = {
  origin: (origin, callback) => {
    // If CORS_ORIGIN is '*', allow all origins
    if (allowedOrigins.includes('*')) {
      return callback(null, true);
    }

    // In development, if no origins are specified, allow everything.
    if (process.env.NODE_ENV !== 'production' && allowedOrigins.length === 0) {
      return callback(null, true);
    }

    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Check if the origin is in our allowed list
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  maxAge: 86400, // 24 hours - cache preflight requests
};
app.use(cors(corsOptions));


// ============================================
// INPUT LENGTH LIMITS - A+ Security
// ============================================
app.use(express.json({
  limit: '5mb', // Reduced from 10mb for security
  strict: true,
}));
app.use(express.urlencoded({
  extended: true,
  limit: '5mb',
  parameterLimit: 1000, // Max URL-encoded params
}));

// Data sanitization against NoSQL injection
app.use(mongoSanitize({
  replaceWith: '_',
  onSanitize: ({ req, key }) => {
    logger.warn(`Sanitized request from ${req.ip}:`, key);
  }
}));

// Prevent HTTP Parameter Pollution
app.use(hpp({
  whitelist: ['sort', 'filter', 'page', 'limit'] // Allow these query params to be arrays
}));

// Compression (only for production, responses > 1kb)
app.use(compression({
  level: 6, // Balance between speed and compression
  threshold: 1024, // Only compress responses > 1kb
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Rate limiting
app.use(rateLimiter);

// Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// ============================================
// HEALTH CHECK ENDPOINT - A+ Architecture
// ============================================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB',
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + 'MB',
    },
  });
});

// Root route - Welcome message
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🎉 Chhattisgarh Shadi Backend API',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/health',
      api: '/api/v1',
      auth: '/api/v1/auth',
      users: '/api/v1/users',
      profiles: '/api/v1/profiles',
      matches: '/api/v1/matches',
      messages: '/api/v1/messages',
    },
  });
});

// API Routes (versioned)
app.use('/api/v1', routes);

// Future API version placeholder
// app.use('/api/v2', v2Routes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    requestedPath: req.path,
    hint: 'All API routes are under /api/v1 prefix',
  });
});

// Error Handler
app.use(errorHandler);

export default app;```

## src/config/config.js
```javascript
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  // Server
  NODE_ENV: z.string().default('development'),
  PORT: z.string().optional().transform((val) => {
    const parsed = parseInt(val || '8080', 10);
    return isNaN(parsed) ? 8080 : parsed;
  }),
  API_URL: z.string().default('http://localhost:8080'),

  // Database
  DATABASE_URL: z.string(),

  // CORS
  CORS_ORIGIN: z.string().default('*'),
  FRONTEND_URL: z.string().optional(),

  // JWT
  JWT_ACCESS_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_ACCESS_EXPIRY: z.string().default('15m'),
  JWT_REFRESH_EXPIRY: z.string().default('7d'),
  ACCESS_TOKEN_SECRET: z.string().optional(), // Backward compatibility
  ACCESS_TOKEN_EXPIRY: z.string().optional(), // Backward compatibility
  REFRESH_TOKEN_SECRET: z.string().optional(), // Backward compatibility
  REFRESH_TOKEN_EXPIRY: z.string().optional(), // Backward compatibility

  // Cloudflare R2 Storage
  R2_ACCESS_KEY_ID: z.string().optional(),
  R2_SECRET_ACCESS_KEY: z.string().optional(),
  R2_ENDPOINT: z.string().optional(),
  R2_BUCKET_NAME: z.string().optional(),
  R2_REGION: z.string().default('auto'),
  R2_PUBLIC_URL: z.string().optional(),

  // Firebase
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),

  // Razorpay
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  RAZORPAY_WEBHOOK_SECRET: z.string().optional(),

  // Redis (for caching)
  REDIS_URL: z.string().optional().default('redis://localhost:6379'),
});

export const config = envSchema.parse(process.env);```

## src/config/database.js
```javascript
import { PrismaClient } from '@prisma/client';
import { logger } from './logger.js';

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' 
      ? [
          { level: 'error', emit: 'event' },
          { level: 'warn', emit: 'event' },
          { level: 'query', emit: 'event' }, // Log slow queries in dev
        ]
      : [
          { level: 'error', emit: 'event' },
          { level: 'warn', emit: 'event' },
        ],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    // Connection pooling (optimized for Neon PostgreSQL)
    __internal: {
      engine: {
        connection_limit: process.env.DATABASE_CONNECTION_LIMIT || 10,
      },
    },
  });
};

// Singleton pattern
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Event listeners
prisma.$on('error', (e) => {
  logger.error('Prisma error:', e);
});

prisma.$on('warn', (e) => {
  logger.warn('Prisma warning:', e);
});

// Log slow queries in development
if (process.env.NODE_ENV === 'development') {
  prisma.$on('query', (e) => {
    if (e.duration > 1000) { // Log queries taking > 1 second
      logger.warn(`Slow query detected (${e.duration}ms):`, e.query);
    }
  });
}

// Connection test
prisma.$connect()
  .then(() => {
    logger.info('Prisma Client initialized successfully');
  })
  .catch((err) => {
    logger.error('Failed to connect Prisma Client:', err);
  });

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

export default prisma;```

## src/config/env.js
```javascript
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string(),
  CORS_ORIGIN: z.string().default('*'),

  // JWT - FIXED: Use correct variable names
  JWT_ACCESS_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_ACCESS_EXPIRY: z.string().default('15m'),
  JWT_REFRESH_EXPIRY: z.string().default('7d'),



  // Cloudflare R2 Storage
  R2_ACCESS_KEY_ID: z.string().optional(),
  R2_SECRET_ACCESS_KEY: z.string().optional(),
  R2_ENDPOINT: z.string().optional(),
  R2_BUCKET_NAME: z.string().optional(),
  R2_REGION: z.string().default('auto'),
  R2_PUBLIC_URL: z.string().optional(),

  // Razorpay - Optional
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  RAZORPAY_WEBHOOK_SECRET: z.string().optional(),

  // Firebase - Optional
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
});

try {
  envSchema.parse(process.env);
} catch (error) {
  console.error('Invalid environment variables:', error.errors);
  process.exit(1);
}

export const env = envSchema.parse(process.env);```

## src/config/firebase.js
```javascript
import admin from 'firebase-admin';
import { config } from './config.js';
import { logger } from './logger.js';

let firebaseApp = null;

/**
 * Initialize Firebase Admin SDK
 * @returns {admin.app.App} Firebase Admin App instance
 */
export const initializeFirebase = () => {
  try {
    if (firebaseApp) {
      return firebaseApp;
    }

    // Check if all required Firebase config is available
    if (!config.FIREBASE_PROJECT_ID || !config.FIREBASE_PRIVATE_KEY || !config.FIREBASE_CLIENT_EMAIL) {
      logger.warn('⚠️  Firebase configuration is incomplete. Push notifications will not work.');
      return null;
    }

    // Replace escaped newlines in private key
    const privateKey = config.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: config.FIREBASE_PROJECT_ID,
        privateKey: privateKey,
        clientEmail: config.FIREBASE_CLIENT_EMAIL,
      }),
    });

    logger.info('✅ Firebase Admin SDK initialized successfully');
    return firebaseApp;
  } catch (error) {
    logger.error('❌ Failed to initialize Firebase Admin SDK:', error.message, {
      errorInfo: error.errorInfo,
      codePrefix: error.codePrefix,
    });
    return null;
  }
};

/**
 * Get Firebase Admin App instance
 * @returns {admin.app.App|null}
 */
export const getFirebaseApp = () => {
  if (!firebaseApp) {
    return initializeFirebase();
  }
  return firebaseApp;
};

/**
 * Get Firebase Messaging instance
 * @returns {admin.messaging.Messaging|null}
 */
export const getMessaging = () => {
  const app = getFirebaseApp();
  if (!app) {
    logger.warn('⚠️  Firebase not initialized - cannot get messaging instance');
    return null;
  }
  try {
    return admin.messaging(app);
  } catch (error) {
    logger.error('❌ Error getting Firebase messaging:', error.message);
    return null;
  }
};

/**
 * Send push notification
 * @param {string} token - FCM device token
 * @param {Object} notification - Notification payload
 * @returns {Promise<string|null>}
 */
export const sendPushNotification = async (token, notification) => {
  try {
    const messaging = getMessaging();
    
    if (!messaging) {
      logger.warn('⚠️  Push notification skipped - Firebase not initialized');
      return null;
    }

    const message = {
      notification: {
        title: notification.title,
        body: notification.body,
      },
      data: notification.data || {},
      token: token,
    };

    const response = await messaging.send(message);
    logger.info('✅ Push notification sent successfully:', response);
    return response;
  } catch (error) {
    logger.error('❌ Failed to send push notification:', error.message);
    throw error;
  }
};

export default {
  initializeFirebase,
  getFirebaseApp,
  getMessaging,
  sendPushNotification,
};```

## src/config/logger.js
```javascript
import winston from 'winston';
import { config } from './config.js';

// Define log format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json()
);

// Create console format for better readability in development
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    let msg = `${timestamp} [${level}]: ${message}`;
    if (Object.keys(meta).length > 0) {
      msg += ` ${JSON.stringify(meta)}`;
    }
    return msg;
  })
);

// Define transports
const transports = [
  // Console transport
  new winston.transports.Console({
    format: config.NODE_ENV === 'production' ? logFormat : consoleFormat,
  }),
  // Error log file
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: logFormat,
  }),
  // Combined log file
  new winston.transports.File({
    filename: 'logs/combined.log',
    format: logFormat,
  }),
];

// Create logger instance
export const logger = winston.createLogger({
  level: config.NODE_ENV === 'production' ? 'info' : 'debug',
  format: logFormat,
  transports,
  exitOnError: false,
});

// Create a stream for Morgan HTTP logger
export const morganStream = {
  write: (message) => {
    logger.http(message.trim());
  },
};
```

## src/config/prisma.js
```javascript
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
```

## src/config/r2.js
```javascript
// Cloudflare R2 Storage Configuration
import { S3Client } from '@aws-sdk/client-s3';
import { logger } from './logger.js';

/**
 * Check if R2 is configured
 * @returns {boolean}
 */
export const isR2Configured = () => {
    return !!(
        process.env.R2_ACCESS_KEY_ID &&
        process.env.R2_SECRET_ACCESS_KEY &&
        process.env.R2_BUCKET_NAME &&
        process.env.R2_ENDPOINT
    );
};

/**
 * Initialize Cloudflare R2 Client (S3-compatible API)
 */
export const r2Client = isR2Configured()
    ? new S3Client({
        region: process.env.R2_REGION || 'auto',
        endpoint: process.env.R2_ENDPOINT,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        },
    })
    : null;

if (isR2Configured()) {
    logger.info('Cloudflare R2 Client initialized successfully');
} else {
    logger.warn('Cloudflare R2 is not configured. File upload features will be limited.');
}

/**
 * Get Bucket Name
 * @returns {string}
 */
export const getBucketName = () => process.env.R2_BUCKET_NAME;

/**
 * Get Region
 * @returns {string}
 */
export const getRegion = () => process.env.R2_REGION || 'auto';

// Public URL base
export const getPublicUrl = () => process.env.R2_PUBLIC_URL || null;
```

## src/config/razorpay.js
```javascript
import Razorpay from 'razorpay';
import { config } from './config.js';
import { logger } from './logger.js';

/**
 * Check if Razorpay is configured
 * @returns {boolean}
 */
export const isRazorpayConfigured = () => {
  return !!(config.RAZORPAY_KEY_ID && config.RAZORPAY_KEY_SECRET);
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
export const getWebhookSecret = () => config.RAZORPAY_WEBHOOK_SECRET;```

## src/config/redis.js
```javascript
/**
 * Redis Configuration
 * Provides Redis client for caching with automatic reconnection
 */

import Redis from 'ioredis';
import { logger } from './logger.js';
import { config } from './config.js';

// Redis connection URL (set in env for production)
const REDIS_URL = config.REDIS_URL || 'redis://localhost:6379';

let redisClient = null;
let isConnected = false;

/**
 * Initialize Redis connection
 */
export const initializeRedis = () => {
    try {
        redisClient = new Redis(REDIS_URL, {
            maxRetriesPerRequest: 3,
            retryDelayOnFailover: 100,
            enableReadyCheck: true,
            lazyConnect: true,
            // Connection pool settings
            connectionName: 'chhattisgarh-shadi-cache',
            // Reconnection settings
            retryStrategy: (times) => {
                if (times > 10) {
                    logger.error('Redis: Max reconnection attempts reached');
                    return null; // Stop retrying
                }
                const delay = Math.min(times * 200, 2000);
                logger.warn(`Redis: Reconnecting in ${delay}ms (attempt ${times})`);
                return delay;
            },
        });

        redisClient.on('connect', () => {
            logger.info('Redis: Connecting...');
        });

        redisClient.on('ready', () => {
            isConnected = true;
            logger.info('Redis: Connected and ready ✅');
        });

        redisClient.on('error', (err) => {
            isConnected = false;
            logger.error('Redis: Connection error:', err.message);
        });

        redisClient.on('close', () => {
            isConnected = false;
            logger.warn('Redis: Connection closed');
        });

        // Connect
        redisClient.connect().catch((err) => {
            logger.error('Redis: Initial connection failed:', err.message);
        });

        return redisClient;
    } catch (error) {
        logger.error('Redis: Failed to initialize:', error);
        return null;
    }
};

/**
 * Get Redis client instance
 */
export const getRedisClient = () => redisClient;

/**
 * Check if Redis is connected
 */
export const isRedisConnected = () => isConnected;

/**
 * Gracefully close Redis connection
 */
export const closeRedis = async () => {
    if (redisClient) {
        await redisClient.quit();
        logger.info('Redis: Connection closed gracefully');
    }
};

export default {
    initializeRedis,
    getRedisClient,
    isRedisConnected,
    closeRedis,
};
```

## src/config/swagger.js
```javascript
/**
 * Swagger API Documentation Configuration
 * Auto-generates API documentation from route comments
 */

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { config } from './config.js';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Chhattisgarh Shaadi API',
            version: '1.0.0',
            description: 'Matrimony Application API for Chhattisgarh region',
            contact: {
                name: 'API Support',
                email: 'support@chhattisgarhshaadi.com',
            },
        },
        servers: [
            {
                url: config.API_URL || 'http://localhost:3000/api/v1',
                description: 'API Server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                // Common response schemas
                SuccessResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean', example: true },
                        message: { type: 'string' },
                        data: { type: 'object' },
                    },
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean', example: false },
                        message: { type: 'string' },
                        error: { type: 'string' },
                    },
                },
                Pagination: {
                    type: 'object',
                    properties: {
                        page: { type: 'integer', example: 1 },
                        limit: { type: 'integer', example: 20 },
                        total: { type: 'integer' },
                        totalPages: { type: 'integer' },
                    },
                },
                // User schemas
                User: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        email: { type: 'string', format: 'email' },
                        phone: { type: 'string' },
                        role: { type: 'string', enum: ['USER', 'PREMIUM_USER', 'ADMIN'] },
                        isActive: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                    },
                },
                Profile: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        profileId: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        gender: { type: 'string', enum: ['MALE', 'FEMALE', 'OTHER'] },
                        dateOfBirth: { type: 'string', format: 'date' },
                        religion: { type: 'string' },
                        caste: { type: 'string' },
                        city: { type: 'string' },
                        state: { type: 'string' },
                    },
                },
                // Auth schemas
                LoginRequest: {
                    type: 'object',
                    required: ['idToken'],
                    properties: {
                        idToken: { type: 'string', description: 'Firebase Phone Auth ID token' },
                    },
                },
                LoginResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        message: { type: 'string' },
                        data: {
                            type: 'object',
                            properties: {
                                user: { $ref: '#/components/schemas/User' },
                                accessToken: { type: 'string' },
                                refreshToken: { type: 'string' },
                            },
                        },
                    },
                },
                // Subscription schemas
                SubscriptionPlan: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        price: { type: 'number' },
                        duration: { type: 'integer', description: 'Days' },
                        features: { type: 'array', items: { type: 'string' } },
                    },
                },
            },
        },
        tags: [
            { name: 'Auth', description: 'Authentication endpoints' },
            { name: 'Users', description: 'User management' },
            { name: 'Profiles', description: 'Profile management' },
            { name: 'Matches', description: 'Match and interest management' },
            { name: 'Messages', description: 'Chat and messaging' },
            { name: 'Subscriptions', description: 'Subscription and payments' },
            { name: 'Notifications', description: 'Push notifications' },
            { name: 'Admin', description: 'Admin operations' },
        ],
    },
    apis: ['./src/routes/*.js'], // Path to route files with JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);

/**
 * Setup Swagger documentation
 * @param {Express} app - Express application
 */
export const setupSwagger = (app) => {
    // Swagger JSON endpoint
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    // Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: 'Chhattisgarh Shaadi API Docs',
    }));

    console.log('📚 Swagger docs available at /api-docs');
};

export default { setupSwagger, swaggerSpec };
```

## src/controllers/activityLog.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import activityLogService from '../services/activityLog.service.js';

/**
 * Get activity logs with pagination and filters
 */
export const getActivityLogs = asyncHandler(async (req, res) => {
    const { page = 1, limit = 20, actionType, actorId, startDate, endDate } = req.query;

    const result = await activityLogService.getActivityLogs({
        page: parseInt(page),
        limit: parseInt(limit),
        actionType,
        actorId,
        startDate,
        endDate,
    });

    res.json({
        success: true,
        ...result,
    });
});

/**
 * Get activity log stats
 */
export const getActivityStats = asyncHandler(async (req, res) => {
    const stats = await activityLogService.getActivityStats();

    res.json({
        success: true,
        data: stats,
    });
});

export default {
    getActivityLogs,
    getActivityStats,
};
```

## src/controllers/admin.bulk.controller.js
```javascript
import xlsx from 'xlsx';
import prisma from '../config/database.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

// Helper to parse Excel date
const parseExcelDate = (serial) => {
    if (!serial) return null;
    // If it's already a string like "1990-01-01"
    if (typeof serial === 'string') return new Date(serial);
    // Excel date serial number
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    const date_info = new Date(utc_value * 1000);
    return date_info;
};

class AdminBulkController {

    uploadUsers = asyncHandler(async (req, res) => {
        if (!req.file) {
            throw new ApiError(HTTP_STATUS.BAD_REQUEST, "No file uploaded");
        }

        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = xlsx.utils.sheet_to_json(sheet);

        if (!rows || rows.length === 0) {
            throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Excel sheet is empty");
        }

        const results = {
            success: 0,
            failed: 0,
            errors: []
        };

        // Process sequentially to avoid race conditions or overwhelming DB
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const rowNumber = i + 2; // Excel row number (1-based, header is 1)

            try {
                // Validation - Basic Required Fields
                // Since we are moving to Phone-based Auth, phone is mandatory
                if (!row.phone || !row.firstName || !row.lastName || !row.gender || !row.dateOfBirth) {
                    throw new Error("Missing required fields (phone, firstName, lastName, gender, dateOfBirth)");
                }

                const phone = String(row.phone).trim();
                const email = row.email ? row.email.trim().toLowerCase() : null;

                // Check for existing user by phone
                const existingUser = await prisma.user.findFirst({
                    where: {
                        OR: [
                            { phone: phone },
                            email ? { email: email } : {}
                        ].filter(cond => Object.keys(cond).length > 0)
                    }
                });

                if (existingUser) {
                    throw new Error(`User with phone ${phone} or email ${email} already exists`);
                }

                // Create User and Profile in Transaction
                await prisma.$transaction(async (tx) => {
                    // 1. Create User
                    await tx.user.create({
                        data: {
                            phone: phone,
                            countryCode: row.countryCode || '+91',
                            email: email,
                            authProvider: 'PHONE',
                            role: 'USER',
                            isPhoneVerified: true, // Trusted admin source
                            isActive: true,

                            // Create Profile
                            profile: {
                                create: {
                                    firstName: row.firstName,
                                    lastName: row.lastName,
                                    dateOfBirth: parseExcelDate(row.dateOfBirth),
                                    gender: row.gender.toUpperCase(), // Enum: MALE, FEMALE
                                    maritalStatus: row.maritalStatus ? row.maritalStatus.toUpperCase() : 'NEVER_MARRIED',
                                    religion: row.religion ? row.religion.toUpperCase() : 'OTHER',
                                    motherTongue: row.motherTongue ? row.motherTongue.toUpperCase() : 'HINDI',
                                    country: row.country || 'India',
                                    state: row.state || 'Chhattisgarh',
                                    city: row.city || 'Raipur',

                                    // Optional Fields
                                    caste: row.caste,
                                    height: row.height ? parseInt(row.height) : undefined,
                                    highestEducation: row.education,
                                    occupation: row.occupation,
                                    annualIncome: row.annualIncome ? String(row.annualIncome) : undefined,

                                    // Extended Fields
                                    middleName: row.middleName,
                                    weight: row.weight ? parseInt(row.weight) : undefined,
                                    diet: row.diet,
                                    drinkingHabit: row.drinkingHabit,
                                    smokingHabit: row.smokingHabit,

                                    // Family
                                    fatherName: row.fatherName,
                                    motherName: row.motherName,
                                    numberOfBrothers: row.numberOfBrothers ? parseInt(row.numberOfBrothers) : 0,
                                    numberOfSisters: row.numberOfSisters ? parseInt(row.numberOfSisters) : 0,

                                    // Local Specifics
                                    category: row.category ? row.category.toUpperCase() : undefined,
                                    nativeVillage: row.nativeVillage,
                                    speaksChhattisgarhi: row.speaksChhattisgarhi === 'YES' || row.speaksChhattisgarhi === true,

                                    // Astro
                                    manglik: row.manglik === 'YES' || row.manglik === true,

                                    // Defaults
                                    profilePrivacySettings: { create: {} },
                                    partnerPreference: { create: {} }
                                }
                            }
                        }
                    });
                });

                results.success++;

            } catch (error) {
                results.failed++;
                results.errors.push({
                    row: rowNumber,
                    identifier: row.phone || row.email || 'N/A',
                    error: error.message
                });
            }
        }

        return res.status(HTTP_STATUS.OK).json(
            new ApiResponse(HTTP_STATUS.OK, results, `Processed ${rows.length} rows`)
        );
    });
}

export const adminBulkController = new AdminBulkController();
```

## src/controllers/admin.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { userService } from '../services/user.service.js';
import { profileService } from '../services/profile.service.js';
import { adminService } from '../services/admin.service.js';
import { logAdminAction } from '../services/activityLog.service.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { ApiError } from '../utils/ApiError.js';
import jwtUtils from '../utils/jwt.js';

/**
 * [NEW] Admin Login
 */
export const adminLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin@chshadi.com';
  const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'Admin@123';

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // Generate a special admin token
    // We use a specific ID range or special identifier for hardcoded admin
    const token = jwtUtils.generateAccessToken({
      id: 0, // 0 for super admin
      role: 'ADMIN',
      email: ADMIN_USER
    });

    return res.status(HTTP_STATUS.OK).json(
      new ApiResponse(HTTP_STATUS.OK, {
        token,
        user: { email: ADMIN_USER, role: 'ADMIN' }
      }, 'Admin login successful')
    );
  }

  throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid admin credentials');
});

/**
 * Get all users (Admin)
 */
export const getAllUsers = asyncHandler(async (req, res) => {
  const result = await userService.getAllUsers(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Users retrieved successfully'));
});

/**
 * Get user by ID (Admin)
 */
export const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getFullUserById(req.params.userId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User retrieved successfully'));
});

/**
 * Update user role (Admin)
 */
export const updateUserRole = asyncHandler(async (req, res) => {
  const { role } = req.body;
  const { userId } = req.params;

  const user = await userService.updateUserRole(userId, role);
  await logAdminAction(req, 'USER_ROLE_CHANGED', `Changed role of user ${user.email} to ${role}`, { userId, role });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User role updated successfully'));
});

/**
 * Delete user (Admin)
 */
export const deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.userId);
  await logAdminAction(req, 'USER_DELETED', `Deleted user ${req.params.userId}`, { userId: req.params.userId });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'User deleted successfully'));
});

/**
 * Get all profiles (Admin)
 */
export const getAllProfiles = asyncHandler(async (req, res) => {
  // Pass `null` for currentUserId to skip block checks for admin
  const result = await profileService.searchProfiles(req.query, null);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Profiles retrieved successfully'));
});

/**
 * Get dashboard statistics (Admin)
 */
export const getDashboardStats = asyncHandler(async (req, res) => {
  const stats = await adminService.getDashboardStats();
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        stats,
        'Dashboard statistics retrieved successfully'
      )
    );
});

/**
 * Clean up expired tokens (Admin)
 */
export const cleanupExpiredTokens = asyncHandler(async (req, res) => {
  const count = await adminService.cleanupExpiredTokens();
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, { count }, `${count} expired tokens cleaned up`)
    );
});

/**
 * Get recent users (Admin)
 */
export const getRecentUsers = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const users = await adminService.getRecentUsers(limit);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, users, 'Recent users retrieved successfully'));
});

/**
 * Get recent matches (Admin)
 */
export const getRecentMatches = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const matches = await adminService.getRecentMatches(limit);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, matches, 'Recent matches retrieved successfully')
    );
});

// --- ADDED FOR REPORTS ---

/**
 * [NEW] Get all reports (Admin)
 */
export const getReports = asyncHandler(async (req, res) => {
  const result = await adminService.getReports(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Reports retrieved successfully'));
});

/**
 * [NEW] Get a single report by ID (Admin)
 */
export const getReportById = asyncHandler(async (req, res) => {
  const report = await adminService.getReportById(req.params.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, report, 'Report retrieved successfully'));
});

/**
 * [NEW] Update a report's status (Admin)
 */
export const updateReport = asyncHandler(async (req, res) => {
  const updatedReport = await adminService.updateReportStatus(
    req.params.id,
    req.body
  );
  await logAdminAction(req, 'REPORT_UPDATED', `Updated report ${req.params.id}`, { reportId: req.params.id, update: req.body });
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedReport, 'Report updated successfully'));
});

// --- SUBSCRIPTION PLAN MANAGEMENT ---

/**
 * [NEW] Get all subscription plans (Admin)
 */
export const getPlans = asyncHandler(async (req, res) => {
  const plans = await adminService.getPlans();
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, plans, 'Plans retrieved successfully'));
});

/**
 * [NEW] Update plan discount (Admin)
 */
export const updatePlanDiscount = asyncHandler(async (req, res) => {
  const { planId } = req.params;
  const { discountPercentage, discountValidUntil } = req.body;

  const updatedPlan = await adminService.updatePlanDiscount(
    parseInt(planId),
    discountPercentage,
    discountValidUntil
  );

  await logAdminAction(req, 'PLAN_DISCOUNT_UPDATED', `Updated discount for plan ${planId}`, { planId, discountPercentage });

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedPlan, 'Plan discount updated successfully'));
});


/**
 * [NEW] Update plan details (Admin)
 */
export const updatePlan = asyncHandler(async (req, res) => {
  const { planId } = req.params;
  const updateData = req.body;

  const updatedPlan = await adminService.updatePlan(parseInt(planId), updateData);
  await logAdminAction(req, 'PLAN_UPDATED', `Updated plan ${planId}`, { planId, updateData });

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedPlan, 'Plan updated successfully'));
});


export const adminController = {
  adminLogin,
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
  getAllProfiles, // ADDED
  getDashboardStats,
  cleanupExpiredTokens,
  getRecentUsers,
  getRecentMatches,
  getReports,
  getReportById,
  updateReport,
  getPlans,
  updatePlanDiscount,
  updatePlan, // ADDED
};```

## src/controllers/agent.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { agentService } from '../services/agent.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * [Admin] Create a new agent
 */
export const createAgent = asyncHandler(async (req, res) => {
  const agent = await agentService.createAgent(req.body, req.user.id);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(HTTP_STATUS.CREATED, agent, 'Agent created successfully')
    );
});

/**
 * [Admin] Get all agents
 */
export const getAllAgents = asyncHandler(async (req, res) => {
  const result = await agentService.getAllAgents(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Agents retrieved successfully')
    );
});

/**
 * [Admin] Get a single agent by ID
 */
export const getAgentById = asyncHandler(async (req, res) => {
  const agent = await agentService.getAgentById(req.params.agentId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, agent, 'Agent retrieved successfully'));
});

/**
 * [Admin] Update an agent
 */
export const updateAgent = asyncHandler(async (req, res) => {
  const updatedAgent = await agentService.updateAgent(
    req.params.agentId,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, updatedAgent, 'Agent updated successfully')
    );
});

/**
 * [Admin] Delete an agent (Soft Delete)
 */
export const deleteAgent = asyncHandler(async (req, res) => {
  await agentService.deleteAgent(req.params.agentId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Agent deleted successfully'));
});

/**
 * [Admin] Get all users registered by a specific agent
 */
export const getUsersByAgent = asyncHandler(async (req, res) => {
  const result = await agentService.getUsersByAgent(
    parseInt(req.params.agentId),
    req.query
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Agent users retrieved successfully')
    );
});

/**
 * [Admin] Get agent statistics for commission calculation
 */
export const getAgentStats = asyncHandler(async (req, res) => {
  const stats = await agentService.getAgentStats(parseInt(req.params.agentId));
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, stats, 'Agent stats retrieved successfully')
    );
});

export const agentController = {
  createAgent,
  getAllAgents,
  getAgentById,
  updateAgent,
  deleteAgent,
  getUsersByAgent,
  getAgentStats,
};```

## src/controllers/analytics.controller.js
```javascript
import analyticsService from '../services/analytics.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get revenue analytics
 */
export const getRevenueAnalytics = asyncHandler(async (req, res) => {
    const months = parseInt(req.query.months, 10) || 6;
    const data = await analyticsService.getRevenueAnalytics(months);
    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, data, 'Revenue analytics retrieved successfully')
    );
});

/**
 * Get signups by category
 */
export const getSignupsByCategory = asyncHandler(async (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10;
    const data = await analyticsService.getSignupsByCategory(limit);
    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, data, 'Signup analytics retrieved successfully')
    );
});

/**
 * Get subscription analytics
 */
export const getSubscriptionAnalytics = asyncHandler(async (req, res) => {
    const data = await analyticsService.getSubscriptionAnalytics();
    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(HTTP_STATUS.OK, data, 'Subscription analytics retrieved successfully')
    );
});

export const analyticsController = {
    getRevenueAnalytics,
    getSignupsByCategory,
    getSubscriptionAnalytics,
};
```

## src/controllers/astrology.controller.js
```javascript
/**
 * Astrology Controller
 * API endpoints for astrology/kundli matching
 */

import {
    getCompatibility,
    getNakshatras,
    getRashis,
} from '../services/astrology.service.js';
import { logger } from '../config/logger.js';
import { cacheHelper } from '../utils/cache.helper.js';

/**
 * GET /api/v1/astrology/nakshatras
 * Get list of all nakshatras for selection
 */
export const getNakshatraList = async (req, res) => {
    try {
        const nakshatras = getNakshatras();

        return res.status(200).json({
            success: true,
            data: nakshatras.map((name, index) => ({ id: index, name })),
        });
    } catch (error) {
        logger.error('Error getting nakshatras:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get nakshatras',
        });
    }
};

/**
 * GET /api/v1/astrology/rashis
 * Get list of all rashis for selection
 */
export const getRashiList = async (req, res) => {
    try {
        const rashis = getRashis();

        return res.status(200).json({
            success: true,
            data: rashis.map((name, index) => ({ id: index, name })),
        });
    } catch (error) {
        logger.error('Error getting rashis:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get rashis',
        });
    }
};

/**
 * GET /api/v1/astrology/match/:targetUserId
 * Get astrology compatibility between current user and target user
 */
export const getMatch = async (req, res) => {
    try {
        const userId = req.user.id;
        const targetUserId = parseInt(req.params.targetUserId);

        if (!targetUserId || isNaN(targetUserId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid target user ID',
            });
        }

        const sortedIds = [userId, targetUserId].sort((a, b) => a - b);
        const cacheKey = `kundali:${sortedIds[0]}:${sortedIds[1]}`;

        const compatibility = await cacheHelper.getOrFetch(
            cacheKey,
            async () => await getCompatibility(userId, targetUserId),
            86400 // 24 hours
        );

        return res.status(200).json({
            success: true,
            data: compatibility,
        });
    } catch (error) {
        logger.error('Error getting astrology match:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get astrology match',
        });
    }
};

export default {
    getNakshatraList,
    getRashiList,
    getMatch,
};
```

## src/controllers/auth.controller.js
```javascript
import authService from '../services/auth.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

class AuthController {



  refreshToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;

    const result = await authService.refreshAccessToken(refreshToken, req.ip);

    const data = {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m',
    };

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, data, 'Token refreshed successfully'));
  });

  logout = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;
    const userId = req.user.id;

    await authService.logout(userId, refreshToken);

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, null, 'Logged out successfully'));
  });

  /**
   * Phone Login (Firebase Auth)
   * POST /auth/phone/login
   */
  phoneLogin = asyncHandler(async (req, res) => {
    const { firebaseIdToken, deviceInfo, agentCode } = req.body;

    if (!firebaseIdToken) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Firebase ID token is required');
    }

    const result = await authService.loginWithPhone(
      firebaseIdToken,
      req.ip,
      deviceInfo || {},
      agentCode
    );

    const message = result.isNewUser ? 'Account created successfully' : 'Login successful';
    const data = {
      user: result.user,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m',
      isNewUser: result.isNewUser,
    };

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, data, message));
  });

  /**
   * Verify Firebase Phone Auth Token
   * POST /auth/phone/verify-firebase
   */
  verifyFirebasePhone = asyncHandler(async (req, res) => {
    const { firebaseIdToken } = req.body;
    const userId = req.user.id;

    if (!firebaseIdToken) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Firebase ID token is required');
    }

    const result = await authService.verifyFirebasePhone(userId, firebaseIdToken);

    return res.status(HTTP_STATUS.OK).json(new ApiResponse(HTTP_STATUS.OK, result, 'Phone verified successfully'));
  });
}

export default new AuthController();```

## src/controllers/block.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { blockService } from '../services/block.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Block a user
 */
export const blockUser = asyncHandler(async (req, res) => {
  const { blockedId, reason } = req.body;
  const blockEntry = await blockService.blockUser(
    req.user.id,
    blockedId,
    reason
  );
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        blockEntry,
        'User blocked successfully'
      )
    );
});

/**
 * Get the current user's block list
 */
export const getMyBlockedList = asyncHandler(async (req, res) => {
  const result = await blockService.getMyBlockedList(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Blocked list retrieved successfully')
    );
});

/**
 * Unblock a user
 */
export const unblockUser = asyncHandler(async (req, res) => {
  const { blockedId } = req.params;
  await blockService.unblockUser(req.user.id, blockedId);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, null, 'User unblocked successfully')
    );
});

export const blockController = {
  blockUser,
  getMyBlockedList,
  unblockUser,
};```

## src/controllers/boost.controller.js
```javascript
/**
 * Profile Boost Controller
 * API endpoints for boost/spotlight/highlighter features
 */

import {
    activateBoost,
    getActiveBoost,
    getBoostPackages,
    getBoostedProfileIds,
} from '../services/profileBoost.service.js';
import { logger } from '../config/logger.js';

/**
 * GET /api/v1/boost/packages
 * Get all available boost packages
 */
export const getPackages = async (req, res) => {
    try {
        const packages = getBoostPackages();

        return res.status(200).json({
            success: true,
            data: packages,
        });
    } catch (error) {
        logger.error('Error getting boost packages:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get boost packages',
        });
    }
};

/**
 * GET /api/v1/boost/active
 * Get user's active boost status
 */
export const getActive = async (req, res) => {
    try {
        const userId = req.user.id;
        const activeBoost = await getActiveBoost(userId);

        return res.status(200).json({
            success: true,
            data: activeBoost,
            hasActiveBoost: !!activeBoost,
        });
    } catch (error) {
        logger.error('Error getting active boost:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get active boost',
        });
    }
};

/**
 * POST /api/v1/boost/activate
 * Activate a boost package
 * Body: { boostType: string, transactionId: string }
 */
export const activate = async (req, res) => {
    try {
        const userId = req.user.id;
        const { boostType, transactionId } = req.body;

        if (!boostType || !transactionId) {
            return res.status(400).json({
                success: false,
                message: 'boostType and transactionId are required',
            });
        }

        const result = await activateBoost(userId, boostType, transactionId);

        return res.status(200).json({
            success: true,
            message: 'Boost activated successfully',
            data: result,
        });
    } catch (error) {
        logger.error('Error activating boost:', error);
        return res.status(500).json({
            success: false,
            message: error.message || 'Failed to activate boost',
        });
    }
};

/**
 * GET /api/v1/boost/featured
 * Get currently boosted profiles (for discovery page)
 */
export const getFeaturedProfiles = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const boostedProfiles = await getBoostedProfileIds(limit);

        return res.status(200).json({
            success: true,
            data: boostedProfiles,
        });
    } catch (error) {
        logger.error('Error getting featured profiles:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get featured profiles',
        });
    }
};

/**
 * POST /api/v1/boost/order
 * Create Razorpay order for boost purchase
 * Body: { boostType: string }
 */
export const createBoostOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { boostType } = req.body;

        if (!boostType) {
            return res.status(400).json({
                success: false,
                message: 'boostType is required',
            });
        }

        // Import Razorpay and packages
        const { razorpayInstance, isRazorpayConfigured } = await import('../config/razorpay.js');
        const { BOOST_PACKAGES } = await import('../services/profileBoost.service.js');

        if (!isRazorpayConfigured()) {
            return res.status(503).json({
                success: false,
                message: 'Payment service not configured',
            });
        }

        // Lookup by key first, then by id for flexibility
        let boostPackage = BOOST_PACKAGES[boostType];
        if (!boostPackage && boostType) {
            // Try finding by id (lowercase)
            const lowerType = boostType.toLowerCase();
            boostPackage = Object.values(BOOST_PACKAGES).find(p => p.id === boostType || p.id === lowerType);
        }
        if (!boostPackage) {
            return res.status(400).json({
                success: false,
                message: 'Invalid boost package',
            });
        }

        // Create Razorpay order
        const order = await razorpayInstance.orders.create({
            amount: boostPackage.price * 100, // Convert to paise
            currency: 'INR',
            receipt: `boost_${userId}_${Date.now()}`,
            notes: {
                userId: userId.toString(),
                boostType,
                type: 'BOOST',
            },
        });

        // Get Razorpay key for frontend
        const { config } = await import('../config/config.js');

        return res.status(200).json({
            success: true,
            data: {
                orderId: order.id,
                amount: order.amount,
                currency: order.currency,
                razorpayKey: config.RAZORPAY_KEY_ID,
                boostPackage,
            },
        });
    } catch (error) {
        logger.error('Error creating boost order:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create order',
        });
    }
};

/**
 * POST /api/v1/boost/verify
 * Verify Razorpay payment and activate boost
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature, boostType }
 */
export const verifyBoostPayment = async (req, res) => {
    try {
        const userId = req.user.id;
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, boostType } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !boostType) {
            return res.status(400).json({
                success: false,
                message: 'Missing required payment verification fields',
            });
        }

        // Verify signature
        const { config } = await import('../config/config.js');
        const crypto = await import('crypto');

        const generatedSignature = crypto
            .createHmac('sha256', config.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        if (generatedSignature !== razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: 'Invalid payment signature',
            });
        }

        // Activate boost
        const result = await activateBoost(userId, boostType, razorpay_payment_id);

        logger.info(`Boost payment verified and activated for user ${userId}: ${boostType}`);

        return res.status(200).json({
            success: true,
            message: 'Boost activated successfully!',
            data: result,
        });
    } catch (error) {
        logger.error('Error verifying boost payment:', error);
        return res.status(500).json({
            success: false,
            message: error.message || 'Failed to verify payment',
        });
    }
};

export default {
    getPackages,
    getActive,
    activate,
    getFeaturedProfiles,
    createBoostOrder,
    verifyBoostPayment,
};
```

## src/controllers/contact.controller.js
```javascript
import * as contactService from '../services/contact.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

/**
 * Handle contact form submission
 */
export const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name, email and message',
        });
    }

    const contactMessage = await contactService.createContactMessage({
        name,
        email,
        phone,
        subject,
        message,
    });

    res.status(201).json({
        success: true,
        message: 'Message sent successfully! We will get back to you soon.',
        data: contactMessage,
    });
});

/**
 * Handle getting all contact messages (Admin)
 */
export const getContactMessages = asyncHandler(async (req, res) => {
    const { page, limit, status } = req.query;

    const result = await contactService.getAllContactMessages({
        page,
        limit,
        status,
    });

    res.status(200).json({
        success: true,
        data: result.messages,
        pagination: result.pagination,
    });
});

/**
 * Handle updating message status (Admin)
 */
export const updateStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({
            success: false,
            message: 'Status is required',
        });
    }

    const updatedMessage = await contactService.updateMessageStatus(id, status);

    res.status(200).json({
        success: true,
        message: 'Message status updated successfully',
        data: updatedMessage,
    });
});

/**
 * Handle getting single message (Admin)
 */
export const getSingleMessage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const message = await contactService.getMessageById(id);

    if (!message) {
        return res.status(404).json({
            success: false,
            message: 'Message not found',
        });
    }

    res.status(200).json({
        success: true,
        data: message,
    });
});

/**
 * Handle deleting message (Admin)
 */
export const deleteContactMessage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await contactService.deleteMessage(id);

    res.status(200).json({
        success: true,
        message: 'Message deleted successfully',
    });
});
```

## src/controllers/contactRequest.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { contactRequestService } from '../services/contactRequest.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Create a new contact request
 */
export const createContactRequest = asyncHandler(async (req, res) => {
  const request = await contactRequestService.createContactRequest(req.user.id, req.body);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        request,
        'Contact request sent successfully'
      )
    );
});

/**
 * Get all contact requests sent by the logged-in user
 */
export const getSentRequests = asyncHandler(async (req, res) => {
  const result = await contactRequestService.getSentRequests(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Sent requests retrieved successfully')
    );
});

/**
 * Get all contact requests received by the logged-in user
 */
export const getReceivedRequests = asyncHandler(async (req, res) => {
  const result = await contactRequestService.getReceivedRequests(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Received requests retrieved successfully')
    );
});

/**
 * Respond to a received contact request
 */
export const respondToRequest = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  
  const updatedRequest = await contactRequestService.respondToRequest(
    req.user.id,
    id,
    status
  );
  
  const message = status === 'APPROVED' ? 'Request approved' : 'Request rejected';
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedRequest, message));
});


export const contactRequestController = {
  createContactRequest,
  getSentRequests,
  getReceivedRequests,
  respondToRequest,
};```

## src/controllers/diagnostics.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import prisma from '../config/database.js';
import { isRedisConnected, getRedisClient } from '../config/redis.js';
import { isR2Configured, r2Client, getBucketName } from '../config/r2.js';
import { getFirebaseApp } from '../config/firebase.js';
import { isRazorpayConfigured, razorpayInstance } from '../config/razorpay.js';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { logger } from '../config/logger.js';
import fs from 'fs';
import path from 'path';

/**
 * Perform a deep system diagnostic check on all connections and environment variables.
 */
export const runDiagnostics = asyncHandler(async (req, res) => {
    const results = {
        env: { status: 'pending', details: {} },
        database: { status: 'pending', latency: null },
        redis: { status: 'pending' },
        storage: { status: 'pending', provider: 'Cloudflare R2' },
        firebase: { status: 'pending' },
        razorpay: { status: 'pending' },
        system: {
            platform: process.platform,
            nodeVersion: process.version,
            memoryUsage: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
            uptime: `${Math.floor(process.uptime())}s`
        }
    };

    // 1. Environment Variable Check (compare with .env.example)
    try {
        const examplePath = path.resolve(process.cwd(), '.env.example');
        if (fs.existsSync(examplePath)) {
            const exampleContent = fs.readFileSync(examplePath, 'utf8');
            const requiredVars = exampleContent
                .split('\n')
                .filter(line => line.includes('=') && !line.startsWith('#'))
                .map(line => line.split('=')[0].trim());

            const missingVars = requiredVars.filter(v => !process.env[v]);
            results.env.status = missingVars.length === 0 ? '✅ Success' : '⚠️ Partial';
            results.env.details = {
                totalRequired: requiredVars.length,
                missing: missingVars,
                configured: requiredVars.length - missingVars.length
            };
        } else {
            results.env.status = '❓ .env.example not found';
        }
    } catch (err) {
        results.env.status = '❌ Error';
        results.env.error = err.message;
    }

    // 2. Database Connection Test
    try {
        const start = Date.now();
        await prisma.$queryRaw`SELECT 1`;
        results.database.latency = `${Date.now() - start}ms`;
        results.database.status = '✅ Connected';
    } catch (err) {
        results.database.status = '❌ Failed';
        results.database.error = err.message;
    }

    // 3. Redis Connection Test
    try {
        if (isRedisConnected()) {
            const client = getRedisClient();
            await client.ping();
            results.redis.status = '✅ Connected';
        } else {
            results.redis.status = '⚠️ Not Connected';
        }
    } catch (err) {
        results.redis.status = '❌ Failed';
        results.redis.error = err.message;
    }

    // 4. Cloudflare R2 Connection Test
    try {
        if (isR2Configured()) {
            const command = new ListObjectsV2Command({
                Bucket: getBucketName(),
                MaxKeys: 1
            });
            await r2Client.send(command);
            results.storage.status = '✅ Connected & Bucket Accessible';
        } else {
            results.storage.status = '⚠️ Not Configured';
        }
    } catch (err) {
        results.storage.status = '❌ Connection Failed';
        results.storage.error = err.message;
    }

    // 5. Firebase Admin SDK Test
    try {
        const app = getFirebaseApp();
        if (app) {
            results.firebase.status = '✅ Initialized';
            results.firebase.projectName = app.options.credential?.projectId || 'Configured';
        } else {
            results.firebase.status = '⚠️ Not Configured';
        }
    } catch (err) {
        results.firebase.status = '❌ Initialization Failed';
        results.firebase.error = err.message;
    }

    // 6. Razorpay Test
    try {
        if (isRazorpayConfigured()) {
            // Fetching plans is a good way to verify keys without creating data
            await razorpayInstance.plans.all({ count: 1 });
            results.razorpay.status = '✅ Connected & Keys Verified';
        } else {
            results.razorpay.status = '⚠️ Not Configured';
        }
    } catch (err) {
        results.razorpay.status = '❌ Key Verification Failed';
        results.razorpay.error = err.message;
    }

    logger.info('System diagnostics completed');

    res.status(200).json(
        new ApiResponse(200, results, 'System diagnostics completed successfully')
    );
});
```

## src/controllers/education.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { educationService } from '../services/education.service.js';
// FIX: Removed SUCCESS_MESSAGES as it was not used
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Create new education entry
 */
export const createEducation = asyncHandler(async (req, res) => {
  const education = await educationService.createEducation(req.user.id, req.body);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(HTTP_STATUS.CREATED, education, 'Education added successfully')
    );
});

/**
 * Get all education entries for the logged-in user
 */
export const getMyEducation = asyncHandler(async (req, res) => {
  const educationList = await educationService.getMyEducation(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        educationList,
        'Education retrieved successfully'
      )
    );
});

/**
 * Update an education entry
 */
export const updateEducation = asyncHandler(async (req, res) => {
  // Convert id to integer (route params are always strings)
  const educationId = parseInt(req.params.id, 10);
  const updatedEducation = await educationService.updateEducation(
    req.user.id,
    educationId,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        updatedEducation,
        'Education updated successfully'
      )
    );
});

/**
 * Delete an education entry
 */
export const deleteEducation = asyncHandler(async (req, res) => {
  // Convert id to integer (route params are always strings)
  const educationId = parseInt(req.params.id, 10);
  await educationService.deleteEducation(req.user.id, educationId);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, null, 'Education deleted successfully')
    );
});

export const educationController = {
  createEducation,
  getMyEducation,
  updateEducation,
  deleteEducation,
};```

## src/controllers/horoscope.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { horoscopeService } from '../services/horoscope.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get horoscope compatibility with another profile
 */
export const getHoroscopeMatch = asyncHandler(async (req, res) => {
    const result = await horoscopeService.getHoroscopeMatch(
        req.user.id,
        parseInt(req.params.profileId)
    );
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(
                HTTP_STATUS.OK,
                result,
                'Horoscope compatibility calculated'
            )
        );
});

/**
 * Calculate Guna Milan between two profiles (Admin or direct comparison)
 */
export const calculateGunaScore = asyncHandler(async (req, res) => {
    const { profileId1, profileId2 } = req.body;
    const result = await horoscopeService.calculateGunaScore(profileId1, profileId2);
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(
                HTTP_STATUS.OK,
                result,
                'Guna Milan score calculated'
            )
        );
});

export const horoscopeController = {
    getHoroscopeMatch,
    calculateGunaScore,
};
```

## src/controllers/match.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { matchService } from '../services/match.service.js';
import { HTTP_STATUS, SUCCESS_MESSAGES } from '../utils/constants.js';

/**
 * Send match request
 */
export const sendMatchRequest = asyncHandler(async (req, res) => {
  // req.body.receiverId is now validated by Zod
  const { receiverId, message } = req.body;
  const match = await matchService.sendMatchRequest(req.user.id, receiverId, message);

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(HTTP_STATUS.CREATED, match, SUCCESS_MESSAGES.MATCH_SENT)
    );
});

/**
 * Accept match request
 */
export const acceptMatchRequest = asyncHandler(async (req, res) => {
  // Convert matchId to integer (route params are always strings)
  const matchId = parseInt(req.params.matchId, 10);
  const match = await matchService.acceptMatchRequest(
    matchId,
    req.user.id
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, match, SUCCESS_MESSAGES.MATCH_ACCEPTED)
    );
});

/**
 * Reject match request
 */
export const rejectMatchRequest = asyncHandler(async (req, res) => {
  // Convert matchId to integer (route params are always strings)
  const matchId = parseInt(req.params.matchId, 10);
  const match = await matchService.rejectMatchRequest(
    matchId,
    req.user.id
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, match, SUCCESS_MESSAGES.MATCH_REJECTED)
    );
});

/**
 * Get sent match requests
 */
export const getSentMatchRequests = asyncHandler(async (req, res) => {
  // req.query is now validated by Zod
  const result = await matchService.getSentMatchRequests(req.user.id, req.query);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        result,
        'Sent match requests retrieved successfully'
      )
    );
});

/**
 * Get received match requests
 */
export const getReceivedMatchRequests = asyncHandler(async (req, res) => {
  // req.query is now validated by Zod
  const result = await matchService.getReceivedMatchRequests(req.user.id, req.query);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        result,
        'Received match requests retrieved successfully'
      )
    );
});

/**
 * Get accepted matches
 */
export const getAcceptedMatches = asyncHandler(async (req, res) => {
  // req.query is now validated by Zod
  const result = await matchService.getAcceptedMatches(req.user.id, req.query);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        result,
        'Accepted matches retrieved successfully'
      )
    );
});

/**
 * Delete match
 */
export const deleteMatch = asyncHandler(async (req, res) => {
  // Convert matchId to integer (route params are always strings)
  const matchId = parseInt(req.params.matchId, 10);
  await matchService.deleteMatch(matchId, req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Match deleted successfully'));
});

export const matchController = {
  sendMatchRequest,
  acceptMatchRequest,
  rejectMatchRequest,
  getSentMatchRequests,
  getReceivedMatchRequests,
  getAcceptedMatches,
  deleteMatch,
};```

## src/controllers/message.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { messageService } from '../services/message.service.js';
// FIX: Import SOCKET_EVENTS here
import {
  HTTP_STATUS,
  SUCCESS_MESSAGES,
  SOCKET_EVENTS,
} from '../utils/constants.js';
import { getSocketIoInstance } from '../socket/index.js';

/**
 * Send message
 */
export const sendMessage = asyncHandler(async (req, res) => {
  const { receiverId, content, contentType = 'TEXT' } = req.body; // NEW: contentType param

  // The service now returns a message with a "safe" user object
  const message = await messageService.sendMessage(
    req.user.id,
    receiverId,
    content,
    contentType // NEW: pass contentType
  );

  // Emit to receiver via socket
  const io = getSocketIoInstance();
  if (io) {
    io.to(`user:${receiverId}`).emit(SOCKET_EVENTS.MESSAGE_RECEIVED, message);
  }

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(HTTP_STATUS.CREATED, message, SUCCESS_MESSAGES.MESSAGE_SENT)
    );
});

/**
 * Get conversation with a user
 */
export const getConversation = asyncHandler(async (req, res) => {
  // Convert userId to integer (route params are always strings)
  const otherUserId = parseInt(req.params.userId, 10);
  const result = await messageService.getConversation(
    req.user.id,
    otherUserId,
    req.query
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Conversation retrieved successfully')
    );
});

/**
 * Get all conversations
 */
export const getAllConversations = asyncHandler(async (req, res) => {
  const conversations = await messageService.getAllConversations(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        conversations,
        'Conversations retrieved successfully'
      )
    );
});

/**
 * Mark messages as read
 */
export const markMessagesAsRead = asyncHandler(async (req, res) => {
  // Convert userId to integer (route params are always strings)
  const otherUserId = parseInt(req.params.userId, 10);

  const result = await messageService.markMessagesAsRead(req.user.id, otherUserId);

  // Emit to other user that their messages were read
  const io = getSocketIoInstance();
  if (io) {
    // This line now works
    io.to(`user:${otherUserId}`).emit(SOCKET_EVENTS.MESSAGE_READ, {
      byUser: req.user.id,
    });
  }

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Messages marked as read'));
});

/**
 * Delete message
 */
export const deleteMessage = asyncHandler(async (req, res) => {
  // Convert messageId to integer (route params are always strings)
  const messageId = parseInt(req.params.messageId, 10);
  await messageService.deleteMessage(messageId, req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Message deleted successfully'));
});

/**
 * Get unread message count
 */
export const getUnreadCount = asyncHandler(async (req, res) => {
  const count = await messageService.getUnreadCount(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, { count }, 'Unread count retrieved successfully')
    );
});

export const messageController = {
  sendMessage,
  getConversation,
  getAllConversations,
  markMessagesAsRead,
  deleteMessage,
  getUnreadCount,
};```

## src/controllers/notification.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { notificationService } from '../services/notification.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get my notifications
 */
export const getMyNotifications = asyncHandler(async (req, res) => {
  // req.query is validated
  const result = await notificationService.getUserNotifications(req.user.id, req.query);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Notifications retrieved successfully')
    );
});

/**
 * Mark notification as read
 */
export const markAsRead = asyncHandler(async (req, res) => {
  // Convert notificationId to integer (route params are always strings)
  const notificationId = parseInt(req.params.notificationId, 10);
  const notification = await notificationService.markAsRead(
    notificationId,
    req.user.id
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, notification, 'Notification marked as read')
    );
});

/**
 * Mark all notifications as read
 */
export const markAllAsRead = asyncHandler(async (req, res) => {
  const result = await notificationService.markAllAsRead(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'All notifications marked as read')
    );
});

/**
 * Get unread notification count
 */
export const getUnreadCount = asyncHandler(async (req, res) => {
  const count = await notificationService.getUnreadCount(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, { count }, 'Unread count retrieved successfully')
    );
});

/**
 * Delete notification
 */
export const deleteNotification = asyncHandler(async (req, res) => {
  // Convert notificationId to integer (route params are always strings)
  const notificationId = parseInt(req.params.notificationId, 10);
  await notificationService.deleteNotification(
    notificationId,
    req.user.id
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, null, 'Notification deleted successfully')
    );
});

/**
 * Delete all notifications
 */
export const deleteAllNotifications = asyncHandler(async (req, res) => {
  const result = await notificationService.deleteAllNotifications(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'All notifications deleted')
    );
});

/**
 * Register device for push notifications
 */
export const registerDevice = asyncHandler(async (req, res) => {
  const { token, deviceId, deviceType } = req.body;

  if (!token || !deviceId || !deviceType) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Missing required fields');
  }

  const result = await notificationService.registerDevice(
    req.user.id,
    token,
    deviceId,
    deviceType
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Device registered successfully')
    );
});

/**
 * Unregister device (e.g. on logout)
 */
export const unregisterDevice = asyncHandler(async (req, res) => {
  const { token } = req.params;

  if (!token) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Token is required');
  }

  // Decode token if it was doubly encoded (sometimes happens with slashes)
  const decodedToken = decodeURIComponent(token);

  await notificationService.unregisterDevice(req.user.id, decodedToken);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, null, 'Device unregistered successfully')
    );
});

export const notificationController = {
  getMyNotifications,
  markAsRead,
  markAllAsRead,
  getUnreadCount,
  deleteNotification,
  deleteAllNotifications,
  registerDevice,
  unregisterDevice, // Export new method
};```

## src/controllers/notificationSettings.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { notificationSettingsService } from '../services/notificationSettings.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get the logged-in user's notification preferences
 */
export const getMyNotificationSettings = asyncHandler(async (req, res) => {
  const settings = await notificationSettingsService.getNotificationPreferences(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Notification preferences retrieved successfully'
      )
    );
});

/**
 * Create or update the logged-in user's notification preferences
 */
export const updateMyNotificationSettings = asyncHandler(async (req, res) => {
  const settings = await notificationSettingsService.updateNotificationPreferences(
    req.user.id,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Notification preferences updated successfully'
      )
    );
});

export const notificationSettingsController = {
  getMyNotificationSettings,
  updateMyNotificationSettings,
};```

## src/controllers/occupation.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { occupationService } from '../services/occupation.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Create new occupation entry
 */
export const createOccupation = asyncHandler(async (req, res) => {
  const occupation = await occupationService.createOccupation(req.user.id, req.body);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(HTTP_STATUS.CREATED, occupation, 'Occupation added successfully')
    );
});

/**
 * Get all occupation entries for the logged-in user
 */
export const getMyOccupations = asyncHandler(async (req, res) => {
  const occupationList = await occupationService.getMyOccupations(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        occupationList,
        'Occupations retrieved successfully'
      )
    );
});

/**
 * Update an occupation entry
 */
export const updateOccupation = asyncHandler(async (req, res) => {
  // Convert id to integer (route params are always strings)
  const occupationId = parseInt(req.params.id, 10);
  const updatedOccupation = await occupationService.updateOccupation(
    req.user.id,
    occupationId,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        updatedOccupation,
        'Occupation updated successfully'
      )
    );
});

/**
 * Delete an occupation entry
 */
export const deleteOccupation = asyncHandler(async (req, res) => {
  // Convert id to integer (route params are always strings)
  const occupationId = parseInt(req.params.id, 10);
  await occupationService.deleteOccupation(req.user.id, occupationId);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, null, 'Occupation deleted successfully')
    );
});

export const occupationController = {
  createOccupation,
  getMyOccupations,
  updateOccupation,
  deleteOccupation,
};```

## src/controllers/partnerPreference.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { partnerPreferenceService } from '../services/partnerPreference.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get the logged-in user's partner preferences
 */
export const getMyPreference = asyncHandler(async (req, res) => {
  const preference = await partnerPreferenceService.getMyPreference(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        preference,
        'Partner preferences retrieved successfully'
      )
    );
});

/**
 * Create or update the logged-in user's partner preferences
 */
export const upsertMyPreference = asyncHandler(async (req, res) => {
  const preference = await partnerPreferenceService.upsertMyPreference(
    req.user.id,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        preference,
        'Partner preferences updated successfully'
      )
    );
});

export const partnerPreferenceController = {
  getMyPreference,
  upsertMyPreference,
};```

## src/controllers/payment.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { paymentService } from '../services/payment.service.js';
import { HTTP_STATUS, SUCCESS_MESSAGES } from '../utils/constants.js';

/**
 * Create payment order
 */
export const createOrder = asyncHandler(async (req, res) => {
  const { planId } = req.body; // Securely get planId

  // The service now handles fetching the amount and creating the subscription
  const order = await paymentService.createOrder(req.user.id, planId);

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        order,
        'Payment order created successfully'
      )
    );
});

/**
 * Verify payment
 */
export const verifyPayment = asyncHandler(async (req, res) => {
  // req.body is pre-validated by Zod
  const result = await paymentService.verifyPayment(req.body);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, SUCCESS_MESSAGES.PAYMENT_SUCCESS)
    );
});

/**
 * Handle Razorpay webhook
 */
export const handleWebhook = asyncHandler(async (req, res) => {
  const signature = req.headers['x-razorpay-signature'];

  await paymentService.handleWebhook(req.body, signature);

  // Respond to Razorpay immediately
  res.status(HTTP_STATUS.OK).json({ status: 'ok' });
});

/**
 * Get payment by ID
 */
export const getPaymentById = asyncHandler(async (req, res) => {
  // Convert paymentId to integer (route params are always strings)
  const paymentId = parseInt(req.params.paymentId, 10);
  const payment = await paymentService.getPaymentById(paymentId);

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, payment, 'Payment retrieved successfully'));
});

/**
 * Get my payments
 */
export const getMyPayments = asyncHandler(async (req, res) => {
  const payments = await paymentService.getUserPayments(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, payments, 'Payments retrieved successfully'));
});

/**
 * Create upgrade order (for existing subscribers to upgrade their plan)
 * Credits remaining days from current subscription + adds new plan duration
 */
export const createUpgradeOrder = asyncHandler(async (req, res) => {
  const { planId } = req.body;

  const order = await paymentService.createUpgradeOrder(req.user.id, planId);

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        order,
        `Upgrade order created. ${order.remainingDaysCredited} days carried forward. New subscription: ${order.totalDays} days.`
      )
    );
});

export const paymentController = {
  createOrder,
  createUpgradeOrder,
  verifyPayment,
  handleWebhook,
  getPaymentById,
  getMyPayments,
};```

## src/controllers/photoPrivacy.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { photoPrivacyService } from '../services/photoPrivacy.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get the privacy settings for a specific photo
 */
export const getMyPhotoSettings = asyncHandler(async (req, res) => {
  const settings = await photoPrivacyService.getPhotoPrivacySettings(
    req.user.id,
    req.params.mediaId
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Photo privacy settings retrieved'
      )
    );
});

/**
 * Update the privacy settings for a specific photo
 */
export const updateMyPhotoSettings = asyncHandler(async (req, res) => {
  const settings = await photoPrivacyService.updatePhotoPrivacySettings(
    req.user.id,
    req.params.mediaId,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Photo privacy settings updated'
      )
    );
});

export const photoPrivacyController = {
  getMyPhotoSettings,
  updateMyPhotoSettings,
};```

## src/controllers/photoRequest.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { photoRequestService } from '../services/photoRequest.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Create a new photo view request
 */
export const createPhotoRequest = asyncHandler(async (req, res) => {
  const request = await photoRequestService.createPhotoRequest(req.user.id, req.body);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        request,
        'Photo view request sent successfully'
      )
    );
});

/**
 * Get all photo view requests sent by the logged-in user
 */
export const getSentRequests = asyncHandler(async (req, res) => {
  const result = await photoRequestService.getSentRequests(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Sent requests retrieved successfully')
    );
});

/**
 * Get all photo view requests received by the logged-in user
 */
export const getReceivedRequests = asyncHandler(async (req, res) => {
  const result = await photoRequestService.getReceivedRequests(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Received requests retrieved successfully')
    );
});

/**
 * Respond to a received photo view request
 */
export const respondToRequest = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  
  const updatedRequest = await photoRequestService.respondToRequest(
    req.user.id,
    id,
    status
  );
  
  const message = status === 'APPROVED' ? 'Request approved' : 'Request rejected';
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, updatedRequest, message));
});


export const photoRequestController = {
  createPhotoRequest,
  getSentRequests,
  getReceivedRequests,
  respondToRequest,
};```

## src/controllers/privacy.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { privacyService } from '../services/privacy.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

// --- ProfilePrivacy ---
export const getMyProfilePrivacy = asyncHandler(async (req, res) => {
  const settings = await privacyService.getProfilePrivacy(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Profile privacy settings retrieved successfully'
      )
    );
});
export const updateMyProfilePrivacy = asyncHandler(async (req, res) => {
  const settings = await privacyService.updateProfilePrivacy(
    req.user.id,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Profile privacy settings updated successfully'
      )
    );
});

// --- CommunicationPreferences ---
export const getMyCommunicationSettings = asyncHandler(async (req, res) => {
  const settings = await privacyService.getCommunicationPreferences(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Communication preferences retrieved successfully'
      )
    );
});
export const updateMyCommunicationSettings = asyncHandler(async (req, res) => {
  const settings = await privacyService.updateCommunicationPreferences(
    req.user.id,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Communication preferences updated successfully'
      )
    );
});

// --- SearchVisibility ---
export const getMySearchVisibilitySettings = asyncHandler(async (req, res) => {
  const settings = await privacyService.getSearchVisibilitySettings(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Search visibility settings retrieved successfully'
      )
    );
});
export const updateMySearchVisibilitySettings = asyncHandler(async (req, res) => {
  const settings = await privacyService.updateSearchVisibilitySettings(
    req.user.id,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Search visibility settings updated successfully'
      )
    );
});

// --- AccountSecurity [NEW] ---

/**
 * [NEW] Get the logged-in user's account security settings
 */
export const getMyAccountSecuritySettings = asyncHandler(async (req, res) => {
  const settings = await privacyService.getAccountSecuritySettings(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Account security settings retrieved successfully'
      )
    );
});

/**
 * [NEW] Create or update the logged-in user's account security settings
 */
export const updateMyAccountSecuritySettings = asyncHandler(async (req, res) => {
  const settings = await privacyService.updateAccountSecuritySettings(
    req.user.id,
    req.body
  );
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        settings,
        'Account security settings updated successfully'
      )
    );
});


export const privacyController = {
  getMyProfilePrivacy,
  updateMyProfilePrivacy,
  getMyCommunicationSettings,
  updateMyCommunicationSettings,
  getMySearchVisibilitySettings,
  updateMySearchVisibilitySettings,
  getMyAccountSecuritySettings,     // ADDED
  updateMyAccountSecuritySettings,  // ADDED
};```

## src/controllers/profile.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { profileService } from '../services/profile.service.js';
import matchingAlgorithmService from '../services/matchingAlgorithm.service.js';
import { HTTP_STATUS, SUCCESS_MESSAGES } from '../utils/constants.js';
import { cacheHelper } from '../utils/cache.helper.js';

/**
 * Create profile
 */
export const createProfile = asyncHandler(async (req, res) => {
  const profile = await profileService.createProfile(req.user.id, req.body);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        profile,
        SUCCESS_MESSAGES.PROFILE_CREATED
      )
    );
});

/**
 * Get my profile
 */
export const getMyProfile = asyncHandler(async (req, res) => {
  const profile = await profileService.getProfileByUserId(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, profile, 'Profile retrieved successfully'));
});

/**
 * Get profile by user ID
 */
export const getProfileByUserId = asyncHandler(async (req, res) => {
  // Convert userId to integer (route params are always strings)
  const userId = parseInt(req.params.userId, 10);
  const profile = await cacheHelper.getOrFetch(
    `profile:userId:${userId}`,
    async () => await profileService.getProfileByUserId(userId, req.user?.id),
    3600 // 1 hour
  );
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, profile, 'Profile retrieved successfully'));
});

/**
 * Update my profile
 */
export const updateMyProfile = asyncHandler(async (req, res) => {
  // req.body is now pre-validated and safe
  const profile = await profileService.updateProfile(req.user.id, req.body);

  // Invalidate cache
  await cacheHelper.del(`profile:userId:${req.user.id}`);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, profile, SUCCESS_MESSAGES.PROFILE_UPDATED)
    );
});

/**
 * Delete my profile
 */
export const deleteMyProfile = asyncHandler(async (req, res) => {
  await profileService.deleteProfile(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Profile deleted successfully'));
});

/**
 * Search profiles
 */
export const searchProfiles = asyncHandler(async (req, res) => {
  // FIX: Pass req.user.id to the service so it can filter blocked users
  const result = await profileService.searchProfiles(req.query, req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Profiles retrieved successfully'));
});

/**
 * Delete a photo
 */
export const deletePhoto = asyncHandler(async (req, res) => {
  // Convert mediaId to integer (route params are always strings)
  const mediaId = parseInt(req.params.mediaId, 10);
  await profileService.deletePhoto(req.user.id, mediaId);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Photo deleted successfully'));
});

/**
 * Get Recommendations (Algorithm)
 */
export const getRecommendations = asyncHandler(async (req, res) => {
  const profiles = await cacheHelper.getOrFetch(
    `recommendations:${req.user.id}`,
    async () => {
      const recommendations = await matchingAlgorithmService.getDailyRecommendations(req.user.id, 20);

      return recommendations.map(rec => ({
        ...rec.profile,
        matchScore: rec.score,
        matchLabel: rec.compatibility,
        isSuperMatch: rec.isSuperMatch
      }));
    },
    21600 // 6 hours
  );

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(HTTP_STATUS.OK, {
      profiles,
      pagination: {
        total: profiles.length,
        pages: 1,
        current: 1,
        limit: 20
      }
    }, 'Recommendations retrieved successfully')
  );
});


export const profileController = {
  createProfile,
  getMyProfile,
  getProfileByUserId,
  updateMyProfile,
  deleteMyProfile,
  searchProfiles,
  searchProfiles,
  deletePhoto,
  getRecommendations,
};```

## src/controllers/profileCompletion.controller.js
```javascript
/**
 * Profile Completion Controller
 * API endpoints for profile completion tracking
 */

import { getProfileCompletionForUser, getCompletionBadge } from '../services/profileCompletion.service.js';
import { logger } from '../config/logger.js';

/**
 * GET /api/v1/profile/completion
 * Get profile completion percentage and tips
 */
export const getProfileCompletion = async (req, res) => {
    try {
        const userId = req.user.id;

        const completion = await getProfileCompletionForUser(userId);
        const badge = getCompletionBadge(completion.percentage);

        return res.status(200).json({
            success: true,
            data: {
                ...completion,
                badge,
            },
        });
    } catch (error) {
        logger.error('Error getting profile completion:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get profile completion',
        });
    }
};

export default {
    getProfileCompletion,
};
```

## src/controllers/profileView.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { profileViewService } from '../services/profileView.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Log that the current user viewed another profile
 */
export const logProfileView = asyncHandler(async (req, res) => {
  const { profileId, isAnonymous } = req.body;
  const result = await profileViewService.logProfileView(
    req.user.id,
    profileId,
    isAnonymous
  );
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        result,
        'Profile view logged successfully'
      )
    );
});

/**
 * Get the list of users who viewed the current user's profile
 */
export const getWhoViewedMe = asyncHandler(async (req, res) => {
  const result = await profileViewService.getWhoViewedMe(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Profile views retrieved successfully')
    );
});

/**
 * Get the list of profiles the current user has viewed
 */
export const getMyViewHistory = asyncHandler(async (req, res) => {
  const result = await profileViewService.getMyViewHistory(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'View history retrieved successfully')
    );
});

export const profileViewController = {
  logProfileView,
  getWhoViewedMe,
  getMyViewHistory,
};```

## src/controllers/recommendations.controller.js
```javascript
/**
 * Matching Algorithm Controller
 * Endpoints for match recommendations
 */

import {
    calculateMatchScore,
    getDailyRecommendations,
    getSuperMatches,
} from '../services/matchingAlgorithm.service.js';
import { logger } from '../config/logger.js';

/**
 * GET /api/v1/recommendations
 * Get daily match recommendations
 */
export const getRecommendations = async (req, res) => {
    try {
        const userId = req.user.id;
        const limit = parseInt(req.query.limit) || 10;

        const recommendations = await getDailyRecommendations(userId, limit);

        return res.status(200).json({
            success: true,
            data: recommendations,
            count: recommendations.length,
        });
    } catch (error) {
        logger.error('Error getting recommendations:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get recommendations',
        });
    }
};

/**
 * GET /api/v1/recommendations/super-matches
 * Get super matches (85%+ compatibility)
 */
export const getSuperMatchesHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const limit = parseInt(req.query.limit) || 5;

        const superMatches = await getSuperMatches(userId, limit);

        return res.status(200).json({
            success: true,
            data: superMatches,
            count: superMatches.length,
        });
    } catch (error) {
        logger.error('Error getting super matches:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get super matches',
        });
    }
};

/**
 * GET /api/v1/recommendations/score/:userId
 * Get match score with a specific user
 */
export const getMatchScore = async (req, res) => {
    try {
        const userId = req.user.id;
        const targetUserId = parseInt(req.params.userId);

        if (!targetUserId || isNaN(targetUserId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid user ID',
            });
        }

        const matchResult = await calculateMatchScore(userId, targetUserId);

        return res.status(200).json({
            success: true,
            data: matchResult,
        });
    } catch (error) {
        logger.error('Error getting match score:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to get match score',
        });
    }
};

export default {
    getRecommendations,
    getSuperMatchesHandler,
    getMatchScore,
};
```

## src/controllers/report.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { reportService } from '../services/report.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Create a new report
 */
export const createReport = asyncHandler(async (req, res) => {
  const report = await reportService.createReport(req.user.id, req.body);
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        report,
        'Report submitted successfully. Our team will review it shortly.'
      )
    );
});

export const reportController = {
  createReport,
};```

## src/controllers/shortlist.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { shortlistService } from '../services/shortlist.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Add a user to the current user's shortlist
 */
export const addToShortlist = asyncHandler(async (req, res) => {
  const { shortlistedUserId, note } = req.body;
  const shortlistEntry = await shortlistService.addToShortlist(
    req.user.id,
    shortlistedUserId,
    note
  );
  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        shortlistEntry,
        'User added to shortlist'
      )
    );
});

/**
 * Get the current user's complete shortlist
 */
export const getMyShortlist = asyncHandler(async (req, res) => {
  const result = await shortlistService.getMyShortlist(req.user.id, req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Shortlist retrieved successfully')
    );
});

/**
 * Remove a user from the current user's shortlist
 */
export const removeFromShortlist = asyncHandler(async (req, res) => {
  const shortlistedUserId = parseInt(req.params.shortlistedUserId, 10);
  await shortlistService.removeFromShortlist(req.user.id, shortlistedUserId);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, null, 'User removed from shortlist')
    );
});

export const shortlistController = {
  addToShortlist,
  getMyShortlist,
  removeFromShortlist,
};```

## src/controllers/subscription.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { subscriptionService } from '../services/subscription.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get all active subscription plans
 */
export const getActivePlans = asyncHandler(async (req, res) => {
  const result = await subscriptionService.getActivePlans(req.query);
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        result,
        'Subscription plans retrieved successfully'
      )
    );
});

export const subscriptionController = {
  getActivePlans,
};```

## src/controllers/upload.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { uploadService } from '../services/upload.service.js';
import { profileService } from '../services/profile.service.js';
import { HTTP_STATUS, MEDIA_TYPES } from '../utils/constants.js'; // Ensure MEDIA_TYPES is in constants.js

/**
 * Upload single profile photo
 */
export const uploadProfilePhoto = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No file uploaded');
  }

  // 1. Process and upload image to R2 (public)
  const result = await uploadService.processAndUploadImage(
    req.file,
    `users/${req.user.id}/photos`
  );

  // 2. Create Media record in database
  const mediaData = {
    url: result.original.url,
    thumbnailUrl: result.thumbnail.url,
    key: result.original.key,
    thumbnailKey: result.thumbnail.key,
    fileName: result.original.filename,
    fileSize: result.original.size,
    mimeType: result.original.mimetype,
  };

  const media = await profileService.addPhoto(
    req.user.id,
    mediaData,
    MEDIA_TYPES.PROFILE_PHOTO
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, media, 'Profile photo uploaded successfully')
    );
});

/**
 * Upload multiple profile photos
 */
export const uploadProfilePhotos = asyncHandler(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No files uploaded');
  }

  const uploadPromises = req.files.map((file) =>
    uploadService.processAndUploadImage(
      file,
      `users/${req.user.id}/photos`
    )
  );

  const results = await Promise.all(uploadPromises);

  // Create Media records in database
  const addMediaPromises = results.map((result) => {
    const mediaData = {
      url: result.original.url,
      thumbnailUrl: result.thumbnail.url,
      key: result.original.key,
      thumbnailKey: result.thumbnail.key,
      fileName: result.original.filename,
      fileSize: result.original.size,
      mimeType: result.original.mimetype,
    };
    return profileService.addPhoto(
      req.user.id,
      mediaData,
      MEDIA_TYPES.GALLERY_PHOTO // Use GALLERY_PHOTO for non-default
    );
  });

  const mediaItems = await Promise.all(addMediaPromises);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        mediaItems,
        'Profile photos uploaded successfully'
      )
    );
});

/**
 * Upload ID proof
 */
export const uploadIdProof = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'No file uploaded');
  }

  // 1. Upload to R2 as PRIVATE
  const result = await uploadService.uploadToR2(
    req.file,
    `users/${req.user.id}/documents`,
    false // isPublic = false
  );

  // 2. Create Media record in database
  const mediaData = {
    url: null, // No public URL
    thumbnailUrl: null,
    key: result.key, // Store the private key
    thumbnailKey: null,
    fileName: result.filename,
    fileSize: result.size,
    mimeType: result.mimetype,
  };

  const media = await profileService.addPhoto(
    req.user.id,
    mediaData,
    MEDIA_TYPES.ID_PROOF
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        {
          message: 'ID proof uploaded successfully and is pending verification.',
          mediaId: media.id,
        },
        'ID proof uploaded successfully'
      )
    );
});

export const uploadController = {
  uploadProfilePhoto,
  uploadProfilePhotos,
  uploadIdProof,
};```

## src/controllers/user.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { userService } from '../services/user.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Get another user's public profile by ID
 */
export const getUserById = asyncHandler(async (req, res) => {
  // Convert id to integer (route params are always strings)
  const userId = parseInt(req.params.id, 10);
  const user = await userService.getPublicUserById(userId, req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'User retrieved successfully'));
});

/**
 * Get the currently authenticated user's full profile
 */
export const getMyProfile = asyncHandler(async (req, res) => {
  // This is for the user themselves, so no block check needed here.
  const user = await userService.getFullUserById(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'Profile retrieved successfully'));
});

/**
 * Update the current user's profile
 */
export const updateMe = asyncHandler(async (req, res) => {
  // req.body is now pre-validated by Zod, so it's safe to pass
  const user = await userService.updateUser(req.user.id, req.body);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, user, 'Profile updated successfully'));
});

/**
 * Delete (soft) the current user's account
 */
export const deleteMe = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, null, 'Account deactivated successfully'));
});

/**
 * Search for other users (public, paginated)
 */
export const searchUsers = asyncHandler(async (req, res) => {
  // FIX: Pass req.user.id to the service so it can filter blocked users
  const result = await userService.searchUsers(req.query, req.user.id);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, result, 'Users retrieved successfully'));
});

/**
 * [NEW] Register an FCM token for push notifications
 */
export const registerFcmToken = asyncHandler(async (req, res) => {
  const fcmToken = await userService.registerFcmToken(req.user.id, req.body);
  res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, fcmToken, 'FCM token registered successfully'));
});

/**
 * [NEW] Delete an FCM token (on logout)
 */
export const deleteFcmToken = asyncHandler(async (req, res) => {
  const { token } = req.params;
  await userService.deleteFcmToken(req.user.id, token);
  res
    .status(HTTP_STATUS.NO_CONTENT)
    .send();
});

export const userController = {
  getUserById,
  getMyProfile,
  updateMe,
  deleteMe,
  searchUsers,
  registerFcmToken, // ADDED
  deleteFcmToken, // ADDED
};```

## src/controllers/verification.controller.js
```javascript
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { verificationService } from '../services/verification.service.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * [Admin] Get pending verification documents queue
 */
export const getPendingVerifications = asyncHandler(async (req, res) => {
    const result = await verificationService.getPendingVerifications(req.query);
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(
                HTTP_STATUS.OK,
                result,
                'Pending verifications retrieved successfully'
            )
        );
});

/**
 * [Admin] Get a single document for verification review
 */
export const getVerificationById = asyncHandler(async (req, res) => {
    const document = await verificationService.getVerificationById(
        parseInt(req.params.mediaId)
    );
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(HTTP_STATUS.OK, document, 'Document retrieved successfully')
        );
});

/**
 * [Admin] Approve a verification document
 */
export const approveVerification = asyncHandler(async (req, res) => {
    const result = await verificationService.approveVerification(
        parseInt(req.params.mediaId),
        req.user.id
    );
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(
                HTTP_STATUS.OK,
                result,
                'Document approved successfully. Profile marked as verified.'
            )
        );
});

/**
 * [Admin] Reject a verification document
 */
export const rejectVerification = asyncHandler(async (req, res) => {
    const result = await verificationService.rejectVerification(
        parseInt(req.params.mediaId),
        req.user.id,
        req.body.reason
    );
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(HTTP_STATUS.OK, result, 'Document rejected successfully')
        );
});

/**
 * [Admin] Request document resubmission
 */
export const requestResubmission = asyncHandler(async (req, res) => {
    const result = await verificationService.requestResubmission(
        parseInt(req.params.mediaId),
        req.user.id,
        req.body.reason
    );
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(
                HTTP_STATUS.OK,
                result,
                'Resubmission request sent successfully'
            )
        );
});

/**
 * [Admin] Get verification statistics
 */
export const getVerificationStats = asyncHandler(async (req, res) => {
    const stats = await verificationService.getVerificationStats();
    res
        .status(HTTP_STATUS.OK)
        .json(
            new ApiResponse(HTTP_STATUS.OK, stats, 'Verification stats retrieved')
        );
});

export const verificationController = {
    getPendingVerifications,
    getVerificationById,
    approveVerification,
    rejectVerification,
    requestResubmission,
    getVerificationStats,
};
```

## src/middleware/auth.js
```javascript
import jwtUtils from '../utils/jwt.js';
import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Authenticate user with JWT token
 */
export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authorization token required'));
    }

    const token = authHeader.substring(7);

    // Verify JWT
    const decoded = jwtUtils.verifyAccessToken(token);

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'User not found'));
    }

    if (!user.isActive || user.isBanned) {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is not active'));
    }

    // Attach user to request
    req.user = user;
    next();

  } catch (error) {
    logger.error('Authentication error:', error.message);
    return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid or expired token'));
  }
};

/**
 * Optional authentication (doesn't fail if no token)
 */
export const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const decoded = jwtUtils.verifyAccessToken(token);

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        include: {
          profile: true,
        },
      });

      if (user && user.isActive && !user.isBanned) {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    // Silently fail for optional auth
    next();
  }
};

/**
 * Require user to have a complete profile
 */
export const requireCompleteProfile = async (req, res, next) => {
  try {
    // User must be authenticated first
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    // Check if profile exists
    if (!req.user.profile) {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Profile not found. Please create your profile first.'));
    }

    // Check profile completeness (lowered to 0 for testing - set to 50 for production)
    const profileCompleteness = req.user.profile.profileCompleteness || 0;
    const requiredCompleteness = 0; // TODO: Change to 50 for production

    if (profileCompleteness < requiredCompleteness) {
      const error = new ApiError(HTTP_STATUS.FORBIDDEN, 'Please complete your profile to access this feature');
      error.data = {
        profileCompleteness,
        requiredCompleteness,
      };
      return next(error);
    }

    next();

  } catch (error) {
    logger.error('Profile check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking profile status'));
  }
};

/**
 * Require user to have verified phone
 */
export const requirePhoneVerified = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    if (!req.user.isPhoneVerified) {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Phone verification required to access this feature'));
    }

    next();

  } catch (error) {
    logger.error('Phone verification check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking phone verification status'));
  }
};

/**
 * Require user to have active subscription
 */
export const requireSubscription = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    // FIRST: Check if user has PREMIUM_USER role (set manually via database or payment)
    if (req.user.role === 'PREMIUM_USER') {
      req.subscription = { isPremiumRole: true };
      return next();
    }

    // Check for active subscription
    const activeSubscription = await prisma.userSubscription.findFirst({
      where: {
        userId: req.user.id,
        status: 'ACTIVE',
        endDate: {
          gt: new Date(),
        },
      },
      include: {
        plan: true,
      },
    });

    if (!activeSubscription) {
      const error = new ApiError(HTTP_STATUS.FORBIDDEN, 'Active subscription required to access this feature');
      error.data = {
        requiresSubscription: true,
      };
      return next(error);
    }

    // Attach subscription to request
    req.subscription = activeSubscription;
    next();

  } catch (error) {
    logger.error('Subscription check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking subscription status'));
  }
};

/**
 * Check if user has admin role
 */
export const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN') {
      return next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Admin access required'));
    }

    next();

  } catch (error) {
    logger.error('Admin check error:', error.message);
    return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking admin status'));
  }
};
/**
 * Authorize users with specific roles
 * @param {...string} roles - Allowed roles
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `User role ${req.user.role} is not authorized to access this route`
        )
      );
    }
    next();
  };
};
```

## src/middleware/auth.rate-limiter.js
```javascript
import rateLimit from 'express-rate-limit';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Stricter rate limiter for authentication routes
 * 10 requests per 15 minutes per IP
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 200 auth requests per window
  message: {
    success: false,
    message: 'Too many authentication attempts. Please try again after 15 minutes.',
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

/**
 * Even stricter rate limiter for sending OTP
 * 3 requests per 15 minutes per IP
 */
export const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 3 OTP requests per 15 minutes
  message: {
    success: false,
    message: 'Too many OTP requests. Please try again after 15 minutes.',
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
});```

## src/middleware/cache.middleware.js
```javascript
/**
 * Cache Middleware
 * Automatically caches GET responses and serves from cache when available
 */

import { cacheService } from '../services/cache.service.js';
import { isRedisConnected } from '../config/redis.js';
import { logger } from '../config/logger.js';

/**
 * Create cache middleware for a route
 * @param {Object} options - Cache options
 * @param {string} options.prefix - Cache key prefix
 * @param {number} options.ttl - Time to live in seconds
 * @param {Function} options.keyGenerator - Function to generate cache key from req
 * @returns {Function} Express middleware
 */
export const cacheMiddleware = (options = {}) => {
    const {
        prefix = 'api:',
        ttl = 300, // 5 minutes default
        keyGenerator = null,
    } = options;

    return async (req, res, next) => {
        // Skip caching if Redis is not connected
        if (!isRedisConnected()) {
            return next();
        }

        // Only cache GET requests
        if (req.method !== 'GET') {
            return next();
        }

        // Generate cache key
        const cacheKey = keyGenerator
            ? keyGenerator(req)
            : `${prefix}${req.originalUrl}`;

        try {
            // Try to get from cache
            const cachedData = await cacheService.get(cacheKey);

            if (cachedData) {
                // Add cache header
                res.set('X-Cache', 'HIT');
                return res.json(cachedData);
            }

            // Store original json method
            const originalJson = res.json.bind(res);

            // Override json method to cache the response
            res.json = (data) => {
                // Only cache successful responses
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    cacheService.set(cacheKey, data, ttl).catch((err) => {
                        logger.error('Cache middleware set error:', err.message);
                    });
                }

                // Add cache header
                res.set('X-Cache', 'MISS');

                // Call original json method
                return originalJson(data);
            };

            next();
        } catch (error) {
            logger.error('Cache middleware error:', error.message);
            next();
        }
    };
};

/**
 * Pre-configured cache middleware for common use cases
 */

// Cache subscription plans for 1 hour
export const cachePlans = cacheMiddleware({
    prefix: 'plans:',
    ttl: 3600,
    keyGenerator: (req) => 'plans:all',
});

// Cache profile data for 5 minutes
export const cacheProfile = cacheMiddleware({
    prefix: 'profile:',
    ttl: 300,
    keyGenerator: (req) => `profile:${req.params.userId || req.user?.id}`,
});

// Cache match suggestions for 10 minutes
export const cacheMatches = cacheMiddleware({
    prefix: 'matches:',
    ttl: 600,
    keyGenerator: (req) => `matches:${req.user?.id}:${req.query.page || 1}`,
});

// Cache dashboard stats for 2 minutes
export const cacheStats = cacheMiddleware({
    prefix: 'stats:',
    ttl: 120,
    keyGenerator: (req) => `stats:${req.user?.id}`,
});

// Cache short-lived data (1 minute)
export const cacheShort = cacheMiddleware({
    prefix: 'short:',
    ttl: 60,
});

export default {
    cacheMiddleware,
    cachePlans,
    cacheProfile,
    cacheMatches,
    cacheStats,
    cacheShort,
};
```

## src/middleware/checkPlanFeature.js
```javascript
/**
 * Plan Feature Check Middleware
 * Checks if user's subscription plan has specific features enabled
 * Differentiates between Basic (₹299) and Premium (₹999) plans
 */

import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Check if user's subscription plan has a specific feature
 * @param {string} featureName - The feature to check (e.g., 'canSeeProfileVisitors', 'incognitoMode')
 * @returns {Function} Express middleware
 */
export const requirePlanFeature = (featureName) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
            }

            // Get active subscription with plan details
            const activeSubscription = await prisma.userSubscription.findFirst({
                where: {
                    userId: req.user.id,
                    status: 'ACTIVE',
                    endDate: { gt: new Date() },
                },
                include: {
                    plan: true,
                },
            });

            if (!activeSubscription) {
                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    'Active subscription required. Subscribe to access this feature.',
                    { requiresSubscription: true }
                ));
            }

            // Check if the plan has the required feature
            const plan = activeSubscription.plan;
            if (!plan[featureName]) {
                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    `This feature requires ${plan.name === 'Basic Plan' ? 'Premium' : 'a higher'} plan. Upgrade to access.`,
                    {
                        currentPlan: plan.name,
                        requiredFeature: featureName,
                        upgradeRequired: true,
                    }
                ));
            }

            // Feature is available, attach subscription to request
            req.subscription = activeSubscription;
            next();
        } catch (error) {
            logger.error('Plan feature check error:', error.message);
            return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking plan features'));
        }
    };
};

/**
 * Check and enforce usage limits based on subscription plan
 * @param {'contactViews' | 'messages' | 'interests'} limitType - The type of limit to check
 * @returns {Function} Express middleware
 */
export const checkPlanLimit = (limitType) => {
    const limitMap = {
        contactViews: { max: 'maxContactViews', used: 'contactViewsUsed' },
        messages: { max: 'maxMessagesSend', used: 'messagesUsed' },
        interests: { max: 'maxInterestsSend', used: 'interestsUsed' },
    };

    return async (req, res, next) => {
        try {
            if (!req.user) {
                return next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication required'));
            }

            // Get active subscription with plan details
            const activeSubscription = await prisma.userSubscription.findFirst({
                where: {
                    userId: req.user.id,
                    status: 'ACTIVE',
                    endDate: { gt: new Date() },
                },
                include: {
                    plan: true,
                },
            });

            if (!activeSubscription) {
                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    'Active subscription required to access this feature.',
                    { requiresSubscription: true }
                ));
            }

            const { max, used } = limitMap[limitType];
            const maxLimit = activeSubscription.plan[max];
            const currentUsage = activeSubscription[used];

            // 0 means unlimited
            if (maxLimit !== 0 && currentUsage >= maxLimit) {
                return next(new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    `You have reached your ${limitType} limit (${maxLimit}). Upgrade to Premium for unlimited access.`,
                    {
                        currentPlan: activeSubscription.plan.name,
                        limitType,
                        used: currentUsage,
                        max: maxLimit,
                        upgradeRequired: true,
                    }
                ));
            }

            // Attach subscription and remaining count to request
            req.subscription = activeSubscription;
            req.remaining = maxLimit === 0 ? 'unlimited' : maxLimit - currentUsage;
            next();
        } catch (error) {
            logger.error('Plan limit check error:', error.message);
            return next(new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error checking plan limits'));
        }
    };
};

/**
 * Increment usage counter after successful action
 * Call this AFTER the action succeeds
 * @param {'contactViews' | 'messages' | 'interests'} limitType - The type of usage to increment
 */
export const incrementUsage = async (subscriptionId, limitType) => {
    const usedField = {
        contactViews: 'contactViewsUsed',
        messages: 'messagesUsed',
        interests: 'interestsUsed',
    }[limitType];

    if (!usedField) return;

    await prisma.userSubscription.update({
        where: { id: subscriptionId },
        data: {
            [usedField]: { increment: 1 },
        },
    });
};

/**
 * Get user's subscription details with usage information
 * @param {number} userId - User ID
 * @returns {Object|null} Subscription with plan and usage details
 */
export const getUserSubscriptionDetails = async (userId) => {
    const subscription = await prisma.userSubscription.findFirst({
        where: {
            userId,
            status: 'ACTIVE',
            endDate: { gt: new Date() },
        },
        include: {
            plan: true,
        },
    });

    if (!subscription) return null;

    const plan = subscription.plan;
    return {
        planName: plan.name,
        planSlug: plan.slug,
        endDate: subscription.endDate,
        features: {
            canSeeProfileVisitors: plan.canSeeProfileVisitors,
            incognitoMode: plan.incognitoMode,
            priorityListing: plan.priorityListing,
            verifiedBadge: plan.verifiedBadge,
        },
        limits: {
            contactViews: {
                max: plan.maxContactViews || 'unlimited',
                used: subscription.contactViewsUsed,
                remaining: plan.maxContactViews === 0 ? 'unlimited' : plan.maxContactViews - subscription.contactViewsUsed,
            },
            messages: {
                max: plan.maxMessagesSend || 'unlimited',
                used: subscription.messagesUsed,
                remaining: plan.maxMessagesSend === 0 ? 'unlimited' : plan.maxMessagesSend - subscription.messagesUsed,
            },
            interests: {
                max: plan.maxInterestsSend || 'unlimited',
                used: subscription.interestsUsed,
                remaining: plan.maxInterestsSend === 0 ? 'unlimited' : plan.maxInterestsSend - subscription.interestsUsed,
            },
        },
    };
};

export default {
    requirePlanFeature,
    checkPlanLimit,
    incrementUsage,
    getUserSubscriptionDetails,
};
```

## src/middleware/error-handler.middleware.js
```javascript
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { config } from '../config/config.js';
import { logger } from '../config/logger.js';
import { HTTP_STATUS } from '../utils/constants.js';

const { JsonWebTokenError, TokenExpiredError } = jwt;

/**
 * Comprehensive error handling middleware.
 * Catches errors from asyncHandler, validation, prisma, and jwt.
 */
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  let statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  let message = 'Something went wrong';
  let errors = [];

  // 1. Handle our custom ApiError
  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors || [];
  }
  // 2. Handle Zod validation errors
  else if (err instanceof ZodError) {
    statusCode = HTTP_STATUS.UNPROCESSABLE_ENTITY; // 422 is more semantic for validation
    message = 'Validation failed';
    errors = err.errors.map((error) => ({
      field: error.path.join('.'),
      message: error.message,
    }));
  }
  // 3. Handle Prisma errors
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002': // Unique constraint violation
        statusCode = HTTP_STATUS.CONFLICT; // 409
        message = `This ${err.meta?.target?.join(', ')} is already in use.`;
        break;
      case 'P2025': // Record not found
        statusCode = HTTP_STATUS.NOT_FOUND; // 404
        message = 'The requested resource was not found.';
        break;
      default:
        statusCode = HTTP_STATUS.BAD_REQUEST; // 400
        message = 'Database request error.';
        logger.warn(`Prisma Error ${err.code}: ${err.message}`);
        break;
    }
  }
  // 4. Handle JWT errors
  else if (err instanceof TokenExpiredError) {
    statusCode = HTTP_STATUS.UNAUTHORIZED; // 401
    message = 'Your session has expired. Please log in again.';
  } else if (err instanceof JsonWebTokenError) {
    statusCode = HTTP_STATUS.UNAUTHORIZED; // 401
    message = 'Invalid session token. Please log in again.';
  }
  // 5. Handle other generic errors
  else {
    statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    message = err.message || 'Internal Server Error';
  }

  // Log the error
  const logMessage = `${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`;
  logger.error(logMessage, {
    stack: config.NODE_ENV === 'development' ? err.stack : undefined,
    errors: errors.length > 0 ? errors : undefined,
    // Avoid logging sensitive data from req.body
  });

  // Prepare the response
  const response = {
    ...new ApiResponse(statusCode, null, message),
    // Only include errors array if it has content
    ...(errors.length > 0 && { errors }),
    // Only include stack in development
    ...(config.NODE_ENV === 'development' && { stack: err.stack }),
  };

  // Send the error response
  res.status(statusCode).json(response);
};```

## src/middleware/rate-limiter.middleware.js
```javascript
import rateLimit from 'express-rate-limit';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * General rate limiter for most API routes
 * 100 requests per 15 minutes per IP
 */
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

/**
 * Stricter rate limiter for authentication routes
 * 20 requests per 15 minutes per IP
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: 'Too many authentication attempts. Please try again after 15 minutes.',
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Strictest rate limiter for sending OTP
 * 5 requests per 15 minutes per IP
 */
export const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many OTP requests. Please try again after 15 minutes.',
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
});```

## src/middleware/requestId.middleware.js
```javascript
import crypto from 'crypto';

/**
 * Add unique request ID to each request for tracking
 */
export const requestIdMiddleware = (req, res, next) => {
  const requestId = req.headers['x-request-id'] || crypto.randomUUID();
  req.id = requestId;
  res.setHeader('X-Request-ID', requestId);
  next();
};

export default requestIdMiddleware;
```

## src/middleware/upload.js
```javascript
import multer from 'multer';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { isValidFileType } from '../utils/validators.js';

// Configure memory storage for multer
const storage = multer.memoryStorage();

/**
 * File filter function
 * @param {Array} allowedTypes - Allowed MIME types
 * @returns {Function} Multer file filter
 */
const createFileFilter = (allowedTypes) => {
  return (req, file, cb) => {
    if (isValidFileType(file.mimetype, allowedTypes)) {
      cb(null, true);
    } else {
      cb(
        new ApiError(
          HTTP_STATUS.BAD_REQUEST,
          `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`
        ),
        false
      );
    }
  };
};

/**
 * Create multer upload instance
 * @param {Object} options - Upload options
 * @returns {Object} Multer instance
 */
const createUploader = (options = {}) => {
  const {
    allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    maxSize = 5, // MB
  } = options;

  return multer({
    storage,
    fileFilter: createFileFilter(allowedTypes),
    limits: {
      fileSize: maxSize * 1024 * 1024, // Convert to bytes
    },
  });
};

/**
 * Middleware for profile photo upload
 */
export const uploadProfilePhoto = createUploader({
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  maxSize: 5,
}).single('photo'); // Field name 'photo'

/**
 * Middleware for multiple profile photos
 */
export const uploadProfilePhotos = createUploader({
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  maxSize: 5,
}).array('photos', 6); // Field name 'photos', max 6 files

/**
 * Middleware for document upload (ID proof, etc.)
 */
export const uploadDocument = createUploader({
  allowedTypes: ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'],
  maxSize: 10,
}).single('document'); // Field name 'document'

/**
 * Error handler for multer errors
 */
export const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'File size too large.'));
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'Too many files.'));
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'Unexpected file field.'));
    }
  }
  next(err);
};```

## src/middleware/validate.middleware.js
```javascript
import { ApiError } from "../utils/ApiError.js";

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    const errors = err.errors.map((error) => ({
      path: error.path.join("."),
      message: error.message,
    }));
    next(new ApiError(400, "Validation failed", errors));
  }
};

export { validate };
```

## src/repositories/user.repository.js
```javascript
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
```

## src/routes/activityLog.routes.js
```javascript
import express from 'express';
import { getActivityLogs, getActivityStats } from '../controllers/activityLog.controller.js';

const router = express.Router();

// All routes require admin authentication (applied in parent router)

/**
 * @route   GET /admin/activity-logs
 * @desc    Get activity logs with pagination and filters
 * @access  Admin
 */
router.get('/', getActivityLogs);

/**
 * @route   GET /admin/activity-logs/stats
 * @desc    Get activity log statistics
 * @access  Admin
 */
router.get('/stats', getActivityStats);

export default router;
```

## src/routes/admin.routes.js
```javascript
import { Router } from 'express';
import multer from 'multer'; // ADDED
import { adminController } from '../controllers/admin.controller.js';
import { runDiagnostics } from '../controllers/diagnostics.controller.js'; // ADDED
import { adminBulkController } from '../controllers/admin.bulk.controller.js'; // ADDED
import { authenticate, requireAdmin } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  paginationQuerySchema,
  recentQuerySchema,
  userIdParamSchema,
  updateUserRoleSchema,
  getReportsSchema,
  reportIdParamSchema,
  updateReportSchema,
} from '../validation/admin.validation.js';

// ADDED: Import new agent routes
import agentRoutes from './agent.routes.js';
// ADDED: Import verification routes
import verificationRoutes from './verification.routes.js';
// ADDED: Import analytics routes
import analyticsRoutes from './analytics.routes.js';
// ADDED: Import activity log routes
import activityLogRoutes from './activityLog.routes.js';
// ADDED: Import audit log routes
import auditLogRoutes from './auditLog.routes.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() }); // ADDED: Memory storage for Excel

// --- Admin Auth ---
router.post('/login', adminController.adminLogin);

// All routes require authentication and admin role
router.use(authenticate, requireAdmin);

// --- User Management ---
router.get(
  '/users',
  validate(paginationQuerySchema),
  adminController.getAllUsers
);

// ADDED: Bulk User Upload
router.post(
  '/users/bulk-upload',
  upload.single('file'),
  adminBulkController.uploadUsers
);

router.get(
  '/users/recent',
  validate(recentQuerySchema),
  adminController.getRecentUsers
);
router.get(
  '/users/:userId',
  validate(userIdParamSchema),
  adminController.getUserById
);
router.put(
  '/users/:userId/role',
  validate(updateUserRoleSchema),
  adminController.updateUserRole
);
router.delete(
  '/users/:userId',
  validate(userIdParamSchema),
  adminController.deleteUser
);

// --- Profile Management ---
router.get(
  '/profiles',
  validate(paginationQuerySchema),
  adminController.getAllProfiles
);

// --- Match Management ---
router.get(
  '/matches/recent',
  validate(recentQuerySchema),
  adminController.getRecentMatches
);

// --- Dashboard & System ---
router.get('/stats', adminController.getDashboardStats);
router.post('/cleanup/tokens', adminController.cleanupExpiredTokens);
router.get('/diagnostics', runDiagnostics); // ADDED: New Diagnostics route

// --- Report Management ---
router.get(
  '/reports',
  validate(getReportsSchema),
  adminController.getReports
);
router.get(
  '/reports/:id',
  validate(reportIdParamSchema),
  adminController.getReportById
);
router.put(
  '/reports/:id',
  validate(updateReportSchema),
  adminController.updateReport
);

// --- ADDED: Agent Management ---
// All routes in agentRoutes will be prefixed with /admin/agents
// and will be protected by the requireAdmin middleware
router.use('/agents', agentRoutes);

// --- ADDED: Verification Management ---
// All routes will be prefixed with /admin/verifications
router.use('/verifications', verificationRoutes);

// --- ADDED: Analytics ---
// All routes will be prefixed with /admin/analytics
router.use('/analytics', analyticsRoutes);

// --- SUBSCRIPTION PLAN MANAGEMENT ---
router.get('/plans', adminController.getPlans);
router.put('/plans/:planId', adminController.updatePlan); // ADDED: Update plan details
router.patch('/plans/:planId/discount', adminController.updatePlanDiscount);

// --- ADDED: Activity Logs ---
// All routes will be prefixed with /admin/activity-logs
router.use('/activity-logs', activityLogRoutes);

// --- ADDED: Audit Logs ---
// All routes will be prefixed with /admin/audit-logs
router.use('/audit-logs', auditLogRoutes);

export default router;```

## src/routes/agent.routes.js
```javascript
import { Router } from 'express';
import { agentController } from '../controllers/agent.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createAgentSchema,
  updateAgentSchema,
  agentIdParamSchema,
  getAgentsSchema,
  getAgentUsersSchema,
} from '../validation/agent.validation.js';

const router = Router();

// Note: Authentication (authenticate + requireAdmin)
// is already applied in src/routes/admin.routes.js
router
  .route('/')
  .post(validate(createAgentSchema), agentController.createAgent)
  .get(validate(getAgentsSchema), agentController.getAllAgents);

router
  .route('/:agentId')
  .get(validate(agentIdParamSchema), agentController.getAgentById)
  .put(validate(updateAgentSchema), agentController.updateAgent)
  .delete(validate(agentIdParamSchema), agentController.deleteAgent);

// Agent Referral Tracking Routes (for commission calculation)
router.get(
  '/:agentId/users',
  validate(getAgentUsersSchema),
  agentController.getUsersByAgent
);

router.get(
  '/:agentId/stats',
  validate(agentIdParamSchema),
  agentController.getAgentStats
);

export default router;```

## src/routes/analytics.routes.js
```javascript
import { Router } from 'express';
import { analyticsController } from '../controllers/analytics.controller.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();

// All analytics routes require admin auth
router.use(authenticate, requireAdmin);

// GET /admin/analytics/revenue - Monthly revenue data
router.get('/revenue', analyticsController.getRevenueAnalytics);

// GET /admin/analytics/signups - Signups by category
router.get('/signups', analyticsController.getSignupsByCategory);

// GET /admin/analytics/subscriptions - Subscription breakdown
router.get('/subscriptions', analyticsController.getSubscriptionAnalytics);

export default router;
```

## src/routes/astrology.routes.js
```javascript
/**
 * Astrology Routes
 * /api/v1/astrology/*
 */

import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
    getNakshatraList,
    getRashiList,
    getMatch,
} from '../controllers/astrology.controller.js';

const router = express.Router();

// Get nakshatra list (public)
router.get('/nakshatras', getNakshatraList);

// Get rashi list (public)
router.get('/rashis', getRashiList);

// Get compatibility match (authenticated)
router.get('/match/:targetUserId', authenticate, getMatch);

export default router;
```

## src/routes/auditLog.routes.js
```javascript
import { Router } from 'express';
import prisma from '../config/database.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';

const router = Router();

/**
 * GET /admin/audit-logs
 * Fetch paginated audit logs with optional filters
 */
router.get('/', async (req, res) => {
    try {
        const { page, limit, skip } = getPaginationParams(req.query);
        const { tableName, action, changedByType, startDate, endDate } = req.query;

        // Build filter conditions
        const where = {};
        if (tableName) where.tableName = tableName;
        if (action) where.action = action;
        if (changedByType) where.changedByType = changedByType;
        if (startDate || endDate) {
            where.changedAt = {};
            if (startDate) where.changedAt.gte = new Date(startDate);
            if (endDate) where.changedAt.lte = new Date(endDate);
        }

        const [logs, total] = await Promise.all([
            prisma.auditLog.findMany({
                where,
                skip,
                take: limit,
                orderBy: { changedAt: 'desc' },
            }),
            prisma.auditLog.count({ where }),
        ]);

        const pagination = getPaginationMetadata(page, limit, total);

        res.json({
            success: true,
            data: { logs, pagination },
        });
    } catch (error) {
        logger.error('Error fetching audit logs:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch audit logs',
        });
    }
});

/**
 * GET /admin/audit-logs/stats
 * Get audit log statistics
 */
router.get('/stats', async (req, res) => {
    try {
        const [total, inserts, updates, deletes] = await Promise.all([
            prisma.auditLog.count(),
            prisma.auditLog.count({ where: { action: 'INSERT' } }),
            prisma.auditLog.count({ where: { action: 'UPDATE' } }),
            prisma.auditLog.count({ where: { action: 'DELETE' } }),
        ]);

        // Get most active tables
        const tableStats = await prisma.auditLog.groupBy({
            by: ['tableName'],
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 10,
        });

        res.json({
            success: true,
            data: {
                total,
                inserts,
                updates,
                deletes,
                tableStats: tableStats.map(t => ({
                    table: t.tableName,
                    count: t._count.id,
                })),
            },
        });
    } catch (error) {
        logger.error('Error fetching audit stats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch audit statistics',
        });
    }
});

/**
 * GET /admin/audit-logs/:recordId
 * Get audit history for a specific record
 */
router.get('/record/:tableName/:recordId', async (req, res) => {
    try {
        const { tableName, recordId } = req.params;
        const { page, limit, skip } = getPaginationParams(req.query);

        const where = {
            tableName,
            recordId: parseInt(recordId, 10),
        };

        const [logs, total] = await Promise.all([
            prisma.auditLog.findMany({
                where,
                skip,
                take: limit,
                orderBy: { changedAt: 'desc' },
            }),
            prisma.auditLog.count({ where }),
        ]);

        const pagination = getPaginationMetadata(page, limit, total);

        res.json({
            success: true,
            data: { logs, pagination },
        });
    } catch (error) {
        logger.error('Error fetching record audit history:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch record audit history',
        });
    }
});

export default router;
```

## src/routes/auth.routes.js
```javascript
import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  refreshTokenSchema,
  logoutSchema,
  verifyFirebasePhoneSchema,
  phoneLoginSchema,
} from '../validation/auth.validation.js';

const router = Router();

// Rate limiter removed for authentication routes


router.post(
  '/refresh',
  validate(refreshTokenSchema),
  authController.refreshToken
);

router.post(
  '/logout',
  authenticate,
  validate(logoutSchema),
  authController.logout
);

// Firebase Phone Login (New)
router.post(
  '/phone/login',
  validate(phoneLoginSchema),
  authController.phoneLogin
);

// Firebase Phone Verification
router.post(
  '/phone/verify-firebase',
  authenticate,
  validate(verifyFirebasePhoneSchema),
  authController.verifyFirebasePhone
);

export default router;```

## src/routes/block.routes.js
```javascript
import { Router } from 'express';
import { blockController } from '../controllers/block.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createBlockSchema,
  blockedUserIdParamSchema,
  getBlockedListSchema,
} from '../validation/block.validation.js';

const router = Router();

// All block routes require authentication
router.use(authenticate, requireCompleteProfile);

router
  .route('/')
  .post(validate(createBlockSchema), blockController.blockUser)
  .get(validate(getBlockedListSchema), blockController.getMyBlockedList);

router
  .route('/:blockedId')
  .delete(
    validate(blockedUserIdParamSchema),
    blockController.unblockUser
  );

export default router;```

## src/routes/boost.routes.js
```javascript
/**
 * Boost Routes
 * /api/v1/boost/*
 */

import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
    getPackages,
    getActive,
    activate,
    getFeaturedProfiles,
    createBoostOrder,
    verifyBoostPayment,
} from '../controllers/boost.controller.js';

const router = express.Router();

// Get all boost packages (public)
router.get('/packages', getPackages);

// Get featured/boosted profiles (public)
router.get('/featured', getFeaturedProfiles);

// Get user's active boost (authenticated)
router.get('/active', authenticate, getActive);

// Activate a boost (authenticated)
router.post('/activate', authenticate, activate);

// Create Razorpay order for boost (authenticated)
router.post('/order', authenticate, createBoostOrder);

// Verify payment and activate boost (authenticated)
router.post('/verify', authenticate, verifyBoostPayment);

export default router;
```

## src/routes/contact.routes.js
```javascript
import express from 'express';
import * as contactController from '../controllers/contact.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Submit contact form (Public)
 * @access  Public
 */
router.post('/', contactController.submitContactForm);

/**
 * @route   GET /api/contact
 * @desc    Get all contact messages (Admin)
 * @access  Private (Admin)
 */
router.get('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.getContactMessages);

/**
 * @route   GET /api/contact/:id
 * @desc    Get single message (Admin)
 * @access  Private (Admin)
 */
router.get('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.getSingleMessage);

/**
 * @route   PATCH /api/contact/:id/status
 * @desc    Update message status (Admin)
 * @access  Private (Admin)
 */
router.patch('/:id/status', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.updateStatus);

/**
 * @route   DELETE /api/contact/:id
 * @desc    Delete message (Admin)
 * @access  Private (Admin)
 */
router.delete('/:id', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), contactController.deleteContactMessage);

export default router;
```

## src/routes/contactRequest.routes.js
```javascript
import { Router } from 'express';
import { contactRequestController } from '../controllers/contactRequest.controller.js';
import { authenticate, requireCompleteProfile, requireSubscription } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createContactRequestSchema,
  respondContactRequestSchema,
  getContactRequestsSchema,
  // contactRequestIdParamSchema, // <-- FIX: Removed unused import
} from '../validation/contactRequest.validation.js';

const router = Router();

// All routes require authentication
router.use(authenticate, requireCompleteProfile);


// This specific route requires a subscription
router
  .route('/')
  .post(
    requireSubscription, // <-- Added subscription check
    validate(createContactRequestSchema), 
    contactRequestController.createContactRequest
  );


router
  .route('/sent')
  .get(validate(getContactRequestsSchema), contactRequestController.getSentRequests);


router
  .route('/received')
  .get(validate(getContactRequestsSchema), contactRequestController.getReceivedRequests);


router
  .route('/:id/respond')
  .post(validate(respondContactRequestSchema), contactRequestController.respondToRequest);

export default router;```

## src/routes/education.routes.js
```javascript
import { Router } from 'express';
import { educationController } from '../controllers/education.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createEducationSchema,
  updateEducationSchema,
  educationIdParamSchema,
} from '../validation/education.validation.js';

const router = Router();

// All education routes require authentication
// We also use requireCompleteProfile as education is part of a profile
router.use(authenticate, requireCompleteProfile);


router
  .route('/')
  .post(validate(createEducationSchema), educationController.createEducation)
  .get(educationController.getMyEducation);


router
  .route('/:id')
  .put(validate(updateEducationSchema), educationController.updateEducation)
  .delete(validate(educationIdParamSchema), educationController.deleteEducation);

export default router;```

## src/routes/horoscope.routes.js
```javascript
import { Router } from 'express';
import { horoscopeController } from '../controllers/horoscope.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
    getHoroscopeMatchSchema,
    calculateGunaScoreSchema,
} from '../validation/horoscope.validation.js';

const router = Router();

// All routes require authentication
router.use(authenticate);

/**
 * Get horoscope compatibility with a specific profile
 * GET /horoscope/match/:profileId
 */
router.get(
    '/match/:profileId',
    validate(getHoroscopeMatchSchema),
    horoscopeController.getHoroscopeMatch
);

/**
 * Calculate Guna Milan between any two profiles
 * POST /horoscope/calculate
 */
router.post(
    '/calculate',
    validate(calculateGunaScoreSchema),
    horoscopeController.calculateGunaScore
);

export default router;
```

## src/routes/index.js
```javascript
import express from 'express';
const router = express.Router();

// Auth routes
import authRoutes from './auth.routes.js';
router.use('/auth', authRoutes);

// User routes
import userRoutes from './user.routes.js';
router.use('/users', userRoutes);

// Profile routes
import profileRoutes from './profile.routes.js';
router.use('/profiles', profileRoutes);

// Education routes
import educationRoutes from './education.routes.js';
router.use('/education', educationRoutes);

// Occupation routes
import occupationRoutes from './occupation.routes.js';
router.use('/occupation', occupationRoutes);

// Partner Preference routes
import partnerPreferenceRoutes from './partnerPreference.routes.js';
router.use('/preference', partnerPreferenceRoutes);

// Shortlist routes
import shortlistRoutes from './shortlist.routes.js';
router.use('/shortlist', shortlistRoutes);

// Block routes
import blockRoutes from './block.routes.js';
router.use('/block', blockRoutes);

// Report routes
import reportRoutes from './report.routes.js';
router.use('/report', reportRoutes);

// Profile View routes
import profileViewRoutes from './profileView.routes.js';
router.use('/view', profileViewRoutes);

// Contact Request routes
import contactRequestRoutes from './contactRequest.routes.js';
router.use('/contact-request', contactRequestRoutes);

// ADDED: Photo View Request routes
import photoRequestRoutes from './photoRequest.routes.js';
router.use('/photo-request', photoRequestRoutes);

// Match routes
import matchRoutes from './match.routes.js';
router.use('/matches', matchRoutes);

// Message routes
import messageRoutes from './message.routes.js';
router.use('/messages', messageRoutes);

// Notification routes (for GETTING notifications)
import notificationRoutes from './notification.routes.js';
router.use('/notifications', notificationRoutes);

// Payment routes
import paymentRoutes from './payment.routes.js';
router.use('/payments', paymentRoutes);

// Subscription Plan routes
import subscriptionRoutes from './subscription.routes.js';
router.use('/plans', subscriptionRoutes);

// Privacy Settings routes
import privacyRoutes from './privacy.routes.js';
router.use('/privacy', privacyRoutes);

// Notification Settings routes
import notificationSettingsRoutes from './notificationSettings.routes.js';
router.use('/settings/notifications', notificationSettingsRoutes);

// Photo Privacy Settings routes
import photoPrivacyRoutes from './photoPrivacy.routes.js';
router.use('/photos', photoPrivacyRoutes);

// Upload routes
import uploadRoutes from './upload.routes.js';
router.use('/uploads', uploadRoutes);

// Horoscope Matching routes (Guna Milan)
import horoscopeRoutes from './horoscope.routes.js';
router.use('/horoscope', horoscopeRoutes);

// Admin routes
import adminRoutes from './admin.routes.js';
router.use('/admin', adminRoutes);

// Contact routes
import contactRoutes from './contact.routes.js';
router.use('/contact', contactRoutes);

// ============================================
// NEW PREMIUM FEATURES
// ============================================

// Boost/Spotlight routes
import boostRoutes from './boost.routes.js';
router.use('/boost', boostRoutes);

// Astrology/Kundli matching routes
import astrologyRoutes from './astrology.routes.js';
router.use('/astrology', astrologyRoutes);

// Profile Completion endpoint
import { authenticate } from '../middleware/auth.js';
import { getProfileCompletion } from '../controllers/profileCompletion.controller.js';
router.get('/profile/completion', authenticate, getProfileCompletion);

// Recommendations/Matching routes
import recommendationsRoutes from './recommendations.routes.js';
router.use('/recommendations', recommendationsRoutes);

// Location (PIN Code) routes
import locationRoutes from './location.routes.js';
router.use('/location', locationRoutes);

// Web Payment routes (for browser-based checkout)
import webRoutes from './web.routes.js';
router.use('/web', webRoutes);

// Health check endpoint with detailed status
import prisma from '../config/database.js';
import { isRedisConnected } from '../config/redis.js';

// FAST health check - no database query (for load balancers, k8s probes)
router.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    message: '✅ API is running',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
  });
});

// DETAILED health check - includes DB latency (for monitoring dashboards)
router.get('/health/detailed', async (req, res) => {
  try {
    const startTime = Date.now();

    // Test database connection (this is the slow part - 1-2s for cold Neon connection)
    const dbStart = Date.now();
    await prisma.$queryRaw`SELECT 1`;
    const dbLatency = Date.now() - dbStart;

    // Check Redis
    const redisStatus = isRedisConnected() ? '✅ Connected' : '⚠️ Not connected';

    res.json({
      success: true,
      status: 'healthy',
      message: '✅ API is healthy and running',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      totalLatency: `${Date.now() - startTime}ms`,
      services: {
        database: {
          status: '✅ Connected',
          latency: `${dbLatency}ms`,
          type: 'PostgreSQL (Neon)',
          note: dbLatency > 1000 ? '⚠️ Cold connection - normal for serverless DB' : null,
        },
        redis: {
          status: redisStatus,
          service: 'Redis Cache',
        },
        socket: {
          status: '✅ Running',
          service: 'Socket.io',
        },
        firebase: {
          status: process.env.FIREBASE_PROJECT_ID ? '✅ Configured' : '⚠️ Not configured',
          service: 'FCM Push Notifications',
        },
        r2: {
          status: process.env.R2_ACCESS_KEY_ID && process.env.R2_BUCKET_NAME
            ? '✅ Configured'
            : '⚠️ Not configured',
          service: 'Cloudflare R2 Storage',
        },
        razorpay: {
          status: process.env.RAZORPAY_KEY_ID ? '✅ Configured' : '⚠️ Not configured',
          service: 'Payment Gateway',
        },
      },
      memory: {
        usage: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
        total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}MB`,
      },
    });
  } catch (error) {
    res.status(503).json({
      success: false,
      status: 'unhealthy',
      message: '❌ Service degraded',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});


export default router;```

## src/routes/location.routes.js
```javascript
/**
 * Location Routes
 * Handles PIN code to location lookup API endpoints
 */

import express from 'express';
import locationService from '../services/location.service.js';

const router = express.Router();

/**
 * GET /api/v1/location
 * Lookup location by PIN code
 * 
 * Query Parameters:
 * - pincode: 6-digit Indian PIN code (required)
 * 
 * Response:
 * {
 *   success: true,
 *   data: { pincode, city, district, state, cached }
 * }
 */
router.get('/', async (req, res) => {
    try {
        const { pincode } = req.query;

        if (!pincode) {
            return res.status(400).json({
                success: false,
                error: 'PIN code is required. Usage: /api/v1/location?pincode=XXXXXX'
            });
        }

        const result = await locationService.getLocationByPincode(pincode.trim());

        if (!result.success) {
            return res.status(400).json(result);
        }

        return res.json(result);

    } catch (error) {
        console.error('[Location Route] Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

/**
 * POST /api/v1/location/bulk
 * Bulk lookup multiple PIN codes (admin only)
 * 
 * Body:
 * { pincodes: ["492001", "492002", ...] }
 */
router.post('/bulk', async (req, res) => {
    try {
        const { pincodes } = req.body;

        if (!Array.isArray(pincodes) || pincodes.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'pincodes array is required'
            });
        }

        // Limit bulk requests
        if (pincodes.length > 50) {
            return res.status(400).json({
                success: false,
                error: 'Maximum 50 PIN codes per request'
            });
        }

        const results = await locationService.bulkLookup(pincodes);

        return res.json({
            success: true,
            data: Object.fromEntries(results)
        });

    } catch (error) {
        console.error('[Location Route] Bulk lookup error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

/**
 * GET /api/v1/location/validate/:pincode
 * Quick validation of PIN code format
 */
router.get('/validate/:pincode', (req, res) => {
    const { pincode } = req.params;
    const isValid = locationService.isValidPincode(pincode);

    return res.json({
        success: true,
        data: {
            pincode,
            valid: isValid
        }
    });
});

export default router;

```

## src/routes/match.routes.js
```javascript
import { Router } from 'express';
import { matchController } from '../controllers/match.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  sendMatchRequestSchema,
  matchIdParamSchema,
  getMatchesQuerySchema,
} from '../validation/match.validation.js';
// ADDED: Import cache middleware for performance
import { cacheMatches, cacheMiddleware } from '../middleware/cache.middleware.js';

const router = Router();

// All routes require authentication and a complete profile
router.use(authenticate, requireCompleteProfile);

router.post('/', validate(sendMatchRequestSchema), matchController.sendMatchRequest);

// GET routes - cached for 10 minutes for performance
router.get(
  '/sent',
  validate(getMatchesQuerySchema),
  cacheMiddleware({ prefix: 'matches:sent:', ttl: 600, keyGenerator: (req) => `matches:sent:${req.user?.id}:${req.query.page || 1}` }),
  matchController.getSentMatchRequests
);

router.get(
  '/received',
  validate(getMatchesQuerySchema),
  cacheMiddleware({ prefix: 'matches:received:', ttl: 600, keyGenerator: (req) => `matches:received:${req.user?.id}:${req.query.page || 1}` }),
  matchController.getReceivedMatchRequests
);

router.get(
  '/accepted',
  validate(getMatchesQuerySchema),
  cacheMiddleware({ prefix: 'matches:accepted:', ttl: 600, keyGenerator: (req) => `matches:accepted:${req.user?.id}:${req.query.page || 1}` }),
  matchController.getAcceptedMatches
);

router.post(
  '/:matchId/accept',
  validate(matchIdParamSchema),
  matchController.acceptMatchRequest
);

router.post(
  '/:matchId/reject',
  validate(matchIdParamSchema),
  matchController.rejectMatchRequest
);

router.delete(
  '/:matchId',
  validate(matchIdParamSchema),
  matchController.deleteMatch
);

export default router;```

## src/routes/message.routes.js
```javascript
import { Router } from 'express';
import { messageController } from '../controllers/message.controller.js';
import { authenticate, requireCompleteProfile, requireSubscription } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  sendMessageSchema,
  conversationParamsSchema,
  conversationQuerySchema,
  messageIdParamSchema,
} from '../validation/message.validation.js';

const router = Router();

// All routes require authentication and a complete profile
router.use(authenticate, requireCompleteProfile);

// Sending messages requires PREMIUM subscription
router.post('/', requireSubscription, validate(sendMessageSchema), messageController.sendMessage);


router.get('/conversations', messageController.getAllConversations);


router.get('/unread-count', messageController.getUnreadCount);


router.get(
  '/:userId',
  validate(conversationParamsSchema.merge(conversationQuerySchema)),
  messageController.getConversation
);

router.put(
  '/:userId/read',
  validate(conversationParamsSchema),
  messageController.markMessagesAsRead
);


router.delete(
  '/:messageId',
  validate(messageIdParamSchema),
  messageController.deleteMessage
);

export default router;```

## src/routes/notification.routes.js
```javascript
import { Router } from 'express';
import { notificationController } from '../controllers/notification.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  notificationIdParamSchema,
  getNotificationsQuerySchema,
} from '../validation/notification.validation.js';

const router = Router();

// All routes require authentication
router.use(authenticate);


router.get(
  '/',
  validate(getNotificationsQuerySchema),
  notificationController.getMyNotifications
);
router.delete('/', notificationController.deleteAllNotifications);

router.get('/unread-count', notificationController.getUnreadCount);

router.post('/device', notificationController.registerDevice);
router.delete('/device/:token', notificationController.unregisterDevice);

router.put('/read-all', notificationController.markAllAsRead);


router.put(
  '/:notificationId/read',
  validate(notificationIdParamSchema),
  notificationController.markAsRead
);


router.delete(
  '/:notificationId',
  validate(notificationIdParamSchema),
  notificationController.deleteNotification
);

export default router;```

## src/routes/notificationSettings.routes.js
```javascript
import { Router } from 'express';
import { notificationSettingsController } from '../controllers/notificationSettings.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { upsertNotificationSettingsSchema } from '../validation/notificationSettings.validation.js';

const router = Router();

// All notification settings routes require authentication
router.use(authenticate);


router
  .route('/')
  .get(notificationSettingsController.getMyNotificationSettings)
  .put(
    validate(upsertNotificationSettingsSchema),
    notificationSettingsController.updateMyNotificationSettings
  );

export default router;```

## src/routes/occupation.routes.js
```javascript
import { Router } from 'express';
import { occupationController } from '../controllers/occupation.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createOccupationSchema,
  updateOccupationSchema,
  occupationIdParamSchema,
} from '../validation/occupation.validation.js';

const router = Router();

// All occupation routes require authentication
router.use(authenticate, requireCompleteProfile);


router
  .route('/')
  .post(validate(createOccupationSchema), occupationController.createOccupation)
  .get(occupationController.getMyOccupations);


router
  .route('/:id')
  .put(validate(updateOccupationSchema), occupationController.updateOccupation)
  .delete(validate(occupationIdParamSchema), occupationController.deleteOccupation);

export default router;```

## src/routes/partnerPreference.routes.js
```javascript
import { Router } from 'express';
import { partnerPreferenceController } from '../controllers/partnerPreference.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { upsertPreferenceSchema } from '../validation/partnerPreference.validation.js';

const router = Router();

// All preference routes require authentication and an active profile
router.use(authenticate, requireCompleteProfile);

router
  .route('/')
  .get(partnerPreferenceController.getMyPreference)
  .put(
    validate(upsertPreferenceSchema),
    partnerPreferenceController.upsertMyPreference
  );

export default router;```

## src/routes/payment.routes.js
```javascript
import { Router } from 'express';
import { paymentController } from '../controllers/payment.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createOrderSchema,
  verifyPaymentSchema,
  paymentIdParamSchema,
} from '../validation/payment.validation.js';
const router = Router();

router.post('/webhook', paymentController.handleWebhook);

// All other routes require authentication
router.use(authenticate);

router.post(
  '/orders',
  validate(createOrderSchema),
  paymentController.createOrder
);

router.post(
  '/verify',
  validate(verifyPaymentSchema),
  paymentController.verifyPayment
);

// Upgrade existing subscription (carries over remaining days)
router.post(
  '/upgrade',
  validate(createOrderSchema), // Same validation - needs planId
  paymentController.createUpgradeOrder
);

router.get('/me', paymentController.getMyPayments);


router.get(
  '/:paymentId',
  validate(paymentIdParamSchema),
  paymentController.getPaymentById
);

export default router;```

## src/routes/photoPrivacy.routes.js
```javascript
import { Router } from 'express';
import { photoPrivacyController } from '../controllers/photoPrivacy.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { 
  updatePhotoPrivacySchema 
} from '../validation/photoPrivacy.validation.js';

const router = Router();

// All routes require authentication
router.use(authenticate);


router
  .route('/:mediaId/privacy')
  .get(
    validate(updatePhotoPrivacySchema.pick({ params: true })), // Only validate params
    photoPrivacyController.getMyPhotoSettings
  )
  .put(
    validate(updatePhotoPrivacySchema),
    photoPrivacyController.updateMyPhotoSettings
  );

export default router;```

## src/routes/photoRequest.routes.js
```javascript
import { Router } from 'express';
import { photoRequestController } from '../controllers/photoRequest.controller.js';
import { authenticate, requireCompleteProfile, requireSubscription } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createPhotoRequestSchema,
  respondPhotoRequestSchema,
  getPhotoRequestsSchema,
} from '../validation/photoRequest.validation.js';

const router = Router();

// All routes require authentication
router.use(authenticate, requireCompleteProfile);

// This specific route requires a subscription
router
  .route('/')
  .post(
    requireSubscription, // <-- Added subscription check
    validate(createPhotoRequestSchema), 
    photoRequestController.createPhotoRequest
  );

router
  .route('/sent')
  .get(validate(getPhotoRequestsSchema), photoRequestController.getSentRequests);


router
  .route('/received')
  .get(validate(getPhotoRequestsSchema), photoRequestController.getReceivedRequests);

router
  .route('/:id/respond')
  .post(validate(respondPhotoRequestSchema), photoRequestController.respondToRequest);

export default router;```

## src/routes/privacy.routes.js
```javascript
import { Router } from 'express';
import { privacyController } from '../controllers/privacy.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { 
  upsertProfilePrivacySchema,
  upsertCommunicationSettingsSchema, 
  upsertSearchVisibilitySchema,
  upsertAccountSecuritySchema, // ADDED
} from '../validation/privacy.validation.js';

const router = Router();

// All privacy routes require authentication
router.use(authenticate);


router
  .route('/profile')
  .get(privacyController.getMyProfilePrivacy)
  .put(
    validate(upsertProfilePrivacySchema),
    privacyController.updateMyProfilePrivacy
  );

router
  .route('/communication')
  .get(privacyController.getMyCommunicationSettings)
  .put(
    validate(upsertCommunicationSettingsSchema),
    privacyController.updateMyCommunicationSettings
  );


router
  .route('/search')
  .get(privacyController.getMySearchVisibilitySettings)
  .put(
    validate(upsertSearchVisibilitySchema),
    privacyController.updateMySearchVisibilitySettings
  );


router
  .route('/security')
  .get(privacyController.getMyAccountSecuritySettings)
  .put(
    validate(upsertAccountSecuritySchema),
    privacyController.updateMyAccountSecuritySettings
  );

export default router;```

## src/routes/profile.routes.js
```javascript
import { Router } from 'express';
import { profileController } from '../controllers/profile.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createProfileSchema,
  updateProfileSchema,
  searchProfilesSchema,
  objectIdSchema,
  mediaIdSchema
} from '../validation/profile.validation.js';
// ADDED: Import cache middleware for performance
import { cacheProfile, cacheMiddleware } from '../middleware/cache.middleware.js';

const router = Router();

// All routes require authentication
router.use(authenticate);


router.post('/', validate(createProfileSchema), profileController.createProfile);


router.get('/me', profileController.getMyProfile);
router.put('/me', validate(updateProfileSchema), profileController.updateMyProfile);
router.delete('/me', profileController.deleteMyProfile);


// Search profiles - cached for 5 minutes
router.get(
  '/search',
  requireCompleteProfile,
  validate(searchProfilesSchema),
  cacheMiddleware({ prefix: 'search:', ttl: 300 }),
  profileController.searchProfiles
);

router.delete(
  '/photos/:mediaId',
  validate(mediaIdSchema),
  profileController.deletePhoto
);

// Get Recommendations (Smart Algorithm)
router.get(
  '/recommendations',
  requireCompleteProfile,
  profileController.getRecommendations
);

// Get public profile by userId - cached for 5 minutes
router.get(
  '/:userId',
  requireCompleteProfile,
  validate(objectIdSchema),
  cacheProfile,
  profileController.getProfileByUserId
);

export default router;```

## src/routes/profileView.routes.js
```javascript
import { Router } from 'express';
import { profileViewController } from '../controllers/profileView.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  logProfileViewSchema,
  getProfileViewsSchema,
} from '../validation/profileView.validation.js';

const router = Router();

// All view routes require authentication and a complete profile
router.use(authenticate, requireCompleteProfile);

router
  .route('/')
  .post(validate(logProfileViewSchema), profileViewController.logProfileView);


router
  .route('/who-viewed-me')
  .get(validate(getProfileViewsSchema), profileViewController.getWhoViewedMe);


router
  .route('/my-history')
  .get(validate(getProfileViewsSchema), profileViewController.getMyViewHistory);

export default router;```

## src/routes/recommendations.routes.js
```javascript
/**
 * Recommendations Routes
 * /api/v1/recommendations/*
 */

import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
    getRecommendations,
    getSuperMatchesHandler,
    getMatchScore,
} from '../controllers/recommendations.controller.js';

const router = express.Router();

// Get daily recommendations
router.get('/', authenticate, getRecommendations);

// Get super matches (85%+)
router.get('/super-matches', authenticate, getSuperMatchesHandler);

// Get match score with specific user
router.get('/score/:userId', authenticate, getMatchScore);

export default router;
```

## src/routes/report.routes.js
```javascript
import { Router } from 'express';
import { reportController } from '../controllers/report.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { createReportSchema } from '../validation/report.validation.js';

const router = Router();

// All report routes require authentications
router.use(authenticate, requireCompleteProfile);


router
  .route('/')
  .post(validate(createReportSchema), reportController.createReport);

export default router;```

## src/routes/shortlist.routes.js
```javascript
import { Router } from 'express';
import { shortlistController } from '../controllers/shortlist.controller.js';
import { authenticate, requireCompleteProfile } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  createShortlistSchema,
  shortlistedUserIdParamSchema,
  getShortlistSchema,
} from '../validation/shortlist.validation.js';

const router = Router();

// All shortlist routes require authentication and a complete profile
router.use(authenticate, requireCompleteProfile);


router
  .route('/')
  .post(validate(createShortlistSchema), shortlistController.addToShortlist)
  .get(validate(getShortlistSchema), shortlistController.getMyShortlist);


router
  .route('/:shortlistedUserId')
  .delete(
    validate(shortlistedUserIdParamSchema),
    shortlistController.removeFromShortlist
  );

export default router;```

## src/routes/subscription.routes.js
```javascript
import { Router } from 'express';
import { subscriptionController } from '../controllers/subscription.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import { getPlansSchema } from '../validation/subscription.validation.js';
// ADDED: Import cache middleware for performance
import { cachePlans } from '../middleware/cache.middleware.js';

const router = Router();

// All plan routes require authentication
// We don't require a complete profile, as users might
// want to see plans before finishing their profile.
router.use(authenticate);

// GET /subscription-plans - cached for 1 hour (rarely changes)
router
  .route('/')
  .get(validate(getPlansSchema), cachePlans, subscriptionController.getActivePlans);

export default router;```

## src/routes/upload.routes.js
```javascript
import { Router } from 'express';
import { uploadController } from '../controllers/upload.controller.js';
import { authenticate } from '../middleware/auth.js';
import {
  uploadProfilePhoto,
  uploadProfilePhotos,
  uploadDocument,
  handleMulterError,
} from '../middleware/upload.js';

const router = Router();

// All routes require authentication
router.use(authenticate);


router.post(
  '/profile-photo',
  uploadProfilePhoto,
  handleMulterError,
  uploadController.uploadProfilePhoto
);


router.post(
  '/profile-photos',
  uploadProfilePhotos,
  handleMulterError,
  uploadController.uploadProfilePhotos
);


router.post(
  '/id-proof',
  uploadDocument,
  handleMulterError,
  uploadController.uploadIdProof
);

//
// NOTE: The generic /single, /multiple, and /delete routes have been
// removed as they were either unused or a security risk.
// File deletion is handled via DELETE /api/profiles/photos/:mediaId
//

export default router;```

## src/routes/user.routes.js
```javascript
import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  objectIdSchema,
  updateMeSchema,
  searchUsersSchema,
  registerFcmTokenSchema, // ADDED
} from '../validation/user.validation.js';

const router = Router();

// All routes require authentication
router.use(authenticate);

router.get('/me', userController.getMyProfile);
router.put('/me', validate(updateMeSchema), userController.updateMe);
router.delete('/me', userController.deleteMe);

router.post(
  '/fcm-token', // ADDED
  validate(registerFcmTokenSchema),
  userController.registerFcmToken
);

// DELETE FCM token on logout
router.delete('/me/fcm-token/:token', userController.deleteFcmToken);


router.get('/search', validate(searchUsersSchema), userController.searchUsers);


router.get('/:id', validate(objectIdSchema), userController.getUserById);

export default router;```

## src/routes/verification.routes.js
```javascript
import { Router } from 'express';
import { verificationController } from '../controllers/verification.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import {
    getVerificationsQuerySchema,
    mediaIdParamSchema,
    rejectVerificationSchema,
} from '../validation/verification.validation.js';

const router = Router();

// Note: Authentication (authenticate + requireAdmin)
// is already applied in src/routes/admin.routes.js

// Get pending document queue
router.get(
    '/pending',
    validate(getVerificationsQuerySchema),
    verificationController.getPendingVerifications
);

// Get verification statistics
router.get('/stats', verificationController.getVerificationStats);

// Get a single document for review
router.get(
    '/:mediaId',
    validate(mediaIdParamSchema),
    verificationController.getVerificationById
);

// Approve a document
router.post(
    '/:mediaId/approve',
    validate(mediaIdParamSchema),
    verificationController.approveVerification
);

// Reject a document
router.post(
    '/:mediaId/reject',
    validate(rejectVerificationSchema),
    verificationController.rejectVerification
);

// Request resubmission
router.post(
    '/:mediaId/resubmit',
    validate(rejectVerificationSchema), // Same schema - requires reason
    verificationController.requestResubmission
);

export default router;
```

## src/routes/web.routes.js
```javascript
/**
 * Web Payment Routes
 * Handles browser-based payment flow with Razorpay
 * Flow: App opens URL -> User pays -> Redirects back to app via deep link
 */

import express from 'express';
import { paymentService } from '../services/payment.service.js';
import { config } from '../config/config.js';
import prisma from '../config/database.js';
import jwt from 'jsonwebtoken';
import path from 'path';
import { authenticate as authenticateWebUser } from '../middleware/auth.js';

const router = express.Router();

// Deep link scheme for the app
const APP_DEEP_LINK = 'chhattisgarhshaadi://';
const WEBSITE_URL = 'https://www.chhattisgarhshadi.com';


/**
 * Generate a temporary payment token for web checkout
 * POST /api/v1/web/payment/create-link
 */
router.post('/payment/create-link', async (req, res) => {
    try {
        const { userId, planId } = req.body;

        if (!userId || !planId) {
            return res.status(400).json({
                success: false,
                error: 'userId and planId are required'
            });
        }

        // Create the Razorpay order using existing service
        const order = await paymentService.createOrder(userId, planId);

        // Get plan details for display
        const plan = await prisma.subscriptionPlan.findUnique({
            where: { id: planId }
        });

        // Generate a secure token for the payment session
        const paymentToken = jwt.sign(
            {
                userId,
                planId,
                orderId: order.orderId,
                paymentId: order.paymentId,
                amount: order.amount
            },
            config.JWT_ACCESS_SECRET,
            { expiresIn: '30m' } // Token valid for 30 minutes
        );

        // Generate the payment URL
        const paymentUrl = `${WEBSITE_URL}/pay?token=${paymentToken}`;

        res.json({
            success: true,
            data: {
                paymentUrl,
                orderId: order.orderId,
                amount: order.amount,
                currency: order.currency,
                planName: plan?.name,
                planDuration: plan?.duration
            }
        });

    } catch (error) {
        console.error('[Web Payment] Error creating payment link:', error);
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || 'Failed to create payment link'
        });
    }
});

/**
 * Initiate payment from web session (requires auth)
 * POST /api/v1/web/payment/initiate-session
 */
router.post('/payment/initiate-session', authenticateWebUser, async (req, res) => {
    try {
        const { planId } = req.body;
        const userId = req.user.id; // From authenticateWebUser middleware

        if (!planId) {
            return res.status(400).json({
                success: false,
                error: 'planId is required'
            });
        }

        // Create the Razorpay order
        const order = await paymentService.createOrder(userId, planId);

        // Get plan details
        const plan = await prisma.subscriptionPlan.findUnique({
            where: { id: planId }
        });

        res.json({
            success: true,
            data: {
                orderId: order.orderId,
                amount: order.amount,
                currency: order.currency,
                razorpayKey: config.RAZORPAY_KEY_ID,
                user: {
                    name: req.user.profile ? `${req.user.profile.firstName} ${req.user.profile.lastName}` : 'User',
                    email: req.user.email || '',
                    phone: req.user.phone || ''
                },
                plan: {
                    name: plan?.name,
                    duration: plan?.duration,
                    features: plan?.features || []
                }
            }
        });

    } catch (error) {
        console.error('[Web Session Payment] Error initiating payment:', error);
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || 'Failed to initiate payment'
        });
    }
});

/**
 * Get active subscription plans (Public)
 * GET /api/v1/web/payment/plans
 */
router.get('/payment/plans', async (req, res) => {
    try {
        const plans = await prisma.subscriptionPlan.findMany({
            where: { isActive: true },
            orderBy: { price: 'asc' }
        });

        res.json({
            success: true,
            data: plans
        });
    } catch (error) {
        console.error('[Web Plans] Error fetching plans:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch active plans'
        });
    }
});

/**
 * Verify token and return payment details for checkout page
 * GET /api/v1/web/payment/details?token=xxx
 */
router.get('/payment/details', async (req, res) => {
    try {
        const { token } = req.query;

        if (!token) {
            return res.status(400).json({
                success: false,
                error: 'Payment token is required'
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, config.JWT_ACCESS_SECRET);

        // Get user and plan details
        const [user, plan] = await Promise.all([
            prisma.user.findUnique({
                where: { id: decoded.userId },
                select: {
                    id: true,
                    phone: true,
                    email: true,
                    profile: {
                        select: { firstName: true, lastName: true }
                    }
                }
            }),
            prisma.subscriptionPlan.findUnique({
                where: { id: decoded.planId }
            })
        ]);

        if (!user || !plan) {
            return res.status(404).json({
                success: false,
                error: 'User or plan not found'
            });
        }

        res.json({
            success: true,
            data: {
                orderId: decoded.orderId,
                amount: decoded.amount,
                currency: 'INR',
                razorpayKey: config.RAZORPAY_KEY_ID,
                user: {
                    name: user.profile ? `${user.profile.firstName} ${user.profile.lastName}` : 'User',
                    email: user.email || '',
                    phone: user.phone || ''
                },
                plan: {
                    name: plan.name,
                    duration: plan.duration,
                    features: plan.features || []
                },
                deepLinkSuccess: `${APP_DEEP_LINK}subscription/success?orderId=${decoded.orderId}`,
                deepLinkFailure: `${APP_DEEP_LINK}subscription/failed?orderId=${decoded.orderId}`
            }
        });

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                error: 'Payment link has expired. Please try again.'
            });
        }
        console.error('[Web Payment] Error getting payment details:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get payment details'
        });
    }
});

/**
 * Handle successful payment and redirect to app
 * POST /api/v1/web/payment/success
 */
router.post('/payment/success', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Verify payment using existing service
        const result = await paymentService.verifyPayment({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        });

        if (result.success) {
            // Redirect to app with success
            const successUrl = `${APP_DEEP_LINK}subscription/success?orderId=${razorpay_order_id}&paymentId=${razorpay_payment_id}`;
            res.json({
                success: true,
                redirectUrl: successUrl
            });
        } else {
            res.status(400).json({
                success: false,
                error: 'Payment verification failed'
            });
        }

    } catch (error) {
        console.error('[Web Payment] Verification error:', error);
        res.status(500).json({
            success: false,
            error: 'Payment verification failed'
        });
    }
});

/**
 * Handle payment failure
 * POST /api/v1/web/payment/failed
 */
router.post('/payment/failed', async (req, res) => {
    const { orderId, reason } = req.body;

    const failureUrl = `${APP_DEEP_LINK}subscription/failed?orderId=${orderId}&reason=${encodeURIComponent(reason || 'Payment failed')}`;

    res.json({
        success: false,
        redirectUrl: failureUrl
    });
});

// ==================== BOOST PAYMENT ENDPOINTS ====================

import profileBoostService from '../services/profileBoost.service.js';
import { razorpayInstance, isRazorpayConfigured } from '../config/razorpay.js';
import { activateBoost, BOOST_PACKAGES } from '../services/profileBoost.service.js';
import crypto from 'crypto';


/**
 * Generate a temporary payment token for boost web checkout
 * POST /api/v1/web/boost/create-link
 */
router.post('/boost/create-link', async (req, res) => {
    try {
        const { userId, boostType } = req.body;

        if (!userId || !boostType) {
            return res.status(400).json({
                success: false,
                error: 'userId and boostType are required'
            });
        }

        if (!isRazorpayConfigured()) {
            return res.status(503).json({
                success: false,
                error: 'Payment service not configured'
            });
        }

        // Find boost package
        let boostPackage = BOOST_PACKAGES[boostType];
        if (!boostPackage && boostType) {
            const lowerType = boostType.toLowerCase();
            boostPackage = Object.values(BOOST_PACKAGES).find(p => p.id === boostType || p.id === lowerType);
        }

        if (!boostPackage) {
            return res.status(400).json({
                success: false,
                error: 'Invalid boost package'
            });
        }

        // Create Razorpay order
        const order = await razorpayInstance.orders.create({
            amount: boostPackage.price * 100,
            currency: 'INR',
            receipt: `boost_${userId}_${Date.now()}`,
            notes: {
                userId: userId.toString(),
                boostType,
                type: 'BOOST'
            }
        });

        // Generate a secure token for the payment session
        const paymentToken = jwt.sign(
            {
                userId,
                boostType,
                boostId: boostPackage.id,
                orderId: order.id,
                amount: order.amount,
                type: 'BOOST'
            },
            config.JWT_ACCESS_SECRET,
            { expiresIn: '30m' }
        );

        // Generate the payment URL
        const paymentUrl = `${WEBSITE_URL}/pay-boost?token=${paymentToken}`;

        res.json({
            success: true,
            data: {
                paymentUrl,
                orderId: order.id,
                amount: order.amount,
                currency: order.currency,
                boostName: boostPackage.name,
                boostDuration: boostPackage.durationHours
            }
        });

    } catch (error) {
        console.error('[Web Boost Payment] Error creating payment link:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to create boost payment link'
        });
    }
});

/**
 * Verify token and return boost payment details for checkout page
 * GET /api/v1/web/boost/details?token=xxx
 */
router.get('/boost/details', async (req, res) => {
    try {
        const { token } = req.query;

        if (!token) {
            return res.status(400).json({
                success: false,
                error: 'Payment token is required'
            });
        }

        const decoded = jwt.verify(token, config.JWT_ACCESS_SECRET);

        if (decoded.type !== 'BOOST') {
            return res.status(400).json({
                success: false,
                error: 'Invalid boost payment token'
            });
        }

        // Get user details
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                phone: true,
                email: true,
                profile: {
                    select: { firstName: true, lastName: true }
                }
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        // Get boost package
        const boostPackage = Object.values(BOOST_PACKAGES).find(p => p.id === decoded.boostId) || BOOST_PACKAGES[decoded.boostType];

        res.json({
            success: true,
            data: {
                orderId: decoded.orderId,
                amount: decoded.amount,
                currency: 'INR',
                razorpayKey: config.RAZORPAY_KEY_ID,
                user: {
                    name: user.profile ? `${user.profile.firstName} ${user.profile.lastName}` : 'User',
                    email: user.email || '',
                    phone: user.phone || ''
                },
                boost: {
                    id: boostPackage?.id,
                    name: boostPackage?.name,
                    duration: boostPackage?.durationHours,
                    description: boostPackage?.description
                },
                boostType: decoded.boostType,
                deepLinkSuccess: `${APP_DEEP_LINK}boost/success?orderId=${decoded.orderId}`,
                deepLinkFailure: `${APP_DEEP_LINK}boost/failed?orderId=${decoded.orderId}`
            }
        });

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                error: 'Payment link has expired. Please try again.'
            });
        }
        console.error('[Web Boost Payment] Error getting payment details:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get boost payment details'
        });
    }
});

/**
 * Handle successful boost payment and redirect to app
 * POST /api/v1/web/boost/success
 */
router.post('/boost/success', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, boostType, userId } = req.body;

        // Verify signature
        const text = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', config.RAZORPAY_KEY_SECRET)
            .update(text)
            .digest('hex');

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({
                success: false,
                error: 'Invalid payment signature'
            });
        }

        // Activate the boost
        if (userId && boostType) {
            await activateBoost(parseInt(userId), boostType, razorpay_payment_id);
        }

        const successUrl = `${APP_DEEP_LINK}boost/success?orderId=${razorpay_order_id}&paymentId=${razorpay_payment_id}`;
        res.json({
            success: true,
            redirectUrl: successUrl
        });

    } catch (error) {
        console.error('[Web Boost Payment] Verification error:', error);
        res.status(500).json({
            success: false,
            error: 'Boost payment verification failed'
        });
    }
});

export default router;

```

## src/services/activityLog.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Create an activity log entry
 */
export const createActivityLog = async ({
    userId,
    action,
    description,
    metadata,
    ipAddress,
    userAgent,
}) => {
    try {
        const log = await prisma.activityLog.create({
            data: {
                userId,
                action: action?.substring(0, 100) || 'UNKNOWN',
                description: description || '',
                metadata: metadata ? JSON.stringify(metadata) : null,
                ipAddress,
                userAgent,
            },
        });
        return log;
    } catch (error) {
        logger.error('Error creating activity log:', error);
        // Don't throw - logging should not break the main flow
        return null;
    }
};

/**
 * Get activity logs with pagination and filtering
 */
export const getActivityLogs = async ({
    page = 1,
    limit = 20,
    action,
    userId,
    startDate,
    endDate,
}) => {
    try {
        const skip = (page - 1) * limit;
        const where = {};

        if (action) {
            where.action = action;
        }

        if (userId) {
            where.userId = parseInt(userId);
        }

        if (startDate || endDate) {
            where.createdAt = {};
            if (startDate) {
                where.createdAt.gte = new Date(startDate);
            }
            if (endDate) {
                where.createdAt.lte = new Date(endDate);
            }
        }

        const [logs, total] = await Promise.all([
            prisma.activityLog.findMany({
                where,
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            profilePicture: true,
                            profile: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
                skip,
                take: limit,
            }),
            prisma.activityLog.count({ where }),
        ]);

        return {
            logs,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    } catch (error) {
        logger.error('Error fetching activity logs:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to fetch activity logs');
    }
};

/**
 * Get activity log stats
 */
export const getActivityStats = async () => {
    try {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const thisWeek = new Date(today);
        thisWeek.setDate(thisWeek.getDate() - 7);

        const [totalLogs, todayLogs, weekLogs, actionBreakdown] = await Promise.all([
            prisma.activityLog.count(),
            prisma.activityLog.count({
                where: { createdAt: { gte: today } },
            }),
            prisma.activityLog.count({
                where: { createdAt: { gte: thisWeek } },
            }),
            prisma.activityLog.groupBy({
                by: ['action'],
                _count: { id: true },
                orderBy: { _count: { id: 'desc' } },
                take: 5,
            }),
        ]);

        return {
            totalLogs,
            todayLogs,
            weekLogs,
            topActions: actionBreakdown.map(a => ({
                action: a.action,
                count: a._count.id,
            })),
        };
    } catch (error) {
        logger.error('Error fetching activity stats:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to fetch activity stats');
    }
};

/**
 * Helper to log admin actions easily
 */
export const logAdminAction = async (req, action, description, metadata = {}) => {
    const user = req.user;
    return createActivityLog({
        userId: user?.id,
        action,
        description,
        metadata,
        ipAddress: req.ip || req.connection?.remoteAddress,
        userAgent: req.headers?.['user-agent'],
    });
};

export default {
    createActivityLog,
    getActivityLogs,
    getActivityStats,
    logAdminAction,
};
```

## src/services/admin.service.js
```javascript
import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
// ADDED: Imports for new functions
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';

/**
 * Get dashboard statistics
 */
const getDashboardStats = async () => {
  try {
    const [
      totalUsers,
      totalProfiles,
      totalMatches,
      totalMessages,
      totalPayments,
      pendingReports, // ADDED
    ] = await Promise.all([
      prisma.user.count(),
      prisma.profile.count(),
      prisma.matchRequest.count(),
      prisma.message.count(),
      prisma.payment.count(), // Corrected from 'payments'
      // ADDED: Count pending reports
      prisma.report.count({ where: { status: 'PENDING' } }),
    ]);

    return {
      totalUsers,
      totalProfiles,
      totalMatches,
      totalMessages,
      totalPayments,
      pendingReports, // ADDED
    };
  } catch (error) {
    logger.error('Error in getDashboardStats:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to retrieve dashboard stats'
    );
  }
};

/**
 * Clean up expired refresh tokens
 */
const cleanupExpiredTokens = async () => {
  try {
    const result = await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
    logger.info(`Admin cleanup: ${result.count} expired tokens deleted.`);
    return result.count;
  } catch (error) {
    logger.error('Error in cleanupExpiredTokens:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to clean up tokens'
    );
  }
};

/**
 * Get recent users
 */
const getRecentUsers = async (limit = 10) => {
  try {
    return await prisma.user.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        profile: true,
      },
    });
  } catch (error) {
    logger.error('Error in getRecentUsers:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to retrieve recent users'
    );
  }
};

/**
 * Get recent matches
 */
const getRecentMatches = async (limit = 10) => {
  try {
    return await prisma.matchRequest.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        sender: {
          include: { profile: true },
        },
        receiver: {
          include: { profile: true },
        },
      },
    });
  } catch (error) {
    logger.error('Error in getRecentMatches:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to retrieve recent matches'
    );
  }
};

// --- ADDED FOR REPORTS ---

/**
 * [NEW] Get all reports (paginated, filterable)
 * @param {Object} query - Validated query params (page, limit, status)
 * @returns {Promise<Object>} Paginated list of reports
 */
const getReports = async (query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const { status } = query;

    const where = {};
    if (status) {
      where.status = status;
    }

    const [reports, total] = await Promise.all([
      prisma.report.findMany({
        where,
        skip,
        take: limit,
        include: {
          reporter: { select: { id: true, email: true, profile: { select: { firstName: true, lastName: true } } } },
          reportedUser: { select: { id: true, email: true, profile: { select: { firstName: true, lastName: true } } } },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.report.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { reports, pagination };

  } catch (error) {
    logger.error('Error in getReports:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve reports');
  }
};

/**
 * [NEW] Get a single report by ID with full details
 * @param {number} reportId - The ID of the report
 * @returns {Promise<Object>} The report object
 */
const getReportById = async (reportId) => {
  try {
    const report = await prisma.report.findUnique({
      where: { id: reportId },
      include: {
        reporter: { include: { profile: true } },
        reportedUser: { include: { profile: true } },
      },
    });

    if (!report) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Report not found');
    }

    // Parse the evidence string into an array
    let evidenceArray = [];
    if (report.evidence) {
      try {
        evidenceArray = JSON.parse(report.evidence);
      } catch (e) {
        logger.warn(`Failed to parse evidence JSON for report ${reportId}`);
      }
    }

    return { ...report, evidence: evidenceArray };
  } catch (error) {
    logger.error('Error in getReportById:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve report');
  }
};

/**
 * [NEW] Update a report's status and add notes
 * @param {number} reportId - The ID of the report
 * @param {Object} data - Validated update data (status, reviewNote, actionTaken)
 * @returns {Promise<Object>} The updated report
 */
const updateReportStatus = async (reportId, data) => {
  try {
    const report = await prisma.report.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Report not found');
    }

    const updatedReport = await prisma.report.update({
      where: { id: reportId },
      data: {
        ...data,
        reviewedAt: new Date(),
      },
    });

    // TODO: Add logic here to ban the user if status is 'RESOLVED' and action is 'BAN'
    // e.g., if (data.actionTaken === 'BAN_USER') { ... }

    logger.info(`Admin updated report ${reportId} to status ${data.status}`);
    return updatedReport;
  } catch (error) {
    logger.error('Error in updateReportStatus:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update report');
  }
};

// --- SUBSCRIPTION PLAN MANAGEMENT ---

/**
 * [NEW] Get all subscription plans
 * @returns {Promise<Array>} List of all plans
 */
const getPlans = async () => {
  try {
    const plans = await prisma.subscriptionPlan.findMany({
      orderBy: { displayOrder: 'asc' },
    });

    // Calculate effective price for each plan
    return plans.map(plan => {
      let effectivePrice = parseFloat(plan.price);

      // Check if discount is valid
      if (plan.discountPercentage > 0) {
        const isDiscountValid = !plan.discountValidUntil || new Date(plan.discountValidUntil) > new Date();
        if (isDiscountValid) {
          effectivePrice = effectivePrice * (1 - plan.discountPercentage / 100);
        }
      }

      return {
        ...plan,
        effectivePrice: Math.round(effectivePrice),
        hasActiveDiscount: plan.discountPercentage > 0 && (!plan.discountValidUntil || new Date(plan.discountValidUntil) > new Date()),
      };
    });
  } catch (error) {
    logger.error('Error in getPlans:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to retrieve plans');
  }
};

/**
 * [NEW] Update plan discount (Admin)
 * @param {number} planId - The ID of the plan
 * @param {number} discountPercentage - Discount percentage (0-100)
 * @param {string|null} discountValidUntil - Expiry date or null for no expiry
 * @returns {Promise<Object>} The updated plan
 */
const updatePlanDiscount = async (planId, discountPercentage, discountValidUntil) => {
  try {
    const plan = await prisma.subscriptionPlan.findUnique({
      where: { id: planId },
    });

    if (!plan) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Plan not found');
    }

    // Validate discount percentage
    if (discountPercentage < 0 || discountPercentage > 100) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Discount percentage must be between 0 and 100');
    }

    // Set originalPrice if not already set
    const originalPrice = plan.originalPrice || plan.price;

    const updatedPlan = await prisma.subscriptionPlan.update({
      where: { id: planId },
      data: {
        originalPrice,
        discountPercentage,
        discountValidUntil: discountValidUntil ? new Date(discountValidUntil) : null,
        // Update the actual price based on discount
        price: Math.round(parseFloat(originalPrice) * (1 - discountPercentage / 100)),
      },
    });

    logger.info(`Admin updated plan ${planId} discount to ${discountPercentage}%`);
    return updatedPlan;
  } catch (error) {
    logger.error('Error in updatePlanDiscount:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update plan discount');
  }
};

/**
 * [NEW] Update plan details (Admin)
 * @param {number} planId - The ID of the plan
 * @param {Object} data - Update data (name, description, price, durationDays, features, isActive)
 * @returns {Promise<Object>} The updated plan
 */
const updatePlan = async (planId, data) => {
  try {
    const plan = await prisma.subscriptionPlan.findUnique({
      where: { id: planId },
    });

    if (!plan) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Plan not found');
    }

    const { name, description, price, durationDays, features, isActive } = data;

    // Prepare update data
    const updateData = {};
    if (name) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (price !== undefined) {
      updateData.price = price;
      // If price changes, reset original price if discount is active, or update it
      if (!plan.originalPrice) {
        updateData.originalPrice = price; // Initial set
      }
    }
    if (durationDays) updateData.durationDays = durationDays;
    if (features) updateData.features = JSON.stringify(features);
    if (isActive !== undefined) updateData.isActive = isActive;

    const updatedPlan = await prisma.subscriptionPlan.update({
      where: { id: planId },
      data: updateData,
    });

    logger.info(`Admin updated plan ${planId}`);
    return updatedPlan;
  } catch (error) {
    logger.error('Error in updatePlan:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update plan');
  }
};

export const adminService = {
  getDashboardStats,
  cleanupExpiredTokens,
  getRecentUsers,
  getRecentMatches,
  getReports,
  getReportById,
  updateReportStatus,
  getPlans,
  updatePlanDiscount,
  updatePlan, // ADDED
};```

## src/services/agent.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';

/**
 * [Admin] Create a new agent
 * @param {Object} data - Validated agent data
 * @param {number} adminId - The ID of the admin creating the agent
 * @returns {Promise<Object>} The created agent
 */
export const createAgent = async (data, adminId) => {
  try {
    // Auto-generate agent code if not provided
    let agentCode = data.agentCode;
    if (!agentCode) {
      const prefix = 'AGT';
      const random = Math.floor(1000 + Math.random() * 9000); // 4 digit random
      const timestamp = Date.now().toString().slice(-4); // last 4 digits of timestamp
      agentCode = `${prefix}${timestamp}${random}`;
    }

    const existingAgent = await prisma.agent.findUnique({
      where: { agentCode: agentCode },
    });

    if (existingAgent) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'An agent with this code already exists');
    }

    const agent = await prisma.agent.create({
      data: {
        ...data,
        agentCode, // Use the generated or provided code
        createdBy: adminId,
      },
    });
    logger.info(`Admin ${adminId} created new agent ${agent.id}`);
    return agent;
  } catch (error) {
    logger.error('Error in createAgent:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error creating agent');
  }
};

/**
 * [Admin] Get all agents (paginated and filterable)
 * @param {Object} query - Validated query params
 * @returns {Promise<Object>} Paginated list of agents
 */
export const getAllAgents = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const { status, district, search } = query;

  const where = {
    deletedAt: null, // Don't show soft-deleted agents
  };

  if (status) where.status = status;
  if (district) where.district = { equals: district, mode: 'insensitive' };
  if (search) {
    where.OR = [
      { agentName: { contains: search, mode: 'insensitive' } },
      { agentCode: { equals: search } },
      { phone: { contains: search } },
      { email: { contains: search, mode: 'insensitive' } },
    ];
  }

  try {
    const [agents, total] = await Promise.all([
      prisma.agent.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.agent.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { agents, pagination };
  } catch (error) {
    logger.error('Error in getAllAgents:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving agents');
  }
};

/**
 * [Admin] Get a single agent by ID
 * @param {number} agentId - The agent's ID
 * @returns {Promise<Object>} The agent object
 */
export const getAgentById = async (agentId) => {
  try {
    const agent = await prisma.agent.findUnique({
      where: { id: agentId, deletedAt: null },
      include: {
        users: { take: 10, orderBy: { createdAt: 'desc' } }, // Include recent users
      }
    });

    if (!agent) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Agent not found');
    }
    return agent;
  } catch (error) {
    logger.error('Error in getAgentById:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving agent');
  }
};

/**
 * [Admin] Update an agent's details
 * @param {number} agentId - The agent's ID
 * @param {Object} data - Validated update data
 * @returns {Promise<Object>} The updated agent
 */
export const updateAgent = async (agentId, data) => {
  try {
    const agent = await prisma.agent.findUnique({ where: { id: agentId } });
    if (!agent) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Agent not found');
    }

    const updatedAgent = await prisma.agent.update({
      where: { id: agentId },
      data: {
        ...data,
        // If status is updated, also update isActive
        ...(data.status && { isActive: data.status === 'ACTIVE' }),
      },
    });

    logger.info(`Agent ${agentId} updated by admin`);
    return updatedAgent;
  } catch (error) {
    logger.error('Error in updateAgent:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating agent');
  }
};

/**
 * [Admin] Soft delete an agent
 * @param {number} agentId - The agent's ID
 * @returns {Promise<void>}
 */
export const deleteAgent = async (agentId) => {
  try {
    const agent = await prisma.agent.findUnique({ where: { id: agentId } });
    if (!agent) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Agent not found');
    }

    // Soft delete
    await prisma.agent.update({
      where: { id: agentId },
      data: {
        deletedAt: new Date(),
        isActive: false,
        status: 'TERMINATED',
        email: `${agent.email}.deleted.${Date.now()}`, // Anonymize PII
        phone: null,
      },
    });

    logger.info(`Agent ${agentId} soft-deleted by admin`);
  } catch (error) {
    logger.error('Error in deleteAgent:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting agent');
  }
};

/**
 * [Admin] Get all users registered by a specific agent
 * @param {number} agentId - The agent's ID
 * @param {Object} query - Pagination and filter params
 * @returns {Promise<Object>} Paginated list of users
 */
export const getUsersByAgent = async (agentId, query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const { isPremium } = query;

  try {
    // Verify agent exists
    const agent = await prisma.agent.findUnique({
      where: { id: agentId, deletedAt: null },
    });

    if (!agent) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Agent not found');
    }

    const where = {
      agentId: agentId,
      deletedAt: null,
    };

    // Filter by premium status if requested
    if (isPremium === 'true') {
      where.role = 'PREMIUM_USER';
    } else if (isPremium === 'false') {
      where.role = 'USER';
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        select: {
          id: true,
          email: true,
          phone: true,
          role: true,
          createdAt: true,
          referredAt: true,
          agentCodeUsed: true,
          profile: {
            select: {
              firstName: true,
              lastName: true,
              city: true,
              state: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      agent: {
        id: agent.id,
        agentCode: agent.agentCode,
        agentName: agent.agentName,
      },
      users,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getUsersByAgent:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving agent users');
  }
};

/**
 * [Admin] Get real-time statistics for an agent
 * @param {number} agentId - The agent's ID
 * @returns {Promise<Object>} Agent stats for commission calculation
 */
export const getAgentStats = async (agentId) => {
  try {
    const agent = await prisma.agent.findUnique({
      where: { id: agentId, deletedAt: null },
    });

    if (!agent) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Agent not found');
    }

    // Calculate real-time stats from database
    const [totalUsers, premiumUsers, activeUsers] = await Promise.all([
      prisma.user.count({
        where: { agentId, deletedAt: null },
      }),
      prisma.user.count({
        where: { agentId, role: 'PREMIUM_USER', deletedAt: null },
      }),
      prisma.user.count({
        where: { agentId, isActive: true, isBanned: false, deletedAt: null },
      }),
    ]);

    // Update agent stats to keep them in sync (optional but recommended)
    await prisma.agent.update({
      where: { id: agentId },
      data: {
        totalUsersAdded: totalUsers,
        premiumUsers: premiumUsers,
        activeUsers: activeUsers,
      },
    });

    return {
      agentId: agent.id,
      agentCode: agent.agentCode,
      agentName: agent.agentName,
      status: agent.status,
      stats: {
        totalUsersRegistered: totalUsers,
        premiumUsers: premiumUsers,
        activeUsers: activeUsers,
        freeUsers: totalUsers - premiumUsers,
      },
      createdAt: agent.createdAt,
    };
  } catch (error) {
    logger.error('Error in getAgentStats:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving agent stats');
  }
};

export const agentService = {
  createAgent,
  getAllAgents,
  getAgentById,
  updateAgent,
  deleteAgent,
  getUsersByAgent,
  getAgentStats,
};```

## src/services/analytics.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Get monthly revenue data for the last N months
 */
export const getRevenueAnalytics = async (months = 6) => {
    try {
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - months);
        startDate.setDate(1);
        startDate.setHours(0, 0, 0, 0);

        // Get payments grouped by month
        const payments = await prisma.payment.findMany({
            where: {
                status: 'COMPLETED',
                paidAt: {
                    gte: startDate,
                },
            },
            select: {
                amount: true,
                paidAt: true,
            },
        });

        // Group by month
        const monthlyRevenue = {};
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Initialize all months with 0
        for (let i = 0; i < months; i++) {
            const date = new Date();
            date.setMonth(date.getMonth() - (months - 1 - i));
            const key = `${date.getFullYear()}-${date.getMonth()}`;
            monthlyRevenue[key] = {
                month: monthNames[date.getMonth()],
                year: date.getFullYear(),
                revenue: 0,
            };
        }

        // Sum up payments
        payments.forEach((payment) => {
            if (payment.paidAt) {
                const key = `${payment.paidAt.getFullYear()}-${payment.paidAt.getMonth()}`;
                if (monthlyRevenue[key]) {
                    monthlyRevenue[key].revenue += parseFloat(payment.amount);
                }
            }
        });

        // Calculate total and growth
        const result = Object.values(monthlyRevenue);
        const totalRevenue = result.reduce((sum, m) => sum + m.revenue, 0);

        // Calculate growth (compare last month to previous month)
        const lastMonth = result[result.length - 1]?.revenue || 0;
        const prevMonth = result[result.length - 2]?.revenue || 0;
        const growth = prevMonth > 0 ? ((lastMonth - prevMonth) / prevMonth) * 100 : 0;

        return {
            data: result,
            totalRevenue,
            growth: Math.round(growth * 10) / 10,
        };
    } catch (error) {
        logger.error('Error in getRevenueAnalytics:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to get revenue analytics');
    }
};

/**
 * Get user signups by category
 */
export const getSignupsByCategory = async (limit = 10) => {
    try {
        // Get signups grouped by category from profiles
        const signups = await prisma.profile.groupBy({
            by: ['category'],
            _count: {
                id: true,
            },
            where: {
                category: {
                    not: null,
                },
            },
            orderBy: {
                _count: {
                    id: 'desc',
                },
            },
            take: limit,
        });

        // Get total users in last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const newUsersCount = await prisma.user.count({
            where: {
                createdAt: {
                    gte: thirtyDaysAgo,
                },
            },
        });

        // Calculate growth (compare to previous 30 days)
        const sixtyDaysAgo = new Date();
        sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

        const prevPeriodCount = await prisma.user.count({
            where: {
                createdAt: {
                    gte: sixtyDaysAgo,
                    lt: thirtyDaysAgo,
                },
            },
        });

        const growth = prevPeriodCount > 0 ? ((newUsersCount - prevPeriodCount) / prevPeriodCount) * 100 : 0;

        return {
            data: signups.map((s) => ({
                category: s.category || 'Unknown',
                users: s._count.id,
            })),
            newUsers30d: newUsersCount,
            growth: Math.round(growth * 10) / 10,
        };
    } catch (error) {
        logger.error('Error in getSignupsByCategory:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to get signup analytics');
    }
};

/**
 * Get subscription breakdown
 */
export const getSubscriptionAnalytics = async () => {
    try {
        // Get active subscriptions count
        const activeSubscriptions = await prisma.userSubscription.count({
            where: {
                status: 'ACTIVE',
                endDate: {
                    gte: new Date(),
                },
            },
        });

        // Get subscriptions by plan
        const subscriptionsByPlan = await prisma.userSubscription.groupBy({
            by: ['planId'],
            _count: {
                id: true,
            },
            where: {
                status: 'ACTIVE',
                endDate: {
                    gte: new Date(),
                },
            },
        });

        // Get plan names
        const plans = await prisma.subscriptionPlan.findMany({
            select: {
                id: true,
                name: true,
            },
        });

        const planMap = {};
        plans.forEach((p) => {
            planMap[p.id] = p.name;
        });

        // Find most popular plan
        let mostPopular = null;
        let maxCount = 0;
        subscriptionsByPlan.forEach((s) => {
            if (s._count.id > maxCount) {
                maxCount = s._count.id;
                mostPopular = planMap[s.planId] || 'Unknown';
            }
        });

        return {
            activeSubscriptions,
            mostPopularPlan: mostPopular || 'None',
            breakdown: subscriptionsByPlan.map((s) => ({
                plan: planMap[s.planId] || 'Unknown',
                count: s._count.id,
            })),
        };
    } catch (error) {
        logger.error('Error in getSubscriptionAnalytics:', error);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to get subscription analytics');
    }
};

export default {
    getRevenueAnalytics,
    getSignupsByCategory,
    getSubscriptionAnalytics,
};
```

## src/services/astrology.service.js
```javascript
/**
 * Astrology Matching Service
 * Kundli/Horoscope matching based on Ashtakoot system
 * Traditional 36 guna matching used in Hindu marriages
 */

import prisma from '../config/database.js';

// Nakshatra (Birth Star) list
const NAKSHATRAS = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
    'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
    'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
    'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati',
];

// Rashi (Moon Sign) list
const RASHIS = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];

// Ashtakoot Guna matching values
const ASHTAKOOT_MAX = {
    varna: 1,      // Caste/Spiritual
    vashya: 2,     // Dominance
    tara: 3,       // Destiny
    yoni: 4,       // Nature
    graha: 5,      // Planetary
    gana: 6,       // Temperament
    bhakoot: 7,    // Love
    nadi: 8,       // Health
};

const TOTAL_GUNAS = 36;

/**
 * Calculate Ashtakoot Guna matching score
 * @param {object} profile1 - First profile with horoscope data
 * @param {object} profile2 - Second profile with horoscope data
 * @returns {{ score: number, maxScore: number, percentage: number, breakdown: object, recommendation: string }}
 */
export const calculateGunaMatch = (profile1, profile2) => {
    // Basic validation
    if (!profile1?.nakshatra || !profile2?.nakshatra) {
        return {
            score: 0,
            maxScore: TOTAL_GUNAS,
            percentage: 0,
            breakdown: [],
            recommendation: 'Horoscope details not available',
            canMatch: null,
            manglikStatus: {
                compatible: false,
                message: 'Horoscope details incomplete'
            }
        };
    }

    const nakshatra1 = NAKSHATRAS.indexOf(profile1.nakshatra);
    const nakshatra2 = NAKSHATRAS.indexOf(profile2.nakshatra);
    const rashi1 = RASHIS.indexOf(profile1.rashi);
    const rashi2 = RASHIS.indexOf(profile2.rashi);

    // Calculate each koot
    const breakdown = {
        varna: calculateVarna(nakshatra1, nakshatra2),
        vashya: calculateVashya(rashi1, rashi2),
        tara: calculateTara(nakshatra1, nakshatra2),
        yoni: calculateYoni(nakshatra1, nakshatra2),
        graha: calculateGraha(rashi1, rashi2),
        gana: calculateGana(nakshatra1, nakshatra2),
        bhakoot: calculateBhakoot(rashi1, rashi2),
        nadi: calculateNadi(nakshatra1, nakshatra2),
    };

    const score = Object.values(breakdown).reduce((sum, val) => sum + val, 0);
    const percentage = Math.round((score / TOTAL_GUNAS) * 100);

    return {
        score,
        maxScore: TOTAL_GUNAS,
        percentage,
        breakdown: formatBreakdown(breakdown),
        recommendation: getRecommendation(score),
        canMatch: score >= 18, // Minimum 18 gunas for good match
        manglikStatus: getManglikCompatibility(profile1.manglik, profile2.manglik),
    };
};

// Individual Koot calculations (simplified versions)
const calculateVarna = (n1, n2) => {
    const varna1 = Math.floor(n1 / 7) % 4;
    const varna2 = Math.floor(n2 / 7) % 4;
    return varna1 >= varna2 ? 1 : 0;
};

const calculateVashya = (r1, r2) => {
    const vashyaGroups = [[0, 4], [1, 9], [2, 5, 10], [3, 7], [6, 11], [5, 8]];
    for (const group of vashyaGroups) {
        if (group.includes(r1) && group.includes(r2)) return 2;
    }
    return 1;
};

const calculateTara = (n1, n2) => {
    const diff = Math.abs(n2 - n1) % 9;
    const goodTaras = [1, 2, 4, 6, 8];
    return goodTaras.includes(diff) ? 3 : 1.5;
};

const calculateYoni = (n1, n2) => {
    const yoniAnimal = n => Math.floor(n / 2) % 14;
    return yoniAnimal(n1) === yoniAnimal(n2) ? 4 : 2;
};

const calculateGraha = (r1, r2) => {
    const lords = [4, 1, 2, 3, 0, 2, 1, 4, 5, 6, 6, 5]; // Planet rulers
    const l1 = lords[r1], l2 = lords[r2];
    if (l1 === l2) return 5;
    if (Math.abs(l1 - l2) <= 1) return 4;
    return 2;
};

const calculateGana = (n1, n2) => {
    const gana = n => Math.floor(n / 9) % 3; // 0=Deva, 1=Manushya, 2=Rakshasa
    const g1 = gana(n1), g2 = gana(n2);
    if (g1 === g2) return 6;
    if (g1 === 2 || g2 === 2) return 0; // Rakshasa doesn't match well
    return 3;
};

const calculateBhakoot = (r1, r2) => {
    const diff = Math.abs(r2 - r1) + 1;
    const badBhakoot = [2, 6, 8, 12];
    return badBhakoot.includes(diff) || badBhakoot.includes(13 - diff) ? 0 : 7;
};

const calculateNadi = (n1, n2) => {
    const nadi = n => Math.floor(n / 9) % 3; // 0=Aadi, 1=Madhya, 2=Antya
    return nadi(n1) !== nadi(n2) ? 8 : 0;
};

/**
 * Format breakdown for display
 */
const formatBreakdown = (breakdown) => {
    return Object.entries(breakdown).map(([koot, score]) => ({
        name: koot.charAt(0).toUpperCase() + koot.slice(1),
        score,
        maxScore: ASHTAKOOT_MAX[koot],
        percentage: Math.round((score / ASHTAKOOT_MAX[koot]) * 100),
    }));
};

/**
 * Get recommendation based on score
 */
const getRecommendation = (score) => {
    if (score >= 32) return '💚 Excellent Match! Highly recommended.';
    if (score >= 25) return '💙 Very Good Match. Proceed with confidence.';
    if (score >= 18) return '💛 Good Match. Compatible for marriage.';
    if (score >= 12) return '🧡 Average Match. Consider other factors.';
    return '❤️ Low Match. Seek astrologer advice.';
};

/**
 * Check Manglik compatibility
 */
const getManglikCompatibility = (manglik1, manglik2) => {
    if (manglik1 === null || manglik2 === null) {
        return { compatible: null, message: 'Manglik status not available' };
    }

    if (manglik1 === manglik2) {
        return { compatible: true, message: manglik1 ? 'Both are Manglik - Compatible' : 'Both are Non-Manglik - Compatible' };
    }

    return { compatible: false, message: 'One is Manglik - Seek remedy advice' };
};

/**
 * Get horoscope compatibility for two users
 */
export const getCompatibility = async (userId1, userId2) => {
    const [profile1, profile2] = await Promise.all([
        prisma.profile.findUnique({ where: { userId: userId1 } }),
        prisma.profile.findUnique({ where: { userId: userId2 } }),
    ]);

    return calculateGunaMatch(profile1, profile2);
};

/**
 * Get Nakshatra list for selection
 */
export const getNakshatras = () => NAKSHATRAS;

/**
 * Get Rashi list for selection
 */
export const getRashis = () => RASHIS;

export default {
    calculateGunaMatch,
    getCompatibility,
    getNakshatras,
    getRashis,
    NAKSHATRAS,
    RASHIS,
};
```

## src/services/audit.service.js
```javascript
/**
 * Audit Log Service
 * Tracks all critical database changes for compliance, debugging, and analytics
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

/**
 * Log a database change to the audit log
 * @param {Object} params - Audit log parameters
 * @param {string} params.tableName - Name of the table being changed
 * @param {number} params.recordId - ID of the record being changed
 * @param {string} params.action - INSERT, UPDATE, or DELETE
 * @param {Object} params.oldValues - Previous values (for UPDATE/DELETE)
 * @param {Object} params.newValues - New values (for INSERT/UPDATE)
 * @param {number} params.changedBy - User ID who made the change
 * @param {string} params.changedByType - USER, ADMIN, or SYSTEM
 * @param {Object} params.requestContext - IP, user agent, request ID
 */
export const logChange = async ({
    tableName,
    recordId,
    action,
    oldValues = null,
    newValues = null,
    changedBy = null,
    changedByType = 'USER',
    requestContext = {},
}) => {
    try {
        // Calculate changed fields for UPDATE actions
        let changedFields = null;
        if (action === 'UPDATE' && oldValues && newValues) {
            const changed = [];
            for (const key of Object.keys(newValues)) {
                if (JSON.stringify(oldValues[key]) !== JSON.stringify(newValues[key])) {
                    changed.push(key);
                }
            }
            changedFields = changed.join(', ');
        }

        await prisma.auditLog.create({
            data: {
                tableName,
                recordId,
                action,
                oldValues: oldValues ? JSON.parse(JSON.stringify(oldValues)) : null,
                newValues: newValues ? JSON.parse(JSON.stringify(newValues)) : null,
                changedFields,
                changedBy,
                changedByType,
                ipAddress: requestContext.ipAddress || null,
                userAgent: requestContext.userAgent || null,
                requestId: requestContext.requestId || null,
            },
        });

        logger.debug(`Audit: ${action} on ${tableName}:${recordId} by ${changedByType}:${changedBy}`);
    } catch (error) {
        // Don't fail the main operation if audit logging fails
        logger.error('Audit logging failed:', error);
    }
};

/**
 * Log a search for analytics
 * @param {Object} params - Search log parameters
 */
export const logSearch = async ({
    userId = null,
    searchFilters,
    resultCount,
    executionTimeMs,
    searchType = 'PROFILE',
    platform = 'MOBILE',
}) => {
    try {
        await prisma.searchLog.create({
            data: {
                userId,
                searchFilters,
                resultCount,
                executionTimeMs,
                searchType,
                platform,
            },
        });
    } catch (error) {
        logger.error('Search logging failed:', error);
    }
};

/**
 * Log database metrics for monitoring
 * @param {Object} params - Metric parameters
 */
export const logMetric = async ({
    metricName,
    metricValue,
    metricUnit,
    tableName = null,
    queryType = null,
    metadata = null,
}) => {
    try {
        await prisma.databaseMetrics.create({
            data: {
                metricName,
                metricValue,
                metricUnit,
                tableName,
                queryType,
                metadata,
            },
        });
    } catch (error) {
        logger.error('Metric logging failed:', error);
    }
};

/**
 * Log rate limit hits for security monitoring
 * @param {Object} params - Rate limit parameters
 */
export const logRateLimitHit = async ({
    userId = null,
    ipAddress,
    endpoint,
    method,
    windowStart,
    windowEnd,
}) => {
    try {
        await prisma.apiRateLimitLog.create({
            data: {
                userId,
                ipAddress,
                endpoint,
                method,
                windowStart,
                windowEnd,
            },
        });
    } catch (error) {
        logger.error('Rate limit logging failed:', error);
    }
};

/**
 * Get recent audit logs for a record
 * @param {string} tableName - Table name
 * @param {number} recordId - Record ID
 * @param {number} limit - Max records to return
 */
export const getAuditHistory = async (tableName, recordId, limit = 50) => {
    return prisma.auditLog.findMany({
        where: { tableName, recordId },
        orderBy: { changedAt: 'desc' },
        take: limit,
    });
};

/**
 * Get slow searches for optimization
 * @param {number} thresholdMs - Minimum execution time
 * @param {number} limit - Max records to return
 */
export const getSlowSearches = async (thresholdMs = 1000, limit = 100) => {
    return prisma.searchLog.findMany({
        where: {
            executionTimeMs: { gte: thresholdMs },
        },
        orderBy: { executionTimeMs: 'desc' },
        take: limit,
    });
};

/**
 * Cleanup old audit logs (retention policy)
 * @param {number} daysToKeep - Days of logs to retain
 */
export const cleanupOldLogs = async (daysToKeep = 90) => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

    const [auditDeleted, searchDeleted, metricsDeleted, rateLimitDeleted] = await Promise.all([
        prisma.auditLog.deleteMany({
            where: { changedAt: { lt: cutoffDate } },
        }),
        prisma.searchLog.deleteMany({
            where: { searchedAt: { lt: cutoffDate } },
        }),
        prisma.databaseMetrics.deleteMany({
            where: { recordedAt: { lt: cutoffDate } },
        }),
        prisma.apiRateLimitLog.deleteMany({
            where: { createdAt: { lt: cutoffDate } },
        }),
    ]);

    logger.info(`Audit cleanup: Deleted ${auditDeleted.count} audit logs, ${searchDeleted.count} search logs, ${metricsDeleted.count} metrics, ${rateLimitDeleted.count} rate limit logs`);

    return {
        auditDeleted: auditDeleted.count,
        searchDeleted: searchDeleted.count,
        metricsDeleted: metricsDeleted.count,
        rateLimitDeleted: rateLimitDeleted.count,
    };
};

export default {
    logChange,
    logSearch,
    logMetric,
    logRateLimitHit,
    getAuditHistory,
    getSlowSearches,
    cleanupOldLogs,
};
```

## src/services/auth.service.js
```javascript
import prisma from '../config/database.js';
import jwtUtils from '../utils/jwt.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

class AuthService {

  async refreshAccessToken(refreshToken, ipAddress) {
    try {
      // Verify refresh token
      const decoded = jwtUtils.verifyRefreshToken(refreshToken);

      // Check if token exists in database
      const tokenRecord = await prisma.refreshToken.findFirst({
        where: {
          token: refreshToken,
          userId: decoded.id,
          isRevoked: false,
          expiresAt: {
            gt: new Date(),
          },
        },
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      });

      if (!tokenRecord) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid or expired refresh token');
      }

      // Check if user is active
      if (!tokenRecord.user.isActive || tokenRecord.user.isBanned) {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is not active');
      }

      // Generate new tokens
      const newAccessToken = jwtUtils.generateAccessToken(tokenRecord.user);
      const newRefreshToken = jwtUtils.generateRefreshToken(tokenRecord.user);
      const newRefreshExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      // Revoke old refresh token and create new one in a transaction
      await prisma.$transaction([
        prisma.refreshToken.update({
          where: { id: tokenRecord.id },
          data: {
            isRevoked: true,
            revokedAt: new Date(),
          },
        }),
        prisma.refreshToken.create({
          data: {
            userId: tokenRecord.userId,
            token: newRefreshToken,
            deviceId: tokenRecord.deviceId,
            deviceName: tokenRecord.deviceName,
            deviceType: tokenRecord.deviceType,
            ipAddress,
            userAgent: tokenRecord.userAgent,
            expiresAt: newRefreshExpiresAt,
          },
        })
      ]);

      logger.info(`✅ Token refreshed for user ${tokenRecord.userId}`);

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };

    } catch (error) {
      logger.error('❌ Refresh token error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, error.message || 'Token refresh failed');
      }
      throw error;
    }
  }

  async logout(userId, refreshToken) {
    try {
      if (refreshToken) {
        // Revoke only the specific refresh token
        await prisma.refreshToken.updateMany({
          where: {
            userId,
            token: refreshToken,
          },
          data: {
            isRevoked: true,
            revokedAt: new Date(),
          },
        });
      } else {
        // Revoke all refresh tokens for the user (logout all devices)
        await prisma.refreshToken.updateMany({
          where: { userId },
          data: {
            isRevoked: true,
            revokedAt: new Date(),
          },
        });
      }

      logger.info(`✅ User ${userId} logged out`);
    } catch (error) {
      logger.error('❌ Logout error:', error.message);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Logout failed');
    }
  }

  /**
   * Login with Phone (Firebase Auth)
   * @param {string} firebaseIdToken - Firebase ID token
   * @param {string} ipAddress - User IP address
   * @param {Object} deviceInfo - Device information
   * @param {string} [agentCode] - Optional agent referral code
   * @returns {Promise<Object>} Auth result with user and tokens
   */
  async loginWithPhone(firebaseIdToken, ipAddress, deviceInfo = {}, agentCode = null) {
    try {
      // Import Firebase Admin SDK and helper
      const admin = (await import('firebase-admin')).default;
      const { getFirebaseApp } = await import('../config/firebase.js');

      // Ensure Firebase is initialized
      const firebaseApp = getFirebaseApp();
      if (!firebaseApp) {
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Firebase Admin SDK not initialized.');
      }

      // Verify the Firebase ID token
      const decodedToken = await admin.auth().verifyIdToken(firebaseIdToken);
      const phoneNumber = decodedToken.phone_number;

      if (!phoneNumber) {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Phone number not found in Firebase token');
      }

      // Parse country code from phone number (assuming +91 format usually)
      let countryCode = "+91";
      let localPhone = phoneNumber;
      if (phoneNumber.startsWith('+')) {
        // Extract first 3 chars as country code (e.g. +91)
        countryCode = phoneNumber.substring(0, 3);
        localPhone = phoneNumber.substring(3);
      }

      // Check if user exists by phone
      let user = await prisma.user.findFirst({
        where: {
          phone: localPhone,
          countryCode: countryCode
        },
        include: { profile: true }
      });

      let isNewUser = false;
      let agentId = null;

      if (!user) {
        // Create new user
        isNewUser = true;

        // Handle Agent Code
        if (agentCode) {
          const agent = await prisma.agent.findUnique({
            where: { agentCode: agentCode, status: 'ACTIVE' },
          });
          if (agent) {
            agentId = agent.id;
          }
        }

        // Transaction to create user
        user = await prisma.$transaction(async (tx) => {
          const newUser = await tx.user.create({
            data: {
              phone: localPhone,
              countryCode: countryCode,
              isPhoneVerified: true,
              phoneVerifiedAt: new Date(),
              authProvider: 'PHONE',
              lastLoginAt: new Date(),
              lastLoginIp: ipAddress,
              deviceInfo: JSON.stringify(deviceInfo),
              agentId: agentId,
              agentCodeUsed: agentId ? agentCode : null,
              referredAt: agentId ? new Date() : null,
            },
            include: { profile: true }
          });

          if (agentId) {
            await tx.agent.update({
              where: { id: agentId },
              data: {
                totalUsersAdded: { increment: 1 },
                activeUsers: { increment: 1 },
              },
            });
          }
          return newUser;
        });
        logger.info(`✅ New user created via Phone: ${phoneNumber}`);

      } else {
        // Update login info
        user = await prisma.user.update({
          where: { id: user.id },
          data: {
            lastLoginAt: new Date(),
            lastLoginIp: ipAddress,
            deviceInfo: JSON.stringify(deviceInfo),
            isPhoneVerified: true,
            phoneVerifiedAt: user.phoneVerifiedAt || new Date()
          },
          include: { profile: true }
        });
        logger.info(`✅ User logged in via Phone: ${phoneNumber}`);
      }

      if (user.isBanned) throw new ApiError(HTTP_STATUS.FORBIDDEN, `Account suspended: ${user.banReason}`);
      if (!user.isActive) throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Account is inactive');

      const accessToken = jwtUtils.generateAccessToken(user);
      const refreshToken = jwtUtils.generateRefreshToken(user);
      const refreshExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      await prisma.refreshToken.create({
        data: {
          userId: user.id,
          token: refreshToken,
          deviceId: deviceInfo?.deviceId || null,
          ipAddress,
          expiresAt: refreshExpiresAt,
        }
      });

      const userResponse = {
        id: user.id,
        phone: user.phone,
        firstName: user.profile?.firstName || null,
        lastName: user.profile?.lastName || null,
        profilePicture: user.profilePicture,
        role: user.role,
        isPhoneVerified: user.isPhoneVerified,
        isActive: user.isActive,
        profile: user.profile,
      };

      return {
        user: userResponse,
        accessToken,
        refreshToken,
        isNewUser
      };

    } catch (error) {
      logger.error('❌ Login with Phone error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(HTTP_STATUS.UNAUTHORIZED, error.message || 'Phone login failed');
      }
      throw error;
    }
  }

  /**
   * Verify Firebase Phone Auth Token and mark phone as verified
   */
  async verifyFirebasePhone(userId, firebaseIdToken) {
    try {
      const admin = (await import('firebase-admin')).default;
      const { getFirebaseApp } = await import('../config/firebase.js');

      const firebaseApp = getFirebaseApp();
      if (!firebaseApp) {
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Firebase Admin SDK not initialized.');
      }

      const decodedToken = await admin.auth().verifyIdToken(firebaseIdToken);
      const phoneNumber = decodedToken.phone_number;

      if (!phoneNumber) {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Phone number not found in Firebase token');
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');
      }

      const countryCode = phoneNumber.substring(0, 3);
      const localPhone = phoneNumber.substring(3);

      if (user.isPhoneVerified && user.phone === localPhone && user.countryCode === countryCode) {
        return { success: true, message: 'Phone already verified' };
      }

      const existingPhone = await prisma.user.findFirst({
        where: {
          phone: localPhone,
          countryCode: countryCode,
          isPhoneVerified: true,
          id: { not: userId },
        },
      });

      if (existingPhone) {
        throw new ApiError(HTTP_STATUS.CONFLICT, 'Phone number already registered to another account');
      }

      await prisma.user.update({
        where: { id: userId },
        data: {
          phone: localPhone,
          countryCode: countryCode,
          isPhoneVerified: true,
          phoneVerifiedAt: new Date(),
        },
      });

      logger.info(`✅ Firebase Phone verified for user ${userId}: ${phoneNumber}`);

      return { success: true, phone: phoneNumber };

    } catch (error) {
      logger.error('❌ Firebase phone verification error:', error.message);
      if (!(error instanceof ApiError)) {
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message || 'Phone verification failed');
      }
      throw error;
    }
  }
}

export default new AuthService();```

## src/services/block.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';

// Reusable select for public user data (to nest in the response)
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  profile: true, // Include the full related profile
};

/**
 * Block a user
 * @param {number} blockerId - The user initiating the block
 * @param {number} blockedId - The user being blocked
 * @param {string} [reason] - An optional reason
 * @returns {Promise<Object>} The created block entry
 */
export const blockUser = async (blockerId, blockedId, reason) => {
  if (blockerId === blockedId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'You cannot block yourself');
  }

  try {
    // Check if the user being blocked exists
    const userToBlock = await prisma.user.findUnique({
      where: { id: blockedId, isActive: true },
    });

    if (!userToBlock) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'The user you are trying to block does not exist');
    }

    // Use a transaction to create the block AND sever all ties
    const [blockEntry] = await prisma.$transaction([
      // 1. Create the block entry
      prisma.blockedUser.create({
        data: {
          blockerId,
          blockedId,
          reason: reason || null,
        },
      }),
      
      // 2. Delete any existing match requests between them (both ways)
      prisma.matchRequest.deleteMany({
        where: {
          OR: [
            { senderId: blockerId, receiverId: blockedId },
            { senderId: blockedId, receiverId: blockerId },
          ],
        },
      }),

      // 3. Delete any shortlist entries (both ways)
      prisma.shortlist.deleteMany({
        where: {
          OR: [
            { userId: blockerId, shortlistedUserId: blockedId },
            { userId: blockedId, shortlistedUserId: blockerId },
          ],
        },
      }),
    ]);

    logger.info(`User ${blockerId} blocked user ${blockedId}. Matches and shortlists cleared.`);
    return blockEntry;

  } catch (error) {
    logger.error('Error in blockUser:', error);
    if (error.code === 'P2002') { // Unique constraint violation
      throw new ApiError(HTTP_STATUS.CONFLICT, 'This user is already blocked');
    }
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error blocking user');
  }
};

/**
 * Unblock a user
 * @param {number} blockerId - The user initiating the unblock
 * @param {number} blockedId - The user being unblocked
 * @returns {Promise<void>}
 */
export const unblockUser = async (blockerId, blockedId) => {
  try {
    const result = await prisma.blockedUser.deleteMany({
      where: {
        blockerId,
        blockedId,
      },
    });

    if (result.count === 0) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found in your block list');
    }

    logger.info(`User ${blockerId} unblocked user ${blockedId}`);
  } catch (error) {
    logger.error('Error in unblockUser:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error unblocking user');
  }
};

/**
 * Get the logged-in user's list of blocked users (paginated)
 * @param {number} blockerId - The user who is requesting their list
 * @param {Object} query - Pagination query params (page, limit)
 * @returns {Promise<Object>} Paginated list of blocked user profiles
 */
export const getMyBlockedList = async (blockerId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  try {
    const where = { blockerId };

    const [blockEntries, total] = await Promise.all([
      prisma.blockedUser.findMany({
        where,
        skip,
        take: limit,
        include: {
          blocked: { // Get the full profile of the user who was blocked
            select: userPublicSelect,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.blockedUser.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    // Format the response to be a list of user profiles
    const profiles = blockEntries.map(entry => ({
      ...entry.blocked,
      blockReason: entry.reason,
      blockedAt: entry.createdAt,
    }));

    return {
      profiles,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getMyBlockedList:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving blocked list');
  }
};

/**
 * Get a set of all user IDs that the given user has blocked OR been blocked by.
 * This is a crucial helper function for other services (match, message, search).
 * @param {number} userId - The user's ID
 * @returns {Promise<Set<number>>} A Set containing all user IDs to be hidden.
 */
export const getAllBlockedUserIds = async (userId) => {
  try {
    const blocks = await prisma.blockedUser.findMany({
      where: {
        OR: [
          { blockerId: userId },
          { blockedId: userId },
        ],
      },
      select: {
        blockerId: true,
        blockedId: true,
      },
    });

    const blockedIdSet = new Set();
    for (const block of blocks) {
      if (block.blockerId === userId) {
        blockedIdSet.add(block.blockedId);
      } else {
        blockedIdSet.add(block.blockerId);
      }
    }
    
    return blockedIdSet;
  } catch (error) {
    logger.error(`Error in getAllBlockedUserIds for user ${userId}:`, error);
    // Return an empty set on error to avoid breaking other services
    return new Set();
  }
};


export const blockService = {
  blockUser,
  unblockUser,
  getMyBlockedList,
  getAllBlockedUserIds, // Exporting the helper
};```

## src/services/cache.service.js
```javascript
/**
 * Cache Service
 * Provides helper functions for Redis caching operations
 */

import { getRedisClient, isRedisConnected } from '../config/redis.js';
import { logger } from '../config/logger.js';

// Cache key prefixes for organization
const CACHE_PREFIXES = {
    PROFILE: 'profile:',
    USER: 'user:',
    PLANS: 'plans:',
    MATCHES: 'matches:',
    STATS: 'stats:',
    SESSION: 'session:',
};

// Default TTL values (in seconds)
const DEFAULT_TTL = {
    PROFILE: 300,      // 5 minutes
    USER: 600,         // 10 minutes
    PLANS: 3600,       // 1 hour (rarely changes)
    MATCHES: 600,      // 10 minutes
    STATS: 120,        // 2 minutes
    SHORT: 60,         // 1 minute
    MEDIUM: 300,       // 5 minutes
    LONG: 3600,        // 1 hour
};

/**
 * Get cached data
 * @param {string} key - Cache key
 * @returns {Promise<any|null>} Parsed data or null
 */
export const get = async (key) => {
    if (!isRedisConnected()) return null;

    try {
        const redis = getRedisClient();
        const data = await redis.get(key);

        if (data) {
            logger.debug(`Cache HIT: ${key}`);
            return JSON.parse(data);
        }

        logger.debug(`Cache MISS: ${key}`);
        return null;
    } catch (error) {
        logger.error(`Cache get error for ${key}:`, error.message);
        return null;
    }
};

/**
 * Set cached data
 * @param {string} key - Cache key
 * @param {any} value - Data to cache
 * @param {number} ttl - Time to live in seconds
 * @returns {Promise<boolean>} Success status
 */
export const set = async (key, value, ttl = DEFAULT_TTL.MEDIUM) => {
    if (!isRedisConnected()) return false;

    try {
        const redis = getRedisClient();
        await redis.setex(key, ttl, JSON.stringify(value));
        logger.debug(`Cache SET: ${key} (TTL: ${ttl}s)`);
        return true;
    } catch (error) {
        logger.error(`Cache set error for ${key}:`, error.message);
        return false;
    }
};

/**
 * Delete cached data
 * @param {string} key - Cache key
 * @returns {Promise<boolean>} Success status
 */
export const del = async (key) => {
    if (!isRedisConnected()) return false;

    try {
        const redis = getRedisClient();
        await redis.del(key);
        logger.debug(`Cache DEL: ${key}`);
        return true;
    } catch (error) {
        logger.error(`Cache del error for ${key}:`, error.message);
        return false;
    }
};

/**
 * Delete all keys matching a pattern
 * @param {string} pattern - Pattern to match (e.g., "profile:*")
 * @returns {Promise<number>} Number of deleted keys
 */
export const delByPattern = async (pattern) => {
    if (!isRedisConnected()) return 0;

    try {
        const redis = getRedisClient();
        const keys = await redis.keys(pattern);

        if (keys.length === 0) return 0;

        await redis.del(...keys);
        logger.info(`Cache DEL pattern "${pattern}": ${keys.length} keys deleted`);
        return keys.length;
    } catch (error) {
        logger.error(`Cache delByPattern error for ${pattern}:`, error.message);
        return 0;
    }
};

/**
 * Cache wrapper - Get or Set pattern
 * @param {string} key - Cache key
 * @param {Function} fetchFn - Async function to fetch data if cache miss
 * @param {number} ttl - Time to live in seconds
 * @returns {Promise<any>} Cached or fresh data
 */
export const getOrSet = async (key, fetchFn, ttl = DEFAULT_TTL.MEDIUM) => {
    // Try to get from cache
    const cached = await get(key);
    if (cached !== null) return cached;

    // Fetch fresh data
    const data = await fetchFn();

    // Cache the result
    await set(key, data, ttl);

    return data;
};

/**
 * Invalidate user-related caches when profile updates
 * @param {number} userId - User ID
 */
export const invalidateUserCache = async (userId) => {
    await delByPattern(`${CACHE_PREFIXES.PROFILE}${userId}*`);
    await delByPattern(`${CACHE_PREFIXES.USER}${userId}*`);
    await delByPattern(`${CACHE_PREFIXES.MATCHES}*${userId}*`);
    logger.info(`Cache invalidated for user: ${userId}`);
};

/**
 * Invalidate subscription plans cache
 */
export const invalidatePlansCache = async () => {
    await delByPattern(`${CACHE_PREFIXES.PLANS}*`);
    logger.info('Cache invalidated for subscription plans');
};

// Export cache key builders
export const cacheKeys = {
    profile: (userId) => `${CACHE_PREFIXES.PROFILE}${userId}`,
    profilePublic: (userId) => `${CACHE_PREFIXES.PROFILE}public:${userId}`,
    user: (userId) => `${CACHE_PREFIXES.USER}${userId}`,
    plans: () => `${CACHE_PREFIXES.PLANS}all`,
    planById: (planId) => `${CACHE_PREFIXES.PLANS}${planId}`,
    matches: (userId) => `${CACHE_PREFIXES.MATCHES}${userId}`,
    matchSuggestions: (userId, page) => `${CACHE_PREFIXES.MATCHES}suggestions:${userId}:${page}`,
    stats: (userId) => `${CACHE_PREFIXES.STATS}${userId}`,
    dashboardStats: () => `${CACHE_PREFIXES.STATS}dashboard`,
};

export const cacheService = {
    get,
    set,
    del,
    delByPattern,
    getOrSet,
    invalidateUserCache,
    invalidatePlansCache,
    cacheKeys,
    CACHE_PREFIXES,
    DEFAULT_TTL,
};

export default cacheService;
```

## src/services/contact.service.js
```javascript
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
```

## src/services/contactRequest.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, CONTACT_REQUEST_STATUS, USER_ROLES, NOTIFICATION_TYPES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import { blockService } from './block.service.js';
// ADDED: Import notification service for push notifications
import { notificationService } from './notification.service.js';

// Reusable select for public user data
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  profile: true,
};

/**
 * Create a new contact request
 * @param {number} requesterId - The user making the request
 * @param {Object} data - Validated request data
 * @returns {Promise<Object>} The created contact request
 */
export const createContactRequest = async (requesterId, data) => {
  const { profileId, requestType, message } = data;

  if (requesterId === profileId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'You cannot request your own contact info');
  }

  try {
    // 1. Check for Blocks
    const blockedIdSet = await blockService.getAllBlockedUserIds(requesterId);
    if (blockedIdSet.has(profileId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot interact with this user');
    }

    // 2. Get Requester (to check subscription) and Receiver (to check privacy)
    const [requester, receiver] = await Promise.all([
      prisma.user.findUnique({
        where: { id: requesterId },
        include: {
          subscriptions: {
            where: { status: 'ACTIVE', endDate: { gt: new Date() } },
            take: 1,
          },
        },
      }),
      prisma.user.findUnique({
        where: { id: profileId, isActive: true },
        include: { profilePrivacySettings: true }
      })
    ]);

    if (!receiver) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'The user you are requesting from does not exist');
    }

    // 3. Check if Requester is a Premium User (premium feature)
    const isPremium = requester?.subscriptions?.length > 0 ||
      requester.role === USER_ROLES.PREMIUM_USER ||
      requester.role === USER_ROLES.ADMIN;

    if (!isPremium) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Viewing contact information is a Premium feature. Upgrade to Premium to view phone and email.');
    }

    // 4. Check Receiver's privacy settings
    const privacy = receiver.profilePrivacySettings;
    if (privacy) {
      if (requestType === 'PHONE' && privacy.showPhoneNumber === 'HIDDEN') {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'This user does not accept phone requests');
      }
      if (requestType === 'EMAIL' && privacy.showEmail === 'HIDDEN') {
        throw new ApiError(HTTP_STATUS.FORBIDDEN, 'This user does not accept email requests');
      }
      // Add more checks as needed (e.g., social media)
    }

    // 5. Check for existing pending request
    const existingRequest = await prisma.contactRequest.findFirst({
      where: {
        requesterId,
        profileId,
        requestType,
        status: CONTACT_REQUEST_STATUS.PENDING,
      },
    });

    if (existingRequest) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'You already have a pending request of this type for this user');
    }

    // 6. Create the request
    const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14-day expiry
    const request = await prisma.contactRequest.create({
      data: {
        requesterId,
        profileId,
        requestType,
        message: message || null,
        status: CONTACT_REQUEST_STATUS.PENDING,
        expiresAt,
      },
    });

    // 7. Send notification to the profile owner about contact request
    const requesterName = requester?.profile?.firstName || 'Someone';
    notificationService.createNotification({
      userId: profileId,
      type: NOTIFICATION_TYPES.CONTACT_REQUEST || 'CONTACT_REQUEST',
      title: 'Contact Info Requested 📞',
      message: `${requesterName} wants to view your ${requestType.toLowerCase()} details.`,
      data: {
        type: 'CONTACT_REQUEST',
        requestId: String(request.id),
        userId: String(requesterId),
        userName: requesterName,
        requestType,
      },
    }).catch(err => logger.error('Failed to send contact request notification:', err));

    logger.info(`Contact request sent from ${requesterId} to ${profileId} for ${requestType}`);
    return request;

  } catch (error) {
    logger.error('Error in createContactRequest:', error);
    if (error instanceof ApiError) throw error;
    if (error.code === 'P2002') {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'A similar request already exists');
    }
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error creating contact request');
  }
};

/**
 * Get all contact requests sent by the user
 * @param {number} userId - The user's ID
 * @param {Object} query - Pagination and filter query
 * @returns {Promise<Object>} Paginated list of sent requests
 */
export const getSentRequests = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = {
    requesterId: userId,
    ...(query.status && { status: query.status }),
  };

  try {
    const [requests, total] = await Promise.all([
      prisma.contactRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          profile: { select: userPublicSelect }, // 'profile' is relation to User
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contactRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { requests, pagination };

  } catch (error) {
    logger.error('Error in getSentRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving sent requests');
  }
};

/**
 * Get all contact requests received by the user
 * @param {number} userId - The user's ID
 * @param {Object} query - Pagination and filter query
 * @returns {Promise<Object>} Paginated list of received requests
 */
export const getReceivedRequests = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  // Also filter out requests from users the receiver has blocked
  const blockedIdSet = await blockService.getAllBlockedUserIds(userId);

  const where = {
    profileId: userId,
    requesterId: { notIn: Array.from(blockedIdSet) },
    ...(query.status && { status: query.status }),
  };

  try {
    const [requests, total] = await Promise.all([
      prisma.contactRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          requester: { select: userPublicSelect }, // 'requester' is relation to User
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contactRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { requests, pagination };

  } catch (error) {
    logger.error('Error in getReceivedRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving received requests');
  }
};

/**
 * Respond to a contact request (Approve/Reject)
 * @param {number} userId - The user responding (must be the receiver)
 * @param {number} requestId - The ID of the contact request
 * @param {string} status - 'APPROVED' or 'REJECTED'
 * @returns {Promise<Object>} The updated contact request
 */
export const respondToRequest = async (userId, requestId, status) => {
  try {
    const request = await prisma.contactRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Contact request not found');
    }

    // Security check: Only the receiver can respond
    if (request.profileId !== userId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to respond to this request');
    }

    if (request.status !== CONTACT_REQUEST_STATUS.PENDING) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'This request has already been responded to');
    }

    const updatedRequest = await prisma.contactRequest.update({
      where: { id: requestId },
      data: {
        status,
        ...(status === CONTACT_REQUEST_STATUS.APPROVED && { approvedAt: new Date() }),
        ...(status === CONTACT_REQUEST_STATUS.REJECTED && { rejectedAt: new Date() }),
      },
    });

    // Send notification to requester about the response
    const responderName = (await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: { select: { firstName: true } } },
    }))?.profile?.firstName || 'Someone';

    const notificationType = status === CONTACT_REQUEST_STATUS.APPROVED
      ? (NOTIFICATION_TYPES.CONTACT_APPROVED || 'CONTACT_APPROVED')
      : (NOTIFICATION_TYPES.CONTACT_REJECTED || 'CONTACT_REJECTED');

    const notificationTitle = status === CONTACT_REQUEST_STATUS.APPROVED
      ? 'Contact Request Approved! ✅'
      : 'Contact Request Declined';

    const notificationMessage = status === CONTACT_REQUEST_STATUS.APPROVED
      ? `${responderName} approved your request. You can now view their contact info!`
      : `${responderName} declined your contact request.`;

    notificationService.createNotification({
      userId: request.requesterId,
      type: notificationType,
      title: notificationTitle,
      message: notificationMessage,
      data: {
        type: status === CONTACT_REQUEST_STATUS.APPROVED ? 'CONTACT_APPROVED' : 'CONTACT_REJECTED',
        requestId: String(requestId),
        userId: String(userId),
        userName: responderName,
      },
    }).catch(err => logger.error('Failed to send contact response notification:', err));

    logger.info(`Contact request ${requestId} was ${status} by user ${userId}`);
    return updatedRequest;

  } catch (error) {
    logger.error('Error in respondToRequest:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error responding to request');
  }
};

export const contactRequestService = {
  createContactRequest,
  getSentRequests,
  getReceivedRequests,
  respondToRequest,
};```

## src/services/contactVisibility.service.js
```javascript
/**
 * Contact Visibility Service
 * Controls who can see contact information
 * Only users with ACCEPTED connection requests can view contact details
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

/**
 * Check if user can view another user's contact information
 * Rules:
 * - Admin can view all
 * - Own profile can be viewed
 * - Only ACCEPTED interest/request can view contact
 * 
 * @param {number} viewerId - User trying to view contact
 * @param {number} profileOwnerId - User whose contact is being viewed
 * @returns {Promise<{canView: boolean, reason: string}>}
 */
export const canViewContactInfo = async (viewerId, profileOwnerId) => {
    // Same user - always allowed
    if (viewerId === profileOwnerId) {
        return { canView: true, reason: 'own_profile' };
    }

    try {
        // Check if viewer is admin
        const viewer = await prisma.user.findUnique({
            where: { id: viewerId },
            select: { role: true },
        });

        if (viewer?.role === 'ADMIN') {
            return { canView: true, reason: 'admin' };
        }

        // Check for ACCEPTED interest between the two users
        const acceptedInterest = await prisma.interest.findFirst({
            where: {
                OR: [
                    { senderId: viewerId, receiverId: profileOwnerId, status: 'ACCEPTED' },
                    { senderId: profileOwnerId, receiverId: viewerId, status: 'ACCEPTED' },
                ],
            },
        });

        if (acceptedInterest) {
            return { canView: true, reason: 'accepted_interest' };
        }

        // Check for direct contact request accepted
        const acceptedRequest = await prisma.contactRequest.findFirst({
            where: {
                OR: [
                    { senderId: viewerId, receiverId: profileOwnerId, status: 'ACCEPTED' },
                    { senderId: profileOwnerId, receiverId: viewerId, status: 'ACCEPTED' },
                ],
            },
        });

        if (acceptedRequest) {
            return { canView: true, reason: 'accepted_request' };
        }

        // No valid relationship found
        return { canView: false, reason: 'no_accepted_connection' };

    } catch (error) {
        logger.error('Error checking contact visibility:', error);
        return { canView: false, reason: 'error' };
    }
};

/**
 * Get contact info with visibility check and plan-based limits
 * @param {number} viewerId - User requesting contact info
 * @param {number} profileOwnerId - User whose contact is requested
 * @returns {Promise<object|null>}
 */
export const getContactInfoIfAllowed = async (viewerId, profileOwnerId) => {
    const { canView, reason } = await canViewContactInfo(viewerId, profileOwnerId);

    if (!canView) {
        return {
            allowed: false,
            reason,
            message: getVisibilityMessage(reason),
            contactInfo: null,
        };
    }

    // Check plan-based contact view limits for premium users
    const activeSubscription = await prisma.userSubscription.findFirst({
        where: {
            userId: viewerId,
            status: 'ACTIVE',
            endDate: { gt: new Date() },
        },
        include: {
            plan: true,
        },
        orderBy: { endDate: 'desc' },
    });

    // If user has a subscription with contact view limits
    if (activeSubscription && activeSubscription.plan.maxContactViews > 0) {
        const maxViews = activeSubscription.plan.maxContactViews;
        const usedViews = activeSubscription.contactViewsUsed;
        const remainingViews = maxViews - usedViews;

        // Check if user has exhausted their limit
        if (remainingViews <= 0) {
            return {
                allowed: false,
                reason: 'contact_limit_reached',
                message: `You have used all ${maxViews} contact views in your plan. Please upgrade to continue.`,
                contactInfo: null,
                remainingViews: 0,
                maxViews,
            };
        }

        // Increment usage counter
        await prisma.userSubscription.update({
            where: { id: activeSubscription.id },
            data: { contactViewsUsed: { increment: 1 } },
        });

        // Also increment profile's contactViewCount
        await prisma.profile.update({
            where: { userId: profileOwnerId },
            data: { contactViewCount: { increment: 1 } },
        });

        // Fetch contact info
        const user = await prisma.user.findUnique({
            where: { id: profileOwnerId },
            select: {
                phone: true,
                email: true,
                profile: {
                    select: {
                        alternatePhone: true,
                        whatsappNumber: true,
                    },
                },
            },
        });

        return {
            allowed: true,
            reason,
            contactInfo: {
                phone: user?.phone,
                email: user?.email,
                alternatePhone: user?.profile?.alternatePhone,
                whatsappNumber: user?.profile?.whatsappNumber,
            },
            remainingViews: remainingViews - 1,
            maxViews,
        };
    }

    // Unlimited contact views (admin, premium with no limits, or free feature)
    const user = await prisma.user.findUnique({
        where: { id: profileOwnerId },
        select: {
            phone: true,
            email: true,
            profile: {
                select: {
                    alternatePhone: true,
                    whatsappNumber: true,
                },
            },
        },
    });

    return {
        allowed: true,
        reason,
        contactInfo: {
            phone: user?.phone,
            email: user?.email,
            alternatePhone: user?.profile?.alternatePhone,
            whatsappNumber: user?.profile?.whatsappNumber,
        },
    };
};

/**
 * Get user-friendly message for visibility reason
 */
const getVisibilityMessage = (reason) => {
    const messages = {
        no_accepted_connection: 'Send an interest request for the user to accept before viewing contact details',
        error: 'Unable to check contact visibility. Please try again.',
    };
    return messages[reason] || 'Contact information is hidden';
};

/**
 * Mask contact info for non-connected users
 * Shows partial info like "98XXXXX789"
 */
export const maskContactInfo = (contactInfo) => {
    if (!contactInfo) return null;

    const maskPhone = (phone) => {
        if (!phone || phone.length < 6) return 'XXXXXXXXXX';
        return phone.slice(0, 2) + 'XXXXX' + phone.slice(-3);
    };

    const maskEmail = (email) => {
        if (!email) return null;
        const [name, domain] = email.split('@');
        if (!name || !domain) return 'xxx@xxx.com';
        return name[0] + '***@' + domain;
    };

    return {
        phone: maskPhone(contactInfo.phone),
        email: maskEmail(contactInfo.email),
        alternatePhone: contactInfo.alternatePhone ? maskPhone(contactInfo.alternatePhone) : null,
        whatsappNumber: contactInfo.whatsappNumber ? maskPhone(contactInfo.whatsappNumber) : null,
        isMasked: true,
    };
};

export default {
    canViewContactInfo,
    getContactInfoIfAllowed,
    maskContactInfo,
};
```

## src/services/education.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Get the profileId for a given userId.
 * Throws an error if the profile does not exist.
 * @param {number} userId - The user's ID
 * @returns {Promise<number>} The user's profile ID
 */
const getProfileId = async (userId) => {
  const profile = await prisma.profile.findUnique({
    where: { userId },
    select: { id: true },
  });

  if (!profile) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
  }
  return profile.id;
};

/**
 * Create a new education entry for a user
 * @param {number} userId - The user's ID
 * @param {Object} data - Validated education data
 * @returns {Promise<Object>} The created education entry
 */
export const createEducation = async (userId, data) => {
  const profileId = await getProfileId(userId);

  try {
    const education = await prisma.education.create({
      data: {
        profileId: profileId,
        ...data,
      },
    });
    logger.info(`Education entry created for user: ${userId}`);
    return education;
  } catch (error) {
    logger.error('Error in createEducation:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error adding education');
  }
};

/**
 * Get all education entries for a user
 * @param {number} userId - The user's ID
 * @returns {Promise<Array>} A list of education entries
 */
export const getMyEducation = async (userId) => {
  const profileId = await getProfileId(userId);

  try {
    return await prisma.education.findMany({
      where: { profileId },
      orderBy: {
        yearOfPassing: 'desc',
      },
    });
  } catch (error) {
    logger.error('Error in getMyEducation:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving education');
  }
};

/**
 * Update a specific education entry
 * @param {number} userId - The user's ID
 * @param {number} educationId - The ID of the education entry to update
 * @param {Object} data - Validated update data
 * @returns {Promise<Object>} The updated education entry
 */
export const updateEducation = async (userId, educationId, data) => {
  const profileId = await getProfileId(userId);

  try {
    const education = await prisma.education.findUnique({
      where: { id: educationId },
    });

    if (!education) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Education entry not found');
    }

    // Security Check: Ensure the user owns this education entry
    if (education.profileId !== profileId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to update this entry');
    }

    const updatedEducation = await prisma.education.update({
      where: { id: educationId },
      data: data,
    });
    
    logger.info(`Education entry ${educationId} updated for user: ${userId}`);
    return updatedEducation;
  } catch (error) {
    logger.error('Error in updateEducation:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating education');
  }
};

/**
 * Delete a specific education entry
 * @param {number} userId - The user's ID
 * @param {number} educationId - The ID of the education entry to delete
 * @returns {Promise<void>}
 */
export const deleteEducation = async (userId, educationId) => {
  const profileId = await getProfileId(userId);

  try {
    const education = await prisma.education.findUnique({
      where: { id: educationId },
    });

    if (!education) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Education entry not found');
    }

    // Security Check: Ensure the user owns this education entry
    if (education.profileId !== profileId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to delete this entry');
    }

    await prisma.education.delete({
      where: { id: educationId },
    });

    logger.info(`Education entry ${educationId} deleted for user: ${userId}`);
  } catch (error) {
    logger.error('Error in deleteEducation:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting education');
  }
};

export const educationService = {
  createEducation,
  getMyEducation,
  updateEducation,
  deleteEducation,
};```

## src/services/email.service.js
```javascript
import { logger } from '../config/logger.js';

/**
 * Email service
 * Note: This is a placeholder implementation. In production, you should
 * integrate with an email service provider like SendGrid, AWS SES, or Nodemailer
 */

/**
 * Send email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} text - Email text content
 * @param {string} html - Email HTML content
 * @returns {Promise<Object>}
 */
export const sendEmail = async (to, subject, text, _html = null) => { 
  try {
    // Placeholder implementation
    // In production, integrate with email service provider
    
    logger.info(`Email would be sent to ${to} with subject: ${subject}`);
    logger.debug(`Email content: ${text}`);

    return {
      success: true,
      message: 'Email sent successfully',
    };
  } catch (error) {
    logger.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Send welcome email
 * @param {string} email - User email
 * @param {string} name - User name
 * @returns {Promise<Object>}
 */
export const sendWelcomeEmail = async (email, name) => {
  const subject = 'Welcome to Chhattisgarh Shadi!';
  const text = `
    Dear ${name},
    
    Welcome to Chhattisgarh Shadi - your trusted matrimonial platform!
    
    We're excited to have you on board. Start exploring profiles and find your perfect match.
    
    Best regards,
    Chhattisgarh Shadi Team
  `;

  return await sendEmail(email, subject, text);
};

/**
 * Send match notification email
 * @param {string} email - User email
 * @param {string} matchName - Name of person who sent match request
 * @returns {Promise<Object>}
 */
export const sendMatchNotificationEmail = async (email, matchName) => {
  const subject = 'New Match Request on Chhattisgarh Shadi';
  const text = `
    You have received a new match request from ${matchName}.
    
    Login to your account to view their profile and respond to the request.
    
    Best regards,
    Chhattisgarh Shadi Team
  `;

  return await sendEmail(email, subject, text);
};

/**
 * Send message notification email
 * @param {string} email - User email
 * @param {string} senderName - Name of message sender
 * @returns {Promise<Object>}
 */
export const sendMessageNotificationEmail = async (email, senderName) => {
  const subject = 'New Message on Chhattisgarh Shadi';
  const text = `
    You have received a new message from ${senderName}.
    
    Login to your account to view and reply to the message.
    
    Best regards,
    Chhattisgarh Shadi Team
  `;

  return await sendEmail(email, subject, text);
};

/**
 * Send subscription expiry reminder
 * @param {string} email - User email
 * @param {string} name - User name
 * @param {Date} expiryDate - Subscription expiry date
 * @returns {Promise<Object>}
 */
export const sendSubscriptionExpiryReminder = async (email, name, expiryDate) => {
  const subject = 'Your Subscription is Expiring Soon';
  const text = `
    Dear ${name},
    
    Your premium subscription will expire on ${expiryDate.toLocaleDateString()}.
    
    Renew your subscription to continue enjoying premium features.
    
    Best regards,
    Chhattisgarh Shadi Team
  `;

  return await sendEmail(email, subject, text);
};

/**
 * Send payment success email
 * @param {string} email - User email
 * @param {string} name - User name
 * @param {number} amount - Payment amount
 * @param {string} orderId - Order ID
 * @returns {Promise<Object>}
 */
export const sendPaymentSuccessEmail = async (email, name, amount, orderId) => {
  const subject = 'Payment Successful - Chhattisgarh Shadi';
  const text = `
    Dear ${name},
    
    Your payment of ₹${amount} has been successfully processed.
    
    Order ID: ${orderId}
    
    Thank you for your payment!
    
    Best regards,
    Chhattisgarh Shadi Team
  `;

  return await sendEmail(email, subject, text);
};

/**
 * Send payment failed email
 * @param {string} email - User email
 * @param {string} name - User name
 * @param {number} amount - Payment amount
 * @param {string} orderId - Order ID
 * @returns {Promise<Object>}
 */
export const sendPaymentFailedEmail = async (email, name, amount, orderId) => {
  const subject = 'Payment Failed - Chhattisgarh Shadi';
  const text = `
    Dear ${name},
    
    Unfortunately, your payment of ₹${amount} has failed.
    
    Order ID: ${orderId}
    
    Please try again or contact support if the issue persists.
    
    Best regards,
    Chhattisgarh Shadi Team
  `;

  return await sendEmail(email, subject, text);
};

export const emailService = {
  sendEmail,
  sendWelcomeEmail,
  sendMatchNotificationEmail,
  sendMessageNotificationEmail,
  sendSubscriptionExpiryReminder,
  sendPaymentSuccessEmail,
  sendPaymentFailedEmail,
};
```

## src/services/fcmTokenCleanup.service.js
```javascript
import cron from 'node-cron';
import { notificationService } from './notification.service.js';
import { logger } from '../config/logger.js';

/**
 * Initialize FCM Token Cleanup Cron Job
 * Schedule: Daily at 2:00 AM
 */
export const initFcmTokenCleanup = () => {
    logger.info('Initializing FCM Token Cleanup Job (Daily at 2:00 AM)');

    // Schedule task to run at 2:00 AM every day
    // Cron syntax: minute hour day-of-month month day-of-week
    cron.schedule('0 2 * * *', async () => {
        logger.info('⏰ Running scheduled FCM token cleanup...');
        try {
            const removedCount = await notificationService.cleanupStaleTokens();
            logger.info(`✅ Scheduled FCM cleanup complete. Removed ${removedCount} stale tokens.`);
        } catch (error) {
            logger.error('❌ Scheduled FCM cleanup failed:', error);
        }
    });
};
```

## src/services/horoscope.service.js
```javascript
/**
 * Horoscope Matching Service - Ashtakoot Guna Milan
 * 
 * The Ashtakoot system evaluates 8 aspects (Kootas) for marriage compatibility.
 * Maximum score: 36 Gunas
 * 
 * Score Interpretation:
 * - 0-17: Not recommended
 * - 18-24: Average match, proceed with caution
 * - 25-32: Good match
 * - 33-36: Excellent match
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

// ============================================
// CONSTANTS - Nakshatra and Rashi Mappings
// ============================================

// 27 Nakshatras in order
const NAKSHATRAS = [
    'ASHWINI', 'BHARANI', 'KRITTIKA', 'ROHINI', 'MRIGASHIRA', 'ARDRA',
    'PUNARVASU', 'PUSHYA', 'ASHLESHA', 'MAGHA', 'PURVA_PHALGUNI', 'UTTARA_PHALGUNI',
    'HASTA', 'CHITRA', 'SWATI', 'VISHAKHA', 'ANURADHA', 'JYESHTHA',
    'MULA', 'PURVA_ASHADHA', 'UTTARA_ASHADHA', 'SHRAVANA', 'DHANISHTA', 'SHATABHISHA',
    'PURVA_BHADRAPADA', 'UTTARA_BHADRAPADA', 'REVATI'
];

// 12 Rashis (Zodiac Signs) in order
const RASHIS = [
    'ARIES', 'TAURUS', 'GEMINI', 'CANCER', 'LEO', 'VIRGO',
    'LIBRA', 'SCORPIO', 'SAGITTARIUS', 'CAPRICORN', 'AQUARIUS', 'PISCES'
];

// Nakshatra to Rashi mapping (each nakshatra belongs to a rashi)
const NAKSHATRA_TO_RASHI = {
    ASHWINI: 'ARIES', BHARANI: 'ARIES', KRITTIKA: 'ARIES',
    ROHINI: 'TAURUS', MRIGASHIRA: 'TAURUS',
    ARDRA: 'GEMINI', PUNARVASU: 'GEMINI',
    PUSHYA: 'CANCER', ASHLESHA: 'CANCER',
    MAGHA: 'LEO', PURVA_PHALGUNI: 'LEO',
    UTTARA_PHALGUNI: 'VIRGO', HASTA: 'VIRGO', CHITRA: 'VIRGO',
    SWATI: 'LIBRA', VISHAKHA: 'LIBRA',
    ANURADHA: 'SCORPIO', JYESHTHA: 'SCORPIO',
    MULA: 'SAGITTARIUS', PURVA_ASHADHA: 'SAGITTARIUS',
    UTTARA_ASHADHA: 'CAPRICORN', SHRAVANA: 'CAPRICORN',
    DHANISHTA: 'AQUARIUS', SHATABHISHA: 'AQUARIUS',
    PURVA_BHADRAPADA: 'PISCES', UTTARA_BHADRAPADA: 'PISCES', REVATI: 'PISCES'
};

// Nakshatra to Yoni (Animal) mapping
const NAKSHATRA_TO_YONI = {
    ASHWINI: 'HORSE', SHATABHISHA: 'HORSE',
    BHARANI: 'ELEPHANT', REVATI: 'ELEPHANT',
    KRITTIKA: 'GOAT', PUSHYA: 'GOAT',
    ROHINI: 'SERPENT', MRIGASHIRA: 'SERPENT',
    ARDRA: 'DOG', MULA: 'DOG',
    PUNARVASU: 'CAT', ASHLESHA: 'CAT',
    MAGHA: 'RAT', PURVA_PHALGUNI: 'RAT',
    UTTARA_PHALGUNI: 'COW', UTTARA_BHADRAPADA: 'COW',
    HASTA: 'BUFFALO', SWATI: 'BUFFALO',
    CHITRA: 'TIGER', VISHAKHA: 'TIGER',
    ANURADHA: 'DEER', JYESHTHA: 'DEER',
    PURVA_ASHADHA: 'MONKEY', SHRAVANA: 'MONKEY',
    UTTARA_ASHADHA: 'MONGOOSE', DHANISHTA: 'LION',
    PURVA_BHADRAPADA: 'LION'
};

// Yoni compatibility matrix (0-4 points)
const YONI_COMPATIBILITY = {
    HORSE: { HORSE: 4, ELEPHANT: 2, GOAT: 2, SERPENT: 3, DOG: 2, CAT: 2, RAT: 2, COW: 1, BUFFALO: 0, TIGER: 1, DEER: 3, MONKEY: 2, MONGOOSE: 2, LION: 1 },
    // Simplified - same animal = 4, friendly = 3, neutral = 2, enemy = 0-1
};

// Nadi mapping (3 types)
const NAKSHATRA_TO_NADI = {
    ASHWINI: 'VATA', ARDRA: 'VATA', PUNARVASU: 'VATA', UTTARA_PHALGUNI: 'VATA',
    HASTA: 'VATA', JYESHTHA: 'VATA', MULA: 'VATA', SHATABHISHA: 'VATA', PURVA_BHADRAPADA: 'VATA',

    BHARANI: 'PITTA', MRIGASHIRA: 'PITTA', PUSHYA: 'PITTA', PURVA_PHALGUNI: 'PITTA',
    CHITRA: 'PITTA', ANURADHA: 'PITTA', PURVA_ASHADHA: 'PITTA', DHANISHTA: 'PITTA', UTTARA_BHADRAPADA: 'PITTA',

    KRITTIKA: 'KAPHA', ROHINI: 'KAPHA', ASHLESHA: 'KAPHA', MAGHA: 'KAPHA',
    SWATI: 'KAPHA', VISHAKHA: 'KAPHA', UTTARA_ASHADHA: 'KAPHA', SHRAVANA: 'KAPHA', REVATI: 'KAPHA'
};

// Gana (Temperament) mapping
const NAKSHATRA_TO_GANA = {
    ASHWINI: 'DEVA', MRIGASHIRA: 'DEVA', PUNARVASU: 'DEVA', PUSHYA: 'DEVA',
    HASTA: 'DEVA', SWATI: 'DEVA', ANURADHA: 'DEVA', SHRAVANA: 'DEVA', REVATI: 'DEVA',

    BHARANI: 'MANUSHYA', ROHINI: 'MANUSHYA', ARDRA: 'MANUSHYA', PURVA_PHALGUNI: 'MANUSHYA',
    UTTARA_PHALGUNI: 'MANUSHYA', PURVA_ASHADHA: 'MANUSHYA', UTTARA_ASHADHA: 'MANUSHYA',
    PURVA_BHADRAPADA: 'MANUSHYA', UTTARA_BHADRAPADA: 'MANUSHYA',

    KRITTIKA: 'RAKSHASA', ASHLESHA: 'RAKSHASA', MAGHA: 'RAKSHASA', CHITRA: 'RAKSHASA',
    VISHAKHA: 'RAKSHASA', JYESHTHA: 'RAKSHASA', MULA: 'RAKSHASA', DHANISHTA: 'RAKSHASA', SHATABHISHA: 'RAKSHASA'
};

// ============================================
// KOOTA CALCULATION FUNCTIONS
// ============================================

/**
 * 1. Varna Koota (1 point) - Spiritual compatibility
 */
const calculateVarna = (rashi1, rashi2) => {
    const varnaOrder = {
        'BRAHMIN': ['CANCER', 'SCORPIO', 'PISCES'],
        'KSHATRIYA': ['ARIES', 'LEO', 'SAGITTARIUS'],
        'VAISHYA': ['TAURUS', 'VIRGO', 'CAPRICORN'],
        'SHUDRA': ['GEMINI', 'LIBRA', 'AQUARIUS']
    };

    const getVarnaRank = (rashi) => {
        if (varnaOrder.BRAHMIN.includes(rashi)) return 4;
        if (varnaOrder.KSHATRIYA.includes(rashi)) return 3;
        if (varnaOrder.VAISHYA.includes(rashi)) return 2;
        if (varnaOrder.SHUDRA.includes(rashi)) return 1;
        return 0;
    };

    const rank1 = getVarnaRank(rashi1);
    const rank2 = getVarnaRank(rashi2);

    // Bride's varna should be equal or lower than groom's
    return rank2 >= rank1 ? 1 : 0;
};

/**
 * 2. Vashya Koota (2 points) - Mutual attraction/control
 */
const calculateVashya = (rashi1, rashi2) => {
    const vashyaGroups = {
        'QUADRUPED': ['ARIES', 'TAURUS', 'LEO', 'SAGITTARIUS', 'CAPRICORN'],
        'HUMAN': ['GEMINI', 'VIRGO', 'LIBRA', 'AQUARIUS'],
        'WATER': ['CANCER', 'PISCES'],
        'INSECT': ['SCORPIO']
    };

    const getGroup = (rashi) => {
        for (const [group, rashis] of Object.entries(vashyaGroups)) {
            if (rashis.includes(rashi)) return group;
        }
        return null;
    };

    const group1 = getGroup(rashi1);
    const group2 = getGroup(rashi2);

    if (group1 === group2) return 2;
    if ((group1 === 'QUADRUPED' && group2 === 'HUMAN') ||
        (group1 === 'HUMAN' && group2 === 'QUADRUPED')) return 1;
    return 0;
};

/**
 * 3. Tara Koota (3 points) - Birth star compatibility
 */
const calculateTara = (nakshatra1, nakshatra2) => {
    const idx1 = NAKSHATRAS.indexOf(nakshatra1.toUpperCase());
    const idx2 = NAKSHATRAS.indexOf(nakshatra2.toUpperCase());

    if (idx1 === -1 || idx2 === -1) return 0;

    const diff = ((idx2 - idx1 + 27) % 27) + 1;
    const tara = diff % 9;

    // Auspicious taras: 1, 2, 4, 6, 8 = 3 points; others = 0
    const auspiciousTaras = [1, 2, 4, 6, 8, 0]; // 0 = 9th
    return auspiciousTaras.includes(tara) ? 3 : 0;
};

/**
 * 4. Yoni Koota (4 points) - Physical/sexual compatibility
 */
const calculateYoni = (nakshatra1, nakshatra2) => {
    const yoni1 = NAKSHATRA_TO_YONI[nakshatra1.toUpperCase()];
    const yoni2 = NAKSHATRA_TO_YONI[nakshatra2.toUpperCase()];

    if (!yoni1 || !yoni2) return 0;

    if (yoni1 === yoni2) return 4;

    // Enemies get 0, friends get 3, neutral get 2
    const enemies = {
        'COW': 'TIGER', 'TIGER': 'COW',
        'RAT': 'CAT', 'CAT': 'RAT',
        'HORSE': 'BUFFALO', 'BUFFALO': 'HORSE',
        'DOG': 'DEER', 'DEER': 'DOG',
        'SERPENT': 'MONGOOSE', 'MONGOOSE': 'SERPENT',
        'MONKEY': 'GOAT', 'GOAT': 'MONKEY',
        'LION': 'ELEPHANT', 'ELEPHANT': 'LION'
    };

    if (enemies[yoni1] === yoni2) return 0;
    return 2; // Neutral
};

/**
 * 5. Graha Maitri Koota (5 points) - Mental compatibility
 */
const calculateGrahaMaitri = (rashi1, rashi2) => {
    const lords = {
        'ARIES': 'MARS', 'SCORPIO': 'MARS',
        'TAURUS': 'VENUS', 'LIBRA': 'VENUS',
        'GEMINI': 'MERCURY', 'VIRGO': 'MERCURY',
        'CANCER': 'MOON',
        'LEO': 'SUN',
        'SAGITTARIUS': 'JUPITER', 'PISCES': 'JUPITER',
        'CAPRICORN': 'SATURN', 'AQUARIUS': 'SATURN'
    };

    const friendship = {
        'SUN': { friends: ['MOON', 'MARS', 'JUPITER'], enemies: ['VENUS', 'SATURN'] },
        'MOON': { friends: ['SUN', 'MERCURY'], enemies: [] },
        'MARS': { friends: ['SUN', 'MOON', 'JUPITER'], enemies: ['MERCURY'] },
        'MERCURY': { friends: ['SUN', 'VENUS'], enemies: ['MOON'] },
        'JUPITER': { friends: ['SUN', 'MOON', 'MARS'], enemies: ['MERCURY', 'VENUS'] },
        'VENUS': { friends: ['MERCURY', 'SATURN'], enemies: ['SUN', 'MOON'] },
        'SATURN': { friends: ['MERCURY', 'VENUS'], enemies: ['SUN', 'MOON', 'MARS'] }
    };

    const lord1 = lords[rashi1];
    const lord2 = lords[rashi2];

    if (!lord1 || !lord2) return 0;
    if (lord1 === lord2) return 5;

    const isFriend1 = friendship[lord1]?.friends?.includes(lord2);
    const isFriend2 = friendship[lord2]?.friends?.includes(lord1);
    const isEnemy1 = friendship[lord1]?.enemies?.includes(lord2);
    const isEnemy2 = friendship[lord2]?.enemies?.includes(lord1);

    if (isFriend1 && isFriend2) return 5;
    if (isFriend1 || isFriend2) return 4;
    if (isEnemy1 && isEnemy2) return 0;
    if (isEnemy1 || isEnemy2) return 1;
    return 3; // Neutral
};

/**
 * 6. Gana Koota (6 points) - Temperament matching
 */
const calculateGana = (nakshatra1, nakshatra2) => {
    const gana1 = NAKSHATRA_TO_GANA[nakshatra1.toUpperCase()];
    const gana2 = NAKSHATRA_TO_GANA[nakshatra2.toUpperCase()];

    if (!gana1 || !gana2) return 0;

    if (gana1 === gana2) return 6;
    if ((gana1 === 'DEVA' && gana2 === 'MANUSHYA') ||
        (gana1 === 'MANUSHYA' && gana2 === 'DEVA')) return 5;
    if ((gana1 === 'MANUSHYA' && gana2 === 'RAKSHASA') ||
        (gana1 === 'RAKSHASA' && gana2 === 'MANUSHYA')) return 1;
    return 0; // Deva-Rakshasa = 0
};

/**
 * 7. Bhakoot Koota (7 points) - Family welfare & prosperity
 */
const calculateBhakoot = (rashi1, rashi2) => {
    const idx1 = RASHIS.indexOf(rashi1);
    const idx2 = RASHIS.indexOf(rashi2);

    if (idx1 === -1 || idx2 === -1) return 0;

    const diff = Math.abs(idx2 - idx1);

    // Inauspicious combinations: 2-12, 5-9, 6-8
    const inauspicious = [1, 11, 4, 8, 5, 7]; // 0-indexed

    if (inauspicious.includes(diff)) return 0;
    return 7;
};

/**
 * 8. Nadi Koota (8 points) - Health & genetic compatibility
 * MOST IMPORTANT - same nadi = Nadi Dosha
 */
const calculateNadi = (nakshatra1, nakshatra2) => {
    const nadi1 = NAKSHATRA_TO_NADI[nakshatra1.toUpperCase()];
    const nadi2 = NAKSHATRA_TO_NADI[nakshatra2.toUpperCase()];

    if (!nadi1 || !nadi2) return 0;

    // Same Nadi = Nadi Dosha = 0 points (serious concern)
    if (nadi1 === nadi2) return 0;
    return 8;
};

// ============================================
// MAIN SERVICE FUNCTIONS
// ============================================

/**
 * Calculate Guna Milan score between two profiles
 * @param {number} profileId1 - First profile ID (typically male)
 * @param {number} profileId2 - Second profile ID (typically female)
 * @returns {Promise<Object>} Detailed compatibility report
 */
export const calculateGunaScore = async (profileId1, profileId2) => {
    try {
        // Fetch both profiles
        const [profile1, profile2] = await Promise.all([
            prisma.profile.findUnique({
                where: { id: profileId1 },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    gender: true,
                    rashi: true,
                    nakshatra: true,
                    manglik: true,
                    dateOfBirth: true,
                },
            }),
            prisma.profile.findUnique({
                where: { id: profileId2 },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    gender: true,
                    rashi: true,
                    nakshatra: true,
                    manglik: true,
                    dateOfBirth: true,
                },
            }),
        ]);

        if (!profile1 || !profile2) {
            throw new ApiError(HTTP_STATUS.NOT_FOUND, 'One or both profiles not found');
        }

        // Check if horoscope data is available
        const hasHoroscopeData1 = profile1.rashi && profile1.nakshatra;
        const hasHoroscopeData2 = profile2.rashi && profile2.nakshatra;

        if (!hasHoroscopeData1 || !hasHoroscopeData2) {
            return {
                canCalculate: false,
                message: 'Horoscope data (Rashi and Nakshatra) is required for both profiles',
                missingData: {
                    profile1: !hasHoroscopeData1 ? ['rashi', 'nakshatra'] : [],
                    profile2: !hasHoroscopeData2 ? ['rashi', 'nakshatra'] : [],
                },
            };
        }

        const rashi1 = profile1.rashi.toUpperCase();
        const rashi2 = profile2.rashi.toUpperCase();
        const nakshatra1 = profile1.nakshatra.toUpperCase().replace(/\s+/g, '_');
        const nakshatra2 = profile2.nakshatra.toUpperCase().replace(/\s+/g, '_');

        // Calculate all 8 Kootas
        const kootas = {
            varna: { score: calculateVarna(rashi1, rashi2), maxScore: 1, name: 'Varna' },
            vashya: { score: calculateVashya(rashi1, rashi2), maxScore: 2, name: 'Vashya' },
            tara: { score: calculateTara(nakshatra1, nakshatra2), maxScore: 3, name: 'Tara' },
            yoni: { score: calculateYoni(nakshatra1, nakshatra2), maxScore: 4, name: 'Yoni' },
            grahaMaitri: { score: calculateGrahaMaitri(rashi1, rashi2), maxScore: 5, name: 'Graha Maitri' },
            gana: { score: calculateGana(nakshatra1, nakshatra2), maxScore: 6, name: 'Gana' },
            bhakoot: { score: calculateBhakoot(rashi1, rashi2), maxScore: 7, name: 'Bhakoot' },
            nadi: { score: calculateNadi(nakshatra1, nakshatra2), maxScore: 8, name: 'Nadi' },
        };

        // Calculate total score
        const totalScore = Object.values(kootas).reduce((sum, k) => sum + k.score, 0);
        const maxScore = 36;
        const percentage = Math.round((totalScore / maxScore) * 100);

        // Determine compatibility level
        let compatibilityLevel;
        let recommendation;
        if (totalScore >= 33) {
            compatibilityLevel = 'EXCELLENT';
            recommendation = 'Highly compatible match. Proceed with confidence.';
        } else if (totalScore >= 25) {
            compatibilityLevel = 'GOOD';
            recommendation = 'Good compatibility. A favorable match.';
        } else if (totalScore >= 18) {
            compatibilityLevel = 'AVERAGE';
            recommendation = 'Average compatibility. Consider other factors.';
        } else {
            compatibilityLevel = 'LOW';
            recommendation = 'Low compatibility. Careful consideration advised.';
        }

        // Check for Doshas
        const doshas = [];
        if (kootas.nadi.score === 0) {
            doshas.push({
                type: 'NADI_DOSHA',
                severity: 'HIGH',
                description: 'Same Nadi detected. This may indicate health concerns for offspring.',
            });
        }

        // Check Manglik compatibility
        if (profile1.manglik !== profile2.manglik && (profile1.manglik || profile2.manglik)) {
            doshas.push({
                type: 'MANGLIK_DOSHA',
                severity: 'MEDIUM',
                description: 'One partner is Manglik while the other is not. Remedies may be needed.',
            });
        }

        logger.info(`Guna Milan calculated: ${profile1.id} ↔ ${profile2.id} = ${totalScore}/36`);

        return {
            canCalculate: true,
            profiles: {
                profile1: {
                    id: profile1.id,
                    name: `${profile1.firstName} ${profile1.lastName || ''}`.trim(),
                    rashi: profile1.rashi,
                    nakshatra: profile1.nakshatra,
                    manglik: profile1.manglik,
                },
                profile2: {
                    id: profile2.id,
                    name: `${profile2.firstName} ${profile2.lastName || ''}`.trim(),
                    rashi: profile2.rashi,
                    nakshatra: profile2.nakshatra,
                    manglik: profile2.manglik,
                },
            },
            result: {
                totalScore,
                maxScore,
                percentage,
                compatibilityLevel,
                recommendation,
            },
            kootas,
            doshas,
        };
    } catch (error) {
        logger.error('Error in calculateGunaScore:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error calculating horoscope compatibility'
        );
    }
};

/**
 * Get horoscope match for current user with another profile
 * @param {number} userId - Current user's ID
 * @param {number} targetProfileId - Target profile ID to match against
 * @returns {Promise<Object>} Compatibility result
 */
export const getHoroscopeMatch = async (userId, targetProfileId) => {
    try {
        // Get current user's profile
        const currentProfile = await prisma.profile.findUnique({
            where: { userId },
            select: { id: true },
        });

        if (!currentProfile) {
            throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Your profile not found');
        }

        return await calculateGunaScore(currentProfile.id, targetProfileId);
    } catch (error) {
        logger.error('Error in getHoroscopeMatch:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error getting horoscope match'
        );
    }
};

export const horoscopeService = {
    calculateGunaScore,
    getHoroscopeMatch,
};
```

## src/services/location.service.js
```javascript
/**
 * Location Service
 * Handles PIN code to location resolution with PostgreSQL caching
 * 
 * Flow:
 * 1. Validate PIN code format
 * 2. Check PostgreSQL cache
 * 3. If miss, call India Post API
 * 4. Cache result in DB
 * 5. Return location data
 */

import prisma from '../config/database.js';
import axios from 'axios';

// India Post API base URL
const INDIA_POST_API = 'https://api.postalpincode.in/pincode';

// Request timeout for external API
const API_TIMEOUT = 5000; // 5 seconds

/**
 * Validate Indian PIN code format
 * @param {string} pincode 
 * @returns {boolean}
 */
export const isValidPincode = (pincode) => {
    if (!pincode || typeof pincode !== 'string') return false;
    // Must be exactly 6 digits
    return /^[1-9][0-9]{5}$/.test(pincode);
};

/**
 * Get location data from India Post API
 * @param {string} pincode 
 * @returns {Promise<{city: string, district: string, state: string} | null>}
 */
const fetchFromIndiaPostAPI = async (pincode) => {
    const startTime = Date.now();

    try {
        const response = await axios.get(`${INDIA_POST_API}/${pincode}`, {
            timeout: API_TIMEOUT,
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'ChhattisgarhShaadi/1.0'
            }
        });

        const responseTime = Date.now() - startTime;
        console.log(`[Location Service] India Post API response time: ${responseTime}ms`);

        const data = response.data;

        // API returns array with single object
        if (!Array.isArray(data) || data.length === 0) {
            console.warn(`[Location Service] Invalid API response format for PIN: ${pincode}`);
            return null;
        }

        const result = data[0];

        // Check if API returned success
        if (result.Status !== 'Success' || !result.PostOffice || result.PostOffice.length === 0) {
            console.warn(`[Location Service] No data found for PIN: ${pincode}`);
            return null;
        }

        // Extract first post office (most relevant)
        const postOffice = result.PostOffice[0];

        return {
            city: postOffice.Name || postOffice.Block || postOffice.District,
            district: postOffice.District,
            state: postOffice.State
        };

    } catch (error) {
        const responseTime = Date.now() - startTime;
        console.error(`[Location Service] India Post API error after ${responseTime}ms:`, error.message);
        return null;
    }
};

/**
 * Get location by PIN code
 * First checks PostgreSQL cache, then falls back to India Post API
 * 
 * @param {string} pincode - 6-digit Indian PIN code
 * @returns {Promise<{success: boolean, data?: object, error?: string}>}
 */
export const getLocationByPincode = async (pincode) => {
    const startTime = Date.now();

    // Validate PIN code format
    if (!isValidPincode(pincode)) {
        return {
            success: false,
            error: 'Invalid PIN code. Must be a 6-digit number starting with 1-9.'
        };
    }

    try {
        // Step 1: Check PostgreSQL cache
        const cached = await prisma.pincode.findUnique({
            where: { pincode }
        });

        const cacheTime = Date.now() - startTime;

        if (cached) {
            console.log(`[Location Service] Cache HIT for ${pincode} in ${cacheTime}ms`);
            return {
                success: true,
                data: {
                    pincode,
                    city: cached.city,
                    district: cached.district,
                    state: cached.state,
                    cached: true
                }
            };
        }

        console.log(`[Location Service] Cache MISS for ${pincode}, calling India Post API...`);

        // Step 2: Fetch from India Post API
        const apiData = await fetchFromIndiaPostAPI(pincode);

        if (!apiData) {
            return {
                success: false,
                error: 'Unable to find location for this PIN code. Please verify and try again.'
            };
        }

        // Step 3: Cache in PostgreSQL (upsert to handle race conditions)
        try {
            await prisma.pincode.upsert({
                where: { pincode },
                update: {}, // Do nothing if exists
                create: {
                    pincode,
                    city: apiData.city,
                    district: apiData.district,
                    state: apiData.state
                }
            });
            console.log(`[Location Service] Cached PIN ${pincode} in PostgreSQL`);
        } catch (cacheError) {
            // Log but don't fail - data was fetched successfully
            console.warn(`[Location Service] Failed to cache PIN ${pincode}:`, cacheError.message);
        }

        const totalTime = Date.now() - startTime;
        console.log(`[Location Service] Total response time for ${pincode}: ${totalTime}ms`);

        return {
            success: true,
            data: {
                pincode,
                city: apiData.city,
                district: apiData.district,
                state: apiData.state,
                cached: false
            }
        };

    } catch (error) {
        console.error('[Location Service] Error:', error.message);
        return {
            success: false,
            error: 'An error occurred while looking up the PIN code. Please try again.'
        };
    }
};

/**
 * Bulk lookup multiple PIN codes (for admin/data import)
 * @param {string[]} pincodes 
 * @returns {Promise<Map<string, object>>}
 */
export const bulkLookup = async (pincodes) => {
    const results = new Map();

    // Process in batches to avoid overwhelming external API
    const BATCH_SIZE = 5;
    const BATCH_DELAY = 1000; // 1 second between batches

    for (let i = 0; i < pincodes.length; i += BATCH_SIZE) {
        const batch = pincodes.slice(i, i + BATCH_SIZE);

        await Promise.all(batch.map(async (pin) => {
            const result = await getLocationByPincode(pin);
            results.set(pin, result);
        }));

        // Delay between batches
        if (i + BATCH_SIZE < pincodes.length) {
            await new Promise(resolve => setTimeout(resolve, BATCH_DELAY));
        }
    }

    return results;
};

export default {
    getLocationByPincode,
    bulkLookup,
    isValidPincode
};

```

## src/services/match.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES, MATCH_STATUS, NOTIFICATION_TYPES, SOCKET_EVENTS } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
// ADDED: Import the blockService to check for blocks
import { blockService } from './block.service.js';
// ADDED: Import notificationService for push notifications
import { notificationService } from './notification.service.js';
// ADDED: Import socket for real-time match updates
import { getSocketIoInstance } from '../socket/index.js';

// Reusable Prisma select for public-facing user data
// Prevents leaking sensitive fields like email, phone, etc.
// IMPORTANT: Includes profile with media for images
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  createdAt: true,
  profile: {
    include: {
      media: {
        where: {
          type: { in: ['PROFILE_PHOTO', 'GALLERY_PHOTO'] }
        },
        orderBy: { createdAt: 'desc' },
        take: 3, // Limit to first 3 photos for performance
      }
    }
  },
};

/**
 * Send match request
 * @param {number} fromUserId - Sender user ID
 * @param {number} receiverId - Receiver user ID
 * @param {string} message - Optional message to receiver
 * @returns {Promise<Object>}
 */
export const sendMatchRequest = async (fromUserId, receiverId, message) => {
  try {
    // Check if sender is same as receiver
    if (fromUserId === receiverId) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'Cannot send match request to yourself'
      );
    }

    // --- Check User Subscription Status with Plan Limits ---
    const sender = await prisma.user.findUnique({
      where: { id: fromUserId },
      include: {
        subscriptions: {
          where: { status: 'ACTIVE', endDate: { gt: new Date() } },
          include: { plan: true },
          take: 1,
        },
        profile: { select: { firstName: true } },
      },
    });

    const isPremiumRole = sender?.role === 'PREMIUM_USER';
    const activeSubscription = sender?.subscriptions?.[0];
    const isPremium = isPremiumRole || !!activeSubscription;

    // --- Free User Limit Check ---
    if (!isPremium) {
      const FREE_MONTHLY_LIMIT = 3;
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      const sentThisMonth = await prisma.matchRequest.count({
        where: {
          senderId: fromUserId,
          createdAt: { gte: startOfMonth },
        },
      });

      if (sentThisMonth >= FREE_MONTHLY_LIMIT) {
        throw new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `Free users can send only ${FREE_MONTHLY_LIMIT} interest requests per month. Upgrade to Premium for unlimited requests.`
        );
      }
    }

    // --- Subscription Plan Limit Check ---
    if (activeSubscription && !isPremiumRole) {
      const maxInterests = activeSubscription.plan.maxInterestsSend;
      const usedInterests = activeSubscription.interestsUsed;

      // 0 = unlimited
      if (maxInterests !== 0 && usedInterests >= maxInterests) {
        throw new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `You have reached your interest request limit (${maxInterests}). Upgrade to Premium for unlimited requests.`,
          {
            currentPlan: activeSubscription.plan.name,
            used: usedInterests,
            max: maxInterests,
            upgradeRequired: true,
          }
        );
      }
    }
    // --- End Subscription Checks ---

    // --- Block Check ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(fromUserId);
    if (blockedIdSet.has(receiverId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot interact with this user');
    }

    // Check if receiver exists and has a profile
    const receiver = await prisma.user.findUnique({
      where: { id: receiverId },
      include: { profile: true },
    });

    if (!receiver || !receiver.isActive || receiver.isBanned || !receiver.profile) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        'User not found or profile incomplete'
      );
    }

    // Check if match request already exists
    const existingMatch = await prisma.matchRequest.findFirst({
      where: {
        OR: [
          { senderId: fromUserId, receiverId: receiverId },
          { senderId: receiverId, receiverId: fromUserId },
        ],
      },
    });

    if (existingMatch) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'Match request already exists');
    }

    const match = await prisma.matchRequest.create({
      data: {
        senderId: fromUserId,
        receiverId: receiverId,
        status: MATCH_STATUS.PENDING,
        message: message || null,
      },
    });

    // --- Increment interest usage for subscription users ---
    if (activeSubscription && !isPremiumRole) {
      await prisma.userSubscription.update({
        where: { id: activeSubscription.id },
        data: { interestsUsed: { increment: 1 } },
      });
    }
    // --- End Usage Tracking ---

    // ADDED: Send push notification to receiver
    const senderName = sender?.profile?.firstName || 'Someone';
    notificationService.createNotification({
      userId: receiverId,
      type: NOTIFICATION_TYPES.MATCH_REQUEST,
      title: 'New Interest Request!',
      message: `${senderName} is interested in your profile.`,
      data: {
        type: 'MATCH_REQUEST',
        matchId: String(match.id),
        userId: String(fromUserId),
        userName: senderName,
      },
    }).catch(err => logger.error('Failed to send match request notification:', err));

    logger.info(`Match request sent from ${fromUserId} to ${receiverId}`);

    // Return match with remaining count
    let remaining = null;
    if (!isPremium) {
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);
      const sentThisMonth = await prisma.matchRequest.count({
        where: { senderId: fromUserId, createdAt: { gte: startOfMonth } },
      });
      remaining = 3 - sentThisMonth;
    } else if (activeSubscription && activeSubscription.plan.maxInterestsSend !== 0) {
      remaining = activeSubscription.plan.maxInterestsSend - (activeSubscription.interestsUsed + 1);
    }
    return { ...match, requestsRemaining: remaining };
  } catch (error) {
    logger.error('Error in sendMatchRequest:', error);
    if (error instanceof ApiError) throw error;
    if (error.code === 'P2002') {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'Match request already exists');
    }
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error sending match request');
  }
};

/**
 * Accept match request
 * @param {number} matchId - Match ID
 * @param {number} userId - User ID accepting the request
 * @returns {Promise<Object>}
 */
export const acceptMatchRequest = async (matchId, userId) => {
  try {
    const match = await prisma.matchRequest.findUnique({
      where: { id: matchId },
    });

    if (!match) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.MATCH_NOT_FOUND);
    }

    // Security Check: Check if user is the receiver
    if (match.receiverId !== userId) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'You can only accept match requests sent to you'
      );
    }

    if (match.status !== MATCH_STATUS.PENDING) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Match request is not pending');
    }

    // --- Block Check [ADDED] ---
    // Check if the user has blocked the sender since receiving the request
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    if (blockedIdSet.has(match.senderId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot accept a request from a blocked user');
    }
    // --- End Block Check ---

    const updatedMatch = await prisma.matchRequest.update({
      where: { id: matchId },
      data: { status: MATCH_STATUS.ACCEPTED, respondedAt: new Date() },
    });

    // ADDED: Send push notification to the original sender
    const accepter = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: { select: { firstName: true } } },
    });
    const accepterName = accepter?.profile?.firstName || 'Someone';
    notificationService.createNotification({
      userId: match.senderId,
      type: NOTIFICATION_TYPES.MATCH_ACCEPTED,
      title: 'Request Accepted! 🎉',
      message: `${accepterName} accepted your interest request. Start chatting now!`,
      data: {
        type: 'MATCH_ACCEPTED',
        matchId: String(matchId),
        userId: String(userId),
        userName: accepterName,
      },
    }).catch(err => logger.error('Failed to send match accepted notification:', err));

    // ADDED: Emit real-time MATCH_ACCEPTED to both users
    const io = getSocketIoInstance();
    if (io) {
      const matchData = {
        matchId,
        acceptedBy: userId,
        acceptedAt: updatedMatch.respondedAt,
      };
      // Emit to sender (original requester)
      io.to(`user:${match.senderId}`).emit(SOCKET_EVENTS.MATCH_ACCEPTED, matchData);
      // Emit to receiver (the accepter) for UI consistency
      io.to(`user:${userId}`).emit(SOCKET_EVENTS.MATCH_ACCEPTED, matchData);
    }

    logger.info(`Match request accepted: ${matchId}`);
    return updatedMatch;
  } catch (error) {
    logger.error('Error in acceptMatchRequest:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error accepting match request');
  }
};

/**
 * Reject match request
 * @param {number} matchId - Match ID
 * @param {number} userId - User ID rejecting the request
 * @returns {Promise<Object>}
 */
export const rejectMatchRequest = async (matchId, userId) => {
  try {
    const match = await prisma.matchRequest.findUnique({
      where: { id: matchId },
    });

    if (!match) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.MATCH_NOT_FOUND);
    }

    // Security Check: Check if user is the receiver
    if (match.receiverId !== userId) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'You can only reject match requests sent to you'
      );
    }

    if (match.status !== MATCH_STATUS.PENDING) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Match request is not pending');
    }

    // No block check needed here - rejecting a request from a blocked user is fine.

    const updatedMatch = await prisma.matchRequest.update({
      where: { id: matchId },
      data: { status: MATCH_STATUS.REJECTED, respondedAt: new Date() },
    });

    logger.info(`Match request rejected: ${matchId}`);
    return updatedMatch;
  } catch (error) {
    logger.error('Error in rejectMatchRequest:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error rejecting match request');
  }
};

/**
 * Get sent match requests
 * @param {number} userId - User ID
 * @param {Object} query - Query parameters (validated)
 * @returns {Promise<Object>}
 */
export const getSentMatchRequests = async (userId, query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const { status } = query;

    // --- Block Check [ADDED] ---
    const blockedIds = Array.from(await blockService.getAllBlockedUserIds(userId));

    const where = {
      senderId: userId,
      receiverId: { notIn: blockedIds }, // Don't show requests sent to blocked users
    };
    if (status) {
      where.status = status;
    }

    const [matches, total] = await Promise.all([
      prisma.matchRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          receiver: {
            select: userPublicSelect,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.matchRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      matches,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getSentMatchRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving sent requests');
  }
};

/**
 * Get received match requests
 * @param {number} userId - User ID
 * @param {Object} query - Query parameters (validated)
 * @returns {Promise<Object>}
 */
export const getReceivedMatchRequests = async (userId, query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const { status } = query;

    // --- Block Check [ADDED] ---
    const blockedIds = Array.from(await blockService.getAllBlockedUserIds(userId));

    const where = {
      receiverId: userId,
      senderId: { notIn: blockedIds }, // Don't show requests from blocked users
    };
    if (status) {
      where.status = status;
    }

    const [matches, total] = await Promise.all([
      prisma.matchRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          sender: {
            select: userPublicSelect,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.matchRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      matches,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getReceivedMatchRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving received requests');
  }
};

/**
 * Get accepted matches (connections)
 * @param {number} userId - User ID
 * @param {Object} query - Query parameters (validated)
 * @returns {Promise<Object>}
 */
export const getAcceptedMatches = async (userId, query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);

    // --- Block Check [ADDED] ---
    const blockedIds = Array.from(await blockService.getAllBlockedUserIds(userId));

    const where = {
      status: MATCH_STATUS.ACCEPTED,
      // Only find matches where THIS user is involved
      // AND the OTHER user is NOT in the blocked list.
      OR: [
        { senderId: userId, receiverId: { notIn: blockedIds } },
        { receiverId: userId, senderId: { notIn: blockedIds } }
      ],
    };

    const [matches, total] = await Promise.all([
      prisma.matchRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          sender: {
            select: userPublicSelect,
          },
          receiver: {
            select: userPublicSelect,
          },
        },
        orderBy: {
          respondedAt: 'desc', // Order by when it was accepted
        },
      }),
      prisma.matchRequest.count({ where }),
    ]);

    // Format for mobile app to easily show "the other user"
    const connections = matches.map((match) => {
      const otherUser = match.senderId === userId ? match.receiver : match.sender;
      return {
        matchId: match.id,
        status: match.status,
        acceptedAt: match.respondedAt,
        user: otherUser,
      };
    });

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      connections, // Renamed for clarity
      pagination,
    };
  } catch (error) {
    logger.error('Error in getAcceptedMatches:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving accepted matches');
  }
};

/**
 * Delete match (or cancel sent request)
 * @param {number} matchId - Match ID
 * @param {number} userId - User ID
 * @returns {Promise<void>}
 */
export const deleteMatch = async (matchId, userId) => {
  try {
    const match = await prisma.matchRequest.findUnique({
      where: { id: matchId },
    });

    if (!match) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.MATCH_NOT_FOUND);
    }

    // Security Check: Check if user is involved in the match
    if (match.senderId !== userId && match.receiverId !== userId) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'You can only delete your own matches'
      );
    }

    // No block check needed, user is allowed to delete a match
    // even if the other user is blocked.

    await prisma.matchRequest.delete({
      where: { id: matchId },
    });

    logger.info(`Match deleted: ${matchId}`);
  } catch (error) {
    logger.error('Error in deleteMatch:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting match');
  }
};

export const matchService = {
  sendMatchRequest,
  acceptMatchRequest,
  rejectMatchRequest,
  getSentMatchRequests,
  getReceivedMatchRequests,
  getAcceptedMatches,
  deleteMatch,
};```

## src/services/matchingAlgorithm.service.js
```javascript
/**
 * Smart Matching Algorithm Service
 * FREE rule-based matching system with weighted scoring
 */

import prisma from '../config/database.js';
import { getCompatibility } from './astrology.service.js';

// Scoring weights (must sum to 100)
const WEIGHTS = {
    PREFERENCES: 25,      // Reduced
    LOCATION: 25,         // Increased for Native Village
    LIFESTYLE: 10,        // Same
    RELIGION_CASTE: 30,   // Increased for Chhattisgarhi Priority & Same Caste
    ASTROLOGY: 10,        // Reduced
};

/**
 * Calculate match score between two users
 * @param {number} userId - The user looking for matches
 * @param {number} targetUserId - The potential match
 * @returns {Object} Match score and breakdown
 */
export const calculateMatchScore = async (userId, targetUserId) => {
    try {
        // Fetch both profiles with preferences
        const [userProfile, targetProfile] = await Promise.all([
            prisma.profile.findUnique({
                where: { userId },
                include: {
                    partnerPreference: true,
                    user: { select: { id: true, preferredLanguage: true } },
                },
            }),
            prisma.profile.findUnique({
                where: { userId: targetUserId },
                include: {
                    partnerPreference: true,
                    user: { select: { id: true, preferredLanguage: true } },
                },
            }),
        ]);

        if (!userProfile || !targetProfile) {
            return { score: 0, error: 'Profile not found' };
        }

        // Delegate to pure scoring function
        const scoreResult = await calculateScoreFromProfiles(userProfile, targetProfile);
        return scoreResult;

    } catch (error) {
        console.error('Error calculating match score:', error);
        return { score: 0, error: error.message };
    }
};

/**
 * Pure function to calculate score from profile objects
 * Useful for testing or when profiles are already fetched
 */
export const calculateScoreFromProfiles = async (userProfile, targetProfile) => {
    const breakdown = {};

    // 1. Preference matching (35%)
    breakdown.preferences = calculatePreferenceScore(
        userProfile.partnerPreference,
        targetProfile
    );

    // 2. Location matching (15%)
    breakdown.location = calculateLocationScore(userProfile, targetProfile);

    // 3. Lifestyle compatibility (15%)
    breakdown.lifestyle = calculateLifestyleScore(userProfile, targetProfile);

    // 4. Religion & Caste (20%) - pass userProfile for same-caste check
    breakdown.religionCaste = calculateReligionScore(
        userProfile.partnerPreference,
        targetProfile,
        userProfile
    );

    // 5. Astrology (15%) - Use existing service
    // Note: This still relies on an external service in the breakdown, 
    // but for unit testing we might want to mock it or handle it.
    // For now, we'll keep the call but make it robust.
    breakdown.astrology = await calculateAstrologyScore(userProfile.userId, targetProfile.userId);

    // Calculate weighted total
    const totalScore = Math.round(
        (breakdown.preferences * WEIGHTS.PREFERENCES +
            breakdown.location * WEIGHTS.LOCATION +
            breakdown.lifestyle * WEIGHTS.LIFESTYLE +
            breakdown.religionCaste * WEIGHTS.RELIGION_CASTE +
            breakdown.astrology * WEIGHTS.ASTROLOGY) / 100
    );

    return {
        score: totalScore,
        maxScore: 100,
        percentage: totalScore,
        totalScore, // For backward compatibility if needed in tests
        breakdown,
        compatibility: getCompatibilityLabel(totalScore),
        isSuperMatch: totalScore >= 85,
    };
};

/**
 * Calculate preference score (age, height, education, income)
 */
const calculatePreferenceScore = (preferences, targetProfile) => {
    if (!preferences) return 50; // Default if no preferences set

    let score = 0;
    let factors = 0;

    // Age check
    if (preferences.minAge && preferences.maxAge && targetProfile.dateOfBirth) {
        const age = calculateAge(targetProfile.dateOfBirth);
        if (age >= preferences.minAge && age <= preferences.maxAge) {
            score += 100;
        } else {
            // Partial score for close matches
            const diff = Math.min(
                Math.abs(age - preferences.minAge),
                Math.abs(age - preferences.maxAge)
            );
            score += Math.max(0, 100 - diff * 10);
        }
        factors++;
    }

    // Height check
    if (preferences.minHeight && preferences.maxHeight && targetProfile.height) {
        if (targetProfile.height >= preferences.minHeight &&
            targetProfile.height <= preferences.maxHeight) {
            score += 100;
        } else {
            const diff = Math.min(
                Math.abs(targetProfile.height - preferences.minHeight),
                Math.abs(targetProfile.height - preferences.maxHeight)
            );
            score += Math.max(0, 100 - diff * 5);
        }
        factors++;
    }

    // Education check
    if (preferences.education && targetProfile.education) {
        const eduRank = getEducationRank(targetProfile.education);
        const prefRank = getEducationRank(preferences.education);
        if (eduRank >= prefRank) {
            score += 100;
        } else {
            score += Math.max(0, 100 - (prefRank - eduRank) * 20);
        }
        factors++;
    }

    // Income check
    if (preferences.minIncome && targetProfile.annualIncome) {
        const income = parseIncomeToNumber(targetProfile.annualIncome);
        const minIncome = preferences.minIncome;
        if (income >= minIncome) {
            score += 100;
        } else {
            score += Math.max(0, (income / minIncome) * 100);
        }
        factors++;
    }

    // Marital status check
    if (preferences.maritalStatus && targetProfile.maritalStatus) {
        const prefStatuses = preferences.maritalStatus;
        if (prefStatuses.includes(targetProfile.maritalStatus)) {
            score += 100;
        }
        factors++;
    }

    // Chhattisgarhi Priority (NEW)
    if (preferences.mustSpeakChhattisgarhi === true) {
        if (targetProfile.speaksChhattisgarhi) {
            score += 100;
        } else {
            score -= 50; // Penalty if mandatory and not speaking
        }
        factors++;
    }

    return factors > 0 ? Math.round(score / factors) : 50;
};

/**
 * Calculate location score
 */
const calculateLocationScore = (profile1, profile2) => {
    // 1. Native Village (Huge Boost)
    if (profile1.nativeVillage && profile2.nativeVillage &&
        profile1.nativeVillage.trim().toLowerCase() === profile2.nativeVillage.trim().toLowerCase()) {
        return 100; // Same village = Perfect
    }

    if (profile1.city && profile2.city && profile1.city === profile2.city) {
        return 80; // Same city
    }
    if (profile1.state && profile2.state && profile1.state === profile2.state) {
        return 50; // Same state
    }
    if (profile1.country && profile2.country && profile1.country === profile2.country) {
        return 20; // Same country
    }
    return 10; // Different country
};

/**
 * Calculate lifestyle compatibility
 */
const calculateLifestyleScore = (profile1, profile2) => {
    let score = 0;
    let factors = 0;

    // Diet compatibility
    if (profile1.diet && profile2.diet) {
        if (profile1.diet === profile2.diet) {
            score += 100;
        } else if (
            (profile1.diet === 'VEGETARIAN' && profile2.diet === 'EGGETARIAN') ||
            (profile1.diet === 'EGGETARIAN' && profile2.diet === 'VEGETARIAN')
        ) {
            score += 70; // Similar diets
        } else {
            score += 30;
        }
        factors++;
    }

    // Smoking compatibility
    if (profile1.smoking && profile2.smoking) {
        if (profile1.smoking === profile2.smoking) {
            score += 100;
        } else if (
            profile1.smoking === 'NO' && profile2.smoking !== 'NO'
        ) {
            score += 20; // Non-smoker with smoker
        } else {
            score += 50;
        }
        factors++;
    }

    // Drinking compatibility
    if (profile1.drinking && profile2.drinking) {
        if (profile1.drinking === profile2.drinking) {
            score += 100;
        } else if (
            (profile1.drinking === 'OCCASIONALLY' && profile2.drinking === 'SOCIALLY') ||
            (profile1.drinking === 'SOCIALLY' && profile2.drinking === 'OCCASIONALLY')
        ) {
            score += 80;
        } else {
            score += 40;
        }
        factors++;
    }

    return factors > 0 ? Math.round(score / factors) : 50;
};

/**
 * Calculate religion and caste score
 */
const calculateReligionScore = (preferences, targetProfile, userProfile) => {
    if (!preferences) return 50;

    let score = 0;
    let factors = 0;

    // Religion (Crucial)
    if (preferences.religion && targetProfile.religion) {
        const prefReligions = preferences.religion;
        if (prefReligions.includes(targetProfile.religion)) {
            score += 100;
        } else {
            score += 0;
        }
        factors++;
    }

    // Category (NEW)
    if (userProfile?.category && targetProfile.category) {
        if (userProfile.category === targetProfile.category) {
            score += 100;
        } else {
            score += 50; // Partial match
        }
        factors++;
    }

    // Caste
    if (targetProfile.caste) {
        const isCasteMandatory = preferences.casteMandatory === true;
        const userCaste = userProfile?.caste;
        const targetCaste = targetProfile.caste;
        const prefCastes = preferences.caste || [];

        if (userCaste && userCaste === targetCaste) {
            score += 150; // Extra heavy weight for same caste
        } else if (prefCastes.length > 0 && prefCastes.includes(targetCaste)) {
            score += 100;
        } else if (isCasteMandatory) {
            score -= 100; // Strong penalty if mandatory and not matching
        } else {
            score += 40; // Low score if not same caste and not preferred
        }
        factors++;
    }

    // Sub-caste / Community bonus
    if (userProfile?.subCaste && targetProfile.subCaste &&
        userProfile.subCaste.trim().toLowerCase() === targetProfile.subCaste.trim().toLowerCase()) {
        score += 30;
    }

    // Gothram Check (Crucial for some communities to avoid same Gothram)
    if (userProfile?.gothram && targetProfile.gothram &&
        userProfile.gothram.trim().length > 0) {
        if (userProfile.gothram.trim().toLowerCase() === targetProfile.gothram.trim().toLowerCase()) {
            score -= 50; // Penalty for same Gothram
        } else {
            score += 20; // Bonus for different Gothram
        }
    }

    // Cultural Matching (Priority Chhattisgarhi)
    const isUserCG = userProfile.state?.toLowerCase().includes('chhattisgarh');
    const isTargetCG = targetProfile.state?.toLowerCase().includes('chhattisgarh');

    if (isUserCG && isTargetCG) {
        score += 50; // Huge bonus if both from Chhattisgarh
    }

    // Speaks Chhattisgarhi Bonus (Linguistic Match)
    if (userProfile.speaksChhattisgarhi && targetProfile.speaksChhattisgarhi) {
        score += 50;
    }

    // App Language Preference Match (NEW)
    const userPrefLang = userProfile.user?.preferredLanguage;
    const targetPrefLang = targetProfile.user?.preferredLanguage;
    if (userPrefLang && userPrefLang === targetPrefLang) {
        if (userPrefLang === 'CG') {
            score += 40; // High priority for Chhattisgarhi users
        } else {
            score += 20;
        }
    }

    return factors > 0 ? Math.min(100, Math.max(0, Math.round(score / factors))) : 50;
};

/**
 * Calculate astrology score using existing service
 */
const calculateAstrologyScore = async (userId, targetUserId) => {
    try {
        const compatibility = await getCompatibility(userId, targetUserId);
        if (compatibility && compatibility.percentage) {
            return compatibility.percentage;
        }
        return 50; // Default if astrology data unavailable
    } catch {
        return 50;
    }
};

/**
 * Get compatibility label based on score
 */
const getCompatibilityLabel = (score) => {
    if (score >= 90) return 'Perfect Match! 💫';
    if (score >= 80) return 'Excellent Match! 🎉';
    if (score >= 70) return 'Great Match! ⭐';
    if (score >= 60) return 'Good Match 👍';
    if (score >= 50) return 'Compatible 😊';
    return 'Worth Exploring 🤔';
};

/**
 * Get daily recommendations for a user
 */
export const getDailyRecommendations = async (userId, limit = 10) => {
    try {
        // Get user's profile and preferences
        const userProfile = await prisma.profile.findUnique({
            where: { userId },
            include: {
                partnerPreference: true,
            },
        });

        if (!userProfile) {
            return [];
        }

        // Determine opposite gender
        const targetGender = userProfile.gender === 'MALE' ? 'FEMALE' : 'MALE';

        // Build where clause for potential matches
        const whereClause = {
            gender: targetGender,
            userId: { not: userId },
            user: {
                isActive: true,
                // Exclude blocked users
                blockedBy: { none: { blockerId: userId } },
                blockedUsers: { none: { blockedId: userId } },
            },
        };

        // If caste is mandatory and user has caste preferences, filter by caste
        const preferences = userProfile.partnerPreference;
        if (preferences?.casteMandatory === true) {
            const allowedCastes = [];

            // Always allow same caste
            if (userProfile.caste) {
                allowedCastes.push(userProfile.caste);
            }

            // Also allow explicitly preferred castes
            if (preferences.caste && preferences.caste.length > 0) {
                allowedCastes.push(...preferences.caste);
            }

            if (allowedCastes.length > 0) {
                whereClause.caste = { in: [...new Set(allowedCastes)] }; // Remove duplicates
            }
        }

        // Get potential matches (excluding blocked, already matched, etc.)
        const potentialMatches = await prisma.profile.findMany({
            where: whereClause,
            include: {
                user: { select: { id: true } },
                photos: { take: 1 },
            },
            take: 50, // Get top 50 candidates for scoring
        });

        // Calculate scores for each potential match
        const scoredMatches = await Promise.all(
            potentialMatches.map(async (match) => {
                const matchResult = await calculateMatchScore(userId, match.userId);
                return {
                    profile: match,
                    ...matchResult,
                };
            })
        );

        // Sort by score and return top N
        const topMatches = scoredMatches
            .filter((m) => m.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);

        return topMatches;
    } catch (error) {
        console.error('Error getting daily recommendations:', error);
        return [];
    }
};

/**
 * Get "Super Matches" (85%+ compatibility)
 */
export const getSuperMatches = async (userId, limit = 5) => {
    const recommendations = await getDailyRecommendations(userId, 20);
    return recommendations.filter((m) => m.score >= 85).slice(0, limit);
};

// Helper functions
const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birth = new Date(dateOfBirth);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};

const getEducationRank = (education) => {
    const ranks = {
        BELOW_10TH: 1,
        '10TH': 2,
        '12TH': 3,
        DIPLOMA: 4,
        BACHELORS: 5,
        MASTERS: 6,
        DOCTORATE: 7,
    };
    return ranks[education] || 3;
};

const parseIncomeToNumber = (income) => {
    if (!income) return 0;
    // Handle string income ranges like "5-10 LPA"
    if (typeof income === 'string') {
        const match = income.match(/(\d+)/);
        return match ? parseInt(match[1]) * 100000 : 0;
    }
    return income;
};

export default {
    calculateMatchScore,
    calculateScoreFromProfiles,
    getDailyRecommendations,
    getSuperMatches,
};
```

## src/services/message.service.js
```javascript
import prisma from '../config/database.js';
import { Prisma } from '@prisma/client';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES, NOTIFICATION_TYPES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
// ADDED: Import the blockService to check for blocks
import { blockService } from './block.service.js';
// ADDED: Import notificationService to send push notifications
import { notificationService } from './notification.service.js';

// Define a reusable Prisma select for public-facing user data
// This prevents leaking sensitive fields like email, phone, etc.
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  profile: {
    select: {
      firstName: true,
      lastName: true,
      media: {
        select: {
          url: true,
          type: true,
        },
        take: 1, // Only get the first image (profile pic)
      },
    },
  },
};

/**
 * Send message
 * @param {number} senderId - Sender user ID
 * @param {number} receiverId - Receiver user ID
 * @param {string} content - Message content
 * @param {string} contentType - Message content type (TEXT, IMAGE, SYSTEM)
 * @returns {Promise<Object>}
 */
export const sendMessage = async (senderId, receiverId, content, contentType = 'TEXT') => {
  try {
    if (senderId === receiverId) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'Cannot send message to yourself'
      );
    }

    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(senderId);
    if (blockedIdSet.has(receiverId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot send messages to this user');
    }
    // --- End Block Check ---

    // Check if receiver exists and is active
    const receiver = await prisma.user.findUnique({
      where: { id: receiverId, isActive: true, isBanned: false },
    });

    if (!receiver) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Receiver not found');
    }

    // --- SENDER Subscription Check with Plan Limits ---
    const sender = await prisma.user.findUnique({
      where: { id: senderId },
      include: {
        subscriptions: {
          where: {
            status: 'ACTIVE',
            endDate: { gt: new Date() },
          },
          include: { plan: true },
        },
      },
    });

    const senderIsPremiumRole = sender?.role === 'PREMIUM_USER';
    const activeSubscription = sender?.subscriptions?.[0];

    if (!senderIsPremiumRole && !activeSubscription) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'You need a premium subscription to send messages. Upgrade to start chatting!'
      );
    }

    // Check plan-level message limits (only for subscription users, not PREMIUM_USER role)
    if (activeSubscription && !senderIsPremiumRole) {
      const maxMessages = activeSubscription.plan.maxMessagesSend;
      const usedMessages = activeSubscription.messagesUsed;

      // 0 = unlimited
      if (maxMessages !== 0 && usedMessages >= maxMessages) {
        throw new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `You have reached your message limit (${maxMessages}). Upgrade to Premium for unlimited messages.`,
          {
            currentPlan: activeSubscription.plan.name,
            used: usedMessages,
            max: maxMessages,
            upgradeRequired: true,
          }
        );
      }
    }
    // --- End SENDER Subscription Check ---

    // --- NEW: Find or create Conversation ---
    const userAId = Math.min(senderId, receiverId);
    const userBId = Math.max(senderId, receiverId);

    let conversation = await prisma.conversation.findUnique({
      where: {
        userAId_userBId: { userAId, userBId },
      },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: { userAId, userBId },
      });
    }
    // --- End Conversation ---

    const message = await prisma.message.create({
      data: {
        senderId,
        receiverId,
        conversationId: conversation.id,
        content,
        contentType, // NEW: explicit content type
      },
      include: {
        sender: {
          select: userPublicSelect,
        },
        receiver: {
          select: userPublicSelect,
        },
      },
    });

    // Update conversation timestamp
    await prisma.conversation.update({
      where: { id: conversation.id },
      data: { updatedAt: new Date() },
    });

    // --- Increment message usage for subscription users ---
    if (activeSubscription && !senderIsPremiumRole) {
      await prisma.userSubscription.update({
        where: { id: activeSubscription.id },
        data: { messagesUsed: { increment: 1 } },
      });
    }
    // --- End Usage Tracking ---

    // ADDED: Send push notification to receiver
    const senderName = message.sender?.profile?.firstName || 'Someone';
    notificationService.createNotification({
      userId: receiverId,
      type: NOTIFICATION_TYPES.NEW_MESSAGE,
      title: `New message from ${senderName}`,
      message: content.length > 50 ? content.substring(0, 50) + '...' : content,
      data: {
        type: 'NEW_MESSAGE',
        userId: String(senderId),
        userName: senderName,
      },
    }).catch(err => logger.error('Failed to send message notification:', err));

    logger.info(`Message sent from ${senderId} to ${receiverId}`);
    return message;
  } catch (error) {
    logger.error('Error in sendMessage:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error sending message');
  }
};

/**
 * Get conversation between two users
 * @param {number} userId - Current user ID
 * @param {number} otherUserId - Other user ID
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>}
 */
export const getConversation = async (userId, otherUserId, query) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    if (blockedIdSet.has(otherUserId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot view this conversation');
    }
    // --- End Block Check ---

    const { page, limit, skip } = getPaginationParams(query);

    // NEW: Per-user deletion visibility filter
    const where = {
      OR: [
        { senderId: userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: userId },
      ],
      // NEW: Only show messages not deleted by this user
      AND: [
        {
          OR: [
            { senderId: userId, isDeletedBySender: false },
            { receiverId: userId, isDeletedByReceiver: false },
          ],
        },
      ],
    };

    const [messages, total] = await Promise.all([
      prisma.message.findMany({
        where,
        skip,
        take: limit,
        include: {
          sender: {
            select: userPublicSelect,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.message.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      messages,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getConversation:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving conversation');
  }
};

/**
 * Get all conversations for a user
 * @param {number} userId - User ID
 * @returns {Promise<Array>}
 */
export const getAllConversations = async (userId) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    // --- End Block Check ---

    // Step 1: Get all distinct conversation partners and the timestamp of the last message
    const conversationPartners = await prisma.$queryRaw`
      SELECT "otherUserId", MAX("createdAt") as "lastMessageAt"
      FROM (
        SELECT "receiverId" as "otherUserId", "createdAt" FROM "messages" WHERE "senderId" = ${userId}
        UNION ALL
        SELECT "senderId" as "otherUserId", "createdAt" FROM "messages" WHERE "receiverId" = ${userId}
      ) as "allConversations"
      GROUP BY "otherUserId"
      ORDER BY "lastMessageAt" DESC
    `;

    // [MODIFIED] Filter out blocked partners
    const filteredPartners = conversationPartners.filter(
      (c) => !blockedIdSet.has(c.otherUserId)
    );

    if (filteredPartners.length === 0) {
      return [];
    }

    const otherUserIds = filteredPartners.map((c) => c.otherUserId);

    // Step 2: Get all user details for these partners in one query
    const users = await prisma.user.findMany({
      where: { id: { in: otherUserIds } },
      select: userPublicSelect,
    });
    const userMap = new Map(users.map((user) => [user.id, user]));

    // Step 3: Get all last messages for these conversations in one query
    const lastMessages = await prisma.$queryRaw`
      SELECT m.*
      FROM "messages" m
      INNER JOIN (
        SELECT
          LEAST("senderId", "receiverId") as u1,
          GREATEST("senderId", "receiverId") as u2,
          MAX("createdAt") as "maxCreatedAt"
        FROM "messages"
        WHERE ("senderId" = ${userId} AND "receiverId" IN (${Prisma.join(otherUserIds)}))
           OR ("receiverId" = ${userId} AND "senderId" IN (${Prisma.join(otherUserIds)}))
        GROUP BY u1, u2
      ) lm ON LEAST(m."senderId", m."receiverId") = lm.u1
           AND GREATEST(m."senderId", m."receiverId") = lm.u2
           AND m."createdAt" = lm."maxCreatedAt"
    `;
    const lastMessageMap = new Map(
      lastMessages.map((m) => [
        m.senderId === userId ? m.receiverId : m.senderId,
        m,
      ])
    );

    // Step 4: Get all unread counts in one query (NEW: use status field)
    const unreadCounts = await prisma.message.groupBy({
      by: ['senderId'],
      where: {
        receiverId: userId,
        senderId: { in: otherUserIds },
        status: { in: ['SENT', 'DELIVERED'] }, // All non-READ statuses
        isDeletedByReceiver: false,
      },
      _count: {
        id: true,
      },
    });
    const unreadCountMap = new Map(
      unreadCounts.map((c) => [c.senderId, c._count.id])
    );

    // Step 5: Combine all the data
    const conversationsWithDetails = filteredPartners.map((conv) => { // [MODIFIED]
      const otherUser = userMap.get(conv.otherUserId);
      const lastMessage = lastMessageMap.get(conv.otherUserId);
      const unreadCount = unreadCountMap.get(conv.otherUserId) || 0;

      return {
        user: otherUser,
        lastMessage,
        unreadCount,
        lastMessageAt: conv.lastMessageAt,
      };
    });

    return conversationsWithDetails;
  } catch (error) {
    logger.error('Error in getAllConversations:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving conversations');
  }
};


/**
 * Mark messages as read
 * @param {number} userId - Current user ID
 * @param {number} otherUserId - Other user ID
 * @returns {Promise<Object>}
 */
export const markMessagesAsRead = async (userId, otherUserId) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    if (blockedIdSet.has(otherUserId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'Cannot interact with this user');
    }
    // --- End Block Check ---

    // NEW: Use status field (single source of truth) instead of isRead
    const result = await prisma.message.updateMany({
      where: {
        senderId: otherUserId,
        receiverId: userId,
        status: { in: ['SENT', 'DELIVERED'] }, // Only update non-read messages
      },
      data: {
        status: 'READ',
        readAt: new Date(),
      },
    });

    logger.info(`Marked ${result.count} messages as read from ${otherUserId} for ${userId}`);
    return result;
  } catch (error) {
    logger.error('Error in markMessagesAsRead:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error marking messages as read');
  }
};

/**
 * Delete message (per-user soft delete)
 * @param {number} messageId - Message ID
 * @param {number} userId - User ID
 * @returns {Promise<void>}
 */
export const deleteMessage = async (messageId, userId) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.MESSAGE_NOT_FOUND);
    }

    // NEW: Per-user deletion - both sender AND receiver can delete for themselves
    const isSender = message.senderId === userId;
    const isReceiver = message.receiverId === userId;

    if (!isSender && !isReceiver) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'You cannot delete this message'
      );
    }

    // NEW: Set the appropriate per-user deletion flag
    await prisma.message.update({
      where: { id: messageId },
      data: {
        ...(isSender && { isDeletedBySender: true }),
        ...(isReceiver && { isDeletedByReceiver: true }),
      }
    });

    logger.info(`Message ${messageId} marked as deleted by user ${userId} (${isSender ? 'sender' : 'receiver'})`);
  } catch (error) {
    logger.error('Error in deleteMessage:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting message');
  }
};

/**
 * Get unread message count
 * @param {number} userId - User ID
 * @returns {Promise<number>}
 */
export const getUnreadCount = async (userId) => {
  try {
    // --- Block Check [ADDED] ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    // --- End Block Check ---

    // NEW: Use status field instead of isRead
    const count = await prisma.message.count({
      where: {
        receiverId: userId,
        status: { in: ['SENT', 'DELIVERED'] }, // All non-READ statuses
        senderId: { notIn: Array.from(blockedIdSet) },
        isDeletedByReceiver: false, // Don't count deleted messages
      },
    });

    return count;
  } catch (error) {
    logger.error('Error in getUnreadCount:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error getting unread count');
  }
};

export const messageService = {
  sendMessage,
  getConversation,
  getAllConversations,
  markMessagesAsRead,
  deleteMessage,
  getUnreadCount,
};```

## src/services/notification.service.js
```javascript
import { getMessaging } from '../config/firebase.js';
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, NOTIFICATION_TYPES, SOCKET_EVENTS } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import { getSocketIoInstance } from '../socket/index.js';
import { isRateLimited } from './rateLimit.service.js';

// ===== NOTIFICATION METRICS =====
const metrics = {
  notificationsSent: 0,
  notificationsFailed: 0,
  invalidTokensRemoved: 0,
  pushNotificationsSent: 0,
  pushNotificationsFailed: 0,
};

// Log metrics every hour
setInterval(() => {
  logger.info('📊 FCM Metrics (last hour):', metrics);
  // Reset after logging
  Object.keys(metrics).forEach(key => metrics[key] = 0);
}, 60 * 60 * 1000);

/**
 * Helper: Sleep for exponential backoff
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Helper: Check if error is permanent (don't retry)
 */
const isPermanentError = (error) => {
  const permanentCodes = [
    'messaging/registration-token-not-registered', // HTTP 404 (Unregistered)
    'messaging/invalid-argument',                  // HTTP 400 (Invalid Argument)
    'messaging/invalid-recipient',
    'messaging/invalid-registration-token',        // Token format is invalid
    'messaging/mismatched-credential',             // Sender ID mismatch (treat as permanent for this token)
  ];
  return permanentCodes.includes(error.code);
};

/**
 * Internal helper to send a single FCM push notification with retry logic.
 * @param {string} fcmToken - Device FCM token
 * @param {object} payload - { title, body, data, notificationType }
 * @param {number} maxRetries - Maximum retry attempts
 * @returns {Promise<string|null>}
 */
const _sendPushNotification = async (fcmToken, payload, maxRetries = 3) => {
  const messaging = getMessaging();
  if (!messaging) {
    logger.warn('⚠️ Firebase messaging not initialized, push notification skipped.');
    return null;
  }

  // Determine notification channel based on type
  const getAndroidChannel = (type) => {
    switch (type) {
      case NOTIFICATION_TYPES.MESSAGE:
        return 'messages_channel';
      case NOTIFICATION_TYPES.MATCH_REQUEST:
      case NOTIFICATION_TYPES.MATCH_ACCEPTED:
        return 'matches_channel';
      case NOTIFICATION_TYPES.PROFILE_VIEWED:
        return 'profile_views_channel';
      default:
        return 'general_channel';
    }
  };

  const message = {
    token: fcmToken,
    notification: {
      title: payload.title,
      body: payload.body,
    },
    data: {
      ...payload.data,
      // Ensure all data values are strings  
      type: String(payload.data?.type || 'GENERAL'),
      timestamp: String(Date.now()),
    },
    // Android-specific configuration with RICH NOTIFICATIONS
    android: {
      priority: 'high',
      notification: {
        channelId: getAndroidChannel(payload.notificationType),
        sound: 'default',
        priority: 'high',
        defaultSound: true,
        defaultVibrateTimings: true,
        // Rich features
        imageUrl: payload.data?.imageUrl, // Big picture style
        color: '#E91E63', // Brand color for matrimony app
        // Action buttons based on notification type
        ...(payload.notificationType === 'MESSAGE' && {
          actions: [
            { title: 'Reply', action: 'REPLY_ACTION' },
            { title: 'Mark as Read', action: 'MARK_READ_ACTION' },
          ],
        }),
        ...(payload.notificationType === 'MATCH_REQUEST' && {
          actions: [
            { title: 'Accept', action: 'ACCEPT_MATCH_ACTION' },
            { title: 'Reject', action: 'REJECT_MATCH_ACTION' },
          ],
        }),
        ...(payload.notificationType === 'CONTACT_REQUEST' && {
          actions: [
            { title: 'Approve', action: 'APPROVE_CONTACT_ACTION' },
            { title: 'Decline', action: 'DECLINE_CONTACT_ACTION' },
          ],
        }),
      },
    },
    // iOS-specific configuration (APNs) with RICH NOTIFICATIONS
    apns: {
      payload: {
        aps: {
          sound: 'default',
          badge: payload.data?.badgeCount || 1,
          'content-available': 1, // Enable background refresh
          'mutable-content': 1, // Enable notification service extension for rich media
        },
      },
      headers: {
        'apns-priority': '10', // High priority
      },
      // iOS actions (requires UNNotificationCategory configuration in app)
      fcmOptions: {
        imageUrl: payload.data?.imageUrl, // Attach image
      },
    },
  };

  // Retry logic with exponential backoff
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await messaging.send(message);
      logger.info(`✅ Push notification sent successfully: ${response}`);
      metrics.pushNotificationsSent++;
      return response;
    } catch (error) {
      logger.error(`❌ Push notification error (attempt ${attempt}/${maxRetries}): ${error.message}`);

      // Permanent errors - don't retry, cleanup token
      if (isPermanentError(error)) {
        logger.warn(`🗑️ Invalid FCM token detected, removing: ${fcmToken.substring(0, 20)}...`);
        try {
          await prisma.fcmToken.deleteMany({ where: { token: fcmToken } });
          metrics.invalidTokensRemoved++;
          logger.info(`✅ Deleted invalid FCM token: ${fcmToken.substring(0, 20)}...`);
        } catch (dbError) {
          logger.error(`❌ Failed to delete invalid token: ${dbError.message}`);
        }
        metrics.pushNotificationsFailed++;
        return null;
      }

      // Transient errors - retry with exponential backoff
      if (attempt < maxRetries) {
        const delayMs = Math.pow(2, attempt) * 1000 + Math.random() * 1000;
        logger.warn(`🔄 Retrying FCM send in ${Math.round(delayMs)}ms...`);
        await sleep(delayMs);
      } else {
        logger.error(`❌ FCM send failed after ${maxRetries} attempts`);
        metrics.pushNotificationsFailed++;
        return null;
      }
    }
  }
};

/**
 * Internal helper to send FCM to multiple devices using multicast.
 * More efficient than individual sends for users with multiple devices.
 * @param {string[]} fcmTokens - Array of FCM tokens (max 500)
 * @param {object} payload - { title, body, data, notificationType }
 * @returns {Promise<void>}
 */
const _sendMulticastNotification = async (fcmTokens, payload) => {
  const messaging = getMessaging();
  if (!messaging) {
    logger.warn('⚠️ Firebase messaging not initialized, multicast skipped.');
    return;
  }

  if (fcmTokens.length === 0) return;

  // FCM allows max 500 tokens per multicast
  const BATCH_SIZE = 500;
  const batches = [];
  for (let i = 0; i < fcmTokens.length; i += BATCH_SIZE) {
    batches.push(fcmTokens.slice(i, i + BATCH_SIZE));
  }

  const getAndroidChannel = (type) => {
    switch (type) {
      case NOTIFICATION_TYPES.MESSAGE:
        return 'messages_channel';
      case NOTIFICATION_TYPES.MATCH_REQUEST:
      case NOTIFICATION_TYPES.MATCH_ACCEPTED:
        return 'matches_channel';
      case NOTIFICATION_TYPES.PROFILE_VIEWED:
        return 'profile_views_channel';
      default:
        return 'general_channel';
    }
  };

  for (const tokenBatch of batches) {
    const message = {
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: {
        ...payload.data,
        type: String(payload.data?.type || 'GENERAL'),
        timestamp: String(Date.now()),
      },
      android: {
        priority: 'high',
        notification: {
          channelId: getAndroidChannel(payload.notificationType),
          sound: 'default',
          priority: 'high',
        },
      },
      apns: {
        payload: {
          aps: {
            sound: 'default',
            badge: payload.data?.badgeCount || 1,
            'content-available': 1,
          },
        },
        headers: {
          'apns-priority': '10',
        },
      },
      tokens: tokenBatch,
    };

    try {
      const response = await messaging.sendEachForMulticast(message);

      logger.info(
        `📤 Multicast sent: ${response.successCount}/${tokenBatch.length} successful, ` +
        `${response.failureCount} failed`
      );

      metrics.pushNotificationsSent += response.successCount;
      metrics.pushNotificationsFailed += response.failureCount;

      // Cleanup failed tokens
      if (response.failureCount > 0) {
        const failedTokens = [];
        response.responses.forEach((resp, idx) => {
          if (!resp.success && isPermanentError(resp.error)) {
            failedTokens.push(tokenBatch[idx]);
          }
        });

        if (failedTokens.length > 0) {
          await prisma.fcmToken.deleteMany({
            where: { token: { in: failedTokens } },
          });
          metrics.invalidTokensRemoved += failedTokens.length;
          logger.info(`🗑️ Removed ${failedTokens.length} invalid tokens from multicast`);
        }
      }
    } catch (error) {
      logger.error(`❌ Multicast send error: ${error.message}`);
      metrics.pushNotificationsFailed += tokenBatch.length;
    }
  }
};

/**
 * Create and dispatch a notification (DB, Socket, and Push).
 * This is the new single source of truth for all notifications.
 *
 * @param {object} dto - Data Transfer Object
 * @param {number} dto.userId - The ID of the user to notify
 * @param {NotificationType} dto.type - The enum type of the notification
 * @param {string} dto.title - The title of the notification
 * @param {string} dto.message - The body/message of the notification
 * @param {object} [dto.data] - Optional data to send with the push notification
 * @param {string} [dto.actionUrl] - Optional URL for in-app navigation
 * @returns {Promise<Object>}
 */
export const createNotification = async (dto) => {
  const { userId, type, title, message, data = {}, actionUrl } = dto;

  try {
    // ✅ RATE LIMITING: Check if user is being spammed
    if (isRateLimited(userId, type)) {
      logger.warn(`⏱️  Notification rate limited for user ${userId}, type: ${type}`);
      metrics.notificationsFailed++;
      return null; // Silently skip - don't spam user
    }

    // 1. Get user preferences and FCM tokens
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        fcmTokens: {
          where: { isActive: true },
        },
        notificationPreferences: true,
      },
    });

    if (!user) {
      logger.warn(`⚠️ Cannot create notification: User not found (ID: ${userId})`);
      return;
    }

    const prefs = user.notificationPreferences;

    // 2. Create the In-App notification in the DB
    const notification = await prisma.notification.create({
      data: {
        userId,
        type,
        title,
        message,
        channel: 'IN_APP',
        data: JSON.stringify(data),
        actionUrl,
        language: user.preferredLanguage || 'HI',
      },
    });

    metrics.notificationsSent++;

    // 3. Send real-time In-App notification via Socket.io
    const io = getSocketIoInstance();
    if (io) {
      io.to(`user:${userId}`).emit(SOCKET_EVENTS.NOTIFICATION_RECEIVED, notification);
      logger.debug(`🔌 Socket notification sent to user:${userId}`);
    }

    // 4. Determine if we should send push notifications
    let shouldSendPush = true;

    // Only skip push if user has explicitly disabled ALL notifications
    if (prefs && prefs.enableAllNotifications === false) {
      shouldSendPush = false;
      logger.info(`⏭️  Push skipped for user ${userId} - notifications disabled`);
    }

    // 5. Send FCM Push Notifications using MULTICAST for efficiency
    if (shouldSendPush && user.fcmTokens.length > 0) {
      const pushPayload = {
        title,
        body: message,
        data: {
          ...data,
          type,
          userId: String(userId),
          timestamp: String(Date.now()),
        },
        notificationType: type,
      };

      // Use multicast for efficiency
      const tokens = user.fcmTokens.map(t => t.token);
      await _sendMulticastNotification(tokens, pushPayload);

      logger.info(
        `📲 Push notifications dispatched to ${user.fcmTokens.length} device(s) for user ${userId}`
      );
    } else if (user.fcmTokens.length === 0) {
      logger.warn(`⚠️  No FCM tokens found for user ${userId}, push notification skipped`);
    }

    logger.info(`✅ Notification created and dispatched for user: ${userId}`);
    return notification;
  } catch (error) {
    logger.error('❌ Error in createNotification:', error);
    metrics.notificationsFailed++;
    // Don't throw, as this is often a background task
  }
};

/**
 * Get user notifications (paginated)
 * @param {number} userId - User ID
 * @param {Object} query - Query parameters (validated)
 * @returns {Promise<Object>}
 */
export const getUserNotifications = async (userId, query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);

    const where = { userId };

    const [notifications, total] = await Promise.all([
      prisma.notification.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.notification.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      notifications,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getUserNotifications:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving notifications');
  }
};

/**
 * Mark notification as read
 * @param {number} notificationId - Notification ID (validated)
 * @param {number} userId - User ID
 * @returns {Promise<Object>}
 */
export const markAsRead = async (notificationId, userId) => {
  try {
    const notification = await prisma.notification.findFirst({
      where: { id: notificationId, userId: userId },
    });

    if (!notification) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Notification not found or you are not authorized');
    }

    if (notification.isRead) {
      return notification;
    }

    const updatedNotification = await prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true, readAt: new Date() },
    });

    return updatedNotification;
  } catch (error) {
    logger.error('Error in markAsRead:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error marking as read');
  }
};

/**
 * Mark all notifications as read
 * @param {number} userId - User ID
 * @returns {Promise<Object>}
 */
export const markAllAsRead = async (userId) => {
  try {
    const result = await prisma.notification.updateMany({
      where: {
        userId,
        isRead: false,
      },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });

    logger.info(`✅ Marked ${result.count} notifications as read for user ${userId}`);
    return result;
  } catch (error) {
    logger.error('Error in markAllAsRead:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error marking all as read');
  }
};

/**
 * Get unread notification count
 * @param {number} userId - User ID
 * @returns {Promise<number>}
 */
export const getUnreadCount = async (userId) => {
  try {
    const count = await prisma.notification.count({
      where: {
        userId,
        isRead: false,
      },
    });

    return count;
  } catch (error) {
    logger.error('Error in getUnreadCount:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error getting unread count');
  }
};

/**
 * Delete notification
 * @param {number} notificationId - Notification ID (validated)
 * @param {number} userId - User ID
 * @returns {Promise<void>}
 */
export const deleteNotification = async (notificationId, userId) => {
  try {
    const notification = await prisma.notification.findFirst({
      where: { id: notificationId, userId: userId },
    });

    if (!notification) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Notification not found or you are not authorized');
    }

    await prisma.notification.delete({
      where: { id: notificationId },
    });

    logger.info(`🗑️  Notification deleted: ${notificationId}`);
  } catch (error) {
    logger.error('Error in deleteNotification:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting notification');
  }
};

/**
 * Delete all notifications
 * @param {number} userId - User ID
 * @returns {Promise<Object>}
 */
export const deleteAllNotifications = async (userId) => {
  try {
    const result = await prisma.notification.deleteMany({
      where: { userId },
    });

    logger.info(`🗑️  Deleted ${result.count} notifications for user ${userId}`);
    return result;
  } catch (error) {
    logger.error('Error in deleteAllNotifications:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting all notifications');
  }
};

/**
 * Get current notification metrics (for monitoring)
 * @returns {object}
 */
export const getMetrics = () => {
  return { ...metrics };
};

/**
 * Register or update a device FCM token
 * @param {number} userId - User ID
 * @param {string} token - FCM token
 * @param {string} deviceId - Unique device identifier
 * @param {string} deviceType - 'ANDROID', 'IOS', 'WEB'
 * @returns {Promise<Object>}
 */
export const registerDevice = async (userId, token, deviceId, deviceType) => {
  try {
    const existingToken = await prisma.fcmToken.findUnique({
      where: {
        userId_deviceId: {
          userId,
          deviceId,
        },
      },
    });

    if (existingToken) {
      // Update existing token if changed or just update timestamp
      return await prisma.fcmToken.update({
        where: { id: existingToken.id },
        data: {
          token,
          lastUsedAt: new Date(),
          isActive: true,
          updatedAt: new Date(),
        },
      });
    } else {
      // Create new token relation
      return await prisma.fcmToken.create({
        data: {
          userId,
          token,
          deviceId,
          deviceType,
          isActive: true,
        },
      });
    }
  } catch (error) {
    logger.error('Error in registerDevice:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error registering device token');
  }
};

/**
 * Unregister a device FCM token (e.g. on logout)
 * @param {number} userId - User ID
 * @param {string} token - FCM token
 * @returns {Promise<void>}
 */
export const unregisterDevice = async (userId, token) => {
  try {
    await prisma.fcmToken.deleteMany({
      where: {
        userId,
        token,
      },
    });
    logger.info(`🔌 Unregistered FCM token for user ${userId}`);
  } catch (error) {
    logger.error('Error in unregisterDevice:', error);
    // Don't throw, just log. It's cleanup.
  }
};

/**
 * Remove stale tokens (older than 30 days)
 * Can be called via cron or interval
 */
export const cleanupStaleTokens = async () => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const result = await prisma.fcmToken.deleteMany({
      where: {
        lastUsedAt: {
          lt: thirtyDaysAgo,
        },
      },
    });

    if (result.count > 0) {
      logger.info(`🧹 Cleaned up ${result.count} stale FCM tokens`);
      metrics.invalidTokensRemoved += result.count;
    }
    return result.count;
  } catch (error) {
    logger.error('❌ Error cleaning up stale tokens:', error);
    return 0;
  }
};



export const notificationService = {
  createNotification,
  getUserNotifications,
  markAsRead,
  markAllAsRead,
  getUnreadCount,
  deleteNotification,
  deleteAllNotifications,
  getMetrics,
  registerDevice,
  unregisterDevice,
  cleanupStaleTokens,
};```

## src/services/notificationQueue.service.js
```javascript
/**
 * BullMQ Queue Structure for High-Volume Notifications
 * Optional: Only use this if handling 10,000+ notifications per minute
 * 
 * Installation Required:
 * npm install bullmq ioredis
 */

import { Queue, Worker } from 'bullmq';
import { createNotification } from './notification.service.js';
import { logger } from '../config/logger.js';

// Redis connection config (use environment variables in production)
const connection = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD,
};

// Create notification queue
const notificationQueue = new Queue('fcm-notifications', {
    connection,
    defaultJobOptions: {
        attempts: 3, // Retry failed jobs 3 times
        backoff: {
            type: 'exponential',
            delay: 2000, // Start with 2s delay
        },
        removeOnComplete: {
            age: 24 * 60 * 60, // Keep completed jobs for 24 hours
            count: 1000, // Keep last 1000 completed jobs
        },
        removeOnFail: {
            age: 7 * 24 * 60 * 60, // Keep failed jobs for 7 days
        },
    },
});

// Create worker to process notification jobs
const notificationWorker = new Worker(
    'fcm-notifications',
    async (job) => {
        logger.info(`📋 Processing notification job ${job.id}:`, job.data);

        try {
            // Call the main notification service
            const result = await createNotification(job.data);

            logger.info(`✅ Notification job ${job.id} completed successfully`);
            return result;
        } catch (error) {
            logger.error(`❌ Notification job ${job.id} failed:`, error);
            throw error; // Will trigger retry
        }
    },
    {
        connection,
        concurrency: 10, // Process 10 jobs concurrently
        limiter: {
            max: 100, // Max 100 jobs
            duration: 1000, // per second
        },
    }
);

// Event listeners for monitoring
notificationWorker.on('completed', (job) => {
    logger.debug(`Job ${job.id} completed`);
});

notificationWorker.on('failed', (job, err) => {
    logger.error(`Job ${job?.id} failed with error:`, err);
});

notificationWorker.on('error', (err) => {
    logger.error('Worker error:', err);
});

/**
 * Add a notification to the queue
 * @param {object} notificationData - Notification DTO
 * @param {object} [options] - Queue options (priority, delay, etc.)
 * @returns {Promise<Job>}
 */
export const queueNotification = async (notificationData, options = {}) => {
    try {
        const job = await notificationQueue.add(
            'send-notification',
            notificationData,
            {
                priority: options.priority || 1, // Lower number = higher priority
                delay: options.delay || 0, // Delay in ms
                ...options,
            }
        );

        logger.info(`📤 Notification job queued: ${job.id}`);
        return job;
    } catch (error) {
        logger.error('Failed to queue notification:', error);
        throw error;
    }
};

/**
 * Batch queue multiple notifications
 * @param {Array} notifications - Array of notification DTOs
 * @returns {Promise<Array<Job>>}
 */
export const queueBulkNotifications = async (notifications) => {
    try {
        const jobs = notifications.map((notification, index) => ({
            name: `bulk-notification-${index}`,
            data: notification,
            opts: {
                priority: notification.priority || 5,
            },
        }));

        const addedJobs = await notificationQueue.addBulk(jobs);

        logger.info(`📤 Bulk queued ${addedJobs.length} notifications`);
        return addedJobs;
    } catch (error) {
        logger.error('Failed to queue bulk notifications:', error);
        throw error;
    }
};

/**
 * Get queue statistics
 * @returns {Promise<object>}
 */
export const getQueueStats = async () => {
    const [waiting, active, completed, failed, delayed] = await Promise.all([
        notificationQueue.getWaitingCount(),
        notificationQueue.getActiveCount(),
        notificationQueue.getCompletedCount(),
        notificationQueue.getFailedCount(),
        notificationQueue.getDelayedCount(),
    ]);

    return {
        waiting,
        active,
        completed,
        failed,
        delayed,
        total: waiting + active + completed + failed + delayed,
    };
};

/**
 * Pause the queue (for maintenance)
 */
export const pauseQueue = async () => {
    await notificationQueue.pause();
    logger.warn('⏸️  Notification queue paused');
};

/**
 * Resume the queue
 */
export const resumeQueue = async () => {
    await notificationQueue.resume();
    logger.info('▶️  Notification queue resumed');
};

/**
 * Clean up old jobs
 */
export const cleanupQueue = async () => {
    await notificationQueue.clean(24 * 60 * 60 * 1000, 1000, 'completed'); // 24 hours
    await notificationQueue.clean(7 * 24 * 60 * 60 * 1000, 100, 'failed'); // 7 days
    logger.info('🧹 Queue cleanup completed');
};

/**
 * Graceful shutdown
 */
export const shutdownQueue = async () => {
    logger.info('Shutting down notification queue...');
    await notificationWorker.close();
    await notificationQueue.close();
    logger.info('Notification queue shut down successfully');
};

// Export queue instance for advanced usage
export { notificationQueue, not ificationWorker };

export default {
    queueNotification,
    queueBulkNotifications,
    getQueueStats,
    pauseQueue,
    resumeQueue,
    cleanupQueue,
    shutdownQueue,
};
```

## src/services/notificationSettings.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Get a user's notification preferences.
 * Creates default preferences if they don't exist.
 * @param {number} userId - The user's ID
 * @returns {Promise<Object>} The notification preferences
 */
export const getNotificationPreferences = async (userId) => {
  try {
    let settings = await prisma.notificationPreferences.findUnique({
      where: { userId },
    });

    // If settings don't exist, create them with schema defaults
    if (!settings) {
      logger.info(`No notification preferences found for user ${userId}, creating defaults.`);
      settings = await prisma.notificationPreferences.create({
        data: {
          userId,
          // All fields will use the @default values from schema.prisma
        },
      });
    }
    
    return settings;
  } catch (error) {
    logger.error('Error in getNotificationPreferences:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving notification preferences');
  }
};

/**
 * Create or update a user's notification preferences
 * @param {number} userId - The user's ID
 * @param {Object} data - Validated settings data
 * @returns {Promise<Object>} The updated settings
 */
export const updateNotificationPreferences = async (userId, data) => {
  try {
    const settings = await prisma.notificationPreferences.upsert({
      where: { userId },
      update: data,
      create: {
        userId,
        ...data,
      },
    });
    
    logger.info(`Notification preferences updated for user: ${userId}`);
    return settings;
  } catch (error) {
    logger.error('Error in updateNotificationPreferences:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating notification preferences');
  }
};

export const notificationSettingsService = {
  getNotificationPreferences,
  updateNotificationPreferences,
};```

## src/services/occupation.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Get the profileId for a given userId.
 * Throws an error if the profile does not exist.
 * @param {number} userId - The user's ID
 * @returns {Promise<number>} The user's profile ID
 */
const getProfileId = async (userId) => {
  const profile = await prisma.profile.findUnique({
    where: { userId },
    select: { id: true },
  });

  if (!profile) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
  }
  return profile.id;
};

/**
 * Create a new occupation entry for a user
 * @param {number} userId - The user's ID
 * @param {Object} data - Validated occupation data
 * @returns {Promise<Object>} The created occupation entry
 */
export const createOccupation = async (userId, data) => {
  const profileId = await getProfileId(userId);

  try {
    const occupation = await prisma.occupation.create({
      data: {
        profileId: profileId,
        ...data,
      },
    });
    logger.info(`Occupation entry created for user: ${userId}`);
    return occupation;
  } catch (error) {
    logger.error('Error in createOccupation:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error adding occupation');
  }
};

/**
 * Get all occupation entries for a user
 * @param {number} userId - The user's ID
 * @returns {Promise<Array>} A list of occupation entries
 */
export const getMyOccupations = async (userId) => {
  const profileId = await getProfileId(userId);

  try {
    return await prisma.occupation.findMany({
      where: { profileId },
      orderBy: {
        isCurrent: 'desc', // Show current job first
      },
    });
  } catch (error) {
    logger.error('Error in getMyOccupations:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving occupations');
  }
};

/**
 * Update a specific occupation entry
 * @param {number} userId - The user's ID
 * @param {number} occupationId - The ID of the occupation entry to update
 * @param {Object} data - Validated update data
 * @returns {Promise<Object>} The updated occupation entry
 */
export const updateOccupation = async (userId, occupationId, data) => {
  const profileId = await getProfileId(userId);

  try {
    const occupation = await prisma.occupation.findUnique({
      where: { id: occupationId },
    });

    if (!occupation) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Occupation entry not found');
    }

    // Security Check: Ensure the user owns this occupation entry
    if (occupation.profileId !== profileId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to update this entry');
    }

    const updatedOccupation = await prisma.occupation.update({
      where: { id: occupationId },
      data: data,
    });
    
    logger.info(`Occupation entry ${occupationId} updated for user: ${userId}`);
    return updatedOccupation;
  } catch (error) {
    logger.error('Error in updateOccupation:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating occupation');
  }
};

/**
 * Delete a specific occupation entry
 * @param {number} userId - The user's ID
 * @param {number} occupationId - The ID of the occupation entry to delete
 * @returns {Promise<void>}
 */
export const deleteOccupation = async (userId, occupationId) => {
  const profileId = await getProfileId(userId);

  try {
    const occupation = await prisma.occupation.findUnique({
      where: { id: occupationId },
    });

    if (!occupation) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Occupation entry not found');
    }

    // Security Check: Ensure the user owns this occupation entry
    if (occupation.profileId !== profileId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to delete this entry');
    }

    await prisma.occupation.delete({
      where: { id: occupationId },
    });

    logger.info(`Occupation entry ${occupationId} deleted for user: ${userId}`);
  } catch (error) {
    logger.error('Error in deleteOccupation:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting occupation');
  }
};

export const occupationService = {
  createOccupation,
  getMyOccupations,
  updateOccupation,
  deleteOccupation,
};```

## src/services/onlineStatus.service.js
```javascript
/**
 * Online Status Service
 * Manages last seen and online status
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

/**
 * Update user's online status
 */
export const updateOnlineStatus = async (userId, isOnline) => {
    try {
        await prisma.user.update({
            where: { id: userId },
            data: {
                isOnline,
                lastSeen: isOnline ? null : new Date(),
            },
        });
        return true;
    } catch (error) {
        logger.error('Error updating online status:', error);
        return false;
    }
};

/**
 * Set user as online
 */
export const setOnline = async (userId) => {
    return updateOnlineStatus(userId, true);
};

/**
 * Set user as offline and update last seen
 */
export const setOffline = async (userId) => {
    return updateOnlineStatus(userId, false);
};

/**
 * Get user's online status
 */
export const getOnlineStatus = async (userId) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                isOnline: true,
                lastSeen: true,
            },
        });

        if (!user) {
            return { isOnline: false, lastSeen: null };
        }

        return {
            isOnline: user.isOnline || false,
            lastSeen: user.lastSeen,
            lastSeenText: formatLastSeen(user.lastSeen, user.isOnline),
        };
    } catch (error) {
        logger.error('Error getting online status:', error);
        return { isOnline: false, lastSeen: null };
    }
};

/**
 * Format last seen for display
 */
const formatLastSeen = (lastSeen, isOnline) => {
    if (isOnline) return 'Online';
    if (!lastSeen) return 'Offline';

    const now = new Date();
    const diff = now - new Date(lastSeen);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;

    return new Date(lastSeen).toLocaleDateString();
};

/**
 * Get online status for multiple users
 */
export const getBulkOnlineStatus = async (userIds) => {
    try {
        const users = await prisma.user.findMany({
            where: { id: { in: userIds } },
            select: {
                id: true,
                isOnline: true,
                lastSeen: true,
            },
        });

        return users.reduce((acc, user) => {
            acc[user.id] = {
                isOnline: user.isOnline || false,
                lastSeen: user.lastSeen,
                lastSeenText: formatLastSeen(user.lastSeen, user.isOnline),
            };
            return acc;
        }, {});
    } catch (error) {
        logger.error('Error getting bulk online status:', error);
        return {};
    }
};

export default {
    setOnline,
    setOffline,
    getOnlineStatus,
    getBulkOnlineStatus,
    updateOnlineStatus,
};
```

## src/services/partnerPreference.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES } from '../utils/constants.js';
import { logger } from '../config/logger.js';

// Fields that are stored as JSON arrays in the database
const arrayTextFields = [
  'religion', 'caste', 'motherTongue', 'maritalStatus',
  'country', 'state', 'city', 'residencyStatus',
  'education', 'occupation', 'diet'
];

/**
 * Get the profileId for a given userId.
 * @param {number} userId - The user's ID
 * @returns {Promise<number>} The user's profile ID
 */
const getProfileId = async (userId) => {
  const profile = await prisma.profile.findUnique({
    where: { userId },
    select: { id: true },
  });
  if (!profile) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
  }
  return profile.id;
};

/**
 * Helper to stringify array fields for Prisma
 */
const processDataForSave = (data) => {
  const processedData = { ...data };
  for (const key of arrayTextFields) {
    if (Array.isArray(processedData[key])) {
      processedData[key] = JSON.stringify(processedData[key]);
    } else if (processedData[key] === null) {
      processedData[key] = '[]'; // Store empty array as string
    }
  }
  return processedData;
};

/**
 * Helper to parse JSON array fields from Prisma
 */
const parseDataAfterFetch = (preference) => {
  if (!preference) return null;
  const parsedPreference = { ...preference };
  for (const key of arrayTextFields) {
    if (typeof parsedPreference[key] === 'string') {
      try {
        parsedPreference[key] = JSON.parse(parsedPreference[key]);
      } catch (e) {
        logger.warn(`Failed to parse partner preference field '${key}' for profileId ${preference.profileId}`);
        parsedPreference[key] = []; // Default to empty array on parse error
      }
    }
  }
  return parsedPreference;
};

/**
 * Get a user's partner preferences
 * @param {number} userId - The user's ID
 * @returns {Promise<Object|null>} The partner preference object
 */
export const getMyPreference = async (userId) => {
  const profileId = await getProfileId(userId);
  try {
    const preference = await prisma.partnerPreference.findUnique({
      where: { profileId },
    });
    return parseDataAfterFetch(preference);
  } catch (error) {
    logger.error('Error in getMyPreference:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving preferences');
  }
};

/**
 * Create or update a user's partner preferences
 * @param {number} userId - The user's ID
 * @param {Object} data - Validated preference data
 * @returns {Promise<Object>} The upserted partner preference object
 */
export const upsertMyPreference = async (userId, data) => {
  const profileId = await getProfileId(userId);
  const processedData = processDataForSave(data);

  try {
    const preference = await prisma.partnerPreference.upsert({
      where: { profileId },
      update: processedData,
      create: {
        profileId,
        ...processedData,
      },
    });
    logger.info(`Partner preferences updated for user: ${userId}`);
    return parseDataAfterFetch(preference);
  } catch (error) {
    logger.error('Error in upsertMyPreference:', error);
    if (error.code === 'P2002') { // Should be handled by upsert, but as a fallback
      throw new ApiError(HTTP_STATUS.CONFLICT, 'Preferences already exist');
    }
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating preferences');
  }
};

export const partnerPreferenceService = {
  getMyPreference,
  upsertMyPreference,
};```

## src/services/payment.service.js
```javascript
import { razorpayInstance, getWebhookSecret, isRazorpayConfigured } from '../config/razorpay.js';
import { config } from '../config/config.js'; // Import config for KEY_SECRET
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import {
  HTTP_STATUS,
  PAYMENT_STATUS,
  SUBSCRIPTION_STATUS,
  USER_ROLES,
  NOTIFICATION_TYPES,
} from '../utils/constants.js';
import { logger } from '../config/logger.js';
import crypto from 'crypto';
import { getSocketIoInstance } from '../socket/index.js';
// ADDED: Import notification service for push notifications
import { notificationService } from './notification.service.js';

/**
 * Create Razorpay order
 * @param {number} userId - User ID
 * @param {number} planId - The ID of the subscription plan
 * @returns {Promise<Object>}
 */
export const createOrder = async (userId, planId) => {
  try {
    // Check if Razorpay is configured
    if (!isRazorpayConfigured()) {
      throw new ApiError(
        HTTP_STATUS.SERVICE_UNAVAILABLE,
        'Payment service is not configured. Please contact administrator.'
      );
    }
    // 1. Find the plan to get the secure amount
    const plan = await prisma.subscriptionPlan.findUnique({
      where: { id: planId, isActive: true },
    });

    if (!plan) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        'Subscription plan not found or is not active'
      );
    }

    const amount = plan.price; // Secure amount from DB
    const durationInDays = plan.duration;

    // 2. Create a PENDING UserSubscription
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + durationInDays);

    const subscription = await prisma.userSubscription.create({
      data: {
        userId,
        planId,
        status: SUBSCRIPTION_STATUS.PENDING,
        startDate: new Date(),
        endDate,
      },
    });

    // 3. Create a PENDING Payment record linked to the subscription
    // Generate a unique transaction ID upfront
    const transactionId = `txn_${Date.now()}_${userId}_${planId}`;
    const payment = await prisma.payment.create({
      data: {
        userId,
        subscriptionId: subscription.id,
        amount,
        currency: 'INR',
        status: PAYMENT_STATUS.PENDING,
        transactionId, // Required field
        // We will add razorpayOrderId after creating the order
      },
    });

    // 4. Create Razorpay order
    const razorpayOrder = await razorpayInstance.orders.create({
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `sub_${subscription.id}_pay_${payment.id}`, // Unique receipt
      notes: {
        userId,
        subscriptionId: subscription.id,
        planId: plan.id,
      },
    });

    // 5. Update our payment record with the Razorpay Order ID
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        razorpayOrderId: razorpayOrder.id,
        transactionId: `txn_${payment.id}`, // Use our internal ID for tracking
      },
    });

    logger.info(
      `Payment order created: ${razorpayOrder.id} for subscription ${subscription.id}`
    );

    // 6. Return order details to the client
    return {
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount, // Amount in paise
      currency: razorpayOrder.currency,
      paymentId: payment.id,
      key: config.RAZORPAY_KEY_ID, // Keep 'key' for SDK, also add razorpayKey for frontend
      razorpayKey: config.RAZORPAY_KEY_ID, // Frontend expects this field name
    };
  } catch (error) {
    logger.error('Error in createOrder:', error);
    logger.error('Error details:', { userId, planId, message: error.message });
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      `Failed to create payment order: ${error.message}`
    );
  }
};

/**
 * Create Razorpay order for subscription UPGRADE
 * Extends existing subscription by calculating remaining days + new plan duration
 * @param {number} userId - User ID
 * @param {number} newPlanId - The ID of the new subscription plan to upgrade to
 * @returns {Promise<Object>}
 */
export const createUpgradeOrder = async (userId, newPlanId) => {
  try {
    // Check if Razorpay is configured
    if (!isRazorpayConfigured()) {
      throw new ApiError(
        HTTP_STATUS.SERVICE_UNAVAILABLE,
        'Payment service is not configured. Please contact administrator.'
      );
    }

    // 1. Get current active subscription
    const currentSubscription = await prisma.userSubscription.findFirst({
      where: {
        userId,
        status: SUBSCRIPTION_STATUS.ACTIVE,
        endDate: { gt: new Date() },
      },
      include: { plan: true },
    });

    // 2. Get the new plan
    const newPlan = await prisma.subscriptionPlan.findUnique({
      where: { id: newPlanId, isActive: true },
    });

    if (!newPlan) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        'Subscription plan not found or is not active'
      );
    }

    // 3. Calculate remaining days from current subscription
    let remainingDays = 0;
    if (currentSubscription) {
      const now = new Date();
      const endDate = new Date(currentSubscription.endDate);
      remainingDays = Math.max(0, Math.ceil((endDate - now) / (1000 * 60 * 60 * 24)));
      logger.info(`User ${userId} has ${remainingDays} days remaining on current subscription`);
    }

    // 4. Calculate new end date = now + remaining days + new plan duration
    const totalDays = remainingDays + newPlan.duration;
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + totalDays);

    // 5. Create new subscription record (will replace current one on payment success)
    const subscription = await prisma.userSubscription.create({
      data: {
        userId,
        planId: newPlanId,
        status: SUBSCRIPTION_STATUS.PENDING,
        startDate: new Date(),
        endDate,
        // Mark as upgrade
        metadata: JSON.stringify({
          isUpgrade: true,
          previousSubscriptionId: currentSubscription?.id,
          remainingDaysCarried: remainingDays,
        }),
      },
    });

    // 6. Create payment record
    const transactionId = `txn_upgrade_${Date.now()}_${userId}_${newPlanId}`;
    const payment = await prisma.payment.create({
      data: {
        userId,
        subscriptionId: subscription.id,
        amount: newPlan.price,
        currency: 'INR',
        status: PAYMENT_STATUS.PENDING,
        transactionId,
      },
    });

    // 7. Create Razorpay order
    const razorpayOrder = await razorpayInstance.orders.create({
      amount: newPlan.price * 100, // Convert to paise
      currency: 'INR',
      receipt: `upgrade_${subscription.id}_pay_${payment.id}`,
      notes: {
        userId,
        subscriptionId: subscription.id,
        planId: newPlan.id,
        isUpgrade: true,
        remainingDays,
      },
    });

    // 8. Update payment with Razorpay order ID
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        razorpayOrderId: razorpayOrder.id,
        transactionId: `txn_${payment.id}`,
      },
    });

    logger.info(
      `Upgrade order created: ${razorpayOrder.id} for user ${userId}. Remaining days: ${remainingDays}, New total: ${totalDays} days`
    );

    return {
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      paymentId: payment.id,
      key: config.RAZORPAY_KEY_ID,
      razorpayKey: config.RAZORPAY_KEY_ID,
      // Additional info for frontend
      remainingDaysCredited: remainingDays,
      totalDays,
      newEndDate: endDate.toISOString(),
    };
  } catch (error) {
    logger.error('Error in createUpgradeOrder:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      `Failed to create upgrade order: ${error.message}`
    );
  }
};

/**
 * Verify payment signature (for client-side confirmation)
 * @param {Object} data - { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 * @returns {Promise<Object>}
 */
export const verifyPayment = async (data) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;

    const text = razorpay_order_id + '|' + razorpay_payment_id;

    // CRITICAL FIX: Use KEY_SECRET, not WEBHOOK_SECRET
    const expectedSignature = crypto
      .createHmac('sha256', config.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid payment signature');
    }

    // This check is for client-side feedback.
    // The webhook will handle the actual activation.
    const payment = await prisma.payment.findFirst({
      where: {
        razorpayOrderId: razorpay_order_id,
        status: PAYMENT_STATUS.PENDING,
      },
    });

    if (!payment) {
      // Payment might already be processed by webhook, which is fine
      logger.warn(
        `Client verification for already processed order: ${razorpay_order_id}`
      );
      return {
        success: true,
        paymentId: razorpay_payment_id,
        message: 'Payment already processed',
      };
    }

    // Update payment record
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        razorpayPaymentId: razorpay_payment_id,
        status: PAYMENT_STATUS.COMPLETED, // Mark as "COMPLETED" (client verified)
        paymentMethod: 'Razorpay', // Placeholder
        paidAt: new Date(),
      },
    });

    logger.info(`Payment verified by client: ${razorpay_payment_id}`);

    return { success: true, paymentId: razorpay_payment_id };
  } catch (error) {
    logger.error('Error in verifyPayment:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Payment verification failed'
    );
  }
};

/**
 * Handle payment webhook (Source of Truth for activation)
 * @param {Object} event - Webhook event body
 * @param {string} signature - Webhook signature
 * @returns {Promise<Object>}
 */
export const handleWebhook = async (event, signature) => {
  try {
    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', getWebhookSecret()) // Correctly uses Webhook Secret
      .update(JSON.stringify(event))
      .digest('hex');

    if (expectedSignature !== signature) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid webhook signature');
    }

    const { event: eventType, payload } = event;

    switch (eventType) {
      case 'payment.captured':
        await handlePaymentCaptured(payload.payment.entity);
        break;
      case 'payment.failed':
        await handlePaymentFailed(payload.payment.entity);
        break;
      // Add other events as needed, e.g., 'refund.processed'
      default:
        logger.info(`Unhandled webhook event: ${eventType}`);
    }

    return { success: true };
  } catch (error) {
    logger.error('Error in handleWebhook:', error);
    throw error; // Let the controller handle the response
  }
};

/**
 * Handle payment captured event (Activates subscription)
 * @param {Object} paymentEntity - Razorpay payment entity
 */
const handlePaymentCaptured = async (paymentEntity) => {
  const razorpayOrderId = paymentEntity.order_id;

  try {
    const payment = await prisma.payment.findFirst({
      where: { razorpayOrderId },
      include: { subscription: true },
    });

    if (!payment) {
      logger.error(
        `Webhook Error: Payment not found for order ID: ${razorpayOrderId}`
      );
      return;
    }

    // Idempotency check: If payment is already completed, do nothing
    if (payment.status === PAYMENT_STATUS.COMPLETED) {
      logger.warn(`Webhook Info: Payment ${payment.id} is already completed.`);
      return;
    }

    if (!payment.subscriptionId) {
      logger.error(`Webhook Error: Payment ${payment.id} has no subscriptionId.`);
      return;
    }

    // CRITICAL FIX: Update all related models in a transaction
    await prisma.$transaction([
      // 1. Update Payment
      prisma.payment.update({
        where: { id: payment.id },
        data: {
          razorpayPaymentId: paymentEntity.id,
          status: PAYMENT_STATUS.COMPLETED,
          paidAt: new Date(),
          paymentMethod: paymentEntity.method,
        },
      }),
      // 2. Activate Subscription
      prisma.userSubscription.update({
        where: { id: payment.subscriptionId },
        data: {
          status: SUBSCRIPTION_STATUS.ACTIVE,
        },
      }),
      // 3. Upgrade User Role
      prisma.user.update({
        where: { id: payment.userId },
        data: {
          role: USER_ROLES.PREMIUM_USER,
        },
      }),
    ]);

    // 4. (Optional but recommended) Emit socket event to user
    const io = getSocketIoInstance();
    if (io) {
      io.to(`user:${payment.userId}`).emit('SUBSCRIPTION_ACTIVATED', {
        planId: payment.subscription.planId,
        endDate: payment.subscription.endDate,
      });
    }

    // 5. ADDED: Send push notification for subscription activation
    notificationService.createNotification({
      userId: payment.userId,
      type: NOTIFICATION_TYPES.SUBSCRIPTION_ACTIVATED,
      title: 'Welcome to Premium! 🎉',
      message: 'Your subscription is now active. Enjoy unlimited messaging, contact viewing, and more!',
      data: {
        type: 'SUBSCRIPTION_ACTIVATED',
        planId: String(payment.subscription.planId),
        endDate: payment.subscription.endDate.toISOString(),
      },
    }).catch(err => logger.error('Failed to send subscription notification:', err));

    logger.info(`Payment captured and subscription activated: ${payment.id}`);
  } catch (error) {
    logger.error(
      `Error in handlePaymentCaptured for order ${razorpayOrderId}:`,
      error
    );
  }
};

/**
 * Handle payment failed event
 * @param {Object} paymentEntity - Razorpay payment entity
 */
const handlePaymentFailed = async (paymentEntity) => {
  const razorpayOrderId = paymentEntity.order_id;

  try {
    const payment = await prisma.payment.findFirst({
      where: { razorpayOrderId },
    });

    if (!payment || payment.status === PAYMENT_STATUS.FAILED) {
      return; // Not found or already marked as failed
    }

    await prisma.$transaction([
      // 1. Mark Payment as FAILED
      prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: PAYMENT_STATUS.FAILED,
          failureReason:
            paymentEntity.error_description || 'Payment failed at gateway',
        },
      }),
      // 2. Mark Subscription as FAILED
      prisma.userSubscription.update({
        where: { id: payment.subscriptionId },
        data: {
          status: SUBSCRIPTION_STATUS.CANCELLED, // Or FAILED if you add it
        },
      }),
    ]);

    logger.info(`Payment failed and subscription cancelled: ${payment.id}`);
  } catch (error) { // <-- FIX: Added opening brace
    logger.error(
      `Error in handlePaymentFailed for order ${razorpayOrderId}:`,
      error
    );
  } // <-- FIX: Added closing brace
}; // <-- FIX: Moved semicolon to end of function expression

/**
 * Get payment by ID
 * @param {number} paymentId - Payment ID (validated)
 * @returns {Promise<Object>}
 */
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

/**
 * Get user payments
 * @param {number} userId - User ID
 * @returns {Promise<Array>}
 */
export const getUserPayments = async (userId) => {
  try {
    const payments = await prisma.payment.findMany({
      where: { userId },
      include: {
        subscription: {
          include: {
            plan: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return payments;
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
};```

## src/services/photoPrivacy.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Get the privacy settings for a specific photo.
 * @param {number} userId - The user's ID
 * @param {number} mediaId - The photo's (media) ID
 * @returns {Promise<Object>} The photo privacy settings
 */
export const getPhotoPrivacySettings = async (userId, mediaId) => {
  try {
    const settings = await prisma.photoPrivacySettings.findUnique({
      where: { mediaId },
    });

    if (!settings) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Privacy settings not found for this photo');
    }

    // Security Check: Ensure the user owns this photo
    if (settings.userId !== userId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to view these settings');
    }
    
    return settings;
  } catch (error) {
    logger.error('Error in getPhotoPrivacySettings:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving photo privacy settings');
  }
};

/**
 * Update the privacy settings for a specific photo
 * @param {number} userId - The user's ID
 * @param {number} mediaId - The photo's (media) ID
 * @param {Object} data - Validated settings data
 * @returns {Promise<Object>} The updated settings
 */
export const updatePhotoPrivacySettings = async (userId, mediaId, data) => {
  try {
    // First, verify ownership by checking the settings
    const existingSettings = await prisma.photoPrivacySettings.findUnique({
      where: { mediaId },
    });

    if (!existingSettings) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Privacy settings not found for this photo');
    }
    
    if (existingSettings.userId !== userId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to update these settings');
    }

    // Now, update the settings
    const updatedSettings = await prisma.photoPrivacySettings.update({
      where: { mediaId },
      data: data,
    });
    
    logger.info(`Photo privacy settings updated for media: ${mediaId} by user: ${userId}`);
    return updatedSettings;
  } catch (error) {
    logger.error('Error in updatePhotoPrivacySettings:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating photo privacy settings');
  }
};

export const photoPrivacyService = {
  getPhotoPrivacySettings,
  updatePhotoPrivacySettings,
};```

## src/services/photoRequest.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, PHOTO_REQUEST_STATUS, USER_ROLES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import { blockService } from './block.service.js';
// Import notificationService to send notifications
import { notificationService } from './notification.service.js'; 

// Reusable select for public user data
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  profile: true,
};

/**
 * Create a new photo view request
 * @param {number} requesterId - The user making the request
 * @param {Object} data - Validated request data
 * @returns {Promise<Object>} The created photo view request
 */
export const createPhotoRequest = async (requesterId, data) => {
  const { photoId, message } = data;

  try {
    // 1. Get the photo, its owner, and its privacy settings
    const media = await prisma.media.findUnique({
      where: { id: photoId },
      include: { privacySettings: true },
    });

    if (!media) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Photo not found');
    }

    const ownerId = media.userId; // The user who owns the photo

    if (requesterId === ownerId) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'You cannot request to view your own photo');
    }

    // 2. Check for Blocks
    const blockedIdSet = await blockService.getAllBlockedUserIds(requesterId);
    if (blockedIdSet.has(ownerId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot interact with this user');
    }

    // 3. Check Requester's subscription (assuming this is a premium feature)
    // Note: This check is often best handled by the `requireSubscription` middleware on the route
    const requester = await prisma.user.findUnique({ where: { id: requesterId } });
    if (requester.role !== USER_ROLES.PREMIUM_USER && requester.role !== USER_ROLES.ADMIN) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You must be a premium member to request photo access');
    }

    // 4. Check Photo's privacy settings
    if (!media.privacySettings || !media.privacySettings.allowViewRequests) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'This user does not accept view requests for this photo');
    }

    // 5. Check for existing pending request (using the schema's unique constraint)
    const existingRequest = await prisma.photoViewRequest.findFirst({
        where: {
            requesterId,
            photoId,
            status: PHOTO_REQUEST_STATUS.PENDING
        }
    });

    if(existingRequest) {
        throw new ApiError(HTTP_STATUS.CONFLICT, 'You already have a pending request for this photo');
    }

    // 6. Create the request
    const request = await prisma.photoViewRequest.create({
      data: {
        requesterId,
        profileId: ownerId, // profileId in the schema is the owner's ID
        photoId,
        message: message || null,
        status: PHOTO_REQUEST_STATUS.PENDING,
      },
    });

    // 7. Send notification to the photo owner
    await notificationService.createNotification({
        userId: ownerId,
        type: 'PHOTO_VIEW_REQUEST', // TODO: Add this to constants.js
        title: 'New Photo View Request',
        message: `${requester.profile?.firstName || 'Someone'} has requested to view your photo.`,
        data: { requesterId, photoId, requestId: request.id },
    });
    
    logger.info(`Photo view request sent from ${requesterId} to ${ownerId} for photo ${photoId}`);
    return request;

  } catch (error) {
    logger.error('Error in createPhotoRequest:', error);
    if (error instanceof ApiError) throw error;
    if (error.code === 'P2002') { // Handle unique constraint
      throw new ApiError(HTTP_STATUS.CONFLICT, 'You already have a pending request for this photo');
    }
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error creating photo request');
  }
};

/**
 * Get all photo view requests sent by the user
 * @param {number} userId - The user's ID
 * @param {Object} query - Pagination and filter query
 * @returns {Promise<Object>} Paginated list of sent requests
 */
export const getSentRequests = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = { 
    requesterId: userId,
    ...(query.status && { status: query.status }),
  };

  try {
    const [requests, total] = await Promise.all([
      prisma.photoViewRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          profile: { select: userPublicSelect }, // 'profile' is relation to Owner
          photo: true, // Include media info
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.photoViewRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { requests, pagination };

  } catch (error) {
    logger.error('Error in getSentRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving sent requests');
  }
};

/**
 * Get all photo view requests received by the user
 * @param {number} userId - The user's ID
 * @param {Object} query - Pagination and filter query
 * @returns {Promise<Object>} Paginated list of received requests
 */
export const getReceivedRequests = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);
  
  const blockedIdSet = await blockService.getAllBlockedUserIds(userId);

  const where = {
    profileId: userId, // The user is the owner of the photo
    requesterId: { notIn: Array.from(blockedIdSet) },
    ...(query.status && { status: query.status }),
  };

  try {
    const [requests, total] = await Promise.all([
      prisma.photoViewRequest.findMany({
        where,
        skip,
        take: limit,
        include: {
          requester: { select: userPublicSelect }, // 'requester' is relation to User
          photo: true, // Include media info
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.photoViewRequest.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);
    return { requests, pagination };

  } catch (error) {
    logger.error('Error in getReceivedRequests:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving received requests');
  }
};

/**
 * Respond to a photo view request (Approve/Reject)
 * @param {number} userId - The user responding (must be the owner)
 * @param {number} requestId - The ID of the photo view request
 * @param {string} status - 'APPROVED' or 'REJECTED'
 * @returns {Promise<Object>} The updated photo view request
 */
export const respondToRequest = async (userId, requestId, status) => {
  try {
    const request = await prisma.photoViewRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Photo view request not found');
    }

    // Security check: Only the photo owner (profileId) can respond
    if (request.profileId !== userId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to respond to this request');
    }

    if (request.status !== PHOTO_REQUEST_STATUS.PENDING) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'This request has already been responded to');
    }

    // Set expiry date if approved
    const sevenDaysFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const updatedRequest = await prisma.photoViewRequest.update({
      where: { id: requestId },
      data: {
        status,
        ...(status === PHOTO_REQUEST_STATUS.APPROVED && { 
            approvedAt: new Date(),
            validUntil: sevenDaysFromNow // Set 7-day validity
        }),
      },
    });

    // Send notification to `requesterId` about the response
    const owner = await prisma.user.findUnique({ 
        where: { id: userId }, 
        select: { profile: { select: { firstName: true }}}
    });
    const ownerName = owner?.profile?.firstName || 'The owner';

    await notificationService.createNotification({
        userId: request.requesterId,
        type: status === 'APPROVED' ? 'PHOTO_REQUEST_APPROVED' : 'PHOTO_REQUEST_REJECTED', // TODO: Add to constants
        title: `Photo request ${status.toLowerCase()}`,
        message: `${ownerName} ${status.toLowerCase()} your request to view their photo.`,
        data: { profileId: userId, photoId: request.photoId, requestId: request.id },
    });
    
    logger.info(`Photo request ${requestId} was ${status} by user ${userId}`);
    return updatedRequest;

  } catch (error) {
    logger.error('Error in respondToRequest:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error responding to request');
  }
};

export const photoRequestService = {
  createPhotoRequest,
  getSentRequests,
  getReceivedRequests,
  respondToRequest,
};```

## src/services/privacy.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

// --- Helpers for parsing JSON fields ---
const communicationArrayFields = ['allowedReligions', 'allowedLocations'];
const searchArrayFields = ['excludedCountries'];

const processDataForSave = (data, arrayFields) => {
  const processedData = { ...data };
  for (const key of arrayFields) {
    if (Array.isArray(processedData[key])) {
      processedData[key] = JSON.stringify(processedData[key]);
    } else if (processedData[key] === null) {
      processedData[key] = '[]';
    }
  }
  return processedData;
};

const parseDataAfterFetch = (settings, arrayFields) => {
  if (!settings) return null;
  const parsedSettings = { ...settings };
  for (const key of arrayFields) {
    if (typeof parsedSettings[key] === 'string') {
      try {
        parsedSettings[key] = JSON.parse(parsedSettings[key]);
      } catch (e) {
        logger.warn(`Failed to parse settings field '${key}' for userId ${settings.userId}`);
        parsedSettings[key] = [];
      }
    }
  }
  return parsedSettings;
};


// --- ProfilePrivacy Service ---
export const getProfilePrivacy = async (userId) => {
  try {
    let settings = await prisma.profilePrivacySettings.findUnique({
      where: { userId },
    });
    if (!settings) {
      logger.info(`No profile privacy settings found for user ${userId}, creating defaults.`);
      settings = await prisma.profilePrivacySettings.create({ data: { userId } });
    }
    return settings;
  } catch (error) {
    logger.error('Error in getProfilePrivacy:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving privacy settings');
  }
};
export const updateProfilePrivacy = async (userId, data) => {
  try {
    const settings = await prisma.profilePrivacySettings.upsert({
      where: { userId },
      update: data,
      create: { userId, ...data },
    });
    logger.info(`Profile privacy settings updated for user: ${userId}`);
    return settings;
  } catch (error) {
    logger.error('Error in updateProfilePrivacy:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating privacy settings');
  }
};

// --- CommunicationPreferences Service ---
export const getCommunicationPreferences = async (userId) => {
  try {
    let settings = await prisma.communicationPreferences.findUnique({
      where: { userId },
    });
    if (!settings) {
      logger.info(`No communication preferences found for user ${userId}, creating defaults.`);
      settings = await prisma.communicationPreferences.create({ data: { userId } });
    }
    return parseDataAfterFetch(settings, communicationArrayFields);
  } catch (error) {
    logger.error('Error in getCommunicationPreferences:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving communication preferences');
  }
};
export const updateCommunicationPreferences = async (userId, data) => {
  const processedData = processDataForSave(data, communicationArrayFields);
  try {
    const settings = await prisma.communicationPreferences.upsert({
      where: { userId },
      update: processedData,
      create: { userId, ...processedData },
    });
    logger.info(`Communication preferences updated for user: ${userId}`);
    return parseDataAfterFetch(settings, communicationArrayFields);
  } catch (error) {
    logger.error('Error in updateCommunicationPreferences:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating communication preferences');
  }
};

// --- SearchVisibility Service ---
export const getSearchVisibilitySettings = async (userId) => {
  try {
    let settings = await prisma.searchVisibilitySettings.findUnique({
      where: { userId },
    });
    if (!settings) {
      logger.info(`No search visibility settings found for user ${userId}, creating defaults.`);
      settings = await prisma.searchVisibilitySettings.create({ data: { userId } });
    }
    return parseDataAfterFetch(settings, searchArrayFields);
  } catch (error) {
    logger.error('Error in getSearchVisibilitySettings:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving search settings');
  }
};
export const updateSearchVisibilitySettings = async (userId, data) => {
  const processedData = processDataForSave(data, searchArrayFields);
  try {
    const settings = await prisma.searchVisibilitySettings.upsert({
      where: { userId },
      update: processedData,
      create: { userId, ...processedData },
    });
    logger.info(`Search visibility settings updated for user: ${userId}`);
    return parseDataAfterFetch(settings, searchArrayFields);
  } catch (error) {
    logger.error('Error in updateSearchVisibilitySettings:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating search settings');
  }
};

// --- AccountSecurity Service [NEW] ---

/**
 * [NEW] Get a user's account security settings.
 * Creates default settings if they don't exist.
 * @param {number} userId - The user's ID
 * @returns {Promise<Object>} The account security settings
 */
export const getAccountSecuritySettings = async (userId) => {
  try {
    let settings = await prisma.accountSecuritySettings.findUnique({
      where: { userId },
    });

    if (!settings) {
      logger.info(`No account security settings found for user ${userId}, creating defaults.`);
      settings = await prisma.accountSecuritySettings.create({
        data: {
          userId,
          // All fields will use the @default values from schema.prisma
        },
      });
    }
    
    // Do not return sensitive fields like twoFactorSecret or backupCodes
    // FIX: Destructure the original field name to an underscore-prefixed variable
    const { twoFactorSecret: _twoFactorSecret, backupCodes: _backupCodes, ...safeSettings } = settings;
    return safeSettings;
  } catch (error) {
    logger.error('Error in getAccountSecuritySettings:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving security settings');
  }
};

/**
 * [NEW] Create or update a user's account security settings
 * @param {number} userId - The user's ID
 * @param {Object} data - Validated settings data
 * @returns {Promise<Object>} The updated settings
 */
export const updateAccountSecuritySettings = async (userId, data) => {
  try {
    // Prevent client from updating sensitive fields
    // FIX: Destructure the original field name to an underscore-prefixed variable
    const { 
      twoFactorSecret: _twoFactorSecret, 
      backupCodes: _backupCodes, 
      recoveryEmailVerified: _recoveryEmailVerified, 
      recoveryPhoneVerified: _recoveryPhoneVerified, 
      ...safeData 
    } = data;

    const settings = await prisma.accountSecuritySettings.upsert({
      where: { userId },
      update: safeData,
      create: {
        userId,
        ...safeData,
      },
    });
    
    logger.info(`Account security settings updated for user: ${userId}`);
    // Do not return sensitive fields
    // FIX: Destructure the original field name to an underscore-prefixed variable
    const { twoFactorSecret: _s, backupCodes: _b, ...safeSettings } = settings;
    return safeSettings;
  } catch (error) {
    logger.error('Error in updateAccountSecuritySettings:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating security settings');
  }
};

export const privacyService = {
  getProfilePrivacy,
  updateProfilePrivacy,
  getCommunicationPreferences,
  updateCommunicationPreferences,
  getSearchVisibilitySettings,
  updateSearchVisibilitySettings,
  getAccountSecuritySettings,     // ADDED
  updateAccountSecuritySettings,  // ADDED
};```

## src/services/profile.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES } from '../utils/constants.js';
import {
  getPaginationParams,
  getPaginationMetadata,
  calculateAge,
} from '../utils/helpers.js';
import { updateProfileCompleteness } from '../utils/profile.helpers.js';
import { logger } from '../config/logger.js';
// Import uploadService to delete R2 objects
import { uploadService } from './upload.service.js';
// ADDED: Import blockService to filter searches
import { blockService } from './block.service.js';

/**
 * Create user profile
 * @param {string} userId - User ID
 * @param {Object} data - Profile data (validated)
 * @returns {Promise<Object>}
 */
export const createProfile = async (userId, data) => {
  try {
    // Check if profile already exists
    const existingProfile = await prisma.profile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'Profile already exists');
    }

    // eslint-disable-next-line no-unused-vars
    const validData = data;

    const profile = await prisma.profile.create({
      data: {
        userId,
        ...validData,
        isDraft: false,        // Mark as complete
        isPublished: true,     // Auto-publish so it appears in searches
        publishedAt: new Date(), // Set publish timestamp
      },
    });

    // Calculate and update completeness score
    const score = await updateProfileCompleteness(prisma, userId);
    profile.profileCompleteness = score;

    logger.info(`Profile created for user: ${userId}`);
    return profile;
  } catch (error) {
    logger.error('Error in createProfile:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error creating profile');
  }
};

/**
 * Get profile by user ID
 * @param {number} userId - ID of the profile to get
 * @param {number} [currentUserId] - ID of the user making the request
 * @returns {Promise<Object>}
 */
export const getProfileByUserId = async (userId, currentUserId = null) => {
  try {
    // --- Block Check [ADDED] ---
    if (currentUserId && userId !== currentUserId) {
      const blockedIdSet = await blockService.getAllBlockedUserIds(currentUserId);
      if (blockedIdSet.has(userId)) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
      }
    }
    // --- End Block Check ---

    const profile = await prisma.profile.findUnique({
      where: { userId, user: { isActive: true, isBanned: false } }, // ADDED: Check user status
      include: {
        user: {
          select: {
            id: true,
            email: true, // Safe to show email on a profile page
            role: true,
            createdAt: true,
          },
        },
        // MODIFIED: Also include privacy settings for each media
        media: {
          include: {
            privacySettings: true,
          },
        },
        education: true,
        occupations: true,
      },
    });

    if (!profile) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
    }

    // --- Match Status Check [ADDED] ---
    let matchStatus = null;
    if (currentUserId && userId !== currentUserId) {
      const matchRequest = await prisma.matchRequest.findFirst({
        where: {
          OR: [
            { senderId: currentUserId, receiverId: userId },
            { senderId: userId, receiverId: currentUserId },
          ],
        },
        select: { status: true, senderId: true },
      });

      // If found, set status. Also useful to know WHO sent it, but status is key.
      matchStatus = matchRequest?.status || null;

      // Special case: If I am the receiver and it's PENDING, viewed logic might vary?
      // For now, just returning the status key ('PENDING', 'ACCEPTED', etc.) is enough.
    }
    // --- End Match Status Check ---

    // Transform media to match frontend expectations
    const transformedMedia = profile.media?.map(m => ({
      id: m.id,
      url: m.url,
      thumbnailUrl: m.thumbnailUrl,
      type: m.type,
      isProfilePicture: m.isDefault,
      // ADDED: Pass privacy settings along
      privacySettings: m.privacySettings,
    })) || [];

    // Add calculated age and transformed media
    return {
      ...profile,
      media: transformedMedia,
      isVerified: profile.isVerified,
      isActive: true,
      age: calculateAge(profile.dateOfBirth),
      matchStatus, // Added to response
    };
  } catch (error) {
    logger.error('Error in getProfileByUserId:', error);
    logger.error('Error stack:', error.stack); // Add stack trace
    logger.error('Error details:', { userId, currentUserId, message: error.message }); // Add context
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Error retrieving profile: ${error.message}`);
  }
};

/**
 * Update profile
 * @param {string} userId - User ID
 * @param {Object} data - Update data (validated and safe)
 * @returns {Promise<Object>}
 */
export const updateProfile = async (userId, data) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const validData = data;

    const updatedProfile = await prisma.profile.update({
      where: { userId },
      data: validData,
    });

    // Recalculate and update completeness score
    const score = await updateProfileCompleteness(prisma, userId);
    updatedProfile.profileCompleteness = score;

    logger.info(`Profile updated for user: ${userId}`);

    return {
      ...updatedProfile,
      age: calculateAge(updatedProfile.dateOfBirth),
    };
  } catch (error) {
    logger.error('Error in updateProfile:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating profile');
  }
};

/**
 * Delete profile
 * @param {string} userId - User ID
 * @returns {Promise<void>}
 */
export const deleteProfile = async (userId) => {
  try {
    await prisma.profile.delete({
      where: { userId },
    });

    logger.info(`Profile deleted for user: ${userId}`);
  } catch (error) {
    logger.error('Error in deleteProfile:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting profile');
  }
};

/**
 * Search/filter profiles with optional type-based algorithms
 * @param {Object} query - Search parameters
 * @param {number} currentUserId - ID of requesting user
 * @returns {Promise<Object>}
 */
export const searchProfiles = async (query, currentUserId = null) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const {
      gender,
      minAge,
      maxAge,
      religions,
      castes,
      maritalStatus,
      minHeight,
      maxHeight,
      nativeVillage,
      speaksChhattisgarhi,
      category,
      // NEW FILTERS
      education,
      income,
      annualIncome,
      withPhoto,
      isVerified,
      // SECTION TYPE - featured, new, recommended
      type,
    } = query;

    const where = {
      isPublished: true,
      user: {
        isActive: true,
        isBanned: false,
      }
    };

    // ADDED: Auto-filter by opposite gender if user is logged in
    if (currentUserId) {
      const blockedIds = Array.from(await blockService.getAllBlockedUserIds(currentUserId));
      blockedIds.push(currentUserId);
      where.userId = { notIn: blockedIds };

      // Get current user's gender and filter opposite
      if (!gender) { // Only auto-filter if gender not explicitly provided
        const currentUserProfile = await prisma.profile.findUnique({
          where: { userId: currentUserId },
          select: { gender: true },
        });

        if (currentUserProfile?.gender) {
          // Filter opposite gender: Male sees Female, Female sees Male
          where.gender = currentUserProfile.gender === 'MALE' ? 'FEMALE' : 'MALE';
        }
      }
    }

    if (gender) where.gender = gender;

    // Marital Status - Support comma-separated string or array
    if (maritalStatus) {
      const statuses = typeof maritalStatus === 'string'
        ? maritalStatus.split(',').map(s => s.trim().toUpperCase().replace(/ /g, '_'))
        : maritalStatus;
      if (statuses.length === 1) {
        where.maritalStatus = statuses[0];
      } else if (statuses.length > 1) {
        where.maritalStatus = { in: statuses };
      }
    }

    if (nativeVillage) where.nativeVillage = { contains: nativeVillage, mode: 'insensitive' };
    if (speaksChhattisgarhi !== undefined) where.speaksChhattisgarhi = speaksChhattisgarhi === 'true' || speaksChhattisgarhi === true;
    if (category) where.category = { equals: category, mode: 'insensitive' }; // ADDED


    // Religion - Support comma-separated string or array
    if (religions) {
      const religionList = typeof religions === 'string' ? religions.split(',').map(r => r.trim().toUpperCase()) : religions;
      if (religionList.length > 0) {
        where.religion = { in: religionList };
      }
    }

    // Caste - Support comma-separated string or array
    if (castes) {
      const casteList = typeof castes === 'string' ? castes.split(',').map(c => c.trim()) : castes;
      if (casteList.length > 0) {
        where.caste = { in: casteList, mode: 'insensitive' };
      }
    }

    // Height filters (in cm)
    if (minHeight) where.height = { ...where.height, gte: parseFloat(minHeight) };
    if (maxHeight) where.height = { ...where.height, lte: parseFloat(maxHeight) };

    // Age filter via DOB calculation
    if (minAge || maxAge) {
      const today = new Date();
      where.dateOfBirth = {};
      if (minAge) {
        const maxDOB = new Date(today.getFullYear() - parseInt(minAge), today.getMonth(), today.getDate());
        where.dateOfBirth.lte = maxDOB;
      }
      if (maxAge) {
        const minDOB = new Date(today.getFullYear() - parseInt(maxAge) - 1, today.getMonth(), today.getDate());
        where.dateOfBirth.gte = minDOB;
      }
    }

    // NEW: Education filter
    if (education && education !== 'Any') {
      where.education = { contains: education, mode: 'insensitive' };
    }

    // NEW: Income/AnnualIncome filter
    const incomeValue = income || annualIncome;
    if (incomeValue && incomeValue !== 'Any') {
      // Parse income ranges like "3-6 LPA", "10-15 LPA", "25+ LPA"
      if (incomeValue.includes('+')) {
        // "25+ LPA" means >= 25
        where.annualIncome = { contains: incomeValue.replace('+', ''), mode: 'insensitive' };
      } else {
        where.annualIncome = { contains: incomeValue, mode: 'insensitive' };
      }
    }

    // NEW: Is Verified filter
    if (isVerified !== undefined) {
      where.isVerified = isVerified === 'true' || isVerified === true;
    }

    // === TYPE-BASED ALGORITHMS ===
    let orderBy = [{ user: { role: 'desc' } }]; // Default: Premium first

    if (type === 'featured') {
      // FEATURED: Premium users with high profile completeness and photos
      // Algorithm: Premium first, then by completeness, must have photos
      where.profileCompleteness = { gte: 60 };
      where.media = { some: { type: { in: ['PROFILE_PHOTO', 'GALLERY_PHOTO'] } } };
      orderBy = [
        { user: { role: 'desc' } },           // Premium first
        { profileCompleteness: 'desc' },       // Then by completeness
        { viewCount: 'desc' },                 // Then by popularity
      ];
    } else if (type === 'new' || type === 'justJoined') {
      // NEW/JUST JOINED: Profiles created in last 7 days
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      where.createdAt = { gte: sevenDaysAgo };
      orderBy = [
        { createdAt: 'desc' },                 // Newest first
        { profileCompleteness: 'desc' },       // Then by completeness
      ];
    } else if (type === 'recommended') {
      // RECOMMENDED: Matching partner preferences (if available)
      // For now: profiles with high completeness ordered by interaction potential
      orderBy = [
        { profileCompleteness: 'desc' },       // Most complete profiles
        { viewCount: 'desc' },                 // Popular profiles
        { user: { role: 'desc' } },            // Premium users
      ];
    }

    // Base query options
    const queryOptions = {
      where,
      skip,
      take: limit,
      include: {
        user: { select: { id: true, role: true } },
        media: {
          where: { type: 'PROFILE_PHOTO' },
          include: { privacySettings: true }
        },
      },
      orderBy,
    };

    // NEW: With Photo filter - only include profiles with at least one photo
    if (withPhoto === 'true' || withPhoto === true) {
      queryOptions.where.media = {
        some: {
          type: { in: ['PROFILE_PHOTO', 'GALLERY_PHOTO'] }
        }
      };
    }

    const [profiles, total] = await Promise.all([
      prisma.profile.findMany(queryOptions),
      prisma.profile.count({ where }),
    ]);

    // Add match status for each profile
    const profilesWithAge = await Promise.all(profiles.map(async (profile) => {
      let matchStatus = null;

      if (currentUserId) {
        // Check if there's a match request between current user and this profile
        const matchRequest = await prisma.matchRequest.findFirst({
          where: {
            OR: [
              { senderId: currentUserId, receiverId: profile.userId },
              { senderId: profile.userId, receiverId: currentUserId },
            ],
          },
          select: { status: true },
        });

        matchStatus = matchRequest?.status || null;
      }

      return {
        ...profile,
        age: calculateAge(profile.dateOfBirth),
        matchStatus, // 'PENDING', 'ACCEPTED', 'REJECTED', or null
      };
    }));

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      profiles: profilesWithAge,
      pagination,
    };
  } catch (error) {
    logger.error('Error in searchProfiles:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error searching profiles');
  }
};

/**
 * Add photo URL to Media table
 * @param {string} userId - User ID
 * @param {Object} mediaData - { url, thumbnailUrl, key, ... } from uploadService
 * @param {string} mediaType - e.g., 'PROFILE_PHOTO'
 * @returns {Promise<Object>}
 */
export const addPhoto = async (userId, mediaData, mediaType) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
    }

    // --- MODIFICATION [ADDED] ---
    // Create Media and its PhotoPrivacySettings in a transaction
    const newMedia = await prisma.$transaction(async (tx) => {
      // 1. Create the Media object
      const media = await tx.media.create({
        data: {
          userId: userId,
          profileId: profile.id,
          type: mediaType,
          url: mediaData.url,
          thumbnailUrl: mediaData.thumbnailUrl,
          fileName: mediaData.fileName, // Corrected from filename
          fileSize: mediaData.fileSize,
          mimeType: mediaData.mimeType,
          // TODO: Add logic for isDefault
        },
      });

      // 2. Create the default PhotoPrivacySettings for this media
      await tx.photoPrivacySettings.create({
        data: {
          mediaId: media.id,
          userId: userId,
          // All other fields will use the @default values from schema.prisma
        },
      });

      return media;
    });
    // --- End Modification ---

    // Recalculate profile completeness
    await updateProfileCompleteness(prisma, userId);

    logger.info(`Photo and privacy settings added for user: ${userId}`);
    // Return the media object (the privacy settings are linked)
    return newMedia;
  } catch (error) {
    logger.error('Error in addPhoto:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error adding photo');
  }
};

/**
 * Remove photo from Media table and R2
 * @param {string} userId - User ID (for verification)
 * @param {number} mediaId - The ID of the media to delete
 * @returns {Promise<void>}
 */
export const deletePhoto = async (userId, mediaId) => {
  try {
    const media = await prisma.media.findUnique({
      where: { id: mediaId },
    });

    if (!media) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Photo not found');
    }

    if (media.userId !== userId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to delete this photo');
    }

    // 1. Delete from R2
    const key = uploadService.extractKeyFromUrl(media.url);
    if (key) {
      await uploadService.deleteFile(key);
    }
    if (media.thumbnailUrl) {
      const thumbKey = uploadService.extractKeyFromUrl(media.thumbnailUrl);
      if (thumbKey) {
        await uploadService.deleteFile(thumbKey);
      }
    }

    // 2. Delete from database
    // The `onDelete: Cascade` in Prisma schema for PhotoPrivacySettings
    // ensures that the privacy settings are automatically deleted when the media is deleted.
    await prisma.media.delete({
      where: { id: mediaId },
    });

    // 3. Recalculate profile completeness
    await updateProfileCompleteness(prisma, userId);

    logger.info(`Photo deleted: ${mediaId} by user: ${userId}`);
  } catch (error) {
    logger.error('Error in deletePhoto:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting photo');
  }
};

export const profileService = {
  createProfile,
  getProfileByUserId,
  updateProfile,
  deleteProfile,
  searchProfiles,
  addPhoto,
  deletePhoto,
};```

## src/services/profileBoost.service.js
```javascript
/**
 * Profile Boost Service
 * Handles spotlight/boost feature for premium visibility
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

// Boost pricing and duration
export const BOOST_PACKAGES = {
    SPOTLIGHT_1HR: {
        id: 'spotlight_1hr',
        name: '1 Hour Spotlight',
        price: 49,
        durationHours: 1,
        multiplier: 5, // 5x visibility
        description: 'Be on top for 1 hour',
    },
    SPOTLIGHT_3HR: {
        id: 'spotlight_3hr',
        name: '3 Hour Spotlight',
        price: 99,
        durationHours: 3,
        multiplier: 5,
        description: 'Be on top for 3 hours',
    },
    BOOST_24HR: {
        id: 'boost_24hr',
        name: '24 Hour Boost',
        price: 149,
        durationHours: 24,
        multiplier: 3, // 3x visibility
        description: 'Boost visibility for 24 hours',
    },
    BOOST_7DAY: {
        id: 'boost_7day',
        name: '7 Day Boost',
        price: 499,
        durationHours: 168, // 7 * 24
        multiplier: 2,
        description: 'Week-long visibility boost',
    },
    HIGHLIGHTER: {
        id: 'highlighter',
        name: 'Profile Highlighter',
        price: 199,
        durationHours: 168, // 7 days
        multiplier: 1,
        isHighlighted: true,
        description: 'Golden border on your profile',
    },
};

/**
 * Activate a boost for user
 * @param {number} userId - User ID
 * @param {string} boostType - SPOTLIGHT_1HR, BOOST_24HR, etc.
 * @param {string} transactionId - Payment transaction ID
 */
export const activateBoost = async (userId, boostType, transactionId) => {
    // Lookup by key first, then by id for flexibility
    let boostPackage = BOOST_PACKAGES[boostType];
    let resolvedBoostType = boostType;
    if (!boostPackage && boostType) {
        // Try finding by id (lowercase)
        const lowerType = boostType.toLowerCase();
        const entry = Object.entries(BOOST_PACKAGES).find(([key, pkg]) =>
            pkg.id === boostType || pkg.id === lowerType
        );
        if (entry) {
            resolvedBoostType = entry[0]; // Use the key for storage
            boostPackage = entry[1];
        }
    }

    if (!boostPackage) {
        throw new Error('Invalid boost package');
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + boostPackage.durationHours * 60 * 60 * 1000);

    // Create boost record
    const boost = await prisma.profileBoost.create({
        data: {
            userId,
            boostType: resolvedBoostType, // Use resolved key for consistency
            multiplier: boostPackage.multiplier,
            isHighlighted: boostPackage.isHighlighted || false,
            price: boostPackage.price,
            transactionId,
            activatedAt: now,
            expiresAt,
            status: 'ACTIVE',
        },
    });

    logger.info(`Boost activated: ${resolvedBoostType} for user ${userId} until ${expiresAt}`);

    return {
        boost,
        package: boostPackage,
        expiresAt,
    };
};

/**
 * Check if user has active boost
 * @param {number} userId - User ID
 */
export const getActiveBoost = async (userId) => {
    const now = new Date();

    const activeBoost = await prisma.profileBoost.findFirst({
        where: {
            userId,
            status: 'ACTIVE',
            expiresAt: { gt: now },
        },
        orderBy: { multiplier: 'desc' }, // Get highest multiplier boost
    });

    if (!activeBoost) {
        return null;
    }

    const remainingMinutes = Math.round((activeBoost.expiresAt.getTime() - now.getTime()) / 60000);

    return {
        ...activeBoost,
        remainingMinutes,
        remainingHours: Math.ceil(remainingMinutes / 60),
        package: BOOST_PACKAGES[activeBoost.boostType],
    };
};

/**
 * Get boosted profiles for search results
 * Returns user IDs that should be shown first
 */
export const getBoostedProfileIds = async (limit = 10) => {
    const now = new Date();

    const boostedProfiles = await prisma.profileBoost.findMany({
        where: {
            status: 'ACTIVE',
            expiresAt: { gt: now },
        },
        orderBy: [
            { multiplier: 'desc' },
            { activatedAt: 'desc' },
        ],
        take: limit,
        select: { userId: true, multiplier: true, isHighlighted: true },
    });

    return boostedProfiles;
};

/**
 * Get highlighted profile IDs (for golden border)
 */
export const getHighlightedProfileIds = async () => {
    const now = new Date();

    const highlighted = await prisma.profileBoost.findMany({
        where: {
            status: 'ACTIVE',
            isHighlighted: true,
            expiresAt: { gt: now },
        },
        select: { userId: true },
    });

    return highlighted.map(h => h.userId);
};

/**
 * Expire old boosts (run via cron)
 */
export const expireOldBoosts = async () => {
    const now = new Date();

    const result = await prisma.profileBoost.updateMany({
        where: {
            status: 'ACTIVE',
            expiresAt: { lte: now },
        },
        data: {
            status: 'EXPIRED',
        },
    });

    if (result.count > 0) {
        logger.info(`Expired ${result.count} boosts`);
    }

    return result.count;
};

/**
 * Get all available boost packages
 */
export const getBoostPackages = () => {
    return Object.values(BOOST_PACKAGES);
};

export default {
    activateBoost,
    getActiveBoost,
    getBoostedProfileIds,
    getHighlightedProfileIds,
    expireOldBoosts,
    getBoostPackages,
    BOOST_PACKAGES,
};
```

## src/services/profileCompletion.service.js
```javascript
/**
 * Profile Completion Service
 * Calculates profile completion percentage to encourage users to complete their profiles
 */

import prisma from '../config/database.js';

// Field weights for completion calculation
const PROFILE_FIELDS = {
    // Basic Info (30%)
    firstName: { weight: 5, required: true },
    lastName: { weight: 5, required: true },
    dateOfBirth: { weight: 5, required: true },
    gender: { weight: 5, required: true },
    height: { weight: 5, required: false },
    weight: { weight: 2, required: false },
    maritalStatus: { weight: 3, required: true },

    // Photos (20%)
    photos: { weight: 15, required: false, isArray: true, minCount: 1 },
    profilePhoto: { weight: 5, required: false },

    // Education & Career (15%)
    education: { weight: 5, required: false },
    occupation: { weight: 5, required: false },
    annualIncome: { weight: 3, required: false },
    employedIn: { weight: 2, required: false },

    // Religion & Community (15%)
    religion: { weight: 5, required: true },
    caste: { weight: 3, required: false },
    motherTongue: { weight: 3, required: false },
    gotra: { weight: 2, required: false },
    subCaste: { weight: 2, required: false },

    // Location (10%)
    country: { weight: 3, required: true },
    state: { weight: 3, required: true },
    city: { weight: 4, required: true },

    // About & Family (10%)
    bio: { weight: 4, required: false },
    aboutFamily: { weight: 3, required: false },
    partnerExpectations: { weight: 3, required: false },
};

/**
 * Calculate profile completion percentage
 * @param {object} profile - Profile object from database
 * @returns {{ percentage: number, completed: string[], pending: string[], tips: string[] }}
 */
export const calculateProfileCompletion = (profile) => {
    if (!profile) {
        return { percentage: 0, completed: [], pending: Object.keys(PROFILE_FIELDS), tips: ['Start by adding your basic information'] };
    }

    let totalWeight = 0;
    let earnedWeight = 0;
    const completed = [];
    const pending = [];
    const tips = [];

    for (const [field, config] of Object.entries(PROFILE_FIELDS)) {
        totalWeight += config.weight;

        const value = profile[field];
        let isComplete = false;

        if (config.isArray) {
            // For arrays like photos
            isComplete = Array.isArray(value) && value.length >= (config.minCount || 1);
        } else if (typeof value === 'string') {
            isComplete = value.trim().length > 0;
        } else if (typeof value === 'number') {
            isComplete = value > 0;
        } else if (value instanceof Date) {
            isComplete = true;
        } else {
            isComplete = value !== null && value !== undefined;
        }

        if (isComplete) {
            earnedWeight += config.weight;
            completed.push(field);
        } else {
            pending.push(field);
            if (config.required) {
                tips.push(getFieldTip(field));
            }
        }
    }

    const percentage = Math.round((earnedWeight / totalWeight) * 100);

    // Add general tips based on completion level
    if (percentage < 50) {
        tips.unshift('Complete your profile to get 3x more matches!');
    } else if (percentage < 80) {
        tips.unshift('Add a photo to boost your profile visibility');
    } else if (percentage < 100) {
        tips.unshift("You're almost there! Complete the remaining fields");
    }

    return {
        percentage,
        completed,
        pending,
        tips: tips.slice(0, 3), // Max 3 tips
    };
};

/**
 * Get user-friendly tip for missing field
 */
const getFieldTip = (field) => {
    const tips = {
        firstName: 'Add your first name',
        lastName: 'Add your last name',
        dateOfBirth: 'Add your date of birth',
        gender: 'Select your gender',
        height: 'Add your height',
        photos: 'Upload at least one photo',
        education: 'Add your education details',
        occupation: 'Add your occupation',
        religion: 'Select your religion',
        country: 'Add your location',
        state: 'Add your state',
        city: 'Add your city',
        bio: 'Write a short bio about yourself',
        partnerExpectations: 'Describe your partner expectations',
    };
    return tips[field] || `Complete ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
};

/**
 * Get profile completion for a user
 * @param {number} userId - User ID
 */
export const getProfileCompletionForUser = async (userId) => {
    const profile = await prisma.profile.findUnique({
        where: { userId },
        include: {
            photos: true,
        },
    });

    if (!profile) {
        return { percentage: 0, completed: [], pending: ['profile'], tips: ['Create your profile to get started'] };
    }

    // Add photos array to profile object
    const profileWithPhotos = {
        ...profile,
        photos: profile.photos || [],
    };

    return calculateProfileCompletion(profileWithPhotos);
};

/**
 * Get completion level badge
 */
export const getCompletionBadge = (percentage) => {
    if (percentage >= 100) return { level: 'COMPLETE', emoji: '🏆', color: '#FFD700' };
    if (percentage >= 80) return { level: 'EXCELLENT', emoji: '⭐', color: '#4CAF50' };
    if (percentage >= 60) return { level: 'GOOD', emoji: '👍', color: '#2196F3' };
    if (percentage >= 40) return { level: 'FAIR', emoji: '📝', color: '#FF9800' };
    return { level: 'INCOMPLETE', emoji: '⚠️', color: '#F44336' };
};

export default {
    calculateProfileCompletion,
    getProfileCompletionForUser,
    getCompletionBadge,
    PROFILE_FIELDS,
};
```

## src/services/profileView.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, NOTIFICATION_TYPES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import { blockService } from './block.service.js';
import { notificationService } from './notification.service.js';

// Reusable select for public user data
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  profile: true,
};

/**
 * Log that a user has viewed another user's profile
 * @param {number} viewerId - The user viewing the profile
 * @param {number} profileId - The userId of the profile being viewed
 * @param {boolean} isAnonymous - If the view is anonymous
 * @returns {Promise<Object>} The new or existing profile view entry
 */
export const logProfileView = async (viewerId, profileId, isAnonymous = false) => {
  if (viewerId === profileId) {
    // Don't log self-views
    return { message: 'Cannot view your own profile' };
  }

  try {
    // --- Check User Subscription Status ---
    const viewer = await prisma.user.findUnique({
      where: { id: viewerId },
      include: {
        subscriptions: {
          where: { status: 'ACTIVE', endDate: { gt: new Date() } },
          take: 1,
        },
        profile: { select: { firstName: true, lastName: true } },
      },
    });

    const isPremium = viewer?.subscriptions?.length > 0 || viewer?.role === 'PREMIUM_USER';

    // --- Free User Daily Limit Check ---
    if (!isPremium) {
      const FREE_DAILY_VIEW_LIMIT = 10;
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const viewsToday = await prisma.profileView.count({
        where: {
          viewerId,
          viewedAt: { gte: startOfDay },
        },
      });

      if (viewsToday >= FREE_DAILY_VIEW_LIMIT) {
        throw new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `Free users can view only ${FREE_DAILY_VIEW_LIMIT} profiles per day. Upgrade to Premium for unlimited profile views.`
        );
      }
    }
    // --- End Daily Limit Check ---

    // --- Block Check ---
    const blockedIdSet = await blockService.getAllBlockedUserIds(viewerId);
    if (blockedIdSet.has(profileId)) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You cannot interact with this user');
    }

    // --- Spam Prevention Check (1 view per profile per 24 hours) ---
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const existingView = await prisma.profileView.findFirst({
      where: {
        viewerId,
        profileId,
        viewedAt: {
          gte: twentyFourHoursAgo,
        },
      },
    });

    if (existingView) {
      logger.info(`Profile view already logged within 24h for ${viewerId} -> ${profileId}`);
      return { ...existingView, alreadyViewed: true }; // View already logged, return without counting
    }

    // --- Create New View Log ---
    const newView = await prisma.profileView.create({
      data: {
        viewerId,
        profileId,
        isAnonymous,
      },
    });

    // --- Send Notification (if not anonymous) ---
    if (!isAnonymous) {
      try {
        const viewerName = viewer?.profile?.firstName || 'Someone';

        await notificationService.createNotification({
          userId: profileId,
          type: NOTIFICATION_TYPES.PROFILE_VIEWED,
          title: 'Your profile has a new view!',
          message: `${viewerName} viewed your profile.`,
          data: { viewerId },
        });
      } catch (notifError) {
        logger.warn('Failed to send profile view notification:', notifError);
        // Don't fail the request just because notification failed
      }
    }

    logger.info(`Profile view logged: ${viewerId} -> ${profileId}`);

    // Return remaining views for free users
    if (!isPremium) {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const viewsToday = await prisma.profileView.count({
        where: { viewerId, viewedAt: { gte: startOfDay } },
      });
      return { ...newView, remainingViews: FREE_DAILY_VIEW_LIMIT - viewsToday };
    }

    return newView;

  } catch (error) {
    logger.error('Error in logProfileView:', error);
    if (error instanceof ApiError) throw error;
    // DEV: Exposing error message for debugging
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Error logging profile view: ${error.message}`);
  }
};

/**
 * Get list of users who viewed the current user's profile
 * @param {number} userId - The user asking "who viewed me"
 * @param {Object} query - Pagination query
 * @returns {Promise<Object>} Paginated list of users
 */
export const getWhoViewedMe = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  try {
    // --- Check User Subscription Status and Plan Features ---
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: {
          where: { status: 'ACTIVE', endDate: { gt: new Date() } },
          include: { plan: true },
          take: 1,
        },
      },
    });

    const activeSubscription = user?.subscriptions?.[0];
    const isPremium = user?.role === 'PREMIUM_USER' ||
      (activeSubscription && activeSubscription.plan?.canSeeProfileVisitors === true);

    // Basic plan users (who can't see profile visitors) are treated like free users
    const FREE_VIEW_LIMIT = 2; // Free/Basic users can only see last 2 viewers

    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    const blockedIds = Array.from(blockedIdSet);

    const where = {
      profileId: userId,
      isAnonymous: false,
      viewerId: { notIn: blockedIds },
    };

    // Get total count first
    const total = await prisma.profileView.count({ where });

    // For free users, limit to 2 most recent
    const effectiveLimit = isPremium ? limit : Math.min(limit, FREE_VIEW_LIMIT);
    const effectiveSkip = isPremium ? skip : 0; // Free users always start from beginning

    const views = await prisma.profileView.findMany({
      where,
      skip: effectiveSkip,
      take: effectiveLimit,
      include: {
        viewer: {
          select: userPublicSelect,
        },
      },
      orderBy: {
        viewedAt: 'desc',
      },
    });

    // For free users, show limited pagination info
    const pagination = isPremium
      ? getPaginationMetadata(page, limit, total)
      : {
        page: 1,
        limit: FREE_VIEW_LIMIT,
        total: Math.min(total, FREE_VIEW_LIMIT),
        totalPages: 1,
        hiddenCount: Math.max(0, total - FREE_VIEW_LIMIT), // How many are hidden
      };

    const profiles = views.map(view => ({
      ...view.viewer,
      viewedAt: view.viewedAt,
    }));

    return {
      profiles,
      pagination,
      isPremium, // Let frontend know if user is premium
      totalViewers: total, // Total viewers (even if not all shown)
      message: !isPremium && total > FREE_VIEW_LIMIT
        ? `Upgrade to Premium to see all ${total} profile viewers`
        : null,
    };
  } catch (error) {
    logger.error('Error in getWhoViewedMe:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving profile views');
  }
};

/**
 * Get list of profiles the current user has viewed
 * @param {number} userId - The user asking "who did I view"
 * @param {Object} query - Pagination query
 * @returns {Promise<Object>} Paginated list of users
 */
export const getMyViewHistory = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  try {
    const blockedIdSet = await blockService.getAllBlockedUserIds(userId);
    const blockedIds = Array.from(blockedIdSet);

    const where = {
      viewerId: userId,
      profileId: { notIn: blockedIds }, // Don't show blocked users in history
    };

    const [views, total] = await Promise.all([
      prisma.profileView.findMany({
        where,
        skip,
        take: limit,
        include: {
          profile: { // 'profile' is the relation to the User who was viewed
            select: userPublicSelect,
          },
        },
        orderBy: {
          viewedAt: 'desc',
        },
      }),
      prisma.profileView.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    // Format response to be a list of user profiles
    const profiles = views.map(view => ({
      ...view.profile,
      viewedAt: view.viewedAt,
      isAnonymous: view.isAnonymous, // Show if *my* view was anonymous
    }));

    return { profiles, pagination };
  } catch (error) {
    logger.error('Error in getMyViewHistory:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving view history');
  }
};

export const profileViewService = {
  logProfileView,
  getWhoViewedMe,
  getMyViewHistory,
};```

## src/services/rateLimit.service.js
```javascript
/**
 * Rate Limiting Service for Notifications
 * Prevents notification spam and implements per-type rate limits
 */

import { logger } from '../config/logger.js';

// Rate limit configurations (per user)
const RATE_LIMITS = {
    MESSAGE: { max: 100, windowMs: 60 * 60 * 1000 }, // 100 messages/hour
    MATCH_REQUEST: { max: 10, windowMs: 60 * 60 * 1000 }, // 10 requests/hour
    MATCH_ACCEPTED: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PROFILE_VIEWED: { max: 50, windowMs: 60 * 60 * 1000 }, // 50/hour
    SHORTLIST: { max: 30, windowMs: 60 * 60 * 1000 }, // 30/hour
    CONTACT_REQUEST: { max: 15, windowMs: 60 * 60 * 1000 }, // 15/hour
    CONTACT_ACCEPTED: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PHOTO_REQUEST: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PHOTO_ACCEPTED: { max: 20, windowMs: 60 * 60 * 1000 }, // 20/hour
    PAYMENT_SUCCESS: { max: 5, windowMs: 24 * 60 * 60 * 1000 }, // 5/day
    SUBSCRIPTION_EXPIRING: { max: 3, windowMs: 24 * 60 * 60 * 1000 }, // 3/day
    SUBSCRIPTION_EXPIRED: { max: 3, windowMs: 24 * 60 * 60 * 1000 }, // 3/day
    GENERAL: { max: 50, windowMs: 60 * 60 * 1000 }, // 50/hour
};

// In-memory store for rate limiting (use Redis in production for distributed systems)
// Structure: { userId: { type: { count: number, resetAt: timestamp } } }
const rateLimitStore = new Map();

/**
 * Clean up expired entries periodically (every 5 minutes)
 */
setInterval(() => {
    const now = Date.now();
    for (const [userId, types] of rateLimitStore.entries()) {
        for (const [type, data] of Object.entries(types)) {
            if (data.resetAt < now) {
                delete types[type];
            }
        }
        if (Object.keys(types).length === 0) {
            rateLimitStore.delete(userId);
        }
    }
}, 5 * 60 * 1000);

/**
 * Check if a notification should be rate limited
 * @param {number} userId - User ID
 * @param {string} type - Notification type
 * @returns {boolean} - True if rate limited, false if allowed
 */
export const isRateLimited = (userId, type) => {
    const limit = RATE_LIMITS[type] || RATE_LIMITS.GENERAL;
    const now = Date.now();

    // Get or create user's rate limit data
    if (!rateLimitStore.has(userId)) {
        rateLimitStore.set(userId, {});
    }

    const userLimits = rateLimitStore.get(userId);

    // Get or create type-specific limit data
    if (!userLimits[type] || userLimits[type].resetAt < now) {
        userLimits[type] = {
            count: 0,
            resetAt: now + limit.windowMs,
        };
    }

    const typeLimit = userLimits[type];

    // Check if limit exceeded
    if (typeLimit.count >= limit.max) {
        logger.warn(
            `Rate limit exceeded for user ${userId}, type: ${type} ` +
            `(${typeLimit.count}/${limit.max} in ${limit.windowMs}ms)`
        );
        return true;
    }

    // Increment counter
    typeLimit.count++;
    return false;
};

/**
 * Get current rate limit status for a user and type
 * @param {number} userId - User ID
 * @param {string} type - Notification type
 * @returns {object} - { allowed: boolean, remaining: number, resetAt: timestamp }
 */
export const getRateLimitStatus = (userId, type) => {
    const limit = RATE_LIMITS[type] || RATE_LIMITS.GENERAL;
    const now = Date.now();

    if (!rateLimitStore.has(userId)) {
        return {
            allowed: true,
            remaining: limit.max,
            resetAt: now + limit.windowMs,
        };
    }

    const userLimits = rateLimitStore.get(userId);
    const typeLimit = userLimits[type];

    if (!typeLimit || typeLimit.resetAt < now) {
        return {
            allowed: true,
            remaining: limit.max,
            resetAt: now + limit.windowMs,
        };
    }

    return {
        allowed: typeLimit.count < limit.max,
        remaining: Math.max(0, limit.max - typeLimit.count),
        resetAt: typeLimit.resetAt,
    };
};

/**
 * Reset rate limit for a user (admin function)
 * @param {number} userId - User ID
 * @param {string} [type] - Optional specific type to reset
 */
export const resetRateLimit = (userId, type = null) => {
    if (!rateLimitStore.has(userId)) {
        return;
    }

    if (type) {
        const userLimits = rateLimitStore.get(userId);
        delete userLimits[type];
        logger.info(`Rate limit reset for user ${userId}, type: ${type}`);
    } else {
        rateLimitStore.delete(userId);
        logger.info(`All rate limits reset for user ${userId}`);
    }
};

/**
 * Get rate limit configuration
 * @returns {object} - Rate limit configurations
 */
export const getRateLimitConfig = () => {
    return { ...RATE_LIMITS };
};

export default {
    isRateLimited,
    getRateLimitStatus,
    resetRateLimit,
    getRateLimitConfig,
};
```

## src/services/readReceipts.service.js
```javascript
/**
 * Read Receipts Service
 * Manages message read status
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

/**
 * Mark messages as read
 * @param {number} userId - The reader's user ID
 * @param {number} senderId - The sender's user ID (marks their messages as read)
 */
export const markMessagesAsRead = async (userId, senderId) => {
    try {
        const result = await prisma.message.updateMany({
            where: {
                senderId: senderId,
                receiverId: userId,
                readAt: null,
            },
            data: {
                readAt: new Date(),
                status: 'READ',
            },
        });

        return {
            success: true,
            count: result.count,
        };
    } catch (error) {
        logger.error('Error marking messages as read:', error);
        return { success: false, count: 0 };
    }
};

/**
 * Mark single message as read
 */
export const markMessageAsRead = async (messageId, userId) => {
    try {
        const message = await prisma.message.update({
            where: {
                id: messageId,
                receiverId: userId,
                readAt: null,
            },
            data: {
                readAt: new Date(),
                status: 'READ',
            },
        });

        return { success: true, message };
    } catch (error) {
        logger.error('Error marking message as read:', error);
        return { success: false };
    }
};

/**
 * Mark message as delivered (received by device)
 */
export const markMessageAsDelivered = async (messageId) => {
    try {
        const message = await prisma.message.update({
            where: {
                id: messageId,
                status: 'SENT',
            },
            data: {
                status: 'DELIVERED',
                deliveredAt: new Date(),
            },
        });

        return { success: true, message };
    } catch (error) {
        logger.error('Error marking message as delivered:', error);
        return { success: false };
    }
};

/**
 * Get read receipt status for messages
 */
export const getMessageStatus = async (messageIds) => {
    try {
        const messages = await prisma.message.findMany({
            where: { id: { in: messageIds } },
            select: {
                id: true,
                status: true,
                readAt: true,
                deliveredAt: true,
                createdAt: true,
            },
        });

        return messages.reduce((acc, msg) => {
            acc[msg.id] = {
                status: msg.status || 'SENT',
                readAt: msg.readAt,
                deliveredAt: msg.deliveredAt,
                sentAt: msg.createdAt,
            };
            return acc;
        }, {});
    } catch (error) {
        logger.error('Error getting message status:', error);
        return {};
    }
};

/**
 * Get unread message count per sender
 */
export const getUnreadCounts = async (userId) => {
    try {
        const unreadCounts = await prisma.message.groupBy({
            by: ['senderId'],
            where: {
                receiverId: userId,
                readAt: null,
            },
            _count: {
                id: true,
            },
        });

        return unreadCounts.reduce((acc, item) => {
            acc[item.senderId] = item._count.id;
            return acc;
        }, {});
    } catch (error) {
        logger.error('Error getting unread counts:', error);
        return {};
    }
};

export default {
    markMessagesAsRead,
    markMessageAsRead,
    markMessageAsDelivered,
    getMessageStatus,
    getUnreadCounts,
};
```

## src/services/report.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Create a new report
 * @param {number} reporterId - The user filing the report
 * @param {Object} data - Validated report data
 * @param {number} data.reportedUserId - The user being reported
 * @param {string} data.reason - The reason for the report
 * @param {string} data.description - A detailed description
 * @param {string} [data.evidence] - Optional JSON string of evidence URLs
 * @returns {Promise<Object>} The created report entry
 */
export const createReport = async (reporterId, data) => {
  const { reportedUserId, reason, description, evidence } = data;

  if (reporterId === reportedUserId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'You cannot report yourself');
  }

  try {
    // Check if the user being reported exists
    const userToReport = await prisma.user.findUnique({
      where: { id: reportedUserId },
    });

    if (!userToReport) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'The user you are trying to report does not exist');
    }

    // Check if this user has already reported this user for the same reason
    const existingReport = await prisma.report.findFirst({
      where: {
        reporterId,
        reportedUserId,
        reason,
        status: 'PENDING', // Only check against pending reports
      },
    });

    if (existingReport) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'You have already submitted a similar report for this user');
    }

    const report = await prisma.report.create({
      data: {
        reporterId,
        reportedUserId,
        reason,
        description,
        evidence: evidence || null,
        status: 'PENDING', // Default status
      },
    });

    logger.info(`User ${reporterId} reported user ${reportedUserId} for: ${reason}`);
    return report;

  } catch (error) {
    logger.error('Error in createReport:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error submitting report');
  }
};

export const reportService = {
  createReport,
};```

## src/services/shortlist.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
// FIX: Removed unused ERROR_MESSAGES import
import { HTTP_STATUS, NOTIFICATION_TYPES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
// ADDED: Import notification service
import { notificationService } from './notification.service.js';

// Reusable select for public user data (to nest in the response)
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  profile: {
    include: {
      media: true, // Include media for profile photos
    },
  },
};

/**
 * Add a user to the logged-in user's shortlist
 * @param {number} userId - The user doing the shortlisting
 * @param {number} shortlistedUserId - The user being shortlisted
 * @param {string} [note] - An optional note
 * @returns {Promise<Object>} The created shortlist entry
 */
export const addToShortlist = async (userId, shortlistedUserId, note) => {
  if (userId === shortlistedUserId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'You cannot shortlist yourself');
  }

  // Define limit constant at the top of function scope
  const FREE_SHORTLIST_LIMIT = 10;
  let currentCount = 0;

  try {
    // --- Check User Subscription Status ---
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: {
          where: { status: 'ACTIVE', endDate: { gt: new Date() } },
          take: 1,
        },
        profile: { select: { firstName: true } },
      },
    });

    const isPremium = user?.subscriptions?.length > 0 || user?.role === 'PREMIUM_USER';

    // --- Free User Limit Check ---
    if (!isPremium) {
      currentCount = await prisma.shortlist.count({
        where: { userId },
      });

      if (currentCount >= FREE_SHORTLIST_LIMIT) {
        throw new ApiError(
          HTTP_STATUS.FORBIDDEN,
          `Free users can shortlist only ${FREE_SHORTLIST_LIMIT} profiles. Upgrade to Premium for unlimited shortlisting.`
        );
      }
    }
    // --- End Free User Limit Check ---

    // Check if the user being shortlisted exists
    const userToShortlist = await prisma.user.findUnique({
      where: { id: shortlistedUserId, isActive: true },
    });

    if (!userToShortlist) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'The user you are trying to shortlist does not exist');
    }

    const shortlistEntry = await prisma.shortlist.create({
      data: {
        userId,
        shortlistedUserId,
        note: note || null,
      },
    });
    logger.info(`User ${userId} shortlisted user ${shortlistedUserId}`);

    // ADDED: Send push notification to shortlisted user
    const shortlisterName = user?.profile?.firstName || 'Someone';
    notificationService.createNotification({
      userId: shortlistedUserId,
      type: NOTIFICATION_TYPES.SHORTLISTED || 'SHORTLISTED',
      title: 'You\'ve been shortlisted! ⭐',
      message: `${shortlisterName} added you to their shortlist. Check their profile!`,
      data: {
        type: 'SHORTLISTED',
        userId: String(userId),
        userName: shortlisterName,
      },
    }).catch(err => logger.error('Failed to send shortlist notification:', err));

    // Return with remaining count for free users
    const remaining = isPremium ? null : (FREE_SHORTLIST_LIMIT - (currentCount + 1));
    return { ...shortlistEntry, freeShortlistsRemaining: remaining };
  } catch (error) {
    logger.error('Error in addToShortlist:', error);
    if (error.code === 'P2002') {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'This user is already in your shortlist');
    }
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error adding to shortlist');
  }
};

/**
 * Remove a user from the logged-in user's shortlist
 * @param {number} userId - The user doing the removing
 * @param {number} shortlistedUserId - The user being removed
 * @returns {Promise<void>}
 */
export const removeFromShortlist = async (userId, shortlistedUserId) => {
  try {
    const result = await prisma.shortlist.deleteMany({
      where: {
        userId,
        shortlistedUserId,
      },
    });

    if (result.count === 0) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found in your shortlist');
    }

    logger.info(`User ${userId} removed user ${shortlistedUserId} from shortlist`);
  } catch (error) {
    logger.error('Error in removeFromShortlist:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error removing from shortlist');
  }
};

/**
 * Get the logged-in user's shortlist (paginated)
 * @param {number} userId - The user who is requesting their list
 * @param {Object} query - Pagination query params (page, limit)
 * @returns {Promise<Object>} Paginated list of shortlist entries
 */
export const getMyShortlist = async (userId, query) => {
  const { page, limit, skip } = getPaginationParams(query);

  try {
    const where = { userId };

    const [shortlistEntries, total] = await Promise.all([
      prisma.shortlist.findMany({
        where,
        skip,
        take: limit,
        include: {
          shortlistedUser: { // Get the full profile of the user who was shortlisted
            select: userPublicSelect,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.shortlist.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    // Format the response to be a list of user profiles, not shortlist entries
    const profiles = shortlistEntries.map(entry => ({
      ...entry.shortlistedUser,
      shortlistNote: entry.note, // Optionally include the note
      shortlistedAt: entry.createdAt,
    }));

    return {
      profiles,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getMyShortlist:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving shortlist');
  }
};

export const shortlistService = {
  addToShortlist,
  removeFromShortlist,
  getMyShortlist,
};```

## src/services/subscription.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';

/**
 * Get all active subscription plans (paginated)
 * @param {Object} query - Pagination query
 * @returns {Promise<Object>} Paginated list of plans
 */
export const getActivePlans = async (query) => {
  const { page, limit, skip } = getPaginationParams(query);
  const where = { isActive: true };

  try {
    const [plans, total] = await Promise.all([
      prisma.subscriptionPlan.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          displayOrder: 'asc', // Order by displayOrder
        },
      }),
      prisma.subscriptionPlan.count({ where }),
    ]);

    // Parse the 'features' string into an array
    const parsedPlans = plans.map(plan => {
      let featuresArray = [];
      if (plan.features) {
        try {
          // Attempt to parse the JSON string
          featuresArray = JSON.parse(plan.features);
        } catch (e) {
          logger.warn(`Failed to parse features JSON for planId ${plan.id}`);
          // Fallback to an empty array if parsing fails
          featuresArray = [];
        }
      }
      return { ...plan, features: featuresArray };
    });

    const pagination = getPaginationMetadata(page, limit, total);

    return { plans: parsedPlans, pagination };
  } catch (error) {
    logger.error('Error in getActivePlans:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving subscription plans');
  }
};

export const subscriptionService = {
  getActivePlans,
};```

## src/services/subscriptionCron.service.js
```javascript
/**
 * Subscription Cron Jobs
 * Handles scheduled tasks for subscription management:
 * - Expiry reminders (3 days, 1 day, same day)
 * - Expired subscription handling
 */

import prisma from '../config/database.js';
import { notificationService } from '../services/notification.service.js';
import { NOTIFICATION_TYPES, SUBSCRIPTION_STATUS, USER_ROLES } from '../utils/constants.js';
import { logger } from '../config/logger.js';

/**
 * Send subscription expiry reminders
 * Run this daily (e.g., at 9 AM)
 */
export const sendExpiryReminders = async () => {
    logger.info('Running subscription expiry reminder job...');

    try {
        const now = new Date();

        // Define reminder intervals (in days)
        const reminders = [
            { days: 3, title: 'Subscription Expiring Soon ⏰', message: 'Your premium subscription will expire in 3 days. Renew now to continue enjoying premium features!' },
            { days: 1, title: 'Last Day Reminder! ⚠️', message: 'Your premium subscription expires tomorrow! Renew now to avoid losing premium features.' },
            { days: 0, title: 'Subscription Expires Today! 🚨', message: 'Your premium subscription expires today. Renew immediately to keep your premium benefits!' },
        ];

        let totalNotificationsSent = 0;

        for (const reminder of reminders) {
            const targetDate = new Date(now);
            targetDate.setDate(targetDate.getDate() + reminder.days);

            // Set to start and end of target day
            const dayStart = new Date(targetDate);
            dayStart.setHours(0, 0, 0, 0);

            const dayEnd = new Date(targetDate);
            dayEnd.setHours(23, 59, 59, 999);

            // Find subscriptions expiring on target date
            const expiringSubscriptions = await prisma.userSubscription.findMany({
                where: {
                    status: SUBSCRIPTION_STATUS.ACTIVE,
                    endDate: {
                        gte: dayStart,
                        lte: dayEnd,
                    },
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            profile: { select: { firstName: true } },
                        },
                    },
                    plan: {
                        select: { name: true },
                    },
                },
            });

            logger.info(`Found ${expiringSubscriptions.length} subscriptions expiring in ${reminder.days} days`);

            // Send notifications
            for (const subscription of expiringSubscriptions) {
                const userName = subscription.user?.profile?.firstName || 'User';

                await notificationService.createNotification({
                    userId: subscription.userId,
                    type: NOTIFICATION_TYPES.SUBSCRIPTION_EXPIRING,
                    title: reminder.title,
                    message: reminder.message,
                    data: {
                        type: 'SUBSCRIPTION_EXPIRING',
                        daysRemaining: String(reminder.days),
                        subscriptionId: String(subscription.id),
                        planName: subscription.plan?.name || 'Premium',
                    },
                });

                totalNotificationsSent++;
            }
        }

        logger.info(`Subscription expiry reminder job completed. Sent ${totalNotificationsSent} notifications.`);
        return { success: true, notificationsSent: totalNotificationsSent };

    } catch (error) {
        logger.error('Error in sendExpiryReminders:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Mark expired subscriptions and downgrade users
 * Run this daily (e.g., at midnight)
 */
export const handleExpiredSubscriptions = async () => {
    logger.info('Running expired subscription handler...');

    try {
        const now = new Date();

        // Find expired active subscriptions
        const expiredSubscriptions = await prisma.userSubscription.findMany({
            where: {
                status: SUBSCRIPTION_STATUS.ACTIVE,
                endDate: {
                    lt: now,
                },
            },
        });

        logger.info(`Found ${expiredSubscriptions.length} expired subscriptions`);

        let processedCount = 0;

        for (const subscription of expiredSubscriptions) {
            try {
                await prisma.$transaction([
                    // 1. Mark subscription as expired
                    prisma.userSubscription.update({
                        where: { id: subscription.id },
                        data: { status: SUBSCRIPTION_STATUS.EXPIRED },
                    }),
                    // 2. Downgrade user role (if no other active subscriptions)
                    prisma.user.update({
                        where: { id: subscription.userId },
                        data: { role: USER_ROLES.USER },
                    }),
                ]);

                // 3. Send expiration notification
                await notificationService.createNotification({
                    userId: subscription.userId,
                    type: NOTIFICATION_TYPES.SUBSCRIPTION_EXPIRED,
                    title: 'Subscription Expired 😢',
                    message: 'Your premium subscription has expired. Renew now to restore your premium features!',
                    data: {
                        type: 'SUBSCRIPTION_EXPIRED',
                        subscriptionId: String(subscription.id),
                    },
                });

                processedCount++;
            } catch (err) {
                logger.error(`Error processing expired subscription ${subscription.id}:`, err);
            }
        }

        logger.info(`Expired subscription handler completed. Processed ${processedCount} subscriptions.`);
        return { success: true, processedCount };

    } catch (error) {
        logger.error('Error in handleExpiredSubscriptions:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Mark expired interest requests as EXPIRED
 * Run this daily (e.g., at midnight)
 */
export const handleExpiredInterests = async () => {
    logger.info('Running expired interest handler...');

    try {
        const now = new Date();

        // Find PENDING interests where expiresAt has passed
        const result = await prisma.matchRequest.updateMany({
            where: {
                status: 'PENDING',
                expiresAt: {
                    lt: now,
                    not: null, // Only if expiresAt is set
                },
            },
            data: {
                status: 'EXPIRED',
            },
        });

        logger.info(`Expired interest handler completed. Marked ${result.count} interests as EXPIRED.`);
        return { success: true, expiredCount: result.count };

    } catch (error) {
        logger.error('Error in handleExpiredInterests:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Initialize cron jobs
 * Call this on server startup
 */
export const initSubscriptionCronJobs = () => {
    // Use node-cron or similar for production
    // For now, we'll use setInterval as a simple alternative

    const ONE_HOUR = 60 * 60 * 1000;
    const ONE_DAY = 24 * ONE_HOUR;

    // Run expiry reminders every 24 hours (at ~9 AM ideally)
    // In production, use node-cron: cron.schedule('0 9 * * *', sendExpiryReminders)
    setInterval(sendExpiryReminders, ONE_DAY);

    // Run expired handler every 24 hours (at ~midnight ideally)  
    // In production, use node-cron: cron.schedule('0 0 * * *', handleExpiredSubscriptions)
    setInterval(handleExpiredSubscriptions, ONE_DAY);

    // Run expired interests handler every 24 hours
    setInterval(handleExpiredInterests, ONE_DAY);

    // Run once on startup (after 5 seconds delay to let server fully start)
    setTimeout(() => {
        sendExpiryReminders();
        handleExpiredSubscriptions();
        handleExpiredInterests();
    }, 5000);

    logger.info('Subscription cron jobs initialized (including interest expiry)');
};

export default {
    sendExpiryReminders,
    handleExpiredSubscriptions,
    handleExpiredInterests,
    initSubscriptionCronJobs,
};
```

## src/services/tokenBlacklist.service.js
```javascript
/**
 * Token Blacklist Service
 * Uses Redis to store invalidated JWT tokens until they expire
 * Provides secure logout by preventing token reuse
 */

import { createClient } from 'ioredis';
import { logger } from '../config/logger.js';
import { config } from '../config/config.js';

// Redis client for token blacklist
let redisClient = null;
let isConnected = false;

/**
 * Initialize Redis connection for token blacklisting
 */
export const initializeBlacklist = async () => {
    try {
        // Use existing Redis URL or fallback
        const redisUrl = config.REDIS_URL || process.env.REDIS_URL;

        if (!redisUrl) {
            logger.warn('⚠️ REDIS_URL not configured. Token blacklisting will use in-memory fallback.');
            return false;
        }

        redisClient = createClient(redisUrl);

        redisClient.on('connect', () => {
            isConnected = true;
            logger.info('✅ Token blacklist Redis connected');
        });

        redisClient.on('error', (err) => {
            logger.error('Redis blacklist error:', err);
            isConnected = false;
        });

        await redisClient.connect();
        return true;
    } catch (error) {
        logger.error('Failed to initialize token blacklist:', error);
        return false;
    }
};

// In-memory fallback when Redis is not available
const memoryBlacklist = new Map();

/**
 * Add a token to the blacklist
 * @param {string} token - The JWT token to blacklist
 * @param {number} expiresInSeconds - Time until token expires naturally
 */
export const blacklistToken = async (token, expiresInSeconds = 86400) => {
    const key = `blacklist:${token}`;

    try {
        if (isConnected && redisClient) {
            await redisClient.setex(key, expiresInSeconds, 'blacklisted');
            logger.debug(`Token blacklisted in Redis for ${expiresInSeconds}s`);
        } else {
            // In-memory fallback
            memoryBlacklist.set(key, Date.now() + (expiresInSeconds * 1000));
            cleanupMemoryBlacklist();
            logger.debug(`Token blacklisted in memory for ${expiresInSeconds}s`);
        }
        return true;
    } catch (error) {
        logger.error('Error blacklisting token:', error);
        return false;
    }
};

/**
 * Check if a token is blacklisted
 * @param {string} token - The JWT token to check
 * @returns {Promise<boolean>} True if blacklisted
 */
export const isTokenBlacklisted = async (token) => {
    const key = `blacklist:${token}`;

    try {
        if (isConnected && redisClient) {
            const result = await redisClient.get(key);
            return result !== null;
        } else {
            // In-memory fallback
            const expiry = memoryBlacklist.get(key);
            if (expiry && expiry > Date.now()) {
                return true;
            }
            memoryBlacklist.delete(key);
            return false;
        }
    } catch (error) {
        logger.error('Error checking token blacklist:', error);
        return false; // Fail open to not block users
    }
};

/**
 * Blacklist all tokens for a user (logout from all devices)
 * @param {number} userId - User ID
 * @param {number} expiresInSeconds - Time until tokens expire
 */
export const blacklistAllUserTokens = async (userId, expiresInSeconds = 86400) => {
    const key = `blacklist:user:${userId}`;

    try {
        if (isConnected && redisClient) {
            await redisClient.setex(key, expiresInSeconds, Date.now().toString());
            logger.info(`All tokens for user ${userId} blacklisted`);
        } else {
            memoryBlacklist.set(key, Date.now() + (expiresInSeconds * 1000));
        }
        return true;
    } catch (error) {
        logger.error('Error blacklisting user tokens:', error);
        return false;
    }
};

/**
 * Check if user's tokens are globally blacklisted
 * @param {number} userId - User ID
 * @param {number} tokenIssuedAt - Token issue timestamp (iat claim)
 * @returns {Promise<boolean>} True if user tokens blacklisted after token was issued
 */
export const isUserTokenBlacklisted = async (userId, tokenIssuedAt) => {
    const key = `blacklist:user:${userId}`;

    try {
        if (isConnected && redisClient) {
            const blacklistedAt = await redisClient.get(key);
            if (blacklistedAt) {
                return parseInt(blacklistedAt) > (tokenIssuedAt * 1000);
            }
        } else {
            const blacklistedAt = memoryBlacklist.get(key);
            if (blacklistedAt && blacklistedAt > Date.now()) {
                return true;
            }
        }
        return false;
    } catch (error) {
        logger.error('Error checking user token blacklist:', error);
        return false;
    }
};

/**
 * Cleanup expired entries from memory blacklist
 */
const cleanupMemoryBlacklist = () => {
    const now = Date.now();
    for (const [key, expiry] of memoryBlacklist.entries()) {
        if (expiry < now) {
            memoryBlacklist.delete(key);
        }
    }
};

/**
 * Get blacklist statistics
 */
export const getBlacklistStats = async () => {
    try {
        if (isConnected && redisClient) {
            const keys = await redisClient.keys('blacklist:*');
            return {
                provider: 'redis',
                count: keys.length,
                connected: true,
            };
        } else {
            cleanupMemoryBlacklist();
            return {
                provider: 'memory',
                count: memoryBlacklist.size,
                connected: false,
            };
        }
    } catch (error) {
        return {
            provider: 'unknown',
            count: 0,
            error: error.message,
        };
    }
};

export default {
    initializeBlacklist,
    blacklistToken,
    isTokenBlacklisted,
    blacklistAllUserTokens,
    isUserTokenBlacklisted,
    getBlacklistStats,
};
```

## src/services/upload.service.js
```javascript
import {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2Client, getBucketName, isR2Configured, getRegion } from '../config/r2.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { generateUniqueFilename, generateStorageKey } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import sharp from 'sharp';

/**
 * Upload file to Cloudflare R2
 * @param {Object} file - File object from multer
 * @param {string} folder - R2 folder name
 * @param {boolean} isPublic - Whether the file should be publicly readable
 * @returns {Promise<Object>}
 */
export const uploadToR2 = async (
  file,
  folder = 'uploads',
  isPublic = false
) => {
  try {
    // Check if R2 is configured
    if (!isR2Configured()) {
      throw new ApiError(
        HTTP_STATUS.SERVICE_UNAVAILABLE,
        'Cloudflare R2 storage is not configured. Please contact administrator.'
      );
    }
    const filename = generateUniqueFilename(file.originalname);
    const key = generateStorageKey(folder, filename);

    const command = new PutObjectCommand({
      Bucket: getBucketName(),
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      // Note: ACL removed - bucket uses 'Bucket owner enforced' Object Ownership
      // Make sure bucket policy allows public read access for profile photos
    });

    await r2Client.send(command);

    const region = getRegion();

    // Construct public URL
    // Priority 1: Custom Public URL (e.g., https://media.mydomain.com) - BEST FOR PROD
    // Priority 2: R2.dev URL (e.g., https://pub-<hash>.r2.dev)
    let storageUrl;
    if (process.env.R2_PUBLIC_URL) {
      // Remove trailing slash if present
      const baseUrl = process.env.R2_PUBLIC_URL.replace(/\/$/, '');
      storageUrl = `${baseUrl}/${key}`;
    } else {
      // Fallback (Generic R2 naming)
      storageUrl = `https://${getBucketName()}.${region}.r2.cloudflarestorage.com/${key}`;
    }

    logger.info(`File uploaded to R2: ${key} (public: ${isPublic})`);

    return {
      key, // Always return the key
      url: isPublic ? storageUrl : null, // Only return public URL if public
      filename,
      size: file.size,
      mimetype: file.mimetype,
    };
  } catch (error) {
    logger.error('Error in uploadToR2:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      `Failed to upload file: ${error.message}` // Expose error for debugging
    );
  }
};

/**
 * Process and upload image with thumbnail (Public)
 * @param {Object} file - File object from multer
 * @param {string} folder - S3 folder name
 * @returns {Promise<Object>}
 */
export const processAndUploadImage = async (file, folder = 'photos') => {
  try {
    // Process main image
    const processedImage = await sharp(file.buffer)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 90 })
      .toBuffer();

    // Process thumbnail
    const thumbnail = await sharp(file.buffer)
      .resize(300, 300, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toBuffer();

    // Upload main image
    const mainImageFile = {
      ...file,
      buffer: processedImage,
      originalname: file.originalname.replace(/\.[^/.]+$/, '.jpg'),
      mimetype: 'image/jpeg',
    };
    // Profile photos are public
    const mainImage = await uploadToR2(mainImageFile, folder, true);

    // Upload thumbnail
    const thumbnailFile = {
      ...file,
      buffer: thumbnail,
      originalname: `thumb_${file.originalname.replace(
        /\.[^/.]+$/,
        '.jpg'
      )}`,
      mimetype: 'image/jpeg',
    };
    // Thumbnails are also public
    const thumbnailImage = await uploadToR2(
      thumbnailFile,
      `${folder}/thumbnails`,
      true
    );

    return {
      original: mainImage,
      thumbnail: thumbnailImage,
    };
  } catch (error) {
    logger.error('Error in processAndUploadImage:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to process and upload image'
    );
  }
};

/**
 * Delete file from R2
 * @param {string} key - R2 object key
 * @returns {Promise<void>}
 */
export const deleteFile = async (key) => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: getBucketName(),
      Key: key,
    });

    await r2Client.send(command);

    logger.info(`File deleted from R2: ${key}`);
  } catch (error) {
    logger.error('Error in deleteFile:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to delete file'
    );
  }
};

/**
 * Generate presigned URL for private files
 * @param {string} key - R2 object key
 * @param {number} expiresIn - URL expiry in seconds
 * @returns {Promise<string>}
 */
export const getPresignedUrl = async (key, expiresIn = 3600) => {
  if (!key) return null;

  try {
    const command = new GetObjectCommand({
      Bucket: getBucketName(),
      Key: key,
    });

    const url = await getSignedUrl(r2Client, command, { expiresIn });

    return url;
  } catch (error) {
    logger.error('Error in getPresignedUrl:', error);
    throw new ApiError(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      'Failed to generate presigned URL'
    );
  }
};

/**
 * Extract storage key from URL
 * @param {string} url - Storage URL
 * @returns {string} Storage key
 */
export const extractKeyFromUrl = (url) => {
  if (!url) return null;
  try {
    // Handle both full URLs and simple keys
    if (url.startsWith('http')) {
      const urlObj = new URL(url);
      return decodeURIComponent(urlObj.pathname.substring(1)); // Remove leading slash
    }
    // Assume it's already a key if no "http"
    return url;
  } catch (error) {
    logger.error('Error extracting key from URL:', error);
    return null; // Return null instead of throwing
  }
};

export const uploadService = {
  uploadToR2,
  processAndUploadImage,
  deleteFile,
  getPresignedUrl,
  extractKeyFromUrl,
};```

## src/services/usageLimits.service.js
```javascript
/**
 * Usage Limits Service
 * Tracks daily usage for free and premium users
 * - Free users: 5 requests + 5 profile views per day
 * - ₹299 plan: 20 requests per day
 */

import prisma from '../config/database.js';
import { logger } from '../config/logger.js';

// Daily limits by plan type
const USAGE_LIMITS = {
    FREE: {
        profileViews: 5,
        contactRequests: 5,
        interestsSent: 5,
        messagesPerDay: 10,
    },
    BASIC_299: {
        profileViews: 50,
        contactRequests: 20,
        interestsSent: 20,
        messagesPerDay: 100,
    },
    PREMIUM: {
        profileViews: -1, // Unlimited
        contactRequests: -1,
        interestsSent: -1,
        messagesPerDay: -1,
    },
};

/**
 * Get today's date key for tracking (resets at midnight IST)
 */
const getTodayKey = () => {
    const now = new Date();
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + istOffset);
    return istDate.toISOString().split('T')[0]; // YYYY-MM-DD
};

/**
 * Get or create daily usage record for user
 * @param {number} userId - User ID
 */
export const getDailyUsage = async (userId) => {
    const dateKey = getTodayKey();

    let usage = await prisma.dailyUsage.findUnique({
        where: {
            userId_date: {
                userId,
                date: dateKey,
            },
        },
    });

    if (!usage) {
        usage = await prisma.dailyUsage.create({
            data: {
                userId,
                date: dateKey,
                profileViews: 0,
                contactRequests: 0,
                interestsSent: 0,
                messagesCount: 0,
            },
        });
    }

    return usage;
};

/**
 * Get user's plan type
 * @param {number} userId - User ID
 */
export const getUserPlanType = async (userId) => {
    const subscription = await prisma.userSubscription.findFirst({
        where: {
            userId,
            status: 'ACTIVE',
            endDate: { gte: new Date() },
        },
        include: { plan: true },
        orderBy: { endDate: 'desc' },
    });

    if (!subscription) return 'FREE';

    const planName = subscription.plan?.name?.toUpperCase() || '';
    if (planName.includes('PREMIUM') || planName.includes('GOLD')) return 'PREMIUM';
    if (planName.includes('299') || planName.includes('BASIC')) return 'BASIC_299';

    return 'FREE';
};

/**
 * Get limits for user's plan
 * @param {number} userId - User ID
 */
export const getUserLimits = async (userId) => {
    const planType = await getUserPlanType(userId);
    return {
        planType,
        limits: USAGE_LIMITS[planType] || USAGE_LIMITS.FREE,
    };
};

/**
 * Check if user can perform action
 * @param {number} userId - User ID
 * @param {string} actionType - 'profileViews' | 'contactRequests' | 'interestsSent' | 'messagesCount'
 */
export const canPerformAction = async (userId, actionType) => {
    const { planType, limits } = await getUserLimits(userId);

    // Premium users have no limits (-1)
    if (limits[actionType] === -1) {
        return { allowed: true, remaining: -1, planType };
    }

    const usage = await getDailyUsage(userId);
    const currentCount = usage[actionType] || 0;
    const limit = limits[actionType] || 0;
    const remaining = Math.max(0, limit - currentCount);

    return {
        allowed: currentCount < limit,
        remaining,
        used: currentCount,
        limit,
        planType,
    };
};

/**
 * Increment usage counter
 * @param {number} userId - User ID
 * @param {string} actionType - Action type
 */
export const incrementUsage = async (userId, actionType) => {
    const dateKey = getTodayKey();

    await prisma.dailyUsage.upsert({
        where: {
            userId_date: {
                userId,
                date: dateKey,
            },
        },
        update: {
            [actionType]: { increment: 1 },
        },
        create: {
            userId,
            date: dateKey,
            profileViews: actionType === 'profileViews' ? 1 : 0,
            contactRequests: actionType === 'contactRequests' ? 1 : 0,
            interestsSent: actionType === 'interestsSent' ? 1 : 0,
            messagesCount: actionType === 'messagesCount' ? 1 : 0,
        },
    });

    logger.debug(`Usage incremented: ${actionType} for user ${userId}`);
};

/**
 * Get usage summary for user
 * @param {number} userId - User ID
 */
export const getUsageSummary = async (userId) => {
    const { planType, limits } = await getUserLimits(userId);
    const usage = await getDailyUsage(userId);

    return {
        planType,
        date: getTodayKey(),
        usage: {
            profileViews: {
                used: usage.profileViews,
                limit: limits.profileViews,
                remaining: limits.profileViews === -1 ? -1 : Math.max(0, limits.profileViews - usage.profileViews),
            },
            contactRequests: {
                used: usage.contactRequests,
                limit: limits.contactRequests,
                remaining: limits.contactRequests === -1 ? -1 : Math.max(0, limits.contactRequests - usage.contactRequests),
            },
            interestsSent: {
                used: usage.interestsSent,
                limit: limits.interestsSent,
                remaining: limits.interestsSent === -1 ? -1 : Math.max(0, limits.interestsSent - usage.interestsSent),
            },
        },
    };
};

/**
 * Cleanup old usage records (run daily via cron)
 * Keep last 30 days of data
 */
export const cleanupOldUsageRecords = async () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const cutoffDate = thirtyDaysAgo.toISOString().split('T')[0];

    const result = await prisma.dailyUsage.deleteMany({
        where: { date: { lt: cutoffDate } },
    });

    logger.info(`Cleaned up ${result.count} old usage records`);
    return result.count;
};

export default {
    getDailyUsage,
    getUserPlanType,
    getUserLimits,
    canPerformAction,
    incrementUsage,
    getUsageSummary,
    cleanupOldUsageRecords,
    USAGE_LIMITS,
};
```

## src/services/user.service.js
```javascript
import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES, USER_ROLES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { logger } from '../config/logger.js';
import { blockService } from './block.service.js';

// Define a reusable Prisma select for public-facing user data
// This prevents leaking sensitive fields like email, phone, etc.
const userPublicSelect = {
  id: true,
  profilePicture: true,
  role: true,
  preferredLanguage: true,
  createdAt: true,
  profile: true, // Include the full related profile
};

/**
 * Get a user's full details (for the user themselves OR ADMIN)
 * @param {string} userId - User ID
 * @returns {Promise<Object>}
 */
export const getFullUserById = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      include: {
        profile: true,
        subscriptions: {
          include: { plan: true },
          orderBy: { createdAt: 'desc' },
        },
        payments: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        reportsReceived: { // Reports filed AGAINST this user
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
        activityLogs: { // Actions performed BY this user
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        agent: {
          select: {
            agentCode: true,
            agentName: true,
          },
        },
      },
    });

    if (!user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.USER_NOT_FOUND);
    }

    return user;
  } catch (error) {
    logger.error('Error in getFullUserById:', error);
    if (!(error instanceof ApiError)) {
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving user data');
    }
    throw error;
  }
};

/**
 * Get another user's public-safe details
 */
export const getPublicUserById = async (userId, currentUserId) => {
  try {
    if (currentUserId && userId !== currentUserId) {
      const blockedIdSet = await blockService.getAllBlockedUserIds(currentUserId);
      if (blockedIdSet.has(userId)) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.USER_NOT_FOUND);
      }
    }

    const user = await prisma.user.findUnique({
      where: { id: userId, isActive: true },
      select: userPublicSelect,
    });

    if (!user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.USER_NOT_FOUND);
    }

    return user;
  } catch (error) {
    logger.error('Error in getPublicUserById:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving user data');
  }
};

/**
 * Update a user's safe, editable fields
 */
export const updateUser = async (userId, data) => {
  try {
    if (data.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: data.email,
          id: { not: userId },
        },
      });

      if (existingUser) {
        throw new ApiError(HTTP_STATUS.CONFLICT, 'An account with this email already exists.');
      }
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: data,
      include: { profile: true },
    });

    logger.info(`User updated: ${userId}`);
    return user;
  } catch (error) {
    logger.error('Error in updateUser:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating user');
  }
};

export const deleteUser = async (userId) => {
  try {
    await prisma.$transaction([
      prisma.user.update({
        where: { id: parseInt(userId) },
        data: {
          isActive: false,
          isBanned: true,
          banReason: 'Account deleted by user.',
          deletedAt: new Date(),
          email: `deleted_${userId}@placeholder.com`,
          phone: `deleted_${userId}`,
          profilePicture: null,
          deviceInfo: null,
          lastLoginIp: null,
          fcmTokens: {
            deleteMany: {},
          },
        },
      }),
      prisma.profile.update({
        where: { userId: parseInt(userId) },
        data: {
          firstName: 'Deleted',
          lastName: 'User',
          bio: 'This account has been deleted.',
          profileId: `DEL-${userId}`,
          city: 'Deleted',
          state: 'Deleted',
        }
      }),
      prisma.refreshToken.deleteMany({ where: { userId: parseInt(userId) } }),
    ]);

    logger.info(`User soft-deleted: ${userId}`);
    return { success: true };
  } catch (error) {
    logger.error('Error in deleteUser:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting account');
  }
};

/**
 * Search users (public, paginated)
 */
export const searchUsers = async (query, currentUserId = null) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);
    const { search, role } = query;

    const where = {
      isActive: true,
    };

    if (currentUserId) {
      const blockedIds = Array.from(await blockService.getAllBlockedUserIds(currentUserId));
      blockedIds.push(currentUserId);
      where.id = { notIn: blockedIds };
    }

    if (role) {
      where.role = role;
    }

    if (search) {
      where.OR = [
        { profile: { firstName: { contains: search, mode: 'insensitive' } } },
        { profile: { lastName: { contains: search, mode: 'insensitive' } } },
        { profile: { profileId: { equals: search } } },
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        select: userPublicSelect,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.user.count({ where }),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      users,
      pagination,
    };
  } catch (error) {
    logger.error('Error in searchUsers:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error searching users');
  }
};

/**
 * Register or update an FCM token for a device
 */
export const registerFcmToken = async (userId, data) => {
  const { token, deviceId, deviceType, deviceName } = data;

  try {
    const fcmToken = await prisma.fcmToken.upsert({
      where: {
        userId_deviceId: {
          userId,
          deviceId,
        },
      },
      update: {
        token,
        deviceName: deviceName || null,
        isActive: true,
        lastUsedAt: new Date(),
      },
      create: {
        userId,
        token,
        deviceId,
        deviceType,
        deviceName: deviceName || null,
        isActive: true,
        lastUsedAt: new Date(),
      },
    });

    logger.info(`FCM token registered for user ${userId} on device ${deviceId}`);
    return fcmToken;
  } catch (error) {
    logger.error('Error in registerFcmToken:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error registering FCM token');
  }
};

/**
 * Get all users with pagination (Admin Only)
 */
export const getAllUsers = async (query) => {
  try {
    const { page, limit, skip } = getPaginationParams(query);

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        include: {
          profile: true,
          agent: {
            select: {
              agentCode: true,
              agentName: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.user.count(),
    ]);

    const pagination = getPaginationMetadata(page, limit, total);

    return {
      users,
      pagination,
    };
  } catch (error) {
    logger.error('Error in getAllUsers:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving users');
  }
};

/**
 * Update user role (Admin Only)
 */
export const updateUserRole = async (userId, role) => {
  try {
    if (!Object.values(USER_ROLES).includes(role)) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid user role');
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
      include: { profile: true },
    });

    logger.info(`User role updated: ${userId} to ${role}`);
    return user;
  } catch (error) {
    logger.error('Error in updateUserRole:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating user role');
  }
};

/**
 * Delete an FCM token (on logout)
 */
export const deleteFcmToken = async (userId, token) => {
  try {
    const result = await prisma.fcmToken.deleteMany({
      where: {
        userId,
        token,
      },
    });

    if (result.count > 0) {
      logger.info(`🗑️  FCM token deleted for user ${userId}`);
    }
  } catch (error) {
    logger.error('Error in deleteFcmToken:', error);
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting FCM token');
  }
};

export const userService = {
  getFullUserById,
  getPublicUserById,
  updateUser,
  deleteUser,
  searchUsers,
  registerFcmToken,
  deleteFcmToken,
  getAllUsers,
  updateUserRole,
};```

## src/services/verification.service.js
```javascript
import prisma from '../config/database.js';
import { logger } from '../config/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, MEDIA_TYPES } from '../utils/constants.js';
import { getPaginationParams, getPaginationMetadata } from '../utils/helpers.js';
import { notificationService } from './notification.service.js';
import { NOTIFICATION_TYPES } from '../utils/constants.js';

/**
 * [Admin] Get pending verification requests (documents awaiting review)
 * @param {Object} query - Pagination and filter params
 * @returns {Promise<Object>} Paginated list of pending verifications
 */
export const getPendingVerifications = async (query) => {
    const { page, limit, skip } = getPaginationParams(query);
    const { type } = query; // Optional filter by document type

    try {
        const where = {
            verificationStatus: 'PENDING',
            type: {
                in: [
                    MEDIA_TYPES.ID_PROOF,
                    MEDIA_TYPES.ADDRESS_PROOF,
                    MEDIA_TYPES.INCOME_PROOF,
                    MEDIA_TYPES.EDUCATION_CERTIFICATE,
                ],
            },
            deletedAt: null,
        };

        // Filter by specific document type if provided
        if (type) {
            where.type = type;
        }

        const [documents, total] = await Promise.all([
            prisma.media.findMany({
                where,
                skip,
                take: limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            phone: true,
                            createdAt: true,
                            profile: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                    city: true,
                                    state: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { createdAt: 'asc' }, // FIFO queue - oldest first
            }),
            prisma.media.count({ where }),
        ]);

        const pagination = getPaginationMetadata(page, limit, total);

        return {
            documents,
            pagination,
            stats: {
                totalPending: total,
            },
        };
    } catch (error) {
        logger.error('Error in getPendingVerifications:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error retrieving pending verifications'
        );
    }
};

/**
 * [Admin] Get a single document by ID for verification review
 * @param {number} mediaId - The media ID
 * @returns {Promise<Object>} The document details
 */
export const getVerificationById = async (mediaId) => {
    try {
        const document = await prisma.media.findUnique({
            where: { id: mediaId },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        phone: true,
                        createdAt: true,
                        profile: {
                            select: {
                                firstName: true,
                                lastName: true,
                                dateOfBirth: true,
                                gender: true,
                                city: true,
                                state: true,
                                isVerified: true,
                            },
                        },
                    },
                },
            },
        });

        if (!document) {
            throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Document not found');
        }

        return document;
    } catch (error) {
        logger.error('Error in getVerificationById:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error retrieving document'
        );
    }
};

/**
 * [Admin] Approve a verification document
 * @param {number} mediaId - The media ID
 * @param {number} adminId - The admin performing the action
 * @returns {Promise<Object>} The updated document
 */
export const approveVerification = async (mediaId, adminId) => {
    try {
        const document = await prisma.media.findUnique({
            where: { id: mediaId },
            include: { user: { include: { profile: true } } },
        });

        if (!document) {
            throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Document not found');
        }

        if (document.verificationStatus === 'APPROVED') {
            throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Document already approved');
        }

        // Use transaction to update document AND profile verification status
        const result = await prisma.$transaction(async (tx) => {
            // 1. Update the document status
            const updatedDocument = await tx.media.update({
                where: { id: mediaId },
                data: {
                    verificationStatus: 'APPROVED',
                    verifiedAt: new Date(),
                    verifiedBy: adminId,
                    rejectionReason: null,
                },
            });

            // 2. Update the user's profile isVerified status if this is an ID proof
            if (document.type === MEDIA_TYPES.ID_PROOF && document.user?.profile) {
                await tx.profile.update({
                    where: { id: document.user.profile.id },
                    data: {
                        isVerified: true,
                        verifiedAt: new Date(),
                    },
                });
                logger.info(`Profile ${document.user.profile.id} marked as verified`);
            }

            return updatedDocument;
        });

        // Send notification to user about approval
        try {
            await notificationService.createNotification({
                userId: document.user.id,
                type: NOTIFICATION_TYPES.PROFILE_VERIFIED || 'PROFILE_VERIFIED', // TODO: Add to constants
                title: 'Document Verified! ✅',
                message: 'Your document has been verified successfully.',
                data: {
                    type: 'PROFILE_VERIFIED',
                    mediaId: String(mediaId),
                },
            });
        } catch (error) {
            logger.error('Failed to send verification approval notification:', error);
        }

        logger.info(`Document ${mediaId} approved by admin ${adminId}`);
        return result;
    } catch (error) {
        logger.error('Error in approveVerification:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error approving document'
        );
    }
};

/**
 * [Admin] Reject a verification document
 * @param {number} mediaId - The media ID
 * @param {number} adminId - The admin performing the action
 * @param {string} reason - Rejection reason
 * @returns {Promise<Object>} The updated document
 */
export const rejectVerification = async (mediaId, adminId, reason) => {
    try {
        const document = await prisma.media.findUnique({
            where: { id: mediaId },
        });

        if (!document) {
            throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Document not found');
        }

        if (document.verificationStatus === 'REJECTED') {
            throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Document already rejected');
        }

        const updatedDocument = await prisma.media.update({
            where: { id: mediaId },
            data: {
                verificationStatus: 'REJECTED',
                verifiedAt: new Date(),
                verifiedBy: adminId,
                rejectionReason: reason,
            },
        });

        // Send notification to user about rejection
        try {
            await notificationService.createNotification({
                userId: document.userId, // Note: document.userId is stored on the media object
                type: NOTIFICATION_TYPES.VERIFICATION_REJECTED || 'VERIFICATION_REJECTED',
                title: 'Document Rejected ❌',
                message: `Your document was rejected: ${reason}`,
                data: {
                    type: 'VERIFICATION_REJECTED',
                    mediaId: String(mediaId),
                    reason: reason,
                },
            });
        } catch (error) {
            logger.error('Failed to send verification rejection notification:', error);
        }

        logger.info(`Document ${mediaId} rejected by admin ${adminId}: ${reason}`);
        return updatedDocument;
    } catch (error) {
        logger.error('Error in rejectVerification:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error rejecting document'
        );
    }
};

/**
 * [Admin] Request resubmission of a verification document
 * @param {number} mediaId - The media ID
 * @param {number} adminId - The admin performing the action
 * @param {string} reason - Reason for resubmission request
 * @returns {Promise<Object>} The updated document
 */
export const requestResubmission = async (mediaId, adminId, reason) => {
    try {
        const document = await prisma.media.findUnique({
            where: { id: mediaId },
        });

        if (!document) {
            throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Document not found');
        }

        const updatedDocument = await prisma.media.update({
            where: { id: mediaId },
            data: {
                verificationStatus: 'RESUBMIT_REQUIRED',
                verifiedAt: new Date(),
                verifiedBy: adminId,
                rejectionReason: reason,
            },
        });

        // Send notification requesting resubmission
        try {
            await notificationService.createNotification({
                userId: document.userId,
                type: 'VERIFICATION_RESUBMIT', // TODO: Add to constants
                title: 'Resubmission Required ⚠️',
                message: `Please resubmit your document: ${reason}`,
                data: {
                    type: 'VERIFICATION_RESUBMIT',
                    mediaId: String(mediaId),
                    reason: reason,
                },
            });
        } catch (error) {
            logger.error('Failed to send resubmission notification:', error);
        }

        logger.info(
            `Document ${mediaId} resubmission requested by admin ${adminId}: ${reason}`
        );
        return updatedDocument;
    } catch (error) {
        logger.error('Error in requestResubmission:', error);
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error requesting resubmission'
        );
    }
};

/**
 * [Admin] Get verification statistics
 * @returns {Promise<Object>} Verification stats
 */
export const getVerificationStats = async () => {
    try {
        const documentTypes = [
            MEDIA_TYPES.ID_PROOF,
            MEDIA_TYPES.ADDRESS_PROOF,
            MEDIA_TYPES.INCOME_PROOF,
            MEDIA_TYPES.EDUCATION_CERTIFICATE,
        ];

        const [pending, approved, rejected, resubmitRequired, verifiedProfiles] =
            await Promise.all([
                prisma.media.count({
                    where: {
                        verificationStatus: 'PENDING',
                        type: { in: documentTypes },
                        deletedAt: null,
                    },
                }),
                prisma.media.count({
                    where: {
                        verificationStatus: 'APPROVED',
                        type: { in: documentTypes },
                        deletedAt: null,
                    },
                }),
                prisma.media.count({
                    where: {
                        verificationStatus: 'REJECTED',
                        type: { in: documentTypes },
                        deletedAt: null,
                    },
                }),
                prisma.media.count({
                    where: {
                        verificationStatus: 'RESUBMIT_REQUIRED',
                        type: { in: documentTypes },
                        deletedAt: null,
                    },
                }),
                prisma.profile.count({
                    where: { isVerified: true },
                }),
            ]);

        return {
            documents: {
                pending,
                approved,
                rejected,
                resubmitRequired,
                total: pending + approved + rejected + resubmitRequired,
            },
            verifiedProfiles,
        };
    } catch (error) {
        logger.error('Error in getVerificationStats:', error);
        throw new ApiError(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            'Error retrieving verification stats'
        );
    }
};

export const verificationService = {
    getPendingVerifications,
    getVerificationById,
    approveVerification,
    rejectVerification,
    requestResubmission,
    getVerificationStats,
};
```

## src/socket/handlers/message.handler.js
```javascript
import { messageService } from '../../services/message.service.js';
import { logger } from '../../config/logger.js';
import { SOCKET_EVENTS, MESSAGE_STATUS } from '../../utils/constants.js';
import prisma from '../../config/database.js';

/**
 * THROTTLE: Track last typing event timestamp per user+receiver pair
 * Key: `${userId}:${receiverId}`, Value: timestamp in ms
 * Allows max 1 typing event per second per conversation
 */
const typingThrottle = new Map();
const TYPING_THROTTLE_MS = 1000; // 1 second

/**
 * Setup message event handlers
 * @param {Object} io - Socket.io instance
 * @param {Object} socket - Socket instance
 */
export const setupMessageHandlers = (io, socket) => {
  /**
   * Handle sending message
   */
  socket.on(SOCKET_EVENTS.MESSAGE_SEND, async (data, callback) => {
    try {
      const { receiverId, content, contentType = 'TEXT' } = data; // NEW: contentType param

      if (!receiverId || !content) {
        throw new Error('Invalid message data');
      }

      // 1. Save message to database (status: SENT by default)
      const message = await messageService.sendMessage(
        socket.userId,
        receiverId,
        content,
        contentType // NEW: pass contentType
      );

      // 2. Emit to receiver's room (will send to all their devices)
      io.to(`user:${receiverId}`).emit(SOCKET_EVENTS.MESSAGE_RECEIVED, message);

      // 3. Acknowledge to sender that the message was sent successfully
      if (callback) {
        callback({ success: true, message });
      }

      logger.info(`Socket message sent from ${socket.userId} to ${receiverId}`);
    } catch (error) {
      logger.error(`Socket error sending message: ${error.message}`);
      // 4. Acknowledge to sender that there was an error
      if (callback) {
        callback({
          success: false,
          message: error.message || 'Failed to send message',
        });
      }
    }
  });

  /**
   * ADDED: Handle message delivered confirmation
   * When receiver's app receives a message, it sends this to confirm delivery
   */
  socket.on(SOCKET_EVENTS.MESSAGE_DELIVERED, async (data) => {
    try {
      const { messageId, senderId } = data;

      if (!messageId) {
        throw new Error('Invalid message ID for delivery confirmation');
      }

      // SECURITY FIX: Verify socket user is the actual receiver
      const message = await prisma.message.findUnique({
        where: { id: messageId },
        select: { receiverId: true, status: true },
      });

      if (!message) {
        logger.warn(`MESSAGE_DELIVERED: Message ${messageId} not found`);
        return;
      }

      if (message.receiverId !== socket.userId) {
        logger.warn(`MESSAGE_DELIVERED: Unauthorized attempt by user ${socket.userId} for message ${messageId}`);
        return; // Silently reject - don't reveal message exists
      }

      // Authorization passed - update message status in database
      await prisma.message.update({
        where: { id: messageId },
        data: {
          status: MESSAGE_STATUS.DELIVERED,
          deliveredAt: new Date(),
        },
      });

      // Notify the sender that their message was delivered
      io.to(`user:${senderId}`).emit(SOCKET_EVENTS.MESSAGE_DELIVERED, {
        messageId,
        deliveredAt: new Date().toISOString(),
      });

      logger.info(`Message ${messageId} marked as delivered`);
    } catch (error) {
      logger.error('Socket error marking message as delivered:', error.message);
    }
  });

  /**
   * Handle marking messages as read
   */
  socket.on(SOCKET_EVENTS.MESSAGE_READ, async (data) => {
    try {
      // `userId` here is the *other* user, whose messages I am reading
      const { userId: otherUserId } = data;

      if (!otherUserId) {
        throw new Error('Invalid user ID for marking messages as read');
      }

      // Mark messages as read in the database
      await messageService.markMessagesAsRead(socket.userId, otherUserId);

      // Emit to the *other user* (in their room) to notify them
      io.to(`user:${otherUserId}`).emit(SOCKET_EVENTS.MESSAGE_READ, {
        byUser: socket.userId,
      });

      logger.info(`Messages marked as read by ${socket.userId} from ${otherUserId}`);
    } catch (error) {
      logger.error('Socket error marking messages as read:', error);
      socket.emit('error', {
        message: 'Failed to mark messages as read',
        error: error.message,
      });
    }
  });

  /**
   * Handle typing start (THROTTLED: 1 per second per conversation)
   */
  socket.on(SOCKET_EVENTS.TYPING_START, (data) => {
    const { receiverId } = data;
    if (!receiverId) return;

    // SERVER-SIDE THROTTLE: Drop excess events silently
    const key = `${socket.userId}:${receiverId}`;
    const now = Date.now();
    const lastTyping = typingThrottle.get(key) || 0;

    if (now - lastTyping < TYPING_THROTTLE_MS) {
      return; // Silently drop, too soon
    }

    typingThrottle.set(key, now);

    // Emit to the receiver's room
    io.to(`user:${receiverId}`).emit(SOCKET_EVENTS.TYPING_START, {
      userId: socket.userId,
    });
  });

  /**
   * Handle typing stop (no throttle needed - stop events are important)
   */
  socket.on(SOCKET_EVENTS.TYPING_STOP, (data) => {
    const { receiverId } = data;
    if (!receiverId) return;

    // Clear throttle on stop (allows immediate next start)
    const key = `${socket.userId}:${receiverId}`;
    typingThrottle.delete(key);

    // Emit to the receiver's room
    io.to(`user:${receiverId}`).emit(SOCKET_EVENTS.TYPING_STOP, {
      userId: socket.userId,
    });
  });
};```

## src/socket/handlers/notification.handler.js
```javascript
import { notificationService } from '../../services/notification.service.js';
import { logger } from '../../config/logger.js';
import { ApiError } from '../../utils/ApiError.js';
import { HTTP_STATUS } from '../../utils/constants.js';

/**
 * Setup notification event handlers for events *initiated by the client*
 * @param {Object} io - Socket.io instance
 * @param {Object} socket - Socket instance
 */
export const setupNotificationHandlers = (io, socket) => {
  
  /**
   * Handle marking notification as read
   */
  socket.on('notification:read', async (data, callback) => {
    try {
      const { notificationId } = data;

      if (!notificationId || typeof notificationId !== 'number') {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid notification ID');
      }

      // Mark notification as read
      await notificationService.markAsRead(notificationId, socket.userId);

      if (callback) {
        callback({ success: true, notificationId });
      }

      logger.info(
        `Notification ${notificationId} marked as read by ${socket.userId}`
      );
    } catch (error) {
      logger.error('Socket error marking notification as read:', error);
      if (callback) {
        callback({ success: false, message: error.message });
      }
    }
  });

  /**
   * Handle get unread count
   */
  socket.on('notification:unread-count', async (data, callback) => {
    try {
      const count = await notificationService.getUnreadCount(socket.userId);
      
      if (callback) {
        callback({ success: true, count });
      } else {
        // Fallback for non-callback version
        socket.emit('notification:unread-count', { count });
      }
    } catch (error) {
      logger.error('Socket error getting unread count:', error);
      if (callback) {
        callback({ success: false, message: error.message });
      }
    }
  });

  /**
   * NOTE: The 'NOTIFICATION_SEND' listener has been removed.
   * Notifications should be created by services (e.g., MatchService, MessageService)
   * by calling 'notificationService.createNotification'.
   * This service now handles all dispatching (DB, Socket, Push).
   */
};```

## src/socket/index.js
```javascript
import { Server } from 'socket.io';
import { verifyAccessToken } from '../utils/jwt.js';
import { logger } from '../config/logger.js';
import { SOCKET_EVENTS } from '../utils/constants.js';
import { setupMessageHandlers } from './handlers/message.handler.js';
import { setupNotificationHandlers } from './handlers/notification.handler.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { setOnline, setOffline } from '../services/onlineStatus.service.js';

/**
 * Stores mapping of userId to a Set of socket.id
 * This correctly handles multiple connections from a single user.
 */
const onlineUsers = new Map();

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
  });

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

      if (!socket.userId) {
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

    // --- Presence Management (FIXED for multiple sockets) ---
    // 1. Add socket to the user's Set
    if (!onlineUsers.has(socket.userId)) {
      onlineUsers.set(socket.userId, new Set());
    }
    const userSockets = onlineUsers.get(socket.userId);

    // 2. If this is the first socket for this user, broadcast online status
    if (userSockets.size === 0) {
      socket.broadcast.emit(SOCKET_EVENTS.USER_ONLINE, {
        userId: socket.userId,
      });
      // Persist online status to database
      setOnline(socket.userId).catch(err => logger.error('Failed to set online status:', err));
    }
    userSockets.add(socket.id);

    // 3. Join user's personal room (for targeted emits)
    socket.join(`user:${socket.userId}`);

    // Handle explicit join event from frontend
    socket.on('join', (data) => {
      logger.info(`User ${socket.userId} explicitly joined via 'join' event`);
      // User already in their room, just acknowledge
      socket.emit('joined', { userId: socket.userId, success: true });
    });

    // Setup message handlers
    setupMessageHandlers(io, socket);

    // Setup notification handlers
    setupNotificationHandlers(io, socket);

    // Handle disconnect
    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      logger.info(`User disconnected: ${socket.userId} (Socket ID: ${socket.id})`);

      // --- Presence Management (FIXED for multiple sockets) ---
      // 1. Remove socket from the user's Set
      const userSockets = onlineUsers.get(socket.userId);
      if (userSockets) {
        userSockets.delete(socket.id);

        // 2. If this was the last socket for this user, broadcast offline status
        if (userSockets.size === 0) {
          onlineUsers.delete(socket.userId);
          socket.broadcast.emit(SOCKET_EVENTS.USER_OFFLINE, {
            userId: socket.userId,
          });
          // Persist offline status and last seen to database
          setOffline(socket.userId).catch(err => logger.error('Failed to set offline status:', err));
        }
      }
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
export const isUserOnline = (userId) => {
  return onlineUsers.has(userId);
};

/**
 * Get all online user IDs
 * @returns {number[]} Array of online user IDs
 */
export const getOnlineUsers = () => {
  return Array.from(onlineUsers.keys());
};

/**
 * [DEPRECATED] This function is unsafe as it only targets one socket.
 * Do not use. Use io.to(`user:${userId}`).emit(...) instead.
 */
// export const emitToUser = (io, userId, event, data) => { ... }
// ^^^ We remove this function entirely to prevent bugs.
// All emits should be done via rooms, which is handled in controllers/handlers.```

## src/utils/ApiError.js
```javascript
class ApiError extends Error {
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };```

## src/utils/ApiResponse.js
```javascript
class ApiResponse {
  constructor(statusCode, data, message = 'Success') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };```

## src/utils/asyncHandler.js
```javascript
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }```

## src/utils/bcrypt.js
```javascript
import bcrypt from 'bcryptjs';
import { logger } from '../config/logger.js';

const SALT_ROUNDS = 10;

/**
 * Hash a password
 * @param {string} password - Plain text password
 * @returns {Promise<string>} Hashed password
 */
export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    logger.error('Error hashing password:', error);
    throw error;
  }
};

/**
 * Compare password with hash
 * @param {string} password - Plain text password
 * @param {string} hash - Hashed password
 * @returns {Promise<boolean>} True if password matches
 */
export const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    logger.error('Error comparing password:', error);
    throw error;
  }
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with isValid and errors
 */
export const validatePasswordStrength = (password) => {
  const errors = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};
```

## src/utils/cache.helper.js
```javascript
/**
 * Redis Cache Helper
 * Wraps Redis operations with error handling and fallbacks
 */

import { getRedisClient, isRedisConnected } from '../config/redis.js';
import { logger } from '../config/logger.js';

export const cacheHelper = {
    /**
     * Get value from cache
     * @param {string} key 
     * @returns {Promise<any|null>}
     */
    get: async (key) => {
        try {
            if (!isRedisConnected()) return null;
            const client = getRedisClient();
            const data = await client.get(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            logger.warn(`Redis Get Error [${key}]:`, error.message);
            return null;
        }
    },

    /**
     * Set value in cache
     * @param {string} key 
     * @param {any} data 
     * @param {number} ttlSeconds 
     */
    set: async (key, data, ttlSeconds = 3600) => {
        try {
            if (!isRedisConnected()) return;
            const client = getRedisClient();
            await client.setex(key, ttlSeconds, JSON.stringify(data));
        } catch (error) {
            logger.warn(`Redis Set Error [${key}]:`, error.message);
        }
    },

    /**
     * Get from cache or fetch from source
     * @param {string} key 
     * @param {Function} fetchFn 
     * @param {number} ttlSeconds 
     * @returns {Promise<any>}
     */
    getOrFetch: async (key, fetchFn, ttlSeconds = 3600) => {
        // 1. Try Cache
        const cached = await cacheHelper.get(key);
        if (cached) {
            return cached;
        }

        // 2. Fetch from Source
        const data = await fetchFn();

        // 3. Set Cache (non-blocking)
        if (data) {
            cacheHelper.set(key, data, ttlSeconds);
        }

        return data;
    },

    /**
     * Delete from cache
     * @param {string} key 
     */
    del: async (key) => {
        try {
            if (!isRedisConnected()) return;
            const client = getRedisClient();
            await client.del(key);
        } catch (error) {
            logger.warn(`Redis Del Error [${key}]:`, error.message);
        }
    }
};
```

## src/utils/constants.js
```javascript
/**
 * User Roles (Matches Prisma Enum: UserRole)
 */
export const USER_ROLES = {
  USER: 'USER',
  PREMIUM_USER: 'PREMIUM_USER',
  VERIFIED_USER: 'VERIFIED_USER',
  ADMIN: 'ADMIN',
};

/**
 * Language Options (Matches Prisma Enum)
 */
export const LANGUAGE = {
  EN: 'EN', // English
  HI: 'HI', // Hindi
  CG: 'CG', // Chhattisgarhi
};

/**
 * Gender Options
 */
export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
};

/**
 * Religion Options (Matches Prisma Enum)
 */
export const RELIGION = {
  HINDU: 'HINDU',
  MUSLIM: 'MUSLIM',
  CHRISTIAN: 'CHRISTIAN',
  SIKH: 'SIKH',
  BUDDHIST: 'BUDDHIST',
  JAIN: 'JAIN',
  PARSI: 'PARSI',
  JEWISH: 'JEWISH',
  BAHAI: 'BAHAI',
  NO_RELIGION: 'NO_RELIGION',
  SPIRITUAL: 'SPIRITUAL',
  OTHER: 'OTHER',
};

/**
 * Mother Tongue Options (Matches Prisma Enum)
 */
export const MOTHER_TONGUE = {
  CHHATTISGARHI: 'CHHATTISGARHI',
  HINDI: 'HINDI',
  ENGLISH: 'ENGLISH',
  TAMIL: 'TAMIL',
  TELUGU: 'TELUGU',
  MALAYALAM: 'MALAYALAM',
  KANNADA: 'KANNADA',
  MARATHI: 'MARATHI',
  GUJARATI: 'GUJARATI',
  BENGALI: 'BENGALI',
  PUNJABI: 'PUNJABI',
  URDU: 'URDU',
  ODIA: 'ODIA',
  ASSAMESE: 'ASSAMESE',
  KONKANI: 'KONKANI',
  KASHMIRI: 'KASHMIRI',
  SANSKRIT: 'SANSKRIT',
  SINDHI: 'SINDHI',
  NEPALI: 'NEPALI',
  MANIPURI: 'MANIPURI',
  BODO: 'BODO',
  DOGRI: 'DOGRI',
  MAITHILI: 'MAITHILI',
  SANTALI: 'SANTALI',
  OTHER: 'OTHER',
};

/**
 * Marital Status Options (Matches Prisma Enum)
 */
export const MARITAL_STATUS = {
  NEVER_MARRIED: 'NEVER_MARRIED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED',
  AWAITING_DIVORCE: 'AWAITING_DIVORCE',
  ANNULLED: 'ANNULLED',
};

/**
 * Education Level Options (Matches Prisma Enum)
 * ADDED
 */
export const EDUCATION_LEVEL = {
  HIGH_SCHOOL: 'HIGH_SCHOOL',
  INTERMEDIATE: 'INTERMEDIATE',
  DIPLOMA: 'DIPLOMA',
  BACHELORS: 'BACHELORS',
  MASTERS: 'MASTERS',
  DOCTORATE: 'DOCTORATE',
  POST_DOCTORATE: 'POST_DOCTORATE',
  PROFESSIONAL_DEGREE: 'PROFESSIONAL_DEGREE',
  OTHER: 'OTHER',
};

/**
 * Occupation Type Options (Matches Prisma Enum)
 * ADDED
 */
export const OCCUPATION_TYPE = {
  SALARIED: 'SALARIED',
  BUSINESS: 'BUSINESS',
  PROFESSIONAL: 'PROFESSIONAL',
  SELF_EMPLOYED: 'SELF_EMPLOYED',
  NOT_WORKING: 'NOT_WORKING',
  STUDENT: 'STUDENT',
  RETIRED: 'RETIRED',
};

/**
 * Match Status Options (Matches Prisma Enum: MatchRequestStatus)
 */
export const MATCH_STATUS = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
};

/**
 * Payment Status Options (Matches Prisma Enum: PaymentStatus)
 */
export const PAYMENT_STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  CANCELLED: 'CANCELLED',
};

/**
 * File Upload Types
 */
export const UPLOAD_TYPES = {
  PROFILE_PHOTO: 'profile_photo',
  ID_PROOF: 'id_proof',
  DOCUMENT: 'document',
};

/**
 * Allowed Image Mimetypes
 */
export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

/**
 * Allowed Document Mimetypes
 */
export const ALLOWED_DOCUMENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
];

/**
 * Maximum File Sizes (in MB)
 */
export const MAX_FILE_SIZES = {
  IMAGE: 5,
  DOCUMENT: 10,
};

/**
 * Pagination Defaults
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

/**
 * Token Expiry Times
 */
export const TOKEN_EXPIRY = {
  ACCESS: '15m',
  REFRESH: '7d',
  RESET_PASSWORD: '1h',
  EMAIL_VERIFICATION: '24h',
};

/**
 * Rate Limit Windows
 */
export const RATE_LIMITS = {
  STANDARD: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100,
  },
  AUTH: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 5,
  },
  UPLOAD: {
    WINDOW_MS: 60 * 60 * 1000, // 1 hour
    MAX_REQUESTS: 10,
  },
};

/**
 * Socket Events
 */
export const SOCKET_EVENTS = {
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  JOIN: 'join',
  MESSAGE_SEND: 'message:send',
  MESSAGE_RECEIVED: 'message:received',
  MESSAGE_DELIVERED: 'message:delivered', // ADDED: Delivery receipts
  MESSAGE_READ: 'message:read',
  NOTIFICATION_SEND: 'notification:send',
  NOTIFICATION_RECEIVED: 'notification:received',
  USER_ONLINE: 'user:online',
  USER_OFFLINE: 'user:offline',
  TYPING_START: 'typing:started',
  TYPING_STOP: 'typing:stopped',
};

/**
 * Message Status (Matches Prisma Enum)
 */
export const MESSAGE_STATUS = {
  SENT: 'SENT',
  DELIVERED: 'DELIVERED',
  READ: 'READ',
  FAILED: 'FAILED',
};

/**
 * Media Types (Matches Prisma Enum: MediaType)
 */
export const MEDIA_TYPES = {
  PROFILE_PHOTO: 'PROFILE_PHOTO',
  GALLERY_PHOTO: 'GALLERY_PHOTO',
  ID_PROOF: 'ID_PROOF',
  ADDRESS_PROOF: 'ADDRESS_PROOF',
  INCOME_PROOF: 'INCOME_PROOF',
  EDUCATION_CERTIFICATE: 'EDUCATION_CERTIFICATE',
  CHAT_IMAGE: 'CHAT_IMAGE',
  OTHER_DOCUMENT: 'OTHER_DOCUMENT',
};

/**
 * Subscription Status Options
 */
export const SUBSCRIPTION_STATUS = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
};

/**
 * Notification Types
 */
export const NOTIFICATION_TYPES = {
  // Match related
  MATCH_REQUEST: 'MATCH_REQUEST',
  MATCH_ACCEPTED: 'MATCH_ACCEPTED',
  MATCH_REJECTED: 'MATCH_REJECTED',

  // Messaging
  NEW_MESSAGE: 'NEW_MESSAGE',

  // Profile interactions
  PROFILE_VIEWED: 'PROFILE_VIEWED',
  SHORTLISTED: 'SHORTLISTED',

  // Contact requests
  CONTACT_REQUEST: 'CONTACT_REQUEST',
  CONTACT_APPROVED: 'CONTACT_APPROVED',
  CONTACT_REJECTED: 'CONTACT_REJECTED',

  // Photo requests
  PHOTO_REQUEST: 'PHOTO_REQUEST',
  PHOTO_APPROVED: 'PHOTO_APPROVED',
  PHOTO_REJECTED: 'PHOTO_REJECTED',

  // Subscription related
  SUBSCRIPTION_ACTIVATED: 'SUBSCRIPTION_ACTIVATED',
  SUBSCRIPTION_EXPIRING: 'SUBSCRIPTION_EXPIRING',
  SUBSCRIPTION_EXPIRED: 'SUBSCRIPTION_EXPIRED',

  // Payment related  
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  PAYMENT_FAILED: 'PAYMENT_FAILED',

  // Profile verification
  PROFILE_VERIFIED: 'PROFILE_VERIFIED',
  VERIFICATION_REJECTED: 'VERIFICATION_REJECTED',

  // System
  SYSTEM_ANNOUNCEMENT: 'SYSTEM_ANNOUNCEMENT',
  WELCOME: 'WELCOME',
};

/**
 * HTTP Status Codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  NOT_FOUND: 'Resource not found',
  VALIDATION_ERROR: 'Validation error',
  INTERNAL_ERROR: 'Internal server error',
  INVALID_TOKEN: 'Invalid or expired token',
  INVALID_CREDENTIALS: 'Invalid credentials',
  USER_EXISTS: 'User already exists',
  USER_NOT_FOUND: 'User not found',
  PROFILE_NOT_FOUND: 'Profile not found',
  MATCH_NOT_FOUND: 'Match not found',
  MESSAGE_NOT_FOUND: 'Message not found',
  PAYMENT_FAILED: 'Payment failed',
  UPLOAD_FAILED: 'File upload failed',
};

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  REGISTRATION_SUCCESS: 'Registration successful',
  PROFILE_UPDATED: 'Profile updated successfully',
  PROFILE_CREATED: 'Profile created successfully',
  MATCH_SENT: 'Match request sent successfully',
  MATCH_ACCEPTED: 'Match request accepted',
  MATCH_REJECTED: 'Match request rejected',
  MESSAGE_SENT: 'Message sent successfully',
  PAYMENT_SUCCESS: 'Payment successful',
  UPLOAD_SUCCESS: 'File uploaded successfully',
};


/**
 * Report Reasons (Matches Prisma Enum)
 * ADDED
 */
export const REPORT_REASON = {
  FAKE_PROFILE: 'FAKE_PROFILE',
  INAPPROPRIATE_CONTENT: 'INAPPROPRIATE_CONTENT',
  HARASSMENT: 'HARASSMENT',
  SCAM: 'SCAM',
  SPAM: 'SPAM',
  UNDERAGE: 'UNDERAGE',
  IMPERSONATION: 'IMPERSONATION',
  PRIVACY_VIOLATION: 'PRIVACY_VIOLATION',
  OTHER: 'OTHER',
};


/**
 * Profile Visibility Options
 * ADDED
 */
export const PROFILE_VISIBILITY = {
  PUBLIC: 'PUBLIC',
  REGISTERED: 'REGISTERED',
  MATCHED: 'MATCHED',
  HIDDEN: 'HIDDEN',
};

/**
 * Privacy Level Options (for contact info, etc.)
 * ADDED
 */
export const PRIVACY_LEVEL = {
  PUBLIC: 'PUBLIC',
  REGISTERED: 'REGISTERED',
  MATCHED: 'MATCHED',
  HIDDEN: 'HIDDEN',
};



/**
 * Communication Privacy Options (for receiving requests)
 * ADDED
 */
export const COMMUNICATION_PRIVACY = {
  EVERYONE: 'EVERYONE',
  MATCHED_ONLY: 'MATCHED_ONLY',
  HIDDEN: 'HIDDEN', // You might want a 'nobody' option
};

/**
 * Message Privacy Options
 * ADDED
 */
export const MESSAGE_PRIVACY = {
  EVERYONE: 'EVERYONE',
  MATCHED_ONLY: 'MATCHED_ONLY',
};


/**
 * Photo Visibility Options
 * ADDED
 */
export const PHOTO_VISIBILITY = {
  REGISTERED: 'REGISTERED',
  MATCHED: 'MATCHED',
  HIDDEN: 'HIDDEN',
};

/**
 * Watermark Position Options
 * ADDED
 */
export const WATERMARK_POSITION = {
  BOTTOM_RIGHT: 'BOTTOM_RIGHT',
  CENTER: 'CENTER',
  TOP_LEFT: 'TOP_LEFT',
  // ... add others as needed
};

/**
 * Photo Blur Level Options
 * ADDED
 */
export const BLUR_LEVEL = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};


/**
 * Contact Request Type Options
 * ADDED
 */
export const CONTACT_REQUEST_TYPE = {
  PHONE: 'PHONE',
  EMAIL: 'EMAIL',
  SOCIAL: 'SOCIAL', // Example, based on schema `showSocialMedia`
};

/**
 * Contact Request Status Options
 * ADDED
 */
export const CONTACT_REQUEST_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
};


/**
 * Report Status (Matches Prisma Enum)
 * ADDED
 */
export const REPORT_STATUS = {
  PENDING: 'PENDING',
  UNDER_REVIEW: 'UNDER_REVIEW',
  RESOLVED: 'RESOLVED',
  DISMISSED: 'DISMISSED',
  ESCALATED: 'ESCALATED',
};


/**
 * Photo View Request Status Options
 * ADDED
 */
export const PHOTO_REQUEST_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
};


/**
 * Agent Status (Matches Prisma Enum)
 * ADDED
 */
export const AGENT_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  TERMINATED: 'TERMINATED',
};


/**
 * Two-Factor Authentication Methods
 * ADDED
 */
export const TWO_FACTOR_METHOD = {
  SMS: 'SMS',
  EMAIL: 'EMAIL',
  BOTH: 'BOTH',
};```

## src/utils/helpers.js
```javascript
import { PAGINATION } from './constants.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { logger } from '../config/logger.js';

/**
 * Calculate pagination metadata
 */
export const getPaginationMetadata = (page, limit, total) => {
  const totalPages = Math.ceil(total / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  return {
    page,
    totalPages,
    totalItems: total,
    itemsPerPage: limit,
    hasNextPage,
    hasPrevPage,
  };
};

/**
 * Get pagination parameters from query
 */
export const getPaginationParams = (query) => {
  const page = parseInt(query.page, 10) || PAGINATION.DEFAULT_PAGE;
  const limit = Math.min(
    parseInt(query.limit, 10) || PAGINATION.DEFAULT_LIMIT,
    PAGINATION.MAX_LIMIT
  );
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

/**
 * Generate secure random OTP
 */
export const generateOTP = (length = 6) => {
  // CRITICAL FIX: Use crypto.randomInt for a cryptographically secure random number
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return crypto.randomInt(min, max + 1).toString();
};

/**
 * Generate unique filename
 */
export const generateUniqueFilename = (originalName) => {
  const timestamp = Date.now();
  // FIX: Use crypto for a more unique random number
  const random = crypto.randomInt(10000, 99999);
  const extension = originalName.split('.').pop() || 'tmp';
  const nameWithoutExt =
    originalName.split('.').slice(0, -1).join('.') || 'file';
  const sanitizedName = nameWithoutExt.replace(/[^a-zA-Z0-9_.-]/g, '_');

  return `${sanitizedName}_${timestamp}_${random}.${extension}`;
};

/**
 * Format date to readable string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Calculate age from date of birth
 */
export const calculateAge = (dob) => {
  if (!dob) return 0;
  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }

  return age;
};

/**
 * Get file extension from mimetype
 */
export const getExtensionFromMimetype = (mimetype) => {
  const mimetypeMap = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'application/pdf': 'pdf',
  };
  return mimetypeMap[mimetype] || 'bin';
};

/**
 * Sleep for specified milliseconds
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Chunk array into smaller arrays
 */
export const chunkArray = (array, size) => {
  if (!Array.isArray(array) || size <= 0) {
    return [];
  }
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

/**
 * Remove undefined and null values from object
 */
export const cleanObject = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== undefined && v !== null)
  );
};

/**
 * Generate cloud storage object key
 */
export const generateStorageKey = (folder, filename) => {
  return `${folder}/${filename}`;
};

/**
 * Parse JWT token without verification
 */
export const parseJWT = (token) => {
  try {
    // FIX: Use the library's built-in decode function
    return jwt.decode(token);
  } catch (e) {
    logger.error('Error decoding JWT:', e.message);
    return null;
  }
};

/**
 * Convert height from cm to feet/inches
 */
export const cmToFeetInches = (cm) => {
  if (typeof cm !== 'number' || cm <= 0) {
    return { feet: 0, inches: 0 };
  }
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
};

/**
 * Mask email address
 */
export const maskEmail = (email) => {
  if (!email || !email.includes('@')) {
    return '***';
  }
  const [username, domain] = email.split('@');
  const maskedUsername =
    username.length > 2
      ? username.substring(0, 2) + '***' + username.substring(username.length - 1)
      : '***';
  return `${maskedUsername}@${domain}`;
};

/**
 * Mask phone number
 */
export const maskPhone = (phone) => {
  if (!phone || phone.length < 4) {
    return '******';
  }
  return phone.substring(0, 2) + '******' + phone.substring(phone.length - 2);
};```

## src/utils/jwt.js
```javascript
import jwt from 'jsonwebtoken';

class JWTUtils {
  generateAccessToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      type: 'access',
    };

    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m',
    });
  }

  generateRefreshToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      type: 'refresh',
    };

    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d',
    });
  }

  verifyAccessToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      if (decoded.type !== 'access') {
        throw new Error('Invalid token type');
      }
      return decoded;
    } catch (error) {
      throw new Error('Invalid or expired access token');
    }
  }

  verifyRefreshToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      if (decoded.type !== 'refresh') {
        throw new Error('Invalid token type');
      }
      return decoded;
    } catch (error) {
      throw new Error('Invalid or expired refresh token');
    }
  }
}

// ES6 export
const jwtUtils = new JWTUtils();

// Export both as default and named exports
export default jwtUtils;
export const {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} = jwtUtils;```

## src/utils/profile.helpers.js
```javascript
/**
 * Calculates the profile completeness score based on filled fields.
 * @param {Object} profile - The user's profile object from Prisma.
 * @returns {number} A score between 0 and 100.
 */
export const calculateProfileCompleteness = (profile) => {
  if (!profile) return 0;

  const fields = [
    // Basic Info (20 points)
    { key: 'firstName', weight: 3 },
    { key: 'lastName', weight: 3 },
    { key: 'dateOfBirth', weight: 5 },
    { key: 'gender', weight: 3 },
    { key: 'maritalStatus', weight: 3 },
    { key: 'bio', weight: 3 },

    // Location (10 points)
    { key: 'country', weight: 2 },
    { key: 'state', weight: 2 },
    { key: 'city', weight: 2 },
    { key: 'residencyStatus', weight: 2 },
    { key: 'nativeVillage', weight: 2 }, // Chhattisgarh-Specific

    // Physical (10 points)
    { key: 'height', weight: 3 },
    { key: 'weight', weight: 2 },
    { key: 'physicalDisability', weight: 1 }, // Presence of info is what matters

    // Religion & Caste (10 points)
    { key: 'religion', weight: 3 },
    { key: 'category', weight: 2 }, // ADDED
    { key: 'caste', weight: 2 }, // Reduced from 3

    { key: 'motherTongue', weight: 2 },
    { key: 'speaksChhattisgarhi', weight: 2 }, // Chhattisgarh-Specific

    // Education & Occupation (15 points)
    { key: 'highestEducation', weight: 3 },
    { key: 'collegeName', weight: 2 },
    { key: 'occupationType', weight: 3 },
    { key: 'occupation', weight: 2 },
    { key: 'companyName', weight: 2 },
    { key: 'annualIncome', weight: 3 },

    // Family Details (15 points)
    { key: 'aboutFamily', weight: 3 },
    { key: 'fatherStatus', weight: 2 },
    { key: 'motherStatus', weight: 2 },
    { key: 'fatherOccupation', weight: 2 },
    { key: 'motherOccupation', weight: 2 },
    { key: 'numberOfBrothers', weight: 1 },
    { key: 'numberOfSisters', weight: 1 },
    { key: 'familyType', weight: 1 },
    { key: 'familyValues', weight: 1 },

    // Lifestyle (10 points)
    { key: 'diet', weight: 3 },
    { key: 'smokingHabit', weight: 3 },
    { key: 'drinkingHabit', weight: 3 },

    // Horoscope (5 points)
    { key: 'manglik', weight: 1 },
    { key: 'birthTime', weight: 2 },
    { key: 'birthPlace', weight: 2 },

    // Partner Expectations (5 points)
    { key: 'partnerExpectations', weight: 5 },
  ];

  // Total weight = 100
  let score = 0;
  const maxScore = fields.reduce((sum, field) => sum + field.weight, 0); // This should be 100

  fields.forEach(field => {
    const value = profile[field.key];

    // Check if value is not null, undefined, or an empty string
    if (value !== null && value !== undefined && value !== '') {
      // Specific checks for booleans where 'false' is also a valid entry
      if (typeof value === 'boolean') {
        score += field.weight;
      }
      // Specific check for numbers where 0 is a valid entry
      else if (typeof value === 'number' && value >= 0) {
        score += field.weight;
      }
      // General check for strings and other truthy values
      else if (typeof value !== 'boolean' && typeof value !== 'number') {
        score += field.weight;
      }
    }
  });

  // Calculate percentage
  if (maxScore === 0) return 0;
  // Score is now based on a max of 100
  return Math.min(100, Math.floor(score));
};

/**
 * Recalculates profile completeness including media.
 * This is a separate function to be called after media changes.
 * @param {object} prisma - The Prisma client instance
 * @param {number} userId - The user's ID.
 */
export const updateProfileCompleteness = async (prisma, userId) => {
  const profile = await prisma.profile.findUnique({
    where: { userId },
    include: { media: { where: { type: 'PROFILE_PHOTO' } } },
  });

  if (!profile) return;

  // Get base score from fields (max 100)
  let score = calculateProfileCompleteness(profile);

  // Add bonus for profile photo (e.g., 10 points)
  // We'll cap the total score at 100, but this helps users
  // reach 100 if they missed a few minor fields.
  const photoBonus = 10;
  if (profile.media && profile.media.length > 0) {
    score += photoBonus;
  }

  // Final score is capped at 100
  const finalScore = Math.min(100, score);

  await prisma.profile.update({
    where: { userId },
    data: { profileCompleteness: finalScore },
  });

  return finalScore;
};```

## src/utils/validators.js
```javascript
/**
 * Validate file type for uploads (used in upload.js middleware)
 * @param {string} mimetype - File mimetype
 * @param {string[]} allowedTypes - Allowed mimetypes
 * @returns {boolean}
 */
export const isValidFileType = (
  mimetype,
  allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/webp',
    'application/pdf',
  ]
) => {
  if (!mimetype) return false;
  return allowedTypes.includes(mimetype);
};

/**
 * Validate file size (used in upload.js middleware)
 * @param {number} size - File size in bytes
 * @param {number} maxSize - Maximum size in MB
 * @returns {Object} Validation result
 */
export const isValidFileSize = (size, maxSize = 5) => {
  const maxSizeBytes = maxSize * 1024 * 1024;
  if (size > maxSizeBytes) {
    return {
      isValid: false,
      message: `File size must be less than ${maxSize}MB`,
    };
  }
  return { isValid: true, message: 'Valid file size' };
};

/*
  NOTE: All other validation helpers (isValidEmail, isValidDOB, etc.)
  have been removed. This logic belongs in your
  'src/validations/' Zod schemas, which is a more secure and
  maintainable pattern.
*/```

## src/validation/admin.validation.js
```javascript
import { z } from 'zod';
import { UserRole } from '@prisma/client'; // Import enum from Prisma
// ADDED: Import ReportStatus
import { REPORT_STATUS } from '../utils/constants.js';

// Schema for routes with pagination
export const paginationQuerySchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});

// Schema for "recent items" routes
export const recentQuerySchema = z.object({
  query: z.object({
    limit: z.coerce.number().int().positive().optional(),
  }),
});

// Schema for routes with a :userId param
export const userIdParamSchema = z.object({
  params: z.object({
    userId: z.coerce
      .number({ invalid_type_error: 'User ID must be a number' })
      .int()
      .positive('User ID must be a positive integer'),
  }),
});

// Schema for updating a user's role
export const updateUserRoleSchema = z.object({
  params: z.object({
    userId: z.coerce
      .number({ invalid_type_error: 'User ID must be a number' })
      .int()
      .positive('User ID must be a positive integer'),
  }),
  body: z.object({
    role: z.nativeEnum(UserRole, {
      required_error: 'A valid role is required',
    }),
  }),
});

// --- ADDED FOR REPORTS ---

// Schema for getting reports (with filter)
export const getReportsSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
    status: z.nativeEnum(REPORT_STATUS).optional(),
  }),
});

// Schema for report ID param
export const reportIdParamSchema = z.object({
  params: z.object({
    id: z.coerce
      .number({ invalid_type_error: 'Report ID must be a number' })
      .int()
      .positive('Report ID must be a positive integer'),
  }),
});

// Schema for updating a report
export const updateReportSchema = z.object({
  params: reportIdParamSchema.shape.params,
  body: z.object({
    status: z.nativeEnum(REPORT_STATUS, {
      required_error: 'A valid status is required',
    }),
    reviewNote: z.string().optional().nullable(),
    actionTaken: z.string().max(100).optional().nullable(),
  }).strict(),
});```

## src/validation/agent.validation.js
```javascript
import { z } from 'zod';
import { AGENT_STATUS, LANGUAGE } from '../utils/constants.js';

// Regex for an Indian phone number (10 digits, starting with 6, 7, 8, or 9)
const phoneRegex = /^[6-9]\d{9}$/;
const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

const agentBodyBase = {
  agentCode: z.string().min(3).max(20).optional(),
  agentName: z.string().min(3, 'Agent name is required').max(200),

  contactPerson: z.string().max(100).optional().nullable(),
  phone: z.string().regex(phoneRegex, 'Invalid phone number').optional().nullable(),
  email: z.string().email('Invalid email address').max(255).optional().nullable(),
  alternatePhone: z.string().regex(phoneRegex, 'Invalid alternate phone').optional().nullable(),

  addressLine1: z.string().max(255).optional().nullable(),
  addressLine2: z.string().max(255).optional().nullable(),
  city: z.string().max(100).optional().nullable(),
  district: z.string().max(100).optional().nullable(),
  state: z.string().max(100).optional().nullable(),
  country: z.string().max(100).optional(),
  postalCode: z.string().max(20).optional().nullable(),

  businessName: z.string().max(200).optional().nullable(),
  businessType: z.string().max(50).optional().nullable(),
  gstNumber: z.string().regex(gstRegex, 'Invalid GST number').optional().nullable(),
  panNumber: z.string().regex(panRegex, 'Invalid PAN number').optional().nullable(),

  commissionType: z.string().max(20).optional(),
  commissionValue: z.coerce.number().optional(),
  commissionOn: z.string().max(30).optional(),

  status: z.nativeEnum(AGENT_STATUS).optional(),

  bankName: z.string().max(100).optional().nullable(),
  accountHolderName: z.string().max(200).optional().nullable(),
  accountNumber: z.string().max(50).optional().nullable(),
  ifscCode: z.string().regex(ifscRegex, 'Invalid IFSC code').optional().nullable(),
  branchName: z.string().max(100).optional().nullable(),
  upiId: z.string().max(100).optional().nullable(),

  notes: z.string().optional().nullable(),
  internalNotes: z.string().optional().nullable(),
  source: z.string().max(50).optional().nullable(),
  websiteUrl: z.string().url().optional().nullable(),
  socialMediaLinks: z.string().optional().nullable(), // Will be stored as JSON string
  preferredLanguage: z.nativeEnum(LANGUAGE).optional(),
};

export const createAgentSchema = z.object({
  body: z.object(agentBodyBase),
});

export const updateAgentSchema = z.object({
  body: z.object({
    agentCode: z.string().min(3).max(20).optional(),
    agentName: z.string().min(3).max(200).optional(),
    // Make all other fields optional
    ...Object.keys(agentBodyBase)
      .filter(key => !['agentCode', 'agentName'].includes(key))
      .reduce((obj, key) => {
        obj[key] = agentBodyBase[key];
        return obj;
      }, {})
  }).strict(),
  params: z.object({
    agentId: z.coerce.number().int().positive(),
  }),
});

export const agentIdParamSchema = z.object({
  params: z.object({
    agentId: z.coerce.number().int().positive(),
  }),
});

export const getAgentsSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
    status: z.nativeEnum(AGENT_STATUS).optional(),
    district: z.string().optional(),
    search: z.string().optional(),
  }),
});

export const getAgentUsersSchema = z.object({
  params: z.object({
    agentId: z.coerce.number().int().positive(),
  }),
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
    isPremium: z.enum(['true', 'false']).optional(), // Filter by premium status
  }),
});```

## src/validation/auth.validation.js
```javascript
import { z } from 'zod';

// Regex for an Indian phone number (10 digits, starting with 6, 7, 8, or 9)
const phoneRegex = /^[6-9]\d{9}$/;



// Schema for Refresh Token
export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string({ required_error: 'refreshToken is required' }).min(1, 'refreshToken cannot be empty'),
  }),
});

// Schema for Logout
export const logoutSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1).optional(), // Refresh token is optional for "logout all"
  }),
});

// Schema for Phone Login (Firebase Auth)
export const phoneLoginSchema = z.object({
  body: z.object({
    firebaseIdToken: z.string({ required_error: 'Firebase ID token is required' }).min(1),
    deviceInfo: z.object({}).passthrough().optional(),
    agentCode: z.string().max(20).optional(),
  }),
});

// Schema for Firebase Phone Verification
export const verifyFirebasePhoneSchema = z.object({
  body: z.object({
    firebaseIdToken: z.string({ required_error: 'Firebase ID token is required' }).min(1),
  }),
});```

## src/validation/block.validation.js
```javascript
import { z } from 'zod';

// Schema for blocking a user
export const createBlockSchema = z.object({
  body: z.object({
    blockedId: z.coerce
      .number({ invalid_type_error: 'blockedId must be a number' })
      .int()
      .positive('blockedId must be a positive integer'),
    reason: z.string().max(100).optional(),
  }),
});

// Schema for unblocking a user (by their ID in the URL)
export const blockedUserIdParamSchema = z.object({
  params: z.object({
    blockedId: z.coerce
      .number({ invalid_type_error: 'blockedId must be a number' })
      .int()
      .positive('blockedId must be a positive integer'),
  }),
});

// Schema for paginating the blocked list
export const getBlockedListSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});```

## src/validation/contactRequest.validation.js
```javascript
import { z } from 'zod';
import { CONTACT_REQUEST_TYPE, CONTACT_REQUEST_STATUS } from '../utils/constants.js';

// Schema for creating a new contact request
export const createContactRequestSchema = z.object({
  body: z.object({
    profileId: z.coerce
      .number({ invalid_type_error: 'profileId must be a number' })
      .int()
      .positive('profileId must be a positive integer'),
    
    requestType: z.nativeEnum(CONTACT_REQUEST_TYPE, {
      required_error: 'A valid requestType (e.g., PHONE, EMAIL) is required',
    }),
    
    message: z.string().max(500).optional(),
  }),
});

// Schema for the :id URL parameter
export const contactRequestIdParamSchema = z.object({
  params: z.object({
    id: z.coerce
      .number({ invalid_type_error: 'Request ID must be a number' })
      .int()
      .positive('Request ID must be a positive integer'),
  }),
});

// Schema for responding to a contact request
export const respondContactRequestSchema = z.object({
  body: z.object({
    status: z.enum([CONTACT_REQUEST_STATUS.APPROVED, CONTACT_REQUEST_STATUS.REJECTED], {
      required_error: 'Status must be APPROVED or REJECTED',
    }),
  }),
  params: contactRequestIdParamSchema.shape.params, // Re-use the ID schema
});


// Schema for paginating request lists
export const getContactRequestsSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
    status: z.nativeEnum(CONTACT_REQUEST_STATUS).optional(),
  }),
});```

## src/validation/education.validation.js
```javascript
import { z } from 'zod';
// We no longer need to import EDUCATION_LEVEL
// import { EDUCATION_LEVEL } from '../utils/constants.js'; 

// Schema for the education ID parameter
export const educationIdParamSchema = z.object({
  params: z.object({
    id: z.coerce
      .number({ invalid_type_error: 'Education ID must be a number' })
      .int()
      .positive('Education ID must be a positive integer'),
  }),
});

// Schema for creating a new education entry
export const createEducationSchema = z.object({
  body: z.object({
    // FIX: Changed from z.nativeEnum to z.string() to match schema
    degree: z.string({
      required_error: 'Degree is required',
    }).min(2, 'Degree must be at least 2 characters').max(100),

    institution: z.string({
      required_error: 'Institution name is required',
    }).min(2, 'Institution name must be at least 2 characters'),
    
    field: z.string().max(100).optional(),
    university: z.string().max(200).optional(),
    yearOfPassing: z.coerce.number().int().min(1950).max(new Date().getFullYear() + 5).optional(),
    grade: z.string().max(20).optional(),
    isCurrent: z.boolean().optional().default(false),
  }),
});

// Schema for updating an existing education entry
export const updateEducationSchema = z.object({
  body: z.object({
    // FIX: Changed from z.nativeEnum to z.string()
    degree: z.string().min(2).max(100).optional(), 
    
    institution: z.string().min(2).optional(),
    field: z.string().max(100).optional(),
    university: z.string().max(200).optional(),
    yearOfPassing: z.coerce.number().int().min(1950).max(new Date().getFullYear() + 5).optional(),
    grade: z.string().max(20).optional(),
    isCurrent: z.boolean().optional(),
  }).strict(), // .strict() ensures no other fields can be passed
  
  params: educationIdParamSchema.shape.params, // Re-use the ID schema
});```

## src/validation/horoscope.validation.js
```javascript
import { z } from 'zod';

// Schema for getting horoscope match with a profile
export const getHoroscopeMatchSchema = z.object({
    params: z.object({
        profileId: z.coerce
            .number({ invalid_type_error: 'Profile ID must be a number' })
            .int()
            .positive('Profile ID must be a positive integer'),
    }),
});

// Schema for calculating Guna score between two profiles
export const calculateGunaScoreSchema = z.object({
    body: z.object({
        profileId1: z.coerce
            .number({ invalid_type_error: 'Profile ID 1 must be a number' })
            .int()
            .positive('Profile ID 1 must be a positive integer'),
        profileId2: z.coerce
            .number({ invalid_type_error: 'Profile ID 2 must be a number' })
            .int()
            .positive('Profile ID 2 must be a positive integer'),
    }),
});
```

## src/validation/match.validation.js
```javascript
import { z } from 'zod';
import { MatchRequestStatus } from '@prisma/client'; // Import enum directly from Prisma

export const sendMatchRequestSchema = z.object({
  body: z.object({
    receiverId: z.coerce
      .number({ invalid_type_error: 'receiverId must be a number' })
      .int()
      .positive('receiverId must be a positive integer'),
    message: z.string().max(500).optional(),
  }),
});

export const matchIdParamSchema = z.object({
  params: z.object({
    matchId: z.coerce
      .number({ invalid_type_error: 'matchId must be a number' })
      .int()
      .positive('matchId must be a positive integer'),
  }),
});

export const getMatchesQuerySchema = z.object({
  query: z.object({
    status: z.nativeEnum(MatchRequestStatus).optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});```

## src/validation/message.validation.js
```javascript
import { z } from 'zod';

// Reusable schema for pagination
const paginationSchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().optional(),
});

export const sendMessageSchema = z.object({
  body: z.object({
    receiverId: z.coerce
      .number({ invalid_type_error: 'receiverId must be a number' })
      .int()
      .positive('receiverId must be a positive integer'),
    content: z
      .string({ required_error: 'content is required' })
      .min(1, 'Message content cannot be empty')
      .max(2000, 'Message cannot exceed 2000 characters'),
  }),
});

export const conversationParamsSchema = z.object({
  params: z.object({
    userId: z.coerce
      .number({ invalid_type_error: 'userId must be a number' })
      .int()
      .positive('userId must be a positive integer'),
  }),
});

export const conversationQuerySchema = z.object({
  query: paginationSchema,
});

export const messageIdParamSchema = z.object({
  params: z.object({
    messageId: z.coerce
      .number({ invalid_type_error: 'messageId must be a number' })
      .int()
      .positive('messageId must be a positive integer'),
  }),
});```

## src/validation/notification.validation.js
```javascript
import { z } from 'zod';

// Schema for routes with a :notificationId parameter
export const notificationIdParamSchema = z.object({
  params: z.object({
    notificationId: z.coerce // .coerce() automatically converts the string param to a number
      .number({ invalid_type_error: 'Notification ID must be a number' })
      .int()
      .positive('Notification ID must be a positive integer'),
  }),
});

// Schema for the GET /api/notifications route (pagination)
export const getNotificationsQuerySchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});```

## src/validation/notificationSettings.validation.js
```javascript
import { z } from 'zod';
import { LANGUAGE } from '../utils/constants.js';

// Regex for HH:MM time format
const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
const invalidTimeMsg = 'Invalid time format. Must be HH:MM';

// Schema for updating notification preferences
export const upsertNotificationSettingsSchema = z.object({
  body: z.object({
    // Match Request
    matchRequestInApp: z.boolean().optional(),
    matchRequestSms: z.boolean().optional(),
    matchRequestEmail: z.boolean().optional(),
    matchRequestPush: z.boolean().optional(),

    // Match Accepted
    matchAcceptedInApp: z.boolean().optional(),
    matchAcceptedSms: z.boolean().optional(),
    matchAcceptedEmail: z.boolean().optional(),
    matchAcceptedPush: z.boolean().optional(),

    // New Message
    newMessageInApp: z.boolean().optional(),
    newMessageSms: z.boolean().optional(),
    newMessageEmail: z.boolean().optional(),
    newMessagePush: z.boolean().optional(),

    // Profile Activity
    profileViewInApp: z.boolean().optional(),
    profileViewEmail: z.boolean().optional(),
    shortlistedInApp: z.boolean().optional(),
    shortlistedPush: z.boolean().optional(),

    // Subscription
    subscriptionExpiryInApp: z.boolean().optional(),
    subscriptionExpirySms: z.boolean().optional(),
    subscriptionExpiryEmail: z.boolean().optional(),

    // Security
    securityAlertsInApp: z.boolean().optional(),
    securityAlertsSms: z.boolean().optional(),
    securityAlertsEmail: z.boolean().optional(),

    // Marketing
    promotionalOffersEmail: z.boolean().optional(),
    promotionalOffersSms: z.boolean().optional(),
    newsletterEmail: z.boolean().optional(),

    // General
    enableAllNotifications: z.boolean().optional(),
    notificationLanguage: z.nativeEnum(LANGUAGE).optional(),

    // Quiet Hours
    quietHoursEnabled: z.boolean().optional(),
    quietHoursStart: z.string().regex(timeRegex, invalidTimeMsg).optional().nullable(),
    quietHoursEnd: z.string().regex(timeRegex, invalidTimeMsg).optional().nullable(),

    // Digest Mode
    digestModeEnabled: z.boolean().optional(),
    digestFrequency: z.string().max(10).optional(), // e.g., 'DAILY', 'WEEKLY'
    digestTime: z.string().regex(timeRegex, invalidTimeMsg).optional(),

  }).strict(),
});```

## src/validation/occupation.validation.js
```javascript
import { z } from 'zod';
// We no longer need to import OCCUPATION_TYPE
// import { OCCUPATION_TYPE } from '../utils/constants.js';

// Schema for the occupation ID parameter
export const occupationIdParamSchema = z.object({
  params: z.object({
    id: z.coerce
      .number({ invalid_type_error: 'Occupation ID must be a number' })
      .int()
      .positive('Occupation ID must be a positive integer'),
  }),
});

// Schema for creating a new occupation entry
export const createOccupationSchema = z.object({
  body: z.object({
    companyName: z.string({
      required_error: 'Company name is required',
    }).min(2, 'Company name must be at least 2 characters').max(200),
    
    designation: z.string({
      required_error: 'Designation is required',
    }).min(2, 'Designation must be at least 2 characters').max(100),
    
    // FIX: Changed from z.nativeEnum to z.string()
    employmentType: z.string({
      required_error: 'Employment type is required',
    }).max(50),
    
    industry: z.string().max(100).optional(),
    annualIncome: z.string().max(50).optional(),
    startDate: z.string().datetime('Invalid start date. Must be ISO 8601').optional(),
    endDate: z.string().datetime('Invalid end date. Must be ISO 8601').optional(),
    isCurrent: z.boolean().optional().default(true),
    location: z.string().max(100).optional(),
    description: z.string().max(1000).optional(),
  }),
});

// Schema for updating an existing occupation entry
export const updateOccupationSchema = z.object({
  body: z.object({
    companyName: z.string().min(2).max(200).optional(),
    designation: z.string().min(2).max(100).optional(),

    // FIX: Changed from z.nativeEnum to z.string()
    employmentType: z.string().max(50).optional(),

    industry: z.string().max(100).optional(),
    annualIncome: z.string().max(50).optional(),
    startDate: z.string().datetime().optional().nullable(), // Allow null to clear date
    endDate: z.string().datetime().optional().nullable(), // Allow null to clear date
    isCurrent: z.boolean().optional(),
    location: z.string().max(100).optional(),
    description: z.string().max(1000).optional(),
  }).strict(), // .strict() ensures no other fields can be passed
  
  params: occupationIdParamSchema.shape.params, // Re-use the ID schema
});```

## src/validation/partnerPreference.validation.js
```javascript
import { z } from 'zod';
// Import any enums you create for these, e.g., DIET, SMOKING_HABIT
// For now, we'll use z.string() or z.array(z.string())

// Helper to convert single string to array for fields that support multiple values
const flexibleArray = z.preprocess((val) => {
  if (Array.isArray(val)) return val;
  if (typeof val === 'string' && val.length > 0) return [val];
  return val;
}, z.array(z.string()).optional().nullable());

export const upsertPreferenceSchema = z.object({
  body: z.object({
    // Age Preference
    ageFrom: z.coerce.number().int().positive().optional().nullable(),
    ageTo: z.coerce.number().int().positive().optional().nullable(),

    // Height Preference
    heightFrom: z.coerce.number().int().positive().optional().nullable(),
    heightTo: z.coerce.number().int().positive().optional().nullable(),

    // Religion & Caste (Allowing arrays of strings)
    religion: flexibleArray,
    caste: flexibleArray,
    motherTongue: flexibleArray,

    // Marital Status (Allowing array of statuses)
    maritalStatus: flexibleArray,

    // Location (Allowing arrays of locations)
    country: flexibleArray,
    state: flexibleArray,
    city: flexibleArray,
    residencyStatus: flexibleArray,

    // Chhattisgarh-Specific (NEW)
    mustSpeakChhattisgarhi: z.boolean().optional().nullable(),

    // Education & Occupation (Allowing arrays)
    education: flexibleArray,
    occupation: flexibleArray,
    annualIncome: z.string().optional().nullable(), // This is VarChar(100)

    // Lifestyle
    diet: flexibleArray,
    smoking: z.string().optional().nullable(), // This is VarChar(30)
    drinking: z.string().optional().nullable(), // This is VarChar(30)

    // Horoscope
    manglik: z.boolean().optional().nullable(),

    // Other
    description: z.string().max(1000).optional().nullable(),
  }).strict(),
});```

## src/validation/payment.validation.js
```javascript
import { z } from 'zod';

// 1. Schema for POST /api/payments/orders
export const createOrderSchema = z.object({
  body: z.object({
    // Needs planId to know which subscription to buy
    planId: z.coerce
      .number({ invalid_type_error: 'planId must be a number' })
      .int()
      .positive('planId must be a positive integer'),
  }),
});

// 2. Schema for POST /api/payments/verify
// This schema validates the data returned from the client-side Razorpay checkout
export const verifyPaymentSchema = z.object({
  body: z.object({
    razorpay_order_id: z.string({ required_error: 'razorpay_order_id is required' }),
    razorpay_payment_id: z.string({ required_error: 'razorpay_payment_id is required' }),
    razorpay_signature: z.string({ required_error: 'razorpay_signature is required' }),
  }),
});

// 3. Schema for GET /api/payments/:paymentId
export const paymentIdParamSchema = z.object({
  params: z.object({
    // Coerces the string parameter into a number for validation
    paymentId: z.coerce
      .number({ invalid_type_error: 'paymentId must be a number' })
      .int()
      .positive('paymentId must be a positive integer'),
  }),
});```

## src/validation/photoPrivacy.validation.js
```javascript
import { z } from 'zod';
import { 
  PHOTO_VISIBILITY, 
  WATERMARK_POSITION, 
  BLUR_LEVEL 
} from '../utils/constants.js';

// Schema for the mediaId parameter
export const mediaIdParamSchema = z.object({
  params: z.object({
    mediaId: z.coerce
      .number({ invalid_type_error: 'Media ID must be a number' })
      .int()
      .positive('Media ID must be a positive integer'),
  }),
});

// Schema for updating photo privacy settings
export const updatePhotoPrivacySchema = z.object({
  body: z.object({
    visibility: z.nativeEnum(PHOTO_VISIBILITY).optional(),
    enableWatermark: z.boolean().optional(),
    watermarkText: z.string().max(100).optional().nullable(),
    watermarkPosition: z.nativeEnum(WATERMARK_POSITION).optional(),
    preventScreenshots: z.boolean().optional(),
    disableRightClick: z.boolean().optional(),
    blurForNonPremium: z.boolean().optional(),
    blurLevel: z.nativeEnum(BLUR_LEVEL).optional(),
    allowDownload: z.boolean().optional(),
    allowViewRequests: z.boolean().optional(),
    autoApprovePremium: z.boolean().optional(),
    autoApproveVerified: z.boolean().optional(),
  }).strict(),
  
  params: mediaIdParamSchema.shape.params, // Re-use the ID schema
});```

## src/validation/photoRequest.validation.js
```javascript
import { z } from 'zod';
import { PHOTO_REQUEST_STATUS } from '../utils/constants.js';

// Schema for creating a new photo view request
export const createPhotoRequestSchema = z.object({
  body: z.object({
    photoId: z.coerce
      .number({ invalid_type_error: 'photoId must be a number' })
      .int()
      .positive('photoId must be a positive integer'),
    
    message: z.string().max(500).optional(),
  }),
});

// Schema for the :id URL parameter (request ID)
export const photoRequestIdParamSchema = z.object({
  params: z.object({
    id: z.coerce
      .number({ invalid_type_error: 'Request ID must be a number' })
      .int()
      .positive('Request ID must be a positive integer'),
  }),
});

// Schema for responding to a photo view request
export const respondPhotoRequestSchema = z.object({
  body: z.object({
    status: z.enum([PHOTO_REQUEST_STATUS.APPROVED, PHOTO_REQUEST_STATUS.REJECTED], {
      required_error: 'Status must be APPROVED or REJECTED',
    }),
  }),
  params: photoRequestIdParamSchema.shape.params, // Re-use the ID schema
});


// Schema for paginating request lists
export const getPhotoRequestsSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
    status: z.nativeEnum(PHOTO_REQUEST_STATUS).optional(),
  }),
});```

## src/validation/privacy.validation.js
```javascript
import { z } from 'zod';
import { 
  // GENDER, // Removed
  // MARITAL_STATUS, // Removed
  // RELIGION, // Removed
  // MOTHER_TONGUE, // Removed
  EDUCATION_LEVEL, 
  // OCCUPATION_TYPE, // Removed
  PROFILE_VISIBILITY, 
  PRIVACY_LEVEL,
  COMMUNICATION_PRIVACY,
  MESSAGE_PRIVACY,
  TWO_FACTOR_METHOD, // ADDED
} from '../utils/constants.js';

// Helper to convert single string to array for fields that support multiple values
const flexibleArray = z.preprocess((val) => {
  if (Array.isArray(val)) return val;
  if (typeof val === 'string' && val.length > 0) return val.split(',').map(s => s.trim());
  if (typeof val === 'string' && val.length === 0) return [];
  return val;
}, z.array(z.string()).optional().nullable());


// Schema for updating profile privacy settings
export const upsertProfilePrivacySchema = z.object({
  body: z.object({
    profileVisibility: z.nativeEnum(PROFILE_VISIBILITY).optional(),
    showLastName: z.boolean().optional(),
    showExactAge: z.boolean().optional(),
    showDateOfBirth: z.boolean().optional(),
    showPhoneNumber: z.nativeEnum(PRIVACY_LEVEL).optional(),
    showEmail: z.nativeEnum(PRIVACY_LEVEL).optional(),
    showSocialMedia: z.nativeEnum(PRIVACY_LEVEL).optional(),
    showExactLocation: z.boolean().optional(),
    showCity: z.boolean().optional(),
    showState: z.boolean().optional(),
    showCompanyName: z.boolean().optional(),
    showAnnualIncome: z.nativeEnum(PRIVACY_LEVEL).optional(),
    showWorkLocation: z.boolean().optional(),
    showFamilyDetails: z.nativeEnum(PRIVACY_LEVEL).optional(),
    showParentOccupation: z.boolean().optional(),
    showSiblingDetails: z.boolean().optional(),
    showHoroscope: z.boolean().optional(),
    showHoroscopeTo: z.nativeEnum(PRIVACY_LEVEL).optional(),
    showBirthTime: z.boolean().optional(),
    showBirthPlace: z.boolean().optional(),
    showDiet: z.boolean().optional(),
    showSmokingDrinking: z.nativeEnum(PRIVACY_LEVEL).optional(),
    showLastActive: z.boolean().optional(),
    showOnlineStatus: z.boolean().optional(),
    showProfileViews: z.boolean().optional(),
    showWhoViewedProfile: z.boolean().optional(),
    showShortlistedBy: z.boolean().optional(),
    showNativeDistrict: z.boolean().optional(),
    showNativeVillage: z.boolean().optional(),
  }).strict(),
});

// Schema for updating communication preferences
export const upsertCommunicationSettingsSchema = z.object({
  body: z.object({
    allowMatchRequestsFrom: z.nativeEnum(COMMUNICATION_PRIVACY).optional(),
    minAgeForRequests: z.coerce.number().int().min(18).optional().nullable(),
    maxAgeForRequests: z.coerce.number().int().max(100).optional().nullable(),
    allowedReligions: flexibleArray,
    allowedLocations: flexibleArray,
    minEducationLevel: z.nativeEnum(EDUCATION_LEVEL).optional().nullable(),
    allowMessagesFrom: z.nativeEnum(MESSAGE_PRIVACY).optional(),
    blockUnverifiedProfiles: z.boolean().optional(),
    requireMinProfileCompleteness: z.coerce.number().int().min(0).max(100).optional(),
    allowAnonymousViews: z.boolean().optional(),
    notifyOnView: z.boolean().optional(),
    blockRepeatedViews: z.boolean().optional(),
    autoResponseEnabled: z.boolean().optional(),
    autoResponseMessage: z.string().max(1000).optional().nullable(),
    sendAutoResponseToNewMatches: z.boolean().optional(),
    maxMatchRequestsPerDay: z.coerce.number().int().positive().optional(),
    maxMessagesPerDay: z.coerce.number().int().positive().optional(),
    preferChhattisgarhi: z.boolean().optional(),
  }).strict(),
});

// Schema for updating search visibility settings
export const upsertSearchVisibilitySchema = z.object({
  body: z.object({
    showInSearch: z.boolean().optional(),
    showInSuggestions: z.boolean().optional(),
    visibleToFreeUsers: z.boolean().optional(),
    visibleToPremiumUsers: z.boolean().optional(),
    visibleToVerifiedUsers: z.boolean().optional(),
    showOnlyInCountry: z.boolean().optional(),
    showOnlyInState: z.boolean().optional(),
    showOnlyInCity: z.boolean().optional(),
    excludedCountries: flexibleArray,
    showOnlyToAgeRange: z.boolean().optional(),
    visibleMinAge: z.coerce.number().int().min(18).optional().nullable(),
    visibleMaxAge: z.coerce.number().int().max(100).optional().nullable(),
    incognitoEnabled: z.boolean().optional(),
    hideFromSearch: z.boolean().optional(),
    hideLastActive: z.boolean().optional(),
    browseAnonymously: z.boolean().optional(),
    profilePaused: z.boolean().optional(),
    pauseReason: z.string().max(100).optional().nullable(),
    pausedUntil: z.string().datetime().optional().nullable(),
    showOnlyInChhattisgarh: z.boolean().optional(),
    prioritizeChhattisgarhi: z.boolean().optional(),
  }).strict(),
});

// ADDED: Schema for updating account security settings
export const upsertAccountSecuritySchema = z.object({
  body: z.object({
    twoFactorEnabled: z.boolean().optional(),
    twoFactorMethod: z.nativeEnum(TWO_FACTOR_METHOD).optional().nullable(),
    requireOtpNewDevice: z.boolean().optional(),
    requireOtpNewLocation: z.boolean().optional(),
    sessionTimeout: z.coerce.number().int().positive().optional(),
    maxActiveSessions: z.coerce.number().int().positive().optional(),
    recoveryEmail: z.string().email().optional().nullable(),
    recoveryPhone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number').optional().nullable(),
    // Note: 'twoFactorSecret' and 'backupCodes' should be handled by dedicated endpoints
    // 'recoveryEmailVerified' & 'recoveryPhoneVerified' should be read-only
  }).strict(),
});```

## src/validation/profile.validation.js
```javascript
import { z } from 'zod';
import {
  GENDER,
  MARITAL_STATUS,
  RELIGION,
  MOTHER_TONGUE,
  EDUCATION_LEVEL, // ADDED: Import from constants.js
  OCCUPATION_TYPE, // ADDED: Import from constants.js
  // TODO: Add other enums to constants.js for fields below
} from '../utils/constants.js';

// Helper for string-to-array transformation
const stringToArray = z.preprocess((val) => {
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') return val.split(',').map(s => s.trim());
  return [];
}, z.array(z.string()));

// This object includes all user-editable fields from the Profile schema.
// All are optional for flexibility, except for the most basic required fields.
const profileBodyBase = {
  // Basic Information
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  middleName: z.string().optional(), // ADDED
  displayName: z.string().optional(), // ADDED
  dateOfBirth: z.string().datetime('Invalid date format. Must be ISO 8601'),
  gender: z.nativeEnum(GENDER),
  maritalStatus: z.nativeEnum(MARITAL_STATUS),

  // Religious Information
  religion: z.nativeEnum(RELIGION),
  motherTongue: z.nativeEnum(MOTHER_TONGUE),
  category: z.string().optional(), // ADDED
  caste: z.string().min(2).optional(), // FIX: Made optional to match schema
  subCaste: z.string().optional(),
  gothram: z.string().optional(), // ADDED

  // Chhattisgarh-Specific
  nativeVillage: z.string().optional(),
  speaksChhattisgarhi: z.boolean().optional(), // Use optional, not default

  // Physical Attributes
  height: z.number().int().positive().min(100).max(250).optional(), // FIX: Made optional
  weight: z.number().int().positive().optional(),
  physicalDisability: z.string().max(1000).optional(), // ADDED

  // Lifestyle
  diet: z.string().optional(), // (Recommend z.nativeEnum(DIET))
  smokingHabit: z.string().optional(), // (Recommend z.nativeEnum(SMOKING_HABIT))
  drinkingHabit: z.string().optional(), // (Recommend z.nativeEnum(DRINKING_HABIT))

  // Location
  country: z.string().min(2, 'Country is required'),
  state: z.string().min(2, 'State is required'),
  city: z.string().min(2, 'City is required'),
  residencyStatus: z.string().optional(), // ADDED

  // About
  bio: z.string().max(1000).optional(),
  hobbies: z.string().optional(),
  interests: z.string().optional(), // ADDED
  aboutFamily: z.string().max(1000).optional(),
  partnerExpectations: z.string().max(1000).optional(),

  // Family Information
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherStatus: z.string().optional(), // ADDED (Recommend z.nativeEnum(PARENT_STATUS))
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherStatus: z.string().optional(), // ADDED (Recommend z.nativeEnum(PARENT_STATUS))
  numberOfBrothers: z.number().int().min(0).optional(),
  numberOfSisters: z.number().int().min(0).optional(),
  brothersMarried: z.number().int().min(0).optional(), // ADDED
  sistersMarried: z.number().int().min(0).optional(), // ADDED
  familyType: z.string().optional(), // ADDED (Recommend z.nativeEnum(FAMILY_TYPE))
  familyValues: z.string().optional(), // ADDED (Recommend z.nativeEnum(FAMILY_VALUES))
  familyIncome: z.string().optional(), // ADDED
  ancestralOrigin: z.string().optional(), // ADDED

  // Horoscope
  manglik: z.boolean().optional(), // ADDED
  birthTime: z.string().optional(), // ADDED
  birthPlace: z.string().optional(), // ADDED
  rashi: z.string().optional(), // ADDED
  nakshatra: z.string().optional(), // ADDED

  // Education (summary)
  highestEducation: z.nativeEnum(EDUCATION_LEVEL).optional(), // FIX: Use enum
  educationDetails: z.string().max(1000).optional(), // ADDED
  collegeName: z.string().optional(), // ADDED

  // Occupation (summary)
  occupationType: z.nativeEnum(OCCUPATION_TYPE).optional(), // FIX: Use enum
  occupation: z.string().optional(),
  designation: z.string().optional(), // ADDED
  companyName: z.string().optional(), // ADDED
  annualIncome: z.string().optional(),
  workLocation: z.string().optional(), // ADDED
};

export const createProfileSchema = z.object({
  body: z.object({
    // Required fields
    firstName: profileBodyBase.firstName,
    lastName: profileBodyBase.lastName,
    dateOfBirth: profileBodyBase.dateOfBirth,
    gender: profileBodyBase.gender,
    maritalStatus: profileBodyBase.maritalStatus,
    religion: profileBodyBase.religion,
    motherTongue: profileBodyBase.motherTongue,
    country: profileBodyBase.country,
    state: profileBodyBase.state,
    city: profileBodyBase.city,

    // All other fields are optional on creation
    ...Object.keys(profileBodyBase)
      .filter(key => ![
        'firstName', 'lastName', 'dateOfBirth', 'gender', 'maritalStatus',
        'religion', 'motherTongue', 'country', 'state', 'city'
      ].includes(key))
      .reduce((obj, key) => {
        obj[key] = profileBodyBase[key].optional();
        return obj;
      }, {}),
  }).strict(), // Use .strict() to reject fields not in the schema
});

export const updateProfileSchema = z.object({
  body: z.object(
    // All fields are optional on update
    Object.keys(profileBodyBase).reduce((obj, key) => {
      obj[key] = profileBodyBase[key].optional();
      return obj;
    }, {})
  ), // Removed .strict() to allow extra fields (they will be stripped)
});

export const searchProfilesSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
    gender: z.nativeEnum(GENDER).optional(),
    minAge: z.coerce.number().int().min(18).optional(),
    maxAge: z.coerce.number().int().max(100).optional(),
    religions: stringToArray.optional(), // e.g., ?religions=HINDU,MUSLIM
    castes: stringToArray.optional(),
    maritalStatus: z.nativeEnum(MARITAL_STATUS).optional(),
    minHeight: z.coerce.number().int().optional(),
    maxHeight: z.coerce.number().int().optional(),
    maxHeight: z.coerce.number().int().optional(),
    nativeVillage: z.string().optional(),
    speaksChhattisgarhi: z.coerce.boolean().optional(), // For Chhattisgarh search
    category: z.string().optional(), // ADDED
  }),
});

export const objectIdSchema = z.object({
  params: z.object({
    userId: z.coerce.number().int().positive('User ID must be a positive integer'),
  }),
});

export const mediaIdSchema = z.object({
  params: z.object({
    mediaId: z.coerce.number().int().positive('Media ID must be a positive integer'),
  }),
});```

## src/validation/profileView.validation.js
```javascript
import { z } from 'zod';

// Schema for logging a profile view
export const logProfileViewSchema = z.object({
  body: z.object({
    // This is the userId of the person being viewed.
    // The schema model calls it 'profileId'
    profileId: z.coerce
      .number({ invalid_type_error: 'profileId must be a number' })
      .int()
      .positive('profileId must be a positive integer'),
    
    isAnonymous: z.boolean().optional().default(false),
  }),
});

// Schema for paginating the view lists
export const getProfileViewsSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});```

## src/validation/report.validation.js
```javascript
import { z } from 'zod';
import { REPORT_REASON } from '../utils/constants.js';

// Schema for creating a new report
export const createReportSchema = z.object({
  body: z.object({
    reportedUserId: z.coerce
      .number({ invalid_type_error: 'reportedUserId must be a number' })
      .int()
      .positive('reportedUserId must be a positive integer'),
    
    reason: z.nativeEnum(REPORT_REASON, {
      required_error: 'A valid reason is required for the report',
    }),
    
    description: z.string({
      required_error: 'A description is required',
    }).min(10, 'Description must be at least 10 characters long').max(1000),
    
    // 'evidence' is a JSON string of URLs. 
    // We'll trust the client to format this, or you can add a file upload link later.
    evidence: z.string().optional(), 
  }),
});```

## src/validation/shortlist.validation.js
```javascript
import { z } from 'zod';

// Schema for adding a user to the shortlist (body)
export const createShortlistSchema = z.object({
  body: z.object({
    shortlistedUserId: z.coerce
      .number({ invalid_type_error: 'shortlistedUserId must be a number' })
      .int()
      .positive('shortlistedUserId must be a positive integer'),
    note: z.string().max(500).optional(),
  }),
});

// Schema for removing a user from the shortlist (URL param)
export const shortlistedUserIdParamSchema = z.object({
  params: z.object({
    shortlistedUserId: z.coerce
      .number({ invalid_type_error: 'shortlistedUserId must be a number' })
      .int()
      .positive('shortlistedUserId must be a positive integer'),
  }),
});

// Schema for paginating the shortlist
export const getShortlistSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});```

## src/validation/subscription.validation.js
```javascript
import { z } from 'zod';

// Schema for paginating the subscription plan list
export const getPlansSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});```

## src/validation/user.validation.js
```javascript
import { z } from 'zod';
import { USER_ROLES, LANGUAGE } from '../utils/constants.js'; // Assuming you add LANGUAGE to constants.js

export const objectIdSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive('ID must be a positive integer'),
  }),
});

export const updateMeSchema = z.object({
  body: z.object({
    // Only allow specific, safe fields to be updated.
    email: z.string().email('Invalid email format').optional(),
    profilePicture: z.string().url('Invalid URL format').optional(),
    preferredLanguage: z.nativeEnum(LANGUAGE).optional(),
    // Add any other SAFE fields from the User model here
  }),
});

export const searchUsersSchema = z.object({
  query: z.object({
    search: z.string().optional(),
    role: z.nativeEnum(USER_ROLES).optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});

// ADDED: Schema for registering an FCM token
export const registerFcmTokenSchema = z.object({
  body: z.object({
    token: z.string({ required_error: 'FCM token is required' }),
    deviceId: z.string({ required_error: 'deviceId is required' }),
    deviceType: z.enum(['IOS', 'ANDROID', 'WEB'], {
      required_error: 'deviceType must be one of: IOS, ANDROID, WEB',
    }),
    deviceName: z.string().optional(),
  }),
});```

## src/validation/verification.validation.js
```javascript
import { z } from 'zod';
import { MEDIA_TYPES } from '../utils/constants.js';

// Schema for getting pending verifications
export const getVerificationsQuerySchema = z.object({
    query: z.object({
        page: z.coerce.number().int().positive().optional(),
        limit: z.coerce.number().int().positive().optional(),
        type: z
            .enum([
                MEDIA_TYPES.ID_PROOF,
                MEDIA_TYPES.ADDRESS_PROOF,
                MEDIA_TYPES.INCOME_PROOF,
                MEDIA_TYPES.EDUCATION_CERTIFICATE,
            ])
            .optional(),
    }),
});

// Schema for mediaId param
export const mediaIdParamSchema = z.object({
    params: z.object({
        mediaId: z.coerce
            .number({ invalid_type_error: 'Media ID must be a number' })
            .int()
            .positive('Media ID must be a positive integer'),
    }),
});

// Schema for reject/resubmit with reason
export const rejectVerificationSchema = z.object({
    params: z.object({
        mediaId: z.coerce
            .number({ invalid_type_error: 'Media ID must be a number' })
            .int()
            .positive('Media ID must be a positive integer'),
    }),
    body: z.object({
        reason: z
            .string({ required_error: 'Reason is required' })
            .min(10, 'Reason must be at least 10 characters')
            .max(500, 'Reason must be at most 500 characters'),
    }),
});
```

