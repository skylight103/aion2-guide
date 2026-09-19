import { DataTable, NextLinks, PageHeader } from "@/components/ui";

export const metadata = { title: "Common Questions" };

const faqs = [
  ["Can I play with Korea / Taiwan friends?", "No. Different service since November 19, 2025."],
  ["When does it come out?", "October 5, 2026 on PC. Advance Access Sep 30–Oct 4. Scale Test Sep 17–18, wiped."],
  ["What time do servers open?", "Not published as of September 6, 2026."],
  ["Do I need a Founder's Pack?", "No. Gameplay is free on October 5. Founders use the five days to finish the barracks."],
  ["How many classes?", "Eight. Brawler is KR/TW only."],
  ["When does stamina / Odyle Energy start?", "KR tistory: after the Breeze Boutique (산들바람 상회) quest around 22–23. Confirm the bar in-client."],
  ["Why stop the main at 22?", "KR planning number: that is when energy starts ticking. Hours past that on one character are hours three other bars are not regenerating."],
  ["How many alts?", "Three. If weekly Expedition charges ship near 21, four characters reach 84 plays — last 100% cube on KR May ≤84, first 80% cube on the livestream table."],
  ["Is the play-count the whole server?", "The tooltip says per-server. A realm-wide 83 would die in an hour. Treat it as your barracks on that realm until the UI proves otherwise."],
  ["Do I save energy for later Conquest?", "Not in opening week. Those ladders are gated. Early cubes are the currency machine."],
  ["Do I need the $15 Membership?", "Not to play. Yes if you want AH and Quna↔Kina. KR also gives members +50% energy regen and cap (10→15 / 3 hours, 560→840) plus extra cube selections. Global confirms more capacity and cube selections; exact ticks unpublished."],
  ["Is there mobile or console?", "Not for this launch. Global is a PC client."],
  ["Can I change faction later?", "Do not plan on it. Pick with your friends."],
  ["What is the best class?", "No single best. Spiritmaster is the safest current PvE DPS read. Templar tanks. Cleric heals. Chanter supports."],
  ["Can Chanter replace Cleric?", "No. Chanter buffs. Cleric is the res/heal spine."],
  ["4-man or 5-man Expeditions?", "Official pages disagree. Plan 5, read the UI."],
  ["Is it P2W?", "Pay speeds the economy. Membership gates the market. Cash shop is framed as cosmetics + consumables."],
  ["Kina or Kinah?", "Official EN: Kina. Same gold pile."],
  ["Where are sealed dungeons / strongholds?", "Map pins named Verteron / Altgard hideouts and forts on the parchment from in-game marker data. Zoom in to read names."],
  ["What are Empyrean Traces?", "Field feathers. Turn them into that zone’s monolith for Wisdom Stones and Revelation Amulet Enhance Scrolls. Verteron and Altgard each have 560. Turn Traces on at /map and mark them found."],
];

export default function FaqPage() {
  return (
    <>
      <PageHeader kicker="Reference" title="Common questions" lede="Short answers first." />
      <DataTable headers={["Question", "Answer"]} rows={faqs} />
      <NextLinks items={[{ href: "/alts", label: "Barracks and Energy" }, { href: "/sources", label: "Sources" }]} />
    </>
  );
}
