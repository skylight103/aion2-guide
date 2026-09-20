import { Callout, DataTable } from "@/components/ui";
import { RichText } from "@/components/RichText";
import type { Block } from "@/lib/classDeep";

function RegionKicker({ region }: { region: "week-one" | "kr" }) {
  if (region === "week-one") {
    return (
      <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-[var(--ok)]">
        Week-one (SoT Global-confirmed)
      </p>
    );
  }
  return (
    <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-[var(--asmo)]">
      KR live (ahead of global) — dated
    </p>
  );
}

export function ClassBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} className="leading-relaxed text-[var(--ink)]/90">
              <RichText text={block.text} />
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5 text-[var(--muted)]">
              {block.items.map((item, j) => (
                <li key={j}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-5 text-[var(--muted)]">
              {block.items.map((item, j) => (
                <li key={j}>
                  <RichText text={item} />
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "h3") {
          return (
            <div key={i} className="pt-2">
              {block.region ? <RegionKicker region={block.region} /> : null}
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--gold-2)]">
                {block.text}
              </h3>
            </div>
          );
        }
        if (block.type === "h4") {
          return (
            <h4 key={i} className="font-[family-name:var(--font-display)] text-xl text-[var(--gold-2)]">
              {block.text}
            </h4>
          );
        }
        if (block.type === "table") {
          return (
            <DataTable
              key={i}
              headers={block.headers}
              rows={block.rows.map((row) => row.map((cell, j) => <RichText key={j} text={cell} />))}
            />
          );
        }
        if (block.type === "callout") {
          return (
            <Callout key={i} tone={block.tone ?? "gold"}>
              <RichText text={block.text} />
            </Callout>
          );
        }
        return (
          <blockquote
            key={i}
            className="rounded-2xl border border-[var(--line)] bg-[rgba(18,21,30,0.72)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
          >
            <RichText text={block.text} />
          </blockquote>
        );
      })}
    </div>
  );
}
