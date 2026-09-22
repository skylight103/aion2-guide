"use client";

import { useState } from "react";

type BoardKey = "snowfield" | "deus";

type Row = {
  name: string;
  tag: string;
  typical: number;
  peak: number;
  note: string;
};

const boards: Record<BoardKey, { hint: string; rows: readonly Row[] }> = {
  snowfield: {
    hint: "Snowfield of Sorrow (Hard). A later dungeon, not week one.",
    rows: [
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 89,
        peak: 110,
        note: "Leads Snowfield. Thin health.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 85,
        peak: 105,
        note: "A step behind, with the easiest uptime. Spirits keep casting while you move.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 81,
        peak: 101,
        note: "Third on this dungeon. The class that simply shows up.",
      },
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 72,
        peak: 93,
        note: "Pays for every missed back.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 70,
        peak: 89,
        note: "Lowest personal damage of the five. The party buffs are why the slot exists.",
      },
    ],
  },
  deus: {
    hint: "Corrupted Deus Research Base (Hard).",
    rows: [
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 81,
        peak: 114,
        note: "Leads the older farm. Sorcerer is about 1% behind.",
      },
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 82,
        peak: 111,
        note: "Essentially tied. A typical run still leans Sorcerer. The best runs lean Assassin.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 76,
        peak: 106,
        note: "A clear step back on this farm.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 75,
        peak: 108,
        note: "Same band as Ranger. The peak climbs when the spirits can sit on the boss.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 75,
        peak: 104,
        note: "Inside the pack on personal damage here. Still brought for the buffs.",
      },
    ],
  },
};

export function DpsRanking() {
  const [board, setBoard] = useState<BoardKey>("snowfield");
  const pack = boards[board];
  const scale = Math.max(...pack.rows.map((row) => row.peak));

  return (
    <div className="tier-board">
      <div className="tier-switch" role="group" aria-label="Dungeon">
        {(
          [
            ["snowfield", "Snowfield"],
            ["deus", "Deus"],
          ] as const
        ).map(([key, label]) => (
          <button key={key} type="button" aria-pressed={board === key} onClick={() => setBoard(key)}>
            {label}
          </button>
        ))}
      </div>
      <p className="tier-hint">{pack.hint}</p>
      <div className="tier-list">
        {pack.rows.map((row, i) => (
          <article key={row.name} className={`tier-row${i === 0 ? " is-lead" : ""}`}>
            <p className="tier-rank">{String(i + 1).padStart(2, "0")}</p>
            <div>
              <div className="tier-row-head">
                <h3>
                  {row.name}
                  <span className="tier-tag">{row.tag}</span>
                </h3>
                <p className="tier-spread">
                  <span>
                    <em>Typical</em>
                    <b>{row.typical}</b>
                  </span>
                  <span>
                    <em>Peak</em>
                    <b>{row.peak}</b>
                  </span>
                </p>
              </div>
              <div
                className="tier-meter"
                role="img"
                aria-label={`${row.name}: typical ${row.typical}, peak ${row.peak}`}
              >
                <span className="tier-meter-peak" style={{ width: `${(row.peak / scale) * 100}%` }} />
                <span
                  className="tier-meter-typical"
                  style={{ width: `calc(${(row.typical / scale) * 100}% - 3px)` }}
                />
              </div>
              <p className="tier-copy">{row.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
