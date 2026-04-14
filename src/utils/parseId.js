import { ApiError } from './ApiError.js';
import { HTTP_STATUS } from './constants.js';

/**
 * Safely parse a route parameter to a positive integer.
 * Throws a 400 ApiError if the value is invalid.
 *
 * @param {string|any} value - The raw route parameter value
 * @param {string} paramName - Human-readable name for error messages (e.g. 'userId')
 * @returns {number} The parsed integer
 */
export const parseId = (value, paramName = 'id') => {
    const num = Number(value);
    if (!num || isNaN(num) || !Number.isInteger(num) || num <= 0) {
        throw new ApiError(HTTP_STATUS.BAD_REQUEST, `Invalid ${paramName}`);
    }
    return num;
};
