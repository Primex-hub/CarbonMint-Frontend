/**
 * Mock retirement service.
 *
 * Simulates burning CARBON tokens to permanently retire credits and minting a
 * retirement certificate as proof of offset. No network calls are made.
 */

import { delay } from '../utils/delay.js';

const LATENCY_MS = 450;

function certificateId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `CMR-${stamp}-${rand}`;
}

/**
 * Retire (burn) a quantity of credits from a holding.
 * @param {{ holding: object, tonnes: number, owner: string, beneficiary?: string }} params
 * @returns {Promise<Object>} the issued retirement certificate
 */
export async function retireCredits({ holding, tonnes, owner, beneficiary }) {
  await delay(LATENCY_MS);
  if (tonnes > holding.tonnes) {
    throw new Error('Cannot retire more than you hold.');
  }
  return {
    id: certificateId(),
    batchId: holding.batchId,
    projectId: holding.projectId,
    projectName: holding.projectName,
    vintage: holding.vintage,
    serial: holding.serial,
    tonnes,
    owner,
    beneficiary: beneficiary || owner,
    burnTxHash: `mockburn_${Math.random().toString(16).slice(2, 12)}`,
    retiredAt: new Date().toISOString(),
  };
}
