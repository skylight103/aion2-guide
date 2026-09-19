import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Currencies" };

export default function CurrenciesPage() {
  return (
    <>
      <PageHeader
        kicker="Systems"
        title="Currencies"
        lede="Official English uses Kina. Older players still say Kinah. Cube Kina is not the same as 'I ran the dungeon.'"
      />
      <DataTable
        headers={["Currency", "How you get it / what it buys", "Week-one rule"]}
        rows={[
          ["Kina", "Gameplay, Odyle Energy Cubes, later player trade. Buys market, crafts, upgrades, NPC costs.", "Spend only to remove a real gate. Keep a reserve"],
          ["Kina (Bound)", "Progression spend that does not freely trade. KR puts some quest/instance gold here.", "Use it. Do not plan to AH it"],
          ["Quna", "Cash shop. Buys shop, battle pass, and (with Membership) player Kina exchange.", "Do not spend it to fix a problem you have not named"],
          ["Odyle Energy", "Timed regen + crafts/shop. Spent to open valuable PvE cubes.", "Per-character bar. Four bars beat one. Do not sit capped"],
        ]}
      />
      <p className="text-[var(--muted)]">
        Membership ($15/month, or the 30 days bundled in current Founder packs) unlocks the auction house, the
        Kina↔Quna exchange, and extra Odyle Energy capacity / cube selections. Confirmed global.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Cumulative Play Reward Adjustment</h2>
      <p>
        Official livestream UI. Play counts for each game mode accumulate weekly on a per-server basis. Once the count
        exceeds a threshold, <strong>Kina from Odyle Energy Cubes</strong> is reduced. The further you go, the worse
        the cut. This is not a tax on quest gold or gathering.
      </p>
      <DataTable
        headers={["Total play count", "Kina received"]}
        rows={[
          ["0–83", "100%"],
          ["84–104", "80%"],
          ["105–125", "60%"],
          ["126–146", "40%"],
          ["147 and above", "20%"],
        ]}
      />
      <Callout>
        KR May 13, 2026 notes used a near-identical Expedition / Conquest ladder and a separate, tighter Transcendence
        ladder (100% out to 56, 20% at 99+). Those Transcendence numbers are a later KR snapshot, not a global
        week-one promise. Use the livestream table above until the in-game tooltip says otherwise.
      </Callout>
      <DataTable
        headers={["Rule", "Meaning"]}
        rows={[
          ["Per game mode", "Expedition plays do not necessarily share a counter with Daily or Transcendence"],
          ["Weekly", "The count resets. Burning 20% cubes at the end of the week is a choice, not a forever tax"],
          ["Per-server", "KR shop language uses server = your account on that realm, character = one alt. Confirm the counter moves only when you clear"],
          ["Cubes only", "You still get the clear. You get less cube Kina. Mats and gear rolls are a different sentence"],
          [
            "Why 3 alts",
            "If weekly Expedition charges ship near 21, four characters reach 84 plays — the livestream 100%/80% line (KR May still 100% at 84). See Barracks",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Odyle Energy as a wallet</h2>
      <DataTable
        headers={["Fact", "Label"]}
        rows={[
          ["Membership raises max energy and cube selection on Expedition, Transcendence, and Sanctuary", "Confirmed global"],
          ["No energy = you can clear and still miss the cube", "KR/TW live + global Membership language"],
          ["High cubes often cost ~40 energy; some Exploration ~30", "KR/TW live"],
          ["Timed refill is slow. Sitting at cap wastes regen", "KR/TW live"],
          ["Crafted / shop energy stones exist, with weekly limits", "KR/TW live. Limits have moved in patches"],
        ]}
      />
      <p className="mt-3 text-sm text-[var(--muted)]">
        The 560 vs 840 quotes are not a math fight. On KR they are F2P vs Membership. Global NC confirms members get
        more capacity and extra cube selections on Expedition, Transcendence, and Sanctuary. The exact global ticks
        are unpublished.
      </p>
      <DataTable
        headers={["Bar", "F2P (KR live)", "Membership (KR live)"]}
        rows={[
          ["Regen", "10 every 3 hours", "15 every 3 hours (+50%)"],
          ["Daily passive", "80", "120"],
          ["Weekly passive if you never sit full", "560", "840"],
          ["Auto-regen cap", "560", "840"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Other wallets</h2>
      <DataTable
        headers={["Name", "Job", "Notes"]}
        rows={[
          ["Abyss Points", "Faction / PvP gear track", "Separate from your PvE item-level plan. Alts can feed shards later"],
          ["Daevanion crystals", "Permanent board", "Not vendor trash"],
          ["Stigma mats", "Build power", "Feed the main setup you actually press"],
          ["Odyle / Odal", "Craft and morph feedstock", "Different from Odyle Energy"],
        ]}
      />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Good vs bad Kina</h2>
      <DataTable
        headers={["Good sinks", "Bad sinks"]}
        rows={[
          ["The enhance click that opens the next door on the main", "Cosmetics"],
          ["Food and catalysts for hard content", "Speculative AH flips on day 2"],
          ["A cheap bag / storage fix if F2P hits a wall", "Full-price replacements that drop tonight"],
          ["Remote Storage if Membership lists it — confirm F2P", 'Resetting Stigma five times "to try things"'],
          ["Moving alt loot via mail, warehouse, or Membership AH — confirm F2P tools", "Deep-enhancing four leveling sets"],
        ]}
      />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">F2P vs member</h2>
      <DataTable
        headers={["Access", "F2P", "Member / Founder 30-day"]}
        rows={[
          ["Play the game", "Yes", "Yes"],
          ["Market / exchange", "No (confirmed gated)", "Yes"],
          ["PvE loot tables", "Same instances", "Same instances, more cube flexibility"],
          ["Barracks", "Still make 3 alts", "Same, plus easier funnel through AH"],
          ["Launch strategy", "Self-found, craft, be stingy", "You can buy gaps — still do not overpay on day 1"],
        ]}
      />
      <Callout tone="red">Third-party Kina shops will spam you. Ban beats BiS. This guide does not use them.</Callout>
      <NextLinks items={[{ href: "/alts", label: "Barracks and Energy" }, { href: "/activities", label: "Activities" }]} />
    </>
  );
}
