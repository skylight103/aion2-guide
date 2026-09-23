export const CLASS_SLUGS = [
  "templar",
  "gladiator",
  "assassin",
  "ranger",
  "sorcerer",
  "spiritmaster",
  "cleric",
  "chanter",
] as const;

export type ClassSlug = (typeof CLASS_SLUGS)[number];

export type RoleTone = "tank" | "bruiser" | "melee" | "ranged" | "magic" | "heal" | "support";

export type RegionKind = "week-one" | "kr";

export type SourceRow = {
  title: string;
  url: string | null;
  region: string;
  confidence?: string;
  date?: string;
  notes?: string;
};

export type NamingRow = {
  sot: string;
  hub: string;
  vortex?: string;
  notes?: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "h3"; text: string; region?: RegionKind }
  | { type: "h4"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; tone?: "gold" | "red" | "blue" | "green"; text: string }
  | { type: "quote"; text: string };

export type ClassDeepGuide = {
  slug: ClassSlug;
  name: string;
  kr: string;
  role: string;
  roleTone: RoleTone;
  weapons: string;
  portrait: string;
  portraitAlt: string;
  largePortrait: string;
  identity: string;
  displayNote?: string;
  overviewFields: [string, string][];
  overviewBody: Block[];
  stats: Block[];
  sp: Block[];
  rotation: Block[];
  stigmas: Block[];
  daevanion: Block[];
  pantheon: Block[];
  gear: Block[];
  macros: Block[];
  writtenSources: SourceRow[];
  videoSources: SourceRow[];
  sourceNotes?: string[];
  footnotes: NamingRow[];
  footnoteLead?: string;
  footnoteNote?: string;
  gaps: string[];
};

export const roleToneClass: Record<RoleTone, string> = {
  tank: "bg-[rgba(212,175,106,0.18)] text-[var(--gold-2)]",
  bruiser: "bg-[rgba(232,168,124,0.16)] text-[#f0c9a8]",
  melee: "bg-[rgba(226,109,109,0.14)] text-[#f0b0b0]",
  ranged: "bg-[rgba(125,206,160,0.14)] text-[var(--ok)]",
  magic: "bg-[rgba(155,140,255,0.16)] text-[var(--asmo)]",
  heal: "bg-[rgba(125,206,160,0.16)] text-[#b6e6c9]",
  support: "bg-[rgba(155,140,255,0.14)] text-[#c4b8ff]",
};

export type RosterGlance = {
  slug: ClassSlug;
  name: string;
  kr: string;
  role: string;
  playIf: string;
  skipIf: string;
  status: string;
};

export const rosterGlance: RosterGlance[] = [
  {
    slug: "templar",
    name: "Templar",
    kr: "수호성",
    role: "Main tank",
    playIf: "Reliable group demand",
    skipIf: "You only care about personal meter",
    status: "Checker-clear",
  },
  {
    slug: "gladiator",
    name: "Gladiator",
    kr: "검성",
    role: "Melee bruiser",
    playIf: "Melee that lives / party value",
    skipIf: "Highest raw parse only",
    status: "Checker-clear",
  },
  {
    slug: "assassin",
    name: "Assassin",
    kr: "살성",
    role: "Melee burst",
    playIf: "Picks / PvP openers",
    skipIf: "You hate dying on a mistimed engage",
    status: "Checker-clear",
  },
  {
    slug: "ranger",
    name: "Ranger",
    kr: "궁성",
    role: "Ranged physical",
    playIf: "Range + open-world PvP",
    skipIf: "You panic in melee",
    status: "Checker-clear",
  },
  {
    slug: "sorcerer",
    name: "Sorcerer",
    kr: "마도성",
    role: "Ranged magic burst",
    playIf: "Classic caster burst",
    skipIf: "You need a forgiving HP pool",
    status: "Checker-clear",
  },
  {
    slug: "spiritmaster",
    name: "Spiritmaster",
    kr: "정령성",
    role: "Ranged magic + spirits",
    playIf: "Comfortable PvE DPS start",
    skipIf: "You hate managing extra units",
    status: "Checker-clear",
  },
  {
    slug: "cleric",
    name: "Cleric",
    kr: "치유성",
    role: "Main healer",
    playIf: "Heal + res spine",
    skipIf: "You want a damage parse",
    status: "Checker-clear",
  },
  {
    slug: "chanter",
    name: "Chanter",
    kr: "호법성",
    role: "Melee support",
    playIf: "Party buffs while fighting",
    skipIf: "You expect to replace Cleric",
    status: "Checker-clear",
  },
];

export const beginnerPicks: [string, string, string][] = [
  ["Easiest ranged DPS", "Spiritmaster or Ranger", "Range + current comfort"],
  ["Melee without Assassin pain", "Gladiator", "Durability while you learn flight"],
  ["Always get a dungeon slot", "Templar or Cleric", "Role scarcity beats a DPS queue"],
  ["Support without full heal duty", "Chanter", "Buff identity is unique"],
  ["High skill / PvP", "Assassin", "Only if you accept the deaths"],
];

export const firstHour = [
  "Bind move, flight, a defense key, and first damage/heal keys",
  "Comfort on story mobs without staring at the bar",
  "After wings, one safe airborne loop",
  "Don't rebuild for PvP until a story/dungeon fight feels normal",
];
