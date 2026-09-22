import { Callout, DataTable } from "@/components/ui";
import { GuideShot } from "@/components/GuideShot";
import Link from "next/link";

const pantheon = [
  { name: "Time", god: "Siel", star: true, a: "Combat Speed", b: "Smite Resist" },
  { name: "Destruction", god: "Zikel", star: true, a: "Attack Increase", b: "Perfect Resist" },
  { name: "Wisdom", god: "Lumiel", star: true, a: "Smite", b: "MP Consumption down" },
  { name: "Illusion", god: "Kaisinel", star: true, a: "Cooldown Reduction", b: "Endurance Penetration" },
  { name: "Death", god: "Triniel", star: false, a: "Critical Hit", b: "Regeneration Penetration" },
  { name: "Justice", god: "Nezekan", star: false, a: "Defense", b: "Perfect Chance" },
  { name: "Freedom", god: "Vaizel", star: false, a: "Accuracy", b: "Evasion" },
  { name: "Life", god: "Yustiel", star: false, a: "HP", b: "Regen Chance" },
  { name: "Destiny", god: "Marchutan", star: false, a: "MP", b: "Endurance Chance" },
  { name: "Space", god: "Israphel", star: false, a: "Move Speed", b: "Block Chance" },
];

export function GearAnatomy() {
  return (
    <>
      <h3 id="layers" className="gear-sub">The layers on one piece</h3>
      <p className="text-[var(--muted)]">
        Every serious item is several systems stacked in one panel. The numbered boxes on the tooltip match the rows
        on the right.
      </p>
      <div className="layer-split">
        <GuideShot
          src="/guide/item-anatomy.webp"
          alt="Unique greatsword tooltip with numbered boxes for enhance, Amp, base stats, soul lines, Manastones, and a Theostone"
          variant="portrait"
        />
        <DataTable
          headers={["#", "Layer", "What it is"]}
          rows={[
            [
              <span key="1" className="layer-num layer-num--1">
                1
              </span>,
              "Enhance + Amp",
              "Main clicks. Unique stops at +15, then five blue-diamond Amp levels. Heroic stops at +20, then five Amp",
            ],
            [
              <span key="2" className="layer-num layer-num--2">
                2
              </span>,
              "Base stats",
              "The white numbers that do not change when you Amp",
            ],
            [
              <span key="3" className="layer-num layer-num--3">
                3
              </span>,
              "Amp stats",
              "Orange lines that unlock past +15 / +20. Weapon: Attack 150 and 5% Attack Increase at Amp 5",
            ],
            [
              <span key="4" className="layer-num layer-num--4">
                4
              </span>,
              "Soul Binding",
              "The yellow lines. Bind to 100%, Sync one line, Reset the whole sheet",
            ],
            [
              <span key="5" className="layer-num layer-num--5">
                5
              </span>,
              "Manastone / Soulstone",
              "Rolled sockets. Lost on transfer",
            ],
            [
              <span key="6" className="layer-num layer-num--6">
                6
              </span>,
              "Theostone",
              "One proc gem on a weapon. Tiny PvE damage. Lost on transfer",
            ],
            [
              "—",
              "Potential",
              "Not boxed on this tooltip. PvE Boost or Tolerance. Asia craft ships this maxed. Global craft does not. Dungeon pieces use Potential Stones",
            ],
          ]}
        />
      </div>
      <p className="text-sm text-[var(--muted)]">
        Any item has a Source button. Use it before you farm the wrong map.
      </p>
      <GuideShot
        src="/guide/item-source.webp"
        alt="Item Source panel listing bosses, shops, Nightmare, Expedition, and Transcendence"
        variant="inline"
      />
    </>
  );
}

