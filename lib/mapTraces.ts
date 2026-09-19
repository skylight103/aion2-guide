import {
  asmodianTraceRegions,
  asmodianTraceSpots,
  elyosTraceRegions,
  elyosTraceSpots,
  type TraceRegion,
  type TraceSpot,
} from "@/lib/mapTraceData";
import type { MapFaction, MapPin } from "@/lib/weekOneMap";

function pinsFrom(
  faction: MapFaction,
  regions: Record<string, TraceRegion>,
  spots: TraceSpot[],
): MapPin[] {
  return spots.map(([region, n, x, y, id]) => {
    const meta = regions[region];
    return {
      id: `${faction}-trace-${id}`,
      name: `Trace · ${meta.label} ${n}`,
      faction,
      layer: "trace",
      district: meta.district,
      weekOne: meta.weekOne,
      x,
      y,
    };
  });
}

export const tracePins: MapPin[] = [
  ...pinsFrom("elyos", elyosTraceRegions, elyosTraceSpots),
  ...pinsFrom("asmodian", asmodianTraceRegions, asmodianTraceSpots),
];

export function tracesForFaction(faction: MapFaction) {
  return tracePins.filter((pin) => pin.faction === faction);
}

export function traceStretch(pin: MapPin) {
  return pin.name.replace(/^Trace · /, "").replace(/ \d+$/, "");
}
