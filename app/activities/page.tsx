import Link from "next/link";
import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Activities" };

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        kicker="Systems"
        title="Activities"
        lede="Capped cubes before infinite grind. Opening week, the activity that matters is the one that spends energy on a character who can already regenerate it."
      />
      <Callout tone="blue">
        Official global queue / group-finder UI path is unpublished. Look for Match, Party, Expedition, or Finder. If
        it does not exist, form a party and walk to the door.
      </Callout>
      <DataTable
        headers={["Activity", "Job in week one", "When to press it"]}
        rows={[
          ["Main Story Quest", "Unlocks energy, wings, and the rest of the game", "Default action until the ~22 gate, then again on each alt"],
          ["Breeze Boutique quest", "KR: starts Odyle Energy regen around 22–23", "Do it the moment it appears. Then park and make the next character"],
          ["Side quests", "Local XP, Kina, materials", "Main: on-route only. Alts: skip unless you are gated"],
          ["Sealed dungeons / hideouts", "Targeted power and crystals", "When story fights bounce you. Not an alt farm. Named list on the week-one map"],
          ["Strongholds / Garrisons", "Progression resources", "Support, do not replace story. Elyos forts are named; Altgard forts are still unlabeled"],
          ["Empyrean Traces", "Wisdom Stones and the zone monolith", "Pick feathers up on-route. Turn Verteron in at Dawn Legion Base, Altgard at Shadow Hall. Track them on the week-one map"],
          ["Daily Dungeon", "Short repeatable juice", "After it exists, on characters that already have energy"],
          ["Expedition / Conquest", "First real group gear and cube-Kina lane", "Highest clean difficulty. This is the play-count that matches the livestream table"],
          ["Exploration (solo-scaled)", "KR early Unique gear and practice", "Fire Temple unlocks ~36–38 in KR. Later than the energy gate"],
          ["Nightmare / solo hard", "Fill gaps, specific mats", "No party, or you need that track"],
          ["Transcendence / Sanctuary", "Later group ladders", "Only after you meet the real gate. Not week-one barracks work"],
          ["Abyss + open PvP", "Faction war, Abyss Points", "After you can fly and not feed. Weekly time can be capped"],
          ["Arenas / duels", "Learn PvP cleanly", "Practice without ruining a gear night"],
          ["Gathering / crafting", "Consumables and weekly morphs", "Each character has its own weekly craft counts. Alts help here too"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Cubes, charges, play-count</h2>
      <p>
        A clear, a weekly charge, and a play-count tick are three different things. You can finish an instance and
        still miss the cube if energy is empty. You can open a cube and still get 20% Kina if the weekly play-count
        is cooked.
      </p>
      <DataTable
        headers={["Layer", "Week-one rule"]}
        rows={[
          ["Energy", "Per-character. Opening week you want four bars ticking, not one huge dump"],
          ["Weekly charges", "KR May 2026: Expedition 21, Transcendence 14. Global counts unpublished. Read the panel"],
          ["Play-count", "Livestream: 0–83 keeps cube Kina at 100% on that mode. 147+ is 20%. If the number is already huge on login, it is not your barracks counter"],
          ["Tickets", "Extra entries still cost energy and still tick the play-count"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Named Expeditions</h2>
      <p>
        Global marketing has shown Krao Cave, Urugugu Canyon, Fire Temple, Draupnir. Older cards say up to 4 players.
        Current Steam copy talks about 5-player parties and 10-player group dungeons. Confirm party size in the instance
        UI. Do not copy a KR Season 3 farm order just because the name matches.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Reward priority</h2>
      <DataTable
        headers={["Priority", "Do this"]}
        rows={[
          ["1", "Get four characters to the energy gate"],
          ["2", "Time-limited dailies on characters that can claim them"],
          ["3", "Weekly cubes / capped group rewards while play-count is still 100%"],
          ["4", "Odyle Energy on the pool that fixes the main's bottleneck"],
          ["5", "Unlimited open-world only after that"],
        ]}
      />
      <p className="mt-8 text-[var(--muted)]">
        Where the sealed dungeons and forts actually sit is on the{" "}
        <Link href="/map">week-one map</Link>
        — Verteron and Altgard only, KR names, regional placement. Dense KR atlases stay outbound.
      </p>
      <NextLinks items={[{ href: "/map", label: "Week-one map" }, { href: "/alts", label: "Barracks and Energy" }, { href: "/currencies", label: "Currencies" }]} />
    </>
  );
}
