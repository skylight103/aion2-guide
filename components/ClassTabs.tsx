"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { classGuides } from "@/lib/classGuides";
import { classSheets } from "@/lib/classSheets";
import { daevanionBoards, type BoardCell } from "@/lib/daevanionBoards";
import { skillIcons } from "@/lib/skillIcons";
import { skillTooltips, type SkillTooltip } from "@/lib/skillTooltips";

const tone = {
  tank: "bg-[rgba(212,175,106,0.18)] text-[var(--gold-2)]",
  bruiser: "bg-[rgba(232,168,124,0.16)] text-[#f0c9a8]",
  melee: "bg-[rgba(226,109,109,0.14)] text-[#f0b0b0]",
  ranged: "bg-[rgba(125,206,160,0.14)] text-[var(--ok)]",
  magic: "bg-[rgba(155,140,255,0.16)] text-[var(--asmo)]",
  heal: "bg-[rgba(125,206,160,0.16)] text-[#b6e6c9]",
  support: "bg-[rgba(155,140,255,0.14)] text-[#c4b8ff]",
} as const;

const tooltipAliases: Record<string, Record<string, string>> = {
  gladiator: { "Armor of Protection": "Protection Armor" },
  sorcerer: { "Earth Robe": "Robe of Earth", "Flame Robe": "Robe of Flame" },
  cleric: { "Empyrean Lords' Grace": "Empyrean Lord's Grace" },
};

function iconFile(slug: string, name: string) {
  return skillIcons[slug]?.[name];
}

function resolveTooltip(slug: string, name: string) {
  const tips = skillTooltips[slug];
  if (!tips) return null;
  if (tips[name]?.description) return { title: name, tip: tips[name] };
  const alias = tooltipAliases[slug]?.[name];
  if (alias && tips[alias]) return { title: alias, tip: tips[alias] };
  return null;
}

function formatSeconds(seconds: number) {
  if (seconds >= 60 && seconds % 60 === 0) return `${seconds / 60} min`;
  return `${seconds} sec`;
}

function tooltipStats(tip: SkillTooltip) {
  const rows: string[] = [];
  if (tip.cooldown) rows.push(`Cooldown ${formatSeconds(tip.cooldown)}`);
  if (tip.mp) rows.push(`MP ${tip.mp}`);
  if (tip.hp) rows.push(`HP ${tip.hp}`);
  if (tip.dp) rows.push(`DP ${tip.dp}`);
  return rows;
}

function SkillTip({
  slug,
  name,
  className,
  labelled = true,
  children,
}: {
  slug: string;
  name: string;
  className?: string;
  labelled?: boolean;
  children: ReactNode;
}) {
  const resolved = resolveTooltip(slug, name);
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, below: false });

  const place = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const below = rect.top < 190;
    const popWidth = Math.min(300, window.innerWidth - 24);
    const half = popWidth / 2;
    const center = rect.left + rect.width / 2;
    setPos({
      top: below ? rect.bottom : rect.top,
      left: Math.min(window.innerWidth - 12 - half, Math.max(12 + half, center)),
      below,
    });
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [slug, name]);

  useEffect(() => {
    if (!open) return;
    const onMove = () => place();
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [open, place]);

  if (!resolved) {
    return className ? <span className={className}>{children}</span> : <>{children}</>;
  }

  const stats = tooltipStats(resolved.tip);

  return (
    <button
      type="button"
      ref={ref}
      className={className ? `skill-tip ${className}` : "skill-tip"}
      aria-label={labelled ? resolved.title : undefined}
      onMouseEnter={() => {
        place();
        setOpen(true);
      }}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => {
        place();
        setOpen(true);
      }}
      onBlur={() => setOpen(false)}
      onClick={(event) => {
        const pointer = event.nativeEvent instanceof PointerEvent ? event.nativeEvent.pointerType : "";
        if (pointer && pointer !== "touch") return;
        place();
        setOpen((current) => !current);
      }}
    >
      {children}
      {open
        ? createPortal(
            <span
              className={pos.below ? "skill-pop skill-pop--below" : "skill-pop"}
              style={{ top: pos.top, left: pos.left }}
              role="tooltip"
            >
              <span className="skill-pop-name">{resolved.title}</span>
              <span className="skill-pop-kind">{resolved.tip.kind}</span>
              {stats.length ? <span className="skill-pop-stats">{stats.join(" · ")}</span> : null}
              <span className="skill-pop-desc">{resolved.tip.description}</span>
            </span>,
            document.body,
          )
        : null}
    </button>
  );
}

