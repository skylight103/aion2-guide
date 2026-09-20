import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClassDeepPage } from "@/components/ClassDeepPage";
import { CLASS_SLUGS } from "@/lib/classDeep";
import { getClassDeepGuide } from "@/lib/classPages";

export function generateStaticParams() {
  return CLASS_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getClassDeepGuide(slug);
  if (!guide) return { title: "Class" };
  return { title: `${guide.name} (${guide.kr})` };
}

export default async function ClassSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getClassDeepGuide(slug);
  if (!guide) notFound();
  return <ClassDeepPage guide={guide} />;
}
