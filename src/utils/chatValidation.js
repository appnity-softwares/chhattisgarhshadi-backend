import { ApiError } from './ApiError.js';
import { HTTP_STATUS } from './constants.js';

const EMAIL_REGEX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
const EMAIL_OBFUSCATED = /\b([a-z0-9._%+-]+)\s*(?:\(|\[)?\s*at\s*(?:\)|\])?\s*([a-z0-9.-]+)\s*(?:\(|\[)?\s*dot\s*(?:\)|\])?\s*([a-z]{2,})\b/i;

const PHONE_REGEX = /(\+?\d[\d\s().-]{7,}\d)/; // loose match, verified by digit count

const WORD_NUMBERS = {
  zero: '0',
  oh: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  ten: '10',
};

const normalizeObfuscatedNumbers = (text) => {
  const lower = text.toLowerCase();
  const wordReplaced = lower.replace(
    /\b(zero|oh|one|two|three|four|five|six|seven|eight|nine|ten)\b/g,
    (m) => WORD_NUMBERS[m] || m
  );
  return wordReplaced;
};

const extractDigits = (text) => text.replace(/\D/g, '');

export const normalizeContent = (content) => {
  if (typeof content !== 'string') return '';
  return content.trim();
};

export const containsContactInfo = (content) => {
  if (!content) return false;
  if (EMAIL_REGEX.test(content) || EMAIL_OBFUSCATED.test(content)) return true;
  const phoneMatch = content.match(PHONE_REGEX);
  if (phoneMatch) {
    const digits = phoneMatch[0].replace(/\D/g, '');
    if (digits.length >= 10) return true;
  }
  const normalized = normalizeObfuscatedNumbers(content);
  const digits = extractDigits(normalized);
  if (digits.length >= 10) return true;
  return false;
};

export const assertValidMessageContent = (content, maxLength = 2000) => {
  const normalized = normalizeContent(content);
  if (!normalized) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Message content cannot be empty');
  }
  if (normalized.length > maxLength) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, `Message cannot exceed ${maxLength} characters`);
  }
  if (containsContactInfo(normalized)) {
    throw new ApiError(
      HTTP_STATUS.FORBIDDEN,
      'Sharing phone numbers or email addresses in chat is not allowed'
    );
  }
  return normalized;
};
