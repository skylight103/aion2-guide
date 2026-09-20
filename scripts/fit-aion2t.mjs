import fs from "node:fs";

const traces = JSON.parse(fs.readFileSync(`${process.env.TEMP}/aion2t-traces.json`, "utf8")).locations;
const src = fs.readFileSync(new URL("../lib/mapTraceData.ts", import.meta.url), "utf8");
const block = src.split("export const elyosTraceSpots")[1].split("export const asmodianTraceSpots")[0];
const ours = [...block.matchAll(/,\s*\d+,\s*(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?),/g)].map((m) => [
  Number(m[1]),
  Number(m[2]),
]);

const stat = (a) => ({
  min: Math.min(...a),
  max: Math.max(...a),
  mean: a.reduce((s, v) => s + v, 0) / a.length,
});

const lats = traces.map((t) => t.latitude);
const lngs = traces.map((t) => t.longitude);
const xs = ours.map((p) => p[0]);
const ys = ours.map((p) => p[1]);
console.log("counts", traces.length, ours.length);
console.log("aion2t lat", stat(lats), "lng", stat(lngs));
console.log("ours x", stat(xs), "y", stat(ys));

function norm(v, s) {
  return (v - s.min) / (s.max - s.min);
}

const latS = stat(lats);
const lngS = stat(lngs);
const xS = stat(xs);
const yS = stat(ys);

function nearest(px, py, pts) {
  let best = Infinity;
  for (const [x, y] of pts) {
    const d = (x - px) ** 2 + (y - py) ** 2;
    if (d < best) best = d;
  }
  return Math.sqrt(best);
}

const oursN = ours.map(([x, y]) => [norm(x, xS), norm(y, yS)]);
const dists = [];
for (const t of traces) {
  const px = norm(t.longitude, lngS);
  const py = 1 - norm(t.latitude, latS);
  dists.push(nearest(px, py, oursN));
}
dists.sort((a, b) => a - b);
console.log("nn after lng->x lat-flipped->y", {
  p50: dists[Math.floor(dists.length * 0.5)],
  p90: dists[Math.floor(dists.length * 0.9)],
  p99: dists[Math.floor(dists.length * 0.99)],
  max: dists[dists.length - 1],
});

const dists2 = [];
for (const t of traces) {
  const px = norm(t.longitude, lngS);
  const py = norm(t.latitude, latS);
  dists2.push(nearest(px, py, oursN));
}
dists2.sort((a, b) => a - b);
console.log("nn after lng->x lat->y", {
  p50: dists2[Math.floor(dists2.length * 0.5)],
  p90: dists2[Math.floor(dists2.length * 0.9)],
  max: dists2[dists2.length - 1],
});
