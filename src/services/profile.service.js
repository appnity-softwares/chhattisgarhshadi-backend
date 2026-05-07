import prisma from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS, ERROR_MESSAGES, PROFILE_VISIBILITY, PHOTO_REQUEST_STATUS } from '../utils/constants.js';
import { calculateAge } from '../utils/helpers.js';
import { updateProfileCompleteness } from '../utils/profile.helpers.js';
import { logger } from '../config/logger.js';
import { uploadService } from './upload.service.js';
import { blockService } from './block.service.js';
import contactVisibilityService from './contactVisibility.service.js';
import { cacheHelper } from '../utils/cache.helper.js';

const profileUserSelect = {
  id: true,
  role: true,
  createdAt: true,
  profilePicture: true,
};

const profileInclude = {
  user: {
    select: profileUserSelect,
  },
  media: {
    include: {
      privacySettings: true,
    },
  },
  education: true,
  occupations: true,
};

const profileSearchInclude = {
  user: {
    select: profileUserSelect,
  },
  media: {
    where: {
      type: { in: ['PROFILE_PHOTO', 'GALLERY_PHOTO'] },
      isVisible: true,
      isPrivate: false,
    },
    include: {
      privacySettings: true,
    },
    take: 3,
  },
};

const sanitizeProfileInput = (data) => {
  const profileData = { ...(data || {}) };

  // Fields that should be numbers
  const intFields = ['height', 'weight'];
  const intFieldsWithDefaultZero = ['numberOfBrothers', 'numberOfSisters', 'brothersMarried', 'sistersMarried'];

  intFields.forEach(field => {
    if (Object.prototype.hasOwnProperty.call(profileData, field)) {
      const val = profileData[field];
      profileData[field] = (val === '' || val === null || val === undefined) ? null : parseInt(val, 10) || null;
    }
  });

  intFieldsWithDefaultZero.forEach(field => {
    if (Object.prototype.hasOwnProperty.call(profileData, field)) {
      const val = profileData[field];
      profileData[field] = (val === '' || val === null || val === undefined) ? 0 : parseInt(val, 10) || 0;
    }
  });

  // Convert Enum strings to UPPERCASE for Prisma compatibility
  const enumFields = ['gender', 'maritalStatus', 'religion', 'motherTongue'];
  enumFields.forEach(field => {
    if (profileData[field] && typeof profileData[field] === 'string') {
      profileData[field] = profileData[field].toUpperCase().replace(/\s+/g, '_');
    }
  });

  // Remove relation fields if they are sent as empty strings
  if (typeof profileData.education === 'string') {
    if (profileData.education && !profileData.highestEducation) {
      profileData.highestEducation = profileData.education;
    }
    delete profileData.education;
  }

  delete profileData.intercasteAllowed;
  delete profileData.profileStatus;
  delete profileData.profileCompleteness;
  delete profileData.profileCompletionPercentage;
  delete profileData.profileScore;
  delete profileData.viewCount;
  delete profileData.contactViewCount;
  delete profileData.shortlistCount;
  delete profileData.matchRequestCount;
  return profileData;
};

const applyOnboardingDefaults = (data) => ({
  maritalStatus: 'NEVER_MARRIED',
  motherTongue: 'HINDI',
  country: 'India',
  state: 'Chhattisgarh',
  speaksChhattisgarhi: false,
  ...data,
});

const transformMedia = (media = []) =>
  [...media]
    .sort((a, b) => {
      if (a.isDefault !== b.isDefault) return a.isDefault ? -1 : 1;
      if (a.type !== b.type) return a.type === 'PROFILE_PHOTO' ? -1 : 1;
      return (a.displayOrder || 0) - (b.displayOrder || 0) || a.id - b.id;
    })
    .map((item) => ({
      id: item.id,
      url: item.url,
      thumbnailUrl: item.thumbnailUrl,
      type: item.type,
      isProfilePicture: item.isDefault,
      isPrivate: item.isPrivate,
      isVisible: item.isVisible,
      privacySettings: item.privacySettings,
      createdAt: item.createdAt,
    }));

const appendAnd = (where, condition) => {
  where.AND = [...(where.AND || []), condition];
};

const getMinCompletionFilter = (minCompletion) => {
  if (minCompletion === undefined || minCompletion === null || minCompletion === '') return 0;
  const parsed = Number(minCompletion);
  return Number.isFinite(parsed) ? Math.max(parsed, 0) : 0;
};

