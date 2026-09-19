"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { metaNav, nav, primaryNav } from "@/lib/nav";

function linkClass(pathname: string, href: string) {
  return `no-underline ${
    pathname === href ? "text-[var(--gold-2)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const sync = () => {
      document.documentElement.style.setProperty("--header-h", `${header.getBoundingClientRect().height}px`);
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(header);
    return () => observer.disconnect();
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(7,8,12,0.82)] backdrop-blur-xl"
    >
      <div className="page-wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)] text-[var(--gold-2)]">
            ✦
          </span>
          <span>
            <strong className="block font-[family-name:var(--font-display)] text-lg leading-none tracking-wide">
              AION 2
            </strong>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Guide
            </span>
          </span>
        </Link>
        <button
          className="rounded-md border border-[var(--line)] px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
        <nav className="hidden min-w-0 flex-col items-end gap-1.5 text-[12px] md:flex" aria-label="Site">
          <div className="flex flex-nowrap justify-end gap-x-3">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(pathname, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-end gap-x-3">
            {metaNav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(pathname, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      {open ? (
        <nav className="page-wrap grid grid-cols-2 gap-2 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg border border-[var(--line)] px-3 py-2 text-sm no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
