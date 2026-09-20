import type { ClassDeepGuide } from "@/lib/classDeep";

export const spiritmaster: ClassDeepGuide = {
  slug: "spiritmaster",
  name: "Spiritmaster",
  kr: "정령성",
  role: "Ranged magic DPS + spirits",
  roleTone: "magic",
  weapons: "Orb",
  portrait: "/classes/spiritmaster-icon.webp",
  portraitAlt: "Spiritmaster class icon",
  largePortrait: "/classes/spiritmaster-large.webp",
  identity: "Four spirits up before the pull → own hits → fear for space → Coordinated Assault with pets out",
  displayNote:
    "**Display name:** Spiritmaster. Footnote: some older / database sources say **Elementalist** (AION2 Hub internal id); same class, not a 9th job. Do not create a separate Elementalist page.",
  overviewFields: [
    ["Role", "Ranged magic DPS + spirits"],
    ["Weapons", "Orb"],
    [
      "Fantasy one-liner",
      "Four spirits up before the pull → own hits → fear for space → Coordinated Assault with pets out",
    ],
    ["Difficulty", "Easiest ranged DPS start (SoT beginner pick with Ranger) — **not AFK**"],
    ["Week-one fit", "Current safest PvE DPS start (SoT). Skip if you hate managing extra units"],
    ["Common miss", "Pulling with spirits down; treating pets as AFK DPS; pressing Proxy after the spirit is already dead"],
    [
      "Do not",
      "Expect AFK pets; invent a separate Elementalist class; treat Brawler as a day-1 global substitute (Brawler is not one of the day-1 eight)",
    ],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Ranged magic DPS + spirits; Orb. Summoner/control mage; optimized for solo. Pets + DoTs + fear. **Not AFK.** Beginner pick table: “Easiest ranged DPS — Spiritmaster or Ranger”; “Current safest PvE DPS start. Skip if you hate extra units.”",
    },
    {
      type: "p",
      text: "**Loop fantasy (SoT):** Four spirits up **before** the pull → own orb hits → Scream of Terror (공포 / 절규계) for space → Coordinated Assault when spirits are already out → Command: Proxy (명령: 대역) when targeted. Ancient Spirit (고대 정령) = burst summon, not the rotation. Damage drops if spirits die mid-fight.",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "SoT does **not** publish a numeric Spiritmaster stat board this run → week-one numeric gear/stat board = **UNKNOWN / gap**.",
    },
    {
      type: "p",
      text: "Daevanion direction only (confirmed): skill nodes on four summons + Fusion first; Nezekan cooldown next → attack; Fear / Proxy after pets stay up.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "Vortex EN 726048 (PvE awakening)",
          "Damage resist / damage amp / crit damage / Impact → attack / Perfect / Spirit Strike → accuracy/crit if cut unmet → Concentration / Spirit Revival / Corrosion last. Magestone: **weapon damage amp** first (class already has crit-damage and damage amps from stigmas).",
        ],
        [
          "Vortex 769437 (PvP)",
          "Defense > offense; Ancient Spirit already corrects accuracy/crit — prefer weapon-damage-amp + PvP amp manastones over extreme hit/crit; iron wall / strike resist / HP / will.",
        ],
        [
          "Inven 빵호빵 2026-09-16",
          "영각 — 피증 / 치피증 / 강타 + core passives + attack; 마영석 — 무피증 “safe”; bracelet 정의+공간; 이해도 — pull 강타 from Understanding, damage-amps from manastones; Pantheon realistic high 환상 51 / 지혜 101.",
        ],
      ],
    },
    { type: "p", text: "**Do not** paste Sep Nightmare manastone / Understanding tables into day-1 global checklists." },
  ],
  sp: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "ol",
      items: [
        "The four summons (class does not work without them)",
        "Own elemental hits + a sustain skill",
        "Fear + Command: Proxy (명령: 대역) once spirits stay up",
      ],
    },
    { type: "p", text: "**Daevanion skill targets (SoT):** four summons + Fusion (융합) first." },
    {
      type: "p",
      text: "Global Arcana is thinner than KR (SoT site-wide) — SM SP economy at launch = **likely thinner**; expect fewer skill-point sinks week-one.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated (do not merge eras)", region: "kr" },
    {
      type: "p",
      text: "**Vortex EN 726048:** Invest only ~4 actives to 20, then passives. Priority: 화염 전소 → 20 first; Curse (저주) / 냉기 충격 / Fusion (융합) secondary (order flexible). Among 16s: Water Spirit (Corrosion/Curse synergy), Rapid Scatter-type filler, Nightmare situational. Passives: Spirit Strike → Mental Focus/Concentration → Spirit Revival; Corrosion passive ~0.019%/level = trash; Elemental Convergence optional for party debuff role.",
    },
    {
      type: "p",
      text: "**Vortex 769437 (Season 2 dummy — dated conflict):** Skill importance 화염 전소 ≫ 냉기 충격 ≫ Fusion ≫ Curse; Fire Spirit to 20 recommended; **Fusion charging discouraged** in that test.",
    },
    {
      type: "p",
      text: "**angelling 2025-11 (older):** 16 priority Fusion / 연속 난사 / 화염 전소; 12: Fusion, 냉기 충격, 영혼의 절규, 공간 지배.",
    },
    {
      type: "p",
      text: "**Sep 4 2026 patch (Inven 6454/9952 + Vortex 1260476):** Fusion PvE damage **+20%**; 불길의 축복 action-immune-target damage amp **50% → 100%**. Makes Fusion-centric evaluations more relevant again vs mid-Season “skip Fusion” videos — **prefer post-Sep-4 KR when writing “current KR.”**",
    },
    {
      type: "p",
      text: "**Confidence:** Four-summons-first = **Global-confirmed**. Exact 20-order = **KR dated**. Fusion value = **KR conflict resolved toward buff after 2026-09-04**.",
    },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Summon fire / water / wind / earth first → buffs → Coordinated Assault with spirits out → keep spirits alive; Scream of Terror for space; Command: Proxy when targeted.",
    },
    {
      type: "p",
      text: "**First habit (day 1):** Four spirits up **before** the pull — never open Coordinated Assault cold.",
    },
    { type: "h3", text: "PvE — KR live (ahead of global) — dated separately (do not merge eras)", region: "kr" },
    {
      type: "callout",
      tone: "red",
      text: "**Sep 2026 conflict — label clearly:** Mid-Season Vortex 769437 fire-spirit-only dummy vs **Inven 빵호빵 2026-09-16 4-spirit** high-point. Do **not** blend into one “current” without citing Sep 2026+ when claiming latest KR. Prefer post-Sep-4 / Sep-16 when writing current KR.",
    },
    {
      type: "p",
      text: "**Vortex EN 726048:** Macro only 화염 전소; assign 냉기 충격 / Fusion / Curse / 공간 지배 to mouse buttons; open 불길의 축복 → AA; after 정령의 가호 must summon Fixed/Ancient; if Fixed expires, three spirit skills then Water after ~1s to avoid cancel.",
    },
    {
      type: "p",
      text: "**savetip 2026-07-28:** Weave LMB→RMB (화염 전소); cancel summons/debuffs with RMB; open wind spirit → Curse → weave; groggy prep 정령의 가호 → 불길의 축복 → Corrosion/Curse/영절 → 파멸의 공세 → 연속 난사 in groggy. Wind+fire spirit pair valued; 공간 지배 for multi-hit/groggy.",
    },
    {
      type: "p",
      text: "**Inven 빵호빵 2026-09-16 (4-spirit high point — strongest recent written):** Minimize skill-macro lines (extra lines cut hits per slot); spirits **water→earth→fire** (less clip); Ancient Spirit after 대지진동 ~4–5 + 원소결집 full stacks; 파멸의 공세 full-charge ~3–4s after Ancient; mash spirit+Fusion slots (Fusion mash preferred over stuffing Fusion into long macro); fight ~3m; optional Ctrl+mash for key stigmas without clip. Post-Sep-10 patch: 파공 jointstrike fires immediately (older overwrite bug mitigated). **4-spirit high-point setup beats 3-spirit under controlled dummy** in that post.",
    },
    {
      type: "p",
      text: "**Vortex 769437 (Season 2 — dated conflict):** **Fire-spirit-only** highest dummy DPS in that test; Fusion charging called inefficient — superseded in relevance by Sep 4 Fusion buff + Sep 16 4-spirit optimize; keep as dated mid-Season note only.",
    },
    { type: "h3", text: "PvP" },
    {
      type: "p",
      text: "**SoT Global-confirmed:** Fear + distance; Command: Proxy dumps damage onto a spirit; fear is chance-based — lose if spirits dead and melee already on you.",
    },
    {
      type: "p",
      text: "**KR Vortex:** Long TTK trading class; defensive setup; Ancient Spirit carries accuracy/crit and fixed damage share.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        [
          "Command: Proxy (명령: 대역)",
          "When **you** are the target",
          "Dump incoming damage onto a spirit; press before the spirit dies",
          "Global-confirmed framing",
        ],
      ],
    },
    { type: "p", text: "**Skip (SoT):** a damage stigma that replaces a summon." },
    { type: "p", text: "SoT panel is incomplete vs KR endgame 4-set — do not treat Proxy as the full set." },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Essential “locked four” (angelling, Vortex 726048/769437, savetip, Inven Q&A):** 불길의 축복 · 정령의 가호 · 부식 / 협공: 부식 (Corrosion) · Ancient / 고정 정령",
    },
    {
      type: "p",
      text: "**Flex 4th/5th — present as choice, not one truth:** 흡인 (sustain) vs 파멸의 공세 (groggy/AoE). Vortex 769437 claims 파멸의 공세 can **lower** dummy DPS; savetip / angelling still recommend it for groggy windows.",
    },
    {
      type: "p",
      text: "**Vortex 726048 early stigma order (hangul-first):** 부식 + 정령의 가호 → 5 first → 정령의 가호 + 부패; flex 저주의 그림자 / 불길의 축복 / 부식; 흡인 or Offensive instead of Curse-shadow; Breach low value.",
    },
    {
      type: "quote",
      text: "**SM stigma Vortex EN map:** Grace = 정령의 가호 · Flame Blessing = 불길의 축복 · Absorption = 흡인 · Corrosion = 부식 · Corruption = 부패 · Shadow of Curse = 저주의 그림자 · Offensive · Breach. Cite Vortex 726048 in Sources.",
    },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Skill nodes on four summons + Fusion (융합) first; Nezekan cooldown next (summons/Fusion back) → attack; Fear / Proxy after pets stay up; do **not** spend toward a damage-stigma path that replaces a summon node.",
    },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "angelling / bongrye-type: Skill 16/12 nodes first (class is SP-efficient) → damage amp → CDR → combat speed → crit damage; passives after.",
    },
    { type: "p", text: "Exact node map images = **gap**. Direction (skill-first + Nezekan CD) aligns SoT + KR." },
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
          "Inven 빵호빵 2026-09-16",
          "Realistic high **환상 51 / 지혜 101** (same ballpark as Vortex Glad Sep high-point wording)",
        ],
      ],
    },
    { type: "p", text: "Class-exclusive SM Pantheon table beyond that = **UNKNOWN / gap**." },
    {
      type: "p",
      text: "General Pantheon structure (colossus > statues > paintings) = shared KR guides — not SM-exclusive.",
    },
  ],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        [
          "Story / leveling",
          "Survive story mobs; keep spirits up",
          "No Spiritmaster-specific SoT gear list",
          "**UNKNOWN / gap** (Global SoT)",
        ],
        [
          "Week-one dungeon",
          "Weapon / sustain while pets live",
          "Numeric manastone boards not published for global",
          "**UNKNOWN**",
        ],
        ["Toward BiS", "—", "KR endgame only below; never as day-1", "KR labeled"],
      ],
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "Perfect option valued (wide weapon min/max); weapon damage amp manastones; Arcana chalice/scales for passives (Vortex); poison/bleed godstone for 연속 연류 passive synergy (savetip Jul — **KR**).",
    },
    { type: "p", text: "**Do not** copy Sep Nightmare manastone / Understanding tables as day-1 global." },
  ],
  macros: [
    {
      type: "ul",
      items: [
        "Official Skill Macro only (no mouse software / external mash tools as week-one advice).",
        "**SoT:** Strong slot = spirit or Fusion; hold Weak+Strong; left-click-only = dead parse. Example live setup cited on SoT: Strong side Curse → Fusion → aerial hit (공지) + Water/Earth/Fire/Corrosion steps. Fear + Proxy **manual**. Reservation **on** so Fusion still fires while weaving.",
        "**KR (dated):** Vortex 726048 macros only 화염 전소 on one slot; Inven Sep 16 prefers mash spirit+Fusion slots over long stuffed macros. Do **not** overwrite SoT “official Skill Macro only” with KR external mouse-macro culture on week-one pages.",
      ],
    },
  ],
  writtenSources: [
    { title: "SoT classes (Spiritmaster panel)", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "Inven 빵호빵 4-spirit optimize", url: "https://www.inven.co.kr/board/aion2/6454/10286", region: "KR", confidence: "Strongest recent written", date: "2026-09-16" },
    { title: "Inven Sep 4 patch note share", url: "https://www.inven.co.kr/board/aion2/6454/9952", region: "KR", confidence: "Fusion / 불길의 축복 buffs", date: "2026-09-04" },
    { title: "Vortex EN PvE/PvP skills→gear", url: "https://vortexgaming.io/en/postdetail/726048", region: "KR→EN (Vortex fan-EN)", confidence: "Structured KR transcript", date: "(pack date)" },
    { title: "Vortex KR Season 2 dummy", url: "https://vortexgaming.io/postdetail/769437", region: "KR", confidence: "Fire-only test — **dated conflict**", date: "Season 2" },
    { title: "savetip weaving + cycle", url: "https://game.savetip.co.kr/aion2-spiritmaster-guide-weaving-build/", region: "KR", confidence: "Weaving / cycle", date: "2026-07-28" },
    { title: "angelling cycle", url: "https://angelling.tistory.com/464185", region: "KR", confidence: "Older; affiliate", date: "2025-11" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/spiritmaster", region: "Global client EN", confidence: "Client string list; internal id Elementalist", date: "Scale Test 2026-09-19" },
    { title: "SoT cites Inven SM macro", url: "https://www.inven.co.kr/board/aion2/6454/7346", region: "KR", confidence: "Macro reference", date: "(SoT cite)" },
  ],
  videoSources: [
    { title: "빵호빵 (BBANGHOBBANG) Sep optimize", url: "https://www.inven.co.kr/board/aion2/6454/10286", region: "KR", notes: "Written companion primary; video embeds secondary" },
    { title: "[아이온2] 정령성…1타강사 [이슈타르] (내신tv / 이슈타르)", url: "https://www.youtube.com/watch?v=Zj13RBe3cKg", region: "KR", notes: "Long-form SM coaching / Q&A" },
    { title: "Vortex EN 726048 (via post)", url: "https://vortexgaming.io/en/postdetail/726048", region: "KR→EN", notes: "Timestamped skill/stigma tables (fan-EN labeled)" },
  ],
  footnotes: [
    { sot: "Command: Proxy (명령: 대역)", hub: "Command: Proxy", vortex: "—" },
    { sot: "Fusion (융합)", hub: "Elemental Fusion", vortex: "Elemental Fusion" },
    { sot: "Curse (저주)", hub: "Jointstrike: Curse", vortex: "Curse" },
    { sot: "Corrosion (부식)", hub: "Jointstrike: Corrode", vortex: "Corrosion" },
    { sot: "Scream of Terror", hub: "Cry of Terror", vortex: "—" },
    { sot: "Coordinated Assault", hub: "*(map uncertain — do not invent)*", vortex: "—" },
    { sot: "Ancient Spirit (고대 정령)", hub: "Summon: Ancient Spirit", vortex: "Ancient Spirit / Fixed Spirit (older Vortex wording)" },
    { sot: "화염 전소", hub: "Combustion", vortex: "Flame Incineration" },
    { sot: "냉기 충격", hub: "Cold Shock", vortex: "Frost Shock" },
    { sot: "불길의 축복", hub: "Flame Blessing", vortex: "Flame Blessing" },
    { sot: "정령의 가호", hub: "—", vortex: "Spirit’s Grace" },
    { sot: "공간 지배", hub: "Dimensional Control", vortex: "Spatial Domination" },
    { sot: "흡인", hub: "Siphon", vortex: "Absorption" },
    { sot: "파멸의 공세", hub: "Jointstrike: Destructive Attack *(uncertain)*", vortex: "Offensive / Destructive Assault" },
  ],
  footnoteLead:
    "Where Global-client EN (AION2 Hub) or Vortex fan-EN differs from SoT body names, keep SoT in body. Hangul-only skills stay hangul until SoT adds EN.",
  footnoteNote:
    "**Class EN:** Spiritmaster (SoT primary). Hub notes internal id **Elementalist** — footnote only; same class. Do **not** invent a merged EN name. Final display remains SoT EN + (한글) until Nhat changes canon.",
  gaps: [
    "SoT EN missing for 화염 전소 / 냉기 충격 / 불길의 축복 / 정령의 가호 / 공간 지배 / 흡인 / 파멸의 공세 — keep hangul",
    "Coordinated Assault ↔ Hub jointstrike mapping **uncertain** — do not invent",
    "Week-one global stigma set beyond Proxy",
    "Week-one global numeric gear/stat/manastone boards",
    "Full Daevanion node map images",
    "Pantheon full SM board / global unlock schedule",
    "NotMeter SM parse snapshot this run",
    "Fire-only (Vortex 769437) vs 4-spirit (Inven Sep 16) — voice must date-label, never blend",
    "Global Arcana thinner than KR — SM SP economy at launch likely thinner",
  ],
};
