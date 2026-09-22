export const combatChapters = [
  {
    id: "skills",
    num: "01",
    title: "Skills",
    nav: "Skills",
    blurb: "Actives, Passives, Stigma, and when the Specialty slots open",
    jumps: [
      { href: "#types", label: "Types" },
      { href: "#specialty", label: "Specialty" },
    ],
  },
  {
    id: "status",
    num: "02",
    title: "Chains and control",
    nav: "Chains",
    blurb: "Why a button is dark, what Stagger is, and which control a cleanse actually removes",
    jumps: [
      { href: "#chains", label: "Chains" },
      { href: "#stagger", label: "Stagger" },
      { href: "#control", label: "Control" },
    ],
  },
  {
    id: "places",
    num: "03",
    title: "Where you fight",
    nav: "Fights",
    blurb: "Party roles, PvE doors, and the PvP modes",
    jumps: [
      { href: "#roles", label: "Roles" },
      { href: "#pve", label: "PvE" },
      { href: "#pvp", label: "PvP" },
    ],
  },
  {
    id: "arcana",
    num: "04",
    title: "Arcana",
    nav: "Arcana",
    blurb: "Five launch cards and the two sets",
    jumps: [
      { href: "#cards", label: "Cards" },
      { href: "#sets", label: "Sets" },
    ],
  },
  {
    id: "boards",
    num: "05",
    title: "Boards",
    nav: "Boards",
    blurb: "Daevanion paths and Pet Genus",
    jumps: [
      { href: "#daevanion", label: "Daevanion" },
      { href: "#pets", label: "Pets" },
    ],
  },
  {
    id: "damage",
    num: "06",
    title: "Damage",
    nav: "Damage",
    blurb: "Which stat to take, and the order of a hit",
    jumps: [
      { href: "#priority", label: "Priority" },
      { href: "#formula", label: "Formula" },
    ],
  },
] as const;

export type CombatChapterId = (typeof combatChapters)[number]["id"];
