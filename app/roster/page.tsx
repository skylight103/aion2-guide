import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";
import { RosterTable } from "@/components/RosterTable";

export const metadata = { title: "Current Roster" };

export default function RosterPage() {
  return (
    <>
      <PageHeader
        kicker="Start here"
        title="Current roster"
        lede="Mains and alts, including who is covering tank, heal, and support."
      />
      <Callout tone="green">
        Minimum that queues without LFG: Templar, Cleric, Chanter, two DPS. Park Undecided people on a missing role,
        not a fourth Ranger. Alts should fill the same holes, not clone the popular DPS.
      </Callout>
      <h2 className="font-[family-name:var(--font-display)] text-3xl">Party requirements</h2>
      <p className="text-[var(--muted)]">Official global pages disagree on some party sizes. Read the instance door.</p>
      <DataTable
        headers={["Content", "Players", "Typical composition"]}
        rows={[
          ["Story / open world", "Solo", "1 of any class"],
          ["Sealed / hideouts / Daily", "Solo", "Duo if stuck: 1 Templar or Cleric + 1 DPS"],
          ["Nightmare", "Solo", "Self-sufficient DPS or Gladiator is easiest"],
          ["Expedition", "4 or 5 — confirm in UI", "4-man: 1 Templar, 1 Cleric, 1 Chanter, 1 DPS. 5-man: same + 2 DPS"],
          ["Transcendence (later)", "5 in KR/TW", "1 Templar, 1 Cleric, 1 Chanter, 2 DPS"],
          ["Sanctuary (later)", "10 in KR/TW", "2 Templar, 2 Cleric, 2 Chanter, 4 DPS"],
          ["Abyss / open PvP", "Flexible", "Roam squad: 1 Templar, 1 Cleric, 1 Chanter, 2 DPS"],
          ["Duels / arenas", "1v1 and small teams", "4v4 if offered: 1 Templar, 1 Cleric, 1 Chanter, 1 DPS"],
        ]}
      />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Live roster</h2>
      <RosterTable />
      <NextLinks items={[{ href: "/alts", label: "Barracks and Energy" }, { href: "/plan", label: "Week-One Plan" }]} />
    </>
  );
}
