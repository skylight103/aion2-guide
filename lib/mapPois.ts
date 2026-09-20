import {
  asmodianCubeSpots,
  asmodianKibeliskSpots,
  elyosCubeSpots,
  elyosKibeliskSpots,
  type FindSpot,
} from "@/lib/mapFindData";
import { vendorsForFaction } from "@/lib/mapVendors";
import type { MapFaction, MapPin } from "@/lib/weekOneMap";

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

function pinsFrom(
  faction: MapFaction,
  layer: "cube" | "kibelisk",
  spots: FindSpot[],
): MapPin[] {
  const counts = new Map<string, number>();
  return spots.map(([district, label, x, y, id, weekOne]) => {
    const n = (counts.get(district) ?? 0) + 1;
    counts.set(district, n);
    const stretch = DISTRICT_LABEL[district] ?? district;
    return {
      id: `${faction}-${layer}-${id}`,
      name: layer === "cube" ? `Hidden Cube · ${stretch} ${n}` : `Kibelisk · ${label || stretch}`,
      faction,
      layer,
      district,
      weekOne,
      x,
      y,
    };
  });
}

export const cubePins: MapPin[] = [
  ...pinsFrom("elyos", "cube", elyosCubeSpots),
  ...pinsFrom("asmodian", "cube", asmodianCubeSpots),
];

export const kibeliskPins: MapPin[] = [
  ...pinsFrom("elyos", "kibelisk", elyosKibeliskSpots),
  ...pinsFrom("asmodian", "kibelisk", asmodianKibeliskSpots),
];

export function cubesForFaction(faction: MapFaction) {
  return cubePins.filter((pin) => pin.faction === faction);
}

export function kibelisksForFaction(faction: MapFaction) {
  return kibeliskPins.filter((pin) => pin.faction === faction);
}

export function findsForFaction(faction: MapFaction) {
  return [...cubesForFaction(faction), ...kibelisksForFaction(faction), ...vendorsForFaction(faction)];
}

export function cubeStretch(pin: MapPin) {
  return pin.name.replace(/^Hidden Cube · /, "").replace(/ \d+$/, "");
}
