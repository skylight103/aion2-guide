/** Rebuild lib/mapTraceData.ts from aion2-interactive-map CC BY-NC 4.0 marker YAML.
 * Expects World_L_A.yaml and World_D_A.yaml in %TEMP% (not committed).
 */
import fs from "node:fs";

const outPath = new URL("../lib/mapTraceData.ts", import.meta.url);

const elyosRegions = {
  DawnLegionBase: { label: "Dawn Legion Base", district: "dawn", weekOne: true },
  WesternCantasValley: { label: "Western Cantas", district: "cantas", weekOne: true },
  EasternCantasValley: { label: "Eastern Cantas", district: "eastern", weekOne: true },
  EllunRiverMarsh: { label: "Elun Marsh", district: "marsh", weekOne: true },
  EllunRiverMeadow: { label: "Elun Meadow", district: "marsh", weekOne: true },
  EllunRiverMidstream: { label: "Elun Midstream", district: "marsh", weekOne: true },
  VerteronFortressRuins: { label: "Fortress Ruins", district: "ruins", weekOne: true },
  TolbasForest: { label: "Tolbas Forest", district: "temp", weekOne: true },
  NorthernTolbasForest: { label: "Northern Tolbas", district: "temp", weekOne: true },
  SouthernTolbasForest: { label: "Southern Tolbas", district: "temp", weekOne: true },
  EasternTolbasForest: { label: "Eastern Tolbas", district: "temp", weekOne: true },
  ForestofExiles: { label: "Forest of Exiles", district: "merc", weekOne: true },
  AullaeuVillage: { label: "Aullaeu", district: "merc", weekOne: true },
  AullaeuFuneralIsland: { label: "Aullaeu Funeral Island", district: "merc", weekOne: true },
  ScarletForest: { label: "Scarlet Forest", district: "later-v", weekOne: false },
  DranaPlantation: { label: "Drana Plantation", district: "later-v", weekOne: false },
  KrakaFootpath: { label: "Kraka Footpath", district: "later-v", weekOne: false },
  ZumionVillage: { label: "Zumion Village", district: "later-v", weekOne: false },
  PilgrimsRidge: { label: "Pilgrim's Ridge", district: "later-v", weekOne: false },
  AltamiaCanyon: { label: "Artamia Canyon", district: "later-v", weekOne: false },
  EasternAltamiaHighland: { label: "Eastern Artamia", district: "later-v", weekOne: false },
  WesternAltamiaHighland: { label: "Western Artamia", district: "later-v", weekOne: false },
  SouthernAltamiaHighland: { label: "Southern Artamia", district: "later-v", weekOne: false },
  GardenoftheIllusionGod: { label: "Garden of the Illusion God", district: "later-v", weekOne: false },
  NahidBrigadeFortress: { label: "Nahid Brigade Fortress", district: "later-v", weekOne: false },
  CrimsonIsle: { label: "Crimson Isle", district: "later-v", weekOne: false },
  EternalIsle: { label: "Eternal Isle", district: "later-v", weekOne: false },
};

const asmoRegions = {
  SafeHaven: { label: "Safe Haven", district: "haven", weekOne: true },
  NamelessCemetery: { label: "Nameless Cemetery", district: "graves", weekOne: true },
  DredgionCrashSite: { label: "Dredgion Crash Site", district: "shadow", weekOne: true },
  SilentHill: { label: "Silent Hill", district: "fang", weekOne: true },
  SanctumOutpost: { label: "Sanctum Outpost", district: "fang", weekOne: true },
  CalderonCanyon: { label: "Calderon Canyon", district: "shadow", weekOne: true },
  TraneinHighland: { label: "Tranein Highland", district: "shadow", weekOne: true },
  MoslanForest: { label: "Moslan Forest", district: "elim", weekOne: true },
  Uruthumheim: { label: "Uruthumheim", district: "minushan", weekOne: true },
  NornirAssembly: { label: "Nornir Assembly", district: "nornir", weekOne: false },
  PurifyingForest: { label: "Purifying Forest", district: "later-a", weekOne: false },
  Dranactus: { label: "Dranactus", district: "later-a", weekOne: false },
  BattlescarMound: { label: "Battlescar Mound", district: "later-a", weekOne: false },
  BasfeltWaterfall: { label: "Basfelt Waterfall", district: "later-a", weekOne: false },
  BasfeltRuins: { label: "Basfelt Ruins", district: "later-a", weekOne: false },
  LagtaFortress: { label: "Lagta Fortress", district: "later-a", weekOne: false },
  BlackClawVillage: { label: "Black Claw Village", district: "later-a", weekOne: false },
  ImpetusiumSquare: { label: "Impetusium Square", district: "later-a", weekOne: false },
  FafniteDeposit: { label: "Fafnite Deposit", district: "hammer", weekOne: false },
  WesternGribadeHighland: { label: "Western Gribade", district: "idun", weekOne: false },
  EasternGribadeHighland: { label: "Eastern Gribade", district: "idun", weekOne: false },
  SouthernGribadeHighland: { label: "Southern Gribade", district: "idun", weekOne: false },
  IdunsLake: { label: "Idun's Lake", district: "idun", weekOne: false },
  MahindelCliff: { label: "Mahindel Cliff", district: "later-a", weekOne: false },
  SpiritIsle: { label: "Spirit Isle", district: "later-a", weekOne: false },
  ImmortalIsle: { label: "Immortal Isle", district: "later-a", weekOne: false },
};

