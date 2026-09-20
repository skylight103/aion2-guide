import type { ClassDeepGuide } from "@/lib/classDeep";

export const cleric: ClassDeepGuide = {
  slug: "cleric",
  name: "Cleric",
  kr: "치유성",
  role: "Main healer",
  roleTone: "heal",
  weapons: "Mace + shield",
  portrait: "/classes/cleric-icon.webp",
  portraitAlt: "Cleric class icon",
  largePortrait: "/classes/cleric-large.webp",
  identity:
    "Shred brand + party regen up → heal lowest → Earth’s Retribution into Condemn; ally rez ≠ Reincarnating Touch",
  overviewFields: [
    ["Role", "Main healer"],
    ["Weapons", "Mace + shield"],
    [
      "Fantasy one-liner",
      "Shred brand + party regen up → heal lowest → Earth’s Retribution into Condemn; ally rez ≠ Reincarnating Touch",
    ],
    ["Difficulty", "Beginner dungeon demand with Templar; low personal damage, no dash"],
    [
      "Week-one fit",
      "Groups invite because people stay up. Unique in-combat ally resurrection. “You heal, then you deal.”",
    ],
    [
      "Common miss",
      "Heal-bot dropping shred/regen; solo-quest damage stigma that deletes a heal tool; confusing ally rez with Reincarnating Touch; charging Thunderclap every CD",
    ],
    [
      "Do not",
      "Drop heal tools for a solo-quest damage stigma; teach banned external mouse macros / G-HUB on week-one voice; treat Brawler as a day-1 global substitute",
    ],
  ],
  overviewBody: [
    {
      type: "p",
      text: "**SoT Global-confirmed:** Main healer; Mace + shield. “You heal, then you deal.” Unique in-combat ally resurrection. Groups invite because people stay up. Beginner pick: dungeon-slot scarcity with Templar.",
    },
    {
      type: "p",
      text: "**PvE fantasy (SoT):** Keep defense-shred brand (약화의 낙인 / 고통의 연쇄) + party regen light (재생의 빛) up → heal lowest → weave Earth’s Retribution (대지의 응보) into Condemn (단죄) between heals → Thunderclap (벽력) helps groggy (**not** every CD). **Ally combat rez (소환 부활) ≠ Reincarnating Touch (환생의 손길).** Stay with pack; low personal damage; no dash.",
    },
    {
      type: "p",
      text: "**PvP fantasy (SoT):** Salvation (구원) when focused; full-heal dive target; do not fly first (lose chases). **Salvation shares lockout with Gladiator 근성 and Chanter Barrier Spell — do not stack.**",
    },
  ],
  stats: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "SoT does **not** publish a numeric Cleric stat board this run → week-one numeric gear/stat board = **UNKNOWN / gap**.",
    },
    { type: "p", text: "Daevanion direction only (confirmed): Nezekan CD → attack after tank lives without bar-stare." },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "table",
      headers: ["Source / date", "Priority"],
      rows: [
        [
          "Inven 소티메리 2026-04-16",
          "Combat-speed caps matter once dealing — author’s measured **단죄 cap ~94.4%** combat speed (large frame win); Judgment Thunder frames at ~76.8% / 91.8% / 102%. CDR ideal **~33–35%** (Earth Punishment infinite at 33%+; Chain of Torment infinite at 35%+). Pantheon 지혜+환상 paintings for CDR; Arcana often 4 pure + 2 vitality/frenzy once CDR from titles/wings/Pantheon is enough.",
        ],
      ],
    },
    { type: "p", text: "**Do not** paste Apr combat-speed 94.4% / CDR tables into day-1 global checklists." },
  ],
  sp: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "ol",
      items: [
        "A real heal + party regen (재생의 빛)",
        "Shred brand + combat rez",
        "Thunderclap (벽력) + extra damage last",
      ],
    },
    {
      type: "p",
      text: "**Daevanion (SoT):** Skill nodes on real heal, 재생의 빛, shred brand first → Earth’s Retribution + Condemn → combat rez; Nezekan CD; skip solo-quest damage path that deletes a heal node.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    { type: "p", text: "**Inven 소티메리 Apr 2026:**" },
    {
      type: "ul",
      items: [
        "Damage: Judgment Thunder (심판의 번개) **16** (5th spec double 천벌) · Condemn (단죄) **20** · then Thunderclap 20 · Earth’s Retribution 20 · optional 신성한 기운 / 고통의 연쇄 20",
        "Heal: 쾌유의 광휘 16/20 · 재생의 빛 16 · 치유의 빛 16",
        "Summary 1st wave: 심번16 / 단죄20 / 쾌광20 / 재빛16 / 치빛16",
      ],
    },
    {
      type: "p",
      text: "**KR→EN Vortex 688137 (fan-EN — footnote names):** Quake / Divine Punishment / Judgment / Light’s Flash priority language is **fan translation** — map via hangul, not Vortex EN.",
    },
    { type: "p", text: "**Confidence:** Heal+regen first = **Global-confirmed**. Condemn20 / 쾌광20 endgame = **KR**." },
  ],
  rotation: [
    { type: "h3", text: "PvE — Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Shred + regen up → heal lowest → weave Earth’s Retribution (대지의 응보) → Condemn (단죄); ally rez = wipe save; **Reincarnating Touch (환생의 손길) = self**, not ally.",
    },
    {
      type: "p",
      text: "**SoT macro:** Hold Weak (Earth’s Retribution) into Strong; Cleric cancel quieter than Ranger but still do it. Heals / ally rez / Salvation / Thunderclap on hand keys — do **not** dump heal bar into hold sequence. Reservation on so heal still fires after cancel. Reincarnating Touch not a weave step.",
    },
    {
      type: "p",
      text: "**First habit (day 1):** Shred + regen uptime first — heal-bot without synergy is wrong. Never confuse ally combat rez (소환 부활) with Reincarnating Touch.",
    },
    { type: "h3", text: "PvE — KR live (ahead of global) — dated separately (do not merge eras)", region: "kr" },
    { type: "p", text: "**Inven Apr cycle:**" },
    {
      type: "ol",
      items: [
        "Maintain debuffs/buffs (약화의 낙인, 고통의 연쇄, 대지의 징벌, 재생의 빛)",
        "LMB–Condemn main",
        "On Condemn CD: LMB–Judgment Thunder",
        "Weave Thunderclap / 신성한 기운 on Condemn downtime",
      ],
    },
    {
      type: "p",
      text: "Author notes: Condemn on ≈ +15% vs Judgment-only; Thunderclap ≈ +2% + groggy; avoid stuffing non-movable skills into spam macros. Synergy uptime first (약화의 낙인 + 고통의 연쇄 ≈ 28% damage-resist shred with specs; 대지의 징벌 stigma adds 강타-resist / atk-def shred). Post-patch meta shifted toward **Condemn as primary damage share (~30%+)** with Judgment Thunder secondary.",
    },
    {
      type: "p",
      text: "**Sep board note:** Mid–Sep 2026 Inven 치유성 board debates care vs DPS — **no single canonical Sep written guide found this run** → gap for “current KR Sep” beyond Apr core. Date-label Apr as best written; later debates separately.",
    },
    {
      type: "p",
      text: "**Confidence:** Synergy-uptime + weave **confirmed** SoT+KR. KR G-HUB external macros = **do not** put on week-one SoT voice (official Skill Macro only).",
    },
    { type: "h3", text: "PvP" },
    {
      type: "p",
      text: "**SoT Global-confirmed:** Salvation when focused; full-heal dive; no fly-first. Salvation lockout shared with Glad 근성 / Chanter Barrier.",
    },
    {
      type: "p",
      text: "**KR Vortex (hangul-first):** Care sets lean 사면 / Salvation (구원) / 유스티엘 / 소환 부활; damage flex 대지의 징벌 / 파멸의 외침.",
    },
    {
      type: "quote",
      text: "**Cleric KR Vortex EN map:** Absolution = 사면 · Salvation = 구원 · Yustiel = 유스티엘 · Summon Rez = 소환 부활 · Earth Punishment = 대지의 징벌 · Voice of Doom = 파멸의 외침.",
    },
  ],
  stigmas: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "table",
      headers: ["Slot / name", "When to press", "Notes", "Status"],
      rows: [
        [
          "Reincarnating Touch (환생의 손길)",
          "Self buff → self-rez if you die while up",
          "**Different** from ally combat rez (소환 부활). SoT week-one stigma callout",
          "Global-confirmed framing",
        ],
      ],
    },
    {
      type: "p",
      text: "Skip: solo-quest damage stigma that deletes a heal tool. SoT panel incomplete vs KR endgame core — do not treat Reincarnating Touch as the full set.",
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    { type: "p", text: "**PvE fixed core (Inven Apr):**" },
    {
      type: "ol",
      items: [
        "보호의 빛 **15** first (damage-amp synergy 10%→20% at 15)",
        "대지의 징벌 **20** (강타 synergy + shred + Condemn crit; uptime doubles at 20)",
        "증폭의 기도 **15** (author preference for amp meta)",
      ],
    },
    { type: "p", text: "Flex care: 유스티엘의 권능 + 소환 부활 (~10)" },
    { type: "p", text: "Flex damage: 파멸의 목소리 + 속박 (both need ~20 to be worth it)" },
    { type: "p", text: "Lower value per author: 면죄 / 치유의 기운 (situational)" },
    {
      type: "p",
      text: "**KR→EN Vortex summary (fan-EN):** PvE Light of Protection 15 / Earth Punishment 20 / Amplification Prayer 15 + Ruin / Summon Rez / Salvation flex — map via hangul.",
    },
    {
      type: "p",
      text: "**Writer split:** Week-one stigma = Reincarnating Touch (SoT). KR 보호의 빛 + 대지의 징벌 core = **label KR**.",
    },
  ],
  daevanion: [
    { type: "h3", text: "Week-one (SoT Global-confirmed)", region: "week-one" },
    {
      type: "p",
      text: "Heal / 재생의 빛 / shred brand nodes first → Earth’s Retribution + Condemn → combat rez; Nezekan CD; skip damage path that deletes heal node.",
    },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "p",
      text: "No Cleric-specific full board transcription this run beyond general SP→16/20 specialty gates — **gap** for node maps. Direction (heal/regen/shred first) aligns SoT.",
    },
  ],
  pantheon: [
    { type: "h3", text: "Week-one global", region: "week-one" },
    { type: "p", text: "Global Pantheon availability at launch = **UNKNOWN**." },
    { type: "h3", text: "KR live (ahead of global)", region: "kr" },
    {
      type: "table",
      headers: ["Source", "Picks"],
      rows: [
        ["Inven Apr", "지혜 + 환상 paintings for CDR to hit 33–35% with titles/wings"],
        ["Hub example PvP build", "Life / 유스티엘 among Pantheon domains — **community build, not SoT**; Hub EN footnoted"],
      ],
    },
    { type: "p", text: "Full Cleric Pantheon board = **UNKNOWN / gap**." },
  ],
  gear: [
    {
      type: "table",
      headers: ["Phase", "Goal", "Notes", "Status"],
      rows: [
        [
          "Story / leveling",
          "Keep party up; shred+regen habit",
          "No Cleric-specific SoT gear list",
          "**UNKNOWN / gap** (Global SoT)",
        ],
        [
          "Week-one dungeon",
          "Heal tools first; weave damage second",
          "Numeric manastone boards not published for global",
          "**UNKNOWN**",
        ],
        ["Toward BiS", "—", "KR endgame only below; never as day-1", "KR labeled"],
      ],
    },
    { type: "h3", text: "KR live (ahead of global) — dated", region: "kr" },
    {
      type: "p",
      text: "**Inven Apr:** Once CDR from Pantheon/titles/wings is enough → Arcana 4 pure + 2 vitality/frenzy; 강타 mirror common; avoid seasonal title that forces full card rework if it drops CDR.",
    },
    {
      type: "p",
      text: "**LDPlayer Apr Arcana blog (affiliate/secondary):** Condemn-first Arcana for attack hybrid; still keep 쾌유의 광휘 / 치유의 빛 for party.",
    },
    { type: "p", text: "**Do not** copy Apr combat-speed / CDR tables as day-1 global." },
  ],
  macros: [
    {
      type: "ul",
      items: [
        "Official Skill Macro only (no mouse software) — SoT week-one voice.",
        "**SoT:** Hold Weak (Earth’s Retribution) into Strong; cancel quieter than Ranger but still do it.",
        "Hand-press: heals / ally rez (소환 부활) / Salvation / Thunderclap — do **not** dump heal bar into hold sequence. Reservation on so heal still fires after cancel. Reincarnating Touch not a weave step.",
        "**KR G-HUB external macros** = do **not** put on week-one SoT voice.",
      ],
    },
  ],
  writtenSources: [
    { title: "SoT classes (Cleric panel)", url: "https://aion2-week-one.vercel.app/classes", region: "Global week-one", confidence: "Confirmed framing", date: "2026-09-20 pack" },
    { title: "Inven 소티메리 PvE comprehensive", url: "https://www.inven.co.kr/board/aion2/6452/16524", region: "KR", confidence: "Strong written (skills/stigmas/caps/cycle)", date: "2026-04-16" },
    { title: "Vortex EN Cleric skill/stigma", url: "https://vortexgaming.io/en/postdetail/688137", region: "KR→EN (Vortex fan-EN)", confidence: "Structured transcript", date: "(pack)" },
    { title: "Vortex KR Cleric skill/stigma", url: "https://vortexgaming.io/postdetail/684217", region: "KR", confidence: "Related video post", date: "(pack)" },
    { title: "LDPlayer Arcana", url: "https://kr.ldplayer.net/blog/aion2-cleric-arcana-build-guide.html", region: "KR", confidence: "Affiliate/secondary", date: "Apr update" },
    { title: "AION2 Hub Global skills", url: "https://aion2hub.com/classes/cleric", region: "Global client EN", confidence: "Client string list", date: "Scale Test 2026-09-19" },
    { title: "Official Skill Macro Naver (SoT cites)", url: "https://blog.naver.com/hyjueng/224163038961", region: "KR", confidence: "Macro", date: "(pack)" },
    { title: "NC Mar 2026 / Gamevu EN", url: "https://about.ncsoft.com/en/news/article/aion2_update_260325", region: "Official / EN", confidence: "Secondary", date: "Mar 2026" },
  ],
  videoSources: [
    { title: "Vortex EN Cleric (via post)", url: "https://vortexgaming.io/en/postdetail/688137", region: "KR→EN", notes: "Structured PvE/PvP stigma tables (fan-EN labeled)" },
    { title: "Inven 소티메리 guide embed", url: "https://www.inven.co.kr/board/aion2/6452/16524", region: "KR", notes: "Prefer written text for claims; video for cycle/macro visuals" },
    { title: "Sep raid care debates", url: "https://www.inven.co.kr/board/aion2/6452", region: "KR", notes: "Mid–Sep posts argue care vs DPS — **no single canonical Sep written guide this run**" },
  ],
  footnotes: [
    { sot: "defense-shred brand / 약화의 낙인", hub: "Debilitating Mark", vortex: "—" },
    { sot: "고통의 연쇄", hub: "Chain of Torment", vortex: "—" },
    { sot: "party regen light / 재생의 빛", hub: "Light of Regeneration", vortex: "—" },
    { sot: "Earth’s Retribution (대지의 응보)", hub: "Earth's Retribution", vortex: "Quake *(fan — map via hangul)*" },
    { sot: "Condemn (단죄)", hub: "Condemnation", vortex: "Divine Punishment *(fan)*" },
    { sot: "Thunderclap (벽력)", hub: "Bolt / Lightning Strike Scattershot *(do not force-map)*", vortex: "—" },
    { sot: "Ally combat rez / 소환 부활", hub: "Summon Resurrection", vortex: "Summon Rez" },
    { sot: "Reincarnating Touch (환생의 손길)", hub: "*(Hub list has Absolution / Benevolence — do not invent map)*", vortex: "—" },
    { sot: "Salvation (구원)", hub: "Salvation", vortex: "Salvation" },
    { sot: "보호의 빛", hub: "Light of Protection", vortex: "Light of Protection" },
    { sot: "대지의 징벌", hub: "Earth Punishment", vortex: "Earth Punishment" },
    { sot: "증폭의 기도", hub: "Prayer of Amplification", vortex: "Amplification Prayer" },
    { sot: "유스티엘의 권능", hub: "Yustiel's Power", vortex: "Yustiel" },
    { sot: "쾌유의 광휘", hub: "Radiant Recovery", vortex: "Light’s Flash *(fan)*" },
    { sot: "치유의 빛", hub: "Healing Light", vortex: "—" },
    { sot: "심판의 번개", hub: "Judgment Thunder", vortex: "Judgment *(fan)*" },
    { sot: "파멸의 목소리", hub: "Voice of Doom", vortex: "Ruin / Voice of Doom" },
    { sot: "면죄", hub: "Absolution", vortex: "Absolution" },
    { sot: "속박", hub: "Root", vortex: "—" },
    { sot: "신성한 기운", hub: "Noble Aura / Divine Aura *(uncertain)*", vortex: "—" },
  ],
  footnoteLead:
    "Where Global-client EN (AION2 Hub) or Vortex fan-EN differs from SoT body names, keep SoT in body. Hangul-only skills stay hangul until SoT adds EN.",
  footnoteNote: "Do **not** invent a merged EN name. Final display remains SoT EN + (한글) until Nhat changes canon.",
  gaps: [
    "SoT EN missing for 보호의 빛 / 대지의 징벌 / 증폭의 기도 / 유스티엘의 권능 / 쾌유의 광휘 / 치유의 빛 / 심판의 번개 / 파멸의 목소리 / 면죄 / 속박 / 신성한 기운",
    "Thunderclap ↔ Hub Bolt/Lightning mapping **uncertain**",
    "Reincarnating Touch Hub string not clearly listed — keep SoT EN",
    "Week-one stigma set beyond Reincarnating Touch",
    "Sep 2026+ written Cleric endgame refresh (Apr guide still best written; board debates exist)",
    "Pantheon full board; NotMeter Cleric heal/DPS snapshot",
    "Global Arcana thinner than KR",
    "Week-one global numeric gear/stat/manastone boards",
  ],
};
