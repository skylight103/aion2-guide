import Link from "next/link";
import { ClassTabs } from "@/components/ClassTabs";
import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";
import { beginnerPicks, rosterGlance } from "@/lib/classDeep";
import { classDeepGuides } from "@/lib/classPages";

export const metadata = { title: "Classes" };

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        kicker="Play"
        title="Classes"
        lede="Eight classes at launch. Tank, healer, support, and five damage jobs. Pick the job, then learn the loop."
      />
      <Callout tone="green">The launch roster is eight classes. Brawler is not one of them — do not start there.</Callout>
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

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Key skills to 20</h2>
      <p className="mt-3 text-[var(--muted)]">
        Every class has Actives that only come online at level 20, when the third Specialty slot opens. Global Arcana
        is expected to be thinner than current KR — lock two of those skills early (rings + cards), then Passives.
        Templar Judgment (심판) and Gladiator Overhead Slam (내려찍기) can be most of that class’s personal damage from
        one button.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Class sheets</h2>
      <p className="mt-3 text-[var(--muted)]">
        Pick a class. The sheet is the skill order, the hold macro, and the level-12 Nezekan board. The written guide
        for each class is linked from the roster.
      </p>
      <ClassTabs />

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