function parse(text) {
  return text.split(/\n- category:/).slice(1).map((raw) => {
    const b = `category:${raw}`;
    const get = (k) => {
      const m = b.match(new RegExp(`(?:^|\\n)\\s*${k}:\\s*(.+)`));
      return m ? m[1].trim().replace(/^'|'$/g, "") : "";
    };
    return {
      id: get("id"),
      name: get("name"),
      region: get("region"),
      subtype: get("subtype"),
      x: Number.parseFloat(get("x")),
      y: Number.parseFloat(get("y")),
    };
  });
}

function pack(file, regions) {
  const traces = parse(fs.readFileSync(file, "utf8")).filter((m) => m.subtype === "monolithMaterial");
  const unknown = [...new Set(traces.map((t) => t.region).filter((r) => !regions[r]))];
  if (unknown.length) throw new Error(`Unknown regions: ${unknown.join(", ")}`);
  const byR = {};
  for (const t of traces) (byR[t.region] ||= []).push(t);
  for (const list of Object.values(byR)) list.sort((a, b) => a.y - b.y || a.x - b.x);
  return traces
    .map((t) => {
      const parsed = Number.parseInt(t.name, 10);
      const n = Number.isFinite(parsed) && parsed > 0 ? parsed : byR[t.region].indexOf(t) + 1;
      const x = +(t.x / 8192 * 100).toFixed(2);
      const y = +(100 - (t.y / 8192) * 100).toFixed(2);
      return [t.region, n, x, y, t.id.slice(0, 8)];
    })
    .sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1]);
}

function dumpRegions(obj) {
  return Object.entries(obj)
    .map(
      ([k, v]) =>
        `  ${k}: { label: ${JSON.stringify(v.label)}, district: ${JSON.stringify(v.district)}, weekOne: ${v.weekOne} },`,
    )
    .join("\n");
}

function dumpSpots(rows) {
  return rows.map((r) => `  ${JSON.stringify(r)},`).join("\n");
}

const temp = process.env.TEMP;
const elyos = pack(`${temp}/World_L_A.yaml`, elyosRegions);
const asmo = pack(`${temp}/World_D_A.yaml`, asmoRegions);

const src = `/** Empyrean Trace percents on the Atlas parchment (origin top-left).
 * In-game monolith-material markers from aion2-interactive-map (CC BY-NC 4.0), Y-flipped.
 * Packed as [region, local index, x, y, id prefix].
 */
export type TraceRegion = { label: string; district: string; weekOne: boolean };
export type TraceSpot = [region: string, n: number, x: number, y: number, id: string];

export const elyosTraceRegions: Record<string, TraceRegion> = {
${dumpRegions(elyosRegions)}
};

export const asmodianTraceRegions: Record<string, TraceRegion> = {
${dumpRegions(asmoRegions)}
};

export const elyosTraceSpots: TraceSpot[] = [
${dumpSpots(elyos)}
];

export const asmodianTraceSpots: TraceSpot[] = [
${dumpSpots(asmo)}
];
`;

fs.writeFileSync(outPath, src);
console.log("wrote", outPath.pathname, "elyos", elyos.length, "asmo", asmo.length);
