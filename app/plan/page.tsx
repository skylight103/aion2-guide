import { SpeedrunRoute } from "@/components/SpeedrunRoute";
import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Week-One Plan" };

export default function PlanPage() {
  return (
    <>
      <PageHeader
        kicker="Start here"
        title="Week-one plan"
        lede="Hardcore opening week: unlock energy on the main, stand up three alts at the same gate, spend cubes inside the 100% Kina band, then push the real main."
      />
      <Callout tone="red">
        A single-character rush to 45 leaves the energy week on the table. Energy starts after the Breeze
        Boutique quest around 22. Unlock that gate, then raise the barracks.
      </Callout>

      <h2 className="font-[family-name:var(--font-display)] text-3xl">The loop</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        <li>Push the story on the character you are raising, on the Asmodian route below</li>
        <li>Stop at the Odyle Energy gate (~22–23, after the Breeze Boutique quest — confirm in-client)</li>
        <li>If this is still the first character, make the next alt and repeat until you have 1 + 3</li>
        <li>Spend capped cubes and energy on the highest clean reward, not open-world grind</li>
        <li>Watch weekly play-count. Stay in the 100% cube-Kina band</li>
        <li>Only then take the real main past the gate</li>
      </ol>
      <Callout tone="green">
        Founders can finish the 1+3 barracks during Early Access / Advanced Access. A single story character is slower on cubes.
      </Callout>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Phase order</h2>
      <p className="text-[var(--muted)]">
        Phases in order, not calendar days. Launch Scale Test is done and wiped. Early Access / Advanced Access
        characters live, but markets stay separate for a period.
      </p>
      <DataTable
        headers={["Phase", "Do this", "Do not"]}
        rows={[
          ["0 · Scale Test", "Done. Cap was 37. Shop, Quna, and trade were off. Steam: uninstall the playtest.", "Treat test characters as the barracks"],
          ["1 · First session", "Story, Ascension, binds. Same server and faction as the group.", "Side-quest full clears; +15 every green"],
          ["2 · Main to the gate", "Story-rush to ~22 on the route below. Sealed Dungeons only where the arrows send you.", "Open-world grind while story is still efficient"],
          ["3 · Confirm stamina", "Finish Breeze Boutique. Watch Odyle Energy start ticking.", "Dump the first bar into a hideout you outlevel tonight"],
          ["4 · Three alts", "Repeat the story rush on alt 1, 2, and 3. Same faction.", "Gear four characters. Alts need a rotation, not a set"],
          ["5 · Cube week", "Highest limited-reward instance each character can clear cleanly.", "Wipe an hour on a skull you barely enter"],
          ["6 · Play-count", "If the counter only moves when you clear, keep that mode inside 0–83. If it is already huge on login, alts do not fix Kina %.", "Ticket-spam into 20% Kina for 'more gold'"],
          ["7 · Real main", "Now push one character. Attack the real item-level gate.", "Buy hype market pieces four alts will replace"],
          ["8 · Before reset", "Spend leftover energy and charges. Inventory to the main.", "Leave weekly cubes unused while farming trash"],
        ]}
      />

      <SpeedrunRoute />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Session templates</h2>
      <DataTable
        headers={["Time", "Hardcore session"]}
        rows={[
          ["45 min", "One character: story to the next gate, or one cube spend if energy is capping"],
          ["90 min", "Finish one alt to the energy gate, or two cube clears on characters that are already online"],
          ["Founder evening", "Main to 22, start alt 1. Stop upgrades at +5"],
          ["Founder weekend", "Alts 2 and 3 to the gate. First real cube night on whatever is unlocked"],
          ["Reset night", "Sweep remaining charges. Check play-count before extras"],
        ]}
      />

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">First-session checklist</h2>
      <ul className="mt-3 space-y-2">
        {[
          "Steam or PURPLE installed, disk space checked",
          "Server + faction agreed with friends before character create",
          "Backup server written down",
          "Main class picked for the role you will actually play all month",
          "Three alt names reserved on the same server and faction",
          "Bind movement, defense, and flight combat",
          "Take Ascension / first wings as soon as the story offers it",
          "Know the Odyle Energy icon before you need it",
        ].map((item) => (
          <li key={item} className="rounded-xl border border-[var(--line)] px-4 py-3">
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-[family-name:var(--font-display)] text-3xl">Day-7 reset check</h2>
      <DataTable
        headers={["Check", "Ask", "Act"]}
        rows={[
          ["Barracks", "Do I have 1 main + 3 alts at the energy gate?", "If no, stop pushing the main and make the next alt"],
          ["Campaign", "Is a system still story-locked on the main?", "Finish the unlock first"],
          ["Item level", "What exact gate blocks the next dungeon?", "Replace the weakest slot on the main only"],
          ["Capped rewards", "Any daily/weekly left on any character?", "Spend the highest-value leftovers"],
          ["Play-count", "Where is this mode on the Kina table?", "Stop extras if you are already past 83"],
          ["Odyle Energy", "Any bar sitting capped?", "Spend on the current bottleneck pool"],
          ["Stigma", "Is one PvE setup on the main actually playable?", "Fund cores, not four alt boards"],
          ["Kina", "Did I buy gear that got replaced the same day?", "Tighten week-two budget"],
        ]}
      />
      <NextLinks items={[{ href: "/alts", label: "Barracks and Energy" }, { href: "/activities", label: "Activities" }]} />
    </>
  );
}
