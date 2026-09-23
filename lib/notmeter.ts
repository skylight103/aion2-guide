export const NOTMETER_RESEARCH_STAMP = "September 19, 2026";
export const NOTMETER_CACHE_STAMP = "September 19, 2026, 23:03 UTC";

/** Scoring v2 pack. Do not mix with redesign-absolutes gen 241c329b01d6dcd1. */
export const NOTMETER_SCORING_PACK = "Scoring v2";
export const NOTMETER_PIN_GEN = "9c13dbd56489c717";

/** Weekly shard this snapshot treats as "this week" (Wed 05:00 KST). */
export const THIS_WEEK_LABEL = "09-16→23";

/**
 * NotMeter ranking files for the Scoring v2 pin only.
 * Cite these data paths — not a bare `/g/…/` directory, and not the live
 * latest pointer (that can name a different generation).
 */
export const NOTMETER_CACHE = {
  rankingBody: `https://notmeter.com/g/${NOTMETER_PIN_GEN}/data/notmeter-ranking.json.gz`,
  snowfieldView: `https://notmeter.com/g/${NOTMETER_PIN_GEN}/data/views/sorrow-snowfield-hard.json.gz`,
  deusView: `https://notmeter.com/g/${NOTMETER_PIN_GEN}/data/views/deus-research-hard.json.gz`,
  fallenView: `https://notmeter.com/g/${NOTMETER_PIN_GEN}/data/views/fallen-deva-hard.json.gz`,
  musphelView: `https://notmeter.com/g/${NOTMETER_PIN_GEN}/data/views/musphel-hard.json.gz`,
} as const;

export type DpsSortKey = "typical" | "peak";
export type DpsContentKey = "snowfield" | "deus" | "fallen" | "musphel";

export type DpsClassRow = {
  name: string;
  tag: string;
  typical: number;
  peak: number;
  note: string;
};

export type DpsBoard = {
  label: string;
  hint: string;
  /** True only when a weekly-wed05 shard exists for 09-16→23. */
  thisWeek: boolean;
  classes: readonly DpsClassRow[];
};

/**
 * Integer idx: nDPS P50 (typical) / P90 (peak) versus the leader at that
 * percentile on the same slice, rounded to the nearest integer (0.5 → up).
 * Scoring v2 pin 9c13dbd56489c717. Snowfield idx match the September 19
 * board. Deus Assassin typical is 99 (Scout: 98→99). Fallen uses the same
 * weekly slice and rounding. Musphel has no 09-16→23 weekly shard — that
 * board is Recent14 / All / week of 09-02→09 only.
 * Bars are relative indexes, low→high: left = min(typical, peak),
 * right = max(typical, peak).
 */
export const DPS_BOARDS: Record<DpsContentKey, DpsBoard> = {
  snowfield: {
    label: "Current ranker",
    hint: "Snowfield of Sorrow (Hard) · this week (09-16→23) · all bosses · all CP · nDPS",
    thisWeek: true,
    classes: [
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 100,
        peak: 100,
        note: "Leads this board on nDPS. Party-buff-normalized, so it is not a raw-screenshot win. Same glass as always — no HP budget.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 95,
        peak: 95,
        note: "High typical, tight band, ping-friendly. Spirits keep uptime while you move. The comfortable ranged start still holds.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 90,
        peak: 92,
        note: "Third on nDPS and the largest DPS sample. Tight band — the class that shows up. Aimed Arrow care is not a rewrite.",
      },
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 80,
        peak: 84,
        note: "Lowest typical of the four on this dungeon once buffs are stripped. Still posts the raw (un-normalized) max. You pay for backs.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 78,
        peak: 81,
        note: "Lowest personal nDPS in a real party. Dummy parses flatter this. Party lifesteal and damage buffs are the payment.",
      },
    ],
  },
  deus: {
    label: "Older farm",
    hint: "Corrupted Deus Research Base (Hard) · this week (09-16→23) · all bosses · all CP · nDPS",
    thisWeek: true,
    classes: [
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 100,
        peak: 97,
        note: "Typical still first. Peak loses to Assassin. Same glass. Do not read this as a week-one door.",
      },
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 99,
        peak: 100,
        note: "Peak first on the older high-volume farm. Typical sits on Sorcerer’s shoulder. Phantom Clone care is not global.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 93,
        peak: 93,
        note: "Middle of the pack, huge sample. The class that shows up when the board is not a brand-new ranker dungeon.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 91,
        peak: 95,
        note: "Typical sits with Gladiator. Peak climbs. Still the comfortable ranged start if you are not chasing this farm’s ceiling.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 91,
        peak: 91,
        note: "In the pack on personal nDPS here, still not the reason you bring one. Buffs pay the slot.",
      },
    ],
  },
  fallen: {
    label: "Fallen",
    hint: "Fallen Deva Castle (Hard) · this week (09-16→23) · all bosses · all CP · nDPS",
    thisWeek: true,
    classes: [
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 100,
        peak: 100,
        note: "Leads typical and peak on this week’s Fallen Hard. Same backs tax. Not a week-one door.",
      },
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 92,
        peak: 87,
        note: "Typical second. Peak sits under Assassin. Same glass.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 83,
        peak: 86,
        note: "Typical ahead of Ranger on this slice. Personal nDPS is still not why you bring one.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 81,
        peak: 84,
        note: "The class that shows up. Typical sits under Gladiator here.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 71,
        peak: 83,
        note: "Lowest typical of the five on this week’s Fallen slice. Peak climbs. Still the comfortable ranged start if you are not chasing this farm.",
      },
    ],
  },
  musphel: {
    label: "Musphel (not this week)",
    hint: "Muspel’s Grail (Hard) · Recent 14 / All / week of 09-02→09 · no 09-16→23 weekly shard · all bosses · all CP · nDPS",
    thisWeek: false,
    classes: [
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 100,
        peak: 100,
        note: "Leads Recent 14, All, and the older 09-02→09 week. Do not read this as a this-week strip — Musphel has no weekly shard for 09-16→23.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 91,
        peak: 88,
        note: "Second on typical once buffs are stripped. The class that shows up on the older Musphel week.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 88,
        peak: 89,
        note: "Tight with Ranger on peak. Comfortable ranged start if you are looking at Musphel at all.",
      },
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 85,
        peak: 87,
        note: "In the pack. Phantom Clone care is not global. You still pay for backs.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 80,
        peak: 83,
        note: "Lowest personal nDPS of the five on this older-week board. Buffs pay the slot.",
      },
    ],
  },
};

export const COMBAT_PROFILE = [
  ["Assassin", "51%", "68%", "88%", "6%", "92%"],
  ["Ranger", "61%", "83%", "84%", "77%", "17%"],
  ["Sorcerer", "61%", "68%", "87%", "44%", "13%"],
  ["Spiritmaster", "57%", "82%", "81%", "66%", "24%"],
  ["Gladiator", "57%", "81%", "86%", "88%", "6%"],
] as const;

export const STAT_CONVERSIONS = [
  ["Power", "+0.1 percentage points Attack Increase per 1"],
  ["Destruction", "+0.2 percentage points Attack Increase per 1"],
  ["Justice", "+0.2 percentage points Perfect per 1"],
  ["Wisdom", "+0.2 percentage points Smite per 1"],
] as const;
