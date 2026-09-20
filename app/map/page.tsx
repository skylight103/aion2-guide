import { WeekOneMap } from "@/components/WeekOneMap";
import { NextLinks } from "@/components/ui";

export const metadata = { title: "Week-one map" };

export default function MapPage() {
  return (
    <>
      <div className="week-map-masthead">
        <p>Systems</p>
        <h1>Week-one map</h1>
        <span>KR geography · locations, collectibles, NPC, resources · Eltnen / Morheim / Chaotic Abyss off</span>
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
        The right list is the navigator: Locations, Collectibles, NPC, Resources. Pads start on. Traces, cubes, and
        vendors stay off until you open that section and turn them on, then they show when you zoom. Traces are the
        560 Empyrean feathers per zone. Cubes are Hidden Cubes (118 on Verteron, 108 on Altgard). Pads are the 61
        Kibelisks. Vendors mark general goods and craft shops at named camps, plus the full bench set at the two towns
        — Dawn Legion Base and Zumion on Verteron, Safe Haven and Nornir on Altgard. Mark traces and cubes found on
        this device. Resources are field nodes — Odyle, Orichalcum, gems, herbs, logs, cooking mats, and shellfish —
        each with the official gather marker. Turn a material on, then zoom. Nodes start off because there are
        thousands of them.
      </p>
      <NextLinks items={[{ href: "/activities", label: "Activities" }, { href: "/sources", label: "Sources" }]} />
    </>
  );
}
