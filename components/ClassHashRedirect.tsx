"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CLASS_SLUGS } from "@/lib/classDeep";

/** Old /classes#templar tabs become real /classes/templar routes. */
export function ClassHashRedirect() {
  const router = useRouter();
  useEffect(() => {
    const id = window.location.hash.replace("#", "").toLowerCase();
    if (CLASS_SLUGS.includes(id as (typeof CLASS_SLUGS)[number])) {
      router.replace(`/classes/${id}`);
    }
  }, [router]);
  return null;
}
