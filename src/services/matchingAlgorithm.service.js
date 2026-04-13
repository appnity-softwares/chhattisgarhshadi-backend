/**
 * ============================================
 * Indian Matrimony Matching Algorithm v2
 * ============================================
 * 
 * Chhattisgarh Shaadi — Rule-Based Weighted Scoring
 * 
 * Flow: Filter → Score → Rank → Show
 * 
 * Priority Order (Indian Matrimony):
 *   1. Religion
 *   2. Caste / Community
 *   3. Location (district/city/state)
 *   4. Age Compatibility
 *   5. Education
 *   6. Profession / Income
 *   7. Family Background
 *   8. Horoscope (optional)
 * 
 * No schema changes needed.
 */

import prisma from '../config/database.js';

import { logger } from '../config/logger.js';
import { hasPremiumAccess } from '../utils/premium.helper.js';

// ============================================
// CG Districts grouped by Division
// ============================================
const CG_DIVISIONS = {
    RAIPUR: ['Raipur', 'Baloda Bazar', 'Gariaband', 'Mahasamund', 'Dhamtari'],
    DURG: ['Durg', 'Bhilai', 'Balod', 'Bemetara', 'Rajnandgaon', 'Kawardha'],
    BILASPUR: ['Bilaspur', 'Mungeli', 'Korba', 'Janjgir-Champa', 'Gaurela-Pendra-Marwahi'],
    SURGUJA: ['Surguja', 'Ambikapur', 'Surajpur', 'Balrampur', 'Korea', 'Manendragarh'],
    BASTAR: ['Jagdalpur', 'Bastar', 'Kondagaon', 'Narayanpur', 'Dantewada', 'Sukma', 'Bijapur', 'Kanker'],
    RAIGARH: ['Raigarh', 'Jashpur', 'Sarangarh-Bilaigarh'],
};

/**
 * Find which CG division a city belongs to
 */
const getCGDivision = (city) => {
    if (!city) return null;
    const normalizedCity = city.trim().toLowerCase();
    for (const [division, cities] of Object.entries(CG_DIVISIONS)) {
        if (cities.some(c => c.toLowerCase() === normalizedCity)) {
            return division;
        }
    }
    return null;
};

// ============================================
// SCORING CONSTANTS
// ============================================
const SCORE = {
    // Step 3: Compatibility Score
    SAME_CITY: 20,
    SAME_DIVISION: 15,
    SAME_STATE: 10,
    SAME_COUNTRY: 3,
    SAME_NATIVE_VILLAGE: 25,
    SAME_CASTE: 25,
    SAME_SUB_CASTE: 10,
    DIFFERENT_GOTHRAM: 5,      // Bonus for different gothram (desired in Hindu tradition)
    SAME_GOTHRAM_PENALTY: -15, // Penalty for same gothram
    AGE_WITHIN_3: 20,
    AGE_WITHIN_5: 12,
    AGE_WITHIN_8: 5,
    SAME_EDUCATION_LEVEL: 10,
    SAME_PROFESSION_CATEGORY: 10,
    FAMILY_TYPE_MATCH: 5,

    // Step 4: Mutual Preference Match
    MUTUAL_AGE_MATCH: 10,
    MUTUAL_HEIGHT_MATCH: 5,
    MUTUAL_RELIGION_MATCH: 10,
    MUTUAL_CASTE_MATCH: 5,

    // Step 5: Activity Score
    LOGIN_WITHIN_24H: 15,
    LOGIN_WITHIN_3D: 8,
    LOGIN_WITHIN_7D: 3,
    PROFILE_COMPLETE_80: 10,
    PROFILE_COMPLETE_60: 5,
    HAS_PHOTOS: 10,
    VERIFIED_PROFILE: 15,

    // Step 6: New Profile Boost
    JOINED_7_DAYS: 20,
    JOINED_14_DAYS: 10,
    JOINED_30_DAYS: 5,

    // CG-Specific Bonuses
    BOTH_CG_RESIDENTS: 10,
    BOTH_SPEAK_CG: 10,
    SAME_APP_LANGUAGE: 5,
    SAME_APP_LANGUAGE_CG: 10,

    // Premium Boost
    PREMIUM_USER: 5,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return null;
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
    if (!education) return 0;
    const ranks = {
        BELOW_10TH: 1,
        '10TH': 2,
        '12TH': 3,
        DIPLOMA: 4,
        BACHELORS: 5,
        MASTERS: 6,
        DOCTORATE: 7,
    };
    return ranks[education] || 0;
};