const visibleProfilePrivacyFilter = {
  OR: [
    { user: { profilePrivacySettings: { is: null } } },
    { user: { profilePrivacySettings: { is: { profileVisibility: { not: PROFILE_VISIBILITY.HIDDEN } } } } },
  ],
};

const visibleSearchSettingsFilter = {
  OR: [
    { user: { searchVisibilitySettings: { is: null } } },
    {
      user: {
        searchVisibilitySettings: {
          is: {
            showInSearch: true,
            hideFromSearch: false,
            profilePaused: false,
          },
        },
      },
    },
  ],
};

const serializeProfile = (profile, isShortlisted = false) => {
  if (!profile) return null;

  // Extract relationship from user object if available
  let relationship = null;
  if (profile.user) {
    const outgoing = profile.user.receivedMatchRequests?.[0]; // Current user sent this
    const incoming = profile.user.sentMatchRequests?.[0];   // Other user sent this
    
    if (outgoing) {
      relationship = {
        status: outgoing.status === 'ACCEPTED' ? 'accepted' : 
                outgoing.status === 'PENDING' ? 'sent' : 'declined',
        matchId: outgoing.id
      };
    } else if (incoming) {
      relationship = {
        status: incoming.status === 'ACCEPTED' ? 'accepted' : 
                incoming.status === 'PENDING' ? 'received' : 'declined',
        matchId: incoming.id
      };
    }
  }

  return {
    ...profile,
    user: profile.user
      ? {
          id: profile.user.id,
          role: profile.user.role,
          createdAt: profile.user.createdAt,
          profilePicture: profile.user.profilePicture,
        }
      : null,
    media: transformMedia(profile.media),
    age: calculateAge(profile.dateOfBirth),
    profileCompleteness: profile.profileCompleteness || 0,
    profileCompletionPercentage: profile.profileCompletionPercentage ?? profile.profileCompleteness ?? 0,
    profileStatus: profile.profileStatus || (profile.isPublished ? 'ACTIVE' : 'INCOMPLETE'),
    isShortlisted,
    relationship,
  };
};

const wrapProfileResponse = (profile, isShortlisted = false) => {
  const serializedProfile = serializeProfile(profile, isShortlisted);

  return {
    profile: serializedProfile,
    profileCompleteness: serializedProfile?.profileCompleteness || 0,
    profileCompletionPercentage: serializedProfile?.profileCompletionPercentage ?? serializedProfile?.profileCompleteness ?? 0,
  };
};

const filterMediaForViewer = async (profile, viewerId) => {
  if (!profile?.media || !viewerId || viewerId === profile.userId) {
    return profile;
  }

  const privatePhotoIds = profile.media
    .filter(item => item.isPrivate)
    .map(item => item.id);

  let approvedPrivatePhotoIds = new Set();

  if (privatePhotoIds.length > 0) {
    const approvedRequests = await prisma.photoViewRequest.findMany({
      where: {
        requesterId: viewerId,
        profileId: profile.userId,
        photoId: { in: privatePhotoIds },
        status: PHOTO_REQUEST_STATUS.APPROVED,
        OR: [
          { validUntil: null },
          { validUntil: { gte: new Date() } },
        ],
      },
      select: { photoId: true },
    });

    approvedPrivatePhotoIds = new Set(approvedRequests.map(request => request.photoId));
  }

  return {
    ...profile,
    media: profile.media.filter(item =>
      item.isVisible && (!item.isPrivate || approvedPrivatePhotoIds.has(item.id))
    ),
  };
};

const getProfileRecordByUserId = (userId, include = profileInclude) =>
  prisma.profile.findFirst({
    where: {
      userId,
      user: {
        isActive: true,
        isBanned: false,
      },
    },
    include,
  });

export const createProfile = async (userId, data) => {
  try {
    const existingProfile = await prisma.profile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'Profile already exists');
    }

    const profileData = applyOnboardingDefaults(sanitizeProfileInput(data));

    await prisma.profile.create({
      data: {
        userId,
        ...profileData,
        profileStatus: 'INCOMPLETE',
        isDraft: true,
        isPublished: false,
        publishedAt: null,
      },
    });

    await updateProfileCompleteness(prisma, userId);

    const createdProfile = await getProfileRecordByUserId(userId);

    logger.info(`Profile created for user: ${userId}`);
    return wrapProfileResponse(createdProfile);
  } catch (error) {
    logger.error('Error in createProfile:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error creating profile');
  }
};

