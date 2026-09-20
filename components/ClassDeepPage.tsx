import type { ReactNode } from "react";
import Link from "next/link";
import { ClassBlocks } from "@/components/ClassBlocks";
import { RichText } from "@/components/RichText";
import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";
import { roleToneClass, type ClassDeepGuide } from "@/lib/classDeep";
import { adjacentClassGuides, classDeepGuides } from "@/lib/classPages";

function SourceLink({ title, url }: { title: string; url: string | null }) {
  if (!url) return <span>{title}</span>;
  return (
    <a href={url} target="_blank" rel="noreferrer" className="text-[var(--gold-2)] hover:underline">
      {title}
    </a>
  );
}

export function ClassDeepPage({ guide }: { guide: ClassDeepGuide }) {
  const { prev, next } = adjacentClassGuides(guide.slug);
  const section = (id: string, title: string, body: ReactNode) => (
    <section id={id} className="mt-12">
      <h2 className="font-[family-name:var(--font-display)] text-3xl">{title}</h2>
      <div className="mt-4">{body}</div>
    </section>
  );

  return (
    <>
      <PageHeader
        kicker={`${guide.kr} · launch class`}
        title={`${guide.name} (${guide.kr})`}
        lede={guide.identity}
      />

      <Callout>
        Region labels: <strong>Week-one (SoT Global-confirmed)</strong> = week-one framing.{" "}
        <strong>KR live (ahead of global) — dated</strong> = dated appendix — do not treat as a day-1
        checklist. Body uses SoT EN + (한글). Hub naming differences stay in footnotes.
      </Callout>
      {guide.displayNote ? (
        <Callout tone="blue">
          <RichText text={guide.displayNote} />
        </Callout>
      ) : null}

      <article className="class-panel overflow-hidden rounded-2xl border border-[var(--line)] bg-[rgba(18,21,30,0.78)]">
        <div className="grid gap-0 md:grid-cols-[240px_1fr]">
          <figure className="grid min-h-[240px] place-items-center border-b border-[var(--line)] bg-[rgba(7,8,12,0.55)] px-6 py-8 md:border-b-0 md:border-r">
            <img
              src={guide.largePortrait}
              alt={guide.portraitAlt}
              width={512}
              height={512}
              className="h-52 w-52 object-contain drop-shadow-[0_0_24px_rgba(212,175,106,0.28)] md:h-56 md:w-56"
            />
          </figure>
          <div className="p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">{guide.kr}</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-3xl md:text-4xl">{guide.name}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className={`rounded-full px-2.5 py-1 ${roleToneClass[guide.roleTone]}`}>{guide.role}</span>
              <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">
                {guide.weapons}
              </span>
            </div>
            <nav className="mt-5 flex flex-wrap gap-2 text-xs" aria-label="Launch classes">
              {classDeepGuides.map((item) => {
                const on = item.slug === guide.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/classes/${item.slug}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 no-underline transition ${
                      on
                        ? "border-[var(--gold)] bg-[rgba(212,175,106,0.15)] text-[var(--gold-2)]"
                        : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--gold)]/50 hover:text-[var(--ink)]"
                    }`}
                  >
                    <img src={item.portrait} alt="" className="h-5 w-5 object-contain" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </article>

      {section(
        "overview",
        "1. Overview",
        <>
          <DataTable
            headers={["Field", "Content"]}
            rows={guide.overviewFields.map(([field, content]) => [field, <RichText key={field} text={content} />])}
          />
          <ClassBlocks blocks={guide.overviewBody} />
        </>,
      )}
      {section("stats", "2. Stats", <ClassBlocks blocks={guide.stats} />)}
      {section("sp", "3. SP order", <ClassBlocks blocks={guide.sp} />)}
      {section("rotation", "4. Rotation / loop", <ClassBlocks blocks={guide.rotation} />)}
      {section("stigmas", "5. Stigmas", <ClassBlocks blocks={guide.stigmas} />)}
      {section("daevanion", "6. Daevanion", <ClassBlocks blocks={guide.daevanion} />)}
      {section("pantheon", "7. Pantheon", <ClassBlocks blocks={guide.pantheon} />)}
      {section("gear", "8. Gear", <ClassBlocks blocks={guide.gear} />)}
      {section("macros", "9. Macros", <ClassBlocks blocks={guide.macros} />)}
      {section(
        "sources",
        "10. Sources",
        <>
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--gold-2)]">Written</h3>
          <DataTable
            headers={["Title", "Region", "Confidence", "Date"]}
            rows={guide.writtenSources.map((row) => [
              <SourceLink key={row.title} title={row.title} url={row.url} />,
              row.region,
              row.confidence ?? "—",
              row.date ?? "—",
            ])}
          />
          <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl text-[var(--gold-2)]">Video</h3>
          <DataTable
            headers={["Title", "Region", "Notes"]}
            rows={guide.videoSources.map((row) => [
              <SourceLink key={row.title} title={row.title} url={row.url} />,
              row.region,
              row.notes ?? row.confidence ?? "—",
            ])}
          />
          {guide.sourceNotes?.map((note) => (
            <p key={note} className="mt-4 text-sm text-[var(--muted)]">
              <RichText text={note} />
            </p>
          ))}
        </>,
      )}
      {section(
        "footnotes",
        "Naming footnotes",
        <>
          {guide.footnoteLead ? (
            <p className="mb-4 leading-relaxed text-[var(--muted)]">
              <RichText text={guide.footnoteLead} />
            </p>
          ) : (
            <p className="mb-4 leading-relaxed text-[var(--muted)]">
              Hub Global-client EN and Vortex fan-EN stay here. Body stays SoT EN + (한글).
            </p>
          )}
          <DataTable
            headers={
              guide.footnotes.some((row) => row.vortex !== undefined)
                ? ["SoT / week-one body", "Hub Global-client EN", "Vortex fan-EN"]
                : ["SoT / week-one body", "Hub Global-client EN (footnote)"]
            }
            rows={guide.footnotes.map((row) => {
              const hub = row.notes ? `${row.hub} — ${row.notes}` : row.hub;
              return guide.footnotes.some((item) => item.vortex !== undefined)
                ? [row.sot, hub, row.vortex ?? "—"]
                : [row.sot, hub];
            })}
          />
          {guide.footnoteNote ? (
            <p className="mt-4 text-sm text-[var(--muted)]">
              <RichText text={guide.footnoteNote} />
            </p>
          ) : null}
        </>,
      )}
      {section(
        "gaps",
        "Gaps",
        <ul className="list-disc space-y-2 pl-5 text-[var(--muted)]">
          {guide.gaps.map((gap) => (
            <li key={gap}>
              <RichText text={gap} />
            </li>
          ))}
        </ul>,
      )}

      <NextLinks
        items={[
          { href: "/classes", label: "All classes" },
          { href: `/classes/${prev.slug}`, label: prev.name },
          { href: `/classes/${next.slug}`, label: next.name },
          { href: "/combat", label: "Combat" },
          { href: "/gear", label: "Gear" },
        ]}
      />
    </>
  );
}
