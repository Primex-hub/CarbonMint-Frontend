/**
 * Runtime configuration sourced from Vite environment variables, with safe
 * fallbacks so the demo works without a .env file.
 */
const env = import.meta.env || {};

export const CONFIG = {
  network: env.VITE_STELLAR_NETWORK || 'TESTNET',
  sorobanRpcUrl:
    env.VITE_SOROBAN_RPC_URL || 'https://soroban-testnet.stellar.org',
  carbonContractId: env.VITE_CARBON_CONTRACT_ID || '',
  settlementAsset: env.VITE_SETTLEMENT_ASSET || 'USDC',
};