export const getProfileByUserId = async (userId, currentUserId = null) => {
  try {
    if (currentUserId && userId !== currentUserId) {
      const blockedIdSet = await blockService.getAllBlockedUserIds(currentUserId);
      if (blockedIdSet.has(userId)) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
      }
    }

    const profile = await getProfileRecordByUserId(userId);

    if (!profile) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
    }

    if (currentUserId && userId !== currentUserId && !profile.isPublished) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
    }

    // SECURITY: Enforce profile visibility privacy settings
    // Hidden profiles are invisible to everyone except the owner
    if (currentUserId && userId !== currentUserId) {
      const privacySettings = await prisma.profilePrivacySettings.findUnique({
        where: { userId },
      });
      if (privacySettings?.profileVisibility === PROFILE_VISIBILITY.HIDDEN) {
        throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
      }
    }

    let isShortlisted = false;
    if (currentUserId) {
      const shortlist = await prisma.shortlist.findFirst({
        where: { userId: currentUserId, shortlistedUserId: userId },
      });
      isShortlisted = !!shortlist;
    }

    const safeProfile = await filterMediaForViewer(profile, currentUserId);

    return wrapProfileResponse(safeProfile, isShortlisted);
  } catch (error) {
    logger.error('Error in getProfileByUserId:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving profile');
  }
};

export const getProfileContactInfo = async (viewerId, profileOwnerId) => {
  try {
    return await contactVisibilityService.getContactInfoIfAllowed(viewerId, profileOwnerId);
  } catch (error) {
    logger.error('Error in getProfileContactInfo:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error retrieving contact info');
  }
};

export const updateProfile = async (userId, data) => {
  try {
    const profileData = sanitizeProfileInput(data);

    await prisma.profile.update({
      where: { userId },
      data: profileData,
    });

    await updateProfileCompleteness(prisma, userId);

    const updatedProfile = await getProfileRecordByUserId(userId);

    logger.info(`Profile updated for user: ${userId}`);
    return wrapProfileResponse(updatedProfile);
  } catch (error) {
    logger.error('Error in updateProfile:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating profile');
  }
};

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

