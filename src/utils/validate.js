/**
 * Validation helpers for purchase and retirement flows.
 */

/**
 * Validate a buy request against an available listing.
 * @param {number} quantity - tonnes the user wants to buy
 * @param {number} available - tonnes available in the batch
 * @returns {{ valid: boolean, error: string|null }}
 */
export function validateBuyQuantity(quantity, available) {
  const q = Number(quantity);
  if (!quantity && quantity !== 0) {
    return { valid: false, error: 'Enter a quantity.' };
  }
  if (Number.isNaN(q)) {
    return { valid: false, error: 'Quantity must be a number.' };
  }
  if (q <= 0) {
    return { valid: false, error: 'Quantity must be greater than zero.' };
  }
  if (!Number.isInteger(q)) {
    return { valid: false, error: 'Quantity must be a whole number of tonnes.' };
  }
  if (q > available) {
    return { valid: false, error: `Only ${available} tonnes available.` };
  }
  return { valid: true, error: null };
}

/**
 * Validate a retirement request against the user's holding.
 * @param {number} quantity - tonnes to retire
 * @param {number} owned - tonnes the user currently holds
 * @returns {{ valid: boolean, error: string|null }}
 */
export function validateRetireQuantity(quantity, owned) {
  const q = Number(quantity);
  if (!quantity && quantity !== 0) {
    return { valid: false, error: 'Enter an amount to retire.' };
  }
  if (Number.isNaN(q)) {
    return { valid: false, error: 'Amount must be a number.' };
  }
  if (q <= 0) {
    return { valid: false, error: 'Amount must be greater than zero.' };
  }
  if (!Number.isInteger(q)) {
    return { valid: false, error: 'Amount must be a whole number of tonnes.' };
  }
  if (q > owned) {
    return { valid: false, error: `You only hold ${owned} tonnes.` };
  }
  return { valid: true, error: null };
}
