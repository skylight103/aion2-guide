import { WeekOneMap } from "@/components/WeekOneMap";
import { NextLinks } from "@/components/ui";

export const metadata = { title: "Week-one map" };

export default function MapPage() {
  return (
    <>
      <div className="week-map-masthead">
        <p>Systems</p>
        <h1>Week-one map</h1>
        <span>KR geography · named stops and Empyrean Traces · Eltnen / Morheim / Chaotic Abyss off</span>
      </div>
      <WeekOneMap />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">How to read it</h2>
      <p className="mt-3 text-[var(--muted)]">
        Scroll, pinch, or use +/− to zoom. Drag to pan. Click a pin for the briefing — what the place is, why it
        matters, and what to do. Hub names stay up until hideout and fort names come on.
      </p>
      <p className="mt-3 text-[var(--muted)]">
        Sealed dungeons are hideouts. Forts are field camps. Hubs are Hero-quest desks. Open a pin for that stop’s
        briefing and, if it has a first clear, the loot table.
      </p>
      <p className="mt-3 text-[var(--muted)]">
        Traces is the collectible layer: 560 Empyrean Traces on Verteron, 560 on Altgard. They are off until you turn
        the chip on, then they show when you zoom. Mark a feather found on this device. Hideouts stay the named list;
        gathering nodes, Hidden Cubes, and vendors are the next Find layers.
      </p>
      <NextLinks items={[{ href: "/activities", label: "Activities" }, { href: "/sources", label: "Sources" }]} />
    </>
  );
}
