# Centum Stack — V2 Investor Demo

Centum Stack is a School 2.0 transformation operating system for leadership teams modernizing existing schools without changing curriculum.

## Stack
- Next.js App Router + TypeScript + Tailwind
- Prisma + Postgres schema for multi-school operations

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env
   ```
3. Run app:
   ```bash
   npm run dev
   ```

## Environment variables
- `DATABASE_URL` (required for Prisma)
- `LLM_PROVIDER` (optional; provider key string)
- `LLM_API_KEY` (optional; when missing, governance assistant runs retrieval-only demo mode)

## Prisma
- Schema: `prisma/schema.prisma`
- Seed: `npm run seed`

## Key routes
- `/` HQ Command Center
- `/schools/[schoolId]/governance` School 2.0 Governance & Support Center
- `/schools/[schoolId]/transformation` Transformation Copilot
- `/schools/[schoolId]/roi` Outcomes / ROI Layer
- `/packs` Transformation Packs
- `/tools` Tool Catalog 2.0
- `/training` Training Hub
- `/licenses` Partner/license operations
- `/growth-assets` Parent growth assets
