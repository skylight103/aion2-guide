import Link from "next/link";
import { Callout, DataTable } from "@/components/ui";

const directory = [
  { href: "/alts", section: "Start here", title: "Barracks and Energy", blurb: "Stamina, play-count, and why three alts." },
  { href: "/plan", section: "Start here", title: "Week-One Plan", blurb: "Unlock energy, stand up the barracks, spend cubes." },
  { href: "/roster", section: "Start here", title: "Current Roster", blurb: "Mains, alts, and who is covering each role." },
  { href: "/know", section: "Start here", title: "What You Need to Know", blurb: "Dates, platforms, factions, money, and KR vs Global." },
  { href: "/classes", section: "Play", title: "Classes", blurb: "Eight launch deep guides. Brawler is not day-1." },
  { href: "/tiers", section: "Play", title: "DPS Tier List", blurb: "Role first, then the September 19 NotMeter nDPS snapshot." },
  { href: "/combat", section: "Play", title: "Combat", blurb: "How fights work: PvE, PvP, macros, farming." },
  { href: "/gear", section: "Systems", title: "Gear", blurb: "Story greens to KR BiS: slots, imprint, Potential, succession." },
  { href: "/activities", section: "Systems", title: "Activities", blurb: "Story, dungeons, Abyss, and capped rewards." },
  { href: "/map", section: "Systems", title: "Week-one map", blurb: "Pan and zoom Verteron and Altgard with our named pins." },
  { href: "/currencies", section: "Systems", title: "Currencies", blurb: "Kina, Quna, Odyle Energy, Membership." },
  { href: "/crafting", section: "Systems", title: "Crafting", blurb: "Essence Extraction, five benches, and how craft becomes the weapon." },
  { href: "/tips", section: "Reference", title: "Essential Tips", blurb: "Do and do not for launch week." },
  { href: "/faq", section: "Reference", title: "Common Questions", blurb: "Short answers first." },
  { href: "/sources", section: "Reference", title: "Sources", blurb: "Confirmed global vs KR/TW." },
];

export default function HomePage() {
  return (
    <>
      <section className="pt-14 pb-8">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">Global launch · October 5, 2026</p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] md:text-7xl">
          AION 2 Guide
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
          Unlock Odyle Energy on the main, raise three alts to the same gate, then spend cubes inside the 100% Kina
          band. Do not deeply upgrade gear you will replace tomorrow.
        </p>
      </section>
      <Callout tone="red">
        Global is a <strong>different service</strong> from KR/TW. You cannot play with Korea or Taiwan friends on this launch.
      </Callout>
      <Callout>
        Researched September 19, 2026. Confirmed global facts sit apart from Korea/Taiwan live systems. Those systems can still move before or after October 5.
      </Callout>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Open a page</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {directory.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl border border-[var(--line)] bg-[rgba(18,21,30,0.7)] p-5 no-underline transition hover:border-[var(--gold)]/50"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">{item.section}</p>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.blurb}</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-14 font-[family-name:var(--font-display)] text-3xl">Snapshot</h2>
      <DataTable
        headers={["Item", "Current status"]}
        rows={[
          [
            "Launch Scale Test",
            "Done. September 17–18, 2026. Wiped. Cap 37. Shop, Quna, and trade were off. Steam: uninstall the playtest before Early Access / Advanced Access",
          ],
          ["Founder's Early Access / Advanced Access", "September 30–October 4, 2026 — pack owners only"],
          ["Global F2P launch", "Monday October 5, 2026 — PC via Steam and PURPLE, Windows only, NA / SA / EU / Asia"],
          ["Founder's Packs", "$24.99 / $49.99 / $99.99. One pack per account"],
          ["Price", "Free to play. Optional $15/month Membership gates the market and Kina↔Quna exchange"],
          ["Launch classes", "8: Templar, Gladiator, Assassin, Ranger, Sorcerer, Spiritmaster, Cleric, Chanter"],
          ["Factions", "Elyos and Asmodian. Server choice and faction are hard to undo"],
          ["Hardcore barracks", "1 main + 3 alts to the energy gate, then cubes"],
          ["Cube Kina table", "Livestream: 0–83 plays 100%, 147+ plays 20%"],
        ]}
      />

      <h2 className="mt-10 font-[family-name:var(--font-display)] text-3xl">On hold</h2>
      <DataTable
        headers={["Hold", "Status"]}
        rows={[
          ["Unlock clock", "Unknown. Not published as of September 19, 2026"],
          ["Servers", "Unknown. Final world names are unpublished"],
          ["KR Chapter 1 / Brawler", "Not global day one. Brawler stays KR/TW only"],
          ["Dungeon size", "Unresolved. Jun 4/8 vs livestream 5/10. Read the door"],
          ["Console / mobile", "None for this launch. PC Windows only"],
          ["KR → global transfer", "None. Different service since November 19, 2025"],
        ]}
      />

      <h2 className="mt-10 font-[family-name:var(--font-display)] text-3xl">How to read the labels</h2>
      <DataTable
        headers={["Label", "Meaning"]}
        rows={[
          ["Confirmed global", "NC, Steam, or official global notice"],
          ["KR/TW live", "Useful for systems. Not guaranteed day-one numbers"],
          ["Reported / unofficial", "Community or third-party. Treat as a warning"],
          ["Verify in client", "Party sizes, timers, item-level gates, Stigma slots"],
        ]}
      />
    </>
  );
}
