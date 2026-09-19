import { tracesForFaction } from "@/lib/mapTraces";

export type MapFaction = "elyos" | "asmodian";
export type MapLayer = "hub" | "sealed" | "stronghold" | "trace";
export type MapLayerGroup = "stops" | "find";

export type MapDistrict = {
  id: string;
  label: string;
  hint: string;
  /** Percent of the parchment, origin top-left. Sidebar region only. */
  x: number;
  y: number;
  w: number;
  h: number;
  later?: boolean;
};

export type MapPin = {
  id: string;
  name: string;
  faction: MapFaction;
  layer: MapLayer;
  district: string;
  level?: number;
  weekOne: boolean;
  note?: string;
  /** Parchment percent. Traces carry this; hubs / seals / forts use mapPinCoords. */
  x?: number;
  y?: number;
};

export const mapArt = {
  elyos: { src: "/maps/verteron.webp", label: "Verteron" },
  asmodian: { src: "/maps/altgard.webp", label: "Altgard" },
} as const;

function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function hub(
  faction: MapFaction,
  district: string,
  name: string,
  level: number,
  weekOne: boolean,
  note?: string,
): MapPin {
  return {
    id: `${faction}-hub-${slug(name)}`,
    name,
    faction,
    layer: "hub",
    district,
    level,
    weekOne,
    note,
  };
}

function sealed(
  faction: MapFaction,
  district: string,
  level: number,
  names: string[],
): MapPin[] {
  return names.map((name) => ({
    id: `${faction}-seal-${slug(name)}`,
    name,
    faction,
    layer: "sealed" as const,
    district,
    level,
    weekOne: level <= 25,
  }));
}

function forts(faction: MapFaction, district: string, names: string[]): MapPin[] {
  return names.map((name) => ({
    id: `${faction}-fort-${slug(name)}`,
    name,
    faction,
    layer: "stronghold" as const,
    district,
    weekOne: true,
    note: "Named fort. Noble Belt Enhance Scrolls.",
  }));
}

export const elyosDistricts: MapDistrict[] = [
  { id: "poeta", label: "Poeta", hint: "Prologue · Ishtar Castle", x: 14, y: 75, w: 14, h: 12 },
  { id: "forward", label: "Dawn Forward Base", hint: "First camp after the escape", x: 36, y: 62, w: 10, h: 10 },
  { id: "daminu", label: "Daminu Forest", hint: "Ascension on the Elyos path", x: 38, y: 30, w: 14, h: 12 },
  { id: "dawn", label: "Dawn Legion Base", hint: "Cantas hub · gear and vendors", x: 48, y: 46, w: 8, h: 8 },
  { id: "cantas", label: "Cantas Valley", hint: "Lv 10 hideouts around the base", x: 44, y: 42, w: 16, h: 14 },
  { id: "coast", label: "Coastal Camp", hint: "Story camp · valley of hope", x: 44, y: 66, w: 14, h: 10 },
  { id: "eastern", label: "Eastern Cantas", hint: "Collapsed Barrier Tower", x: 58, y: 46, w: 12, h: 10 },
  { id: "marsh", label: "Marsh / Elun", hint: "Libraries and swamp hideouts", x: 34, y: 50, w: 12, h: 14 },
  { id: "ruins", label: "Fortress Ruins", hint: "Verteron Fortress · lv 20 seals", x: 58, y: 26, w: 16, h: 14 },
  { id: "temp", label: "Temp Outpost", hint: "Dawn Legion temporary camp", x: 52, y: 54, w: 12, h: 10 },
  { id: "merc", label: "Mercenary stretch", hint: "Wind Breeze · Astin · ~lv 25", x: 66, y: 42, w: 12, h: 12 },
  {
    id: "later-v",
    label: "Later Verteron",
    hint: "Lv 30–40 hideouts",
    x: 68,
    y: 22,
    w: 14,
    h: 18,
    later: true,
  },
];