export const searchProfiles = async (query, currentUserId = null) => {
  try {
    const limit = Math.min(Math.max(Number(query.limit) || 20, 1), 50);
    const cursor = Math.max(Number(query.cursor) || 0, 0);
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
      education,
      income,
      annualIncome,
      withPhoto,
      isVerified,
      city,
      state,
      motherTongue,
      occupation,
      manglik,
      diet,
      smokingHabit,
      drinkingHabit,
      type,
      search,
      minCompletion,
    } = query;

    const where = {
      isPublished: true,
      profileCompleteness: { gte: getMinCompletionFilter(minCompletion) },
      user: {
        isActive: true,
        isBanned: false,
      },
    };

    appendAnd(where, visibleProfilePrivacyFilter);
    appendAnd(where, visibleSearchSettingsFilter);

    if (currentUserId) {
      const blockedIds = Array.from(await blockService.getAllBlockedUserIds(currentUserId));
      blockedIds.push(currentUserId);
      where.userId = { notIn: blockedIds };

    }

    // If explicit gender filter is provided, respect it. 
    // Otherwise, default to showing the opposite gender for the current user.
    if (gender) {
      const g = gender.toUpperCase();
      if (g === 'BOTH' || g === 'ALL' || g === 'MIX') {
        // Don't apply gender filter to show everyone
      } else {
        where.gender = g;
      }
    } else if (currentUserId && currentUserId > 0) {
      // Auto-discover opposite gender if user is logged in and didn't specify a preference
      const viewerProfile = await prisma.profile.findUnique({
        where: { userId: currentUserId },
        select: { gender: true }
      });
      
      if (viewerProfile?.gender) {
        where.gender = viewerProfile.gender === 'MALE' ? 'FEMALE' : 'MALE';
      }
    }
    if (maritalStatus) where.maritalStatus = maritalStatus;
    if (nativeVillage) where.nativeVillage = { contains: nativeVillage, mode: 'insensitive' };
    if (typeof speaksChhattisgarhi === 'boolean') where.speaksChhattisgarhi = speaksChhattisgarhi;
    if (category) where.category = { equals: category, mode: 'insensitive' };
    if (city) where.city = { contains: city, mode: 'insensitive' };
    if (state) where.state = { contains: state, mode: 'insensitive' };
    if (occupation) where.occupation = { contains: occupation, mode: 'insensitive' };
    if (motherTongue) where.motherTongue = motherTongue.toUpperCase();
    if (typeof manglik === 'boolean') where.manglik = manglik;
    if (diet) where.diet = diet;
    if (smokingHabit) where.smokingHabit = smokingHabit;
    if (drinkingHabit) where.drinkingHabit = drinkingHabit;
    if (typeof isVerified === 'boolean') where.isVerified = isVerified;

    if (religions?.length) {
      where.religion = { in: religions.map((item) => item.toUpperCase()) };
    }

    if (castes?.length) {
      where.caste = { in: castes };
    }

    if (minHeight) where.height = { ...where.height, gte: Number(minHeight) };
    if (maxHeight) where.height = { ...where.height, lte: Number(maxHeight) };

    if (minAge || maxAge) {
      const today = new Date();
      where.dateOfBirth = {};

      if (minAge) {
        where.dateOfBirth.lte = new Date(
          today.getFullYear() - Number(minAge),
          today.getMonth(),
          today.getDate()
        );
      }

      if (maxAge) {
        where.dateOfBirth.gte = new Date(
          today.getFullYear() - Number(maxAge) - 1,
          today.getMonth(),
          today.getDate()
        );
      }
    }

    if (education && education !== 'Any') {
      where.OR = [
        ...(where.OR || []),
        { highestEducation: { equals: education, mode: 'insensitive' } },
        { educationDetails: { contains: education, mode: 'insensitive' } },
        { collegeName: { contains: education, mode: 'insensitive' } },
      ];
    }

    const incomeValue = income || annualIncome;
    if (incomeValue && incomeValue !== 'Any') {
      where.annualIncome = { contains: incomeValue.replace('+', ''), mode: 'insensitive' };
    }

    if (withPhoto) {
      where.media = {
        some: {
          type: { in: ['PROFILE_PHOTO', 'GALLERY_PHOTO'] },
          isVisible: true,
          isPrivate: false,
        },
      };
    }

    if (search) {
      where.AND = [
        ...(where.AND || []),
        {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { profileId: { contains: search, mode: 'insensitive' } },
            { city: { contains: search, mode: 'insensitive' } },
            { caste: { contains: search, mode: 'insensitive' } },
          ],
        },
      ];
    }

    let orderBy = [{ profileCompleteness: 'desc' }, { createdAt: 'desc' }, { id: 'desc' }];

    if (type === 'featured') {
      where.media = {
        some: {
          type: { in: ['PROFILE_PHOTO', 'GALLERY_PHOTO'] },
          isVisible: true,
          isPrivate: false,
        },
      };
      orderBy = [{ viewCount: 'desc' }, { profileCompleteness: 'desc' }, { id: 'desc' }];
    } else if (type === 'new' || type === 'justJoined') {
      orderBy = [{ createdAt: 'desc' }, { id: 'desc' }];
    } else if (type === 'recommended') {
      orderBy = [{ profileCompleteness: 'desc' }, { viewCount: 'desc' }, { id: 'desc' }];
    }

    const [profiles, totalCount] = await Promise.all([
      prisma.profile.findMany({
        where,
        skip: cursor,
        take: limit,
        include: {
          ...profileSearchInclude,
          user: {
            select: {
              ...profileUserSelect,
              receivedMatchRequests: currentUserId ? {
                where: { senderId: currentUserId },
                take: 1,
                orderBy: { updatedAt: 'desc' }
              } : undefined,
              sentMatchRequests: currentUserId ? {
                where: { receiverId: currentUserId },
                take: 1,
                orderBy: { updatedAt: 'desc' }
              } : undefined,
            }
          }
        },
        orderBy,
      }),
      prisma.profile.count({ where }),
    ]);

    let shortlistedIds = new Set();
    if (currentUserId) {
      const shortlists = await prisma.shortlist.findMany({
        where: {
          userId: currentUserId,
          shortlistedUserId: { in: profiles.map((p) => p.userId) },
        },
        select: { shortlistedUserId: true },
      });
      shortlistedIds = new Set(shortlists.map((s) => s.shortlistedUserId));
    }

    return {
      profiles: profiles.map((p) => serializeProfile(p, shortlistedIds.has(p.userId))),
      totalCount,
      nextCursor:
        cursor + profiles.length < totalCount ? String(cursor + profiles.length) : null,
    };
  } catch (error) {
    logger.error('Error in searchProfiles:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error searching profiles');
  }
};

