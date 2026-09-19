export const gearChapters = [
  {
    id: "read",
    num: "01",
    title: "Read a piece",
    nav: "Read",
    blurb: "Terms, layers, slots, Amp, Pantheon",
    jumps: [
      { href: "#layers", label: "Layers" },
      { href: "#amp", label: "Amp" },
      { href: "#slot-jobs", label: "Slots" },
      { href: "#pantheon", label: "Pantheon" },
    ],
  },
  {
    id: "grow",
    num: "02",
    title: "Grow it",
    nav: "Grow",
    blurb: "Enhance, bind, stones, Potential, transfer",
    jumps: [
      { href: "#bind", label: "Bind" },
      { href: "#stones", label: "Stones" },
      { href: "#potential", label: "Potential" },
      { href: "#transfer", label: "Transfer" },
    ],
  },
  {
    id: "spend",
    num: "03",
    title: "What to spend",
    nav: "Spend",
    blurb: "Opening week, what transfers, what not to do",
    jumps: [
      { href: "#opening-week", label: "Opening week" },
      { href: "#carries", label: "What carries" },
      { href: "#do-not", label: "Do not" },
    ],
  },
  {
    id: "extras",
    num: "04",
    title: "Wings and extras",
    nav: "Wings",
    blurb: "Belt, amulet, runes, named wings, Closet",
    jumps: [
      { href: "#belt", label: "Belt" },
      { href: "#wings", label: "Wings" },
      { href: "#wing-meta", label: "KR wear" },
      { href: "#closet", label: "Closet" },
    ],
  },
  {
    id: "lines",
    num: "05",
    title: "Soul lines and caps",
    nav: "Lines",
    blurb: "What to fish, Accuracy and Crit doors",
    jumps: [
      { href: "#soul-lines", label: "Fishing" },
      { href: "#acc-crit", label: "Acc / Crit" },
    ],
  },
  {
    id: "korea",
    num: "06",
    title: "What's live in Korea",
    nav: "Korea",
    blurb: "Set names, farm ladder, BiS, Abyss shop",
    jumps: [
      { href: "#kr-names", label: "Names" },
      { href: "#kr-ladder", label: "Ladder" },
      { href: "#kr-bis", label: "BiS" },
      { href: "#abyss", label: "Abyss" },
    ],
  },
] as const;

export type GearChapterId = (typeof gearChapters)[number]["id"];
