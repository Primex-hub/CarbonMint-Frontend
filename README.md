# CarbonMint

A demo frontend for **CarbonMint**, a tokenized carbon-credit marketplace built
on the Stellar network and Soroban smart contracts. Verified emission-reduction
projects mint carbon credits as `CARBON` tokens; users buy them, hold them in a
wallet, and **retire** (burn) them to receive a permanent offset certificate.

> This is a UI demo. It runs entirely on **mock data** with a **mock wallet** —
> there are no network calls and no real blockchain interaction.

## Features

- Landing page explaining the tokenized carbon-credit lifecycle (mint → buy → retire).
- Marketplace with grid and list views of available credit batches.
- Batch detail page with a validated buy flow and live cost calculation.
- My Credits page showing holdings with a retire flow.
- Retirements page listing issued offset certificates.
- Mock Stellar wallet connect/disconnect.

## Tech stack

- React 18 + Vite
- React Router
- Plain CSS (no UI framework)
- Mock Stellar/Soroban services

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).
