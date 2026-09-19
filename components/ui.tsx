import type { ReactNode } from "react";
import Link from "next/link";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="mb-10 pt-12">
      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">{kicker}</p>
      <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">{lede}</p>
      <div className="gold-rule mt-8" />
    </div>
  );
}

export function Callout({
  tone = "gold",
  children,
}: {
  tone?: "gold" | "red" | "blue" | "green";
  children: ReactNode;
}) {
  const map = {
    gold: "border-[var(--gold)]/40 bg-[rgba(212,175,106,0.08)]",
    red: "border-[var(--danger)]/40 bg-[rgba(226,109,109,0.08)]",
    blue: "border-[var(--asmo)]/40 bg-[rgba(155,140,255,0.08)]",
    green: "border-[var(--ok)]/40 bg-[rgba(125,206,160,0.08)]",
  };
  return <aside className={`mb-6 rounded-2xl border px-4 py-3 ${map[tone]}`}>{children}</aside>;
}

export function DataTable({
  headers,
  rows,
  className,
}: {
  headers: string[];
  rows: ReactNode[][];
  className?: string;
}) {
  return (
    <div className={`table-wrap my-6${className ? ` ${className}` : ""}`}>
      <table className="data">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RuleList({ items }: { items: [string, string][] }) {
  return (
    <ol className="gear-rules">
      {items.map(([rule, why]) => (
        <li key={rule}>
          <strong>{rule}</strong>
          <span>{why}</span>
        </li>
      ))}
    </ol>
  );
}

export function NextLinks({ items }: { items: { href: string; label: string }[] }) {
  return (
    <p className="mt-12 text-sm text-[var(--muted)]">
      Next:{" "}
      {items.map((item, i) => (
        <span key={item.href}>
          {i > 0 ? " · " : null}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
    </p>
  );
}
