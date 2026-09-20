import type { ClassDeepGuide } from "@/lib/classDeep";

export const templar: ClassDeepGuide = {
  slug: "templar",
  name: "Templar",
  kr: "수호성",
  role: "Main tank",
  roleTone: "tank",
  weapons: "Sword + shield (one-hander — AION 1 greatsword-swap is not this class)",
  portrait: "/classes/templar-icon.webp",
  portraitAlt: "Templar class icon",
  largePortrait: "/classes/templar-large.webp",
  identity:
    "Capture → Taunt → face away; Banner as fight buff; Judgment→20 for personal damage; groggy dump Empyrean Lord’s Punishment (주신의 징벌) + charged 파멸의 방패",
  overviewFields: [
    ["Role", "Main tank"],
    ["Weapons", "Sword + shield (one-hander — **AION 1 greatsword-swap is not this class**)"],
    [
      "Fantasy one-liner",
      "Capture → Taunt → face away; Banner as fight buff; Judgment→20 for personal damage; groggy dump Empyrean Lord’s Punishment (주신의 징벌) + charged 파멸의 방패",
    ],
    ["Difficulty", "Beginner-friendly dungeon demand; personal meter is not the job"],
    ["Week-one fit", "Groups take Templar because the boss looks at them. Always get a dungeon slot — Templar or Cleric"],
    ["Common miss", "Ranking Templar on DPS chart; AFK tank / never parry; bringing AION 1 greatsword-swap habits"],
    [
      "Do not",
      "Teach banned external mouse macros on week-one voice; treat Brawler as a day-1 global substitute (Brawler is not one of the day-1 eight)",
    ],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Main tank; Sword + shield. Hold face / pull / peel; personal meter is not the job. Groups take Templar because the boss looks at them.",
    },
    {
      type: "p",
      text: "**PvE fantasy (SoT):** Pull lead — Capture (포획) yanks · Taunt (도발) pins · face boss away · Shield of Protection (보호의 방패) + timed parry · groggy: Empyrean Lord’s Punishment (주신의 징벌) + charged 파멸의 방패 · peel adds off healer. **Battlefield Banner (전장의 깃발)** = fight buff, not panic.",
    },
    {
      type: "p",
      text: "**PvP fantasy (SoT):** Capture or Shield Rush (방패 돌격) → CC → smash; missed air grab = wait (no second close); peel Cleric; live+lock > chase Ranger.",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "SoT does **not** publish a numeric Templar stat board this run → week-one numeric gear/stat board = **UNKNOWN / gap**.",
    },
    {
      type: "p",
      text: "Daevanion direction only (confirmed): Nezekan combat speed + CD → attack / defense / HP; crit after pack hold.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "Inven Daevanion Roah 2026-07-02 (Lv50 board)",
          "White-node PvE example: attack → defense → HP → crit → crit resist (MP last). Cap-aware: crit can deprioritize once gear near cap. Save points by skipping unused groggy oranges / Zikel hit-eva twigs.",
        ],
        [
          "Vortex Sep (Templar+Glad 1262116)",
          "Gear — damage amp / crit damage / 강타 first; manastones often front/weapon amp; Pantheon realistic high 환상 ~50 / 지혜 (shared wording with other classes).",
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
        "Taunt (도발), Capture (포획), Shield of Protection (보호의 방패) — hold a pack before damage",
        "Push **Judgment (심판) toward 20** — can be most of tank personal damage",
        "Peel / CC so healer is not eating extras",
        "Personal damage last, once boss stays on you",
      ],
    },
    {
      type: "p",
      text: "**Daevanion skill targets (SoT):** Taunt, Capture, Shield of Protection, Judgment — **Judgment→20 first** skill-level target.",
    },
    {
      type: "p",
      text: "**Site-wide SoT note:** Templar Judgment (심판) and Gladiator Overhead Slam (내려찍기) can be most of that class’s personal damage from one button; Global Arcana thinner than KR — lock key skills early.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Inven 조각난개념 (updated 2026-04-09):**",
    },
    {
      type: "ul",
      items: [
        "To 20 priority opinion: Judgment → Vicious Strike (맹렬한 일격, LMB) → Pummel (연속 난타, RMB)",
        "Specs cited: Vicious Strike 20 (3,4,5); Pummel 20 (2,3,4) or (2or3,4,5); Judgment 20 (3,4,5); Punishment 12 buff-only or 20 damage; 섬멸 20 optional; 쇠약의 맹타 16; Warding Strike (비호의 일격) 16",
        "Passives called out: ★격앙★, 철벽방어, 단죄의 가호, 충격 적중, 고통 차단, 체력 강화",
      ],
    },
    { type: "p", text: "**Vortex Sep (연심 / 맹연심 / 맹심):**" },
    {
      type: "ul",
      items: [
        "**연심:** Judgment 20 + Pummel 20 fixed; Punishment 16–20; Vicious Strike not required to 20 in 연심-meta posts",
        "**맹연심:** Judgment 20 + Pummel 20; Vicious Strike optional",
        "**맹심/좌심:** Pummel 20 + Judgment 20 + Vicious Strike 20; Punishment 20 or 섬멸 20 flex; recommend only ~4 actives to 20 to protect passives",
      ],
    },
    {
      type: "p",
      text: "**Confidence:** Judgment→20 + tank trio first = **Global-confirmed**. Exact 연심 vs 맹심 20-order = **KR dated Sep 2026**.",
    },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Pull, face, hold. **Battlefield Banner (전장의 깃발)** up as fight buff. Weave basics between taunts/blocks. Groggy: dump Empyrean Lord’s Punishment (주신의 징벌) + charged 파멸의 방패. Between windows: peel adds. Parry/block = cancel habit.",
    },
    {
      type: "p",
      text: "**SoT macro:** Official Skill Macro Weak = Vicious Strike (맹렬한 일격) alternating Strong; Judgment line: Judgment (심판) → Warding Strike (비호의 일격) → Shield Smite (방패 강타) → Pummel (연속 난타). Hand: Taunt, Capture, Banner, Shield of Protection, Empyrean Lord’s Punishment (주신의 징벌), charged 파멸의 방패. Reservation on in long PvE. Delay floor 50 ms.",
    },
    {
      type: "p",
      text: "**First habit (day 1):** Hold face / pull / peel — Banner is a fight buff, not a panic button. Practice timed parry.",
    },
    { type: "h3", text: "PvE — KR live (ahead of global) — dated separately (do not merge eras)", region: "kr" },
    {
      type: "p",
      text: "**Inven Apr:** Skill reservation on + LMB/Judgment cancel preferred by author; RMB line often Punishment + Judgment + Pummel (Punishment sometimes hand-fired).",
    },
    {
      type: "p",
      text: "**Vortex Sep:** In-game Skill Macro only (author states no mouse macro for Templar in 1261186). 연심 = more 응징의 일격 hits → more Punishment CD pulls; 맹연심 = Judgment-main, fewer Punishment casts. High combat-speed favors 연심 high-point. Post–Sep 4 care: Punishment lifesteal helps 연심 sustain.",
    },
    {
      type: "p",
      text: "**Confidence:** Hold-face-parry **confirmed**. KR 연심 cancel cycles = **KR** — do not teach external mouse macros on week-one voice (SoT = official Skill Macro only).",
    },
    { type: "h3", text: "PvP" },
    {
      type: "p",
      text: "**SoT Global-confirmed:** Capture / Shield Rush open → CC → smash; peel Cleric; do not chase sky Ranger after miss.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        [
          "Battlefield Banner (전장의 깃발)",
          "Fight buff (not panic)",
          "Turns defense into extra offense; SoT week-one stigma callout",
          "Global-confirmed framing",
        ],
      ],
    },
    {
      type: "p",
      text: "SoT panel is incomplete vs KR 5-slot tank set — do not treat Banner as the full set. Taunt / Shield of Protection are core skills on SoT leveling; KR lists them as stigmas — keep that split.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Essential fixed (Inven 6438/6625 Apr):** ★Taunt (도발)★ · ★Shield of Protection (보호의 방패)★",
    },
    {
      type: "p",
      text: "**Flex 3 (same guide):** Empyrean Lord’s Punishment · 전우 보호 · 네자칸의 방패 · 고결의 갑주 · 파멸의 방패 · Battlefield Banner",
    },
    {
      type: "p",
      text: "Author’s own set example: Taunt + Shield of Protection + Empyrean Lord’s Punishment + 파멸의 방패 + Banner.",
    },
    { type: "p", text: "**Lv20 stigma summaries (KR Inven Apr):**" },
    {
      type: "ul",
      items: [
        "Empyrean Lord’s Punishment — groggy damage + self damage amp",
        "Banner — defense-scaled attack, crit, multi-hit",
        "파멸의 방패 — groggy chip + Judgment force-activate dash",
        "고결의 갑주 — defense/block/HP/heal-taken self buff",
        "전우 보호 / Nezekan — party care",
      ],
    },
    { type: "p", text: "**Writer split:** Week-one stigma = Battlefield Banner (SoT). Full KR 5-slot = **label KR**." },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Walk from center; blue skill nodes on Taunt / Capture / Shield of Protection / Judgment; **Judgment→20 first**. Nezekan first (speed+CD) → attack / defense / HP; crit after hold; skip spirit/crit-resist twigs early; one groggy active enough.",
    },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "Inven Roah Jul 2026: Point-budget method for Lv50 (706p typical after quests vs 840p full 4 boards); Templar PvE example prioritizes attack + defense + HP; drop unused groggy oranges and Zikel hit/eva.",
    },
    { type: "p", text: "Exact node map images = **gap**. Direction (Judgment→20 + Nezekan) aligns SoT + KR." },
  ],
  pantheon: [
    { type: "h3", text: "Week-one global", region: "week-one" },
    { type: "p", text: "Global Pantheon availability at launch = **UNKNOWN**." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "table",
      headers: ["Source", "Picks"],
      rows: [
        [
          "Vortex Sep Templar+Glad 1262116",
          "Realistic high **환상 ~50 / 지혜** (same ballpark as other class Sep packs)",
        ],
      ],
    },
    {
      type: "p",
      text: "Class-exclusive Templar Pantheon table beyond that = **UNKNOWN / gap**. General structure (colossus > statues > paintings) = shared KR guides — not Templar-exclusive.",
    },
  ],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        ["Story / leveling", "Hold packs; learn parry", "No Templar-specific SoT gear list", "**UNKNOWN / gap** (Global SoT)"],
        [
          "Week-one dungeon",
          "Shield + sword; boss stays on you",
          "Numeric manastone boards not published for global",
          "**UNKNOWN**",
        ],
        ["Toward BiS", "—", "KR endgame only below; never as day-1", "KR labeled"],
      ],
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Inven Apr Arcana example:** Chalice vitality (Siel combat speed / 강타 resist); compass vitality (Vaizel hit/eva) or pure (Triniel crit); parchment pure (Marchutan MP/iron) or vitality (Yustiel HP); bell/scales pure (Zikel attack); mirror pure (Lumiel MP cost / 강타). Frenzy set called out as vitality substitute after Mar Arcana update.",
    },
    {
      type: "p",
      text: "**KR Sep:** Damage-amp / crit-damage / 강타 gear; front or weapon damage-amp manastones common in tank DPS builds.",
    },
    {
      type: "p",
      text: "**Warn:** AION 1 greatsword-swap guides do not apply. Do not copy Sep Understanding/manastone tables as day-1 global.",
    },
  ],
  macros: [
    { type: "ul", items: [
      "Official Skill Macro only (no mouse software) — SoT week-one voice.",
      "**SoT:** Weak = Vicious Strike (맹렬한 일격) alternating Strong; Judgment line: Judgment → Warding Strike → Shield Smite → Pummel.",
      "Hand-press: Taunt, Capture, Battlefield Banner, Shield of Protection, Empyrean Lord’s Punishment (주신의 징벌), charged 파멸의 방패. Reservation on in long PvE. Delay floor 50 ms.",
      "**KR:** 연심 cancel / external mash culture is **ahead of global week-one** — do **not** contradict SoT “official Skill Macro only” on week-one pages. Vortex Sep Templar posts state in-game Skill Macro only.",
    ] },
  ],
  writtenSources: [
    { title: "SoT classes (Templar panel)", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "Inven 조각난개념 PvE skills/stigmas/Arcana", url: "https://www.inven.co.kr/board/aion2/6438/6625", region: "KR", confidence: "Strong written", date: "2026-04-09" },
    { title: "Inven Templar macro (SoT cites)", url: "https://www.inven.co.kr/board/aion2/6438/25786", region: "KR", confidence: "Macro", date: "(pack)" },
    { title: "Inven Templar Daevanion Lv50", url: "https://www.inven.co.kr/board/aion2/6438/18539", region: "KR", confidence: "Point budget", date: "2026-07-02" },
    { title: "Inven 연심캔 macro share", url: "https://www.inven.co.kr/board/aion2/6438/24397", region: "KR", confidence: "Macro share", date: "(pack)" },
    { title: "Vortex Sep Templar+Glad", url: "https://vortexgaming.io/postdetail/1262116", region: "KR", confidence: "Post–Sep-4/9 builds", date: "Sep 2026" },
    { title: "Vortex 연심 vs 맹연심", url: "https://vortexgaming.io/postdetail/1261186", region: "KR", confidence: "Specialty tables", date: "post–Sep-4" },
    { title: "Vortex macro 맹심/맹연심/연심", url: "https://vortexgaming.io/postdetail/1261184", region: "KR", confidence: "Macro lines", date: "Sep 2026" },
    { title: "Vortex Sep 2 patch 연심 vs 좌심", url: "https://vortexgaming.io/postdetail/1257732", region: "KR", confidence: "Patch delta", date: "Sep 2026" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/templar", region: "Global client EN", confidence: "Client string list", date: "Scale Test 2026-09-19" },
    { title: "NC Mar 2026 (SoT cites)", url: "https://about.ncsoft.com/en/news/article/aion2_update_260325", region: "Official", confidence: "Patch note", date: "Mar 2026" },
    { title: "Gamevu EN (SoT cites)", url: "https://www.gamevu.co.kr/news/articleView.html?idxno=52385", region: "EN coverage", confidence: "Secondary", date: "(pack)" },
  ],
  videoSources: [
    { title: "수호성 시작가이드", url: "https://www.youtube.com/watch?v=IVPHuSFogcc", region: "KR", notes: "Newbie operation/skills/settings overview" },
    { title: "Vortex 연심 vs 맹연심 (via post)", url: "https://vortexgaming.io/postdetail/1261186", region: "KR", notes: "Dated Sep-4 specialty tables" },
    { title: "Vortex Templar+Glad Sep (via post)", url: "https://vortexgaming.io/postdetail/1262116", region: "KR", notes: "Post–Sep patch setting comparison" },
  ],
  footnotes: [
    { sot: "Capture (포획)", hub: "Grapple" },
    { sot: "Taunt (도발)", hub: "Taunt *(Hub prose also “Provoke” — footnote)*" },
    { sot: "Shield of Protection (보호의 방패)", hub: "Shield of Protection" },
    { sot: "Empyrean Lord’s Punishment (주신의 징벌)", hub: "Empyrean Lord's Punishment" },
    { sot: "파멸의 방패", hub: "Doom Shield" },
    { sot: "Shield Rush (방패 돌격)", hub: "Shield Rush" },
    { sot: "Battlefield Banner (전장의 깃발)", hub: "Battlefield Banner" },
    { sot: "Judgment (심판)", hub: "Judgment" },
    { sot: "Vicious Strike (맹렬한 일격)", hub: "Vicious Strike" },
    { sot: "Warding Strike (비호의 일격)", hub: "Warding Strike" },
    { sot: "Shield Smite (방패 강타)", hub: "Shield Smite" },
    { sot: "Pummel (연속 난타)", hub: "Pummel" },
    { sot: "Punishment (징벌)", hub: "Punishment" },
    { sot: "섬멸", hub: "Annihilate" },
    { sot: "전우 보호", hub: "Comrade in Arms" },
    { sot: "네자칸의 방패", hub: "Nezekan's Shield" },
    { sot: "고결의 갑주", hub: "Noble Armor" },
    { sot: "쇠약의 맹타", hub: "Debilitating Smash" },
    { sot: "응징의 일격", hub: "Punishing Strike *(uncertain map — footnote)*" },
    { sot: "섬광 난무", hub: "Flash Rampage" },
  ],
  footnoteLead:
    "Where Global-client EN (AION2 Hub) differs from SoT body names, keep SoT in body. Hangul-only skills stay hangul until SoT adds EN.",
  footnoteNote: "Do **not** invent a merged EN name. Final display remains SoT EN + (한글) until Nhat changes canon.",
  gaps: [
    "SoT EN missing for 섬멸 / 전우 보호 / 고결의 갑주 / 쇠약의 맹타 / 응징의 일격 / 섬광 난무",
    "Capture↔Grapple and Taunt↔Provoke Hub prose conflict — footnote only",
    "Week-one stigma beyond Banner (Taunt/Shield are core skills on SoT but KR lists them as stigmas — keep split)",
    "Global gear / Arcana thinner than KR",
    "Pantheon full Templar board",
    "NotMeter Templar parse snapshot this run",
    "PvP stigma set distinct from PvE (principles only)",
    "Week-one global numeric gear/stat/manastone boards",
  ],
};