/**
 * Safely parse potential JSON array string => JS array
 * PartnerPreference fields like religion, caste, maritalStatus can be stored as JSON strings
 */
const parseJsonArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
        // Could be a simple comma-separated string
        return value.split(',').map(s => s.trim()).filter(Boolean);
    }
};

const daysSince = (date) => {
    if (!date) return Infinity;
    return Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
};

const hoursSince = (date) => {
    if (!date) return Infinity;
    return Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60));
};

// ============================================
// MAIN ALGORITHM: calculateMatchScore
// ============================================

/**
 * Calculate total match score between two users.
 * Uses additive scoring across all factors.
 * Max possible ≈ 200 points, normalized to 0-100.
 */
export const calculateMatchScore = async (userId, targetUserId) => {
    try {
        const [userProfile, targetProfile] = await Promise.all([
            prisma.profile.findUnique({
                where: { userId },
                include: {
                    partnerPreference: true,
                    user: { select: { id: true, role: true, preferredLanguage: true, lastLoginAt: true, createdAt: true } },
                    media: { where: { type: 'PROFILE_PHOTO' }, take: 1 },
                },
            }),
            prisma.profile.findUnique({
                where: { userId: targetUserId },
                include: {
                    partnerPreference: true,
                    user: { select: { id: true, role: true, preferredLanguage: true, lastLoginAt: true, createdAt: true } },
                    media: { where: { type: 'PROFILE_PHOTO' }, take: 1 },
                },
            }),
        ]);

        if (!userProfile || !targetProfile) {
            return { score: 0, error: 'Profile not found' };
        }

        return calculateScoreFromProfiles(userProfile, targetProfile);
    } catch (error) {
        logger.error('Error calculating match score:', error);
        return { score: 0, error: error.message };
    }
};

/**
 * Pure scoring function — no DB calls.
 * Accepts pre-fetched profile objects.
 */
export const calculateScoreFromProfiles = async (userProfile, targetProfile) => {
    const breakdown = {
        compatibility: 0,
        mutualPreference: 0,
        activity: 0,
        newProfileBoost: 0,
        cgBonus: 0,
    };

    // === Step 3: Compatibility Score ===
    breakdown.compatibility = calcCompatibilityScore(userProfile, targetProfile);

    // === Step 4: Mutual Preference Check ===
    breakdown.mutualPreference = calcMutualPreferenceScore(userProfile, targetProfile);

    // === Step 5: Activity Score ===
    breakdown.activity = calcActivityScore(targetProfile);

    // === Step 6: New Profile Boost ===
    breakdown.newProfileBoost = calcNewProfileBoost(targetProfile);

    // === CG-Specific Bonus ===
    breakdown.cgBonus = calcCGBonus(userProfile, targetProfile);

    // === Premium Boost ===
    if (hasPremiumAccess(targetProfile.user)) {
        breakdown.activity += SCORE.PREMIUM_USER;
    }

    // Sum raw score
    const rawScore = Object.values(breakdown).reduce((sum, v) => sum + v, 0);

    // Normalize to 0-100 (max theoretical = ~220)
    const MAX_POSSIBLE = 220;
    const percentage = Math.min(100, Math.max(0, Math.round((rawScore / MAX_POSSIBLE) * 100)));

    return {
        score: percentage,
        maxScore: 100,
        percentage,
        rawScore,
        breakdown,
        compatibility: getCompatibilityLabel(percentage),
        isSuperMatch: percentage >= 85,
    };
};

