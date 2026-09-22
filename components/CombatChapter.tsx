import type { ReactNode } from "react";
import { combatChapters, type CombatChapterId } from "@/lib/combatChapters";

export function CombatChapter({ id, children }: { id: CombatChapterId; children: ReactNode }) {
  const chapter = combatChapters.find((item) => item.id === id);
  if (!chapter) return null;

  return (
    <section id={chapter.id} className="gear-chapter" data-combat-chapter={chapter.id}>
      <header className="gear-chapter-head">
        <span className="gear-chapter-num" aria-hidden="true">
          {chapter.num}
        </span>
        <div>
          <h2 className="gear-chapter-title">{chapter.title}</h2>
          <p className="gear-chapter-blurb">{chapter.blurb}</p>
          {chapter.jumps.length ? (
            <nav className="gear-jumps" aria-label={`${chapter.title} sections`}>
              {chapter.jumps.map((jump) => (
                <a key={jump.href} href={jump.href}>
                  {jump.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </header>
      <div className="gear-chapter-body">{children}</div>
    </section>
  );
}
