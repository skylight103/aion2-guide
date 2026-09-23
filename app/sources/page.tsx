import { DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Sources and Confidence" };

export default function SourcesPage() {
  return (
    <>
      <PageHeader
        kicker="Reference"
        title="Sources and confidence"
        lede="Researched September 22, 2026. Primary weight goes to NC, Steam, and the official livestream UI. KR/TW explains systems, not global numbers."
      />
      <DataTable
        headers={["Source", "What it supports"]}
        rows={[
          ["Steam — AION 2", "PC launch, Windows client, current marketing copy, party-size marketing conflict"],
          [
            "NC June 5, 2026 Summer Game Fest",
            "Historical only: a September 2026 global window on Steam + PURPLE, NA / SA / EU / Asia, and 4-man dungeons / 8-man raids. Superseded by the October 5 date",
          ],
          [
            "NC July 8, 2026 monetization notice",
            "F2P, Kina, Quna, $15 Membership gates market + exchange",
          ],
          [
            "NC July 22, 2026 Founder's Pack notice",
            "Standard $24.99, Deluxe $49.99, Ultimate $99.99. One pack per account. Five days of Early Access from September 30",
          ],
          [
            "NC August 7, 2026 global livestream",
            "5-man dungeons, first raid 10, 10v10 stats normalized, PvP flag outside Abyss, four character slots, pet cap 5→3, five hubs with no region lock, 30-day Membership on every Founder pack, pack cosmetics stay off the shop",
          ],
          [
            "NC Gamescom ONL August 25, 2026",
            "Monday October 5 launch on PC (Steam + PURPLE) in NA / SA / EU / Asia. LST Sep 17–18. Founder's Early Access Sep 30–Oct 4",
          ],
          [
            "NC Launch Scale Test notice",
            "LST Sep 17–18 done. Wipe. Cap 37. Shop, Quna, and trade off. Steam: uninstall the playtest before Advanced Access. PURPLE: no extra step",
          ],
          ["Official livestream UI", "Cumulative Play Reward Adjustment table: 0–83 = 100% cube Kina, down to 20% at 147+"],
          ["NC Membership language", "Odyle Energy exists globally; members get more capacity and extra cube selections"],
          ["Current global coverage", "Eight-class launch roster. Brawler is KR/TW only"],
          [
            "NC May 2025 class list + Gamevu Oct 2025 EN class intros",
            "Eight names and roles. Spiritmaster (not Elementalist). Ranger is the later EN name for Marksman. Signature skills Gamevu named in English",
          ],
          [
            "NC March 25, 2026 stigma names",
            "Battlefield Banner, Fracturing Rush, Shadowstep, Supporting Fire, Hibernation, Command: Proxy, Reincarnating Touch, Barrier Spell",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Community systems guides</h2>
      <p className="text-[var(--muted)]">
        Used for how the client systems work (Amp, Soul Binding, Arcana, Daevanion, Pet Genus, damage buckets) and for
        the recorded 1–45 story path. Not a published NC global numbers sheet.
      </p>
      <DataTable
        headers={["Source", "What it supports", "What it does not prove"]}
        rows={[
          [
            "Kanon — AION 2 PvE systems guide (Google Doc, updated Sept 20, 2026)",
            "Gear layers (Amp, Bind / Sync / Reset, Manastone vs Soulstone, Theostone, Potential, transfer fragment costs), the Sept 20 global soul-line list, Pantheon pairs, launch 5-card Arcana, Daevanion board types, global Pet Genus targets, wings Equip vs Owned, Closet, Specialty perk ladder, damage buckets and the live formula",
            "October 5 item-level doors, 8-card Arcana, Chapter 1 pendant, named KR raid Accuracy/Crit caps as launch targets, Asia genus lines or Asia crafted-Potential as a global craft rule, or Brawler as a global class. The wings section was not part of the Sept 20 pass",
          ],
          [
            "Failure Guild — Level 1–45 Ultimate Speedrun Guide (KrixEW, Excalul)",
            "The Asmodian 1–45 story path on the week-one plan: downtime order, arrow legend, sealed-dungeon detours, kisk notes, and the level-32 and second-rune quests. Their recorded run is 3h 21m at 1051 item level",
            "An Elyos copy of the same arrows, or 3h 21m and 1051 item level as a launch result",
          ],
        ]}
      />
      <p className="mt-3 text-sm text-[var(--muted)]">
        <a href="https://docs.google.com/document/d/11u4wLCG1WfL-xSka2Aze0rI9vYRa7mq3N3Gp1bt0AWY" target="_blank" rel="noreferrer">
          Kanon’s Google Doc
        </a>
        {" · "}
        <a href="https://www.twitch.tv/kanonxo" target="_blank" rel="noreferrer">
          twitch.tv/kanonxo
        </a>
        {" · "}
        <a href="https://www.youtube.com/kanonxo" target="_blank" rel="noreferrer">
          youtube.com/kanonxo
        </a>
      </p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        <a href="https://youtu.be/IEUfONykrMI" target="_blank" rel="noreferrer">
          Failure Guild 1–45 run
        </a>
        {" · "}
        <a href="https://www.twitch.tv/krixew" target="_blank" rel="noreferrer">
          twitch.tv/krixew
        </a>
        {" · "}
        <a href="https://www.twitch.tv/excalul" target="_blank" rel="noreferrer">
          twitch.tv/excalul
        </a>
        {" · "}
        <a href="https://discord.com/invite/hQHZD6X5CS" target="_blank" rel="noreferrer">
          Discord
        </a>
        {" · "}
        <a href="https://docs.google.com/document/d/1zfmmmebLIZ9BxHTQbhBIT7VKMMqncVzADf1K8NEtamA" target="_blank" rel="noreferrer">
          the guide
        </a>
      </p>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">KR/TW used as systems, not gospel</h2>
      <DataTable
        headers={["Source", "What it supports", "What it does not prove"]}
        rows={[
          [
            "KR tistory (cvmaxlimbo) — Breeze Boutique (산들바람 상회) ~22–23",
            "Energy regen starts after that Breeze Boutique quest. Supply requests ~25",
            "Treat 22 as a published global unlock",
          ],
          [
            "KR May 13, 2026 notes",
            "Expedition charges 21, Transcendence 14, play-count ladder almost identical to the livestream table",
            "Promise those charge counts on global day one",
          ],
          [
            "KR Jan 28, 2026 notes",
            "Proof the play-count table moves in patches (Exploration used to be 7 / 14 / 20 / 21)",
            "Use the old Exploration table for launch week",
          ],
          [
            "KR later season notes",
            "Proof the ladder can shrink again (one season cut Expedition 100% down to 63)",
            "Plan opening week on a nerfed season-3 table",
          ],
          [
            "PixelNitro / U4N / BoostRoom alt guides",
            "Alts matter. Energy caps waste regen. Weekly crafts are per character",
            "35–45 farm brackets, 5–8 alt gold figures, named KR goldmine maps",
          ],
          [
            "NotMeter (notmeter.com) dungeon cache, generated Sept 19, 2026 23:03 UTC · Scoring v2 · pin 9c13dbd56489c717",
            "nDPS vs raw DPS, P75 class sort, sample rules (40 logs, trim 10%, one character = one sample, 200K CP-gap drop), Snowfield / Deus / Fallen Hard this-week (09-16→23) relative indexes (low→high bars), Musphel Recent 14 / All / older week only (no 09-16→23 weekly shard), combat-rate averages. Deus Assassin typical idx is 99. Pin generation 9c13dbd56489c717 only — do not mix with other cache gens",
            "A Global week-one DPS number, Brawler as a launch class, Snowfield / Muspel / Fallen as October 5 farms, Musphel as a this-week board, support raw as missing (it is omitted), or their CP-normalized Class Performance score (no A/B/C cells on this snapshot)",
          ],
          [
            "KR parse threads (Inven) and A2Power-style logs",
            "Early-September peak-vs-median read: Assassin ceiling, Ranger median. Kept as history",
            "A single exact DPS number for global launch. Later NotMeter nDPS on Snowfield of Sorrow supersedes that order",
          ],
          [
            "KR Sept 2–5, 2026 class notes",
            "Assassin Phantom Clone 90s + extra crit damage. Spiritmaster fusion PvE +20%. Ranger aimed-shot spec bump. Gladiator bugfixes. Sorcerer not in this pass",
            "Those numbers shipping on global day one",
          ],
          [
            "KR Daily Game / Inven March 18, 2026",
            "Combat Power (전투력) is an official character total, toggled next to item level. Doors still use item level. Buffs do not count",
            "Combat Power as a printed global day-one label",
          ],
          [
            "KR Gameple / official enhance UI (launch + later patches)",
            "Enhance and Breakthrough do not break the piece. Soul Imprint starts on first wear. Manastones on armor, Spirit Stones on jewelry. Alchemy upgrades stones",
            "A single +N stop that fits every slot on global day one",
          ],
          [
            "KR Season 3 press (GameToc) and succession guides",
            "Unique is a bridge. Hero is the target. Three Unique→Hero successions per season. Weapon and Guard first. Crafted Dragon Lord > Expedition on the same grade",
            "Those recipe names and Kina prices on October 5",
          ],
          [
            "KR May 2026 Muspel / Abyss notes",
            "Chalice of Muspel item level 4,500, Lava Heart weapon/Guard, brooch slot, wings enhance, Genesis / Nemesis Dragon Lord (창룡왕 / 멸룡왕) transfer-craft, High Commander (친위대장) Abyss rank",
            "Muspel as a week-one farm",
          ],
          [
            "KR Inven craft posts + Aion2Tool probability page",
            "PVE weapons finish on the bench. Combo makes Splendent (빛나는) pieces. Craft proficiency later raised to 70. Failed crafts go to supply requests",
            "A published global Professional 70 cap or named Orichalcum node map",
          ],
          [
            "Essence Extraction writeups (Fextralife / KR tistory)",
            "One gather skill. Three attempts per node. Specialty points cannot max every line. Odyle morphs into other mats. Reset ~50,000 Kina",
            "Treat January 2026 node lists as launch gospel",
          ],
          [
            "KR Gameple / Gamechosun Odyle Energy writeups",
            "F2P: 10 / 3 hours, cap 560. Membership (챈가룽, later folded into 콰이링): +50% regen and cap — 15 / 3 hours, cap 840. Weekly passive 560 vs 840 if you never sit full",
            "Those exact ticks on global day one",
          ],
          [
            "NC August 12, 2025 — AION2NIGHT combat taxonomy",
            "Solo: Nightmare, Seal / Sealed, Garrison, Awakening. Party: Expedition, Transcendence, Eradication, Sanctuary. PvP: Arena, Battlefield, Rift, Abyss. Casual: Daily Dungeon, Shugo Festa",
            "2025 party sizes (1–4 / 8) or Hunt / Eradication as a global launch pillar. KR Season 3 removed Eradication",
          ],
          [
            "NC March 25, 2026 class overhaul",
            "Perfect Shield Block / Perfect Parry. PvP and PvE damage calculations separated. Bound Kina vs regular Kina. Stigma expanded (KR: five slots)",
            "Those defensive names, slot counts, or coefficient values on global day one",
          ],
          [
            "Steam store page",
            "Chain skills. Precision, timing, and positioning. A fight is a decision, not a rotation",
            "A fixed global rotation or a published chain list",
          ],
          [
            "aion2.app skill tooltips (client strings)",
            "Stagger Gauge Damage, Stagger as a hit condition, Impact-type status, the Tenacity cleanse (Stun, Knockdown, Airborne, Grab, Frost, Fear), Enmity, Incapacitated Immunity procs, and NPC control often listed at 100% against a lower player chance",
            "A universal stagger-bar size, or one control duration for every skill",
          ],
          [
            "NC July 6, 2026 Chapter 1 notes",
            "KR moved Expedition / Transcendence to 5 and Sanctuary to 10. Expedition / Transcendence tickets removed; cubes spend Odyle Energy",
            "Print KR item-level doors or ticket-off as a published global rule",
          ],
          [
            "Gamevu August 2025 Fire Temple demo",
            "Door checks item level. Mid-bosses have an aggro circle. Final: dodge flames left / right. No auto-combat. Wings are farmed",
            "Aether Energy Cube tickets or 4-man size as October 5 facts",
          ],
          [
            "KR Inven January 28, 2026 notes",
            "Official Skill Macro started as Weak / Strong Attack cancel (평캔). Hold-to-run, delay steps, minimum 50 ms, more skills later. Skill reservation is a separate combat toggle",
            "A published global Skill Macro or reservation default",
          ],
          [
            "KR Inven class boards + aion2hub skill lists",
            "Weapons (sword+shield, greatsword, dagger, bow, spellbook, orb, mace+shield, staff). Cancel/reservation habits per class. Cleric unique ally rez vs Reincarnating Touch self-rez",
            "Those skill lists, slot counts, or heal math on October 5",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Maps</h2>
      <p className="text-[var(--muted)]">
        The week-one map page hosts Aion 2 Atlas parchment for Verteron / Altgard. Named hideouts, forts, most story
        camps, Empyrean Traces, Hidden Cubes, and Kibelisks use in-game marker coordinates from aion2-interactive-map
        (CC BY-NC 4.0), Y-flipped so they sit on this parchment (they line up with Atlas’s unlabeled sealed/fort dots
        to ~0.2%). Vendor desks sit on those same village / camp markers with small offsets. Gather nodes use aion2t
        client-extract GPS fitted to those licensed traces. We do not ship Atlas or interactivemap.app marker JSON.
      </p>
      <DataTable
        headers={["Source", "What it supports", "What it does not prove"]}
        rows={[
          [
            "aion2hub leveling hideout tables + monolith pages",
            "English sealed-dungeon names, recommended levels, KR first-clear tables, Hero-quest camp names, and the Verteron / Altgard monolith token ladder (560 Empyrean Traces to level 30)",
            "GPS, a published global teleporter list, or Altgard fort names",
          ],
          [
            "questlog.gg dungeon pages (type: seal)",
            "English name cross-check plus in-game seal flavor used on /map briefings (Cave of the Desperate, Karat's Nest, Marsh Library, and others)",
            "Week-one coordinate dumps or Eltnen / Morheim as October 5",
          ],
          [
            "Inven 주신의 흔적 (Nov 21, 2025)",
            "Feather collectible, village monolith turn-in, 560 per Elyos / Asmodian field, and the Wisdom Stone / Revelation Amulet Enhance Scroll / Hidden Cube key ladder",
            "October 5 GPS, or a roof-by-roof list we copied",
          ],
          [
            "aion2-interactive-map (github, CC BY-NC 4.0)",
            "Named in-game x/y for Verteron / Altgard seals, occupations, villages, teleports (Kibelisks), Hidden Cubes (118 / 108), and 560 monolith-material markers per world map (Empyrean Traces). types.yaml also names the gather subtypes (Odyle, Orichalcum Ore, Yggdrasil Log, gems, Aria, cooking mats). Official UT_Marker / Hidden Cube / Gather icons on /map come from the same extract. /map stores those as percents on the Atlas parchment (Y-flipped). Median 0.16% from Atlas’s unlabeled sealed/fort dots",
            "Gather-node GPS inside World_L_A / World_D_A (the YAML lists the types, not the dots), a license for commercial reuse, Eltnen / Morheim as week one, or NCSOFT GPS",
          ],
          [
            "interactivemap.app Verteron category list (UI only)",
            "Which Find layers exist and that craft benches are a two-town set (alchemy / armor / smith / cook / handicraft). Used as a gazetteer, not a coordinate dump",
            "A license to copy their marker JSON, icon pack, or 2,000+ gather-node dots. Pin art on /map is the in-game UT_Marker set, not their PNG rename",
          ],
          [
            "aion2atlas.com parchment maps (hosted on /map, Sep 9, 2026)",
            "Week-one geography art for Verteron / Altgard. Layer counts on their live map: Verteron 51 sealed / 10 forts, Altgard 59 sealed / 15 forts",
            "Named pins (their popups are often unlabeled), a license beyond citation, or October 5 GPS. Their ads and marker JSON stay theirs",
          ],
          [
            "aion2t.com map API (zones 2606 / 2611)",
            "Client-extract gather GPS (Odyle, Orichalcum, gems, herbs, cooking, logs, shellfish) and a second 560-trace set used only as control points. /map fits those lat/lng onto this parchment against the licensed traces (Y-flipped bbox; median ~0.14% of the island). Official UT_Marker_Gather art, including shellfish",
            "That Eltnen / Morheim / Chaotic Abyss or 114 Verteron “strongholds” are the week-one job, or a license to copy their UI",
          ],
          [
            "Fextralife Regions (Dec 2025)",
            "Flavor for Dawn Legion Base in Cantas Valley, Elun swamp, Artamia Canyon, Fugitive Village, Moslan / Nornir",
            "A current interactive map (their embed last edited Jan 2026) or classic Sanctum / Pandaemonium as AION 2 week-one hubs",
          ],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Known conflicts</h2>
      <DataTable
        headers={["Conflict", "Working read"]}
        rows={[
          ["Expedition party size 4 vs 5 / 10", "Unresolved. Jun SGF said 4 / 8. Livestream and Steam say 5 / 10. Plan 5, read the UI, sit one if the door says 4"],
          ["Livestream 0–83 vs KR May ≤84", "Nearly the same ladder, off by one. Prefer the livestream table. 84 is 80% there, 100% on the KR May notes"],
          ["Per-server play-count: realm vs barracks", "Plan as account-on-realm. Confirm the counter in-client"],
          ["Energy cap 560 vs 840, regen 10 vs 15 / 3 hours", "Same KR system, two wallets. F2P is 10 / 3 hours and cap 560. Membership is +50% (15 / 3 hours, cap 840). Global confirms more capacity; those exact ticks are unpublished"],
          ["Gladiator as DPS, bruiser, or off-tank", "Bruiser DPS. Templar is the main tank"],
          ['Some outlets still say "September launch"', "Jun 5, 2026 SGF window. Historical only. Launch is Monday October 5"],
          ["Atlas 10 Verteron forts vs aion2hub 13–14 named garrisons vs aion2t 100+", "Different layers. We pin the named aion2hub list on in-game marker spots. Atlas dots are unlabeled. aion2t is a KR dump, not week-one"],
        ]}
      />
      <p className="mt-8 text-[var(--muted)]">
        After October 5, open the in-game remaining-rewards panel and the Cumulative Play tooltip and treat those as
        the new source of truth. This site is a fan guide and is not affiliated with NC Corporation.
      </p>
      <p className="mt-4">
        <a href="https://store.steampowered.com/app/3393110/AION_2/" target="_blank" rel="noreferrer">
          AION 2 on Steam
        </a>
      </p>
      <NextLinks items={[{ href: "/map", label: "Week-one map" }, { href: "/alts", label: "Barracks and Energy" }, { href: "/", label: "Home" }]} />
    </>
  );
}