export const asmodianDistricts: MapDistrict[] = [
  { id: "ishalgen", label: "Ishalgen", hint: "Prologue · Fafnir Fortress", x: 44, y: 66, w: 12, h: 12 },
  { id: "aldelle", label: "Aldelle Village", hint: "Fog village after the escape", x: 50, y: 78, w: 12, h: 10 },
  { id: "azrakar", label: "Azrakar Camp", hint: "Brigade prison compound", x: 32, y: 62, w: 12, h: 10 },
  { id: "haven", label: "Safe Haven", hint: "Early Altgard hub", x: 40, y: 36, w: 10, h: 10 },
  { id: "shadow", label: "Shadow Hall", hint: "Story hub · Empyrean Monolith", x: 50, y: 34, w: 10, h: 10 },
  { id: "graves", label: "Graveyards", hint: "Gravekeeper · crematorium", x: 56, y: 46, w: 12, h: 12 },
  { id: "fang", label: "Fang / dumpsite", hint: "Fang Hideout · Sanctum dumpsite", x: 26, y: 32, w: 12, h: 12 },
  { id: "elim", label: "Elim groves", hint: "Elim's Rest · Odar's Shade", x: 48, y: 24, w: 14, h: 10 },
  { id: "minushan", label: "Minushan", hint: "Stolen relics · ~lv 25", x: 62, y: 38, w: 12, h: 10 },
  { id: "nornir", label: "Nornir / Moslan", hint: "Fate sisters · lv 26+", x: 22, y: 22, w: 14, h: 12, later: true },
  { id: "hammer", label: "Steel Hammer", hint: "Workcamp · canyons · lv 32+", x: 34, y: 20, w: 14, h: 10, later: true },
  { id: "idun", label: "Idun's Lake", hint: "Story climax stretch · lv 37+", x: 54, y: 20, w: 14, h: 10, later: true },
  {
    id: "later-a",
    label: "Later Altgard",
    hint: "Lv 30–40 hideouts",
    x: 58,
    y: 70,
    w: 16,
    h: 16,
    later: true,
  },
];

export const mapDistricts: Record<MapFaction, MapDistrict[]> = {
  elyos: elyosDistricts,
  asmodian: asmodianDistricts,
};

