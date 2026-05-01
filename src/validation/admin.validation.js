import { z } from 'zod';
import { PaymentStatus, UserRole } from '@prisma/client'; // Import enum from Prisma
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

// Schema for generic routes with an :id param
export const idParamSchema = z.object({
  params: z.object({
    id: z.coerce
      .number({ invalid_type_error: 'ID must be a number' })
      .int()
      .positive('ID must be a positive integer'),
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

// Schema for getting payments (with filter and search)
export const getPaymentsSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
    status: z.nativeEnum(PaymentStatus).optional(),
    search: z.string().trim().min(1).optional(),
  }),
});

// Schema for report ID param
export const reportIdParamSchema = z.object({
  params: idParamSchema.shape.params,
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
});

// Schema for creating a user with profile (Admin)
export const createUserWithProfileSchema = z.object({
  body: z.object({
    // User Account Info
    phone: z.string().optional().refine(val => !val || (val.length >= 10 && val.length <= 15), {
      message: 'Phone must be at least 10 characters',
    }),
    countryCode: z.string().default('+91'),
    email: z.preprocess((val) => (val === '' ? null : val), z.string().email('Invalid email address').optional().nullable()),
    role: z.nativeEnum(UserRole).default(UserRole.USER),

    // Profile Info
    firstName: z.string().min(2, 'First name too short'),
    lastName: z.string().optional().default(''),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date of birth',
    }),
    maritalStatus: z.string().optional().default('NEVER_MARRIED'),
    religion: z.string().optional().default('HINDU'),
    motherTongue: z.string().optional().default('CHHATTISGARHI'),
    category: z.string().optional(),
    caste: z.string().optional(),
    subCaste: z.string().optional(),
    nativeVillage: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    state: z.string().optional().default('Chhattisgarh'),
    country: z.string().optional().default('India'),
    speaksChhattisgarhi: z.boolean().optional().default(true),

    // NEW: Additional Fields for completeness
    height: z.coerce.number().optional(),
    highestEducation: z.string().optional(),
    occupation: z.string().optional(),
    annualIncome: z.string().optional(),
    fatherOccupation: z.string().optional(),
    familyIncome: z.string().optional(),
    bio: z.string().optional(),
  }),
});
