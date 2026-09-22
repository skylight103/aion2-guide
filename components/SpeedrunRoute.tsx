import { DataTable } from "@/components/ui";
import { GuideShot } from "@/components/GuideShot";

const VIDEO = "https://youtu.be/IEUfONykrMI";

export function SpeedrunRoute() {
  return (
    <section className="mt-12">
      <h2 className="font-[family-name:var(--font-display)] text-3xl">1–45 story route</h2>
      <p className="mt-3 text-[var(--muted)]">
        Failure Guild’s Asmodian path through Altgard, from Safe Haven to the level-45 story. Their recorded run finished
        1–45 in 3 hours 21 minutes at 1051 item level. Use it on the character you are raising. The first three barracks
        characters still stop at the energy gate.
      </p>

      <a
        href={VIDEO}
        target="_blank"
        rel="noreferrer"
        className="mt-5 grid overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] sm:grid-cols-[240px_1fr]"
      >
        <img src="/guide/speedrun-video.jpg" alt="" className="h-44 w-full object-cover sm:h-full" />
        <span className="flex flex-col justify-center px-4 py-4">
          <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--gold)] uppercase">Recorded run</span>
          <span className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-tight">
            Nobody Has Leveled Faster in AION 2
          </span>
          <span className="mt-2 text-sm text-[var(--muted)]">
            Krix Domi · 1–45 in 3h 21m · 1051 item level · raw gameplay
          </span>
        </span>
      </a>

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Downtime priority</h3>
      <p className="mt-2 text-[var(--muted)]">Whenever you are waiting on a turn-in or a load, work this list in order.</p>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        <li>Weapons, to +5 and no higher.</li>
        <li>Accessories, to +5 and no higher.</li>
        <li>Daevanion.</li>
        <li>Skills. Upgrade the primary damage skills.</li>
        <li>Stigmas.</li>
        <li>Titles. Equip the best ones you have.</li>
        <li>Achievements. Claim finished ones for the stat and currency payouts.</li>
      </ol>

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">How to read the maps</h3>
      <DataTable
        headers={["Arrow", "Follow it for"]}
        rows={[
          ["Yellow", "Main story"],
          ["Green", "Side quests"],
          ["Orange", "Sealed Dungeons"],
          ["Black", "Kisks, the return points you set so later steps are a teleport"],
        ]}
      />

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Phase 1 · Levels 1–9</h3>
      <p className="mt-2">Follow the core story.</p>

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Phase 2 · Levels 10–16</h3>
      <p className="mt-2 font-medium">Part 1. Story push, then the sealed-dungeon detour.</p>
      <GuideShot
        variant="route"
        kicker="Levels 10–16 · part 1"
        src="/guide/speedrun-10-16-a.jpg"
        alt="Early Altgard. Yellow story arrows leave Safe Haven toward Nameless Cemetery and south. Orange arrows mark the sealed-dungeon detour by Quai Campsite, Dredgion Crash Site, and Calderon Canyon."
      />
      <p className="font-medium">Part 2. The first level-8 skills unlock on this stretch. Story, then the sealed dungeon.</p>
      <GuideShot
        variant="route"
        kicker="Levels 10–16 · part 2"
        src="/guide/speedrun-10-16-b.jpg"
        alt="Nameless Cemetery loop west of Safe Haven. Yellow arrows are the story, where the first level-8 skills unlock. The orange arrow south of the cemetery is the sealed dungeon."
      />

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Phase 3 · Levels 17–21</h3>
      <p className="mt-2 font-medium">Part 1. Safe Haven. Take every green quest and follow the path.</p>
      <GuideShot
        variant="route"
        kicker="Levels 17–21 · Safe Haven"
        src="/guide/speedrun-17-21-haven.jpg"
        alt="Green side-quest arrows out of Safe Haven, across Nameless Cemetery and Silent Hill, and east past Dredgion Crash Site. Yellow story arrows sit on Silent Hill and on the east edge."
      />
      <p className="font-medium">Part 2. Silent Hill. Story, and the four sealed dungeons on the way.</p>
      <GuideShot
        variant="route"
        kicker="Levels 17–21 · Silent Hill"
        src="/guide/speedrun-17-21-silent.jpg"
        alt="Silent Hill and Sanctum Outpost. Yellow story arrows, with the four sealed dungeons numbered 1 to 4, and orange arrows at Sanctum Outpost."
      />
      <p className="font-medium">Part 3. Safe Haven pickup.</p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        <li>Finish the quests. Equip the new accessories and take every one of them to +5.</li>
        <li>Recall, and turn in whatever is still waiting.</li>
        <li>Gear check: new accessories at +5, and the Smite title equipped.</li>
      </ul>
      <GuideShot
        variant="route"
        kicker="Levels 17–21 · return"
        src="/guide/speedrun-17-21-return.jpg"
        alt="Return path through Quai Campsite, Tranein Highland, and Calderon Canyon, back toward Safe Haven."
      />

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Phase 4 · Levels 22–32</h3>
      <p className="mt-2 font-medium">Part 1. Zone entry. Story and the sealed dungeons on the way. After arrow 15, take the Ascension quest. That one gives Stigmas.</p>
      <GuideShot
        variant="route"
        kicker="Levels 22–32 · arrows 1–19"
        src="/guide/speedrun-22-32-entry.jpg"
        alt="Moslan Forest, arrows 1 through 19. Arrow 15 is the Ascension quest that gives Stigmas. Orange arrows at 2–3 and 17–18 are sealed dungeons, the second pair beside Krao Cave. Arrow 19 ends at the purple town marker."
      />
      <p className="font-medium">Part 2. Story, and the last three sealed dungeons. There are no more sealed dungeons until 45.</p>
      <GuideShot
        variant="route"
        kicker="Levels 22–32 · last seals"
        src="/guide/speedrun-22-32-seals.jpg"
        alt="Story arrows from Nornir Assembly west through the last three sealed dungeons before level 45."
      />
      <p className="font-medium">Part 3. Stay on the story and set the kisks. They save the later stages.</p>
      <GuideShot
        variant="route"
        kicker="Levels 22–32 · kisks"
        src="/guide/speedrun-22-32-kisks.jpg"
        alt="Black kisk arrows numbered around Nornir Assembly, the forest to the west, Urugugu Canyon, and Battlescar Mound."
      />

      <p className="mt-2 font-medium">Part 4. Level 32, first rune. Start after the wings from Urugugu.</p>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        <li>Teleport to Nornir Assembly. On the left side, accept and finish the side quest Hugo Mercs pt.2.</li>
        <li>Teleport to Abandoned Site. Finish the local side quest. It gives Rune 1.</li>
        <li>Open inventory, socket Rune 1, and upgrade it to +1.</li>
      </ol>

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Phase 5 · Levels 33–45, second rune</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Story only. Take a green quest when it sits on the story path.</li>
        <li>
          After the 3rd Ascension, The One Who Dreams, take the green quest Hugo Mercs pt.3 in Briskwind Shelter. That
          one gives the second rune.
        </li>
        <li>Then stay on the story through 45.</li>
      </ul>

      <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Kisks on the way to 45</h3>
      <DataTable
        headers={["Story quest", "Set it when", "Kisk"]}
        rows={[
          ["Powder of Death", "After you kill 5 Insectoids and find 2 lost bags", "Amunta's Hideout"],
          [
            "Lake of Confrontation",
            "After Blades Supply Storage. Leave through the door and fly east into the fog",
            "Idun's Lake",
          ],
          ["An Ill Fate's Resolution", "Before you dive into the lake, fly over it", "Steel Hammer Temp. Trading Post"],
          [
            "Daybreak Society Rescue Operation",
            "After you talk to Nemon and he goes to distract the Black Claw soldiers",
            "Kumrica's Cellar",
          ],
          [
            "Daybreak Society Rescue Operation",
            "After the instance on top of the tree, when the quest says to talk to Nemon",
            "Impetusium Lower Path, to the south",
          ],
        ]}
      />

      <p className="mt-6 text-sm text-[var(--muted)]">
        Failure Guild, Level 1–45 Ultimate Speedrun Guide. Questions:{" "}
        <a className="underline decoration-[var(--line)] underline-offset-4" href="https://www.twitch.tv/krixew" target="_blank" rel="noreferrer">
          twitch.tv/krixew
        </a>
        {" · "}
        <a className="underline decoration-[var(--line)] underline-offset-4" href="https://www.twitch.tv/excalul" target="_blank" rel="noreferrer">
          twitch.tv/excalul
        </a>
        {" · "}
        <a className="underline decoration-[var(--line)] underline-offset-4" href="https://discord.com/invite/hQHZD6X5CS" target="_blank" rel="noreferrer">
          Discord
        </a>
        {" · "}
        <a
          className="underline decoration-[var(--line)] underline-offset-4"
          href="https://docs.google.com/document/d/1zfmmmebLIZ9BxHTQbhBIT7VKMMqncVzADf1K8NEtamA"
          target="_blank"
          rel="noreferrer"
        >
          the guide
        </a>
        .
      </p>
    </section>
  );
}