export const mapPins: MapPin[] = [
  hub("elyos", "poeta", "Ishtar Castle", 1, true, "Elyos start. Walk, do not farm."),
  hub("elyos", "forward", "Dawn Legion Forward Base", 3, true, "First real camp after Poeta."),
  hub("elyos", "daminu", "Daminu Forest", 5, true, "Ascension quest Fledgling Wings."),
  hub("elyos", "dawn", "Dawn Legion Base", 10, true, "Bind / vendor hub in Cantas Valley."),
  hub("elyos", "cantas", "Cantas Valley Base", 11, true, "Story bird's-eye camp."),
  hub("elyos", "coast", "Coastal Camp", 12, true),
  hub("elyos", "eastern", "Eastern Cantas Campsite", 14, true, "Collapsed Barrier Tower nearby."),
  hub("elyos", "marsh", "Marsh Outpost", 16, true),
  hub("elyos", "ruins", "Verteron Fortress Ruins", 20, true, "Story infiltration. Several lv 20 seals sit under the fortress."),
  hub("elyos", "temp", "Dawn Legion Temporary Outpost", 22, true),
  hub("elyos", "merc", "Wind Breeze Merchant HQ", 24, true),
  hub("elyos", "merc", "Astin Mercenaries Base", 25, true),

  ...sealed("elyos", "cantas", 10, [
    "Poacher's Den",
    "Mysterious Mushroom Cave",
    "Cave of the Desperate",
    "Lupyllini Habitat",
    "Chilly Hideout",
  ]),
  ...sealed("elyos", "marsh", 15, [
    "Spirit Flower Cave",
    "Cursed Hideout",
    "Filth Pit",
    "Corrupted Spiritmaster's Residence",
    "Looted Repository",
    "Marsh Library",
    "Akilo Thieves Den",
    "Deep Underground Cave",
    "Anguish Hideout",
    "Bibliophile's Grave",
    "Forest Library",
  ]),
  ...sealed("elyos", "ruins", 20, [
    "Distorted Cave",
    "Karat's Nest",
    "Fortress Jail",
    "Fortress Grave",
    "Hidden Ruins Altar",
    "Collapsed Fortress Basement",
  ]),
  ...sealed("elyos", "temp", 25, [
    "Hidden Valley",
    "Abandoned Odylium Cave",
    "Solitary Rock Tomb",
    "Cave Storage",
    "Deadly Poison Den",
    "Herb Cave",
  ]),
  ...sealed("elyos", "merc", 25, [
    "Red Dragon Altar",
    "Wild Biruta Habitat",
    "Fissure Cave",
    "Wild Kuru Habitat",
    "Aullaeu Oratory",
    "Prison of Exiles",
    "Konutin's Cave",
  ]),
  ...sealed("elyos", "later-v", 30, [
    "Altar of Hope",
    "Balaur Scouts Outpost",
    "Broken Danuar Mysticarium",
    "Canyon Library",
    "Deep and Dark Pit",
    "Experimental Prison Compound",
    "Guardian's Armory",
    "Kidnapper's Hold",
    "Kius' Residence",
    "Klaw Den",
    "Kraka's Altar",
    "Looted Pilgrim's Rest",
    "Renegade Base",
    "Rift Cave",
    "Scribe's Room",
    "Targoth's Cave",
  ]),
  ...sealed("elyos", "later-v", 35, [
    "Balaur Scouts Campsite",
    "Cave of the Defeated",
    "Dratona Outpost",
    "Laborers Training Ground",
  ]),
  ...sealed("elyos", "later-v", 40, [
    "Dehinon's Hideout",
    "Grave of the Wrathful Dead",
    "Illusionary Ruins",
    "Krall Barracks",
    "Plantation Storage",
  ]),
  ...forts("elyos", "cantas", [
    "Romlon's Hideout",
    "Forest Shade Execution Site",
    "Renegade Hideout",
    "Plateau Hill Base",
    "Ugaros Thieves Campsite",
    "Poacher's Base",
    "Gargos Thieves Campsite",
    "Canyon Thieves Den",
    "Cohta Outpost",
    "Mantasch Patrol Base",
    "Sehna Outpost",
    "Sabga Balaur Campsite",
    "Maktashan Outpost",
  ]),

  hub("asmodian", "ishalgen", "Fafnir Fortress", 1, true, "Asmodian start. Walk, do not farm."),
  hub("asmodian", "aldelle", "Aldelle Village", 2, true, "Fog village through Shadow Forest."),
  hub("asmodian", "azrakar", "Azrakar Brigade Camp", 7, true),
  hub("asmodian", "haven", "Safe Haven", 10, true, "Early Altgard bind / vendor hub."),
  hub("asmodian", "shadow", "Shadow Hall", 10, true, "Story hub. Empyrean Monolith step."),
  hub("asmodian", "graves", "Gravekeeper Camp", 14, true),
  hub("asmodian", "fang", "Fang Hideout", 18, true, "Story camp."),
  hub("asmodian", "elim", "Elim's Rest", 21, true),
  hub("asmodian", "elim", "Odar's Shade", 22, true),
  hub("asmodian", "minushan", "Minushan Site", 24, true),
  hub("asmodian", "nornir", "Nornir Assembly", 26, false, "Moslan / fate sisters. After the energy gate."),
  hub("asmodian", "hammer", "Steel Hammer Workcamp", 35, false),
  hub("asmodian", "idun", "Idun's Lake", 37, false),

  ...sealed("asmodian", "haven", 10, [
    "Abandoned One's Grave",
    "Dratona Cave",
    "Dusk Pit",
    "Hidden Vein Cave",
    "Lost Ruins",
    "Old Graveyard",
    "Ossuary of the Noble",
  ]),
  ...sealed("asmodian", "shadow", 10, [
    "Poisonous Plant Habitat",
    "Smuggler's Cave",
    "Treasure Hunter's Residence",
    "Trickster's Den",
    "Valka's Nest",
    "Watcher's Temporary Outpost",
  ]),
  ...sealed("asmodian", "graves", 15, [
    "Abandoned Archon Jail",
    "Bloodsoaked Confessional",
    "Blue Dragon's Trap",
    "Fafnite Storage Room",
    "Fanatics' Den",
    "Fortuneteller's Grave",
    "Homish's Prison Compound",
    "Howling Den",
    "Library of Foresight",
    "Prison of Oblivion",
    "Victims' Cave",
  ]),
  ...sealed("asmodian", "fang", 20, [
    "Abandoned Memorial Room",
    "Closed Hideout",
    "Destroyed Scriptorium",
    "Lamnah Base",
    "Predator's Lair",
    "Unstable Cave",
    "Worshiper's Underground Cave",
  ]),
  ...sealed("asmodian", "elim", 25, [
    "Dark Root Cave",
    "Drana Depository",
    "High Priest's Ruins",
    "Skurv Laborer Den",
    "Twisted Pit",
  ]),
  ...sealed("asmodian", "later-a", 30, [
    "All-Curing Cave",
    "Dratona Assembly Area",
    "Final Haven",
    "Insectoid Tunnel",
    "Library of Patience",
    "Library of Wisdom",
    "Rift Fissure",
  ]),
  ...sealed("asmodian", "later-a", 35, [
    "Destruction Archons Armory",
    "Empty Cave",
    "Fungie Habitat",
    "Lonely Rock Chasm",
    "Odylium Marauder Den",
    "Pirate's Treasure Storage",
    "Place of Rest",
    "Rock Cave",
    "Scale Altar",
    "Shulak Cave",
  ]),
  ...sealed("asmodian", "later-a", 40, [
    "Ascetic's Cave",
    "Den of Exiles",
    "Kumbahum's Cave",
    "Lagta Fafnite Storage",
    "Spider Cave",
    "Tayga Breeding Ground",
    "Warriors' Rest",
  ]),
];

