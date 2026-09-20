import { gatherKinds, type GatherKind } from "@/lib/mapGathers";
import type { MapFaction, MapLayer, MapPin } from "@/lib/weekOneMap";

/** Official in-game UT_Marker / Hidden Cube art from aion2-interactive-map (CC BY-NC 4.0). */
const I = "/maps/icons";

const vendorIcon: Record<string, string> = {
  goods: `${I}/goods.webp`,
  alchemy: `${I}/alchemy.webp`,
  armor: `${I}/armor.webp`,
  blacksmith: `${I}/blacksmith.webp`,
  cooking: `${I}/cooking.webp`,
  handicraft: `${I}/handicraft.webp`,
  craft: `${I}/craft.webp`,
  morph: `${I}/morph.webp`,
  storage: `${I}/storage.webp`,
};

export function layerIcon(
  layer: MapLayer,
  faction: MapFaction = "elyos",
  kind?: string,
  found?: boolean,
) {
  if (layer === "gather") return gatherIcon((kind as GatherKind) ?? "odyle");
  if (layer === "vendor") return vendorIcon[kind ?? "goods"] ?? vendorIcon.goods;
  if (layer === "kibelisk") {
    return faction === "asmodian" ? `${I}/kibelisk-asmo.webp` : `${I}/kibelisk-elyos.webp`;
  }
  if (layer === "trace") return found ? `${I}/trace-got.webp` : `${I}/trace.webp`;
  if (layer === "cube") return `${I}/cube.webp`;
  if (layer === "sealed") return `${I}/sealed.webp`;
  if (layer === "stronghold") return `${I}/fort.webp`;
  return `${I}/hub.webp`;
}

export function pinIcon(pin: MapPin, found?: boolean) {
  return layerIcon(pin.layer, pin.faction, pin.kind, found);
}

export function gatherIcon(kind: GatherKind) {
  return gatherKinds.find((row) => row.kind === kind)?.icon ?? `${I}/odyle.webp`;
}
