# AION 2 Guide

Global fan guide for AION 2 launch week: dates, classes, combat, gear, map pins, and currencies.

**Live site:** https://aion2-week-one.vercel.app/

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS 4. Hosted on Vercel.

## Local

npm (`package-lock.json`):

```bash
npm install
npm run dev
```

`npm run build` then `npm start` for a production build. Guide pages do not need env vars.

## Content authoring

No markdown posts. A page is `app/<route>/page.tsx` plus data in `lib/*` (class guides, gear chapters, map pins, and so on). Nav is `lib/nav.ts` (`primaryNav` + `metaNav`). Add a route file and a `lib/nav.ts` entry (and the home cards in `app/page.tsx` if it should appear there).

## Route map

From `lib/nav.ts` / `app/*/page.tsx`:

| Path | Label |
| --- | --- |
| `/` | Home |
| `/know` | Need to know |
| `/plan` | Week one |
| `/alts` | Barracks |
| `/classes` | Classes index (Brawler is not day-1) |
| `/classes/[slug]` | Launch class deep guide (8 slugs) |
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

## Writer / Site bots

Edit `app/**/page.tsx` and `lib/*`. Keep `lib/nav.ts` in sync with routes.
