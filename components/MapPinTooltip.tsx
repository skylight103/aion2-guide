import { pinIcon } from "@/lib/mapIcons";
import { pinGuide, type LootRow } from "@/lib/mapPinGuide";
import { districtById, mapLayerMeta, type MapPin } from "@/lib/weekOneMap";

const layerTone: Record<MapPin["layer"], "hub" | "sealed" | "fort" | "trace" | "cube" | "kibelisk" | "vendor" | "gather"> = {
  hub: "hub",
  sealed: "sealed",
  stronghold: "fort",
  trace: "trace",
  cube: "cube",
  kibelisk: "kibelisk",
  vendor: "vendor",
  gather: "gather",
};

function LootTable({ rows, caption }: { rows: LootRow[]; caption: string }) {
  return (
    <div className="map-brief-loot">
      <p className="map-brief-label">Loot</p>
      <p className="map-brief-loot-cap">{caption}</p>
      <ul>
        {rows.map((row) => (
          <li key={row.item}>
            <span className="map-loot-item">{row.item}</span>
            <span className="map-loot-amount">
              {row.amount}
              {row.note ? <small>{row.note}</small> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PinBriefing({
  pin,
  found,
  onToggleFound,
}: {
  pin: MapPin;
  found?: boolean;
  onToggleFound?: () => void;
}) {
  const guide = pinGuide(pin);
  const district = districtById(pin.faction, pin.district);
  const layer = mapLayerMeta[pin.layer];
  const lootCaption =
    pin.layer === "stronghold" ? "First clear · one time" : pin.layer === "sealed" ? "First clear · no daily reset" : "";

  return (
    <div className={`map-brief is-${layerTone[pin.layer]}`}>
      <p className="map-brief-kicker">
        <img className="map-brief-icon" src={pinIcon(pin, found)} alt="" />
        {layer.short}
        {pin.level ? ` · Lv ${pin.level}` : ""}
      </p>
      <h3 className="map-brief-title">{pin.name}</h3>
      <p className="map-brief-where">
        {district?.label ?? pin.district}
        {district?.hint ? ` · ${district.hint}` : ""}
      </p>
      <p className="map-brief-flavor">{guide.flavor}</p>
      {guide.chips.length > 0 ? (
        <div className="map-brief-chips">
          {guide.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      ) : null}
      <div className="map-brief-block">
        <p className="map-brief-label">Know this</p>
        <p>{guide.why}</p>
      </div>
      <div className="map-brief-block">
        <p className="map-brief-label">Do this</p>
        <p>{guide.do}</p>
      </div>
      {guide.loot.length > 0 ? <LootTable rows={guide.loot} caption={lootCaption} /> : null}
      {(pin.layer === "trace" || pin.layer === "cube") && onToggleFound ? (
        <button type="button" className={`map-brief-found${found ? " is-on" : ""}`} onClick={onToggleFound}>
          {found ? "Found" : "Mark found"}
        </button>
      ) : null}
    </div>
  );
}

export function MapPinTooltip({
  pin,
  onClose,
  found,
  onToggleFound,
}: {
  pin: MapPin;
  onClose: () => void;
  found?: boolean;
  onToggleFound?: () => void;
}) {
  const tone = layerTone[pin.layer];

  return (
    <aside className={`map-tip-card map-tip-${tone}`} role="dialog" aria-label={`${pin.name} briefing`}>
      <span className="map-tip-caret" aria-hidden />
      <button type="button" className="map-tip-close" onClick={onClose} aria-label="Close briefing">
        <span aria-hidden>×</span>
      </button>
      <PinBriefing pin={pin} found={found} onToggleFound={onToggleFound} />
    </aside>
  );
}
