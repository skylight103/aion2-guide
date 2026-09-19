import { Callout, DataTable } from "@/components/ui";
import { GuideShot } from "@/components/GuideShot";

export function CombatSkills() {
  return (
    <>
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Active, Passive, Stigma</h2>
      <p className="text-[var(--muted)]">
        Three skill types. Actives and Stigma unlock Specialty Perks as the level climbs. Passives do not. Wisdom Stones
        take an Active to 10 — leveling, Empyrean Traces, Nightmare and Shugo shops. Past 10 you need soul lines,
        Daevanion, and Arcana.
      </p>
      <p className="text-[var(--muted)]">
        You pick three Specialty Perks, but the slots open on a ladder. Equip the perk into an open slot — unlocking it
        is not the same as using it.
      </p>
      <div className="unlock-steps">
        <article className="unlock-card">
          <span className="unlock-lv">Level 8</span>
          <h3>First three</h3>
          <p>Three perk options. One slot.</p>
        </article>
        <article className="unlock-card">
          <span className="unlock-lv">Level 12</span>
          <h3>Fourth perk</h3>
          <p>Second slot opens.</p>
        </article>
        <article className="unlock-card">
          <span className="unlock-lv">Level 16</span>
          <h3>Fifth perk</h3>
          <p>Last option. Still two slots.</p>
        </article>
        <article className="unlock-card">
          <span className="unlock-lv">Level 20</span>
          <h3>Third slot</h3>
          <p>The build comes online.</p>
        </article>
      </div>
      <GuideShot
        src="/guide/specialty-perks.webp"
        alt="Specialty panel with two equipped perk slots and a third slot locked"
        variant="contain"
      />
      <Callout tone="gold">
        Global Arcana is expected to be thinner than current KR. Lock two key Actives toward 20 early — rings and the
        cards you actually have. Templar Judgment (심판) and Gladiator Overhead Slam (내려찍기) can be most of that
        class’s personal damage from a single button.
      </Callout>
      <DataTable
        headers={["Type", "How it levels", "Perk rule"]}
        rows={[
          [
            "Active",
            "Wisdom Stones to 10, then gear / Daevanion / Arcana",
            "Pick 3 Specialties. Slots at 8 / 12 / 20. Passives after the two L20 Actives",
          ],
          [
            "Passive",
            "Same stones and boards. No Specialty menu",
            "A lot of damage lives here. Live KR pushes key Passives into the mid-20s after Actives are 20",
          ],
          [
            "Stigma",
            "Stigma Shards to 20. Chapter 1 Superior shards to 25",
            "All unlocked perks apply — you do not pick three. KR live can equip up to six; global slot count unpublished",
          ],
        ]}
      />
      <p className="text-[var(--muted)]">
        Shards combine from Unstable Stigma Shards, or buy them with Abyss Points (Supply Request, dailies, weeklies,
        Abyss). One Superior shard drops for each Stigma you take to 20. Supports get gatekept without key Stigma levels
        — Undefeated Mantra, Light of Protection.
      </p>
    </>
  );
}

