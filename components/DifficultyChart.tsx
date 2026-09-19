const rows = [
  { name: "Assassin", score: 9, note: "Engage timing, stealth, 3D gap-closes" },
  { name: "Sorcerer", score: 8, note: "Burst sequencing, no HP budget" },
  { name: "Ranger", score: 6.5, note: "Kiting and not getting dived" },
  { name: "Chanter", score: 6.5, note: "Mantra uptime + melee" },
  { name: "Gladiator", score: 6, note: "Uptime vs ranged / flight kites" },
  { name: "Cleric", score: 6, note: "6 mechanics / 8 responsibility" },
  { name: "Templar", score: 5, note: "5 mechanics / 7 responsibility" },
  { name: "Spiritmaster", score: 5, note: "Light spirit management" },
];

export function DifficultyChart() {
  return (
    <div className="mt-4 space-y-3">
      {rows.map((row) => (
        <div key={row.name}>
          <div className="mb-1 flex justify-between text-sm">
            <span>{row.name}</span>
            <span className="text-[var(--gold-2)]">{row.score}/10</span>
          </div>
          <div className="bar">
            <span style={{ width: `${(row.score / 10) * 100}%` }} />
          </div>
          <p className="mt-1 text-xs text-[var(--muted)]">{row.note}</p>
        </div>
      ))}
    </div>
  );
}
