import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";
import { DifficultyChart } from "@/components/DifficultyChart";
import { DpsRanking } from "@/components/DpsRanking";

export const metadata = { title: "DPS Tier List and Difficulty" };

export default function TiersPage() {
  return (
    <>
      <PageHeader
        kicker="Play"
        title="DPS tier list and difficulty"
        lede="KR/TW damage snapshot through early September 2026 — not a Global week-one pick list. Role and difficulty first. NC can retune before launch."
      />
      <Callout tone="red">
        Snapshot: September 6, 2026. Templar, Cleric, and Chanter are not DPS mains. They are scored for difficulty and group value, not meter.
      </Callout>
      <h2 className="font-[family-name:var(--font-display)] text-3xl">Start here</h2>
      <DataTable
        headers={["If you need", "Pick", "Difficulty note"]}
        rows={[
          ["A tank", "Templar", "About 5 mechanics / high responsibility"],
          ["A healer", "Cleric", "About 6 mechanics / 8 responsibility; res on current KR"],
          ["Party buffs", "Chanter", "About 6.5. Does not replace Cleric"],
          ["Comfortable ranged DPS", "Spiritmaster or Ranger", "About 5 / 6.5"],
          ["Melee that lives", "Gladiator", "About 6"],
          ["Burst and PvP openers", "Assassin or Sorcerer", "About 9 / 8"],
        ]}
      />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">PvE DPS ranking</h2>
      <p className="text-[var(--muted)]">
        Damage-first classes only. Peak and typical are different lists. Assassin still leads KR peak logs after the
        Sept 5 Phantom Clone care. Ranger often leads median samples. Spiritmaster climbed on the Sept 5 fusion PvE
        bump. Sorcerer sits in the same band from the earlier 2026 recovery. Gladiator pays in buffs, not the meter.
        That patch is not global.
      </p>
      <DpsRanking />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Difficulty</h2>
      <DifficultyChart />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">PvP snapshot</h2>
      <DataTable
        headers={["If you want", "Look at", "Caveat"]}
        rows={[
          ["Stealth openers, 1v1 picks", "Assassin", "You lose if you miss the opener"],
          ["Fair duel bruiser", "Gladiator", "Ranged kites in open sky"],
          ["Open-world / rift roam", "Ranger, Assassin, Spiritmaster", "Pick fights; do not face-tank zergs"],
          ["Ranged burst", "Sorcerer, Ranger", "Sorc still pops if dived"],
          ["Organized group fights", "Templar, Cleric, Chanter", "These win wars, not parse screenshots"],
        ]}
      />
      <NextLinks items={[{ href: "/classes", label: "Classes" }, { href: "/roster", label: "Current Roster" }]} />
    </>
  );
}
