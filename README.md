# AION 2 Guide

Global fan guide for AION 2 launch week: dates, classes, combat, gear, map pins, currencies, and a live party roster.

**Live site:** https://aion2-week-one.vercel.app/

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS 4. Hosted on Vercel. Live roster uses `@vercel/blob`.

## Local

npm (`package-lock.json`):

```bash
npm install
npm run dev
```

`npm run build` then `npm start` for a production build. Guide pages work without env. Roster Blob writes need `.env.local` (see `.env.example`).

## Content authoring

No markdown posts. A page is `app/<route>/page.tsx` plus data in `lib/*` (class guides, gear chapters, map pins, roster types, and so on). Nav is `lib/nav.ts` (`primaryNav` + `metaNav`). Add a route file and a `lib/nav.ts` entry (and the home cards in `app/page.tsx` if it should appear there).

## Route map

From `lib/nav.ts` / `app/*/page.tsx`:

| Path | Label |
| --- | --- |
| `/` | Home |
| `/roster` | Roster |
| `/know` | Need to know |
| `/plan` | Week one |
| `/alts` | Barracks |
| `/classes` | Classes |
| `/tiers` | Tiers |
| `/combat` | Combat |
| `/gear` | Gear |
| `/activities` | Activities |
| `/map` | Map |
| `/currencies` | Currencies |
| `/crafting` | Crafting |
| `/tips` | Tips |
| `/faq` | FAQ |
| `/sources` | Sources |

Also: `GET`/`PUT` `/api/roster` (not in nav).

## Roster

`lib/roster-store.ts` reads and writes private Blob path `roster.json` via `@vercel/blob` `get`/`put` (no explicit `token`). The SDK then uses `BLOB_READ_WRITE_TOKEN`. The table on `/roster` talks to `/api/roster`.

**Security:** `PUT /api/roster` is etag-only (optimistic concurrency). There is no auth. Anyone who can hit the route can overwrite the roster. Treat that as a known risk; do not “fix” it in docs.

## Writer / Site bots

Edit `app/**/page.tsx` and `lib/*`. Keep `lib/nav.ts` in sync with routes. Do not add roster auth in a docs-only change.
