import type { MapFaction, MapPin } from "@/lib/weekOneMap";

export type VendorKind =
  | "goods"
  | "alchemy"
  | "armor"
  | "blacksmith"
  | "cooking"
  | "handicraft"
  | "craft"
  | "morph"
  | "storage";

export const vendorKindMeta: Record<VendorKind, { label: string; short: string }> = {
  goods: { label: "General Goods", short: "Goods" },
  alchemy: { label: "Alchemy Table", short: "Alchemy" },
  armor: { label: "Armor Table", short: "Armor" },
  blacksmith: { label: "Blacksmith Table", short: "Smith" },
  cooking: { label: "Cooking Table", short: "Cook" },
  handicraft: { label: "Handicraft Table", short: "Craft table" },
  craft: { label: "Crafting Merchant", short: "Craft shop" },
  morph: { label: "Morph Merchant", short: "Morph" },
  storage: { label: "Storage", short: "Storage" },
};

type Town = {
  id: string;
  name: string;
  district: string;
  weekOne: boolean;
  x: number;
  y: number;
};

type Camp = Town;

const TOWNS: Record<MapFaction, Town[]> = {
  elyos: [
    { id: "dawn-legion-base", name: "Dawn Legion Base", district: "dawn", weekOne: true, x: 36.83, y: 38.29 },
    { id: "zumion-village", name: "Zumion Village", district: "later-v", weekOne: false, x: 57.47, y: 52.1 },
  ],
  asmodian: [
    { id: "safe-haven", name: "Safe Haven", district: "haven", weekOne: true, x: 39.32, y: 34.29 },
    { id: "nornir-assembly", name: "Nornir Assembly", district: "nornir", weekOne: false, x: 59.19, y: 47.44 },
  ],
};

/** Week-one / later camps that keep a goods stall (and usually a craft shop). */
const GOODS_CAMPS: Record<MapFaction, Camp[]> = {
  elyos: [
    { id: "dawn-legion-forward-base", name: "Dawn Legion Forward Base", district: "forward", weekOne: true, x: 38.55, y: 66.4 },
    { id: "daminu-forest", name: "Daminu Forest", district: "daminu", weekOne: true, x: 40.8, y: 31.8 },
    { id: "cantas-valley-base", name: "Cantas Valley Base", district: "cantas", weekOne: true, x: 36.5, y: 43.93 },
    { id: "coastal-camp", name: "Coastal Camp", district: "coast", weekOne: true, x: 38.37, y: 45.91 },
    { id: "eastern-cantas-campsite", name: "Eastern Cantas Campsite", district: "eastern", weekOne: true, x: 41.13, y: 41.22 },
    { id: "marsh-outpost", name: "Marsh Outpost", district: "marsh", weekOne: true, x: 47.2, y: 41.48 },
    { id: "verteron-fortress-ruins", name: "Verteron Fortress Ruins", district: "ruins", weekOne: true, x: 51.67, y: 48.9 },
    { id: "dawn-legion-temporary-outpost", name: "Dawn Legion Temporary Outpost", district: "temp", weekOne: true, x: 47.05, y: 55.46 },
    { id: "wind-breeze-merchant-hq", name: "Wind Breeze Merchant HQ", district: "merc", weekOne: true, x: 39.59, y: 54.91 },
    { id: "astin-mercenaries-base", name: "Astin Mercenaries Base", district: "merc", weekOne: true, x: 42.05, y: 60.62 },
  ],
  asmodian: [
    { id: "aldelle-village", name: "Aldelle Village", district: "aldelle", weekOne: true, x: 39.03, y: 34.8 },
    { id: "azrakar-brigade-camp", name: "Azrakar Brigade Camp", district: "azrakar", weekOne: true, x: 38.29, y: 37.67 },
    { id: "shadow-hall", name: "Shadow Hall", district: "shadow", weekOne: true, x: 37.17, y: 45.54 },
    { id: "gravekeeper-camp", name: "Gravekeeper Camp", district: "graves", weekOne: true, x: 31.41, y: 40.5 },
    { id: "fang-hideout", name: "Fang Hideout", district: "fang", weekOne: true, x: 32.79, y: 43.63 },
    { id: "elims-rest", name: "Elim's Rest", district: "elim", weekOne: true, x: 44.51, y: 56.26 },
    { id: "odars-shade", name: "Odar's Shade", district: "elim", weekOne: true, x: 43.82, y: 50.05 },
    { id: "minushan-site", name: "Minushan Site", district: "minushan", weekOne: true, x: 53.52, y: 49.78 },
    { id: "steel-hammer-workcamp", name: "Steel Hammer Workcamp", district: "hammer", weekOne: false, x: 65.36, y: 55.65 },
    { id: "iduns-lake", name: "Idun's Lake", district: "idun", weekOne: false, x: 67.15, y: 61.96 },
  ],
};

