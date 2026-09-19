import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] py-10 text-sm text-[var(--muted)]">
      <div className="page-wrap flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">AION 2 Guide</p>
          <p>Written by Artix.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/sources">Sources</Link>
          <a href="https://store.steampowered.com/app/3393110/AION_2/" target="_blank" rel="noreferrer">
            Steam
          </a>
        </div>
      </div>
    </footer>
  );
}