// ============================================
// Step 3: Compatibility Score
// ============================================
const calcCompatibilityScore = (user, target) => {
    let score = 0;

    // --- 3a. Location ---
    // Native Village (highest priority for CG)
    if (user.nativeVillage && target.nativeVillage &&
        user.nativeVillage.trim().toLowerCase() === target.nativeVillage.trim().toLowerCase()) {
        score += SCORE.SAME_NATIVE_VILLAGE;
    }

    // City / District
    if (user.city && target.city) {
        if (user.city.trim().toLowerCase() === target.city.trim().toLowerCase()) {
            score += SCORE.SAME_CITY;
        } else {
            // Check same CG division
            const userDiv = getCGDivision(user.city);
            const targetDiv = getCGDivision(target.city);
            if (userDiv && targetDiv && userDiv === targetDiv) {
                score += SCORE.SAME_DIVISION;
            }
        }
    }

    // State
    if (user.state && target.state &&
        user.state.trim().toLowerCase() === target.state.trim().toLowerCase()) {
        score += SCORE.SAME_STATE;
    } else if (user.country && target.country &&
        user.country.trim().toLowerCase() === target.country.trim().toLowerCase()) {
        score += SCORE.SAME_COUNTRY;
    }

    // --- 3b. Caste ---
    if (user.caste && target.caste &&
        user.caste.trim().toLowerCase() === target.caste.trim().toLowerCase()) {
        score += SCORE.SAME_CASTE;
    }

    // Sub-caste
    if (user.subCaste && target.subCaste &&
        user.subCaste.trim().toLowerCase() === target.subCaste.trim().toLowerCase()) {
        score += SCORE.SAME_SUB_CASTE;
    }

    // Gothram (different is desired in Hindu tradition)
    if (user.gothram && target.gothram && user.gothram.trim().length > 0 && target.gothram.trim().length > 0) {
        if (user.gothram.trim().toLowerCase() === target.gothram.trim().toLowerCase()) {
            score += SCORE.SAME_GOTHRAM_PENALTY;
        } else {
            score += SCORE.DIFFERENT_GOTHRAM;
        }
    }

    // --- 3c. Age Compatibility ---
    const userAge = calculateAge(user.dateOfBirth);
    const targetAge = calculateAge(target.dateOfBirth);
    if (userAge && targetAge) {
        const ageDiff = Math.abs(userAge - targetAge);
        if (ageDiff <= 3) score += SCORE.AGE_WITHIN_3;
        else if (ageDiff <= 5) score += SCORE.AGE_WITHIN_5;
        else if (ageDiff <= 8) score += SCORE.AGE_WITHIN_8;
    }

    // --- 3d. Education Level ---
    const userEdu = getEducationRank(user.highestEducation);
    const targetEdu = getEducationRank(target.highestEducation);
    if (userEdu > 0 && targetEdu > 0 && Math.abs(userEdu - targetEdu) <= 1) {
        score += SCORE.SAME_EDUCATION_LEVEL;
    }

    // --- 3e. Profession Category ---
    if (user.occupationType && target.occupationType &&
        user.occupationType === target.occupationType) {
        score += SCORE.SAME_PROFESSION_CATEGORY;
    }

    // --- 3f. Family Type ---
    if (user.familyType && target.familyType &&
        user.familyType === target.familyType) {
        score += SCORE.FAMILY_TYPE_MATCH;
    }

    return score;
};

// ============================================
// Step 4: Mutual Preference Score
// ============================================
const calcMutualPreferenceScore = (user, target) => {
    let score = 0;

    const userPref = user.partnerPreference;
    const targetPref = target.partnerPreference;

    // --- Does User's preference match Target? ---
    if (userPref) {
        // Age
        const targetAge = calculateAge(target.dateOfBirth);
        if (targetAge && userPref.ageFrom && userPref.ageTo) {
            if (targetAge >= userPref.ageFrom && targetAge <= userPref.ageTo) {
                score += SCORE.MUTUAL_AGE_MATCH;
            }
        }

        // Height
        if (target.height && userPref.heightFrom && userPref.heightTo) {
            if (target.height >= userPref.heightFrom && target.height <= userPref.heightTo) {
                score += SCORE.MUTUAL_HEIGHT_MATCH;
            }
        }

        // Religion
        const prefReligions = parseJsonArray(userPref.religion);
        if (prefReligions.length > 0 && target.religion) {
            if (prefReligions.includes(target.religion)) {
                score += SCORE.MUTUAL_RELIGION_MATCH;
            }
        }

        // Caste (if not mandatory — mandatory is handled in hard filter)
        const prefCastes = parseJsonArray(userPref.caste);
        if (prefCastes.length > 0 && target.caste) {
            if (prefCastes.some(c => c.trim().toLowerCase() === target.caste.trim().toLowerCase())) {
                score += SCORE.MUTUAL_CASTE_MATCH;
            }
        }
    }

    // --- Does Target's preference match User? (Reverse check) ---
    if (targetPref) {
        const userAge = calculateAge(user.dateOfBirth);
        if (userAge && targetPref.ageFrom && targetPref.ageTo) {
            if (userAge >= targetPref.ageFrom && userAge <= targetPref.ageTo) {
                score += SCORE.MUTUAL_AGE_MATCH;
            }
        }

        if (user.height && targetPref.heightFrom && targetPref.heightTo) {
            if (user.height >= targetPref.heightFrom && user.height <= targetPref.heightTo) {
                score += SCORE.MUTUAL_HEIGHT_MATCH;
            }
        }

        const targetPrefReligions = parseJsonArray(targetPref.religion);
        if (targetPrefReligions.length > 0 && user.religion) {
            if (targetPrefReligions.includes(user.religion)) {
                score += SCORE.MUTUAL_RELIGION_MATCH;
            }
        }

        const targetPrefCastes = parseJsonArray(targetPref.caste);
        if (targetPrefCastes.length > 0 && user.caste) {
            if (targetPrefCastes.some(c => c.trim().toLowerCase() === user.caste.trim().toLowerCase())) {
                score += SCORE.MUTUAL_CASTE_MATCH;
            }
        }
    }

    return score;
};

