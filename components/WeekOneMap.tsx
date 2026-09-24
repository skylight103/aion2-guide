"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { PinBriefing } from "@/components/MapPinTooltip";
import { useMapFound } from "@/lib/mapCollected";
import { gatherGroups, gatherKindsForFaction, type GatherKind } from "@/lib/mapGathers";
import { layerIcon } from "@/lib/mapIcons";
import {
  isCollectibleLayer,
  isFindLayer,
  mapArt,
  mapLayerGroups,
  mapLayerMeta,
  pinsForFaction,
  type MapFaction,
  type MapLayer,
  type MapLayerGroup,
  type MapPin,
} from "@/lib/weekOneMap";

const ZoneMap = dynamic(() => import("./ZoneMap").then((m) => m.ZoneMap), {
  ssr: false,
  loading: () => <div className="week-map-loading">Loading map…</div>,
});

type SectionId = MapLayerGroup | "resources";

const SECTION_ORDER: { id: SectionId; label: string }[] = [
  { id: "locations", label: "Locations" },
  { id: "collectibles", label: "Collectibles" },
  { id: "npc", label: "NPC" },
  { id: "resources", label: "Resources" },
];

function pinMatches(pin: MapPin, q: string) {
  if (!q) return true;
  return (
    pin.name.toLowerCase().includes(q) ||
    pin.district.includes(q) ||
    (pin.kind ?? "").toLowerCase().includes(q)
  );
}