export function CombatArcana() {
  return (
    <>
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Arcana</h2>
      <p className="text-[var(--muted)]">
        Cards that give Pantheon stats plus skill or stat lines. Think of card types as slots and sets as set bonuses.
        Transcendence drops cards and Training Arcana. Smash extras or Training Arcana into the equipped card to level
        it to 5. Each level adds +1 to a random skill line on that card.
      </p>
      <GuideShot
        src="/guide/arcana-ring.webp"
        alt="Arcana screen with the Chalice card selected in a ring of ten card types"
        variant="contain"
      />
      <DataTable
        headers={["Card", "What it can roll"]}
        rows={[
          ["Chalice", "Pantheon + any Active or Passive"],
          ["Parchment", "Pantheon + half of your Actives"],
          ["Compass", "Pantheon + the other Actives"],
          ["Bell", "Pantheon + half of your Passives"],
          ["Mirror", "Pantheon + the other Passives"],
          ["Scale", "Pantheon + any skill. Double cost. Not a launch card"],
          ["Key / Dice", "Offensive stats. Later cards"],
          ["Hourglass / Lantern", "Defensive stats. Later cards"],
        ]}
      />
      <Callout tone="blue">
        Asia launched with five cards (Chalice through Mirror) and two sets: Primal Vigor and Magic Armor. Global is
        expected to start there. The 8-card Punishing Overture / Protected Soul spread is later KR. Scale is not launch.
      </Callout>
      <p className="text-[var(--muted)]">
        Feeding a card into a better one keeps some, not all, of the EXP. Same-type feed bonuses exist. Crafting via
        Transmute lets you pick the lines: crystals morph from Transcendence shards. Craft Chalice first — it has the
        widest pool. Sit on a cheap skill-to-20 set while you farm a four-line craft.
      </p>
      <DataTable
        headers={["Launch 5-card", "Pantheon to take", "Set"]}
        rows={[
          ["Chalice", "Time (Combat Speed)", "Primal Vigor"],
          ["Parchment", "Life", "Primal Vigor (2-piece: +60 PvE Attack at 70%+ HP)"],
          ["Compass", "Death", "Magic Armor"],
          ["Bell", "Destruction (Attack Increase)", "Magic Armor"],
          ["Mirror", "Wisdom (Smite)", "Magic Armor (2-piece: restore 1,500 MP at 20% MP, 30s)"],
        ]}
      />
      <p className="text-sm text-[var(--muted)]">
        Parchment and Compass can swap sets. Two Primal Vigor pieces pick up the 2-piece. Time, Destruction, and Wisdom
        are the three Pantheon lines that matter on this spread.
      </p>
    </>
  );
}

