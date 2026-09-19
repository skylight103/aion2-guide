import type { ReactNode } from "react";
import { gearChapters, type GearChapterId } from "@/lib/gearChapters";

export function GearChapter({ id, children }: { id: GearChapterId; children: ReactNode }) {
  const chapter = gearChapters.find((item) => item.id === id);
  if (!chapter) return null;

  return (
    <section id={chapter.id} className="gear-chapter" data-gear-chapter={chapter.id}>
      <header className="gear-chapter-head">
        <span className="gear-chapter-num" aria-hidden="true">
          {chapter.num}
        </span>
        <div>
          <h2 className="gear-chapter-title">{chapter.title}</h2>
          <p className="gear-chapter-blurb">{chapter.blurb}</p>
          {"jumps" in chapter && chapter.jumps.length ? (
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