const EXTRA_STORAGE: Record<MapFaction, Camp[]> = {
  elyos: [
    { id: "dawn-legion-temporary-outpost", name: "Dawn Legion Temporary Outpost", district: "temp", weekOne: true, x: 47.05, y: 55.46 },
    { id: "wind-breeze-merchant-hq", name: "Wind Breeze Merchant HQ", district: "merc", weekOne: true, x: 39.59, y: 54.91 },
  ],
  asmodian: [
    { id: "shadow-hall", name: "Shadow Hall", district: "shadow", weekOne: true, x: 37.17, y: 45.54 },
    { id: "steel-hammer-workcamp", name: "Steel Hammer Workcamp", district: "hammer", weekOne: false, x: 65.36, y: 55.65 },
  ],
};

/** Offsets so desks do not sit on the hub pin. Percents on the parchment. */
const TOWN_RING: Record<VendorKind, [number, number]> = {
  goods: [-0.16, 0.34],
  alchemy: [-0.42, 0.16],
  armor: [0.36, 0.28],
  blacksmith: [0.48, -0.1],
  cooking: [-0.28, -0.32],
  handicraft: [0.16, -0.4],
  craft: [0.22, 0.4],
  morph: [0.5, 0.2],
  storage: [-0.48, -0.14],
};

const CAMP_OFFSET: Record<"goods" | "craft" | "storage", [number, number]> = {
  goods: [0.28, 0.18],
  craft: [-0.22, 0.24],
  storage: [0.32, -0.2],
};

const TOWN_KINDS: VendorKind[] = [
  "goods",
  "alchemy",
  "armor",
  "blacksmith",
  "cooking",
  "handicraft",
  "craft",
  "morph",
  "storage",
];

function pin(
  faction: MapFaction,
  place: Town,
  kind: VendorKind,
  dx: number,
  dy: number,
): MapPin {
  const meta = vendorKindMeta[kind];
  return {
    id: `${faction}-vendor-${place.id}-${kind}`,
    name: `${meta.label} · ${place.name}`,
    faction,
    layer: "vendor",
    district: place.district,
    weekOne: place.weekOne,
    x: +(place.x + dx).toFixed(2),
    y: +(place.y + dy).toFixed(2),
    kind,
  };
}

export const vendorPins: MapPin[] = (["elyos", "asmodian"] as const).flatMap((faction) => {
  const townPins = TOWNS[faction].flatMap((town) =>
    TOWN_KINDS.map((kind) => pin(faction, town, kind, ...TOWN_RING[kind])),
  );
  const campPins = GOODS_CAMPS[faction].flatMap((camp) => [
    pin(faction, camp, "goods", ...CAMP_OFFSET.goods),
    pin(faction, camp, "craft", ...CAMP_OFFSET.craft),
  ]);
  const storagePins = EXTRA_STORAGE[faction].map((camp) =>
    pin(faction, camp, "storage", ...CAMP_OFFSET.storage),
  );
  return [...townPins, ...campPins, ...storagePins];
});

export function vendorsForFaction(faction: MapFaction) {
  return vendorPins.filter((pin) => pin.faction === faction);
}
