import type { ClassDeepGuide } from "@/lib/classDeep";

export const ranger: ClassDeepGuide = {
  slug: "ranger",
  name: "Ranger",
  kr: "궁성",
  role: "Ranged physical DPS",
  roleTone: "ranged",
  weapons: "Bow",
  portrait: "/classes/ranger-icon.webp",
  portraitAlt: "Ranger class icon",
  largePortrait: "/classes/ranger-large.webp",
  identity: "Distance = survivability; snare, Rapid Shot fill, heavy arrow finish",
  overviewFields: [
    ["Role", "Ranged physical DPS"],
    ["Weapons", "Bow"],
    ["Fantasy one-liner", "Distance = survivability; snare, Rapid Shot fill, heavy arrow finish"],
    ["Difficulty", "Beginner-friendly ranged option (with Spiritmaster) on SoT framing"],
    ["Week-one fit", "Range + open-world PvP comfort"],
    ["Common miss", "Panic when melee closes; forgetting Snare Arrow"],
    ["Do not", "Turret forever if the boss walks on you — fly out; Brawler is not one of the day-1 eight"],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Ranged physical DPS; bow; distance = survivability. Snare Arrow (올가미 화살) stops chase; Rapid Shot (속사) fills; Griffon Arrow heavy; Supporting Fire (지원 사격) when party stacked. Beginner-friendly ranged option with Spiritmaster. Skip if you panic in melee.",
    },
    {
      type: "p",
      text: "**KR live note (identity, not day-1):** Not pure turret — AA cancel + back-attack sustained DPS; Target Arrow armor shred uptime; groggy burst windows. Gale / 광풍 Arrow evaluation flipped after becoming instant + combat-speed buff (see SP conflict dated below).",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    { type: "p", text: "Exact global thresholds = **UNKNOWN**." },
    {
      type: "p",
      text: "Daevanion (confirmed direction): Nezekan combat speed + CD first (Ranger = class official Skill Macro was built for) → attack + crit.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "tamagotch 2026-09-07 + savetip Jul",
          "Content-required **accuracy/hit first** → weapon damage / combat speed → crit damage → move speed. Weapon+guarder: combat speed, weapon damage amp, power/accuracy, multi-hit. Gloves combat speed; boots move speed",
        ],
        [
          "savetip",
          "Rudra accuracy band ~1350–1400 cited to avoid parry loss (**KR dungeon — not global**)",
        ],
      ],
    },
    { type: "p", text: "Hit→speed→crit = **KR/likely**. Do not paste KR accuracy bands as global week-one targets." },
  ],
  sp: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    { type: "p", text: "Rapid Shot + snare → heavy arrow → luxury arrows last." },
    { type: "p", text: "Daevanion: Rapid Shot + Aimed Arrow → Snare Arrow." },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    { type: "p", text: "**Consensus core to 20:** Sniper / 저격 (LMB), Rapid Shot (속사) (RMB), Aimed Arrow (조준 화살)." },
    { type: "p", text: "**tamagotch Sep 2026:**" },
    {
      type: "table",
      headers: ["Skill", "Target", "Notes"],
      rows: [
        ["저격", "20", "multi-hit / Aimed link / Gale arrow socket"],
        ["속사", "20", "top cumulative DPS"],
        ["조준 화살", "20", "skill speed, movable, max charge"],
        ["표적 화살", "12–16", "duration + def shred (uptime)"],
        ["파열 화살", "16–20", "reset / groggy"],
        ["제압 화살", "16", "reset"],
        ["송곳 화살", "12+", "**life steal** fixed for survive"],
        ["광풍 화살", "20", "combat-speed #4 fixed — **now core**"],
        ["화살 난사", "16", "−1s CD"],
      ],
    },
    { type: "h4", text: "Gale / 광풍 conflict — date both (do not blend)" },
    {
      type: "table",
      headers: ["Date / source", "Claim"],
      rows: [
        ["savetip **Jul 2026**", "**광풍 화살 사용 금지** unless 20 “coefficient monster”"],
        ["tamagotch **Sep 2026** + Inven 프레션 Feb 2026 experiments", "**광풍 20 recommended** (always cast; invest)"],
      ],
    },
    { type: "p", text: "Prefer Sep 2026+ when writing “current KR.” Keep Jul forbid labeled as older." },
    {
      type: "p",
      text: "**Inven Sep 2026 르네-inspired Arcana post:** 저격/속사 **held at 16** to push 올가미/송곳/광풍/조준 to 20 and Focused Eye+Hunter Resolve sum ~70 — **alternate Arcana-constrained path**, not universal SP order.",
    },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Snare → hold Rapid Shot (속사) → tap heavy; Supporting Fire (지원 사격) on stacked target; fly out if closed.",
    },
    { type: "p", text: "**First habit (day 1):** Snare before the chase starts; keep distance as the defense." },
    { type: "h3", text: "PvE — KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "Apply Target Arrow → buffs on groggy → Arrow Storm + Explosive Arrow → Aimed Arrow finish; sustain with 저격/속사 cancel; back-angle even at range.",
    },
    {
      type: "p",
      text: "Cancel: skill reservation **OFF** popular; hold RMB Rapid + mash LMB **or** alternate clicks (guides disagree — test dummy). Drill Arrow → Rapid cancel recovery.",
    },
    { type: "h3", text: "PvP" },
    { type: "p", text: "**SoT Global-confirmed:** Kite; snares/roots; flight = leave, not turret." },
    {
      type: "p",
      text: "**KR Vortex (궁성 PVP):** Crit + crit resist; drop some skills to gear crit resist; traps + kite; Void wing CDR/atk; vs Gladiator use traps; avoid high-resonance Spiritmasters.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        ["Supporting Fire (지원 사격)", "Party stacked on target", "SoT week-one stigma", "Global-confirmed framing"],
      ],
    },
    { type: "p", text: "Same split warning as Assassin/Sorcerer: SoT week-one ≠ KR national set." },
    { type: "h3", text: "KR live (ahead of global) — dated (tamagotch Sep + savetip)", region: "kr" },
    {
      type: "table",
      headers: ["Name", "Level target", "Notes"],
      rows: [
        ["Bow of Blessing / 축복의 활", "**15**", "Party crit damage"],
        ["Explosive Arrow / 폭발 화살", "**5**", "15s CDR; do **not** 10"],
        ["Arrow Storm / 화살 폭풍", "**1**", "Groggy + trash CC"],
        [
          "Vaizel’s Authority",
          "optional",
          "“chicken rib” long recovery; after attack cap consider Griffon Arrow / Ambush Kick swaps",
        ],
      ],
    },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    { type: "p", text: "Rapid Shot + Aimed Arrow nodes; Nezekan speed/CD; skip luxury-arrow twigs early." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "**Passive axis (KR confirmed — Inven Sep Arcana post still builds around them):** Focused Eye (집중의 눈) → Hunter’s Resolve (사냥꾼의 결의) → Hunter’s Soul → Concentrated Fire.",
    },
    {
      type: "p",
      text: "**goodman (older) / passives:** Vaizel crit-damage nodes, Zikel damage, Triniel multi-hit/resist — **dated blog with affiliate** — treat as **likely**, verify.",
    },
    { type: "p", text: "Full board = **gap**." },
  ],
  pantheon: [{ type: "p", text: "Ranger-specific Pantheon = **UNKNOWN / gap** this run." }],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        [
          "Story / leveling",
          "Weapon/guarder → gloves/boots → armor → accessories (tamagotch KR order)",
          "Global drop path",
          "**UNKNOWN** beyond SoT macro/reservation notes",
        ],
        ["Week-one dungeon", "Keep range; weapon first", "Numeric global boards", "**UNKNOWN**"],
        [
          "Toward BiS",
          "Weapon + guarder first; rings for Rapid/Sniper/Drill/Aimed",
          "godstone Deltras Loyalty widely recommended (slow counts as snare for Rooting Eye without Snare Arrow). Melazus / magic 2-set for MP so specs aren’t spent on MP recovery (savetip)",
          "KR labeled",
        ],
      ],
    },
  ],
  macros: [
    {
      type: "ul",
      items: [
        "Ranger = class official Skill Macro was built for (SoT) — prefer official Skill Macro only.",
        "KR cancel: reservation **OFF** popular; hold RMB Rapid + mash LMB or alternate clicks (test dummy — guides disagree).",
        "Keep Snare Arrow and flight leave on hand.",
      ],
    },
  ],
  writtenSources: [
    { title: "SoT Ranger panel", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "tamagotch Ranger", url: "https://tamagotch.tistory.com/1367", region: "KR", confidence: "**Strongest recent written**", date: "2026-09-07" },
    { title: "savetip archer PvE", url: "https://game.savetip.co.kr/aion2-archer-pve-guide-build/", region: "KR", confidence: "Note Gale conflict", date: "2026-07-28" },
    { title: "Inven 프레션 skill-level experiments", url: "https://www.inven.co.kr/board/aion2/6450/5026", region: "KR", confidence: "Experiments", date: "—" },
    { title: "Inven 르네-inspired Arcana", url: "https://www.inven.co.kr/board/aion2/6450/19524", region: "KR", confidence: "Alternate Arcana path", date: "2026-09-07" },
    { title: "gametrends Ranger", url: null, region: "KR", confidence: "Stigma/cycle overview", date: "—" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/ranger", region: "Global client EN", confidence: "Client string list", date: "Scale Test 2026-09-19" },
    { title: "questlog.gg Ranger hub", url: "https://questlog.gg/aion-2/ko/classes/ranger", region: "KR community tools", confidence: "Perf % = KR community", date: "—" },
  ],
  videoSources: [
    { title: "Creator 르네 (Rene) — latest Ranger PvE all-in-one", url: null, region: "KR", notes: "**URL unresolved this run** — Inven 6450/19524 cites “watch from ~25:00 for Arcana”; Ops should resolve channel URL before publish" },
    { title: "Vortex Ranger PVP + sanctuary", url: "https://vortexgaming.io/postdetail/1270538", region: "KR", notes: "PVP + bosses" },
    { title: "Vortex 3100+ Ranger growth", url: "https://vortexgaming.io/postdetail/610317", region: "KR", notes: "Older ladder guide" },
  ],
  footnotes: [
    { sot: "Rapid Shot (속사)", hub: "Rapid Fire / Snipe (Hub lists Snipe, Rapid Fire, …)", notes: "Keep SoT Rapid Shot in body; Hub footnote" },
    { sot: "Aimed Arrow (조준 화살)", hub: "Deadshot (Hub)", notes: "Footnote Hub; do not merge" },
    { sot: "Griffon Arrow", hub: "—", notes: "SoT heavy" },
    { sot: "Snare Arrow (올가미 화살)", hub: "—", notes: "SoT" },
    { sot: "Supporting Fire (지원 사격)", hub: "—", notes: "Week-one stigma" },
    { sot: "Bow of Blessing / 축복의 활", hub: "Bow of Blessing (Hub)", notes: "KR stigma" },
    { sot: "Vaizel’s Authority", hub: "Vaizel’s Authority (Hub)", notes: "KR optional" },
  ],
  footnoteNote: "Do **not** invent a merged EN name.",
  gaps: [
    "Resolve 르네 YouTube URL",
    "Pantheon Ranger",
    "Global bow progression / week-one numeric boards",
    "Gale Jul-forbid vs Sep-core — both dated in SP section; do not blend",
    "SoT names vs Hub (Snipe, Rapid Fire, Deadshot, …) — footnoted, not merged",
  ],
};
