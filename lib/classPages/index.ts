import type { ClassDeepGuide, ClassSlug } from "@/lib/classDeep";
import { CLASS_SLUGS } from "@/lib/classDeep";
import { assassin } from "./assassin";
import { chanter } from "./chanter";
import { cleric } from "./cleric";
import { gladiator } from "./gladiator";
import { ranger } from "./ranger";
import { sorcerer } from "./sorcerer";
import { spiritmaster } from "./spiritmaster";
import { templar } from "./templar";

const guides: Record<ClassSlug, ClassDeepGuide> = {
  templar,
  gladiator,
  assassin,
  ranger,
  sorcerer,
  spiritmaster,
  cleric,
  chanter,
};

export const classDeepGuides: ClassDeepGuide[] = CLASS_SLUGS.map((slug) => guides[slug]);

export function getClassDeepGuide(slug: string): ClassDeepGuide | undefined {
  return CLASS_SLUGS.includes(slug as ClassSlug) ? guides[slug as ClassSlug] : undefined;
}

export function adjacentClassGuides(slug: ClassSlug): { prev: ClassDeepGuide; next: ClassDeepGuide } {
  const i = CLASS_SLUGS.indexOf(slug);
  const prev = classDeepGuides[(i - 1 + classDeepGuides.length) % classDeepGuides.length];
  const next = classDeepGuides[(i + 1) % classDeepGuides.length];
  return { prev, next };
}
