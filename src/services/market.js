/**
 * Mock marketplace data.
 *
 * Each batch is a tokenized parcel of carbon credits minted from a verified
 * project. In a real deployment these would be Soroban token balances; here
 * they are plain objects served from memory.
 */

export const BATCHES = [
  {
    id: 'batch-001',
    projectId: 'amazon-redd',
    vintage: 2022,
    pricePerTonne: 14.5,
    totalTonnes: 5000,
    availableTonnes: 3200,
    serial: 'VCS-1102-2022-AMZ',
    assetCode: 'CARBON',
  },
  {
    id: 'batch-002',
    projectId: 'kenya-cookstoves',
    vintage: 2023,
    pricePerTonne: 9.75,
    totalTonnes: 2000,
    availableTonnes: 1850,
    serial: 'GS-7741-2023-KEN',
    assetCode: 'CARBON',
  },
  {
    id: 'batch-003',
    projectId: 'india-solar',
    vintage: 2023,
    pricePerTonne: 7.2,
    totalTonnes: 8000,
    availableTonnes: 6100,
    serial: 'VCS-3320-2023-IND',
    assetCode: 'CARBON',
  },
  {
    id: 'batch-004',
    projectId: 'indonesia-mangrove',
    vintage: 2021,
    pricePerTonne: 22.0,
    totalTonnes: 1500,
    availableTonnes: 640,
    serial: 'PV-0091-2021-IDN',
    assetCode: 'CARBON',
  },
  {
    id: 'batch-005',
    projectId: 'iceland-dac',
    vintage: 2024,
    pricePerTonne: 185.0,
    totalTonnes: 300,
    availableTonnes: 275,
    serial: 'PURO-0007-2024-ISL',
    assetCode: 'CARBON',
  },
  {
    id: 'batch-006',
    projectId: 'ghana-biochar',
    vintage: 2024,
    pricePerTonne: 132.5,
    totalTonnes: 900,
    availableTonnes: 720,
    serial: 'PURO-0143-2024-GHA',
    assetCode: 'CARBON',
  },
];