export function GearAmpAndSlots() {
  return (
    <>
      <h3 id="amp" className="gear-sub">Enhance and Amp</h3>
      <p className="text-[var(--muted)]">
        Spend Kina plus Enhance Stones to + a piece. Past the stop, Amplify Stones add five Amp levels — the blue
        diamonds under the icon. Amp unlocks the orange stats. A Unique at +15 Amp 5 that transfers into a Heroic
        arrives as +20 Amp 0. You buy Amp again on the new grade.
      </p>
      <p className="mt-3 text-[var(--muted)]">
        Amplify Stones come from Substance Morphing Amplify Fragments with Enhance Stones. Success chance soft-resets
        to 60% from +15 to +16.
      </p>
      <GuideShot
        src="/guide/amp-diamonds.webp"
        alt="Heroic bracelet tooltip with five blue Amp diamonds and orange Amp stats"
        variant="contain"
      />
      <p className="text-sm text-[var(--muted)]">
        Armor Amp 5 is still unverified. The Potential percents on the cards are the Asia sheet: crafted pieces there
        ship maxed, and nearly double a dungeon piece. Global crafted gear does not auto-unlock Potential, and it is not
        confirmed that a global craft beats a dungeon piece on that line. PvP gear uses a PvP Damage Boost line instead
        — 10% on a weapon, 5% on armor and accessories, on that same Asia sheet.
      </p>

      <h3 id="slot-jobs" className="gear-sub">What the slot is for</h3>
      <p className="text-[var(--muted)]">
        Weapon and Guard share the same soul pool and carry Active skill lines. Armor carries Passives. Rings are the
        jewelry Active slot. Bracelet is Pantheon, not a normal soul sheet.
      </p>
      <div className="slot-cards">
        <article className="slot-card">
          <p className="slot-name">Weapon &amp; Guard</p>
          <p>Most of the damage. Same soul lines. Active skill levels.</p>
          <dl>
            <dt>Amp 5</dt>
            <dd>Attack 150 · Attack Increase 5%</dd>
            <dt>Potential (Asia)</dt>
            <dd>Crafted PvE Boost 5% / dungeon 2.4%</dd>
          </dl>
        </article>
        <article className="slot-card">
          <p className="slot-name">Armor</p>
          <p>Helmet through boots. Defense, then Passive skill lines.</p>
          <dl>
            <dt>Amp 5</dt>
            <dd>Defense &amp; HP 400 · Increase 5%</dd>
            <dt>Potential (Asia)</dt>
            <dd>Crafted PvE Tolerance 5% / dungeon 1.2%</dd>
          </dl>
        </article>
        <article className="slot-card">
          <p className="slot-name">Accessories</p>
          <p>Offense with a defensive floor. Soulstones, not Manastones.</p>
          <dl>
            <dt>Amp 5</dt>
            <dd>Attack 100 · Defense 200 · Attack Increase 5%</dd>
            <dt>Potential (Asia)</dt>
            <dd>Crafted PvE Boost 2.5% / dungeon 1.2%</dd>
          </dl>
        </article>
      </div>
    </>
  );
}

export function GearPantheon() {
  const stars = pantheon.filter((p) => p.star);
  const rest = pantheon.filter((p) => !p.star);
  return (
    <>
      <h3 id="pantheon" className="gear-sub">Pantheon</h3>
      <p className="text-[var(--muted)]">
        Ten bundled stats. Each name is a pair of effects. You stack them from the bracelet, from Arcana cards, and
        from statues and portraits in the Pantheon menu. Time, Destruction, Wisdom, and Illusion are the four that
        move a parse.
      </p>
      <GuideShot
        src="/guide/pantheon-wheel.webp"
        alt="Pantheon stat wheel with Destruction selected, showing Attack Increase and Perfect Resist"
        variant="contain"
      />
      <div className="pantheon-featured">
        {stars.map((p) => (
          <article key={p.name} className="pantheon-card pantheon-card--star">
            <p className="slot-name">{p.name}</p>
            <p>{p.god}</p>
            <dl>
              <dt>Pair</dt>
              <dd>
                {p.a}
                <br />
                {p.b}
              </dd>
            </dl>
          </article>
        ))}
      </div>
      <div className="pantheon-grid">
        {rest.map((p) => (
          <article key={p.name} className="pantheon-card">
            <p className="slot-name">{p.name}</p>
            <p>{p.god}</p>
            <dl>
              <dt>Pair</dt>
              <dd>
                {p.a}
                <br />
                {p.b}
              </dd>
            </dl>
          </article>
        ))}
      </div>
      <p className="text-sm text-[var(--muted)]">
        Bracelet first shows up on the first raid (Ludra on current KR). Brooch is the later Muspel slot. Empty those
        squares until the client has them.
      </p>
    </>
  );
}

