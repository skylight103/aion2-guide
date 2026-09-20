import { Callout, DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Essential Tips" };

export default function TipsPage() {
  return (
    <>
      <PageHeader
        kicker="Reference"
        title="Essential tips"
        lede="Most week-one regrets are social locks, a missing barracks, and resource panic, not class choice."
      />
      <Callout tone="red">Founder&apos;s Packs include 30 days of Membership. Launch Scale Test is done and wiped. KR/TW accounts cannot play here.</Callout>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ok)]">Do</h2>
          <DataTable
            headers={["#", "Do"]}
            rows={[
              ["1", "Agree server + faction + backup before login"],
              ["2", "Create together in the same 10–15 minutes"],
              ["3", "Bind flight combat on day 1"],
              ["4", "Take Ascension / wings immediately"],
              ["5", "Main Story to the energy gate, then make the next alt"],
              ["6", "Stand up 1 main + 3 alts before you chase 45"],
              ["7", "Weapon first on the main, unless you are dying"],
              ["8", "One Stigma PvE set on the main"],
              ["9", "Capped cubes before open-world"],
              ["10", "If play-count is personal, stay inside 0–83. If it is already huge, alts are for energy, not Kina %"],
              ["11", "Spend Odyle Energy before the bar caps"],
              ["12", "Join a guild that matches timezone and faction"],
              ["13", "Keep a Kina reserve on the main"],
              ["14", "Uninstall the Steam playtest before Early Access / Advanced Access. Launch Scale Test is done and wiped"],
            ]}
          />
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--danger)]">Do not</h2>
          <DataTable
            headers={["#", "Do not"]}
            rows={[
              ["1", "Pick a server because a streamer did"],
              ["2", "Main Brawler. It is not on the global eight"],
              ["3", "Reroll for a 3% parse"],
              ["4", "Deeply enhance leveling greens on four characters"],
              ["5", "Buy an entire AH starter set on day 2"],
              ["6", "Dump Quna into an unnamed problem"],
              ["7", "Ignore tank/healer if you hate queues"],
              ["8", "Spend enhance stones on Abyss revenge gear"],
              ["9", "Copy Season 3 KR farm routes blindly"],
              ["10", "Hoard energy for Conquest that does not exist yet"],
              ["11", "Ticket-spam cubes after play-count is already 20%"],
              ["12", "Buy gold. Ban beats BiS"],
              ["13", "Treat Membership as required to play"],
              ["14", "Leave weekly cubes unused on reset night"],
            ]}
          />
        </div>
      </div>
      <h2 className="mt-8 font-[family-name:var(--font-display)] text-3xl">Performance</h2>
      <p className="text-[var(--muted)]">
        Update GPU drivers. Cap FPS if cities stutter. Turn down shadows / crowds first. Pick the closest hub:
        US West, US East, Central Europe, South America, Japan. Recheck Steam for live specs.
      </p>
      <NextLinks items={[{ href: "/plan", label: "Week-One Plan" }, { href: "/alts", label: "Barracks and Energy" }]} />
    </>
  );
}
