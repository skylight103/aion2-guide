"use client";

import { useState } from "react";
import { DPS_BOARDS, type DpsContentKey, type DpsSortKey } from "@/lib/notmeter";

const SCALE_MIN = 70;
const SCALE_MAX = 100;

const CONTENT_CHIPS: readonly [DpsContentKey, string][] = [
  ["snowfield", "Current ranker"],
  ["deus", "Older farm"],
  ["fallen", "Fallen"],
  ["musphel", "Musphel (not this week)"],
];

function pos(value: number) {
  return ((value - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
}

/** Bar endpoints: left = low, right = high. Not typical→peak order. */
function barEnds(typical: number, peak: number) {
  return { left: Math.min(typical, peak), right: Math.max(typical, peak) };
}

function IdxEnds({ typical, peak, sort }: { typical: number; peak: number; sort?: DpsSortKey }) {
  const { left, right } = barEnds(typical, peak);
  const typicalClass = "text-[var(--gold-2)]";
  const peakClass = "text-[var(--asmo)]";
  const muted = "text-[var(--muted)]";
  const leftClass = left === typical && left !== peak ? typicalClass : left === peak && left !== typical ? peakClass : sort === "peak" ? peakClass : typicalClass;
  const rightClass = right === typical && right !== peak ? typicalClass : right === peak && right !== typical ? peakClass : sort === "peak" ? peakClass : typicalClass;
  const leftActive = sort ? (sort === "typical" ? left === typical : left === peak) : true;
  const rightActive = sort ? (sort === "typical" ? right === typical : right === peak) : true;

  return (
    <span className="tabular-nums" data-bar-dir="low-to-high" data-bar-left={left} data-bar-right={right}>
      <span className={sort ? (leftActive ? leftClass : muted) : leftClass}>{left}</span>
      <span className="mx-1 text-[var(--muted)]">→</span>
      <span className={sort ? (rightActive ? rightClass : muted) : rightClass}>{right}</span>
    </span>
  );
}

function DamageBand({ typical, peak }: { typical: number; peak: number }) {
  const { left: lo, right: hi } = barEnds(typical, peak);
  const start = pos(lo);
  const end = pos(hi);
  const width = Math.max(end - start, 2.5);

  return (
    <div className="relative h-5" data-bar-dir="low-to-high" data-bar-left={lo} data-bar-right={hi}>
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
  const [content, setContent] = useState<DpsContentKey>("snowfield");
  const [sort, setSort] = useState<DpsSortKey>("typical");
  const pack = DPS_BOARDS[content];
  const rows = [...pack.classes].sort((a, b) => b[sort] - a[sort] || b.peak - a.peak || b.typical - a.typical);
  const podium = rows.slice(0, 3);

  return (
    <div className="mt-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {CONTENT_CHIPS.map(([key, label]) => (
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
              <IdxEnds typical={row.typical} peak={row.peak} sort={sort} />
            </p>
          </article>
        ))}
      </div>

      <div className="mb-2 hidden px-[4.5rem] text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:flex">
        <span>low {SCALE_MIN}</span>
        <span className="mx-auto">85</span>
        <span className="ml-auto">high {SCALE_MAX}</span>
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
                  <p className="text-sm">
                    <IdxEnds typical={row.typical} peak={row.peak} />
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
        Integer idx versus the leader at that percentile on this slice, rounded to the nearest integer (0.5 → up).
        Typical is nDPS P50. Peak is nDPS P90. Deus and Fallen use that same rounding. Bars read low → high: left is
        min(typical, peak), right is max. Not an in-game stat and not a million-DPS claim. Support raw DPS is omitted
        on this board — not missing from the meter. Gold is typical, violet is peak. Brawler sits near Assassin on
        Snowfield nDPS and is not a launch class. Musphel is Recent 14 / All / the older 09-02→09 week only.
      </p>
    </div>
  );
}
