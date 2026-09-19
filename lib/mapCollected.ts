"use client";

import { useEffect, useState } from "react";

const KEY = "aion2guide.map-found.v1";

function readFound() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [] as string[];
    const ids = JSON.parse(raw) as unknown;
    return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function useMapFound() {
  const [found, setFound] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    setFound(new Set(readFound()));
  }, []);

  const toggle = (id: string) => {
    setFound((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(KEY, JSON.stringify([...next]));
      return next;
    });
  };

  return { found, toggle };
}
