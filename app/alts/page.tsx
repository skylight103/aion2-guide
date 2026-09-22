import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Barracks and Energy" };

export default function AltsPage() {
  return (
    <>
      <PageHeader
        kicker="Start here"
        title="Barracks and energy"
        lede="Hardcore week one is not 'level one character as high as possible.' It is unlock the stamina system, then multiply it."
      />
      <Callout tone="red">
        Opening week, the efficient account is <strong>1 main + 3 alts to the energy gate</strong>. A single-main rush
        to 45 while three barracks sit empty wastes the first energy week.
      </Callout>

      <h2 className="font-[family-name:var(--font-display)] text-3xl">What actually gates you</h2>
      <p className="text-[var(--muted)]">
        AION 2 does not let one character print unlimited cube Kina. Three different caps stack. Treat them as
        separate systems.
      </p>
      <DataTable
        headers={["System", "What it does", "Who it belongs to"]}
        rows={[
          [
            "Odyle Energy",
            "Spend to open Odyle Energy Cubes after a clear. No energy, no cube. You can still finish the instance.",
            "Confirmed globally. KR treats the bar as per character.",
          ],
          [
            "Weekly reward charges",
            "How many times that character can claim the good dungeon reward this week.",
            "Exact global counts are unpublished.",
          ],
          [
            "Cumulative Play Reward Adjustment",
            "After enough weekly plays of a mode, cube Kina % drops. Mats and gear rolls are a separate roll.",
            "Play counts accumulate weekly, per mode, on a per-server basis.",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">When stamina starts</h2>
      <p>
        The first real energy tick is after the{" "}
        <strong>Breeze Boutique / Wind Breeze Merchant</strong> quest around <strong>level 22–23</strong>. Supply /
        replenishment requests unlock around <strong>level 25</strong>. That is why the efficient stop is ~22 instead
        of riding one story to 45.
      </p>
      <Callout>
        Treat 22 as a KR planning number, not a published global unlock. Finish the merchant quest, watch the Odyle
        Energy bar start moving, then park that character and make the next one. If the gate is 21 or 24, follow the
        bar.
      </Callout>
      <DataTable
        headers={["Level band", "Job", "Label"]}
        rows={[
          ["1 to ~22", "Main Story only. Wings, binds, one usable rotation. Do not gear deep.", "KR/TW pattern"],
          ["~22–23", "Breeze Boutique quest. Energy regen starts. This character is now a barracks slot.", "KR/TW pattern"],
          ["~25", "Supply requests unlock. Useful later, not the reason you stopped at 22.", "KR/TW pattern"],
          ["36–38", "KR Fire Temple exploration unlock. Later than the energy gate. Do not wait here to start alts.", "KR/TW live"],
          ["45 + item-level gates", "KR Conquest tickets need item level, not just combat level. Week-two+ problem.", "KR/TW live"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">The hardcore path</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        <li>Create the main with the group. Same server, same faction, same 15-minute window.</li>
        <li>Story-rush that main to the energy gate. Nearby Sealed Dungeons only if you bounce.</li>
        <li>Confirm Odyle Energy is regenerating. Do not dump the first bar into junk cubes.</li>
        <li>Make alt 1. Story-rush to the same gate. Repeat for alt 2 and alt 3.</li>
        <li>You now have four characters whose energy bars can tick. That is the week-one job.</li>
        <li>
          Spend cubes on the highest clean reward each character can actually finish. A 22 alt may only have story /
          daily / early exploration cubes. The 21-charge Expedition math is why four bodies should exist{" "}
          <em>when that mode unlocks</em> — not a claim that level 22 clears Expedition.
        </li>
        <li>Watch the Cumulative Play count. Stay inside the 100% Kina band on purpose.</li>
        <li>Only after the barracks exists do you push the real main past the gate.</li>
      </ol>
      <Callout tone="green">
        Founders have five live days before F2P. Use Advance Access to finish the 1+3 barracks, not to over-enhance one
        character the October 5 crowd will catch on story gear.
      </Callout>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Why three alts, not one, not eight</h2>
      <p className="text-[var(--muted)]">
        Kina from Odyle Energy Cubes only:
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
      <p>
        Play counts accumulate weekly, per game mode, on a per-server basis. The further you exceed a threshold, the
        more cube Kina is cut.
      </p>
      <p className="mt-4">
        KR May 13, 2026 notes used a near-identical Expedition / Conquest ladder (≤84 / ≤105 / ≤126 / ≤147 / ≥148) and
        set Expedition weekly reward charges at <strong>21 per character</strong>. Four characters × 21 = 84. On the
        livestream table, 83 is the last 100% tick and <strong>84 is already 80%</strong>. On the KR May notes, 84 is
        still 100%. Either way, 1+3 is the last barracks that still sits on the full-Kina line — not a license to add
        a fifth character for more cube gold.
      </p>
      <Callout tone="blue">
        Confirm two things in the client before you treat 84 as law. (1) The weekly charge count on your character.
        (2) Whether the play-count is your barracks on that realm. A true realm-wide 83 would burn out in the first
        hour of a busy launch world. If the number only moves when you clear, it is personal / account. If it starts
        already huge, alts do not fix the Kina %.
      </Callout>
      <DataTable
        headers={["Barracks", "If 21 charges ship", "Read"]}
        rows={[
          ["1 character", "21 full-Kina cubes", "Casual. Leaves most of the 100% band on the table"],
          ["1 + 1 alt", "42", "Better. Still thin for a hardcore account"],
          ["1 + 2 alts", "63", "Good. Short of the livestream 83 cap"],
          ["1 + 3 alts", "84", "Target. Last 100% cube on KR May ≤84; first 80% cube on the livestream table"],
          ["1 + 4 or more", "105+", "Only if you still want gear/mats after Kina is already cut"],
        ]}
      />
      <p className="text-[var(--muted)]">
        Extra alts past three still generate per-character energy, crafts, and bound materials. They do not keep cube
        Kina at 100% once the shared play-count walks down the table.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">How to spend energy in week one</h2>
      <p>
        Generic KR endgame guides say hoard energy until max-level Conquest. That is Season 3 thinking. Opening week
        does not have ilvl-1000 ticket regen or Sanctuary ladders. Early cubes{" "}
        <strong>are</strong> the currency machine.
      </p>
      <DataTable
        headers={["Do", "Do not"]}
        rows={[
          ["Open cubes on the highest instance that character can clear cleanly", "Sit at energy cap. Regen stops"],
          ["Prioritize Expedition / group cubes once they exist", "Burn the first bar on a story hideout you outlevel tonight"],
          ["Keep the account play-count inside 0–83 on that mode", "Spam ticket extras into the 20% band for more Kina"],
          [
            "Move alt loot through in-game mail, shared warehouse, or Membership AH — confirm which of those exist for F2P",
            "Deep-enhance four leveling sets, or assume a warehouse you have not seen yet",
          ],
          ["Membership: extra cube selections if the member perk is live", "Assume F2P gets the same cube count"],
        ]}
      />
      <p className="text-[var(--muted)]">
        KR/TW: F2P refills 10 energy every 3 hours and caps at 560. Membership is +50% — 15 every 3 hours and cap 840,
        so about 840 passive a week if you never sit full. High cubes often cost ~40 (some Exploration ~30). Global
        confirms members get more capacity and extra cube selections. The exact global ticks are unpublished.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">What other week-one guides get wrong</h2>
      <DataTable
        headers={["Advice you will see", "Judgment"]}
        rows={[
          [
            "Rush one character to 45 in 5–10 hours, barracks later",
            "Fine if time is short. Inefficient if the goal is cube Kina. KR puts energy after ~22. Every hour past that on a lonely main is an hour three other bars are not ticking.",
          ],
          [
            "Park alts at 35–45 before they are useful (PixelNitro and similar)",
            "That is a KR mid-game farm bracket. Week one needs the energy gate, not a second 40.",
          ],
          [
            "Save every cube for Conquest / Transcendence",
            "Correct later. Opening week, those ladders are gated or empty. Spend on what exists.",
          ],
          [
            "Burn all first-week energy in Disbelief / one named farm",
            "KR-specific goldmine routes. Useful as 'do not sit capped.' Useless as a copied map.",
          ],
          [
            "5–8 alts for 30M+ Kina/week",
            "Ignores the livestream Kina table. Past ~83 plays you are farming a tax.",
          ],
          [
            "Do every side quest and Sealed Dungeon on every alt",
            "Main can do a little. Alts story-rush to the gate. Finish the rest after the barracks exists.",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Group jobs</h2>
      <p className="text-[var(--muted)]">
        Five people × four characters is twenty energy bars. Plan the mains first, then alt nights.
      </p>
      <DataTable
        headers={["Slot", "Main", "Alt note"]}
        rows={[
          ["Tank", "Templar", "One extra Templar alt in the group is worth more than a fourth Ranger"],
          ["Heal", "Cleric", "Cleric alts make alt-level Expeditions actually queue"],
          ["Support", "Chanter", "Do not replace Cleric with Chanter on the main"],
          ["Melee DPS", "Gladiator or Assassin", "Good alt when the story is the only job"],
          ["Ranged / magic", "Ranger, Sorcerer, Spiritmaster", "Spiritmaster is the safest current PvE DPS read"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Founder week vs F2P week</h2>
      <DataTable
        headers={["Window", "Hardcore use"]}
        rows={[
          ["Sep 17–18 Scale Test", "Learn the energy unlock and cube UI. Progress wipes. Do not treat it as barracks."],
          ["Sep 30–Oct 4 Advance Access", "Finish 1+3 to the gate. Spend first cubes. Keep Kina liquid."],
          ["Oct 5 launch", "F2P friends copy the same path. Founders already have four ticking bars."],
        ]}
      />
      <NextLinks items={[{ href: "/plan", label: "Week-One Plan" }, { href: "/currencies", label: "Currencies" }]} />
    </>
  );
}
