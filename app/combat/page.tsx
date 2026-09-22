import Link from "next/link";
import {
  CombatArcana,
  CombatDaevanionPets,
  CombatSkills,
  CombatStats,
  CombatStatus,
} from "@/components/CombatSystems";
import { CombatChapter } from "@/components/CombatChapter";
import { CombatToc } from "@/components/CombatToc";
import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Combat" };

export default function CombatPage() {
  return (
    <div className="gear-page">
      <PageHeader
        kicker="Play"
        title="Combat"
        lede="Skills, chains, boards, and the damage math. Item level opens the door. The class sheet is the button order."
      />
      <div className="gear-notes">
        <Callout tone="gold">
          There is no auto-combat. A chain fires because a condition is already true. Combat power is the character
          total, and buffs do not count. Doors still use item level.
        </Callout>
        <Callout tone="blue">
          Korean live has more Stigma slots, Arcana cards, and later modes than a fresh launch. The ladders below are
          the systems. Read the panel for the number on your server.
        </Callout>
      </div>

      <CombatToc />

      <CombatChapter id="skills">
        <CombatSkills />
      </CombatChapter>

      <CombatChapter id="status">
        <CombatStatus />
      </CombatChapter>

      <CombatChapter id="places">
        <h3 id="roles" className="gear-sub">
          Roles
        </h3>
        <p className="text-[var(--muted)]">
          A party is a tank, a healer, damage, and a flex. Global 5-man adds that fifth seat on purpose. It is not a
          fixed class.
        </p>
        <div className="combat-roles">
          <article className="slot-card">
            <h3 className="slot-name">Tank</h3>
            <p>Templar. Face, Enmity, peel, and the frontal. Block is survival. Taunt is a snap, not a rotation.</p>
          </article>
          <article className="slot-card">
            <h3 className="slot-name">Healer</h3>
            <p>Cleric. Keep the tank through patterns, then the party after an AoE. Korean heals often pick the lowest HP in range. Confirm that on your client.</p>
          </article>
          <article className="slot-card">
            <h3 className="slot-name">Chanter</h3>
            <p>Party buffs and peel. A second full healer only if the composition asks for one.</p>
          </article>
          <article className="slot-card">
            <h3 className="slot-name">Damage</h3>
            <p>Hit the Stagger window, stay off the tank’s face, and leave the marked ground.</p>
          </article>
        </div>

        <h3 id="pve" className="gear-sub">
          PvE
        </h3>
        <p className="text-[var(--muted)]">
          Exploration and Conquest stay. Nightmare is 1v1 bosses. Party size on global: 5-man dungeons, first raid 10.
          Korea launched 4 / 8 and moved later. Read the door.
        </p>
        <DataTable
          headers={["Type", "What it is", "What fails first"]}
          rows={[
            [
              "Sealed Dungeon (봉인 던전)",
              "Short field combat–puzzle. Map marks. Enhance stones and Daevanion crystals, not weekly raid loot",
              "Time and completeness",
            ],
            [
              "Garrison / Stronghold (주둔지)",
              "Campfire-icon field sites on the main quest. Hub plus mats",
              "Skipping them. You lose the mats",
            ],
            [
              "Daily Dungeon",
              "Short wave / score run for enhance stones. Korea bills it from a weekly pool you can dump in one sitting",
              "Score",
            ],
            [
              "Nightmare",
              "Solo boss ladder. Stage count unpublished",
              "A pattern you have not seen. There is no healer",
            ],
            [
              "Expedition — Exploration",
              "The learning version of a party dungeon. Relaxed patterns. Fire Temple is the named example",
              "Mechanics if the floor is new",
            ],
            [
              "Expedition — Conquest",
              "Same dungeon, harder patterns, better gear",
              "Mechanics, then a dead tank or a missed Stagger",
            ],
            [
              "Transcendence (초월)",
              "Timed party instance and the Arcana farm. A later upgrade currency",
              "Timer, deaths, and patterns together",
            ],
            [
              "Sanctuary (성역)",
              "Raid. Global first raid is 10. Korea later ran it as two parties in one instance",
              "A missed job: soak, split, or add",
            ],
          ]}
        />
        <p className="text-[var(--muted)]">
          The door checks item level. The cube spends Odyle Energy. A clear with an empty bar is practice. When to run
          each mode is on <Link href="/activities">Activities</Link>. Awakening Battle was a timed solo at reveal, and
          Hunt was a party hunt Korea later removed. Neither is a week-one pillar.
        </p>

        <h3 id="pvp" className="gear-sub">
          PvP
        </h3>
        <p className="text-[var(--muted)]">
          Arena, Battlefield, Rift, and Abyss. Abyss has no flag. Everywhere else does. PvE and PvP damage are separate
          math. The coefficients are unpublished. Nightmare is a PvE mode.
        </p>
        <DataTable
          headers={["Mode", "How it is built", "Global vs Korea"]}
          rows={[
            [
              "Abyss",
              "Always-on faction war. Ground and air in the same fight. An empty flight bar drops you",
              "Confirmed. No PvP toggle here",
            ],
            [
              "Open world",
              "Flag on, then fight. Flag off, you are not food",
              "Confirmed from launch, everywhere except the Abyss",
            ],
            [
              "Arena",
              "Ground only. Reveal: 1v1 and 4v4",
              "Formats unpublished for October 5. No flight",
            ],
            [
              "Battleground",
              "Objective fight. Reveal was 8v8 payload",
              "10v10, stats normalized. Gear matters less than in the Abyss",
            ],
            [
              "Rift (시공의 균열)",
              "Incursion into enemy land",
              "Reveal mode. Global rules unpublished. A later Korean war-mode timer is not a launch rule",
            ],
          ]}
        />
        <p className="text-sm text-[var(--muted)]">
          Chaotic Abyss, Outland, and Siege battlegrounds are later Korean modes.
        </p>
        <DataTable
          headers={["Lane", "Where the gear comes from", "Leave it"]}
          rows={[
            [
              "PvE",
              "Odyle cubes, craft, Sealed and Stronghold mats. Transcendence Arcana is a later upgrade currency",
              "Enhance stones on a revenge Abyss piece during opening week",
            ],
            [
              "PvP",
              "Abyss Points buy the PvP shop. Korea later dropped rank locks on those purchases, and supply requests turn leftover gear into points",
              "The AP shop as your item-level plan. Doors still use item level",
            ],
          ]}
        />
      </CombatChapter>

      <CombatChapter id="arcana">
        <CombatArcana />
      </CombatChapter>

      <CombatChapter id="boards">
        <CombatDaevanionPets />
      </CombatChapter>

      <CombatChapter id="damage">
        <CombatStats />
      </CombatChapter>

      <NextLinks
        items={[
          { href: "/classes", label: "Classes" },
          { href: "/gear", label: "Gear" },
          { href: "/activities", label: "Activities" },
        ]}
      />
    </div>
  );
}
