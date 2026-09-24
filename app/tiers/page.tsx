import { NextLinks, PageHeader } from "@/components/ui";
import { DifficultyChart } from "@/components/DifficultyChart";
import { DpsRanking } from "@/components/DpsRanking";

export const metadata = { title: "Class Tiers" };

const picks = [
  ["Tank", "Templar", "The slot groups wait on."],
  ["Heal", "Cleric", "The heal and the res are the job."],
  ["Buffs", "Chanter", "Fights with the party. Cleric still heals."],
  ["Ranged", "Spiritmaster", "The safest damage start."],
  ["Ranged", "Ranger", "Range, with the logs to prove it."],
  ["Burst", "Sorcerer", "Highest nDPS on the current board. Thin health."],
  ["Melee", "Gladiator", "Stays alive and buffs the party."],
  ["Melee", "Assassin", "Openers and backs. Miss either and the parse falls."],
] as const;

const stance = [
  ["Assassin", 6, 92, "Lives on the back."],
  ["Gladiator", 88, 6, "Faces the boss."],
  ["Ranger", 77, 16, "Mostly the front."],
  ["Spiritmaster", 65, 24, "Front, and takes the rear when the boss turns."],
  ["Sorcerer", 44, 13, "A lot of hits have no side."],
] as const;

const pvp = [
  ["1v1 picks", "Assassin. Miss the opener and the duel is over."],
  ["A fair bruiser", "Gladiator. Ranged kites you in open sky."],
  ["Roaming", "Ranger, Assassin, Spiritmaster. Pick the fight."],
  ["Ranged burst", "Sorcerer and Ranger. Sorcerer still pops if dived."],
  ["A war", "Templar, Cleric, Chanter. They hold the fight together."],
] as const;

export default function TiersPage() {
  return (
    <>
      <PageHeader
        kicker="Play"
        title="Class tiers"
        lede="Fill the role the group is missing."
      />

      <h2 className="font-[family-name:var(--font-display)] text-3xl">Who to bring</h2>
      <div className="tier-picks">
        {picks.map(([role, name, line]) => (
          <article key={name} className="tier-pick">
            <p>{role}</p>
            <h3>{name}</h3>
            <span>{line}</span>
          </article>
        ))}
      </div>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Damage order</h2>
      <p className="text-[var(--muted)]">
        Later Korean dungeons. On Snowfield the ranged classes pull away. On Deus, Assassin and Sorcerer are a
        dead heat.
      </p>
      <DpsRanking />

      <div className="tier-columns">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">Where the hits land</h2>
          <p className="text-[var(--muted)]">Crit is in the mid-80s for every damage class. Where you stand is the difference.</p>
          <p className="stance-legend">
            <span>
              <i className="front" /> Front
            </span>
            <span>
              <i className="back" /> Back
            </span>
            <span>
              <i className="open" /> No side
            </span>
          </p>
          <div className="stance-list">
            {stance.map(([name, front, back, line]) => (
              <div key={name} className="stance-row">
                <div className="stance-head">
                  <span>{name}</span>
                  <span>{line}</span>
                </div>
                <div className="stance-track" aria-hidden>
                  <i className="front" style={{ width: `${front}%` }} />
                  <i className="back" style={{ width: `${back}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">Difficulty</h2>
          <DifficultyChart />
        </section>
      </div>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Open world</h2>
      <ul className="tier-pvp">
        {pvp.map(([title, line]) => (
          <li key={title}>
            <strong>{title}</strong>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Damage stats</h2>
      <p className="text-[var(--muted)]">
        These lines raise damage. The rest of the sheet is on <a href="/combat">Combat</a>.
      </p>
      <div className="tier-stats">
        <article className="tier-stat">
          <b>Power</b>
          <span>+0.1%p Attack per point</span>
        </article>
        <article className="tier-stat">
          <b>Destruction</b>
          <span>+0.2%p Attack per point</span>
        </article>
        <article className="tier-stat">
          <b>Justice</b>
          <span>+0.2%p Perfect per point</span>
        </article>
        <article className="tier-stat">
          <b>Wisdom</b>
          <span>+0.2%p Smite per point</span>
        </article>
      </div>
      <NextLinks items={[{ href: "/classes", label: "Classes" }, { href: "/roster", label: "Current Roster" }]} />
    </>
  );
}