export const addPhoto = async (userId, mediaData, mediaType) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, ERROR_MESSAGES.PROFILE_NOT_FOUND);
    }

    const newMedia = await prisma.$transaction(async (tx) => {
      const media = await tx.media.create({
        data: {
          userId,
          profileId: profile.id,
          type: mediaType,
          url: mediaData.url,
          thumbnailUrl: mediaData.thumbnailUrl,
          fileName: mediaData.fileName,
          fileSize: mediaData.fileSize,
          mimeType: mediaData.mimeType,
        },
      });

      await tx.photoPrivacySettings.create({
        data: {
          mediaId: media.id,
          userId,
        },
      });

      // If it's a profile photo, update the User's profilePicture field and mark as default
      if (mediaType === 'PROFILE_PHOTO') {
        await tx.user.update({
          where: { id: userId },
          data: { profilePicture: media.url }
        });
        
        // Also mark this as the default photo
        await tx.media.update({
          where: { id: media.id },
          data: { isDefault: true }
        });

        // Unmark other photos as default for this user
        await tx.media.updateMany({
          where: { 
            userId, 
            id: { not: media.id },
            type: 'PROFILE_PHOTO'
          },
          data: { isDefault: false }
        });
      }

      return media;
    });

    await updateProfileCompleteness(prisma, userId);

    logger.info(`Photo and privacy settings added for user: ${userId}`);
    return newMedia;
  } catch (error) {
    logger.error('Error in addPhoto:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error adding photo');
  }
};

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

    await prisma.$transaction(async (tx) => {
      await tx.media.delete({
        where: { id: mediaId },
      });

      if (media.isDefault || media.type === 'PROFILE_PHOTO') {
        const replacement = await tx.media.findFirst({
          where: {
            userId,
            type: 'GALLERY_PHOTO',
            isVisible: true,
          },
          orderBy: [{ displayOrder: 'asc' }, { createdAt: 'asc' }, { id: 'asc' }],
        });

        if (replacement) {
          await tx.media.updateMany({
            where: { userId },
            data: { isDefault: false },
          });
          await tx.media.update({
            where: { id: replacement.id },
            data: { type: 'PROFILE_PHOTO', isDefault: true },
          });
          await tx.user.update({
            where: { id: userId },
            data: { profilePicture: replacement.url },
          });
        } else {
          await tx.user.update({
            where: { id: userId },
            data: { profilePicture: null },
          });
        }
      }
    });

    await updateProfileCompleteness(prisma, userId);
    await cacheHelper.del(`profile:userId:${userId}`);

    logger.info(`Photo deleted: ${mediaId} by user: ${userId}`);
  } catch (error) {
    logger.error('Error in deletePhoto:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error deleting photo');
  }
};

export const setProfilePhoto = async (userId, mediaId) => {
  try {
    const media = await prisma.media.findUnique({
      where: { id: mediaId },
    });

    if (!media) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Photo not found');
    }

    if (media.userId !== userId) {
      throw new ApiError(HTTP_STATUS.FORBIDDEN, 'You are not authorized to update this photo');
    }

    if (!['PROFILE_PHOTO', 'GALLERY_PHOTO'].includes(media.type)) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Only profile and gallery photos can be set as profile photo');
    }

    const updatedMedia = await prisma.$transaction(async (tx) => {
      await tx.media.updateMany({
        where: { userId },
        data: { isDefault: false },
      });

      await tx.media.updateMany({
        where: {
          userId,
          type: 'PROFILE_PHOTO',
          id: { not: mediaId },
        },
        data: { type: 'GALLERY_PHOTO' },
      });

      const nextMedia = await tx.media.update({
        where: { id: mediaId },
        data: {
          type: 'PROFILE_PHOTO',
          isDefault: true,
          isVisible: true,
        },
      });

      await tx.user.update({
        where: { id: userId },
        data: { profilePicture: nextMedia.url },
      });

      return nextMedia;
    });

    await cacheHelper.del(`profile:userId:${userId}`);
    await updateProfileCompleteness(prisma, userId);

    logger.info(`Profile photo changed: ${mediaId} by user: ${userId}`);
    return updatedMedia;
  } catch (error) {
    logger.error('Error in setProfilePhoto:', error);
    if (error instanceof ApiError) throw error;
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Error updating profile photo');
  }
};

export const profileService = {
  createProfile,
  getProfileByUserId,
  getProfileContactInfo,
  updateProfile,
  deleteProfile,
  searchProfiles,
  addPhoto,
  deletePhoto,
  setProfilePhoto,
};
