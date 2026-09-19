import { CombatArcana, CombatDaevanionPets, CombatSkills, CombatStats } from "@/components/CombatSystems";
import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Combat" };

export default function CombatPage() {
  return (
    <>
      <PageHeader
        kicker="Play"
        title="Combat"
        lede="Manual skills on the ground and in the air. Item level opens the door. Clearing a dungeon is not the same as opening the cube."
      />
      <Callout tone="gold">
        AION 2 is faster and more positional than classic Aion. Flight and a defensive reaction beat a static
        rotation. There is no auto-combat.
      </Callout>

      <h2 className="font-[family-name:var(--font-display)] text-3xl">How a fight works</h2>
      <p className="text-[var(--muted)]">
        You walk or fly into range, spend core skills, and answer the tell. Combo and trigger skills sit on extra
        slots above the main bar — they fire after a chain or a condition, not from the core rotation. Same class,
        different loadout.
      </p>
      <DataTable
        headers={["Step", "What happens"]}
        rows={[
          ["1. Approach", "Ground or air until you are in range. Mid-bosses start when the party walks into a marked aggro circle"],
          ["2. Spend", "Core skills while watching the boss. Groggy / stagger is the brief window after a mechanic — that is the burst. Miss it and the next pattern overlaps"],
          ["3. Defend", "Dodge, block, or parry when the tell starts. KR March 2026 named Perfect Shield Block and Perfect Parry"],
          ["4. Leave", "If you will die: land, kite, or take off. An empty flight bar means you fall — in the Abyss that often ends the fight"],
          ["5. Re-enter", "Only when the mechanic is over"],
        ]}
      />

      <CombatSkills />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Flight</h2>
      <p>
        Wings are farmed. Cash-shop skins do not add stats — confirmed on the August 7 global livestream. The
        resource that drains while you fly has no published English name. KR calls it Flight Power (비행력). Open
        the HUD and learn that bar. Empty means you fall.
      </p>
      <DataTable
        headers={["Practice", "Why"]}
        rows={[
          ["Take Ascension / first wings immediately", "KR Elyos writeups name the first-wings quest Fledgling Wings. Take Ascension as soon as it appears; the global name and level are unpublished"],
          ["Takeoff, hover, dive, land in a field", "Do this before you PvP. Abyss is 3D on purpose"],
          ["Melee close in 3D. Ranged avoid dives", "Assassin, Gladiator, Templar, Chanter must close"],
          ["Land or fold when you do not need altitude", "KR live habit: dash, then stop spending the bar. Technique, not a named system"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">PvE content</h2>
      <p className="text-[var(--muted)]">
        Official taxonomy from AION2NIGHT (August 2025). Global livestream kept Exploration / Conquest and named
        Nightmare as 1v1 bosses. Party size on global: 5-man dungeons, first raid 10. KR launched 4 / 8 and moved
        later. Read the door.
      </p>
      <DataTable
        headers={["Type", "What it is", "What fails first"]}
        rows={[
          [
            "Sealed Dungeon (봉인 던전)",
            "Short field combat–puzzle. Map ? marks. Enhance stones and Daevanion crystals, not weekly raid loot",
            "Time and completeness. Not a skill check",
          ],
          [
            "Garrison / Stronghold (주둔지)",
            "Campfire-icon field sites on the main quest. Hub plus mats. KR uses them for belt-upgrade materials",
            "Skipping them. You lose the mats, not the wipe",
          ],
          [
            "Daily Dungeon",
            "Short wave / score run for enhance stones. Name says daily; KR bills it from a weekly pool you can dump in one sitting",
            "Score, not wipes",
          ],
          [
            "Nightmare",
            "Solo boss ladder. Global livestream: 1v1 nightmare bosses. Stage count unpublished",
            "Pattern knowledge. Gear helps; the stage is a skill gate",
          ],
          [
            "Expedition — Exploration",
            "Standard party dungeon — the learning version. Relaxed patterns. Fire Temple is the named example",
            "Mechanics if new. Gear almost never",
          ],
          [
            "Expedition — Conquest",
            "Same dungeon, harder patterns, better gear. Main KR farm once you know the floor",
            "Mechanics first, then heal / tank pressure if undergeared",
          ],
          [
            "Transcendence (초월)",
            "Timed / ranked party instance. KR's Arcana (아르카나) farm — a later upgrade currency. Stage unlocks",
            "Timer, deaths, and patterns together",
          ],
          [
            "Sanctuary (성역)",
            "Raid. Global first raid is 10. KR later ran it as two parties sharing one instance. Encounter list unpublished",
            "Missed jobs. Gear is a floor; soaks and splits wipe you",
          ],
        ]}
      />
      <p className="text-[var(--muted)]">
        Awakening Battle (각성전) existed at reveal as a timed solo. Hunt / Eradication (토벌전) was a party hunt;
        KR Season 3 removed it. Neither is a week-one pillar. When to press each activity is on Activities.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">A dungeon run</h2>
      <DataTable
        headers={["Beat", "Rule"]}
        rows={[
          [
            "Door",
            "Character level and item level. Combat power is a score, not the lock. KR prints both; global doors unpublished",
          ],
          [
            "Pull",
            "Trash, then mid-bosses with a marked aggro circle. Combat starts when someone walks in. Do not walk in first",
          ],
          [
            "Fight",
            "Ground AoE you step out of. Some bosses give a groggy window. Fire Temple final in the official demo: dodge flames left and right",
          ],
          [
            "Cube",
            "Final boss down → Odyle Energy Cube. Opening spends energy. A clear with an empty bar is practice, not loot",
          ],
        ]}
      />
      <Callout tone="blue">
        Pre-launch demo used tickets on cubes. KR Chapter 1 dropped Expedition / Transcendence tickets and left
        Odyle Energy. Global ticket vs energy rule is unpublished. The idea holds: clear ≠ loot.
      </Callout>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Roles</h2>
      <p className="text-[var(--muted)]">
        NC demoed Fire Temple as tank + healer + DPS. Global 5-man adds a flex seat on purpose. The fifth body is
        not a fixed class.
      </p>
      <DataTable
        headers={["Role", "On a pull"]}
        rows={[
          [
            "Tank (Templar)",
            "Face, hold threat, interrupt / CC adds, soak frontal. Block is survivability. Taunt is for snaps, not spam",
          ],
          [
            "Healer (Cleric)",
            "Keep the tank through patterns; raid-wide after AoE. KR Cleric skills often auto-pick the lowest HP in range — confirm on global",
          ],
          [
            "Chanter",
            "Party buffs and peel. KR March 2026 stigma example: Barrier Spell. Not a second full healer unless the composition asks",
          ],
          ["DPS", "Hit groggy, leave the tank's face, do not stand in the circle"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">What kills you</h2>
      <DataTable
        headers={["Place", "Usual wipe"]}
        rows={[
          ["Exploration", "Standing in named ground, or walking into a mid-boss circle before the party is ready"],
          ["Conquest", "Same, plus a dead tank or a missed groggy so the next pattern overlaps"],
          ["Transcendence", "Timer or death count while someone is still learning the floor"],
          ["Sanctuary", "Missed assignment — soak, split, add laser. KR live raids are job-heavy, not meter-heavy"],
          ["Nightmare", "A solo pattern you have not seen. There is no healer to cover it"],
          ["Abyss", "Flight bar hits zero mid-chase, or you dive a group you cannot leave"],
          ["Not a wipe", "Boss dies and nobody has energy. That is a loot fail"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">PvP</h2>
      <p className="text-[var(--muted)]">
        Official 2025 list: Arena, Battlefield, Rift, Abyss. Global livestream locked three launch facts: Abyss has
        no flag, everywhere else does; battlegrounds are 10v10 with normalized stats; Nightmare is a PvE mode, not
        a PvP one.
      </p>
      <DataTable
        headers={["Mode", "How it is built", "Global vs KR"]}
        rows={[
          [
            "Abyss",
            "Always-on faction war. Ground and air in the same fight. Timed objectives exist",
            "Confirmed. No PvP toggle here",
          ],
          [
            "Open world",
            "Flag on, then fight. Flag off, you are not food",
            "Confirmed from launch, everywhere except the Abyss",
          ],
          [
            "Arena",
            "Ground only. Reveal: 1v1 and 4v4. Closest thing to a clean duel",
            "Formats unpublished for October 5. No flight",
          ],
          [
            "Battleground",
            "Objective fight. Reveal was 8v8 payload",
            "Livestream: 10v10, stats normalized. Gear still matters less than in Abyss",
          ],
          [
            "Rift (시공의 균열)",
            "Incursion into enemy land",
            "Reveal mode. Global rules unpublished. KR later added a separate war-mode flag with its own cooldown — that timer is not a launch rule",
          ],
        ]}
      />
      <p className="mt-6 text-[var(--muted)]">
        Chaotic Abyss, Outland, and Siege battlegrounds are later KR modes. They are not a launch list.
      </p>

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">How a PvP fight plays</h3>
      <DataTable
        headers={["Beat", "What you are doing"]}
        rows={[
          ["Engage", "Flag on, or step into the Abyss / queue. Pick altitude or a ground choke. First hit is position, not a button"],
          ["Flight", "Dive for speed, land or fold to stop the bar, re-engage. Empty bar drops you into melee you did not choose"],
          ["CC", "Lock the healer or peel the dive. Arenas have no flight, so CC plus burst decide faster"],
          [
            "Burst",
            "After CC or a defensive gap. KR March 2026 split PvE and PvP damage math and lowered PvP coefficients so fights last longer. No published numbers. Global fight length is unpublished",
          ],
          ["Peel / leave", "Grab or knock the diver off the healer. Disengage on remaining flight. Winning the trade and dying to the next three people is still a loss"],
        ]}
      />
      <DataTable
        headers={["Lane", "Where the gear comes from", "Do not"]}
        rows={[
          [
            "PvE",
            "Odyle cubes, craft, Sealed / Stronghold mats, later KR Transcendence Arcana (upgrade currency)",
            "Spend enhance stones on a revenge Abyss piece during opening week",
          ],
          [
            "PvP",
            "Abyss Points buy the PvP-stat shop. KR later dropped rank locks on those purchases. KR supply requests turn leftover gear into AP",
            "Treat AP shop as your item-level plan. Doors still use item level",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Skill macros</h2>
      <p className="text-[var(--muted)]">
        Three KR combat tools sit on the same loop. Skill Macro holds a short official sequence. Skill reservation
        queues the next press. Attack cancel (평캔) is the weave those two exist to help. Global UI unpublished.
      </p>
      <DataTable
        headers={["Tool", "What it does", "How you use it"]}
        rows={[
          [
            "Skill Macro (스킬 매크로)",
            "KR Jan 2026. Skill window → Skill Macro. Add steps, set a delay per step (minimum 50 ms). First ship: Weak Attack / Strong Attack (약공격 / 강공격) on left / right click. KR later added per-skill macros",
            "Bind it under Settings → keys → Skill Macro. Hold to run. Let go to stop. A manual press always wins over the sequence",
          ],
          [
            "Skill reservation (스킬 예약)",
            "Combat toggle. The next skill waits until the current one finishes, then fires. Stops a press from being eaten by recovery",
            "Long PvE usually on so heals and filler still land. PvP and gap-closes often off so movement is not queued behind a swing",
          ],
          [
            "Attack cancel (평캔)",
            "Cut a skill's recovery by weaving Weak / Strong Attack so the next input starts sooner. Spirit / mana often comes from the weave. A leftover afterimage means it landed",
            "By hand: left, then right or a skill, before the animation sits. Or hold Skill Macro on the two basics and press the rest yourself",
          ],
        ]}
      />
      <DataTable
        headers={["Class", "Attack cancel", "Reservation (KR live)"]}
        rows={[
          [
            "Templar",
            "Weave Weak / Strong between taunts and soaks so recovery does not eat the next block",
            "On in long PvE. Off if a peel has to come out now",
          ],
          [
            "Gladiator",
            "Greatsword recovery is the tax. Cancel the light swing into the next skill. The weave also feeds spirit",
            "On for dungeon filler. Off for a burst window you want to time by hand",
          ],
          [
            "Assassin",
            "Fast cancels between gap-close and burst. The opener dies if a leftover swing is still playing",
            "Often off so the dive is not queued behind a basic",
          ],
          [
            "Ranger",
            "Highest ranged payoff. Alternate the two basics around Aimed / Rapid Fire shots. Official Skill Macro is built for this left / right loop",
            "On in PvE. Off in open-world PvP so kites stay instant",
          ],
          [
            "Sorcerer",
            "Left basic into right basic or a cast. Afterimage = the cancel landed. Standing still to finish a cast is the dead parse",
            "On for long PvE. Off if you need to walk a mechanic mid-cast",
          ],
          [
            "Spiritmaster",
            "Left + right rhythm. Put a spirit or fusion skill on the Strong Attack slot. Left-click only is a dead parse",
            "On so fusion still fires while you weave",
          ],
          [
            "Cleric",
            "KR: weave Earth's Retribution (대지의 응보) between heals and Condemn (단죄). Skip the weave and spirit dies",
            "On so the heal still fires after a cancel",
          ],
          [
            "Chanter",
            "Same melee weave as Gladiator, but mantras have to stay up. The cancel is for spirit, not a second heal bar",
            "On in PvE so buffs are not dropped for a swing",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Farming</h2>
      <p className="text-[var(--muted)]">
        Combat time in week one is story, Sealed, Garrison, gather, Daily Dungeon, then Exploration. Open a Conquest
        cube when the piece is an upgrade. The activity calendar and play-count math live on Activities.
      </p>
      <DataTable
        headers={["Loop", "What you get", "Gate"]}
        rows={[
          ["Story + Sealed + Garrison", "Unlocks, Daevanion crystals, enhance stones, KR belt-upgrade mats", "The quest, not a weekly ticket"],
          ["Essence Extraction (채집)", "Ore, gems, wood, herbs, cooking, Odyle. KR: feeds weekly Substance Morph crafts", "KR: weekly craft counts are per character. Global counts unpublished"],
          ["Daily Dungeon", "Enhance stones", "KR: weekly pool. Global count unpublished"],
          ["Exploration / Conquest cube", "Real gear and cube Kina", "Odyle Energy. On KR, also a weekly reward count"],
          ["Open-world hunt", "Kina, mats, some AP", "Time. KR later capped field Kina and cut Abyss drop rates — live-KR economy, not a launch route"],
          ["Abyss / AP", "PvP shop currency. KR supply requests turn leftover gear into AP", "After you can fly and not feed"],
          ["Transcendence / Sanctuary", "Arcana and raid loot", "A real item-level door. Not week-one work"],
        ]}
      />
      <DataTable
        headers={["Skip", "Why"]}
        rows={[
          ["KR Season 3 named-field routes", "The in-game named map is a later KR QoL patch. Spawns and payouts will not match a fresh global economy"],
          ["KR Chapter 1 maps as if they are October 5", "Eltnen / Morheim clusters and later Sanctuary names are live-server history"],
          ["Current KR item-level doors, cube costs, weekly entries", "They move in patches. Read the panel"],
          ["Sanctuary / high Transcendence on day three", "Assignment content. Learn Exploration first"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Stigma loadout</h2>
      <p className="text-[var(--muted)]">
        Stigma is the extra skill set you slot. Build one PvE setup. Make a PvP preset after that setup clears the
        content you are actually running. KR March 2026 expanded Stigma to five slots and added a signature skill per
        class. Slot count on global day one is unpublished.
      </p>
      <DataTable
        headers={["Role", "First setup"]}
        rows={[
          ["DPS", "Damage, resource, mobility, one panic button"],
          ["Tank", "Threat, mitigation, peel"],
          ["Healer", "Throughput and emergency tools first. Supports get gatekept without key Stigma levels"],
        ]}
      />

      <CombatArcana />
      <CombatDaevanionPets />
      <CombatStats />
      <NextLinks items={[{ href: "/activities", label: "Activities" }, { href: "/classes", label: "Classes" }, { href: "/gear", label: "Gear" }]} />
    </>
  );
}
