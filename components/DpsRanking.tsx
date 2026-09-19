"use client";

import { useState } from "react";

const SCALE_MIN = 70;
const SCALE_MAX = 100;

const classes = [
  {
    name: "Assassin",
    tag: "Melee burst",
    typical: 86,
    peak: 100,
    note: "Highest KR peak, including Sept 5 Phantom Clone care. Typical drops if backs are missed or the opener dies.",
  },
  {
    name: "Spiritmaster",
    tag: "Ranged pet",
    typical: 89,
    peak: 95,
    note: "High typical, ping-friendly. Sept 5 fusion PvE +20% and a Flames spec bump vs bosses. Spirits keep uptime while you move.",
  },
  {
    name: "Sorcerer",
    tag: "Ranged burst",
    typical: 85,
    peak: 93,
    note: "Recovered burst caster after 2026 KR buffs. Ceiling is still in the pack. Not in the Sept 5 care pass. No HP budget.",
  },
  {
    name: "Ranger",
    tag: "Ranged physical",
    typical: 90,
    peak: 92,
    note: "Often first in median samples. Tight band — the class that shows up. Sept 5 was an Aimed Arrow spec bump, not a rewrite.",
  },
  {
    name: "Gladiator",
    tag: "Bruiser",
    typical: 76,
    peak: 83,
    note: "Lower personal meter on most expedition logs. Sept 5 was bugfixes. Party lifesteal and damage buffs are the payment.",
  },
] as const;

type SortKey = "peak" | "typical";

function pos(value: number) {
  return ((value - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
}

function DamageBand({ typical, peak }: { typical: number; peak: number }) {
  const start = pos(typical);
  const end = pos(peak);
  const width = Math.max(end - start, 2.5);

  return (
    <div className="relative h-5">
      <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-white/[0.07]" />
      <div
        className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#c9a15a,var(--asmo))]"
        style={{ left: `${start}%`, width: `${width}%` }}
      />
      <span
        className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#12151e] bg-[var(--gold-2)] shadow-[0_0_10px_rgba(240,213,154,0.45)]"
        style={{ left: `${start}%` }}
      />
      <span
        className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#12151e] bg-[var(--asmo)] shadow-[0_0_10px_rgba(155,140,255,0.45)]"
        style={{ left: `${end}%` }}
      />
    </div>
  );
}

export function DpsRanking() {
  const [sort, setSort] = useState<SortKey>("peak");
  const rows = [...classes].sort((a, b) => b[sort] - a[sort] || b.peak - a.peak);
  const podium = rows.slice(0, 3);

  return (
    <div className="mt-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {(
            [
              ["peak", "Peak logs"],
              ["typical", "Typical logs"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSort(key)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                sort === key
                  ? "border-[var(--gold)] bg-[rgba(212,175,106,0.15)] text-[var(--gold-2)]"
                  : "border-[var(--line)] text-[var(--muted)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)]">
          <span className="mr-3 text-[var(--gold-2)]">● Typical</span>
          <span className="text-[var(--asmo)]">● Peak</span>
        </p>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
        {podium.map((row, i) => (
          <article
            key={row.name}
            className={`rounded-2xl border px-3 py-4 text-center sm:px-4 ${
              i === 0
                ? "border-[var(--gold)]/60 bg-[rgba(212,175,106,0.1)]"
                : "border-[var(--line)] bg-[rgba(18,21,30,0.72)]"
            }`}
          >
            <p className="font-[family-name:var(--font-display)] text-2xl leading-none text-[var(--gold-2)] sm:text-3xl">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg leading-tight sm:text-2xl">{row.name}</h3>
            <p className="mt-2 text-sm">
              <span className={sort === "typical" ? "text-[var(--gold-2)]" : "text-[var(--muted)]"}>{row.typical}</span>
              <span className="mx-1 text-[var(--muted)]">→</span>
              <span className={sort === "peak" ? "text-[var(--asmo)]" : "text-[var(--muted)]"}>{row.peak}</span>
            </p>
          </article>
        ))}
      </div>

      <div className="mb-2 hidden px-[4.5rem] text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:flex">
        <span>70</span>
        <span className="mx-auto">85</span>
        <span className="ml-auto">100</span>
      </div>

      <div className="space-y-3">
        {rows.map((row, i) => (
          <article
            key={row.name}
            className={`rounded-2xl border bg-[rgba(18,21,30,0.72)] p-4 ${
              i === 0 ? "border-[var(--gold)]/55" : "border-[var(--line)]"
            }`}
          >
            <div className="flex gap-4">
              <p className="w-10 shrink-0 font-[family-name:var(--font-display)] text-3xl leading-none text-[var(--gold-2)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl leading-none">{row.name}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">{row.tag}</p>
                  </div>
                  <p className="text-sm tabular-nums">
                    <span className="text-[var(--gold-2)]">{row.typical}</span>
                    <span className="mx-1 text-[var(--muted)]">→</span>
                    <span className="text-[var(--asmo)]">{row.peak}</span>
                  </p>
                </div>
                <DamageBand typical={row.typical} peak={row.peak} />
                <p className="mt-3 text-sm text-[var(--muted)]">{row.note}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-xs text-[var(--muted)]">
        Relative index versus the current Assassin peak on KR/TW logs through Sept 5, 2026 class care. Not an in-game
        stat and not a million-DPS claim. The gold-to-violet band is the typical-to-peak spread.
      </p>
    </div>
  );
}
