"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { classGuides } from "@/lib/classGuides";

const tone = {
  tank: "bg-[rgba(212,175,106,0.18)] text-[var(--gold-2)]",
  bruiser: "bg-[rgba(232,168,124,0.16)] text-[#f0c9a8]",
  melee: "bg-[rgba(226,109,109,0.14)] text-[#f0b0b0]",
  ranged: "bg-[rgba(125,206,160,0.14)] text-[var(--ok)]",
  magic: "bg-[rgba(155,140,255,0.16)] text-[var(--asmo)]",
  heal: "bg-[rgba(125,206,160,0.16)] text-[#b6e6c9]",
  support: "bg-[rgba(155,140,255,0.14)] text-[#c4b8ff]",
} as const;

export function ClassTabs() {
  const [active, setActive] = useState(classGuides[0].slug);
  const current = classGuides.find((g) => g.slug === active) ?? classGuides[0];

  useEffect(() => {
    const apply = () => {
      const id = window.location.hash.replace("#", "").toLowerCase();
      if (classGuides.some((g) => g.slug === id)) setActive(id);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const select = (slug: string) => {
    setActive(slug);
    window.history.replaceState(null, "", `#${slug}`);
  };

  return (
    <div className="mt-4">
      <p className="text-[var(--muted)]">
        Toggle a class. Each panel is the job, the loop, Daevanion, and official Skill Macro.
      </p>
      <div
        role="tablist"
        aria-label="Class notes"
        className="mt-5 flex flex-wrap gap-2"
      >
        {classGuides.map((guide) => {
          const on = active === guide.slug;
          return (
            <button
              key={guide.slug}
              type="button"
              role="tab"
              aria-selected={on}
              id={`tab-${guide.slug}`}
              onClick={() => select(guide.slug)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                on
                  ? "border-[var(--gold)] bg-[rgba(212,175,106,0.15)] text-[var(--gold-2)]"
                  : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--gold)]/50 hover:text-[var(--ink)]"
              }`}
            >
              <img src={guide.portrait} alt="" className="h-5 w-5 object-contain" />
              {guide.name}
            </button>
          );
        })}
      </div>

      <article
        role="tabpanel"
        aria-labelledby={`tab-${current.slug}`}
        className="class-panel mt-5 overflow-hidden rounded-2xl border border-[var(--line)] bg-[rgba(18,21,30,0.78)]"
      >
        <div className="grid gap-0 md:grid-cols-[240px_1fr]">
          <figure className="grid min-h-[280px] place-items-center border-b border-[var(--line)] bg-[rgba(7,8,12,0.55)] px-6 py-8 md:border-b-0 md:border-r">
            <img
              src={current.portrait}
              alt={current.portraitAlt}
              width={512}
              height={512}
              className="h-52 w-52 object-contain drop-shadow-[0_0_24px_rgba(212,175,106,0.28)] md:h-56 md:w-56"
            />
          </figure>

          <div className="p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">{current.kr}</p>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-3xl md:text-4xl">{current.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className={`rounded-full px-2.5 py-1 ${tone[current.roleTone]}`}>{current.role}</span>
              <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">
                {current.weapon}
              </span>
            </div>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink)]/90">{current.identity}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{current.weaponNote}</p>

            <div className="mt-5 rounded-xl border border-[var(--gold)]/35 bg-[rgba(212,175,106,0.08)] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--gold)]">March 2026 stigma</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">
                {current.stigma.en}{" "}
                <span className="text-base text-[var(--muted)]">({current.stigma.kr})</span>
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">{current.stigma.note}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">PvE</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.pve.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">PvP</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.pvp.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--gold)]">First habit</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{current.habit}</p>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--danger)]">Beginner miss</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{current.mistake}</p>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Week-one skip</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{current.skip}</p>
          </section>
        </div>

        <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">Playstyle and rotation</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.playstyle.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">Skill leveling</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.leveling.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">Daevanion</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.daevanion.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">Macros setup</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.macros.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="border-t border-[var(--line)] p-5">
          <p className="text-sm text-[var(--muted)]">
            Official Skill Macro only — Skill window, bind the key, hold to run. Attack cancel and reservation sit on{" "}
            <Link href="/combat" className="text-[var(--gold-2)] underline-offset-2 hover:underline">
              Combat
            </Link>
            . Sources:{" "}
            {current.sources.map((source, i) => (
              <span key={source.href}>
                {i > 0 ? " · " : null}
                <a href={source.href} target="_blank" rel="noreferrer" className="text-[var(--gold-2)] hover:underline">
                  {source.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </article>
    </div>
  );
}