export function GearSoulBinding() {
  return (
    <>
      <h3 id="bind" className="gear-sub">Bind, Sync, Reset</h3>
      <p className="text-[var(--muted)]">
        Three buttons, one sheet. Bind fills the blue Soul Binding Rate. Sync rerolls one yellow line. Reset shuffles
        every line at once.
      </p>
      <GuideShot
        src="/guide/soul-binding.webp"
        alt="Soul Binding menu with Bind, Sync, and Reset tabs"
        variant="contain"
      />
      <div className="spend-cards">
        <article className="spend-card">
          <p className="slot-name">Bind</p>
          <p>Soul Codex. The click is guaranteed; the amount is RNG. Push every yellow bar to 100%, then 2 Philosopher’s Stones add an extra line.</p>
        </article>
        <article className="spend-card">
          <p className="slot-name">Sync</p>
          <p>Same-grade Sync Stones, or a same-grade piece. Never feed a lower-grade stone into a higher-grade piece — 10% chance the line even moves.</p>
        </article>
        <article className="spend-card">
          <p className="slot-name">Reset</p>
          <p>Heroic Soul Codex: Reset. Every line at once. Use it when the sheet is junk, not when one rare line is already sitting.</p>
        </article>
      </div>
      <Callout tone="red">
        The Philosopher’s Stone extra line does not transfer. Do not park a 1% Smite there. Fish the rare line on a
        base slot you can move.
      </Callout>
      <GuideShot
        src="/guide/sync-morph.webp"
        alt="Substance Morph crafting Unique Sync Stones from fragments"
        variant="wide"
      />
      <p className="text-[var(--muted)]">
        Sync Stones morph from Sync Stone Fragments (dungeons) or from Unique gear. Same-grade morphs are 100%.
      </p>
    </>
  );
}

export function GearStones() {
  return (
    <>
      <h3 id="stones" className="gear-sub">Manastone, Soulstone, Theostone</h3>
      <p className="text-[var(--muted)]">
        Manastones go on weapons and armor. Soulstones go on accessories. One consume rerolls every socket on that piece.
        Gray → green → blue → yellow. You want at least one yellow Boost on a keeper. Blue Boost is 30; yellow is 100.
        100 Boost is 1% on the sheet.
      </p>
      <GuideShot
        src="/guide/manastones.webp"
        alt="Superior Manastone tooltip next to a Manastone and Soulstone inventory grid"
        variant="wide"
      />
      <div className="rank-stack">
        <div className="rank-row">
          <b>1</b>
          <span>Front / Back Damage Boost</span>
          <em>Own bucket</em>
        </div>
        <div className="rank-row">
          <b>2</b>
          <span>Weapon Damage Boost ≈ Critical Damage Boost</span>
          <em>Own buckets</em>
        </div>
        <div className="rank-row">
          <b>3</b>
          <span>Damage Boost</span>
          <em>Shares a pile</em>
        </div>
        <div className="rank-row">
          <b>4</b>
          <span>Attack</span>
          <em>Two yellow Attack ≈ one yellow Boost</em>
        </div>
      </div>
      <Callout>
        Manastones, Soulstones, Theostones, and Potential do not ride a transfer. Do not dump Superior stones into a
        bridge Unique.
      </Callout>
      <p className="text-[var(--muted)]">
        Theostones socket one per weapon. Same gem does not stack. They proc on hit — damage or CC — and they are under
        1% of PvE. Until that changes, pick the glow you like.
      </p>

      <h3 id="potential" className="gear-sub">Potential</h3>
      <p className="text-[var(--muted)]">
        Weapons and accessories roll PvE Damage Boost. Armor rolls PvE Damage Tolerance. On Asia, a crafted piece
        already sits at max, and that value is nearly double the dungeon line on the same slot — which is why a craft
        weapon still wins a Potential’d Expedition piece there. Global crafted gear does not auto-unlock Potential, and
        the craft-versus-dungeon gap is unconfirmed. Dungeon pieces take Potential Stones, morphed from spare gear of
        the matching tier. Stars go 1★ to 5★, then a prestiged 1★. The line is lost on transfer.
      </p>
      <GuideShot
        src="/guide/potential-morph.webp"
        alt="Substance Morph turning spare gear into Potential Stones"
        variant="wide"
      />
    </>
  );
}

