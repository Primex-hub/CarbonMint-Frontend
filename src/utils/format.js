/**
 * Formatting helpers for currency, tonnage, dates and addresses.
 */

/**
 * Format a number as USDC currency.
 * @param {number} value
 * @returns {string}
 */
export function formatCurrency(value) {
  const n = Number(value) || 0;
  return `${n.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} USDC`;
}

/**
 * Format a tonnage value with the tCO2e unit.
 * @param {number} value
 * @returns {string}
 */
export function formatTonnes(value) {
  const n = Number(value) || 0;
  return `${n.toLocaleString('en-US')} tCO2e`;
}

/**
 * Truncate a Stellar public key for compact display.
 * @param {string} address
 * @returns {string}
 */
export function shortenAddress(address) {
  if (!address) return '';
  if (address.length <= 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

/**
 * Compute remaining supply as a clamped 0-100 percentage.
 * @param {number} available
 * @param {number} total
 * @returns {number}
 */
export function availabilityPercent(available, total) {
  if (!total || total <= 0) return 0;
  const pct = (Number(available) / Number(total)) * 100;
  return Math.max(0, Math.min(100, Math.round(pct)));
}

/**
 * Format a 0-100 number as a rounded percentage string.
 * @param {number} value
 * @returns {string}
 */
export function formatPercent(value) {
  const n = Number(value) || 0;
  return `${Math.round(n)}%`;
}

/**
 * Format a large tonnage compactly, e.g. 12500 -> "12.5K tCO2e".
 * @param {number} value
 * @returns {string}
 */
export function formatTonnesCompact(value) {
  const n = Number(value) || 0;
  const compact = n.toLocaleString('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });
  return `${compact} tCO2e`;
}

/**
 * Format a unit price as a per-tonne currency string.
 * @param {number} value - price per tonne in USDC
 * @returns {string}
 */
export function formatPricePerTonne(value) {
  return `${formatCurrency(value)} / tCO2e`;
}

/**
 * Format an ISO date string as a human-readable date.
 * @param {string} iso
 * @returns {string}
 */
export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
