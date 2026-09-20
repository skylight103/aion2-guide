import type { ClassDeepGuide } from "@/lib/classDeep";

export const chanter: ClassDeepGuide = {
  slug: "chanter",
  name: "Chanter",
  kr: "호법성",
  role: "Melee support",
  roleTone: "support",
  weapons: "Staff",
  portrait: "/classes/chanter-icon.webp",
  portraitAlt: "Chanter class icon",
  largePortrait: "/classes/chanter-large.webp",
  identity:
    "불패의 진언 pre-buff → dash in → 질풍의 권능 on groggy → Barrier Spell for wipe floor only — **not Cleric #2**",
  overviewFields: [
    ["Role", "Melee support"],
    ["Weapons", "Staff"],
    [
      "Fantasy one-liner",
      "불패의 진언 pre-buff → dash in → 질풍의 권능 on groggy → Barrier Spell for wipe floor only — **not Cleric #2**",
    ],
    ["Difficulty", "Support without full heal duty; more personal damage than Cleric; fight in melee"],
    [
      "Week-one fit",
      "Organized groups want **both** Cleric and Chanter. Mantras are the job. Beginner pick: “Support without full heal duty.”",
    ],
    ["Common miss", "Backline turret; mantras down; Barrier as panic immunity; replacing Cleric"],
    [
      "Do not",
      "Plan that replaces the Cleric; teach banned external mouse macros on week-one voice; treat Brawler as a day-1 global substitute",
    ],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Melee support; Staff. Versatile support — **mantras are the job**. Fight in melee; more personal damage than Cleric. Organized groups want **both** Cleric and Chanter. **Not** Cleric number two.",
    },
    {
      type: "p",
      text: "**PvE fantasy (SoT):** Pre-buff unbreakable mantra (불패의 진언) → dash in with staff dash (돌진 격파) → stay on boss → haste/crit mantra (질풍의 권능) on groggy → off-heal with heal chant (쾌유의 주문) when needed → **Barrier Spell (결계의 주문)** = wipe-pattern floor, **not** full immunity. Barrier shares lockout with Glad 근성 and Cleric Salvation.",
    },
    {
      type: "p",
      text: "**PvP / habits (SoT):** Staff dash in; re-stick after dodge; peel with knockdown + heal chant; do not hover/turret; reservation on in PvE so mantras stay up.",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "SoT does **not** publish a numeric Chanter stat board this run → week-one numeric gear/stat board = **UNKNOWN / gap**.",
    },
    { type: "p", text: "Daevanion direction only (confirmed): Nezekan combat speed + CD for mantras/dash." },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "Vortex Sep optimize 1273940",
          "Gear 피증/치피증/강타; manastones weapon damage amp “safe”; bracelet 정의+공간 if hit/crit cuts unmet; Understanding 강타 from Understanding / amps from manastones; Pantheon realistic **환상 50 / 지혜 50**.",
        ],
        [
          "Inven 하구",
          "Passives prioritize 바람의 약속 / 충격 적중 / 공격 준비; then 고취의 주문 / 대지의 약속 / 보호진 / 생명의 축복.",
        ],
      ],
    },
    { type: "p", text: "**Do not** paste Sep Understanding / manastone tables into day-1 global checklists." },
  ],
  sp: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "ol",
      items: [
        "Unbreakable mantra (불패의 진언) — that is the class",
        "Heal chant (쾌유의 주문) + staff dash (돌진 격파)",
        "Barrier + extra melee last",
      ],
    },
    {
      type: "p",
      text: "**Daevanion (SoT):** Skill nodes on 불패의 진언 first → 질풍의 권능 → heal chant + staff dash; Nezekan speed+CD; skip healer-stat dump that treats Chanter as Cleric #2; Barrier = late orange.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    { type: "p", text: "**Inven 하구 (active priorities, mid-2026 text):**" },
    {
      type: "ul",
      items: [
        "1st: 격파쇄 20 · 암격쇄 ~20+ · 쾌유의 주문 ~20 · 파동격 16",
        "2nd: 백열격 ~16–18 · 질풍 난무 16",
        "3rd: 돌진 격파 12–16 · 타격쇄 · 열파격 · 회전격 12–14 · 진동쇄 · 충격 해제",
      ],
    },
    {
      type: "p",
      text: "**savetip Jul 2026 conflict:** Pushes 격파쇄/암격쇄/파동격/회전격/백열격 all toward 20 and **stops 쾌유의 주문 at 16** — **conflicts** with 하구’s higher heal-chant investment and with SoT “heal chant next.” **Date-label both; SoT week-one still elevates heal chant after mantras.**",
    },
    {
      type: "p",
      text: "**Vortex Aug 26 patch (1255908) / Sep optimize:** Keep 암격쇄 + 격파쇄 high; 회전격 buffed — use more; 마르쿠탄 (Marchutan) importance down vs earlier seasons.",
    },
    {
      type: "p",
      text: "**Confidence:** 불패 first = **Global-confirmed + KR**. Exact 20-order among melee skills = **KR conflict** (date posts).",
    },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Unbreakable mantra (불패의 진언) pre-pull → dash in (돌진 격파) → stay on boss → 질풍의 권능 on groggy → staff weave → heal chant (쾌유의 주문) on dips → Barrier Spell for wipe pattern only.",
    },
    {
      type: "p",
      text: "**SoT macro:** Hold staff Weak/Strong weave (spirit cancel, not a second heal bar). Do **not** put mantras or Barrier in hold sequence. Hand: mantras, dash, heal chant. Reservation on in PvE.",
    },
    {
      type: "p",
      text: "**First habit (day 1):** Mantras up = alive Chanter. Stick melee — not a backline turret. Barrier is wipe-floor, not panic immunity. You do **not** replace Cleric.",
    },
    { type: "h3", text: "PvE — KR live (ahead of global) — dated separately (do not merge eras)", region: "kr" },
    {
      type: "p",
      text: "**Inven 하구:** Open 질풍의 권능 → 돌진 격파 → 회전격 → 파동격 → 마르쿠탄의 분노 (Marchutan) → 평캔 (격파쇄 + 백열격 or 암격쇄). 평캔 = cancel 격파쇄 motion into RMB/skills; Skill reservation OFF for mash cancel. Prefer official in-game Skill Macro (author: external no longer needed once in-game macro improved).",
    },
    {
      type: "p",
      text: "**Post–Aug 26 2026:** 암격쇄 trigger retuned (마르쿠탄 / mark gates) → damage share spread to 격파쇄 / 백열격 / 회전격; 암격쇄 still high share.",
    },
    {
      type: "p",
      text: "**Vortex Sep 1273940 / 빵호빵 Sep 17:** Minimize macro lines (extra lines cut hits/slot); 암격 line 암회–타백 order; place 수호의 축복 above 질풍 for UX; 마르쿠탄 optional — 분쇄격 utility flex OK.",
    },
    {
      type: "p",
      text: "**Confidence:** Mantras-up + melee stick **confirmed**. KR 평캔 / 암격쇄 lines = **KR**. External mouse-macro culture must not overwrite SoT “official Skill Macro only.”",
    },
    { type: "h3", text: "PvP" },
    {
      type: "p",
      text: "**SoT Global-confirmed:** Dash in; peel; Barrier lockout shared — coordinate with Glad/Cleric.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        [
          "Barrier Spell (결계의 주문)",
          "Wipe-pattern floor only",
          "Short party floor, **not** full immunity; shares lockout with Glad 근성 / Cleric Salvation",
          "Global-confirmed framing",
        ],
      ],
    },
    {
      type: "p",
      text: "Skip: plan that replaces the Cleric; mantras down = dead Chanter. SoT panel leads Barrier for week-one framing; mantras are also core skills on SoT leveling — **mantras = class identity; Barrier = stigma callout**.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    { type: "p", text: "**Essential (Inven 하구 + Vortex Aug/Sep):**" },
    {
      type: "ol",
      items: [
        "1순위: 불패의 진언 (**25** target) · 질풍의 권능 (**25**) · 질주의 진언 (**25** recommended)",
        "2순위: 마르쿠탄의 분노 · 쾌유의 손길 · 수호의 축복 · 집중 방어",
        "3순위: 분쇄격 · 차단의 권능 · 결계의 주문",
      ],
    },
    {
      type: "p",
      text: "**KR Sep note (Vortex 1255908 / 1273940):** 불패 + 질풍 still core to 25; third 25 = 쾌유의 손길 **or** 질주의 진언; 마르쿠탄 lower priority than older seasons — may swap for care/block stigmas.",
    },
    {
      type: "p",
      text: "**savetip Jul conflict:** Lists “속성 방어 / 분쇄격 / 막기 / 풍의 약속” as stigma focus — **does not match** Inven/Vortex/SoT mantra-first set. Treat savetip stigma section as **unreliable vs Inven** this run; keep skill-tree table only with conflict label.",
    },
    {
      type: "p",
      text: "**Writer split:** Week-one stigma = Barrier Spell (SoT). KR 불패+질풍 25 core = **label KR**.",
    },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "불패의 진언 nodes first → 질풍의 권능 → heal chant + dash; Nezekan speed+CD; Barrier late; no Cleric#2 healer-stat dump.",
    },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "Inven 하구: Boards Nezekan → Zikel → Vaizel → Triniel → Ariel → 마르쿠탄 → Yustiel shown; adjust blues to hit skill 8/12/16 gates with Arcana — images not transcribed (**gap**).",
    },
    { type: "p", text: "Exact node map images = **gap**. Direction (불패 first + Nezekan) aligns SoT + KR." },
  ],
  pantheon: [
    { type: "h3", text: "Week-one global", region: "week-one" },
    { type: "p", text: "Global Pantheon availability at launch = **UNKNOWN**." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "table",
      headers: ["Source", "Picks"],
      rows: [["Vortex Sep 1273940", "Realistic high **환상 50 / 지혜 50**"]],
    },
    { type: "p", text: "Class-exclusive detail beyond that = **UNKNOWN / gap**." },
  ],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        ["Story / leveling", "Mantras up; stick melee", "No Chanter-specific SoT gear list", "**UNKNOWN / gap** (Global SoT)"],
        ["Week-one dungeon", "Staff + mantra uptime", "Numeric manastone boards not published for global", "**UNKNOWN**"],
        ["Toward BiS", "—", "KR endgame only below; never as day-1", "KR labeled"],
      ],
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**KR:** Weapon damage amp manastones; 피증/치피증/강타 gear; Arcana path to skill 20 via chalice/parchment/rings (savetip + 하구 videos). Post–May 2026 transcend sets (징벌/수호/불굴) shifted Arcana recommendations — see 하구 Arcana video link in Inven guide.",
    },
    { type: "p", text: "**Do not** copy Sep Understanding/manastone tables as day-1 global." },
  ],
  macros: [
    {
      type: "ul",
      items: [
        "Official Skill Macro only (no mouse software) — SoT week-one voice.",
        "**SoT:** Hold staff Weak/Strong weave (spirit cancel). Do **not** put mantras or Barrier in hold sequence.",
        "Hand-press: mantras (불패의 진언 / 질풍의 권능), staff dash (돌진 격파), heal chant (쾌유의 주문). Reservation on in PvE so mantras stay up.",
        "**KR:** 평캔 / minimize-macro-lines / external mash culture is **ahead of global week-one** — do **not** contradict SoT “official Skill Macro only” on week-one pages. Inven 하구 prefers official in-game Skill Macro once improved.",
      ],
    },
  ],
  writtenSources: [
    { title: "SoT classes (Chanter panel)", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "Inven 하구 (무무야자자) long-form PvE", url: "https://www.inven.co.kr/board/aion2/6451/116", region: "KR", confidence: "Long-updated (still 수정중)", date: "through mid-2026" },
    { title: "Inven skill placement / settings", url: "https://www.inven.co.kr/board/aion2/6451/21630", region: "KR", confidence: "Settings", date: "(pack)" },
    { title: "Vortex Aug 26 skill rework", url: "https://vortexgaming.io/postdetail/1255908", region: "KR", confidence: "암격쇄 rework + stigma 25", date: "Aug 2026" },
    { title: "Vortex Sep optimize", url: "https://vortexgaming.io/postdetail/1273940", region: "KR", confidence: "Minimize macro / Marchutan optional", date: "Sep 2026" },
    { title: "Vortex Sep 2 Chanter+Templar", url: "https://vortexgaming.io/postdetail/1259501", region: "KR", confidence: "Analysis", date: "Sep 2026" },
    { title: "savetip Chanter PvE skill", url: "https://game.savetip.co.kr/aion2-chanter-pve-skill-build/", region: "KR", confidence: "Skill tree; **stigma section conflicts with Inven — label**", date: "2026-07-28" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/chanter", region: "Global client EN", confidence: "Client string list", date: "Scale Test 2026-09-19" },
    { title: "Inven class intro / Skill Macro (SoT cites)", url: "https://www.inven.co.kr/webzine/news/?news=311205", region: "KR", confidence: "Intro / macro", date: "(pack)", notes: "Also https://www.inven.co.kr/board/aion2/6444/1257" },
  ],
  videoSources: [
    { title: "빵호빵 — 호법님들 울지마세요 / 9/17 최적화", url: "https://www.youtube.com/watch?v=3sdplN_vesA", region: "KR", notes: "Strongest recent KR optimize; matches Vortex 1273940; Inven 6451/22932" },
    { title: "하구 — 평캔 theory", url: "https://www.youtube.com/watch?v=liqn9iQrj7M", region: "KR", notes: "Foundational cancel; linked from Inven 6451/116" },
    { title: "Vortex Aug 26 (via post)", url: "https://vortexgaming.io/postdetail/1255908", region: "KR", notes: "암격쇄 rework + stigma 25 priority tables" },
  ],
  footnotes: [
    { sot: "unbreakable mantra / 불패의 진언", hub: "Undefeated Mantra" },
    { sot: "haste/crit mantra / 질풍의 권능", hub: "Power of the Storm" },
    { sot: "staff dash / 돌진 격파", hub: "Rushing Smash" },
    { sot: "heal chant / 쾌유의 주문", hub: "Recuperation *(uncertain vs Healing Touch — footnote)*" },
    { sot: "Barrier Spell (결계의 주문)", hub: "Barrier Spell" },
    { sot: "격파쇄", hub: "Onslaught *(uncertain — Hub first attack; do not invent)*" },
    { sot: "암격쇄", hub: "Dark Crush" },
    { sot: "백열격", hub: "Incandescent Blow" },
    { sot: "파동격", hub: "Wave Blow" },
    { sot: "회전격", hub: "Spinning Strike" },
    { sot: "질주의 진언", hub: "Sprint Mantra" },
    { sot: "마르쿠탄의 분노", hub: "Marchutan's Wrath" },
    { sot: "쾌유의 손길", hub: "Healing Touch" },
    { sot: "수호의 축복", hub: "Guardian Blessing" },
    { sot: "분쇄격", hub: "Fracturing Blow" },
    { sot: "집중 방어", hub: "Focused Defense" },
    { sot: "차단의 권능", hub: "Impeding Authority" },
  ],
  footnoteLead:
    "Where Global-client EN (AION2 Hub) differs from SoT body names, keep SoT in body. Hangul-only skills stay hangul until SoT adds EN.",
  footnoteNote: "Do **not** invent a merged EN name. Final display remains SoT EN + (한글) until Nhat changes canon.",
  gaps: [
    "SoT EN missing for 격파쇄 / 암격쇄 / 백열격 / 파동격 / 회전격 / 질주의 진언 / 마르쿠탄의 분노 / 쾌유의 손길 / 수호의 축복 / 분쇄격 / 집중 방어 / 차단의 권능",
    "격파쇄 ↔ Hub Onslaught map **uncertain** — do not invent",
    "쾌유의 주문 ↔ Recuperation vs Healing Touch Hub conflict",
    "Week-one stigma: SoT Barrier vs KR mantra 25s — must stay split",
    "savetip stigma conflict unresolved",
    "Pantheon detail; NotMeter Chanter snapshot",
    "Global Arcana thinner than KR",
    "Week-one global numeric gear/stat/manastone boards",
  ],
};