function SkillGem({
  slug,
  name,
  step,
  note,
}: {
  slug: string;
  name: string;
  step?: number;
  note?: string;
}) {
  const file = iconFile(slug, name);
  return (
    <div className="skill-gem">
      <SkillTip slug={slug} name={name} labelled={false}>
        <span className="skill-gem-icon">
          {step ? <span className="skill-step">{step}</span> : null}
          {file ? <img src={`/skills/${file}`} alt="" /> : <span className="skill-gem-fallback" />}
        </span>
        <span className="skill-gem-name">{name}</span>
      </SkillTip>
      {note ? <span className="skill-gem-note">{note}</span> : null}
    </div>
  );
}

function Flow({ slug, names }: { slug: string; names: string[] }) {
  return (
    <div className="skill-flow">
      {names.map((name, i) => (
        <div key={`${name}-${i}`} className="skill-flow-step">
          {i > 0 ? <span className="skill-arrow" aria-hidden="true" /> : null}
          <SkillGem slug={slug} name={name} />
        </div>
      ))}
    </div>
  );
}

function cellClass(cell: BoardCell, hot: boolean) {
  if (cell.k === "e") return "nezekan-cell nezekan-cell--empty";
  const kind =
    cell.k === "o"
      ? "start"
      : cell.k === "c"
        ? "special"
        : cell.k === "p"
          ? "passive"
          : cell.k === "a"
            ? "active"
            : "stat";
  return `nezekan-cell nezekan-cell--${kind}${hot ? " nezekan-cell--hot" : ""}`;
}

function cellIcon(cell: BoardCell) {
  if (cell.k === "e") return null;
  if (cell.k === "o") return "/daevanion/start.png";
  if (cell.k === "a" || cell.k === "p") return `/skills/${cell.i}`;
  return `/daevanion/${cell.i}`;
}