export function GearTransfer() {
  return (
    <>
      <h3 id="transfer" className="gear-sub">Transfer</h3>
      <p className="text-[var(--muted)]">
        Move enhance, Amp progress, and the soul sheet onto a better piece. The Philosopher’s extra line stays behind.
        Natural HP and similar locked lines stay behind. Read the red text on the confirm screen.
      </p>
      <GuideShot
        src="/guide/gear-transfer.webp"
        alt="Gear Transfer from a +20 Faded Shadow piece into Lava Heart greaves"
        variant="wide"
      />
      <ul className="gear-facts">
        <li>
          <strong>Weapon stone</strong>
          <span>20 fragments · 4 Heroics. Save these. Weapon first when you spend.</span>
        </li>
        <li>
          <strong>Armor stone</strong>
          <span>15 fragments · 3 Heroics. Same pool. Spend last.</span>
        </li>
        <li>
          <strong>Accessory stone</strong>
          <span>10 fragments · 2 Heroics. Morph Heroic gear → 5 fragments each.</span>
        </li>
        <li>
          <strong>Same-grade</strong>
          <span>1 stone of that grade. Unique → Unique, or Heroic → Heroic.</span>
        </li>
        <li>
          <strong>Unique → Heroic</strong>
          <span>1 Heroic stone + 5 Unique stones. The expensive click.</span>
        </li>
      </ul>
      <Callout tone="gold">
        Unique Transfer Stones cannot be upgraded into Heroic ones. Do not eat every Unique for fragments — item level
        on the scrap piece is the x1–x5 fragment yield. On current KR, skip transferring the first Heroic set (Ancient
        Spirit) and wait for the next (Faded Shadow) unless the patch changes that.
      </Callout>
    </>
  );
}

export function GearExtraSlots() {
  return (
    <>
      <h3 id="belt" className="gear-sub">Belt, amulet, runes</h3>
      <p className="text-[var(--muted)]">
        Belt and amulet come off the level 45 story. They do not eat normal Enhance Stones. Belt uses Noble Belt Enhance
        Scrolls from Strongholds. Amulet uses Fierce Battle Amulet Enhance Scrolls from feather turn-ins. +10, then
        morph the piece up a grade. Belt is defense. Amulet is offense.
      </p>
      <DataTable
        headers={["Slot", "How it grows", "Watch"]}
        rows={[
          ["Belt / Amulet", "Special scrolls, then morph after +10", "Story unlock. Not a week-one black hole"],
          [
            "Runes",
            "Smash two together plus Clash Rune Enhance Scrolls. Fail can destroy the piece",
            "The only slot that can blow up. Live endgame sits around +7",
          ],
          [
            "Pendant",
            "Later Chapter 1 / level 50 region. Unique Amp Stones plus Radiant Balaur’s Essence. +20, no Amp",
            "Not an October 5 slot. Ignore it until the client shows it",
          ],
        ]}
      />
      <p className="mt-3 text-[var(--muted)]">
        A rune starts at 0.5% Damage Boost, 0.5% Damage Tolerance, and 100 Penetration. Each level adds 0.5% and 50
        Penetration. Combat Speed is 1% at +6, then +1% a level. Multi-hit after +9 is still unconfirmed.
      </p>
    </>
  );
}