export function CombatDaevanionPets() {
  return (
    <>
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Daevanion boards</h2>
      <p className="text-[var(--muted)]">
        Eight boards. Walk out from the center. Respec is nearly free. Gray tiles are small stats, green are Passives or
        doubled stats, blue are Actives or percent stats, orange are the expensive edges.
      </p>
      <DataTable
        headers={["Board", "Points", "Take"]}
        rows={[
          [
            "Nezekan, Zikel, Vaizel, Triniel",
            "Shared. Cannot max all four",
            "Key Actives first so they hit 12 / 16 / 20. Then orange. Skip Multi-hit Resist and Crit Damage Tolerance in PvE — spend those steps on Attack Bonus grays instead",
          ],
          ["Ariel", "Own pool. Dungeon crystals", "PvE board. Orange is PvE Damage Boost / Tolerance"],
          ["Azphel", "Own pool", "PvP. Leave it for PvE"],
          [
            "Marchutan",
            "Own pool. Dungeon crystals, or 1:1 from Yustiel crystals",
            "Mid-game. Orange is Weapon Damage Boost. Weapon Damage Tolerance is worthless in PvE",
          ],
          ["Yustiel", "Own pool. Dungeon crystals", "Later board. Orange is Attack / Defense Increase"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Pet Genus</h2>
      <p className="text-[var(--muted)]">
        Five boards — Cogni, Fera, Natura, Varian, Special. Insight (the blue bar) is the board level. Push each to 10
        before you lock lines, then Analyze. Locking a line makes the next roll more expensive. Three presets.
      </p>
      <GuideShot
        src="/guide/pet-genus.webp"
        alt="Five Pet Genus boards: Cogni, Fera, Natura, Varian, and Special"
        variant="inline"
      />
      <DataTable
        headers={["Step", "Do this"]}
        rows={[
          [
            "1. Insight 10",
            "Do not lock anything until 10, unless a yellow+ Smite of about 1.5–2% lands. Smite can roll on line 3 from Insight 7 and line 9 from 9",
          ],
          [
            "2. Smite first",
            "Roll with nothing locked until lines 3 and 9 are Smite, even if the other lines look finished. 2% is a keeper. Unique is the floor on those Smite slots",
          ],
          [
            "3. The rest",
            "Lines 1 / 4 / 7: Boss Attack over Crit. Lines 2 / 5 / 8: Max Attack over Attack Bonus. Line 6: Damage Tolerance. Special board: Smite on 3 and 9, Tolerance on 6, Max Attack on the rest",
          ],
        ]}
      />
      <p className="text-[var(--muted)]">
        Pets also have Owned Effect: passive stats for unlocking and leveling more pets. Field kills and pet rewards fill
        that bar. The livestream pet cap (5 → 3) is still the launch roster rule — Genus is the board under those pets.
      </p>
    </>
  );
}

export function CombatStats() {
  return (
    <>
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">How damage is built</h2>
      <p className="text-[var(--muted)]">
        Stats sit in different buckets. The first 10% of a bucket that starts at 0 (Front / Back Boost) beats the first
        10% of a bucket that already starts high (Critical Damage starts at 50%). Diminishing returns get worse as KR
        stacks more of the same name. Global will have less of that pile, so early Boost still hits hard.
      </p>
      <div className="rank-stack">
        <div className="rank-row">
          <b>1</b>
          <span>Smite</span>
          <em>Double damage. Highest offensive stat</em>
        </div>
        <div className="rank-row">
          <b>2</b>
          <span>Front / Back Attack Damage Boost</span>
          <em>Own multiplier. Starts at 0%</em>
        </div>
        <div className="rank-row">
          <b>3</b>
          <span>Weapon Damage Boost</span>
          <em>Multiplies Pure Attack</em>
        </div>
        <div className="rank-row">
          <b>4</b>
          <span>Critical Damage Boost</span>
          <em>Starts at 50%. Class buffs lower the next 1%</em>
        </div>
        <div className="rank-row">
          <b>5</b>
          <span>Damage Boost</span>
          <em>Shares the pile with PvE / Boss / Species Boost</em>
        </div>
      </div>
      <p className="text-[var(--muted)]">
        Flat attack, in order: Attack (Pure) &gt; Max Attack (Pure) &gt; Attack Bonus (still inside Attack Increase) &gt;
        PvE / Boss Attack &gt; Front / Species / Critical Attack. The Attack number on the Main Stats page does not
        include Weapon Damage Boost — pull that line off Marchutan and the sheet Attack does not move.
      </p>
      <DataTable
        headers={["Stat", "What it actually does"]}
        rows={[
          ["Smite", "Chance to deal 2×. Bosses from Dying Dramata on have 30% Smite Resist. At ~80% sheet Smite the next 1% is about 0.6% DPS"],
          ["Perfect", "Forces the top of the weapon range, plus a small hidden bump on Pure Attack. About 0.1% DPS per 1%"],
          ["Multi-hit", "Chance for 1–4 extra hits at 5% damage each. Around 36–40% rate, 1% Multi-hit is about 0.33% damage. Placement in the formula is still being tested"],
          ["Power Shards", "Consumable damage. Regular about +4.65%. Superior about +8.9%. Slight dim from the PvE Attack bucket"],
          [
            "Accuracy vs Block / Parry",
            "1:1. If Accuracy covers Block, you do not miss. Parry caps at 80%, which takes about 1,200 difference. 100 Accuracy is roughly 6–7% toward that cap, with diminishing returns",
          ],
          ["Crit vs Crit Resist", "Same curve and 80% cap as Accuracy. Skill crit is additive — 70% sheet plus a 30% skill perk is 80%. Do not take a crit Specialty if the skill is already capped"],
          ["Defense / Penetration", "Penetration subtracts from Defense. PvE then knocks 10% of the remainder off the hit. PvP uses 1%. Penetration is a weak spend in PvE"],
          ["Damage Tolerance", "Direct counter to the matching Boost. Bosses do not have Front / Back, Weapon Boost, Crit, or Multi-hit — those Tolerances are junk in PvE"],
          ["Endurance", "Chance to take 50% damage. Only Endurance Penetration cancels it. Bosses do not have that, so the sheet percent is the real chance"],
          ["Combat Speed", "S-tier. Ping and FPS eat it. A 150–200 ms gap tested around 50–70% less damage, across the classes checked"],
        ]}
      />
      <GuideShot
        src="/guide/crit-curve.webp"
        alt="Critical hit chance curve approaching an 80 percent cap at about 1,200 net crit"
        variant="wide"
      />
      <p className="text-sm text-[var(--muted)]">
        Pure Attack is the unofficial name for the attack that Weapon Damage Boost actually multiplies: weapon, Guard,
        accessory attack, Attack lines, Manastone Attack, and Closet. Everything else is added later, after Attack
        Increase.
      </p>
      <pre className="formula-panel">{`[((Pure Attack × Weapon Damage Boost) × Multi-Hit × Power Shard) + Attack Bonus]
  × Attack Increase + PvE / Boss / Species / Front Attack
  × Skill coefficient
  − (Defense − Penetration) × 0.1   (0.01 in PvP)
  × (Damage Boost pile) × Crit Damage × Smite × Perfect
  × Front/Back Damage Boost × Skill additional damage`}</pre>
    </>
  );
}