// ============================================
// Step 5: Activity Score
// ============================================
const calcActivityScore = (target) => {
    let score = 0;

    // Last login recency
    const loginHours = hoursSince(target.user?.lastLoginAt);
    if (loginHours <= 24) score += SCORE.LOGIN_WITHIN_24H;
    else if (loginHours <= 72) score += SCORE.LOGIN_WITHIN_3D;
    else if (loginHours <= 168) score += SCORE.LOGIN_WITHIN_7D;

    // Profile completeness
    if (target.profileCompleteness >= 80) score += SCORE.PROFILE_COMPLETE_80;
    else if (target.profileCompleteness >= 60) score += SCORE.PROFILE_COMPLETE_60;

    // Has photos
    if (target.media && target.media.length > 0) {
        score += SCORE.HAS_PHOTOS;
    }

    // Verified
    if (target.isVerified) score += SCORE.VERIFIED_PROFILE;

    return score;
};

// ============================================
// Step 6: New Profile Boost
// ============================================
const calcNewProfileBoost = (target) => {
    const days = daysSince(target.user?.createdAt || target.createdAt);
    if (days <= 7) return SCORE.JOINED_7_DAYS;
    if (days <= 14) return SCORE.JOINED_14_DAYS;
    if (days <= 30) return SCORE.JOINED_30_DAYS;
    return 0;
};

// ============================================
// CG-Specific Bonus
// ============================================
const calcCGBonus = (user, target) => {
    let score = 0;

    const isUserCG = user.state?.toLowerCase().includes('chhattisgarh');
    const isTargetCG = target.state?.toLowerCase().includes('chhattisgarh');

    if (isUserCG && isTargetCG) {
        score += SCORE.BOTH_CG_RESIDENTS;
    }

    if (user.speaksChhattisgarhi && target.speaksChhattisgarhi) {
        score += SCORE.BOTH_SPEAK_CG;
    }

    // App language match
    const userLang = user.user?.preferredLanguage;
    const targetLang = target.user?.preferredLanguage;
    if (userLang && userLang === targetLang) {
        score += (userLang === 'CG') ? SCORE.SAME_APP_LANGUAGE_CG : SCORE.SAME_APP_LANGUAGE;
    }

    return score;
};

// ============================================
// Compatibility Label
// ============================================
const getCompatibilityLabel = (score) => {
    if (score >= 90) return 'Perfect Match! 💫';
    if (score >= 80) return 'Excellent Match! 🎉';
    if (score >= 70) return 'Great Match! ⭐';
    if (score >= 60) return 'Good Match 👍';
    if (score >= 50) return 'Compatible 😊';
    if (score >= 35) return 'Worth Exploring 🤔';
    return 'New Match 🌱';
};

// ============================================
// STEP 1 & 2: Hard Filters + Candidate Pool
// ============================================

/**
 * Get daily recommendations using the full algorithm:
 *   Filter → Score → Rank → Feed Mix
 * 
 * @param {number} userId
 * @param {number} limit - number of profiles to return
 */