export const mapLayerMeta: Record<MapLayer, { label: string; short: string; why: string }> = {
  hub: {
    label: "Story hubs",
    short: "Hubs",
    why: "Camps the Hero quest actually sends you to. Likely bind / vendor / flight spots.",
  },
  sealed: {
    label: "Sealed dungeons",
    short: "Sealed",
    why: "Hideouts. First-clear Enhance Stones and Daevanion Crystals.",
  },
  stronghold: {
    label: "Strongholds",
    short: "Forts",
    why: "Field forts. Noble Belt Enhance Scrolls. Scattered across the map, not one fortress.",
  },
  trace: {
    label: "Empyrean Traces",
    short: "Traces",
    why: "Field feathers. Turn them into that zone’s monolith for Wisdom Stones and Revelation Amulet Enhance Scrolls.",
  },
};

export const mapLayerGroups: Record<MapLayerGroup, { label: string; layers: MapLayer[] }> = {
  stops: { label: "Stops", layers: ["hub", "sealed", "stronghold"] },
  find: { label: "Find", layers: ["trace"] },
};

export const mapZoneMeta: Record<
  MapFaction,
  {
    zone: string;
    factionLabel: string;
    atlasSealed: number;
    atlasForts: number;
    namedSealed: number;
    namedForts: number;
    fortNote: string;
  }
> = {
  elyos: {
    zone: "Verteron",
    factionLabel: "Elyos",
    atlasSealed: 51,
    atlasForts: 10,
    namedSealed: mapPins.filter((p) => p.faction === "elyos" && p.layer === "sealed").length,
    namedForts: mapPins.filter((p) => p.faction === "elyos" && p.layer === "stronghold").length,
    fortNote:
      "aion2hub names 13 Verteron forts (it says 14). Atlas collectible layer shows 10 unnamed dots. aion2t dumps 100+ strongholds on the same zone. We pin the named aion2hub list on in-game marker spots.",
  },
  asmodian: {
    zone: "Altgard",
    factionLabel: "Asmodian",
    atlasSealed: 59,
    atlasForts: 15,
    namedSealed: mapPins.filter((p) => p.faction === "asmodian" && p.layer === "sealed").length,
    namedForts: 0,
    fortNote:
      "Atlas KR shows 15 Altgard stronghold dots with no names. aion2hub confirms forts exist for belt scrolls but does not list them. No invented names — clear forts in-client.",
  },
};

export function pinsForFaction(faction: MapFaction) {
  return [...mapPins.filter((p) => p.faction === faction), ...tracesForFaction(faction)];
}

export function districtById(faction: MapFaction, id: string) {
  return mapDistricts[faction].find((d) => d.id === id);
}

