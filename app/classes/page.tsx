import Link from "next/link";
import { ClassHashRedirect } from "@/components/ClassHashRedirect";
import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";
import { beginnerPicks, firstHour, rosterGlance } from "@/lib/classDeep";
import { classDeepGuides } from "@/lib/classPages";

export const metadata = { title: "Classes" };

export default function ClassesPage() {
  return (
    <>
      <ClassHashRedirect />
      <PageHeader
        kicker="Play"
        title="Classes"
        lede="Eight launch classes. Pick the job, then learn the loop."
      />
      <Callout tone="red">
        Brawler is not on the global eight. It is not an October 5 day-1 class — no Brawler page, no substitute slot.
      </Callout>
      <Callout tone="green">
        All eight launch class deep guides are Checker-clear (2026-09-20). Body names are SoT EN + (한글). Hub diffs
        stay in footnotes.
      </Callout>

      <h2 className="font-[family-name:var(--font-display)] text-3xl">First hour</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        {firstHour.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <p className="mt-6 text-[var(--muted)]">
        Role demand does not shuffle. Groups still need a Templar, a Cleric, and usually a Chanter.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Roster at a glance</h2>
      <DataTable
        headers={["Class", "Role", "Play this if", "Skip if", "Status"]}
        rows={rosterGlance.map((row) => [
          <Link key={row.slug} href={`/classes/${row.slug}`}>
            {row.name} ({row.kr})
          </Link>,
          row.role,
          row.playIf,
          row.skipIf,
          row.status,
        ])}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Beginner picks</h2>
      <DataTable
        headers={["You want", "Start here", "Why"]}
        rows={beginnerPicks.map((row) => [...row])}
      />
      <p className="mt-6 text-[var(--muted)]">
        One main identity is correct. The barracks still wants three alts at the energy gate. Those alts should fill
        missing roles, not clone the popular DPS.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">How to use these pages</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted)]">
        <li>Each class page: overview → loop → build systems → gear → sources.</li>
        <li>
          Labels stay split: <strong className="text-[var(--ok)]">Week-one (SoT Global-confirmed)</strong> vs{" "}
          <strong className="text-[var(--asmo)]">KR live (ahead of global) — dated</strong>. Do not merge eras.
        </li>
        <li>Confirmed global · KR/TW live (unverified for global) · Verify in client.</li>
        <li>Official Skill Macro only. No mouse software on week-one voice.</li>
      </ul>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Key skills to 20</h2>
      <p className="mt-3 text-[var(--muted)]">
        Every class has Actives that only come online at level 20, when the third Specialty slot opens. Global Arcana
        is expected to be thinner than current KR — lock two of those skills early (rings + cards), then Passives.
        Templar Judgment (심판) and Gladiator Overhead Slam (내려찍기) can be most of that class’s personal damage from
        one button.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Launch eight</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {classDeepGuides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/classes/${guide.slug}`}
            className="block rounded-2xl border border-[var(--line)] bg-[rgba(18,21,30,0.7)] p-5 no-underline transition hover:border-[var(--gold)]/50"
          >
            <div className="flex items-center gap-4">
              <img src={guide.portrait} alt="" className="h-14 w-14 object-contain" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">{guide.kr}</p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl">{guide.name}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {guide.role} · {guide.weapons}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">{guide.identity}</p>
          </Link>
        ))}
      </div>

      <NextLinks items={[{ href: "/alts", label: "Barracks and Energy" }, { href: "/tiers", label: "DPS Tier List" }]} />
    </>
  );
}
