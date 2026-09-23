import type { ClassDeepGuide } from "@/lib/classDeep";

export const assassin: ClassDeepGuide = {
  slug: "assassin",
  name: "Assassin",
  kr: "살성",
  role: "Melee burst DPS",
  roleTone: "melee",
  weapons: "Dual daggers",
  portrait: "/classes/assassin-icon.webp",
  portraitAlt: "Assassin class icon",
  largePortrait: "/classes/assassin-large.webp",
  identity: "Stealth → mark → Ambush back → burst → leave",
  overviewFields: [
    ["Role", "Melee burst DPS"],
    ["Weapons", "Dual daggers"],
    ["Fantasy one-liner", "Stealth → mark → Ambush back → burst → leave"],
    ["Difficulty", "High skill / fragile; back-angle is the class"],
    ["Week-one fit", "Picks and PvP opener fantasy; isolated targets"],
    ["Common miss", "Front-facing the boss (large damage loss); mistimed Ambush"],
    [
      "Do not",
      "Stay on a dead engage — leave and reset; Brawler is not one of the day-1 eight (Assassin is the high-skill melee DPS of the eight)",
    ],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Melee burst DPS; dual daggers; back-angle is the class. Stealth → Beast’s Roar (맹수의 포효) mark → Ambush (암습) back → burst → leave. Isolated targets; front-facing = large damage loss. Fragile. Skip if you hate dying for a mistimed engage.",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    { type: "p", text: "Numeric week-one gear/stat board = **UNKNOWN / gap** beyond Daevanion." },
    {
      type: "p",
      text: "Daevanion (confirmed direction): Nezekan combat speed + CD → attack + crit (opener wants next Ambush).",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "Community guides",
          "Crit rate / crit damage, cooldown reduction **or** Strike/강타 (two competing endgame axes), accuracy, attack speed, mobility/evasion",
        ],
        [
          "밤물결 2026-05-15",
          "**강타 set** = highest burst / groggy raids, expensive, fails if 강타 middling or on high-resist bosses (e.g. Dramatic raid 30% 강타 resist cited). **쿨감 set** = easier, universal, higher APM, weaker on short-gimmick burst windows",
        ],
      ],
    },
    {
      type: "p",
      text: "Dual-axis endgame = **KR**. Do not invent a current tier — KR posts complain about nerfs; check patch notes at publish.",
    },
  ],
  sp: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "ol",
      items: ["Stealth + Ambush (암습)", "Burst follow-up + Shadowstep (암영보)", "Extra AoE last"],
    },
    { type: "p", text: "Shallower than KR 20-skill lists." },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    { type: "p", text: "**Endgame (밤물결 + cvmaxlimbo / Inven Jan 2026 lineage):**" },
    {
      type: "ul",
      items: [
        "**Mandatory 20:** Quick Slash (빠른베기), Heart Stab (심장찌르기)",
        "**Mandatory 16:** Storm Dance / 폭풍난무 (groggy)",
        "**Priority 20 order:** Quick Slash + Heart Stab → Beast’s Roar + Pattern Explosion + Surprise Attack → Storm Dance + Whirl Slash → leftovers: Infiltrate, Ambush, Shadow Fall, Flash Slash",
        "Ambush: often 8 or 16 (not always 20); specializations 2 @8 / 2+5 @16 — Ambush is **crit-damage self-buff**, keep rolling with Beast’s Roar + AA cancel",
        "Surprise Attack 16 vs 20: 16 universal; 20 frees Heart Stab specs / life-steal swaps after cast-speed became baseline on 20",
      ],
    },
    {
      type: "p",
      text: "**Early KR / Vortex 11.30 video:** Early skills Quick Slash, Beast’s Roar, Ambush, Surprise Attack, Pattern Explosion; later Heart Stab 16 (crit CD reset), Storm Dance 16 (all-skill −3s on hit).",
    },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Behind boss → Beast’s Roar (맹수의 포효) mark → detonate glyph → Ambush (암습) → burst; miss Ambush → leave.",
    },
    {
      type: "p",
      text: "**First habit (day 1):** Only commit when you have the back angle; if Ambush misses, leave and reset.",
    },
    { type: "h3", text: "PvE — KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "**Basic loop (monotrees):** RMB mark → Pattern Explosion → Infiltrate behind → Ambush → Surprise Attack → Heart Stab on crits → LMB/Quick Slash for mana+re-mark. AA cancel between skills.",
    },
    {
      type: "p",
      text: "**High-end:** Keep Ambush buff rolling (real CD ~10–12s with CDR; near-permanent under Illusion Clone); Shadow Fall as set with Ambush for groggy/chip; Illusion Clone + Swift Contract + Triniel’s Dagger timing (Clone ~19.5s at 20 — land Triniel **during** Clone, not on raw CD).",
    },
    { type: "h3", text: "PvP" },
    { type: "p", text: "**SoT Global-confirmed:** Stealth → Ambush back → burst → leave; miss → reset." },
    {
      type: "p",
      text: "**KR:** Separate Ambush/Pattern Explosion specs (Vortex: PvP Ambush seal / Pattern engraving options); spiral slash gambling noted in Inven P.S. — treat as rumor/opinion.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        ["Shadowstep (암영보)", "Reposition / vanish", "SoT week-one panel only", "Global-confirmed framing"],
      ],
    },
    {
      type: "p",
      text: "**Conflict:** SoT week-one panel ≠ KR endgame 4-set. Split deliberately — do not swap Illusion Clone into the week-one panel without a global source.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Core set (multiple):** Illusion Clone (환영분신), Swift Contract (신속의 계약), Triniel’s Dagger (트리니엘 비수), Beast Fang (맹수의 송곳니) situational for groggy; Evasion Stance / Darkblade Throw by shard tier (밤물결 shard brackets 56→130).",
    },
    {
      type: "p",
      text: "**Vortex skill-setting video:** Level Clone + Swift + Fang first to 10+, Triniel 10, Evasion ~5, Throw 10 for field.",
    },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    { type: "p", text: "Walk Ambush + stealth + burst; Nezekan speed/CD → attack/crit; Azphel PvP board later." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "**monotrees (F2P framing, Dec 2025 — older):** Unlock 8-spec on Pattern Explosion, Ambush, Surprise Attack, Heart Stab via four lords (Nezekan/Zikel/Vaizel/Triniel) after skill 7; then push 12.",
    },
    { type: "p", text: "**Vortex 11.30:** Early skill levels → late attack/crit nodes." },
    { type: "p", text: "Exact maps = **gap**. Direction (skill-first then offense) confirmed across SoT + KR." },
  ],
  pantheon: [
    {
      type: "p",
      text: "Class-specific Assassin Pantheon list = **UNKNOWN / gap** this run (only general PvE attack/crit/CD guidance).",
    },
    { type: "p", text: "Do **not** copy Sorcerer’s Chromede/Atheron line onto Assassin without a source." },
  ],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        [
          "Story / leveling",
          "Don’t overfarm early weapons",
          "Old Vortex example +10 Homeback Dagger — dated; verify before publishing",
          "Soft / dated",
        ],
        ["Week-one dungeon", "Survive engage mistakes", "Numeric global path", "**UNKNOWN**"],
        [
          "Toward BiS",
          "Crit / CDR or 강타 axes",
          "Mirrors (마력→활력 swap if 강타 low in some raids); passives Defense Rift / Gap Seek / Rear Strike on mirror (Inven)",
          "KR labeled",
        ],
      ],
    },
    { type: "p", text: "Global launch gear path = **UNKNOWN**." },
  ],
  macros: [
    {
      type: "ul",
      items: [
        "AA cancel between skills (KR monotrees + SoT combat notes).",
        "SoT: reservation off for dive when practicing Ambush commits.",
        "Keep Shadowstep (암영보) / leave tools on hand — not buried in a full spam chain.",
        "Official Skill Macro only (no mouse software).",
      ],
    },
  ],
  writtenSources: [
    { title: "SoT Assassin panel", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "Inven Illusion CD tree", url: "https://www.inven.co.kr/board/aion2/6449/113", region: "KR", confidence: "Community", date: "v1.4 lineage" },
    { title: "Inven update + calculator", url: "https://www.inven.co.kr/board/aion2/6449/3856", region: "KR", confidence: "Community", date: "2026-01-28" },
    { title: "밤물결 Naver endgame", url: "https://blog.naver.com/PostView.naver?blogId=zovo3&logNo=224286850928", region: "KR", confidence: "Endgame dual-axis", date: "2026-05-15" },
    { title: "cvmaxlimbo", url: "https://cvmaxlimbo.tistory.com/144", region: "KR", confidence: "Written", date: "—" },
    { title: "monotrees F2P Daevanion/stigma", url: null, region: "KR", confidence: "Older overview", date: "Dec 2025" },
    { title: "Vortex EN 11.30 complete", url: "https://vortexgaming.io/en/postdetail/606019", region: "KR→EN (Vortex fan-EN)", confidence: "Structured series", date: "11.30" },
    { title: "Vortex KR skill specs", url: "https://vortexgaming.io/postdetail/854915", region: "KR", confidence: "Spec deep dive", date: "—" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/assassin", region: "Global client EN", confidence: "Client string list", date: "Scale Test 2026-09-19" },
  ],
  videoSources: [
    { title: "Vortex Assassin growth/skills/Daevanion", url: "https://vortexgaming.io/en/postdetail/606019", region: "KR→EN", notes: "Full 11.30 series" },
    { title: "Vortex PvE skill specialization", url: "https://vortexgaming.io/postdetail/854915", region: "KR", notes: "Spec deep dive" },
    { title: "Exact youtube.com “키세팅” clips (Inven-referenced)", url: null, region: "KR", notes: "**gap this run** — Cite Inven + Vortex until URL verified" },
  ],
  footnotes: [
    { sot: "Ambush (암습)", hub: "Ambush", notes: "Keep SoT" },
    { sot: "Beast’s Roar (맹수의 포효)", hub: "—", notes: "Hub may use different mark string — verify in client" },
    { sot: "Shadowstep (암영보)", hub: "—", notes: "Week-one stigma on SoT" },
    { sot: "Heart Stab (심장찌르기)", hub: "Heart Gore (Hub)", notes: "Footnote Hub; do not merge" },
    { sot: "Pattern Explosion", hub: "Insignia Explosion (Hub)", notes: "Footnote Hub; do not merge" },
    { sot: "Illusion Clone (환영분신)", hub: "Illusive Clone (Hub)", notes: "KR stigma; Hub footnote" },
    { sot: "Triniel’s Dagger (트리니엘 비수)", hub: "Triniel’s Dagger", notes: "Aligns" },
  ],
  footnoteNote: "Do **not** invent a merged EN name.",
  gaps: [
    "Pantheon Assassin picks",
    "Week-one stigma: Shadowstep (SoT) vs Illusion Clone (KR) — split panels only",
    "Global EN Ambush/Heart Stab/Pattern Explosion vs Hub names (footnoted, not merged)",
    "NotMeter Assassin parse snapshot",
    "Current (Sep 2026) balance tier — **do not invent**; flag “check patch notes at publish”",
    "Exact YouTube “키세팅” URL",
  ],
};