export const getDailyRecommendations = async (userId, limit = 20) => {
    try {
        // ========================================
        // 1. Fetch current user's profile + prefs
        // ========================================
        const userProfile = await prisma.profile.findUnique({
            where: { userId },
            include: {
                partnerPreference: true,
                user: { select: { id: true, role: true, preferredLanguage: true, lastLoginAt: true, createdAt: true } },
                media: { where: { type: 'PROFILE_PHOTO' }, take: 1 },
            },
        });

        if (!userProfile) return [];

        const targetGender = userProfile.gender === 'MALE' ? 'FEMALE' : 'MALE';
        const preferences = userProfile.partnerPreference;

        // ========================================
        // 2. Build Hard Filters (Mandatory)
        // ========================================
        const hardFilter = {
            gender: targetGender,
            userId: { not: userId },
            isPublished: true,
            user: {
                isBanned: false,
                // Exclude blocked users in both directions
                blockedBy: { none: { blockerId: userId } },
                blocksGiven: { none: { blockedId: userId } },
            },
        };

        // --- Religion filter (hard filter if preferences set) ---
        if (preferences?.religion) {
            const prefReligions = parseJsonArray(preferences.religion);
            if (prefReligions.length > 0) {
                hardFilter.religion = { in: prefReligions };
            }
        }

        // --- Marital Status filter ---
        if (preferences?.maritalStatus) {
            const prefMarital = parseJsonArray(preferences.maritalStatus);
            if (prefMarital.length > 0) {
                hardFilter.maritalStatus = { in: prefMarital };
            }
        }

        // --- Age filter ---
        if (preferences?.ageFrom || preferences?.ageTo) {
            const today = new Date();
            hardFilter.dateOfBirth = {};
            if (preferences.ageFrom) {
                hardFilter.dateOfBirth.lte = new Date(today.getFullYear() - preferences.ageFrom, today.getMonth(), today.getDate());
            }
            if (preferences.ageTo) {
                hardFilter.dateOfBirth.gte = new Date(today.getFullYear() - preferences.ageTo - 1, today.getMonth(), today.getDate());
            }
        }

        // --- Caste filter (REQUIRED = hard filter, PREFERRED = soft score) ---
        if (preferences?.casteMandatory === true) {
            const allowedCastes = [];
            if (userProfile.caste) allowedCastes.push(userProfile.caste);
            const prefCastes = parseJsonArray(preferences.caste);
            allowedCastes.push(...prefCastes);
            const uniqueCastes = [...new Set(allowedCastes)];
            if (uniqueCastes.length > 0) {
                hardFilter.caste = { in: uniqueCastes, mode: 'insensitive' };
            }
        }

        // --- Chhattisgarhi language requirement ---
        if (preferences?.mustSpeakChhattisgarhi === true) {
            hardFilter.speaksChhattisgarhi = true;
        }

        // ========================================
        // 3. Fetch Candidate Pool (300 max)
        // ========================================
        const candidatePool = await prisma.profile.findMany({
            where: hardFilter,
            include: {
                partnerPreference: true,
                user: { select: { id: true, role: true, preferredLanguage: true, lastLoginAt: true, createdAt: true } },
                media: {
                    where: { type: 'PROFILE_PHOTO' },
                    take: 1,
                    include: { privacySettings: true },
                },
            },
            take: 300,
            orderBy: [
                { profileCompleteness: 'desc' },
                { createdAt: 'desc' },
            ],
        });

        if (candidatePool.length === 0) return [];

        // ========================================
        // 4. Score Each Candidate
        // ========================================
        const scoredCandidates = candidatePool.map(candidate => {
            const result = scoreCandidate(userProfile, candidate);
            return {
                profile: candidate,
                ...result,
            };
        });

        // ========================================
        // 5. Sort by Score
        // ========================================
        scoredCandidates.sort((a, b) => b.score - a.score);

        // ========================================
        // 6. Build Diverse Feed
        // ========================================
        const feed = buildDiverseFeed(scoredCandidates, limit);

        return feed;
    } catch (error) {
        logger.error('Error getting daily recommendations:', error);
        return [];
    }
};

/**
 * Score a single candidate (synchronous — no DB calls)
 */
