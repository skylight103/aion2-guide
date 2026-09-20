import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "What You Need to Know" };

export default function KnowPage() {
  return (
    <>
      <PageHeader
        kicker="Start here"
        title="What you need to know"
        lede="Read this before you copy any Korea guide, buy a pack, or lock a faction."
      />
      <h2 className="font-[family-name:var(--font-display)] text-3xl">The three dates that matter</h2>
      <DataTable
        headers={["When", "What", "What transfers"]}
        rows={[
          [
            "Sep 17–18, 2026",
            "Launch Scale Test — done",
            "Nothing. Wiped. Cap 37. Shop, Quna, and trade were off. Steam: uninstall the playtest before Early Access / Advanced Access",
          ],
          [
            "Sep 30–Oct 4, 2026",
            "Early Access / Advanced Access — Founder's Pack owners",
            "Live characters. Markets, Exchanges, and PvP matching stay separate for a period",
          ],
          [
            "Mon Oct 5, 2026",
            "Global free-to-play launch — PC, Steam + PURPLE, Windows, NA / SA / EU / Asia",
            "This is the real start for players who skip the pack",
          ],
        ]}
      />
      <p className="text-[var(--muted)]">
        NC has not published the exact server-open clock time. Do not trust a random Discord screenshot for login hour.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Platforms and regions</h2>
      <DataTable
        headers={["Topic", "Status"]}
        rows={[
          ["Confirmed clients", "Windows PC through Steam and NC PURPLE. Windows only"],
          ["Named regions", "North America, South America, Europe, Asia"],
          ["Named hub regions", "US West, US East, Central Europe, South America, Japan"],
          ["Not confirmed", "Mobile, console, exact data-center cities, formal region-lock policy, server names"],
          ["KR/TW client", "Different service since November 19, 2025. Do not mix clients"],
          ["Languages announced", "English, German, French, Spanish, Portuguese, Japanese, Korean, plus others in NC's 10-language set"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Factions</h2>
      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--gold)]/30 bg-[rgba(212,175,106,0.07)] p-5">
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--elyos)]">Elyos</h3>
          <p className="mt-2 text-[var(--muted)]">Bright, marble, light-themed start in Elysea.</p>
        </div>
        <div className="rounded-2xl border border-[var(--asmo)]/40 bg-[rgba(155,140,255,0.08)] p-5">
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--asmo)]">Asmodian</h3>
          <p className="mt-2 text-[var(--muted)]">Harsh, dark, survival-themed start in Asmodae.</p>
        </div>
      </div>
      <ul className="list-disc space-y-2 pl-5 text-[var(--muted)]">
        <li>Pick server + faction before login and create characters together.</li>
        <li>KR/TW reports faction create locks around ~55% — coordination warning only, not a global rule.</li>
        <li>Cross-server matching is NC intent, not a tested global fact.</li>
      </ul>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Money model</h2>
      <DataTable
        headers={["Piece", "What it is"]}
        rows={[
          ["Price", "Free to download and play"],
          ["Kina", "Gameplay currency (community often still says Kinah)"],
          ["Quna", "Premium currency for cash shop and battle passes"],
          ["Membership", "$15/month unlocks market/AH, Kina↔Quna exchange, member shop, extra Odyle Energy capacity"],
          ["Battle passes", "Per character. NC wording includes upgrade materials — not proven cosmetics-only"],
        ]}
      />
      <DataTable
        headers={["Pack", "Price", "Included"]}
        rows={[
          ["Standard", "$24.99", "5-day Early Access / Advanced Access, cosmetics/title/consumables, 30 days of Membership"],
          ["Deluxe", "$49.99", "Same core as Standard, plus Deluxe extras on the store page"],
          ["Ultimate", "$99.99", "Same core as Standard, plus Ultimate extras on the store page"],
        ]}
      />
      <Callout>
        One Founder&apos;s Pack per account. Pick Standard, Deluxe, or Ultimate once. You can level and clear
        content without paying. Full player-economy access sits behind Membership.
      </Callout>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">KR vs Global</h2>
      <p className="text-[var(--muted)]">
        Global is a different service, not a Season 3 copy. Use KR for loops. Use this table for what NC has already
        changed for the West.
      </p>
      <DataTable
        headers={["Change", "KR / TW", "Global so far"]}
        rows={[
          [
            "Membership",
            "Three paid products at launch. Later folded into one Special Quai Membership (콰이링) at ₩25,000 / 30 days",
            "One $15/month from day one. Market and Kina↔Quna sit behind it. The rest of the game is F2P",
          ],
          [
            "Founder's Packs",
            "No global-style Early Access / Advanced Access. Similar cosmetics later sold in the KR shop",
            "Sep 30–Oct 4 head start. All three tiers include 30 days of Membership, retroactive. Pack cosmetics stay off the cash shop",
          ],
          [
            "Dungeon / raid size",
            "Launched 4-man Expedition, 8-man Sanctuary. Chapter 1 later moved to 5 / 10",
            "Livestream: 5-man dungeons, first raid 10. Steam copy matches. Read the door",
          ],
          [
            "10v10 battlegrounds",
            "Later KR PvP modes exist on a live calendar",
            "Stats normalized. A PvP flag toggle exists outside the Abyss from the start",
          ],
          [
            "Character slots",
            "Not published as a KR launch number",
            "Four at launch",
          ],
          [
            "Pet level cap",
            "Max 5",
            "Cut to 3. Framed as a grind cut",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">On hold</h2>
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

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Still unpublished</h2>
      <DataTable
        headers={["Still unpublished", "What to do instead"]}
        rows={[
          ["Exact login hours", "Ignore Discord clocks until NC posts one"],
          ["Final world/server names", "Pick the closest named hub with your friends"],
          ["Day-one Stigma table", "Build one PvE setup when the menu appears"],
          ["First Expedition item-level gates", "Read the instance door"],
          ["Exact Membership Odyle numbers", "KR: F2P 10 / 3 hours, cap 560. Member 15 / 3 hours, cap 840. Confirm the bar"],
          ["Exact energy unlock level", "KR: ~22–23 after Breeze Boutique. Follow the bar"],
          ["Weekly Expedition charge count", "KR May 2026 said 21. Read the in-game remaining-rewards panel"],
        ]}
      />
      <NextLinks items={[{ href: "/alts", label: "Barracks and Energy" }, { href: "/plan", label: "Week-One Plan" }]} />
    </>
  );
}
