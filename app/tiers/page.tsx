import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";
import { DifficultyChart } from "@/components/DifficultyChart";
import { DpsRanking } from "@/components/DpsRanking";
import {
  COMBAT_PROFILE,
  NOTMETER_CACHE_STAMP,
  NOTMETER_PIN_GEN,
  NOTMETER_RESEARCH_STAMP,
  NOTMETER_SCORING_PACK,
} from "@/lib/notmeter";

export const metadata = { title: "DPS Tier List and Difficulty" };

export default function TiersPage() {
  return (
    <>
      <PageHeader
        kicker="Play"
        title="DPS tier list and difficulty"
        lede={`NotMeter dungeon snapshot from ${NOTMETER_RESEARCH_STAMP}. This is not a Global week-one pick list. Role and difficulty first. The meter can move before launch. NC can retune.`}
      />
      <Callout tone="red">
        Snapshot: {NOTMETER_CACHE_STAMP} NotMeter cache · {NOTMETER_SCORING_PACK} · pin {NOTMETER_PIN_GEN}. Templar,
        Cleric, and Chanter are not DPS mains. Score them for difficulty and group value, not the parse. Brawler
        appears on the meter and is KR/TW only.
      </Callout>
      <h2 className="font-[family-name:var(--font-display)] text-3xl">Start here</h2>
      <DataTable
        headers={["If you need", "Pick", "Difficulty note"]}
        rows={[
          ["A tank", "Templar", "About 5 mechanics / high responsibility"],
          ["A healer", "Cleric", "About 6 mechanics / 8 responsibility; res on current notes"],
          ["Party buffs", "Chanter", "About 6.5. Does not replace Cleric"],
          ["Comfortable ranged DPS", "Spiritmaster or Ranger", "About 5 / 6.5"],
          ["Melee that lives", "Gladiator", "About 6"],
          ["Burst and PvP openers", "Assassin or Sorcerer", "About 9 / 8"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">How this meter ranks</h2>
      <p className="text-[var(--muted)]">
        <a href="https://notmeter.com/" target="_blank" rel="noreferrer">
          NotMeter
        </a>{" "}
        is a community dungeon meter. Use it for relative order, not a launch DPS target. The current ranker dungeon on
        this snapshot is Snowfield of Sorrow (Hard). Corrupted Deus Research Base (Hard) is the older high-volume farm.
        Fallen Deva Castle (Hard) is on the same this-week clock. Muspel’s Grail (Musphel on the meter) is not — it has
        no weekly shard for 09-16→23. None of these are week one. Bars are nDPS relative indexes, low → high.
      </p>
      <DataTable
        headers={["Rule", "What it means"]}
        rows={[
          [
            "nDPS, not raw",
            "Default class sort is party-buff-normalized DPS. A lucky Chanter stack no longer buys the screenshot. Raw DPS still exists — Assassin still holds the Snowfield raw max. Support raw is omitted on our board (not missing from the cache)",
          ],
          [
            "P75 default",
            "Classes sort by the top quartile, not the #1 log. Typical on our chart is P50. Peak is P90. Both are nDPS",
          ],
          [
            "Integer idx",
            "Typical and peak are nDPS versus the leader at that percentile on the same slice, rounded to the nearest integer (0.5 → up). Scoring v2 pin 9c13dbd56489c717. Deus Assassin typical is 99. Bars read left = min(typical, peak), right = max",
          ],
          [
            "Verified kills only",
            "Normal dungeons need a confirmed kill and five in party. If the party CP spread is 200K or more, the whole fight is dropped — 200K on the nose is dropped too",
          ],
          [
            "One character, one sample",
            "Latest 40 logs per character × dungeon × boss × class × 25K CP × period. Ten or more: trim the top and bottom 10%, mean the middle 80%. Under ten: median. All-time does not keep stacking every old log",
          ],
          [
            "Week clock",
            "Wednesday 05:00 KST. This week is 09-16→23. Musphel has no shard for that week — Sorc-led only on Recent 14 / All / the older 09-02→09 week",
          ],
          [
            "Ranker cosmetics",
            "800K+ CP. Dummy is website-only. Nightmare ranks by time, not DPS. Muspel’s Grail is excluded from ranker marks",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">PvE DPS ranking</h2>
      <p className="text-[var(--muted)]">
        Damage-first launch classes only. Content changes the order. On the current ranker dungeon, Sorcerer leads nDPS
        and Ranger is no longer the median king. On the older Deus farm, Assassin takes the peak back. Fallen this week
        is Assassin-led. Musphel is Sorc-led on Recent 14 / All / the older week, and it is not on the this-week strip.
        That split is the update. The September 5 class-care pass is not global.
      </p>
      <DpsRanking />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">What this board leaves out</h2>
      <DataTable
        headers={["Board", "Read it as"]}
        rows={[
          [
            "Training Dummy (1 min)",
            "Website ranking only. No live ranker mark. Gladiator looks much closer to Assassin here because the dummy does not walk. nDPS is omitted on the dummy — not missing. Do not pick a class from it",
          ],
          [
            "Nightmare",
            "Solo. Ranked by fight time, not DPS. Awakened Atheron stage 10 is the current timed board",
          ],
          [
            "Chanter / Templar / Cleric",
            "They show up on the meter. Support raw DPS is omitted here (not missing). Chanter’s personal nDPS sits near Gladiator once buffs are stripped. That does not make Chanter a DPS main, and it does not replace Cleric",
          ],
          [
            "Brawler",
            "On the meter, between Assassin and Gladiator on current Snowfield nDPS. Not on the October 5 roster",
          ],
          [
            "Musphel this week",
            "No weekly shard for 09-16→23. Dropped from the this-week strip. Sorc-led only on Recent 14 / All / week of 09-02→09",
          ],
          [
            "Class Performance score",
            "CP-normalized index (800K+, party gap 100K or less, share over 10%). 105 means about 5% above that class’s own median. This snapshot had no A/B/C cells published",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Combat profile</h2>
      <p className="text-[var(--muted)]">
        All-time DPS top 100 per class, one best log each, arithmetic mean of personal rates. Independent of the nDPS
        filter. Use it to see how the class hits, not how hard.
      </p>
      <DataTable
        headers={["Class", "Smite", "Perfect", "Crit", "Front", "Back"]}
        rows={COMBAT_PROFILE.map((row) => [...row])}
      />
      <p className="text-sm text-[var(--muted)]">
        Assassin is a back class. Gladiator is a front class. Ranger is mostly front. Sorcerer leaves many hits
        unpositioned. Spiritmaster can take rears when the fight allows it.
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Difficulty</h2>
      <DifficultyChart />
      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">PvP snapshot</h2>
      <DataTable
        headers={["If you want", "Look at", "Caveat"]}
        rows={[
          ["Stealth openers, 1v1 picks", "Assassin", "You lose if you miss the opener"],
          ["Fair duel bruiser", "Gladiator", "Ranged kites in open sky"],
          ["Open-world / rift roam", "Ranger, Assassin, Spiritmaster", "Pick fights; do not face-tank zergs"],
          ["Ranged burst", "Sorcerer, Ranger", "Sorc still pops if dived"],
          ["Organized group fights", "Templar, Cleric, Chanter", "These win wars, not parse screenshots"],
        ]}
      />
      <NextLinks items={[{ href: "/classes", label: "Classes" }, { href: "/roster", label: "Current Roster" }]} />
    </>
  );
}