const scoreCandidate = (userProfile, candidate) => {
    const breakdown = {
        compatibility: 0,
        mutualPreference: 0,
        activity: 0,
        newProfileBoost: 0,
        cgBonus: 0,
    };

    breakdown.compatibility = calcCompatibilityScore(userProfile, candidate);
    breakdown.mutualPreference = calcMutualPreferenceScore(userProfile, candidate);
    breakdown.activity = calcActivityScore(candidate);
    breakdown.newProfileBoost = calcNewProfileBoost(candidate);
    breakdown.cgBonus = calcCGBonus(userProfile, candidate);

    if (hasPremiumAccess(candidate.user)) {
        breakdown.activity += SCORE.PREMIUM_USER;
    }

    const rawScore = Object.values(breakdown).reduce((sum, v) => sum + v, 0);
    const MAX_POSSIBLE = 220;
    const percentage = Math.min(100, Math.max(0, Math.round((rawScore / MAX_POSSIBLE) * 100)));

    return {
        score: percentage,
        maxScore: 100,
        percentage,
        rawScore,
        breakdown,
        compatibility: getCompatibilityLabel(percentage),
        isSuperMatch: percentage >= 85,
        // Tag for feed diversity
        tag: getProfileTag(candidate, userProfile, percentage),
    };
};

/**
 * Tag each profile for feed diversity:
 *  - "strong_match", "nearby", "new_user", "active", "verified"
 */
const getProfileTag = (candidate, user, score) => {
    if (score >= 70) return 'strong_match';
    
    // Same city or division
    if (user.city && candidate.city &&
        user.city.trim().toLowerCase() === candidate.city.trim().toLowerCase()) {
        return 'nearby';
    }
    const userDiv = getCGDivision(user.city);
    const candDiv = getCGDivision(candidate.city);
    if (userDiv && candDiv && userDiv === candDiv) return 'nearby';

    // New user
    if (daysSince(candidate.user?.createdAt || candidate.createdAt) <= 7) return 'new_user';

    // Recently active
    if (hoursSince(candidate.user?.lastLoginAt) <= 24) return 'active';

    // Verified
    if (candidate.isVerified) return 'verified';

    return 'match';
};

// ============================================
// Step 9: Build Diverse Feed
// ============================================

/**
 * Don't show only same type. Mix the feed:
 *   1 Strong match
 *   2 Strong match  
 *   3 Nearby district
 *   4 New user
 *   5 Strong match
 *   6 Recently active
 * 
 * Falls back to score-sorted if not enough diversity.
 */
const buildDiverseFeed = (scoredCandidates, limit) => {
    if (scoredCandidates.length <= limit) return scoredCandidates;

    const buckets = {
        strong_match: [],
        nearby: [],
        new_user: [],
        active: [],
        verified: [],
        match: [],
    };

    // Bucket candidates by tag
    for (const c of scoredCandidates) {
        const tag = c.tag || 'match';
        if (buckets[tag]) {
            buckets[tag].push(c);
        } else {
            buckets.match.push(c);
        }
    }

    const feed = [];
    const used = new Set();

    // Feed pattern: [strong, strong, nearby, new, strong, active]
    const pattern = ['strong_match', 'strong_match', 'nearby', 'new_user', 'strong_match', 'active'];

    let patternIdx = 0;
    while (feed.length < limit) {
        const tag = pattern[patternIdx % pattern.length];
        let picked = false;

        // Try to pick from the preferred bucket
        if (buckets[tag] && buckets[tag].length > 0) {
            const candidate = buckets[tag].shift();
            if (!used.has(candidate.profile.userId)) {
                feed.push(candidate);
                used.add(candidate.profile.userId);
                picked = true;
            }
        }

        // If bucket empty, pick from any remaining bucket (fallback)
        if (!picked) {
            const allBucketKeys = Object.keys(buckets);
            let foundFallback = false;
            for (const key of allBucketKeys) {
                while (buckets[key].length > 0) {
                    const fallback = buckets[key].shift();
                    if (!used.has(fallback.profile.userId)) {
                        feed.push(fallback);
                        used.add(fallback.profile.userId);
                        foundFallback = true;
                        break;
                    }
                }
                if (foundFallback) break;
            }

            // If no candidates remain at all, break
            if (!foundFallback) break;
        }

        patternIdx++;
    }

    return feed;
};

// ============================================
// GET SUPER MATCHES (85%+)
// ============================================
export const getSuperMatches = async (userId, limit = 5) => {
    const recommendations = await getDailyRecommendations(userId, 50);
    return recommendations.filter((m) => m.score >= 85).slice(0, limit);
};

// ============================================
// EXPORT
// ============================================
export default {
    calculateMatchScore,
    calculateScoreFromProfiles,
    getDailyRecommendations,
    getSuperMatches,
};