export function GearWingsCloset() {
  return (
    <>
      <h3 id="wings" className="gear-sub">Wings: equip vs owned</h3>
      <p className="text-[var(--muted)]">
        Equipped wings give Equip Effect. Every pair you own still gives Owned Effect. Enhance a pair to +10 to grow
        Owned Effect. At +0 the tooltip hides lines; +1 reveals the next one. Only the top Owned line and the last
        hidden line grow when you click.
      </p>
      <p className="mt-3 text-[var(--muted)]">
        Cash-shop skins still do not add stats. Equip Skin is transmog on the same panel. Some named KR wings will not
        be in the launch client — enhance what you can actually fly.
      </p>
      <GuideShot
        src="/guide/wings-effects.webp"
        alt="+10 Eroded Golden Wings showing Equip Effect and Owned Effect lists"
        variant="contain"
      />
      <p className="text-[var(--muted)]">
        Front / Back Attack Damage Boost sits in its own multiplicative bucket, which is why melee positional wings
        (and even some ranged sets) chase it. Sorcerer and Spiritmaster kits often ignore that bucket. Combat Speed and
        Weapon Damage Boost on Owned Effect are the other reasons to +10 a pair.
      </p>
      <GuideShot
        src="/guide/wing-enhance.webp"
        alt="Wing enhance screen showing only Flight Power and the last Owned line growing from +4 to +5"
        variant="contain"
      />
      <p className="text-[var(--muted)]">
        Only the first Owned line and the last hidden line grow. The middle Owned lines stay flat.
      </p>

      <h3 id="wing-pairs" className="gear-sub">Named pairs worth knowing</h3>
      <p className="text-[var(--muted)]">
        Alphabetical. Equip is the pair you wear. Owned is the collection bonus. In that Owned cell, Flight Power grows;
        the middle stats do not; the last name is the hidden line that unlocks and grows.
      </p>
      <DataTable
        className="gear-cards-table"
        headers={["Pair", "Equip", "Owned"]}
        rows={[
          ["Azure Flash", "Damage Boost, Accuracy, Block, Endurance", "Flight Power · Damage Boost, Block · Weapon Damage Boost"],
          ["Awaken Pride", "Max Attack, Back Crit, Back Attack Damage Boost, Penetration", "Flight Power · Attack Bonus, HP · Back Attack Damage Boost"],
          ["Blue Wave", "Evasion, Crit Resist, MP, MP regen", "Flight Power · Crit Resist, Back Crit Resist · PvE Damage Boost"],
          ["Brawler Wings (Abyss shop)", "Defense, status chance / resist, HP", "Flight Power · impact chance, Damage Tolerance · Weapon Damage Boost"],
          ["Dramata Nest", "PvE Attack / Defense / Accuracy, PvE Damage Boost", "Flight Power · Attack Bonus, Accuracy · Damage Boost"],
          ["Eroded", "Max Attack, Multi-hit, HP, Front Attack Damage Boost", "Flight Power · Front Attack, HP regen · Front Attack Damage Boost"],
          ["Forest Spirit", "Boss Attack, Defense, Damage Tolerance, Boss Damage Boost", "Flight Power · Damage Tolerance, Boss Attack · PvE Damage Boost"],
          ["Illusory Echo", "Max Attack, Crit, Penetration, Perfect", "Flight Power · Smite, Perfect · Max Attack"],
          ["Nightmare", "Attack Bonus, Accuracy, Crit, Boss Damage Boost", "Flight Power · Boss Attack, Boss Defense · Smite"],
          ["Salvation", "Crit, Penetration, Front Attack, Front Attack Damage Boost", "Flight Power · Front Defense, PvE Defense · Front Attack Damage Boost"],
          ["Talisra", "Attack Bonus, Defense, Accuracy, Cooldown Reduction", "Flight Power · Defense, Evasion · Attack Bonus"],
          ["Ultimate Daeva", "Defense, HP, MP, Penetration", "Flight Power · Penetration, Accuracy · Attack Bonus"],
        ]}
      />

      <h3 id="wing-meta" className="gear-sub">What KR is actually wearing</h3>
      <p className="text-[var(--muted)]">
        Parse share from aion2tool jobstats, KR as of August 21, 2026. Not a launch BiS list — some of these pairs will
        not exist on October 5, and Front / Back Boost may still get adjusted. Wear what the client gives you.
      </p>
      <DataTable
        headers={["Class", "Most worn", "Also"]}
        rows={[
          ["Assassin", "Talisra 58%", "Awaken Pride 30% (new, expected to overtake), Illusory Echo 3%"],
          ["Templar", "Eroded 77%", "Talisra 9%, Brawler Wings 3.5%"],
          ["Gladiator", "Eroded 73%", "Talisra 18.5%, Dark Veil 3.5%"],
          ["Ranger", "Eroded 54.5%", "Talisra 25.5%, Illusory Echo 6.5%"],
          ["Sorcerer", "Talisra 91.5%", "Eroded 5%, Brawler Wings 2.5%"],
          ["Spiritmaster", "Eroded 45%", "Talisra 43.5%, Brawler Wings 5.5%"],
          ["Cleric", "Eroded 45%", "Talisra 35%, Illusory Echo 9%"],
          ["Chanter", "Eroded 45%", "Talisra 23%, Awaken Pride 12.5%"],
        ]}
      />
      <Callout>
        Eroded is Front Attack Damage Boost in its own damage bucket, so even ranged has started stacking it. Sorcerer
        and Spiritmaster kits often do not use that bucket, which is why Sorcerer sits on Talisra (Cooldown Reduction)
        and Spiritmaster is split. Brawler is not a launch class — the KR row was Eroded 60% / Talisra 34.5%.
      </Callout>

      <h3 id="closet" className="gear-sub">Closet</h3>
      <p className="text-[var(--muted)]">
        Transmog is also a long horizontal stat. Unlocking more skins of a type raises a percent for that type —
        weapon skins raise Attack Increase on weapon attack. That percent rides Pure Attack, so it is real, just slow.
      </p>
      <GuideShot
        src="/guide/closet.webp"
        alt="Closet collection ring showing 48 percent of skins unlocked"
        variant="inline"
      />
    </>
  );
}

