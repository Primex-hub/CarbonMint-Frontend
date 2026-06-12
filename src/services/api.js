/**
 * Mock API layer.
 *
 * Wraps the in-memory marketplace data with promise-based functions and a
 * small artificial latency so the UI can exercise real loading/error states.
 * No network requests are made.
 */

import { BATCHES } from './market.js';
import { getProjectById } from '../constants/projects.js';
import { delay } from '../utils/delay.js';

const LATENCY_MS = 350;

// Clone so callers cannot mutate the source data by reference.
function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function withProject(batch) {
  return { ...batch, project: getProjectById(batch.projectId) };
}

/**
 * Fetch all marketplace batches with their project metadata.
 * @returns {Promise<Array>}
 */
export async function fetchBatches() {
  await delay(LATENCY_MS);
  return clone(BATCHES).map(withProject);
}

/**
 * Fetch a single batch by id.
 * @param {string} id
 * @returns {Promise<Object>}
 */
export async function fetchBatch(id) {
  await delay(LATENCY_MS);
  const batch = BATCHES.find((b) => b.id === id);
  if (!batch) {
    throw new Error(`Batch "${id}" was not found.`);
  }
  return withProject(clone(batch));
}

/**
 * Simulate a buy transaction. Returns a mock transaction receipt.
 * @param {{ batchId: string, quantity: number, buyer: string }} params
 * @returns {Promise<Object>}
 */
export async function submitBuy({ batchId, quantity, buyer }) {
  await delay(LATENCY_MS);
  const batch = BATCHES.find((b) => b.id === batchId);
  if (!batch) {
    throw new Error('Batch not found.');
  }
  if (quantity > batch.availableTonnes) {
    throw new Error('Not enough credits available in this batch.');
  }
  batch.availableTonnes -= quantity;
  return {
    txHash: `mocktx_${Math.random().toString(16).slice(2, 12)}`,
    batchId,
    quantity,
    buyer,
    total: quantity * batch.pricePerTonne,
    timestamp: new Date().toISOString(),
  };
}
