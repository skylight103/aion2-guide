import type { ClassDeepGuide } from "@/lib/classDeep";

export const sorcerer: ClassDeepGuide = {
  slug: "sorcerer",
  name: "Sorcerer",
  kr: "마도성",
  role: "Ranged magic burst DPS",
  roleTone: "magic",
  weapons: "Spellbook",
  portrait: "/classes/sorcerer-icon.webp",
  portraitAlt: "Sorcerer class icon",
  largePortrait: "/classes/sorcerer-large.webp",
  identity: "Lock, then nuke — ice root/freeze into Curse Tree → Hellfire",
  overviewFields: [
    ["Role", "Ranged magic burst DPS"],
    ["Weapons", "Spellbook"],
    ["Fantasy one-liner", "Lock, then nuke — ice root/freeze into Curse Tree → Hellfire"],
    ["Difficulty", "High burst, low forgiveness (glass-cannon)"],
    ["Week-one fit", "Strong if you want classic caster burst and can live with a thin HP pool"],
    ["Common miss", "Standing still through casts / missing the lock before the nuke"],
    ["Do not", "Pick this if you need a forgiving HP pool; Brawler is not one of the day-1 eight"],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Ranged magic burst. Ice root/freeze → Curse Tree (저주 나무) → Hellfire (지옥불); weave fire basic Flame Arrow (불꽃 화살). High burst, low forgiveness. Skip if you need a forgiving HP pool.",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "SoT does **not** publish a numeric Sorcerer stat board this run → week-one numeric gear/stat board = **UNKNOWN / gap**.",
    },
    { type: "p", text: "Daevanion direction only (confirmed): Nezekan combat speed & CD → attack → crit." },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "tamagotch Jul 2026",
          "Accuracy/hit → cooldown reduction → crit / crit damage → cast helpers → HP/DR → move speed. Accuracy framed as “cast value = hit.”",
        ],
        [
          "Vortex Sep 2026 week-3 / Nightmare 37s",
          "Manastone when attacking from front: front damage amp → attack 35 → weapon damage amp 30 → damage amp; HP on gear tune mandatory. Fire Mark low priority. Understanding (이해도): Extreme Strike/강타 ≥2.2% ×9+ first; front-amp set as alt when front hit ~100%. Floor skills only partially take front/rear amp (~85%). Below ~40% front-amp, front-amp > 강타.",
        ],
      ],
    },
    { type: "p", text: "**Do not** paste Sep Nightmare manastone tables into day-1 global checklists." },
  ],
  sp: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "ol",
      items: ["Fire nuke + ice lock", "Curse Tree (저주 나무)", "Hibernation (동면) + extra ice"],
    },
    {
      type: "p",
      text: "Daevanion skill nodes called out on SoT: Flame Arrow (불꽃 화살), Ice Chains (얼음 사슬), Flame Harpoon (불꽃 작살), Hellfire (지옥불).",
    },
    {
      type: "p",
      text: "Global Arcana is thinner than KR (SoT) — expect fewer skill-point sinks week-one.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "Hangul-first (+ SoT EN where the skill also appears on SoT). **Vortex fan-EN is not body primary** — see footnote box at end of this appendix.",
    },
    { type: "p", text: "**Newbie (Vortex post 724101, post Mar 25 balance):**" },
    {
      type: "ol",
      items: [
        "불꽃 폭발 → 20; Flame Arrow (불꽃 화살) → 16; 집중의 기도 → 16",
        "눈보라 → 20",
        "Ice Chains (얼음 사슬) → 20; 겨울의 손아귀 → 16",
        "Flame Harpoon (불꽃 작살) / 지옥불 계열 flexible (Harpoon usable at 0)",
      ],
    },
    {
      type: "p",
      text: "**Veteran fixed:** 불꽃 폭발 20, 눈보라 20, Ice Chains 20; 지옥불 계열 20 standard; 집중의 기도 / Flame Harpoon / 겨울의 손아귀 16 vs 20 optional (check attack-power cap).",
    },
    { type: "p", text: "**tamagotch Jul 2026:**" },
    {
      type: "ul",
      items: [
        "To 16: 불꽃 폭발 → 집중의 기도 → Flame Harpoon → 지옥불 계열 → 겨울의 손아귀",
        "To 20: 불꽃 폭발 → 집중의 기도 → Flame Arrow → Flame Harpoon → 지옥불 계열",
        "지옥불 계열: **1-charge only** (full charge only if boss stands still)",
        "Must: 불꽃 폭발 → 20",
      ],
    },
    {
      type: "p",
      text: "**Inven 깐깐한네임 (updated through 1/15):** ★ pre-16 actives: Flame Arrow, Ice Chains, 매서운 바람, 불꽃 폭발, 집중의 기도; 불꽃 폭발 **20 required**; post-16 rebuild after Flame Arrow 16.",
    },
    { type: "p", text: "Multiple KR sources agree **불꽃 폭발 → 20 first**." },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Ice root/freeze → Curse Tree (저주 나무) → Hellfire (지옥불); weave Flame Arrow (불꽃 화살). Move on many casts but stay frail.",
    },
    {
      type: "p",
      text: "**Cancel habit:** Official Skill Macro — hold Weak (Flame Arrow) into Strong (SoT). KR written guides + Harukyu also describe LMB Flame Arrow immediately into RMB/skill.",
    },
    { type: "p", text: "**First habit (day 1):** Lock first, then nuke — never open Hellfire cold." },
    { type: "h3", text: "PvE — KR live (ahead of global) — dated separately (do not merge eras)", region: "kr" },
    { type: "p", text: "Hangul-first. Vortex EN only in the footnote box below." },
    { type: "p", text: "**Vortex Mar (post-balance):**" },
    {
      type: "p",
      text: "Intro: 지연 폭발 just before tank hits (no aggro) → 원소 강화 → 화염 보호막 + 냉기 폭풍 → 눈보라 → 겨울의 손아귀 on multi-hit phase → (빙하 일격 if taken) → 지옥불 계열 3-charge → 집중의 기도 reset.",
    },
    {
      type: "p",
      text: "Normal: always pair 눈보라 → 지연 폭발; hold AA-cancel macro (LMB / RMB Ice Chains / Flame Harpoon+불꽃 폭발); 겨울의 손아귀 + 지옥불 계열 on CD; cast 지옥불 before 겨울의 손아귀 debuff ends.",
    },
    {
      type: "p",
      text: "**tamagotch Jul (16+):** 집중의 기도 → 매서운 바람 → 지연 폭발 → 지옥불 계열 → 겨울의 손아귀 → Flame Harpoon → 불꽃 폭발 → LMB/RMB cancel loop.",
    },
    {
      type: "p",
      text: "Opening (20): 원소 강화 → 매서운 바람 → 지연 폭발 → 지옥불 계열 → 집중의 기도 & LMB & one-button → (겨울의 손아귀) → …",
    },
    {
      type: "quote",
      text: "**Vortex / KR-guide EN footnotes (not body primary):** Flame Burst = 불꽃 폭발 · Blizzard = 눈보라 · Winter’s Grasp = 겨울의 손아귀 · Prayer of Focus = 집중의 기도 · Infernal Flame ≈ 지옥불 계열 (do **not** merge with SoT Hellfire without a source) · Delayed Explosion = 지연 폭발 · Elemental Boost = 원소 강화 · Frost Storm = 냉기 폭풍 · Flame Barrier = 화염 보호막 · Bitter Wind = 매서운 바람 · Glacial Strike = 빙하 일격. Cite Vortex 724101 / 1274619 in Sources.",
    },
    { type: "h3", text: "PvP" },
    { type: "p", text: "**SoT Global-confirmed:** Root/freeze/tree then burst; Hibernation (동면) = panic, not win condition." },
    {
      type: "p",
      text: "**KR digwow Jul (principle):** soft CC → main cast → instant correct → half-step leave; air: glide angle cast → drop burst → leave. Arena/Rift/Abyss scripts differ.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        ["Hibernation (동면)", "Panic / about to die", "SoT week-one stigma callout only", "Global-confirmed framing"],
      ],
    },
    { type: "p", text: "SoT panel is incomplete vs KR 4-stigma endgame — do not treat Hibernation as the full set." },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "Hangul-first. Vortex EN for these stigma names lives in the cycle footnote box above (and Sources) — not as body primary.",
    },
    {
      type: "p",
      text: "**Essential (tamagotch Jul + Vortex Mar):** 지연 폭발, 강철 보호막, 원소 강화, 냉기 폭풍 — often to 10+; Vortex pushes 원소 강화 / 화염 보호막 / 지연 폭발 / 냉기 폭풍 to **20**.",
    },
    {
      type: "p",
      text: "**Optional:** 강철 보호막 vs 빙하 일격 (~2% share after buff); 신성 폭발 for groggy; 화염 보호막 (testing); 빙설의 갑주 for hard content.",
    },
    {
      type: "p",
      text: "**Vortex Sep high-point vs stable:** High: 원강+불장+냉폭 25 + 지연/빈갑; Stable: 원강+불장+빈갑 25 + 지연 냉폭 + 강보. 냉폭 25 ≈ +0.123% final; party level-sync bug noted.",
    },
    {
      type: "quote",
      text: "**Stigma Vortex EN map:** Delayed Explosion = 지연 폭발 · Iron Shield = 강철 보호막 · Elemental Boost = 원소 강화 · Frost Storm = 냉기 폭풍 · Flame Barrier = 화염 보호막 · Glacial Strike = 빙하 일격 · Sacred Explosion = 신성 폭발 · Snow Armor = 빙설의 갑주.",
    },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    { type: "p", text: "Skill nodes: Flame Arrow / Ice Chains / Flame Harpoon / Hellfire." },
    { type: "p", text: "Nezekan combat speed + CD first → attack → crit. Skip extra ice until Hibernation + Curse Tree are on." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "tamagotch: Blue skill+1 nodes shortest path; focus 4 damage skills (Flame Arrow, Ice Chains, Flame Harpoon, 불꽃 폭발). Constellations: Nezekan (atk/crit) → Zikel (CDR/MP) → Vaizel (survive/shield) → Triniel (damage on core 4).",
    },
    {
      type: "p",
      text: "Exact node map images = **gap** (not transcribed this run). Direction (Nezekan + core skill blues) aligns SoT + KR.",
    },
  ],
  pantheon: [
    { type: "h3", text: "Week-one global", region: "week-one" },
    { type: "p", text: "Global Pantheon availability at launch = **UNKNOWN**." },
    { type: "h3", text: "KR live (ahead of global) — Sorcerer-specific", region: "kr" },
    {
      type: "table",
      headers: ["Source", "Picks"],
      rows: [
        [
          "Inven sorcerer",
          "Colossus = Chromede’s Desire **or** Zikel’s Thoughtform; statue = Transcendent Bakarma; other slots death/space/freedom; paintings with **Wisdom** (강타 chance — “at least 2× crit damage”)",
        ],
        [
          "Vortex Sep",
          "Colossus Atheron (거상 아테론); unique statues stacked; paintings Illusion+Wisdom fixed; wing = CDR wing; titles fight-dependent",
        ],
      ],
    },
    {
      type: "p",
      text: "General Pantheon structure (madimi / savetip): colossus > statues > paintings; PvE attack/crit/CD; presets PvE/PvP/farm — **not class-exclusive**.",
    },
  ],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        ["Story / leveling", "Survive story mobs", "No Sorcerer-specific SoT gear list", "**UNKNOWN / gap** (Global SoT)"],
        ["Week-one dungeon", "Weapon first unless dying", "Numeric manastone/gear boards not published for global", "**UNKNOWN**"],
        ["Toward BiS", "—", "KR endgame only below; never as day-1", "KR labeled"],
      ],
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**tamagotch:** Accuracy first; then CDR, crit, cast helpers, HP, MS. Arcana craft path to skill 20 via parchment/chalice/ring (example table in guide).",
    },
    {
      type: "p",
      text: "**Vortex Sep:** Gear tune HP mandatory; 4-guardian + 4-punishment sets; key/hourglass/dice/lantern Arcana mix; skill-option tables per skill (KR abbreviations in video).",
    },
    { type: "p", text: "**Do not** copy Sep Nightmare manastone tables as day-1 global." },
  ],
  macros: [
    {
      type: "ul",
      items: [
        "Official Skill Macro only (no mouse software): hold Weak = Flame Arrow (불꽃 화살) into Strong (SoT).",
        "KR cancel: LMB Flame Arrow immediately into RMB/skill (written guides + Harukyu).",
        "Keep Hibernation (동면) on a panic key, not buried in a spam chain.",
      ],
    },
  ],
  writtenSources: [
    { title: "SoT classes (Sorcerer panel)", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "Inven 마도성", url: "https://www.inven.co.kr/board/aion2/6453/66", region: "KR PvE", confidence: "Community long-updated", date: "through 1/15 lineage" },
    { title: "tamagotch skill/stigma/Daevanion", url: "https://tamagotch.tistory.com/1537", region: "KR", confidence: "Strong written", date: "2026-07-29" },
    { title: "Vortex EN Mar-balance PvE", url: "https://vortexgaming.io/en/postdetail/724101", region: "KR→EN (Vortex fan-EN)", confidence: "Structured KR transcript", date: "post Mar 25 balance" },
    { title: "Vortex KR Sep Nightmare", url: "https://vortexgaming.io/postdetail/1274619", region: "KR endgame", confidence: "Current KR high-end", date: "Sep 2026 week-3" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/sorcerer", region: "Global client EN", confidence: "Client string list", date: "Scale Test 2026-09-19" },
    { title: "Harukyu 평캔", url: "https://harukyu.tistory.com/65", region: "KR", confidence: "Older cancel note", date: "Nov 2025" },
  ],
  videoSources: [
    { title: "Vortex Mar-balance PvE (via post)", url: "https://vortexgaming.io/en/postdetail/724101", region: "KR→EN", notes: "Timestamped build/cycle" },
    { title: "Vortex Sep Nightmare 37s", url: "https://vortexgaming.io/postdetail/1274619", region: "KR", notes: "Full setting" },
    { title: "[아이온2] 마도성…6/17 밸런스 패치", url: "https://www.youtube.com/watch?v=v1AC7SgI7IU", region: "KR", notes: "Patch delta; channel not re-verified this fetch" },
  ],
  sourceNotes: ["**NotMeter:** https://notmeter.com/ — KR DPS meter tool; this run returned no class-usable samples. Label as meter, not a written guide."],
  footnotes: [
    { sot: "Flame Arrow (불꽃 화살)", hub: "Flame Arrow", vortex: "Flame Burst used for different skill in Vortex posts — do not merge" },
    { sot: "Ice Chains (얼음 사슬)", hub: "Ice Chain", vortex: "Blizzard / Winter’s Grasp appear in Vortex cycles" },
    { sot: "Flame Harpoon (불꽃 작살)", hub: "—", vortex: "Flame Harpoon" },
    { sot: "Hellfire (지옥불)", hub: "Hellfire / Firestorm (Hub lists Firestorm, Bittercold Wind, Wish of Concentration, Delayed Explosion, Element Enhancement, …)", vortex: "Infernal Flame, Prayer of Focus, Delayed Explosion" },
    { sot: "Hibernation (동면)", hub: "Hibernation", vortex: "—" },
    { sot: "Curse Tree (저주 나무)", hub: "—", vortex: "—" },
  ],
  footnoteLead:
    "Where Global-client EN (AION2 Hub) or Vortex fan-EN differs from SoT body names, keep SoT in body. Examples from the pack:",
  footnoteNote: "Do **not** invent a merged EN name. Final display remains SoT EN + (한글) until Nhat changes canon.",
  gaps: [
    "Week-one global numeric gear/stat/manastone boards",
    "Full Daevanion node map images",
    "Pantheon global unlock schedule",
    "Distinct PvP stigma set (only principles found)",
    "NotMeter top-parse stigma snapshot for 마도성 this run",
    "Official EN glossary SoT vs Hub still conflict-aware (body locked to SoT)",
  ],
};
