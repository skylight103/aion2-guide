const rows = [
  { name: "Assassin", score: 9, note: "Engage timing, stealth, gap-closes" },
  { name: "Sorcerer", score: 8, note: "Burst order, thin health" },
  { name: "Ranger", score: 6.5, note: "Kite, and survive the dive" },
  { name: "Chanter", score: 6.5, note: "Mantra uptime while you melee" },
  { name: "Gladiator", score: 6, note: "Uptime against kiting and flight" },
  { name: "Cleric", score: 6, note: "Fewer buttons, more responsibility" },
  { name: "Templar", score: 5, note: "Straightforward kit, the pull is yours" },
  { name: "Spiritmaster", score: 5, note: "Light spirit management" },
];

export function DifficultyChart() {
  return (
    <ol className="tier-diff">
      {rows.map((row) => (
        <li key={row.name}>
          <div className="tier-diff-top">
            <span>{row.name}</span>
            <span>{row.score}</span>
          </div>
          <div className="bar" aria-hidden>
            <span style={{ width: `${(row.score / 10) * 100}%` }} />
          </div>
          <p>{row.note}</p>
        </li>
      ))}
    </ol>
  );
}
