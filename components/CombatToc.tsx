"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { combatChapters, type CombatChapterId } from "@/lib/combatChapters";

function cssPx(name: string) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  if (raw.endsWith("rem")) return parseFloat(raw) * rem;
  if (raw.endsWith("px")) return parseFloat(raw);
  return parseFloat(raw) || 0;
}

function stuckChrome() {
  const header = document.querySelector("body > header");
  const bar = document.querySelector(".gear-toc-bar");
  const headerH =
    header instanceof HTMLElement ? header.getBoundingClientRect().height : cssPx("--header-h");
  const barH = bar instanceof HTMLElement ? bar.getBoundingClientRect().height : cssPx("--gear-toc-h");
  return headerH + barH;
}

function activeLine() {
  const bar = document.querySelector(".gear-toc-bar");
  if (bar instanceof HTMLElement && bar.classList.contains("is-stuck")) {
    return bar.getBoundingClientRect().bottom + 48;
  }
  return stuckChrome() + 48;
}

export function CombatToc() {
  const [active, setActive] = useState<CombatChapterId>(combatChapters[0].id);
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const jumping = useRef<CombatChapterId | null>(null);
  const jumpGen = useRef(0);

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-combat-chapter]")];
    if (!nodes.length) return;

    const sync = () => {
      if (jumping.current) {
        setActive(jumping.current);
        return;
      }
      const line = activeLine();
      let current: CombatChapterId = combatChapters[0].id;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) {
          current = node.id as CombatChapterId;
        }
      }
      setActive(current);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const chrome = document.querySelector("body > header");
    const header =
      chrome instanceof HTMLElement ? chrome.getBoundingClientRect().height : cssPx("--header-h");
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      threshold: 0,
      rootMargin: `-${header}px 0px 0px 0px`,
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const jump = (id: CombatChapterId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const gen = ++jumpGen.current;
    jumping.current = id;
    setActive(id);
    history.replaceState(null, "", `#${id}`);

    const target = Math.max(0, window.scrollY + el.getBoundingClientRect().top - stuckChrome() - 16);
    const distance = Math.abs(window.scrollY - target);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: target, behavior: reduced ? "instant" : "smooth" });

    const deadline = performance.now() + Math.min(2400, Math.max(700, distance * 0.85 + 400));
    const settle = () => {
      if (jumpGen.current !== gen) return;
      if (Math.abs(window.scrollY - target) < 4 || performance.now() >= deadline) {
        jumping.current = null;
        setActive(id);
        return;
      }
      requestAnimationFrame(settle);
    };
    requestAnimationFrame(settle);
  };

  return (
    <>
      <div ref={sentinelRef} className="gear-toc-sentinel" aria-hidden="true" />
      <nav className={`gear-toc-bar${stuck ? " is-stuck" : ""}`} aria-label="Combat chapters">
        {combatChapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={`gear-toc-pill${active === chapter.id ? " is-active" : ""}`}
            onClick={jump(chapter.id)}
          >
            <span>{chapter.num}</span>
            {chapter.nav}
          </a>
        ))}
      </nav>
    </>
  );
}