export function GearIdealLines() {
  return (
    <>
      <h3 id="soul-lines" className="gear-sub">Soul lines worth fishing</h3>
      <p className="text-[var(--muted)]">
        Order below is rarity, not raw damage. Fish the ~1% lines first. Weapon Damage Boost hits harder than Damage
        Boost, but Damage Boost is rarer on weapon / Guard, so you lock it when it appears. Same-grade Sync only.
        These pools are the global list.
      </p>
      <DataTable
        headers={["Slot", "Fish first (rarity)", "Then"]}
        rows={[
          ["Weapon / Guard", "Damage Boost ~2%", "Combat Speed and Weapon Damage Boost ~4%. Might and Multi-hit ~5%. Precision and Attack ~6%"],
          ["Helmet", "Smite ~1%, Attack Increase ~1%", "Attack ~4%, then Passives"],
          ["Cloak", "Smite, Attack Increase, Perfect ~1%", "Attack ~4%, then Passives"],
          ["Shoulders", "Smite ~1%", "Critical Damage Boost ~3%, Attack ~4%, then Passives"],
          ["Chest", "Perfect ~1%", "Damage Boost ~3%, Attack ~4%, then Passives"],
          ["Pants", "Attack Increase and Perfect ~1%", "Damage Tolerance ~3%, Attack ~4%, then Passives"],
          ["Gloves", "Perfect ~1%", "Combat Speed ~3%, Attack ~4%, then Passives"],
          ["Boots", "Perfect ~1%", "Move Speed ~3%, Attack ~4%, then Passives"],
          ["Necklace", "Combat Speed and Might ~2%", "Attack ~8%, then Passives. Accuracy ~6% if you are short of the cap"],
          ["Earrings", "Move Speed, Might, and Precision ~2%", "Attack ~8%, then Passives. Accuracy ~6% if you are short of the cap"],
          ["Rings", "Might and Precision ~2%", "Attack ~8%, then Active skills. This is how you push a key skill to 20"],
          ["Bracelet", "Illusion, Wisdom, Destruction, Time", "Justice, Space. Assassin may want Death over Space"],
          ["Brooch", "Might, Precision, Accuracy, Constitution", "Crit or Block as the filler"],
        ]}
      />
      <h3 id="acc-crit" className="gear-sub">Accuracy and Crit requirements</h3>
      <p className="text-[var(--muted)]">
        Raid bosses have Block and Crit Resist. These targets are the totals you need so hits land clean and Crit stays
        at the cap. Add PvE Accuracy and Block Penetration on top of the Main Stats page number — the sheet number
        alone will look lower than the values below. How the 80% cap actually works is on{" "}
        <Link href="/combat" className="text-[var(--gold-2)] underline-offset-2 hover:underline">
          Combat
        </Link>
        .
      </p>
      <DataTable
        headers={["Content", "Accuracy", "Crit"]}
        rows={[
          ["Ludra", "~1500", "~1600"],
          ["Corroded", "~2350", "~2500"],
          ["Muspel Normal", "Unknown", "Unknown"],
          ["Muspel Hard", "~2800", "~3150"],
        ]}
      />
      <p className="mt-3 text-sm text-[var(--muted)]">
        Approximate live KR raid doors, not a global week-one shopping list. The numbers drift as the content ages.
      </p>
    </>
  );
}
