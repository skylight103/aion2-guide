import {
  asmodianGatherSpots,
  elyosGatherSpots,
  type GatherSpot,
} from "@/lib/mapGatherData";
import type { MapFaction, MapPin } from "@/lib/weekOneMap";

export type GatherGroup = "energy" | "ore" | "wood" | "gem" | "herb" | "cook" | "seafood";

export type GatherKind =
  | "odyle"
  | "ore"
  | "log"
  | "asvata"
  | "sapphire"
  | "diamond"
  | "ruby"
  | "aria"
  | "targena"
  | "azpha"
  | "calendula"
  | "coriolus"
  | "kukuru"
  | "mela"
  | "ohkra"
  | "morfa"
  | "raydam"
  | "inina"
  | "cypri"
  | "pujery"
  | "conide";

export type GatherMeta = {
  kind: GatherKind;
  group: GatherGroup;
  label: string;
  icon: string;
  why: string;
  factions: MapFaction[];
};

const I = "/maps/icons";

export const gatherKinds: GatherMeta[] = [
  { kind: "odyle", group: "energy", label: "Odyle", icon: `${I}/odyle.webp`, why: "Air nodes. Every recipe and morph. Pick these up first.", factions: ["elyos", "asmodian"] },
  { kind: "ore", group: "ore", label: "Orichalcum Ore", icon: `${I}/ore.webp`, why: "Smith and armor XP, then the weapon chain. Vendor solvent.", factions: ["elyos", "asmodian"] },
  { kind: "log", group: "wood", label: "Yggdrasil Log", icon: `${I}/log.webp`, why: "Handicraft wood on Verteron. Shields, Asvata-line weapons, and higher scrolls.", factions: ["elyos"] },
  { kind: "asvata", group: "wood", label: "Asvata Log", icon: `${I}/log.webp`, why: "Altgard wood. Same handicraft sink as Yggdrasil on the Elyos side.", factions: ["asmodian"] },
  { kind: "sapphire", group: "gem", label: "Sapphire Gemstone", icon: `${I}/gem.webp`, why: "Gem line. Jewelry and High scrolls.", factions: ["elyos", "asmodian"] },
  { kind: "diamond", group: "gem", label: "Diamond Gemstone", icon: `${I}/gem.webp`, why: "Gem line. Jewelry and High scrolls.", factions: ["elyos", "asmodian"] },
  { kind: "ruby", group: "gem", label: "Ruby Gemstone", icon: `${I}/gem.webp`, why: "Gem line. Jewelry and High scrolls.", factions: ["elyos", "asmodian"] },
  { kind: "aria", group: "herb", label: "Aria", icon: `${I}/herb.webp`, why: "Early Verteron herb. Alchemy potions on the story road.", factions: ["elyos"] },
  { kind: "targena", group: "herb", label: "Targena", icon: `${I}/herb.webp`, why: "Later Verteron herb. Same alchemy sink as Aria.", factions: ["elyos"] },
  { kind: "azpha", group: "herb", label: "Azpha", icon: `${I}/herb.webp`, why: "Altgard herb. Alchemy potions on the Asmodian road.", factions: ["asmodian"] },
  { kind: "calendula", group: "herb", label: "Calendula", icon: `${I}/flower.webp`, why: "Altgard flower-herb. Same alchemy sink as Azpha.", factions: ["asmodian"] },
  { kind: "coriolus", group: "cook", label: "Coriolus", icon: `${I}/veg.webp`, why: "Verteron cooking veg. Food for the character who will eat it.", factions: ["elyos"] },
  { kind: "kukuru", group: "cook", label: "Kukuru", icon: `${I}/berry.webp`, why: "Verteron cooking fruit. Do not spend Brilliant Odyle on a supply quest.", factions: ["elyos"] },
  { kind: "mela", group: "cook", label: "Mela", icon: `${I}/flower.webp`, why: "Verteron cooking flower. Same food chain as Kukuru.", factions: ["elyos"] },
  { kind: "ohkra", group: "cook", label: "Ohkra", icon: `${I}/veg.webp`, why: "Altgard cooking veg. Food for the character who will eat it.", factions: ["asmodian"] },
  { kind: "morfa", group: "cook", label: "Morfa", icon: `${I}/berry.webp`, why: "Altgard cooking fruit. Same food chain as Ohkra.", factions: ["asmodian"] },
  { kind: "raydam", group: "cook", label: "Raydam", icon: `${I}/flower.webp`, why: "Altgard cooking flower. Same food chain as Morfa.", factions: ["asmodian"] },
  { kind: "inina", group: "seafood", label: "Inina", icon: `${I}/shellfish.webp`, why: "Verteron shellfish. Cooking pick, not a morph bank dump.", factions: ["elyos"] },
  { kind: "cypri", group: "seafood", label: "Cypri", icon: `${I}/shellfish.webp`, why: "Verteron shellfish. Week-one food, not a BiS craft mat.", factions: ["elyos"] },
  { kind: "pujery", group: "seafood", label: "Pujery", icon: `${I}/shellfish.webp`, why: "Altgard shellfish. Cooking pick on the Asmodian coast.", factions: ["asmodian"] },
  { kind: "conide", group: "seafood", label: "Conide", icon: `${I}/shellfish.webp`, why: "Altgard shellfish. Same cook sink as Pujery.", factions: ["asmodian"] },
];