export function WeekOneMap() {
  const [faction, setFaction] = useState<MapFaction>("elyos");
  const [layers, setLayers] = useState<Record<MapLayer, boolean>>({
    hub: true,
    sealed: true,
    stronghold: true,
    trace: false,
    cube: false,
    kibelisk: true,
    vendor: false,
    gather: false,
  });
  const [gathers, setGathers] = useState<Partial<Record<GatherKind, boolean>>>({});
  const [later, setLater] = useState(true);
  const [hideFound, setHideFound] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [detail, setDetail] = useState(false);
  const [openSection, setOpenSection] = useState<SectionId | null>("locations");
  const { found, toggle } = useMapFound();

  const art = mapArt[faction];
  const all = useMemo(() => pinsForFaction(faction), [faction]);
  const factionGathers = useMemo(() => gatherKindsForFaction(faction), [faction]);
  const gatherOn = factionGathers.some((row) => gathers[row.kind]);
  const findOn = layers.trace || layers.cube || layers.kibelisk || layers.vendor || gatherOn;
  const collectibleOn = layers.trace || layers.cube;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((pin) => {
      if (pin.layer === "gather") {
        if (!gathers[pin.kind as GatherKind]) return false;
      } else if (!layers[pin.layer]) {
        return false;
      }
      if (!later && !pin.weekOne) return false;
      if (hideFound && isCollectibleLayer(pin.layer) && found.has(pin.id)) return false;
      if (!pinMatches(pin, q)) return false;
      return true;
    });
  }, [all, layers, gathers, later, query, hideFound, found]);

  const listed = useMemo(() => {
    const q = query.trim();
    const stops = visible.filter((pin) => !isFindLayer(pin.layer) || pin.id === selected);
    if (q) return visible;
    if (detail) return stops;
    return stops.filter((pin) => pin.layer === "hub" || pin.id === selected);
  }, [visible, detail, query, selected]);

  const selectedPin = listed.find((p) => p.id === selected) ?? visible.find((p) => p.id === selected) ?? null;

  const collectiblePool = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((pin) => {
      if (!isCollectibleLayer(pin.layer) || !layers[pin.layer]) return false;
      if (!later && !pin.weekOne) return false;
      if (!pinMatches(pin, q)) return false;
      return true;
    });
  }, [all, layers, later, query]);

  const foundTraces = collectiblePool.filter((pin) => pin.layer === "trace" && found.has(pin.id)).length;
  const traceTotal = collectiblePool.filter((pin) => pin.layer === "trace").length;
  const foundCubes = collectiblePool.filter((pin) => pin.layer === "cube" && found.has(pin.id)).length;
  const cubeTotal = collectiblePool.filter((pin) => pin.layer === "cube").length;

  const layerCount = (layer: MapLayer) =>
    all.filter((pin) => pin.layer === layer && (later || pin.weekOne)).length;

  const gatherCount = (kind: GatherKind) =>
    all.filter((pin) => pin.layer === "gather" && pin.kind === kind && (later || pin.weekOne)).length;

  const sectionCount = (id: SectionId) => {
    if (id === "resources") return factionGathers.reduce((sum, row) => sum + gatherCount(row.kind), 0);
    return mapLayerGroups[id].layers.reduce((sum, layer) => sum + layerCount(layer), 0);
  };

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
              <button
                type="button"
                aria-pressed={later}
                onClick={() => setLater((v) => !v)}
                className={`week-map-chip${later ? " is-elyos" : ""}`}
              >
                30–40
              </button>
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
          <aside className={`week-map-panel${openSection === "resources" ? " is-resources" : ""}`}>
            <label className="week-map-search">
              <span className="sr-only">Search names</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a name, pad, desk, or node"
              />
            </label>

            <nav className="week-map-sections" aria-label="Map layers">
              {SECTION_ORDER.map((section) => {
                const open = openSection === section.id;
                return (
                  <div key={section.id} className={`week-map-section${open ? " is-open" : ""}`}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenSection((prev) => (prev === section.id ? null : section.id))}
                      className="week-map-section-head"
                    >
                      <span className="week-map-section-title">
                        <span className="week-map-chevron" aria-hidden />
                        {section.label}
                      </span>
                      <span className="week-map-section-count">{sectionCount(section.id)}</span>
                    </button>
                    <div className="week-map-section-body" inert={!open ? true : undefined}>
                      <div className="week-map-section-inner">
                        {section.id === "resources" ? (
                          <ResourcesList
                            kinds={factionGathers}
                            on={gathers}
                            count={gatherCount}
                            onToggle={(kind) => setGathers((prev) => ({ ...prev, [kind]: !prev[kind] }))}
                          />
                        ) : (
                          <>
                            {mapLayerGroups[section.id].layers.map((layer) => (
                              <LayerRow
                                key={layer}
                                layer={layer}
                                faction={faction}
                                on={layers[layer]}
                                count={layerCount(layer)}
                                onClick={() => setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }))}
                              />
                            ))}
                            {section.id === "collectibles" && collectibleOn ? (
                              <button
                                type="button"
                                aria-pressed={hideFound}
                                onClick={() => setHideFound((v) => !v)}
                                className={`week-map-row${hideFound ? " is-on" : ""}`}
                              >
                                <span>Hide found</span>
                              </button>
                            ) : null}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {selectedPin ? (
              <SelectedCard
                key={selectedPin.id}
                pin={selectedPin}
                found={found.has(selectedPin.id)}
                onToggleFound={() => toggle(selectedPin.id)}
                onClear={() => setSelected(null)}
              />
            ) : openSection === "resources" ? null : (
              <p className="week-map-empty">{emptyCopy(art.label, findOn, layers, gatherOn)}</p>
            )}
            {openSection !== "resources" ? (
              <div className="week-map-aside-tail" key={`${faction}-${openSection}`}>
                {layers.trace ? (
                  <p className="week-map-count">
                    {foundTraces} / {traceTotal} traces found
                  </p>
                ) : null}
                {layers.cube ? (
                  <p className="week-map-count">
                    {foundCubes} / {cubeTotal} cubes found
                  </p>
                ) : null}
                {gatherOn ? (
                  <p className="week-map-count">
                    {visible.filter((pin) => pin.layer === "gather").length} gather nodes on the parchment
                  </p>
                ) : null}
                <p className="week-map-count">
                  {listed.filter((pin) => !isFindLayer(pin.layer)).length}{" "}
                  {detail || query.trim() ? "named stops" : "hubs on the map"}
                </p>
                <ul className="week-map-list">
                  {listed.map((pin) => {
                    const on = pin.id === selected;
                    return (
                      <li key={pin.id}>
                        <button type="button" onClick={() => setSelected(pin.id)} className={on ? "is-on" : ""}>
                          <span>
                            <img className="week-map-swatch-icon" src={layerIcon(pin.layer, pin.faction, pin.kind)} alt="" />
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
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </div>
  );
}

function emptyCopy(zone: string, findOn: boolean, layers: Record<MapLayer, boolean>, gatherOn: boolean) {
  if (!findOn) {
    return `Hubs on the ${zone} parchment. Zoom in for hideouts and forts. Open Collectibles, NPC, or Resources in the list.`;
  }
  const on = (["trace", "cube", "kibelisk", "vendor"] as const)
    .filter((layer) => layers[layer])
    .map((layer) => mapLayerMeta[layer].short);
  if (gatherOn) on.push("Gather");
  return `${on.join(", ")} on the ${zone} parchment. Zoom in, click a pin, mark collectibles found.`;
}

function LayerRow({
  layer,
  faction,
  on,
  count,
  onClick,
}: {
  layer: MapLayer;
  faction: MapFaction;
  on: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button type="button" aria-pressed={on} onClick={onClick} className={`week-map-row${on ? " is-on" : ""}`}>
      <span>
        <img className="week-map-swatch-icon" src={layerIcon(layer, faction)} alt="" />
        {mapLayerMeta[layer].short}
      </span>
      <span className="week-map-lv">{count}</span>
    </button>
  );
}

function ResourcesList({
  kinds,
  on,
  count,
  onToggle,
}: {
  kinds: ReturnType<typeof gatherKindsForFaction>;
  on: Partial<Record<GatherKind, boolean>>;
  count: (kind: GatherKind) => number;
  onToggle: (kind: GatherKind) => void;
}) {
  return (
    <div className="week-map-resources">
      <p className="week-map-resource-note">
        Turn a material on, then zoom. Official in-game gather markers. Odyle first.
      </p>
      {gatherGroups.map((group) => {
        const rows = kinds.filter((row) => row.group === group.id);
        if (!rows.length) return null;
        return (
          <div key={group.id} className="week-map-resource-group">
            <p className="week-map-resource-label">{group.label}</p>
            {rows.map((row) => (
              <button
                key={row.kind}
                type="button"
                title={row.why}
                aria-pressed={!!on[row.kind]}
                onClick={() => onToggle(row.kind)}
                className={`week-map-row${on[row.kind] ? " is-on" : ""}`}
              >
                <span>
                  <img className="week-map-swatch-icon" src={row.icon} alt="" />
                  {row.label}
                </span>
                <span className="week-map-lv">{count(row.kind)}</span>
              </button>
            ))}
          </div>
        );
      })}
    </div>
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
      <PinBriefing
        pin={pin}
        found={found}
        onToggleFound={isCollectibleLayer(pin.layer) ? onToggleFound : undefined}
      />
    </div>
  );
}
