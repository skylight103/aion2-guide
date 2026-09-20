import type { ClassDeepGuide } from "@/lib/classDeep";

export const gladiator: ClassDeepGuide = {
  slug: "gladiator",
  name: "Gladiator",
  kr: "검성",
  role: "Melee bruiser (not main tank on SoT)",
  roleTone: "bruiser",
  weapons: "Greatsword (two-hander — polearm is AION 1, not this class)",
  portrait: "/classes/gladiator-icon.webp",
  portraitAlt: "Gladiator class icon",
  largePortrait: "/classes/gladiator-large.webp",
  identity: "Zikel’s Blessing → walk in → Wave of Fury on packs → dump on groggy; live in the pack",
  overviewFields: [
    ["Role", "Melee bruiser (not main tank on SoT)"],
    ["Weapons", "Greatsword (two-hander — **polearm is AION 1, not this class**)"],
    ["Fantasy one-liner", "Zikel’s Blessing → walk in → Wave of Fury on packs → dump on groggy; live in the pack"],
    ["Difficulty", "Melee without Assassin pain (SoT beginner pick). Skip if you want the highest raw parse"],
    [
      "Week-one fit",
      "Short party: can off-tank if no Templar. Full group: melee DPS with party buffs + lifesteal. **Do not replace main tank**",
    ],
    ["Common miss", "Pulling as main tank when Templar is present; Wave-of-Fury-only turret; bringing AION 1 polearm habits"],
    [
      "Do not",
      "Rank Glad as pure meter over Templar tank demand; teach banned external mouse macros on week-one voice; treat Brawler as a day-1 global substitute (Brawler is not one of the day-1 eight)",
    ],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Melee bruiser; Greatsword. Wide-area melee. Short party: can off-tank if no Templar. Full group: melee DPS with party buffs + lifesteal. Live in the pack; **do not replace main tank.**",
    },
    {
      type: "p",
      text: "**PvE fantasy (SoT):** Not the pull if Templar present — job is groggy + packs. Zikel’s Blessing (지켈의 축복) → walk in → Wave of Fury (분노의 파동) → dump on groggy. Lifesteal = sustain. Not a one-button Wave turret.",
    },
    {
      type: "p",
      text: "**PvP fantasy (SoT):** Gap-close, knockdown, keep them down; Blade Toss (칼날 날리기) if kited; 근성 shares lockout with Cleric Salvation and Chanter Barrier — do not stack; Fracturing Rush (분쇄 돌진) = ground closer, not air dash.",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "SoT does **not** publish a numeric Gladiator stat board this run → week-one numeric gear/stat board = **UNKNOWN / gap**.",
    },
    {
      type: "p",
      text: "Daevanion direction only (confirmed): Nezekan combat speed + CD first → attack + crit (Crushing Wave resets on crit).",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "Inven 전쟁속의고아 2026-05-04",
          "강타 Understanding 39 mandatory; attack% / damage amp / crit-damage amp; Perfect; max attack on Understanding specials; weapon/guarder: weapon damage amp / power / accuracy / damage amp / combat speed; passives 생존 자세 / 피의 흡수 / 충격 적중 / 공격 준비 / 노련한 반격 / 살기 파열 / 약점 파악 (author-subjective order inside post).",
        ],
        [
          "Vortex Sep 1261792",
          "피증 / 치피증 / 강타 first; manastones 전피증 > 무피증/치피증; Understanding 단타+전투증; bracelet 정의+공간 trend; Pantheon 환상~50 / 지혜 realistic high.",
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
        "Wave of Fury (분노의 파동) + a lifesteal skill (packs = how you live)",
        "Push **Overhead Slam (내려찍기) toward 20** early — can be most of parse once Specialty opens",
        "Party amp + gap-close",
        "Off-tank tools only if covering missing Templar",
      ],
    },
    {
      type: "p",
      text: "**Daevanion skill nodes (SoT):** Crushing Wave (분쇄파동), Sharp Strike (예리한 일격), Blade Storm (검기난무), Overhead Slam (내려찍기) — Slam to 20 first target. Cleaving Blow (절단의 맹타) node if covering Templar; else skip off-tank twigs.",
    },
    {
      type: "p",
      text: "**Site-wide SoT note:** Templar Judgment (심판) and Gladiator Overhead Slam (내려찍기) can be most of that class’s personal damage from one button; Global Arcana thinner than KR — lock two skills early.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Inven 주이스틱 (updated 2026-01-02, posted 2025-11):** Must ≥12 aiming 20: 분쇄파동, 예리한 일격, 파멸의 맹타 16–20, 내려찍기 16–20, 검기난무 16–20, 발목베기 12, 도약찍기 12, 절단의 맹타 8–16, 돌진일격 12; 공중결박 low PvE priority.",
    },
    {
      type: "p",
      text: "**Inven 5.4 (2026-05-04) — prefer when writing mid-2026 KR:** First 20s: **내려찍기 / 절단의 맹타 / 파멸의 맹타**; 4th–5th 20 by preference + Arcana. 분쇄파동 16 essential (20 nice). 검기난무 16 if not fully on in-game macro. 공중결박 mostly drop unless Nightmare coordinated extra groggy.",
    },
    {
      type: "p",
      text: "**Vortex Sep 1261792:** Core actives for 내절캔 = 절맹 + 내려찍기; 파맹 optional raise; 공중결박 in cycle raises DPS but cuts Overhead hit count.",
    },
    {
      type: "p",
      text: "**Confidence:** Overhead Slam → 20 = **Global-confirmed** + KR agree. Full KR 20 list = **KR**. 파멸의 맹타 / 돌격 자세 EN = hangul until SoT names them.",
    },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Zikel’s Blessing (지켈의 축복) first → walk in → Wave of Fury (분노의 파동) on pack → cancel light swing (Sharp Strike / 예리한 일격) into next skill (afterimage = cancel landed) → groggy dump → between windows stay in melee for lifesteal. Weave Crushing Wave (분쇄파동) on CD; Sharp Strike = mana refill (Wave-only burns spirit and reset dies).",
    },
    {
      type: "p",
      text: "**Hand-press (SoT):** Zikel’s Blessing, Wave of Fury, Fracturing Rush (분쇄 돌진), 근성; if off-tanking, mix Cleaving Blow (절단의 맹타) into weave instead of more Wave.",
    },
    {
      type: "p",
      text: "**First habit (day 1):** Blessing first, then walk in — not a Wave turret from range. Practice Sharp Strike afterimage cancel.",
    },
    { type: "h3", text: "PvE — KR live (ahead of global) — dated separately (do not merge eras)", region: "kr" },
    {
      type: "p",
      text: "**KR synergy-tank identity = dated appendix only.** After Apr 22 identity shift (Inven 전쟁속의고아 2026-05-04): synergy off-tank / “수검딜호” party core — cannot beat pure DPS on equal gear, but Zikel + 흡혈의 검 + 살기 파열 + enemy aggro = unique slot. **SoT week-one remains bruiser / not-main-tank** — do not promote KR synergy-tank as day-1 global role.",
    },
    {
      type: "p",
      text: "**Early KR (주이스틱 / harukyu Nov 2025):** Open 파멸의 맹타 → Zikel → Wave of Fury → 흡혈의 검 → 유린의 검 → (격노 폭발) → Blade Storm in groggy → Sharp Strike + Crushing Wave sustain. Field: Crushing Wave ↔ Sharp Strike. AA cancel: press skill 2 before skill 1 recovery ends; success = afterimage. Combat options: skill tracking + basic repeat ON for easier cancel (Inven). **NC live warned against external mouse macros — SoT teaches official Skill Macro only.**",
    },
    {
      type: "p",
      text: "**Inven 5.4 / savetip 내찍캔슬:** With Overhead Slam ≥16 (CD delete spec) + activation spec: **내절캔** = Overhead Slam → Cleaving Blow → Sharp Strike loop. Opening: Zikel + 돌격 자세 → 파멸의 맹타 → 격노 폭발 → 흡혈의 검 → 내절캔. 격노 maintains Overhead activation while 돌격 자세 feeds CDR.",
    },
    {
      type: "p",
      text: "**Vortex Sep 1261792:** Debate 예내캔 (smoother, lower ceiling) vs **내절캔** (external mash, higher ceiling) — author pushes return to 내절캔; Upward Strike hit count ~90s–100 = healthy high point; keep stigmas out of long skill macro for max hits. Sep 4 class-care patch **excluded** Glad (Vortex 1260476) — community still iterating Sep sanctuary gear.",
    },
    {
      type: "p",
      text: "**Confidence:** Sharp Strike cancel + Zikel-first **confirmed** SoT. Full 내절캔 = **KR** (ahead of global week-one teaching).",
    },
    { type: "h3", text: "PvP" },
    {
      type: "p",
      text: "**SoT Global-confirmed:** Close → knockdown floor → Blade Toss (칼날 날리기) vs kite; 근성 lockout shared with Cleric Salvation / Chanter Barrier.",
    },
    {
      type: "p",
      text: "**KR Vortex 728615 (older Season 3 — dated):** Blade Toss heal-cut + 근성 + 돌격 자세 sustain; Forced Restraint (강제 속박) → Overhead; path-explosion (경로 폭발) → Overhead. Treat as **dated KR**.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        [
          "Fracturing Rush (분쇄 돌진)",
          "Gap-close / stick",
          "Forward rush with bind + groggy chip; stick, don’t fly",
          "Global-confirmed framing",
        ],
      ],
    },
    {
      type: "p",
      text: "Zikel’s Blessing is named in SoT **PvE bullets** as a party amp tool — **not** as the week-one stigma slot callout. Split carefully.",
    },
    {
      type: "p",
      text: "SoT panel is incomplete vs KR endgame 4-set — do not treat Fracturing Rush as the full set.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    { type: "p", text: "**PvE core (Inven 5.4 — prefer mid-2026):**" },
    {
      type: "ol",
      items: [
        "**돌격 자세** — shard #1 (combat speed + crit-on-CD structure; ~infinite with enough CDR)",
        "**Zikel’s Blessing (지켈의 축복)** — to **15** (atk + hit 100 + multi-hit 50%; 20 = mostly +3s duration) — **do not drop for selfish armor stigma if thinking party**",
        "**흡혈의 검** — to 15 (Apr 22 made party leech synergy essential)",
        "**집중 막기** — ≥5, to 15 after Zikel/돌격",
        "**격노 폭발** — 5 early, push 20 last for high point (Overhead activation)",
      ],
    },
    { type: "p", text: "Flex: Wave of Fury at 1 for groggy chip; 파동의 갑주 conditional swap vs block-light fights." },
    {
      type: "p",
      text: "**Early KR (주이스틱 / harukyu):** Zikel 5–15, 돌격 자세 5–20, 근성 1–15, 집중 막기 5–20, Wave of Fury 1 — overlaps SoT Wave emphasis but SoT week-one panel highlights Fracturing Rush, not Zikel, as the stigma callout.",
    },
    {
      type: "p",
      text: "**Writer split:** Week-one stigma = Fracturing Rush (SoT). KR endgame 4-set = 돌격 자세 + Zikel + 흡혈의 검 + 집중 막기/격노 — **label KR**.",
    },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    { type: "p", text: "Skill blues: Crushing Wave / Sharp Strike / Blade Storm / Overhead Slam." },
    { type: "p", text: "Nezekan combat speed + CD first → attack / crit; Cleaving Blow if off-tanking." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    { type: "p", text: "주이스틱 tip: Nezekan → Zikel → Vaizel → Triniel → Ariel → Azphel (order tip, not full map)." },
    { type: "p", text: "baystory Feb 2026 (affiliate): Zikel / Triniel priority framing — **dated**, verify." },
    { type: "p", text: "Exact node map images = **gap**. Direction (skill-first + Nezekan) aligns SoT + KR." },
  ],
  pantheon: [
    { type: "h3", text: "Week-one global", region: "week-one" },
    { type: "p", text: "Global Pantheon availability at launch = **UNKNOWN**." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "table",
      headers: ["Source", "Picks"],
      rows: [["Vortex Sep Glad 1261792", "환상 ~50 / 지혜 realistic high (same creator line as SM Sep)"]],
    },
    { type: "p", text: "Full Glad-specific Pantheon = **thin / gap** beyond that." },
  ],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        ["Story / leveling", "Survive packs with lifesteal", "No Glad-specific SoT drop list", "**UNKNOWN / gap** (Global SoT)"],
        ["Week-one dungeon", "Greatsword first; live in melee", "Numeric manastone boards not published for global", "**UNKNOWN**"],
        ["Toward BiS", "—", "KR endgame only below; never as day-1", "KR labeled"],
      ],
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Inven 5.4:** 늘무 vs 비늘무 / 응기룡 comparisons (KR dungeon meta); Arcana 2광분4순수 default vs 4광분2마력 mana cover; rings for 파맹/절맹/내찍 20; titles/wings fight-dependent.",
    },
    {
      type: "p",
      text: "**Warn:** polearm AION 1 guides do not apply. Glad excluded from Sep 4 care patch — check later notes at publish.",
    },
  ],
  macros: [
    {
      type: "ul",
      items: [
        "Official Skill Macro only (no mouse software) — SoT week-one voice.",
        "**SoT cancel:** Sharp Strike (예리한 일격) light swing into next skill; afterimage = cancel landed.",
        "Hand-press: Zikel’s Blessing, Wave of Fury, Fracturing Rush, 근성; Cleaving Blow if off-tanking.",
        "**KR:** 내절캔 / external mash culture is **ahead of global week-one** — do **not** contradict SoT “official Skill Macro only / no mouse software” on week-one pages. Inven combat options (skill tracking + basic repeat ON) are client toggles, not external macros.",
      ],
    },
  ],
  writtenSources: [
    { title: "SoT classes (Gladiator panel)", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "Inven 전쟁속의고아 PvE guideline", url: "https://www.inven.co.kr/board/aion2/6448/16354", region: "KR", confidence: "Strong mid-2026 written", date: "2026-05-04" },
    { title: "Inven 주이스틱 skill tree", url: "https://www.inven.co.kr/board/aion2/6448/58", region: "KR", confidence: "Skill tree", date: "updated 2026-01-02" },
    { title: "savetip 내찍캔슬", url: "https://game.savetip.co.kr/aion2-swordman-downward-strike-cancel-guide/", region: "KR", confidence: "Cancel command", date: "(pack)" },
    { title: "harukyu PvE", url: "https://harukyu.tistory.com/60", region: "KR", confidence: "Older; SoT cites", date: "2025-11" },
    { title: "baystory PvE summary", url: "https://baystory.tistory.com/564275", region: "KR", confidence: "Affiliate; dated", date: "2026-02" },
    { title: "Vortex Sep 100-hit / 내절캔", url: "https://vortexgaming.io/postdetail/1261792", region: "KR", confidence: "High-point cancel", date: "Sep 2026" },
    { title: "Vortex Sep Templar+Glad", url: "https://vortexgaming.io/postdetail/1262116", region: "KR", confidence: "Post-Sep-patch builds", date: "Sep 2026" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/gladiator", region: "Global client EN", confidence: "Client string list", date: "Scale Test 2026-09-19" },
  ],
  videoSources: [
    { title: "빵호빵 — 올려치기 100타++ 고점 세팅", url: "https://www.youtube.com/watch?v=nrCsW9hOWJA", region: "KR", notes: "Matches Vortex 1261792 Sep optimize" },
    { title: "스토리텔러 — 뉴비를 위한 검성 기본 가이드", url: "https://www.youtube.com/watch?v=OoffKwPdAAc", region: "KR", notes: "Newbie overview" },
    { title: "Vortex Sep 1261792 (via post)", url: "https://vortexgaming.io/postdetail/1261792", region: "KR", notes: "내절캔 vs 예내캔 + gear tables" },
  ],
  footnotes: [
    { sot: "Zikel’s Blessing (지켈의 축복)", hub: "Zikel's Blessing" },
    { sot: "Wave of Fury (분노의 파동)", hub: "Wrath Wave" },
    { sot: "Overhead Slam (내려찍기)", hub: "Overhead Slam" },
    { sot: "Fracturing Rush (분쇄 돌진)", hub: "Fracturing Rush" },
    { sot: "Crushing Wave (분쇄파동)", hub: "Crushing Wave" },
    { sot: "Sharp Strike (예리한 일격)", hub: "Keen Strike" },
    { sot: "Blade Storm (검기난무)", hub: "Sword Aura Rampage *(uncertain map — footnote only)*" },
    { sot: "Cleaving Blow (절단의 맹타)", hub: "*(Hub list has Rending/Ruinous/Assault Strike variants — do not force-map)*" },
    { sot: "Blade Toss (칼날 날리기)", hub: "Blade Toss" },
    { sot: "근성", hub: "Tenaciousness" },
    { sot: "파멸의 맹타", hub: "Rending Blow / Ruinous Blow *(uncertain)*" },
    { sot: "돌격 자세", hub: "Lunge Stance" },
    { sot: "집중 막기", hub: "Focused Block" },
    { sot: "흡혈의 검", hub: "Lifestealing Blade" },
    { sot: "격노 폭발", hub: "Rage Burst" },
    { sot: "발목베기", hub: "Ankle Slice" },
    { sot: "공중결박", hub: "Aerial Snare" },
    { sot: "도약찍기", hub: "Leaping Slam" },
    { sot: "돌진일격", hub: "Rush Strike" },
    { sot: "유린의 검", hub: "—" },
  ],
  footnoteLead:
    "Where Global-client EN (AION2 Hub) differs from SoT body names, keep SoT in body. Hangul-only skills stay hangul until SoT adds EN.",
  footnoteNote: "Do **not** invent a merged EN name. Final display remains SoT EN + (한글) until Nhat changes canon.",
  gaps: [
    "SoT EN missing for 파멸의 맹타 / 돌격 자세 / 집중 막기 / 흡혈의 검 / 격노 폭발 / 발목베기 / 공중결박 / 도약찍기 / 돌진일격 / 유린의 검 / 근성 EN — keep hangul",
    "Blade Storm ↔ Hub Sword Aura Rampage map **uncertain**",
    "Week-one stigma Fracturing Rush (SoT) vs Zikel-first KR endgame — must stay split",
    "Week-one global numeric gear/stat/manastone boards / greatsword progression",
    "Full Daevanion node map images",
    "Pantheon Glad detail / global unlock schedule",
    "External mouse-macro culture (KR) vs SoT official Skill Macro only — do not contradict SoT on week-one pages",
    "Glad excluded from Sep 4 care patch — re-check later notes at publish",
  ],
};