function NezekanBoard({ slug, highlight }: { slug: string; highlight: string[] }) {
  const cells = daevanionBoards[slug];
  const hot = new Set(highlight);
  return (
    <div className="nezekan-scroll">
      <div className="nezekan" role="img" aria-label="Nezekan Daevanion board">
        {cells.map((cell, i) => {
          const name = cell.k === "e" ? "" : cell.n;
          const marked = (cell.k === "a" || cell.k === "p") && hot.has(cell.n);
          const src = cellIcon(cell);
          if ((cell.k === "a" || cell.k === "p") && name) {
            return (
              <SkillTip key={i} slug={slug} name={name} className={cellClass(cell, marked)}>
                {src ? <img src={src} alt="" /> : null}
              </SkillTip>
            );
          }
          return (
            <span key={i} className={cellClass(cell, marked)} title={name || undefined}>
              {src ? <img src={src} alt={name} /> : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function ClassTabs() {
  const [active, setActive] = useState(classGuides[0].slug);
  const current = classGuides.find((g) => g.slug === active) ?? classGuides[0];
  const sheet = classSheets[current.slug];
  const stigmaFile = iconFile(current.slug, current.stigma.en);
  const stigmaIcon = current.stigma.icon ?? (stigmaFile ? `/skills/${stigmaFile}` : null);

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
      <div role="tablist" aria-label="Classes" className="class-tabs">
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
        className="class-panel mt-4 overflow-hidden rounded-2xl border border-[var(--line)] bg-[rgba(18,21,30,0.78)]"
      >
        <header className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center md:p-6">
          <img
            src={current.portrait}
            alt={current.portraitAlt}
            className="h-24 w-24 shrink-0 object-contain drop-shadow-[0_0_24px_rgba(212,175,106,0.28)] sm:h-28 sm:w-28"
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">{current.kr}</p>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-4xl">{current.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className={`rounded-full px-2.5 py-1 ${tone[current.roleTone]}`}>{current.role}</span>
              <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">{current.weapon}</span>
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed">{current.identity}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{current.weaponNote}</p>
          </div>
          <div className="skill-stigma">
            <SkillTip slug={current.slug} name={current.stigma.en} labelled={false}>
              {stigmaIcon ? <img src={stigmaIcon} alt="" /> : <span className="skill-gem-fallback" />}
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--gold)]">Stigma</p>
              <p className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">{current.stigma.en}</p>
              <p className="text-sm text-[var(--muted)]">{current.stigma.kr}</p>
            </SkillTip>
            <p className="mt-1 text-sm text-[var(--muted)]">{current.stigma.note}</p>
          </div>
        </header>

        <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
          <section className="bg-[rgba(18,21,30,0.95)] px-5 py-4">
            <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--gold)]">First habit</h4>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{current.habit}</p>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] px-5 py-4">
            <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--danger)]">Beginner miss</h4>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{current.mistake}</p>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] px-5 py-4">
            <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Week-one skip</h4>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{current.skip}</p>
          </section>
        </div>

        <section className="border-t border-[var(--line)] p-5 md:p-6">
          <h4 className="font-[family-name:var(--font-display)] text-2xl">Skill priority</h4>
          <div className="skill-row">
            {sheet.priority.map((skill, i) => (
              <SkillGem key={skill.name} slug={current.slug} name={skill.name} step={i + 1} note={skill.note} />
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--line)] p-5 md:p-6">
          <h4 className="font-[family-name:var(--font-display)] text-2xl">Rotation</h4>
          <Flow slug={current.slug} names={sheet.rotation} />
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{sheet.rotationNote}</p>
        </section>

        <section className="border-t border-[var(--line)] p-5 md:p-6">
          <h4 className="font-[family-name:var(--font-display)] text-2xl">Macro</h4>
          <p className="mt-1 text-sm text-[var(--muted)]">Official Skill Macro. Bind it, then hold.</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">Hold</p>
              <div className="skill-row">
                {sheet.hold.map((name) => (
                  <SkillGem key={name} slug={current.slug} name={name} />
                ))}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{sheet.holdNote}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">Press</p>
              <div className="skill-row">
                {sheet.press.map((name) => (
                  <SkillGem key={name} slug={current.slug} name={name} />
                ))}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{sheet.pressNote}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] p-5 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h4 className="font-[family-name:var(--font-display)] text-2xl">Nezekan board</h4>
            <p className="text-sm text-[var(--muted)]">Level 12. Walk out from the center.</p>
          </div>
          <div className="mt-4 grid items-start gap-6 xl:grid-cols-[auto_1fr]">
            <NezekanBoard slug={current.slug} highlight={sheet.highlight} />
            <div>
              <ul className="nezekan-key">
                <li><i className="nezekan-swatch nezekan-swatch--active" /> Active</li>
                <li><i className="nezekan-swatch nezekan-swatch--passive" /> Passive</li>
                <li><i className="nezekan-swatch nezekan-swatch--special" /> Speed or cooldown</li>
                <li><i className="nezekan-swatch nezekan-swatch--hot" /> Take these first</li>
              </ul>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{sheet.boardNote}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Later boards open at 20, 30, 40, and 45. The other seven layouts are on the{" "}
                <a href={`https://aion2.app/daevanion?job=${sheet.job}`} target="_blank" rel="noreferrer" className="text-[var(--gold-2)] hover:underline">
                  aion2.app planner
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-px border-t border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl">PvE</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.pve.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
          <section className="bg-[rgba(18,21,30,0.95)] p-5">
            <h4 className="font-[family-name:var(--font-display)] text-xl">PvP</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {current.pvp.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </section>
        </div>

      </article>
    </div>
  );
}
