"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { PinBriefing } from "@/components/MapPinTooltip";
import { useMapFound } from "@/lib/mapCollected";
import {
  mapArt,
  mapLayerGroups,
  mapLayerMeta,
  pinsForFaction,
  type MapFaction,
  type MapLayer,
  type MapPin,
} from "@/lib/weekOneMap";

const ZoneMap = dynamic(() => import("./ZoneMap").then((m) => m.ZoneMap), {
  ssr: false,
  loading: () => <div className="week-map-loading">Loading map…</div>,
});

const layerFill: Record<MapLayer, string> = {
  hub: "#f0d59a",
  sealed: "#7dcea0",
  stronghold: "#e8a87c",
  trace: "#f0e2a0",
};

export function WeekOneMap() {
  const [faction, setFaction] = useState<MapFaction>("elyos");
  const [layers, setLayers] = useState<Record<MapLayer, boolean>>({
    hub: true,
    sealed: true,
    stronghold: true,
    trace: false,
  });
  const [later, setLater] = useState(false);
  const [hideFound, setHideFound] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [detail, setDetail] = useState(false);
  const { found, toggle } = useMapFound();

  const art = mapArt[faction];
  const all = useMemo(() => pinsForFaction(faction), [faction]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((pin) => {
      if (!layers[pin.layer]) return false;
      if (!later && !pin.weekOne) return false;
      if (hideFound && pin.layer === "trace" && found.has(pin.id)) return false;
      if (q && !pin.name.toLowerCase().includes(q) && !pin.district.includes(q)) return false;
      return true;
    });
  }, [all, layers, later, query, hideFound, found]);

  const listed = useMemo(() => {
    const q = query.trim();
    const stops = visible.filter((pin) => pin.layer !== "trace" || pin.id === selected);
    if (q) return visible;
    if (detail) return stops;
    return stops.filter((pin) => pin.layer === "hub" || pin.id === selected);
  }, [visible, detail, query, selected]);

  const selectedPin = listed.find((p) => p.id === selected) ?? visible.find((p) => p.id === selected) ?? null;
  const tracePool = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((pin) => {
      if (pin.layer !== "trace" || !layers.trace) return false;
      if (!later && !pin.weekOne) return false;
      if (q && !pin.name.toLowerCase().includes(q) && !pin.district.includes(q)) return false;
      return true;
    });
  }, [all, layers.trace, later, query]);
  const foundOnMap = tracePool.filter((pin) => found.has(pin.id)).length;

  return (
    <div className="week-map">
      <div className="week-map-frame">
        <div className="week-map-stage">
          <div className="week-map-hud">
            <div className="week-map-factions">
              {(
                [
                  ["elyos", "Elyos · Verteron"],
                  ["asmodian", "Asmodian · Altgard"],
                ] as const
              ).map(([id, label]) => {
                const on = faction === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setFaction(id);
                      setSelected(null);
                    }}
                    className={`week-map-chip${on ? (id === "elyos" ? " is-elyos" : " is-asmo") : ""}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="week-map-layers">
              {mapLayerGroups.stops.layers.map((layer) => (
                <LayerChip
                  key={layer}
                  layer={layer}
                  on={layers[layer]}
                  onClick={() => setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }))}
                />
              ))}
              <button
                type="button"
                aria-pressed={later}
                onClick={() => setLater((v) => !v)}
                className={`week-map-chip${later ? " is-elyos" : ""}`}
              >
                30–40
              </button>
            </div>
            <div className="week-map-layers week-map-find">
              {mapLayerGroups.find.layers.map((layer) => (
                <LayerChip
                  key={layer}
                  layer={layer}
                  on={layers[layer]}
                  onClick={() => setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }))}
                />
              ))}
              {layers.trace ? (
                <button
                  type="button"
                  aria-pressed={hideFound}
                  onClick={() => setHideFound((v) => !v)}
                  className={`week-map-chip${hideFound ? " is-elyos" : ""}`}
                >
                  Hide found
                </button>
              ) : null}
            </div>
          </div>
          <ZoneMap
            faction={faction}
            pins={visible}
            selected={selected}
            onSelect={setSelected}
            onDetailChange={setDetail}
            found={found}
            onToggleFound={toggle}
          />
          <aside className="week-map-panel">
            <label className="week-map-search">
              <span className="sr-only">Search names</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a name or stretch"
              />
            </label>
            {selectedPin ? (
              <SelectedCard
                pin={selectedPin}
                found={found.has(selectedPin.id)}
                onToggleFound={() => toggle(selectedPin.id)}
                onClear={() => setSelected(null)}
              />
            ) : (
              <p className="week-map-empty">
                {layers.trace
                  ? `Empyrean Traces on the ${art.label} parchment. Zoom in, click a feather, mark it found.`
                  : `Hubs on the ${art.label} parchment. Zoom in to read sealed dungeons and forts. Turn on Traces for feathers.`}
              </p>
            )}
            {layers.trace ? (
              <p className="week-map-count">
                {foundOnMap} / {tracePool.length} traces found
              </p>
            ) : null}
            <p className="week-map-count">
              {listed.filter((pin) => pin.layer !== "trace").length}{" "}
              {detail || query.trim() ? "named stops" : "hubs on the map"}
            </p>
            <ul className="week-map-list">
              {listed.map((pin) => {
                const on = pin.id === selected;
                return (
                  <li key={pin.id}>
                    <button type="button" onClick={() => setSelected(pin.id)} className={on ? "is-on" : undefined}>
                      <span>
                        <span className="week-map-swatch" style={{ background: layerFill[pin.layer] }} />
                        {pin.name}
                      </span>
                      <span className="week-map-lv">
                        {pin.level ? `Lv ${pin.level}` : mapLayerMeta[pin.layer].short}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

function LayerChip({ layer, on, onClick }: { layer: MapLayer; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`week-map-chip week-map-chip-layer${on ? "" : " is-off"}`}
    >
      <span className="week-map-swatch" style={{ background: layerFill[layer] }} />
      {mapLayerMeta[layer].short}
    </button>
  );
}

function SelectedCard({
  pin,
  found,
  onToggleFound,
  onClear,
}: {
  pin: MapPin;
  found: boolean;
  onToggleFound: () => void;
  onClear: () => void;
}) {
  return (
    <div className="week-map-card">
      <div className="flex justify-end">
        <button type="button" onClick={onClear} className="text-xs text-[var(--muted)] hover:text-[var(--ink)]">
          Clear
        </button>
      </div>
      <PinBriefing pin={pin} found={found} onToggleFound={pin.layer === "trace" ? onToggleFound : undefined} />
    </div>
  );
}
