/**
 * Convert a string to snake_case.
 */
export const snakeCase = (s) => s.trim().replace(/\s+/g, '_').toLowerCase();
