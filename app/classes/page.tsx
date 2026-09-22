import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";
import { ClassTabs } from "@/components/ClassTabs";

export const metadata = { title: "Classes" };

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        kicker="Play"
        title="Classes"
        lede="Eight classes at launch. Tank, healer, support, and five damage jobs. Pick the job, then learn the loop."
      />
      <Callout tone="green">The launch roster is eight classes. Brawler is not one of them — do not start there.</Callout>
      <p className="mt-6 text-[var(--muted)]">
        Role demand does not shuffle. Groups still need a Templar, a Cleric, and usually a Chanter.
      </p>
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Roster at a glance</h2>
      <DataTable
        headers={["Class", "Role", "Play this if"]}
        rows={[
          ["Templar", "Main tank", "You want reliable group demand. Skip if you only care about personal meter"],
          ["Gladiator", "Melee bruiser", "Melee that lives and buffs the party. Skip if you want the highest raw parse"],
          ["Assassin", "Melee burst DPS", "Picks and PvP openers. Skip if you hate dying for one mistimed engage"],
          ["Ranger", "Ranged physical DPS", "Range plus open-world PvP. Skip if you panic in melee"],
          ["Sorcerer", "Ranged magic burst", "Classic caster burst. Skip if you need a forgiving health pool"],
          ["Spiritmaster", "Ranged magic DPS + spirits", "Current safest PvE DPS start. Skip if you hate extra units"],
          ["Cleric", "Main healer", "You will heal groups and value res. Skip if you want a damage parse"],
          ["Chanter", "Melee support", "Buff the whole party while fighting. Skip if you expect to replace a Cleric"],
        ]}
      />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Beginner picks</h2>
      <DataTable
        headers={["You want", "Start here", "Why"]}
        rows={[
          ["Easiest ranged DPS", "Spiritmaster or Ranger", "Range + current comfort"],
          ["Melee without Assassin pain", "Gladiator", "Durability while you learn flight"],
          ["Always get a dungeon slot", "Templar or Cleric", "Role scarcity beats a DPS queue"],
          ["Support without full heal duty", "Chanter", "Buff identity is unique"],
          ["High skill / PvP", "Assassin", "Only if you accept the deaths"],
        ]}
      />
      <p className="mt-6 text-[var(--muted)]">
        One main identity is correct. The barracks still wants three alts at the energy gate. Those alts should fill
        missing roles, not clone the popular DPS.
      </p>
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Key skills to 20</h2>
      <p className="mt-3 text-[var(--muted)]">
        Every class has Actives that only come online at level 20, when the third Specialty slot opens. Global Arcana
        is expected to be thinner than current KR — lock two of those skills early (rings + cards), then Passives.
        Templar Judgment (심판) and Gladiator Overhead Slam (내려찍기) can be most of that class’s personal damage from
        one button.
      </p>
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Class sheets</h2>
      <p className="mt-3 text-[var(--muted)]">
        Pick a class. The sheet is the skill order, the hold macro, and the level-12 Nezekan board.
      </p>
      <ClassTabs />
      <NextLinks items={[{ href: "/alts", label: "Barracks and Energy" }, { href: "/tiers", label: "DPS Tier List" }]} />
    </>
  );
}
