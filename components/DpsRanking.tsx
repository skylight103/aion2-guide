"use client";

import { useState } from "react";

const SCALE_MIN = 70;
const SCALE_MAX = 100;

type SortKey = "typical" | "peak";
type ContentKey = "snowfield" | "deus";

type ClassRow = {
  name: string;
  tag: string;
  typical: number;
  peak: number;
  note: string;
};

const contents: Record<
  ContentKey,
  {
    label: string;
    hint: string;
    classes: readonly ClassRow[];
  }
> = {
  snowfield: {
    label: "Current ranker",
    hint: "Snowfield of Sorrow (Hard) · this week · all bosses · all CP · nDPS",
    classes: [
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 100,
        peak: 100,
        note: "Leads this board on nDPS. Party-buff-normalized, so it is not a raw-screenshot win. Same glass as always — no HP budget.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 95,
        peak: 95,
        note: "High typical, tight band, ping-friendly. Spirits keep uptime while you move. The comfortable ranged start still holds.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 90,
        peak: 92,
        note: "Third on nDPS and the largest DPS sample. Tight band — the class that shows up. Aimed Arrow care is not a rewrite.",
      },
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 80,
        peak: 84,
        note: "Lowest typical of the four on this dungeon once buffs are stripped. Still posts the raw (un-normalized) max. You pay for backs.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 78,
        peak: 81,
        note: "Lowest personal nDPS in a real party. Dummy parses flatter this. Party lifesteal and damage buffs are the payment.",
      },
    ],
  },
  deus: {
    label: "Older farm",
    hint: "Corrupted Deus Research Base (Hard) · this week · all bosses · all CP · nDPS",
    classes: [
      {
        name: "Sorcerer",
        tag: "Ranged burst",
        typical: 100,
        peak: 97,
        note: "Typical still first. Peak loses to Assassin. Same glass. Do not read this as a week-one door.",
      },
      {
        name: "Assassin",
        tag: "Melee burst",
        typical: 98,
        peak: 100,
        note: "Peak first on the older high-volume farm. Typical sits on Sorcerer’s shoulder. Phantom Clone care is not global.",
      },
      {
        name: "Ranger",
        tag: "Ranged physical",
        typical: 93,
        peak: 93,
        note: "Middle of the pack, huge sample. The class that shows up when the board is not a brand-new ranker dungeon.",
      },
      {
        name: "Spiritmaster",
        tag: "Ranged pet",
        typical: 91,
        peak: 95,
        note: "Typical sits with Gladiator. Peak climbs. Still the comfortable ranged start if you are not chasing this farm’s ceiling.",
      },
      {
        name: "Gladiator",
        tag: "Bruiser",
        typical: 91,
        peak: 91,
        note: "In the pack on personal nDPS here, still not the reason you bring one. Buffs pay the slot.",
      },
    ],
  },
};

function pos(value: number) {
  return ((value - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
}

function DamageBand({ typical, peak }: { typical: number; peak: number }) {
  const lo = Math.min(typical, peak);
  const hi = Math.max(typical, peak);
  const start = pos(lo);
  const end = pos(hi);
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
        style={{ left: `${pos(typical)}%` }}
      />
      <span
        className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#12151e] bg-[var(--asmo)] shadow-[0_0_10px_rgba(155,140,255,0.45)]"
        style={{ left: `${pos(peak)}%` }}
      />
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm ${
        active
          ? "border-[var(--gold)] bg-[rgba(212,175,106,0.15)] text-[var(--gold-2)]"
          : "border-[var(--line)] text-[var(--muted)]"
      }`}
    >
      {children}
    </button>
  );
}

export function DpsRanking() {
  const [content, setContent] = useState<ContentKey>("snowfield");
  const [sort, setSort] = useState<SortKey>("typical");
  const pack = contents[content];
  const rows = [...pack.classes].sort((a, b) => b[sort] - a[sort] || b.peak - a.peak || b.typical - a.typical);
  const podium = rows.slice(0, 3);

  return (
    <div className="mt-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["snowfield", "Current ranker"],
              ["deus", "Older farm"],
            ] as const
          ).map(([key, label]) => (
            <Chip key={key} active={content === key} onClick={() => setContent(key)}>
              {label}
            </Chip>
          ))}
          <span className="mx-1 hidden h-6 w-px self-center bg-[var(--line)] sm:block" />
          {(
            [
              ["typical", "Typical (P50)"],
              ["peak", "Peak (P90)"],
            ] as const
          ).map(([key, label]) => (
            <Chip key={key} active={sort === key} onClick={() => setSort(key)}>
              {label}
            </Chip>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)]">
          <span className="mr-3 text-[var(--gold-2)]">● Typical</span>
          <span className="text-[var(--asmo)]">● Peak</span>
        </p>
      </div>
      <p className="mb-4 text-sm text-[var(--muted)]">{pack.hint}</p>

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
        Relative index versus the leader at that percentile on this slice. Typical is nDPS P50. Peak is nDPS P90. Not
        an in-game stat and not a million-DPS claim. The gold-to-violet band is the typical-to-peak spread. Brawler
        sits near Assassin on the meter and is not a launch class.
      </p>
    </div>
  );
}
