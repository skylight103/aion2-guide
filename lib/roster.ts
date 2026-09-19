export const classes = [
  "Undecided",
  "Templar",
  "Gladiator",
  "Assassin",
  "Ranger",
  "Sorcerer",
  "Spiritmaster",
  "Cleric",
  "Chanter",
] as const;

export const roles = ["Undecided", "Tank", "Healer", "Support", "Melee DPS", "Ranged DPS"] as const;
export const slots = ["Main", "Alt", "Undecided"] as const;

export type RosterRow = {
  id: string;
  player: string;
  character: string;
  className: (typeof classes)[number];
  role: (typeof roles)[number];
  slot: (typeof slots)[number];
  discord: string;
  notes: string;
};

const MAX_ROWS = 80;
const MAX_TEXT = 120;

export function emptyRow(): RosterRow {
  return {
    id: crypto.randomUUID(),
    player: "",
    character: "",
    className: "Undecided",
    role: "Undecided",
    slot: "Undecided",
    discord: "",
    notes: "",
  };
}

function clip(value: unknown) {
  return String(value ?? "").slice(0, MAX_TEXT);
}

function pick<T extends readonly string[]>(value: unknown, options: T, fallback: T[number]): T[number] {
  return options.includes(value as T[number]) ? (value as T[number]) : fallback;
}

export function parseRoster(input: unknown): RosterRow[] {
  if (!Array.isArray(input)) return [emptyRow()];
  const rows = input.slice(0, MAX_ROWS).map((row) => {
    const item = row && typeof row === "object" ? (row as Record<string, unknown>) : {};
    return {
      id: clip(item.id) || crypto.randomUUID(),
      player: clip(item.player),
      character: clip(item.character),
      className: pick(item.className, classes, "Undecided"),
      role: pick(item.role, roles, "Undecided"),
      slot: pick(item.slot, slots, "Undecided"),
      discord: clip(item.discord),
      notes: clip(item.notes),
    };
  });
  return rows.length ? rows : [emptyRow()];
}
