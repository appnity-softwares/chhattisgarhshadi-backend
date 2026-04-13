import { z } from 'zod';





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
});