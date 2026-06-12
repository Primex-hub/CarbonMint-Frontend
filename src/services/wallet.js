/**
 * Mock Stellar wallet service.
 *
 * Simulates a Freighter-style wallet connection without any network calls.
 * A fake public key is generated and persisted in localStorage so a
 * "connection" survives page reloads, mimicking real wallet behavior.
 */

import { CONFIG } from '../constants/config.js';

const STORAGE_KEY = 'carbonmint.wallet';

function randomPublicKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let key = 'G';
  for (let i = 0; i < 55; i += 1) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }
  return key;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Connect to the mock wallet. Returns the connected public key.
 * @returns {Promise<{ publicKey: string, network: string }>}
 */
export async function connectWallet() {
  await delay(400);
  const existing = localStorage.getItem(STORAGE_KEY);
  const publicKey = existing || randomPublicKey();
  localStorage.setItem(STORAGE_KEY, publicKey);
  return { publicKey, network: CONFIG.network };
}

/**
 * Disconnect the mock wallet and clear stored state.
 * @returns {Promise<void>}
 */
export async function disconnectWallet() {
  await delay(150);
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Read the persisted wallet session, if any.
 * @returns {{ publicKey: string, network: string }|null}
 */
export function getStoredWallet() {
  const publicKey = localStorage.getItem(STORAGE_KEY);
  if (!publicKey) return null;
  return { publicKey, network: CONFIG.network };
}
