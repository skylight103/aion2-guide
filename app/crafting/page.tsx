import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Crafting" };

export default function CraftingPage() {
  return (
    <>
      <PageHeader
        kicker="Systems"
        title="Crafting"
        lede="Essence Extraction feeds five professions. On KR, crafted Unique and Hero weapons out-item-level the dungeon pool — that is why the bench exists past week one."
      />
      <Callout tone="red">
        Snapshot: September 6, 2026. Profession names and the gather loop are stable KR systems. Dragon Lord recipes,
        Professional 70, and weekly Odyle crafts are KR/TW live. City trainer pins are unpublished for global.
      </Callout>
      <Callout>
        Failed crafts and leftover gear go to Abyss supply requests, not the disassemble button. Each character has
        its own weekly craft counts.
      </Callout>

      <h2 className="font-[family-name:var(--font-display)] text-3xl">Essence Extraction</h2>
      <p>
        All field nodes sit under one skill: Essence Extraction (정기추출). Ore, gems, wood, herbs, cooking
        ingredients, and Odyle share the same level. A node can be attempted three times. Success and fail gauges race;
        whichever fills first wins. A hit, a flight-bar drop on Odyle, or a cancel burns the attempt.
      </p>
      <DataTable
        headers={["Rule", "Detail"]}
        rows={[
          ["Odyle floats", "Hover and channel. Flight gather is real. Empty wings mid-channel is a fail"],
          ["Fail still pays XP", "If you let the channel finish. Cancel is often zero"],
          ["Quality", "Standard, Fine, Pure. Appraiser nodes raise Fine/Pure chance"],
          ["Points", "Each level: 1 common point. Every 10: 1 specialty point"],
          ["You cannot max the tree", "KR writeups: ~65 common and 14 specialty across Novice 50 + Professional 50. The full tree wants more"],
          ["Reset", "About 50,000 Kina. Do not respec for fun"],
          ["Novice 50 → Professional", "Quest after 50. KR: turn in a Splendent Ruby (빛나는 루비; Gem Seeker helps). Then Professional 1–50 again"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Where specialty points go</h2>
      <p className="text-[var(--muted)]">
        Common points buy gather feel: Proficient Handling (success gauge), Delicate Touch (fail gauge), Lady Luck
        (crit success when fail is already high). Specialty points buy a material line: Seeker (minimap) → Plentiful
        Harvest (multi-yield) → Appraiser (quality). Seeker is one point. Harvest and Appraiser are three each.
      </p>
      <DataTable
        headers={["Priority", "Node", "Why"]}
        rows={[
          ["1", "Odyle Seeker → Harvest → Appraiser", "Odyle morphs into other mats. The reverse is not true"],
          ["2", "The node your weapon profession eats", "Ore for Blacksmith / Armor. Wood + gems for Handicraft. Gems for Alchemy"],
          ["3", "Common gather skills to 5", "Every node you touch gets cheaper"],
          ["Skip", "Maxing all six material lines", "The point budget does not exist"],
        ]}
      />
      <p className="mt-3 text-sm text-[var(--muted)]">
        Substance Morph (물질변환) is the other half of gathering. Odyle and leftover dungeon gear both go through it —
        Odyle into missing Fine/Pure mats, same-difficulty Unique/Hero drops into Potential stones. Unique morphs 1:1.
        Hero morphs at 10 per item on current KR notes. High-tier stones can step down. Low cannot step up.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">How a craft actually resolves</h2>
      <p>
        Aion2Tool and NC probability pages: success gauge vs fail gauge, same idea as gathering. Level difference =
        your proficiency minus the recipe requirement. Combo is a separate roll. Weapon, armor, and jewelry combos
        produce a Splendent (빛나는) piece that unlocks the next rank of that line. Cooking and potions combo into double yield.
        Getting hit mid-craft is a fail.
      </p>
      <DataTable
        headers={["Step", "What happens"]}
        rows={[
          ["Vendor catalyst", "City craft merchants sell solvents / stamps. Ore + solvent → ingot is the Blacksmith XP dump"],
          ["Chain", "Orichalcum weapon → Expert → Artisan → later Dragon Lord ranks. The Splendent (빛나는) combo is the gate"],
          ["Missed combo", "Keep the fail. Supply request or the next chain still wants a base piece"],
          ["KR rank cap", "Novice 50, then Professional. A later patch took craft proficiency to 70. Gathering writeups still stop at Professional 50"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Five professions</h2>
      <DataTable
        headers={["Profession", "Makes", "Who lives on it"]}
        rows={[
          [
            "Blacksmithing (대장)",
            "Longswords, greatswords, daggers, maces, shields, Guards",
            "Gladiator, Templar, Assassin, Cleric weapons and Guards",
          ],
          [
            "Armor Smithing (갑옷)",
            "Helm, shoulders, chest, legs, gloves, boots, cloak",
            "Everyone once Expedition armor is the bottleneck. KR titles also pay a scrap of attack at Novice 50",
          ],
          [
            "Handicraft (세공)",
            "Bows, staves, necklace, rings, earrings, bracelets, brooches",
            "Ranger and Chanter weapons. Every class that wants a crafted ring. Muspel brooches on KR",
          ],
          [
            "Alchemy (연금)",
            "Spellbooks, orbs, potions, scrolls, Manastone / Spirit Stone upgrades",
            "Sorcerer and Spiritmaster weapons. The whole roster wants High stones. Low 4 → Mid 1; combo can spit a High",
          ],
          [
            "Cooking (요리)",
            "Food and drink. Tasty variants last longer. Higher ranks chain off lower dishes",
            "Cheapest combat power in the game. KR titles: Novice 50 cooking also pays crit damage",
          ],
        ]}
      />
      <p className="mt-3 text-sm text-[var(--muted)]">
        One character can train more than one bench. The long sink is the profession that crafts the main&apos;s weapon.
        Cooking and Alchemy pay on every body. Armor and jewelry are the next benches once Kina exists.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Materials that actually matter</h2>
      <DataTable
        headers={["Material", "Gather line", "Sink"]}
        rows={[
          ["Odyle (Standard / Fine / Pure)", "Odyle, in the air", "Every recipe, every morph. Pick it up"],
          ["Orichalcum ore → ingot", "Ore. Vendor solvent", "Blacksmith and Armor XP, then the weapon chain"],
          ["Asvata wood", "Log", "Handicraft weapons, some shields and higher scrolls"],
          ["Ruby / Sapphire / Diamond", "Gem", "Alchemy weapons (Sorc ruby, SM sapphire in KR writeups), jewelry, High scrolls"],
          ["Azpha / Calendula and other herbs", "Herb", "Alchemy potions"],
          ["Meat, fruit, vendor salt/oil", "Cooking ingredient + hunt drops + craft NPC", "Food chain. Do not deliver Brilliant Odyle on a supply quest"],
          ["Artisan stones / Dragon Lord mats", "Expedition, Sanctuary, season shop — not a field node", "The actual BiS craft. This is the expensive part"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Recipe names</h2>
      <p className="text-[var(--muted)]">
        Horned and Noble are the same tier on opposite factions; same for Genesis and Nemesis. Full set list lives on
        Gear.
      </p>
      <DataTable
        headers={["English", "Korean", "What it is"]}
        rows={[
          ["Wise / True Dragon Lord", "건룡왕 / 진룡왕", "Cheap Unique craft. The starter ring line"],
          ["White / Ebony Dragon Lord", "백룡왕 / 흑룡왕", "Succession-craft from Wise / True"],
          ["Horned / Noble Dragon Lord", "응룡왕 / 기룡왕", "Current expensive Unique / Hero craft"],
          ["Genesis / Nemesis Dragon Lord", "창룡왕 / 멸룡왕", "Transfer-craft from Horned / Noble. PvE ceiling"],
          ["Eroded Afterimage", "침식된 잔영", "Dungeon Hero armor until the craft bill is payable"],
          ["Splendent", "빛나는", "Combo prefix. The gate to the next rank, not a set"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">How craft becomes BiS</h2>
      <p className="text-[var(--muted)]">
        Inven&apos;s long-standing PvE read still holds on current KR: Abyss shop is PvP endgame. Craft is PvE endgame.
        Cubes can roll Hero armor and jewelry. Weapons mostly stop at Unique outside Sanctuary — so the bench is how a
        weapon leaves Unique.
      </p>
      <DataTable
        headers={["Goal", "Profession", "KR path"]}
        rows={[
          [
            "PVE weapon / Guard",
            "The class bench",
            "Orichalcum chain → Horned / Noble Dragon Lord Unique (응룡왕 / 기룡왕) → transfer-craft Genesis / Nemesis Dragon Lord Hero (창룡왕 / 멸룡왕). Combo Splendent (빛나는) at each gate",
          ],
          [
            "PVE ring",
            "Handicraft",
            "Crafted ring over Expedition ring. Extra soul line for mastery. Cheap Wise / True Dragon Lord (건룡왕 / 진룡왕) first, then succession-craft White / Ebony Dragon Lord (백룡왕 / 흑룡왕) if you stay on that line",
          ],
          [
            "Helm / chest / cloak",
            "Armor Smithing",
            "Horned / Noble Dragon Lord (응룡왕 / 기룡왕) Hero when Kina exists. Eroded Afterimage (침식된 잔영) from dungeons until then",
          ],
          [
            "Brooch",
            "Handicraft",
            "KR May 2026: Novice 40+ can craft Unique brooches. Also Muspel cubes",
          ],
          [
            "High Manastones / Spirit Stones",
            "Alchemy",
            "Daily dungeon Lows → Mid craft. Combo is the High. Market Highs are the expensive shortcut",
          ],
          [
            "Food for a lockout",
            "Cooking",
            "Current tasty recipe, not a museum dish. Combo doubles the stack",
          ],
        ]}
      />
      <p className="mt-3 text-sm text-[var(--muted)]">
        GameToc: buying every Horned / Noble Dragon Lord (응룡왕 / 기룡왕) weapon mat off the KR market was ~280–300
        million Kina. Season shop and self-gather cut that. Professional 70 exists on KR specifically so those crafts
        stop failing. That cap is not a published global day-one number.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Weeklies and alts</h2>
      <p>
        Craft limits are per character. That is a barracks feature, not a flavor line. KR live writeups keep a weekly
        Odyle-energy craft (seven crafts / 280 energy on one common sheet), weekly and emergency Abyss supply
        requests, and season craft deliveries. Failed Orichalcum weapons sit in the warehouse for those deliveries.
      </p>
      <DataTable
        headers={["On this character", "Do"]}
        rows={[
          ["Main", "Push the weapon profession toward the current craft cap. Keep Cooking and Alchemy high enough for food and stones"],
          ["Each alt", "Claim weekly morphs / energy crafts / supply requests. Do not also fund a second Hero weapon"],
          ["Work orders", "Vendor-ingredient orders exist to level a bench without field nodes. Use them when the recipe XP is the point"],
          ["Titles", "KR: Armor Novice 50, Alchemy Novice 50, Cooking Novice 50 are cheap combat titles. Professional 50 Blacksmith / Alchemy pay more"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Opening-week bench</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        <li>Extract every node on the story road. Odyle first if a morph menu exists</li>
        <li>Open Cooking or Alchemy at the first city station. Food for the first group night</li>
        <li>Add the weapon profession the main actually wears, after the bench is found</li>
        <li>Ingot-spam Orichalcum (or the local equivalent) to clear Novice instead of gambling the first weapon recipe</li>
        <li>Park failed pieces for supply requests</li>
        <li>Once three alts exist, their weekly crafts are the reason they were rolled</li>
      </ol>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Do not</h2>
      <DataTable
        headers={["Do not", "Why"]}
        rows={[
          ["Max every gather node", "The specialty budget is not large enough"],
          ["Respec Extraction to try a new gem line", "50,000 Kina buys a lot of Odyle instead"],
          ["Deliver Brilliant / Pure Odyle on a trash supply quest", "That stack is the morph bank"],
          ["Disassemble a failed weapon", "Supply request"],
          ["Craft a Hero weapon on four characters", "One main eats the mat pile"],
          ["Ignore Cooking because it is not a weapon", "It is the buff you can actually keep up"],
          ["Treat a January 2026 gather map as launch gospel", "Nodes move. The Odyle-first rule does not"],
        ]}
      />
      <NextLinks items={[{ href: "/gear", label: "Gear" }, { href: "/currencies", label: "Currencies" }]} />
    </>
  );
}
