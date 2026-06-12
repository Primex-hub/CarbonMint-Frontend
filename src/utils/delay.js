/**
 * Resolve after a fixed number of milliseconds. Used by the mock services to
 * simulate network latency so the UI exercises real loading states.
 * @param {number} ms - delay in milliseconds
 * @returns {Promise<void>}
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
