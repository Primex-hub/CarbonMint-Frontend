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

## How it works

1. **Mint** — verified projects mint credit batches as `CARBON` tokens. In this
   demo, batches are static mock data in `src/services/market.js`.
2. **Buy** — users connect a (mock) wallet and purchase tonnes from a batch.
   Holdings are tracked in `AppContext`.
3. **Retire** — users burn credits they hold; the app issues a retirement
   certificate as proof of offset.

## Project structure

```
src/
  components/   reusable UI (Navbar, BatchCard, BuyForm, RetireModal, ...)
  pages/        routed views (Home, Marketplace, BatchDetail, MyCredits, ...)
  services/     mock wallet, marketplace, api and retirement logic
  context/      AppContext global state provider
  hooks/        useWallet, useMarket, useHoldings
  utils/        format and validate helpers
  constants/    project catalog and runtime config
```

## Environment

Copy `.env.example` to `.env` to override defaults. All values are optional —
the demo runs without any configuration.

## Disclaimer

This project is for demonstration only. No real tokens, payments, or carbon
credits are involved.
