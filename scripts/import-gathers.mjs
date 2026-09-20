/** Fit aion2t gather GPS onto the Atlas parchment using licensed traces as control points. */
import https from "node:https";
import fs from "node:fs";

const outPath = new URL("../lib/mapGatherData.ts", import.meta.url);
const traceSrc = fs.readFileSync(new URL("../lib/mapTraceData.ts", import.meta.url), "utf8");

const NAME_TO_KIND = {
  Odyle: "odyle",
  Orichalcum: "ore",
  Ruby: "ruby",
  Diamond: "diamond",
  Sapphire: "sapphire",
  Aria: "aria",
  Targena: "targena",
  Coriolus: "coriolus",
  Kukuru: "kukuru",
  Mela: "mela",
  Yggdrasil: "log",
  Cypri: "cypri",
  Inina: "inina",
  Azpha: "azpha",
  Calendula: "calendula",
  Ohkra: "ohkra",
  Morfa: "morfa",
  Raydam: "raydam",
  Asvata: "asvata",
  Pujery: "pujery",
  Conide: "conide",
};

const ANCHORS = {
  elyos: [
    { district: "poeta", weekOne: true, x: 18.4, y: 81 },
    { district: "dawn", weekOne: true, x: 36.83, y: 38.29 },
    { district: "cantas", weekOne: true, x: 36.5, y: 43.93 },
    { district: "eastern", weekOne: true, x: 41.13, y: 41.22 },
    { district: "marsh", weekOne: true, x: 47.2, y: 41.48 },
    { district: "coast", weekOne: true, x: 38.37, y: 45.91 },
    { district: "ruins", weekOne: true, x: 51.67, y: 48.9 },
    { district: "temp", weekOne: true, x: 47.05, y: 55.46 },
    { district: "merc", weekOne: true, x: 42.05, y: 60.62 },
    { district: "forward", weekOne: true, x: 38.55, y: 66.4 },
    { district: "daminu", weekOne: true, x: 40.8, y: 31.8 },
    { district: "later-v", weekOne: false, x: 57.47, y: 52.1 },
    { district: "later-v", weekOne: false, x: 61.2, y: 61.1 },
    { district: "later-v", weekOne: false, x: 64.2, y: 45.9 },
    { district: "later-v", weekOne: false, x: 62.1, y: 69.6 },
  ],
  asmodian: [
    { district: "ishalgen", weekOne: true, x: 49.2, y: 71.8 },
    { district: "haven", weekOne: true, x: 39.32, y: 34.29 },
    { district: "shadow", weekOne: true, x: 37.17, y: 45.54 },
    { district: "graves", weekOne: true, x: 31.41, y: 40.5 },
    { district: "fang", weekOne: true, x: 32.79, y: 43.63 },
    { district: "elim", weekOne: true, x: 44.51, y: 56.26 },
    { district: "minushan", weekOne: true, x: 53.52, y: 49.78 },
    { district: "aldelle", weekOne: true, x: 39.03, y: 34.8 },
    { district: "azrakar", weekOne: true, x: 38.29, y: 37.67 },
    { district: "nornir", weekOne: false, x: 59.19, y: 47.44 },
    { district: "hammer", weekOne: false, x: 65.36, y: 55.65 },
    { district: "idun", weekOne: false, x: 67.15, y: 61.96 },
    { district: "later-a", weekOne: false, x: 70.7, y: 38.4 },
    { district: "later-a", weekOne: false, x: 69.1, y: 71.8 },
  ],
};

const TYPES = ["od", "metal", "jewelry", "herb", "vegetable", "tree", "shellfish"];
const ZONES = [
  { zone: 2606, faction: "elyos", label: "elyosTraceSpots", next: "asmodianTraceSpots" },
  { zone: 2611, faction: "asmodian", label: "asmodianTraceSpots", next: null },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "aion2-guide-fit/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location).then(resolve, reject);
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const text = Buffer.concat(chunks).toString("utf8");
          if (res.statusCode !== 200) {
            reject(new Error(`${url} ${res.statusCode} ${text.slice(0, 160)}`));
            return;
          }
          resolve(JSON.parse(text));
        });
      })
      .on("error", reject);
  });
}

function parseOurs(label, next) {
  const start = traceSrc.split(`export const ${label}`)[1];
  const block = next ? start.split(`export const ${next}`)[0] : start;
  return [...block.matchAll(/,\s*\d+,\s*(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?),/g)].map((m) => [
    Number(m[1]),
    Number(m[2]),
  ]);
}

function stat(a) {
  return {
    min: Math.min(...a),
    max: Math.max(...a),
    mean: a.reduce((s, v) => s + v, 0) / a.length,
  };
}

function nearestDist(px, py, pts) {
  let best = Infinity;
  for (const [x, y] of pts) {
    const d = (x - px) ** 2 + (y - py) ** 2;
    if (d < best) best = d;
  }
  return Math.sqrt(best);
}

