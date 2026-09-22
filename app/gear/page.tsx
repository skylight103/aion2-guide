import {
  GearAmpAndSlots,
  GearAnatomy,
  GearExtraSlots,
  GearIdealLines,
  GearPantheon,
  GearSoulBinding,
  GearStones,
  GearTransfer,
  GearWingsCloset,
} from "@/components/GearSystems";
import { GearChapter } from "@/components/GearChapter";
import { GearToc } from "@/components/GearToc";
import { Callout, DataTable, NextLinks, PageHeader, RuleList } from "@/components/ui";

export const metadata = { title: "Gear" };

export default function GearPage() {
  return (
    <div className="gear-page">
      <PageHeader
        kicker="Systems"
        title="Gear"
        lede="From story greens to current KR Hero craft. Item level opens the door. Amp, Soul Binding, Potential, and transfer decide whether the piece is worth keeping."
      />
      <div className="gear-notes">
        <Callout tone="red">
          Snapshot: September 6, 2026. Named Expeditions, Sanctuary, and Hero succession are KR/TW live. Global week
          one will not start on Season 3 farm names. The systems below are what those names sit on.
        </Callout>
        <Callout tone="blue">
          Membership gates the market and Kina↔Quna. Dungeon loot tables are the same. Buying the gap is not.
        </Callout>
      </div>

      <GearToc />

      <GearChapter id="read">
        <p className="text-[var(--muted)]">
          A higher name is not automatically an upgrade. Compare the whole item: grade, item level, base stats,
          enhance, soul lines, Potential, and whether that investment can move.
        </p>
        <DataTable
          headers={["Term", "What it is", "What it is not"]}
          rows={[
            [
              "Item level",
              "The number on the piece and on the instance door. Expedition, Transcendence, and Sanctuary check this to let you in. A higher-IL Unique can open a door a lower Unique cannot",
              "A finished build. Soul lines, Amp, and Potential sit on top of it",
            ],
            [
              "Combat power (전투력)",
              "KR March 2026: official character total you can toggle next to item level. Gear, stats, and systems that affect combat. Consumable and skill buffs do not count",
              "A spend-everything target, or a published global day-one label. Doors still use item level",
            ],
            [
              "Gear Score",
              "How geared you are. People use it for item level, combat power, or a third-party sheet",
              "An official AION 2 stat. The client does not print Gear Score",
            ],
            ["Grade", "Common → High → Rare → Unique → Hero", "Proof the options are good"],
            [
              "Enhance +N / Amp",
              "Main-stat clicks, then five blue-diamond Amp levels. Unique +15 then Amp. Heroic +20 then Amp. Fail does not break the piece",
              "The same as Breakthrough or Potential",
            ],
          ]}
        />

        <GearAnatomy />

        <GearAmpAndSlots />
        <GearPantheon />
      </GearChapter>

      <GearChapter id="grow">
        <p className="text-[var(--muted)]">
          Integrated Enhance (N) is several menus, not one click. Official KR guidance lists enhance, engraving,
          Manastones, Spirit Stones, Soul Book, tuning, Breakthrough, Potential, and succession. Opening every tab at
          once is how Kina dies.
        </p>
        <DataTable
          headers={["Layer", "What it does", "Spend rule"]}
          rows={[
            [
              "Enhance / Amp",
              "Unique to +15 then five Amp diamonds. Heroic to +20 then five Amp. Amp unlocks orange stats. Fail is safe; chance rises",
              "Just enough to open the next door, or deep only on a keeper",
            ],
            [
              "Breakthrough (돌파)",
              "After max enhance on Unique or higher. Five stages. Breakthrough stones + Kina. Fail is safe",
              "Keepers only. The Breakthrough soul slot does not survive Hero succession",
            ],
            [
              "Manastone / Soulstone",
              "Manastones on weapon and armor. Soulstones on jewelry. One consume rerolls every socket. Lost on transfer",
              "Mid is fine while the piece is temporary. Yellow Boost on a keeper",
            ],
            [
              "Soul Binding",
              "Bind fills the blue rate with Soul Codex. 100% unlocks an extra line for 2 Philosopher’s Stones. Sync rerolls one line. Reset shuffles all",
              "Do not equip every drop just to look. 100% rate before serious Sync. Extra bind line does not transfer",
            ],
            [
              "Potential",
              "Asia craft ships this maxed and higher. Global craft does not auto-unlock it, and the gap is unconfirmed. Dungeon pieces use Potential Stones. Lost on transfer",
              "Does not inherit. Do not Potential a piece you will replace this week",
            ],
            [
              "Transfer / Succession",
              "Move enhance and the soul sheet. Weapon stone is 20 Heroic fragments, armor 15, accessory 10. Unique → Heroic wants 5 extra Unique stones",
              "Read the confirm screen. Weapon and Guard first. Jewelry is often cheaper to rebuild. Unique Transfer Stones cannot become Heroic",
            ],
            [
              "Transfer Crafting",
              "KR: upgrade a finished craft line instead of rolling a new one — Horned / Noble Dragon Lord (응룡왕 / 기룡왕) into Genesis / Nemesis Dragon Lord (창룡왕 / 멸룡왕). Abyss ranks do the same",
              "This is how current KR BiS weapons exist. Not a global week-one recipe",
            ],
          ]}
        />

        <GearSoulBinding />
        <GearStones />
        <GearTransfer />
      </GearChapter>

      <GearChapter id="spend">
        <h3 id="opening-week" className="gear-sub">
          Opening week
        </h3>
        <p>
          Count empty squares. Upgrade the weapon, then the grey square that is failing the door or getting you killed.
          Four ticking energy bars beat four +8s. Story and the first dungeon brackets replace almost everything you
          wear before 45.
        </p>
        <div className="spend-cards">
          {[
            ["Alt story greens", "Almost nothing", "A rotation, not a project"],
            ["Temporary leveling drops", "Minimal", "Story combat stays smooth"],
            ["Item-level gate piece", "Just enough", "The next dungeon bracket"],
            ["First stable Unique", "Moderate, and only if transfer exists", "Daily / weekly clears"],
            ["Confirmed long-term piece", "Deep — after the confirm screen", "Real optimization"],
          ].map(([gear, spend, goal]) => (
            <article key={gear} className="spend-card">
              <p className="slot-name">{gear}</p>
              <dl>
                <dt>Spend</dt>
                <dd>{spend}</dd>
                <dt>Goal</dt>
                <dd>{goal}</dd>
              </dl>
            </article>
          ))}
        </div>

        <h3 id="carries" className="gear-sub">
          What carries, what dies
        </h3>
        <DataTable
          headers={["Investment", "Usually moves", "Usually dies"]}
          rows={[
            ["Enhance / Amp / Breakthrough", "Transfer and Unique → Hero succession", "If the confirm screen says no"],
            ["Base soul lines", "Transfer, if they sit on a base slot", "Breakthrough-slot lines. Philosopher’s extra line"],
            ["Potential", "Never inherited", "The replacement week you already knew about"],
            ["Manastones / Soulstones / Theostones", "The sockets on that piece", "The transfer. Do not Superior a bridge Unique"],
          ]}
        />

        <h3 id="do-not" className="gear-sub">
          Do not
        </h3>
        <RuleList
          items={[
            ['Try to "just buy it" on F2P', "No market without Membership"],
            ["Deep enhance four leveling sets", "Replaced tomorrow"],
            ["Potential a bridge Unique", "Potential does not transfer"],
            ["Equip every drop", "First wear starts Soul Binding"],
            ["Sync at 40% bind rate", "The yellow bars are a fraction of the cap"],
            ["Park a 1% Smite on the Philosopher’s line", "That line does not transfer"],
            ["Feed lower-grade Sync Stones into Heroic", "10% chance the line even moves"],
            ["Put damage amp on the Breakthrough slot before Hero succession", "That slot does not come with you"],
            ["Spend the three Season 3 successions on a ring", "Weapon and Guard first"],
            ["Burn Quna on an unnamed bottleneck", "Name the door first"],
            ["Copy a Muspel / Deus route on October 5", "Those instances are not a published global week-one list"],
          ]}
        />
      </GearChapter>

      <GearChapter id="extras">
        <GearExtraSlots />
        <GearWingsCloset />
      </GearChapter>

      <GearChapter id="lines">
        <GearIdealLines />
        <p className="mt-3 text-sm text-[var(--muted)]">
          PvP wants a different sheet. KR split PvE and PvP damage coefficients. A dungeon Boost stack is not a 1v1
          set. Official UI: up to three gear presets.
        </p>
      </GearChapter>

      <GearChapter id="korea">
        <h3 id="kr-names" className="gear-sub">
          KR set names
        </h3>
        <p className="text-[var(--muted)]">
          Horned and Noble are the same tier on opposite factions; same for Genesis and Nemesis. Splendent (빛나는) is
          the combo prefix, not a different set.
        </p>
        <DataTable
          headers={["English", "Korean", "What it is"]}
          rows={[
            ["Wise / True Dragon Lord", "건룡왕 / 진룡왕", "Early Unique craft. The cheap ring line"],
            ["White / Ebony Dragon Lord", "백룡왕 / 흑룡왕", "Succession-craft from Wise / True"],
            ["Horned / Noble Dragon Lord", "응룡왕 / 기룡왕", "Current expensive Unique / Hero craft"],
            ["Genesis / Nemesis Dragon Lord", "창룡왕 / 멸룡왕", "Transfer-craft from Horned / Noble. Current PvE ceiling"],
            ["Bakarma / Durbati / Nathara", "바카르마 / 두르바티 / 나트하라", "Early Expedition weapon and armor"],
            ["Ludra", "루드라", "Abyss Refining Unique weapon and Guard"],
            ["Eroded Afterimage", "침식된 잔영", "Expedition / Sanctuary Hero armor"],
            ["Lava Heart (Extend)", "용암 심장 (늘어남)", "Chalice of Muspel weapon / Guard"],
            ["Guardian Decanus → High Commander", "십부장 → 친위대장", "Abyss PvP shop ranks"],
          ]}
        />

        <h3 id="kr-ladder" className="gear-sub">
          KR PvE ladder — how pieces drop
        </h3>
        <p className="text-[var(--muted)]">
          This is the live KR/TW path through early September 2026, not a global farm order. The pattern is what
          matters: story → Expedition Unique → Potential on those Uniques → crafted Unique weapon → Hero succession →
          Sanctuary / transfer-craft Hero.
        </p>
        <ol className="gear-steps">
          <li>
            <strong>Story / region / sealed dungeons</strong>
            <span>Fill holes. Do not +20 it.</span>
          </li>
          <li>
            <strong>First Expedition set</strong>
            <span>Bakarma (바카르마) weapons, Durbati (두르바티) armor, then Nathara (나트하라). Wearable Unique. Potential starts here.</span>
          </li>
          <li>
            <strong>Ludra Unique</strong>
            <span>Abyss Refining: Ludra (심연의 재련: 루드라). The common Unique → Hero succession target if craft Kina is not there yet.</span>
          </li>
          <li>
            <strong>Crafted Unique weapon / Guard</strong>
            <span>Horned / Noble Dragon Lord (응룡왕 / 기룡왕). Higher item level than most dungeon Uniques.</span>
          </li>
          <li>
            <strong>Crafted ring</strong>
            <span>Handicraft mastery line. Cheap Wise / True Dragon Lord (건룡왕 / 진룡왕) if the top craft is too much.</span>
          </li>
          <li>
            <strong>Hero succession</strong>
            <span>Unique → Hero, three times per season. Weapon and Guard first. Third click: helmet, chest, or cloak.</span>
          </li>
          <li>
            <strong>Eroded Afterimage (침식된 잔영)</strong>
            <span>Hero armor without the craft bill. On the Asia sheet it is behind Horned / Noble Dragon Lord craft: no 5% PvE Tolerance, one fewer soul line. That Potential gap is not confirmed for global.</span>
          </li>
          <li>
            <strong>Corroded Deus / Decontamination</strong>
            <span>Later Expedition. Bracelets and another Unique pool.</span>
          </li>
          <li>
            <strong>Chalice of Muspel</strong>
            <span>Item level 4,500 door. Lava Heart weapon / Guard, Kaldrix brooch, Genesis / Nemesis craft mats.</span>
          </li>
          <li>
            <strong>Transfer-craft Hero weapon</strong>
            <span>Genesis / Nemesis Dragon Lord (창룡왕 / 멸룡왕). Current KR PvE ceiling.</span>
          </li>
        </ol>
        <p className="mt-3 text-sm text-[var(--muted)]">
          KR Chapter 1 doors cited in August 2026 writeups: Expedition / Transcendence from item level 3,500, Ascension
          Trial Doom at 4,000, Muspel at 4,500. Read the live panel. Those numbers are not a global week-one list.
        </p>

        <h3 id="kr-bis" className="gear-sub">
          Current KR BiS read
        </h3>
        <p className="text-[var(--muted)]">
          Press and Inven through Season 3: Hero is the target, Unique is the bridge. Crafted Dragon Lord beats
          Expedition on the same grade. On Asia, Potential closes some of that gap on dungeon pieces, which is why a new
          player can clear on Expedition gear and still be behind a craft weapon. Global craft does not ship that maxed
          Potential.
        </p>
        <div className="spend-cards">
          <article className="spend-card">
            <p className="slot-name">Weapon + Guard</p>
            <dl>
              <dt>Best</dt>
              <dd>Horned / Noble Dragon Lord (응룡왕 / 기룡왕) → Genesis / Nemesis (창룡왕 / 멸룡왕). +20, 100% imprint, bind</dd>
              <dt>Budget</dt>
              <dd>Nathara → Ludra Unique → Hero succession</dd>
            </dl>
          </article>
          <article className="spend-card">
            <p className="slot-name">Helmet, chest, cloak</p>
            <dl>
              <dt>Best</dt>
              <dd>Crafted Horned / Noble Dragon Lord Hero — PvE resist + extra soul line</dd>
              <dt>Budget</dt>
              <dd>Eroded Afterimage (침식된 잔영) Hero from Expedition / Sanctuary</dd>
            </dl>
          </article>
          <article className="spend-card">
            <p className="slot-name">Other armor</p>
            <dl>
              <dt>Best</dt>
              <dd>Eroded Afterimage is fine</dd>
              <dt>Budget</dt>
              <dd>Whatever Unique/Hero keeps item level honest</dd>
            </dl>
          </article>
          <article className="spend-card">
            <p className="slot-name">Ring</p>
            <dl>
              <dt>Best</dt>
              <dd>Crafted. Mastery soul line is the reason</dd>
              <dt>Budget</dt>
              <dd>Wise / True Dragon Lord, then White / Ebony</dd>
            </dl>
          </article>
          <article className="spend-card">
            <p className="slot-name">Necklace / earrings</p>
            <dl>
              <dt>Best</dt>
              <dd>New craft when the recipe is cheap</dd>
              <dt>Budget</dt>
              <dd>Keep the Expedition piece</dd>
            </dl>
          </article>
          <article className="spend-card">
            <p className="slot-name">Bracelets / brooch / wings</p>
            <dl>
              <dt>Best</dt>
              <dd>Deus bracelets. Muspel brooch. Enhance the pair you actually fly</dd>
              <dt>Budget</dt>
              <dd>Empty jewelry until that season exists</dd>
            </dl>
          </article>
        </div>
        <p className="mt-3 text-sm text-[var(--muted)]">
          GameToc Season 3: a full Horned / Noble Dragon Lord (응룡왕 / 기룡왕) weapon bought off the market sat around
          280–300 million Kina; season shop and self-gather cut that. Hero +20 fell from ~100M to ~40M. Those are KR
          prices, not launch quotes.
        </p>

        <h3 id="abyss" className="gear-sub">
          Abyss / PvP gear
        </h3>
        <p>
          Abyss Points buy a separate ladder. Do not spend enhance stones on revenge pieces during opening week. On
          current KR the shop climb is Guardian Decanus (십부장) → Centurion (백부장) → Tribunus (천부장), then High
          Commander (친위대장) weapon and Guard via shop plus succession-craft. Accessories first on the cheap ranks;
          keep set bonuses when you step up.
        </p>
        <RuleList
          items={[
            ["Abyss shop gear", "PvP coefficient and open-world fights. Do not treat it as your PvE item-level plan"],
            ["Chaos Abyss / mid-layer islands", "KR 2026 AP farm after the first ranks. Do not copy a named island before the global map exists"],
            ["Supply requests", "Turn failed crafts and leftover gear into AP. Do not disassemble a piece that could have been a delivery"],
          ]}
        />
      </GearChapter>

      <NextLinks items={[{ href: "/crafting", label: "Crafting" }, { href: "/activities", label: "Activities" }]} />
    </div>
  );
}
