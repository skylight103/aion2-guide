export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/know", label: "Need to know" },
  { href: "/plan", label: "Week one" },
  { href: "/alts", label: "Barracks" },
  { href: "/classes", label: "Classes" },
  { href: "/tiers", label: "Tiers" },
  { href: "/combat", label: "Combat" },
  { href: "/gear", label: "Gear" },
  { href: "/activities", label: "Activities" },
  { href: "/map", label: "Map" },
  { href: "/currencies", label: "Currencies" },
  { href: "/crafting", label: "Crafting" },
] as const;

export const metaNav = [
  { href: "/tips", label: "Tips" },
  { href: "/faq", label: "FAQ" },
  { href: "/sources", label: "Sources" },
] as const;

export const nav = [...primaryNav, ...metaNav];