export const gatherGroups: { id: GatherGroup; label: string }[] = [
  { id: "energy", label: "Energy" },
  { id: "ore", label: "Ore" },
  { id: "wood", label: "Wood" },
  { id: "gem", label: "Gems" },
  { id: "herb", label: "Herbs" },
  { id: "cook", label: "Cooking" },
  { id: "seafood", label: "Shellfish" },
];

const DISTRICT_LABEL: Record<string, string> = {
  poeta: "Poeta",
  forward: "Dawn Forward Base",
  daminu: "Daminu Forest",
  dawn: "Dawn Legion Base",
  cantas: "Cantas Valley",
  coast: "Coastal Camp",
  eastern: "Eastern Cantas",
  marsh: "Marsh / Elun",
  ruins: "Fortress Ruins",
  temp: "Temp Outpost",
  merc: "Mercenary stretch",
  "later-v": "Later Verteron",
  ishalgen: "Ishalgen",
  aldelle: "Aldelle Village",
  azrakar: "Azrakar Camp",
  haven: "Safe Haven",
  shadow: "Shadow Hall",
  graves: "Graveyards",
  fang: "Fang / dumpsite",
  elim: "Elim groves",
  minushan: "Minushan",
  nornir: "Nornir / Moslan",
  hammer: "Steel Hammer",
  idun: "Idun's Lake",
  "later-a": "Later Altgard",
};

function isGatherKind(kind: string): kind is GatherKind {
  return gatherKinds.some((row) => row.kind === kind);
}

function pinsFrom(faction: MapFaction, spots: GatherSpot[]): MapPin[] {
  return spots.flatMap(([kind, district, n, x, y, id, weekOne]) => {
    if (!isGatherKind(kind)) return [];
    const meta = gatherKinds.find((row) => row.kind === kind);
    const stretch = DISTRICT_LABEL[district] ?? district;
    return [
      {
        id: `${faction}-gather-${kind}-${id}`,
        name: `${meta?.label ?? kind} · ${stretch} ${n}`,
        faction,
        layer: "gather",
        district,
        weekOne,
        x,
        y,
        kind,
      },
    ];
  });
}

export const gatherPins: MapPin[] = [
  ...pinsFrom("elyos", elyosGatherSpots),
  ...pinsFrom("asmodian", asmodianGatherSpots),
];

export function gathersForFaction(faction: MapFaction) {
  return gatherPins.filter((pin) => pin.faction === faction);
}

export function gatherKindsForFaction(faction: MapFaction) {
  return gatherKinds.filter((row) => row.factions.includes(faction));
}

export function gatherMeta(kind: string | undefined) {
  return gatherKinds.find((row) => row.kind === kind);
}

export function gatherStretch(pin: MapPin) {
  return pin.name.replace(/^[^·]+ · /, "").replace(/ \d+$/, "");
}