function nearestAnchor(faction, x, y) {
  let best = ANCHORS[faction][0];
  let bestD = Infinity;
  for (const a of ANCHORS[faction]) {
    const d = (a.x - x) ** 2 + (a.y - y) ** 2;
    if (d < bestD) {
      bestD = d;
      best = a;
    }
  }
  return best;
}

function fitFromTraces(aion, ours) {
  const lngS = stat(aion.map((t) => t.longitude));
  const latS = stat(aion.map((t) => t.latitude));
  const xS = stat(ours.map((p) => p[0]));
  const yS = stat(ours.map((p) => p[1]));
  const oursN = ours.map(([x, y]) => [(x - xS.min) / (xS.max - xS.min), (y - yS.min) / (yS.max - yS.min)]);
  const dists = aion
    .map((t) => {
      const px = (t.longitude - lngS.min) / (lngS.max - lngS.min);
      const py = 1 - (t.latitude - latS.min) / (latS.max - latS.min);
      return nearestDist(px, py, oursN);
    })
    .sort((a, b) => a - b);
  const report = {
    p50: dists[Math.floor(dists.length * 0.5)],
    p90: dists[Math.floor(dists.length * 0.9)],
    max: dists[dists.length - 1],
  };
  return { lngS, latS, xS, yS, report };
}

function project(lng, lat, fit) {
  const nx = (lng - fit.lngS.min) / (fit.lngS.max - fit.lngS.min);
  const ny = 1 - (lat - fit.latS.min) / (fit.latS.max - fit.latS.min);
  return {
    x: +(nx * (fit.xS.max - fit.xS.min) + fit.xS.min).toFixed(2),
    y: +(ny * (fit.yS.max - fit.yS.min) + fit.yS.min).toFixed(2),
  };
}

function dump(rows) {
  return rows.map((r) => `  ${JSON.stringify(r)},`).join("\n");
}

function shortId(row, fallback) {
  const raw = String(row.id ?? row.metadata?.internal ?? fallback);
  return raw.replace(/[^a-zA-Z0-9]/g, "").slice(0, 10) || fallback;
}

const packs = {};

for (const z of ZONES) {
  const ours = parseOurs(z.label, z.next);
  const traces = (await get(`https://aion2t.com/api/en/map/locations?zone=${z.zone}&types=trace&limit=50000`))
    .locations;
  if (traces.length !== ours.length) {
    console.warn("trace count mismatch", z.faction, traces.length, ours.length);
  }
  const fit = fitFromTraces(traces, ours);
  console.log(z.faction, "trace nn", fit.report);
  if (fit.report.p90 > 0.02) {
    throw new Error(`Refusing ${z.faction} gather import — trace fit p90 ${fit.report.p90} is too loose`);
  }

  const rows = [];
  const unknown = {};
  for (const type of TYPES) {
    const j = await get(`https://aion2t.com/api/en/map/locations?zone=${z.zone}&types=${type}&limit=50000`);
    for (const loc of j.locations) {
      const name = loc.metadata?.subtype || loc.name;
      const kind = NAME_TO_KIND[name];
      if (!kind) {
        unknown[name] = (unknown[name] || 0) + 1;
        continue;
      }
      const p = project(loc.longitude, loc.latitude, fit);
      const a = nearestAnchor(z.faction, p.x, p.y);
      rows.push([kind, a.district, 0, p.x, p.y, shortId(loc, `${kind}${rows.length}`), a.weekOne]);
    }
  }
  if (Object.keys(unknown).length) console.warn("unknown names", z.faction, unknown);

  rows.sort((l, r) => l[0].localeCompare(r[0]) || l[1].localeCompare(r[1]) || l[3] - r[3] || l[4] - r[4]);
  const counts = new Map();
  for (const row of rows) {
    const key = `${row[0]}:${row[1]}`;
    const n = (counts.get(key) ?? 0) + 1;
    counts.set(key, n);
    row[2] = n;
  }
  packs[z.faction] = rows;
  console.log(z.faction, "gathers", rows.length);
}

const src = `/** Gather-node percents on the Atlas parchment (origin top-left).
 * aion2t.com client-extract lat/lng for Verteron (2606) and Altgard (2611),
 * fitted to licensed Empyrean Trace markers (CC BY-NC 4.0) with a Y-flipped bbox map.
 * Packed as [kind, district, local index, x, y, id, weekOne].
 */
export type GatherSpot = [
  kind: string,
  district: string,
  n: number,
  x: number,
  y: number,
  id: string,
  weekOne: boolean,
];

export const elyosGatherSpots: GatherSpot[] = [
${dump(packs.elyos)}
];

export const asmodianGatherSpots: GatherSpot[] = [
${dump(packs.asmodian)}
];
`;

fs.writeFileSync(outPath, src);
console.log("wrote", outPath.pathname, "elyos", packs.elyos.length, "asmo", packs.asmodian.length);
