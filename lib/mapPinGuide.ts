import { gatherMeta, gatherStretch } from "@/lib/mapGathers";
import { traceStretch } from "@/lib/mapTraces";
import { vendorKindMeta, type VendorKind } from "@/lib/mapVendors";
import {
  districtById,
  type MapFaction,
  type MapPin,
} from "@/lib/weekOneMap";

export type LootRow = {
  item: string;
  amount: string;
  note?: string;
};

export type PinGuide = {
  flavor: string;
  why: string;
  do: string;
  chips: string[];
  loot: LootRow[];
};

/** Canonical item names — used as chips so stops can be sorted by tag later. */
export const lootItem = {
  stones: "Enhance Stones",
  crystals: "Daevanion Crystals",
  belt: "Noble Belt Enhance Scroll",
  manastones: "Lesser Manastones",
  kina: "Kina",
  title: "Title",
  scrap: "Wing / statue scrap",
  safetyFirst: "Title: Safety First",
  featherdown: "Sealed Wing Featherdown",
  dayWings: "Day Illusion Wings scrap",
  nightWings: "Night Illusion Wings scrap",
  trace: "Empyrean Trace",
  wisdom: "Wisdom Stone",
  amulet: "Revelation Amulet Enhance Scroll",
  cubeKey: "Key: Hidden Cube",
  cube: "Hidden Cube",
} as const;

function stoneAmount(level: number | undefined, faction: MapFaction): string {
  if (!level) return "—";
  if (level <= 10) return "~500";
  if (level <= 15) return "~750";
  if (level <= 20) return "~1,000";
  if (level <= 25) return faction === "asmodian" ? "~1,500" : "~1,250";
  if (level <= 30) return "~1,500";
  if (level <= 35) return faction === "asmodian" ? "~2,000" : "~1,750";
  return faction === "asmodian" ? "~2,000" : "~1,750–2,000";
}

function hideoutLoot(pin: MapPin): LootRow[] {
  const extra = extraLootByName[pin.name] ?? [];
  return [
    { item: lootItem.stones, amount: stoneAmount(pin.level, pin.faction) },
    { item: lootItem.crystals, amount: "2" },
    { item: lootItem.kina, amount: "15,000" },
    { item: lootItem.title, amount: "1" },
    { item: lootItem.scrap, amount: "1" },
    ...extra,
  ];
}

function fortLoot(): LootRow[] {
  return [
    { item: lootItem.belt, amount: "1", note: "Belt +0 to +9" },
    { item: lootItem.kina, amount: "15,000" },
    { item: lootItem.manastones, amount: "3" },
  ];
}

const extraLootByName: Record<string, LootRow[]> = {
  "Warriors' Rest": [
    { item: lootItem.safetyFirst, amount: "1" },
    { item: lootItem.featherdown, amount: "1" },
    { item: lootItem.dayWings, amount: "1" },
    { item: lootItem.nightWings, amount: "1" },
  ],
};

const flavorByName: Record<string, string> = {
  "Ishtar Castle":
    "Elyos start. You wake as a prisoner in Poeta. The first Hero quest is Infiltrate Ishtar Castle — walk it, do not farm the island.",
  "Dawn Legion Forward Base":
    "First real camp after the escape. Hero steps through lv 3–9 park you here with Silvar, Eaetos, Arisel, Nania, and Caelid.",
  "Daminu Forest":
    "Lv 5 Hero beat: The Power in the Lake, then Fledgling Wings. Elyos Ascension — wings — happens here, not later.",
  "Dawn Legion Base":
    "Cantas hub. Lv 10 All Geared Up hands the starter set. Bind, vendors, Luteros's Empyrean Monolith, and the first hideout ring sit around this camp.",
  "Cantas Valley Base":
    "Lv 11 Bird's-eye View with Gabru. Story camp that looks over Cantas after you leave the Dawn Legion Base.",
  "Coastal Camp":
    "Lv 12 Valley of Hope and Soaring Free with Luteros and Nania. The story calls this the valley of hope; flight practice shows up here.",
  "Eastern Cantas Campsite":
    "Lv 14 Collapsed Barrier Tower. Rohin and Ione park the Hero line on the east side of Cantas.",
  "Marsh Outpost":
    "Lv 16 Awakened Hope with Hithanya. Elun swamp stretch — libraries and spirit hideouts sit around it.",
  "Verteron Fortress Ruins":
    "Lv 20 Fortress Ruins Infiltration with Cecilia. Story walk into the old fortress; several lv 20 seals sit under the same ruin.",
  "Dawn Legion Temporary Outpost":
    "Lv 22 Precious Minerals / Mutual Benefit. Bao and Caelid use this as a field desk before the mercenary chase.",
  "Wind Breeze Merchant HQ":
    "Lv 24 Mercenary Pursuit with Arin. Later Hero steps come back here around lv 32 (Uneasy Alliance).",
  "Astin Mercenaries Base":
    "Lv 24–25 Astin / Baison quests. End of the week-one Elyos story band before the Aullaeu / Fire Temple push.",

  "Poacher's Den":
    "Natural caves in the Cantas cliffs, taken over by poachers who work the valley.",
  "Mysterious Mushroom Cave":
    "A colony of giant mushrooms in Cantas — they grow taller than the trees and favor damp caves.",
  "Cave of the Desperate":
    "Where defeated Guardians hid from the Balaur. Holds records of the fight against the Ishtar Brigade.",
  "Lupyllini Habitat":
    "Secluded Cantas cave. Lupyllini nested here after bandits stashed loot — the beasts keep people out.",
  "Chilly Hideout":
    "A refuge used by people undergoing Sura mutation, trying (and failing) to reverse it.",
  "Spirit Flower Cave":
    "Hidden caves on the Ellun River. Spirit Flowers are rare now; groups occupy the caves and harvest them illegally.",
  "Cursed Hideout":
    "Sura — Daeva drained by the Balaur — hid here while they still had their minds. They did not stay sane.",
  "Filth Pit":
    "Contaminated Marsh cave, fouled by Nahid Brigade Fortress and the Drana Plantation. Waste hides Surana-experiment papers.",
  "Corrupted Spiritmaster's Residence":
    "Hide of Deios, a corrupted Spiritmaster researching dangerous magic to control Etheria's spirits.",
  "Looted Repository":
    "Old Verteron granary turned Balaur lair. Dratona captain Nagto has been pocketing the grain.",
  "Marsh Library":
    "Secret library built by Hypatia to keep Elyos knowledge, guarded by Kerubar. Rumors speak of Bulwark tomes.",
  "Akilo Thieves Den":
    "Thieves den on the Elun swamp / library stretch — the hideout, not the thieves forts.",
  "Deep Underground Cave":
    "A Creion experiment site, abandoned after a failure. They are known for picking dangerous caves.",
  "Anguish Hideout":
    "A cave where Daeva fleeing the Balaur hid and gathered strength for a counterattack.",
  "Bibliophile's Grave":
    "Grave archive on the marsh-library stretch, packed with the same Elun library walk as Marsh Library.",
  "Forest Library":
    "Library hideout on the Elun / forest edge. Sister stack to Marsh Library and Bibliophile's Grave.",
  "Distorted Cave":
    "A cave where a passage to the Abyss has opened. Holds information about the Ancient City of Roah.",
  "Karat's Nest":
    "After Verteron Fortress's Abyss Gate broke, Klaw from the Abyss settled the ruins. Queen Karat is expanding.",
  "Fortress Jail":
    "Jail under Verteron Fortress. Krall hold it now; Illusion Cavalier relics and writings are still inside.",
  "Fortress Grave":
    "Grave under or beside the fortress ruins. Same infiltration chapter as Jail and the basement.",
  "Hidden Ruins Altar":
    "Altar hidden in the fortress ruins. Path to the Altar / Illusion Oratory are later Hero steps — not this seal.",
  "Collapsed Fortress Basement":
    "Basement under the collapsed fortress. Last of the six ruin seals on Cecilia's walk.",
  "Hidden Valley":
    "A deep tectonic gorge. Suspicious people of unknown identity keep coming and going.",
  "Abandoned Odylium Cave":
    "Abandoned Odylium store on the temp-outpost stretch — not the later daily Odylium Repository.",
  "Solitary Rock Tomb":
    "Lone rock tomb near the Dawn Legion temporary desk.",
  "Cave Storage":
    "Storage cave on the temp-outpost field.",
  "Deadly Poison Den":
    "Deep Tolbas Forest cave. Poisonous plants and animals make it hard to reach.",
  "Herb Cave":
    "Herb cave on the temp-outpost / forest stretch, next to Deadly Poison Den.",
  "Red Dragon Altar":
    "Aullaeu altar to Dragon Lord Tiamat. They kept the worship after Ishtar rose.",
  "Wild Biruta Habitat":
    "Tolbas Forest cave. Biruta live in small family groups; Shugo prize their leaves.",
  "Fissure Cave":
    "Fissure hideout on the mercenary / Aullaeu stretch.",
  "Wild Kuru Habitat":
    "Kuru habitat on the Aullaeu stretch, next door to the Biruta cave.",
  "Aullaeu Oratory":
    "Aullaeu oratory. Illusion Oratory / Daeva in a Dream are Hero steps on this stretch — not this seal.",
  "Prison of Exiles":
    "Exile prison on the Aullaeu / mercenary band. Not Den of Exiles on the later Altgard list.",
  "Konutin's Cave":
    "Named cave on the mercenary stretch. Last of the week-one Elyos hideout tiers.",

  "Altar of Hope": "Canyon / altar hideout on the later Verteron campaign, after the Astin desk.",
  "Balaur Scouts Outpost": "Balaur scout hideout. Sabga Balaur Campsite on the fort layer is a different pin.",
  "Broken Danuar Mysticarium": "Broken Danuar mysticarium on the Fire Temple road.",
  "Canyon Library": "Canyon library — same Bulwark-library family as Marsh Library, later band. Not Canyon Thieves Den.",
  "Deep and Dark Pit": "Pit hideout on the later canyon / altar chapter.",
  "Experimental Prison Compound": "Experimental prison. Not Homish's Prison Compound and not the Azrakar story jail.",
  "Guardian's Armory": "Guardian armory hideout on the mid-game Verteron band.",
  "Kidnapper's Hold": "Kidnapper hold after the Astin week-one desk.",
  "Kius' Residence": "Named residence hideout on the later Verteron band.",
  "Klaw Den": "Klaw hideout at recommended 30. Karat's Nest was the lv 20 queen — this one is later.",
  "Kraka's Altar": "Altar hideout on the Aullaeu / Fire Temple stretch. Not Red Dragon Altar (lv 25).",
  "Looted Pilgrim's Rest": "Looted pilgrim rest. Looted Repository was the lv 15 granary.",
  "Renegade Base": "Renegade hideout. Renegade Hideout on the fort layer is the belt-scroll camp.",
  "Rift Cave": "Rift seal on the Elyos canyon band. Land of Rifts is an Asmodian Hero step, not this pin.",
  "Scribe's Room":
    "Believed to be part of Zumion Temple. Paper records weathered away; a few stone tablets remain.",
  "Targoth's Cave":
    "Mass burial for people killed by Meslamtaeda's poison. Targos ate the corpses, mutated, and took the cave.",
  "Balaur Scouts Campsite": "Balaur scout camp at recommended 35. Not the lv 30 Outpost, not the Sabga fort.",
  "Cave of the Defeated": "Cave of the defeated at recommended 35. Not Cave of the Desperate in Cantas.",
  "Dratona Outpost": "Dratona outpost hideout. Looted Repository was the lv 15 granary.",
  "Laborers Training Ground": "Laborer training ground on the later Verteron band.",
  "Dehinon's Hideout":
    "Hiding place of Dehinon — Daeva and not. He escaped a Nahid Brigade Sura conversion and is losing his mind here with his comrades.",
  "Grave of the Wrathful Dead": "Wrathful-dead grave. Not Fortress Grave under the lv 20 ruins.",
  "Illusionary Ruins": "Illusionary ruins — still Verteron, recommended 40.",
  "Krall Barracks": "Krall barracks hideout. Krall also hold Fortress Jail in week one — different instance.",
  "Plantation Storage": "Plantation storage. Not Filth Pit on the lv 15 Elun ring.",

  "Romlon's Hideout":
    "Romlon's camp on the Cantas stretch. The name says hideout — this pin is a fort.",
  "Forest Shade Execution Site":
    "Forest-shade fort on the Daminu / Cantas walk.",
  "Renegade Hideout":
    "Renegade camp. Fort rewards. Renegade Base is a different instance on the later hideout layer.",
  "Plateau Hill Base":
    "Fort on the Cantas plateau.",
  "Ugaros Thieves Campsite":
    "Thieves camp on the Elun / library stretch. Akilo Thieves Den is the hideout in this family.",
  "Poacher's Base":
    "Poacher camp beside Poacher's Den. The den is the cave; this is the fort.",
  "Gargos Thieves Campsite":
    "Thieves fort on the canyon side of Verteron.",
  "Canyon Thieves Den":
    "Thieves fort in the canyon. Canyon Library is the later hideout, not this pin.",
  "Cohta Outpost":
    "Named outpost fort on the eastern Verteron walk.",
  "Mantasch Patrol Base":
    "Patrol fort on the eastern stretch.",
  "Sehna Outpost":
    "Eastern outpost fort, near Maktashan.",
  "Sabga Balaur Campsite":
    "Balaur camp that still counts as a fort. Balaur Scouts Outpost and Campsite are hideouts.",
  "Maktashan Outpost":
    "Easternmost named Elyos fort on this map.",

  "Fafnir Fortress":
    "Asmodian start. Hero quest Ishalgen — Infiltrate Fafnir Fortress. Walk the prologue; do not farm it.",
  "Aldelle Village":
    "Fog village after the escape. Lv 2–6 Hero line: Andre, Ellin, Stellan, Pelleir. Shadow Forest and Isolated Lake run from here.",
  "Azrakar Brigade Camp":
    "Lv 7 Prison Compound Infiltration. Garlond and Anders send you at the brigade jail.",
  "Safe Haven":
    "Early Altgard bind / vendor hub. Lv 10 Survival Supplies and Gathering Essentials; Crash Site Rendezvous comes back here.",
  "Shadow Hall":
    "Story hub. Finding Nemon (lv 10) and the Empyrean Monolith (lv 16) both sit on this camp — turn Altgard feathers in here.",
  "Gravekeeper Camp":
    "Lv 14 Back on the Scent with Tagar. Cemetery / crematorium stretch — lv 15 seals cluster around the graves.",
  "Fang Hideout":
    "Lv 18–19 Menrik story camp (A New Lead / Broken Fang). A Hero camp — the nearby seals are separate instances.",
  "Elim's Rest":
    "Lv 21 In the Elims' Name with Nemon. Sacred-tree / Elim grove after the dumpsite stretch.",
  "Odar's Shade":
    "Lv 22 Verdant Melody and Daeva in a Dream. Elim grove next to Elim's Rest.",
  "Minushan Site":
    "Lv 24–25 stolen relics / Voice of Rage. End of the week-one Asmodian story band before Nornir.",
  "Nornir Assembly":
    "Lv 26 fate-sisters / Moslan gate (Urd, Varron). After the energy gate.",
  "Steel Hammer Workcamp":
    "Lv 35–37 canyon / Fafnite workcamp (Mannikiki, Crobakhi). After week one.",
  "Idun's Lake":
    "Lv 37 lake climax (An Ill Fate's Resolution). After week one.",

  "Abandoned One's Grave":
    "Early Altgard grave hideout around Safe Haven. First of the Haven grave ring.",
  "Dratona Cave":
    "Dratona cave on the Haven ring. Dratona Assembly Area is the later lv 30.",
  "Dusk Pit": "Pit hideout on the early Altgard graves / ruins ring.",
  "Hidden Vein Cave": "Vein cave around Safe Haven.",
  "Lost Ruins": "Lost ruins on the early Altgard stretch.",
  "Old Graveyard": "Old graveyard hideout near Safe Haven.",
  "Ossuary of the Noble": "Noble ossuary on the Haven grave ring.",
  "Poisonous Plant Habitat":
    "Poison-plant habitat around Shadow Hall / Watcher camps. Not Deadly Poison Den (Elyos lv 25).",
  "Smuggler's Cave": "Smuggler cave near Shadow Hall.",
  "Treasure Hunter's Residence": "Treasure-hunter residence on the Shadow Hall / Watcher stretch.",
  "Trickster's Den": "Trickster den near Shadow Hall.",
  "Valka's Nest": "Valka nest on the Watcher / Shadow Hall stretch.",
  "Watcher's Temporary Outpost":
    "Watcher field outpost. Creeping Shadow later uses Watcher's Tent — this pin is the lv 10 seal.",
  "Abandoned Archon Jail":
    "Abandoned Archon jail on the cemetery stretch. Not Azrakar's story jail.",
  "Bloodsoaked Confessional":
    "Confessional hideout by the neglected crematorium.",
  "Blue Dragon's Trap": "Blue-dragon trap on the cemetery / crypt stretch.",
  "Fafnite Storage Room":
    "Fafnite storage on the graveyard band. Steel Hammer / Lagta Fafnite are later story, not this cave.",
  "Fanatics' Den": "Fanatic den on the cemetery stretch.",
  "Fortuneteller's Grave": "Fortuneteller's grave. Pairs with Library of Foresight on this ring.",
  "Homish's Prison Compound":
    "Named prison compound on the graves band. A hideout, not the Azrakar brigade jail from the story.",
  "Howling Den": "Howling den on the cemetery stretch.",
  "Library of Foresight":
    "Foresight library on the graves band. Patience and Wisdom are later sisters.",
  "Prison of Oblivion": "Oblivion prison hideout. Not Prison of Exiles (Elyos lv 25).",
  "Victims' Cave": "Victims' cave on the crematorium stretch.",
  "Abandoned Memorial Room":
    "Memorial room on the Fang / dumpsite stretch. Fang Hideout next door is the Hero camp.",
  "Closed Hideout": "Closed hideout on the Fang / Sanctum dumpsite band.",
  "Destroyed Scriptorium": "Destroyed scriptorium near Fang.",
  "Lamnah Base": "Lamnah base on the dumpsite stretch. Imminent Threat is the Sanctum Dumpsite Hero step.",
  "Predator's Lair": "Predator lair on the Fang band.",
  "Unstable Cave": "Unstable cave near the dumpsite.",
  "Worshiper's Underground Cave": "Worshiper's underground cave on the Fang stretch.",
  "Dark Root Cave": "Dark-root cave in the Elim groves.",
  "Drana Depository": "Drana depository by Elim's Rest / Odar's Shade.",
  "High Priest's Ruins":
    "High-priest ruins in the Elim groves. The High Priest Slumbers is the later Nornir Hero quest — this seal is lv 25.",
  "Skurv Laborer Den": "Skurv laborer den on the Elim stretch.",
  "Twisted Pit": "Twisted pit in the Elim groves. Last of the week-one Asmodian hideout tiers.",

  "All-Curing Cave":
    "Healing-spring hideout. Contaminated Sacred Tree is the Hero step at Healing Spring — this instance is recommended 30.",
  "Dratona Assembly Area": "Dratona assembly. Dratona Cave was the lv 10 Haven pin.",
  "Final Haven": "Final Haven hideout. Safe Haven is the week-one bind.",
  "Insectoid Tunnel": "Insectoid tunnel on the later Altgard band.",
  "Library of Patience":
    "Secret library in Basfelt, built by Musein to keep Asmodian knowledge. Rumors of Bulwark tomes.",
  "Library of Wisdom": "Wisdom library. Sister to Patience — recommended 30.",
  "Rift Fissure": "Rift fissure. Land of Rifts around lv 29 is the Hero step; this seal is 30.",
  "Destruction Archons Armory":
    "Destruction Archon armory. Story walks those ruins in the mid-30s; this pin is the hideout.",
  "Empty Cave": "Empty cave on the later Altgard band.",
  "Fungie Habitat": "Fungie habitat. Not Mysterious Mushroom Cave (Elyos lv 10).",
  "Lonely Rock Chasm": "Lonely rock chasm. Not Solitary Rock Tomb (Elyos lv 25).",
  "Odylium Marauder Den":
    "Blades Odylium-marauder storage, locked down hard. Holds documents tied to Odylium. Not Abandoned Odylium Cave.",
  "Pirate's Treasure Storage": "Pirate treasure store on the later Altgard band.",
  "Place of Rest": "Place of rest. Warriors' Rest is the lv 40 Zikel sanctum.",
  "Rock Cave": "Rock cave on the canyon / workcamp band.",
  "Scale Altar": "Scale altar after Nornir.",
  "Shulak Cave":
    "Shulak cave. The Hero line parks at the Shulak Street Stall in the mid-30s.",
  "Ascetic's Cave":
    "Once an ascetic sanctuary. Reckless Jonas hid here with followers after fleeing the Blades.",
  "Den of Exiles": "Exile den. Not Prison of Exiles (Elyos lv 25). Still Altgard.",
  "Kumbahum's Cave": "Named cave on the later Altgard band.",
  "Lagta Fafnite Storage": "Lagta Fafnite storage. Fafnite Storage Room was lv 15; the story desk is Steel Hammer.",
  "Spider Cave": "Spider cave on the later Altgard band.",
  "Tayga Breeding Ground": "Tayga breeding ground on the later Altgard band.",
  "Warriors' Rest":
    "Sanctum where Destruction Archons sworn to Zikel rest. Rumored to hold relics tied to Zikel.",
};

const whyByName: Record<string, string> = {
  "Ishtar Castle": "Prologue island. This is not a farm.",
  "Dawn Legion Forward Base": "First real desk after Poeta. The lv 3–9 Hero line parks here.",
  "Daminu Forest": "Elyos wings are here, not at Dawn Legion Base.",
  "Dawn Legion Base":
    "Cantas bind, vendors, and the Verteron monolith. 560 Empyrean Traces on this map feed that pillar.",
  "Cantas Valley Base": "Overlook camp after you leave Dawn Legion Base.",
  "Coastal Camp": "Valley-of-hope desk. Daevanion opens at 12 — spend Cantas crystals here before you walk east.",
  "Eastern Cantas Campsite": "East Cantas desk. Lv 15 Elun hideouts unlock off this chapter, not another lap of Poacher's Den.",
  "Marsh Outpost": "Elun swamp desk. Libraries and spirit hideouts sit around Hithanya.",
  "Verteron Fortress Ruins": "Infiltration desk. The lv 20 seals are under this ruin, not a separate trip.",
  "Dawn Legion Temporary Outpost": "Field desk before the mercenary chase. Stigmas open at 23.",
  "Wind Breeze Merchant HQ": "Mercenary desk. Aullaeu lv 25 seals sit on this stretch; the story comes back around 32.",
  "Astin Mercenaries Base": "Last week-one Elyos desk. Aullaeu / Fire Temple is the next chapter.",

  "Poacher's Den": "Cantas lv 10 cave. Poacher's Base next door is the fort.",
  "Mysterious Mushroom Cave": "Giant-mushroom cave. Not Spirit Flower Cave on the Elun river.",
  "Cave of the Desperate": "Guardian records of the Ishtar Brigade. Not Cave of the Defeated on the later list.",
  "Lupyllini Habitat": "Cantas lv 10. Finish this ring before Coastal Camp.",
  "Chilly Hideout": "Last of the five Cantas lv 10 seals.",
  "Spirit Flower Cave": "Illegal Spirit Flower harvest on the Ellun River. Lv 15 — not the Cantas mushroom cave.",
  "Cursed Hideout": "Sura hideout on the marsh. Lv 15 Elun, not a Cantas cave.",
  "Filth Pit": "Contaminated marsh cave. Don't save it for the ruins chapter.",
  "Corrupted Spiritmaster's Residence": "Deios's hide. Elun lv 15, next to the libraries.",
  "Looted Repository": "Fort-style name, hideout instance. Nagto's granary, not a belt-scroll fort.",
  "Marsh Library": "One of three Elun libraries. Not Canyon Library on the later band.",
  "Akilo Thieves Den": "Hideout. Ugaros / Gargos / Canyon Thieves are the forts.",
  "Deep Underground Cave": "Abandoned Creion experiment site. Elun lv 15.",
  "Anguish Hideout": "Daeva counterattack cave. Elun lv 15 marsh ring.",
  "Bibliophile's Grave": "Grave archive — not a separate trip from the libraries.",
  "Forest Library": "Sister to Marsh Library on the forest edge.",
  "Distorted Cave": "Abyss passage with Roah notes. Recommended 20, not 15.",
  "Karat's Nest": "Queen Karat after the Abyss Gate broke. Klaw Den is the later seal.",
  "Fortress Jail": "Under the same ruin as Grave and the Basement. Not Krall Barracks (later).",
  "Fortress Grave": "Same ruin as the Jail. Don't run it at 15.",
  "Hidden Ruins Altar": "Path to the Altar / Illusion Oratory are later Hero steps — not this seal.",
  "Collapsed Fortress Basement": "Last of the six lv 20 ruin seals.",
  "Hidden Valley": "First lv 25 field seal around the Temporary Outpost.",
  "Abandoned Odylium Cave": "Field store — not the later daily Odylium Repository.",
  "Solitary Rock Tomb": "Lone tomb by the temporary desk.",
  "Cave Storage": "Storage cave on the temp-outpost field.",
  "Deadly Poison Den": "Deep Tolbas poison cave — hard to reach.",
  "Herb Cave": "Sits next to Deadly Poison Den on the forest stretch.",
  "Red Dragon Altar": "Tiamat altar on the mercenary stretch — not the lv 20 ruins.",
  "Wild Biruta Habitat": "Biruta family cave. Shugo prize the leaves.",
  "Fissure Cave": "Fissure on the mercenary / Aullaeu stretch.",
  "Wild Kuru Habitat": "Next door to the Biruta cave.",
  "Aullaeu Oratory": "Illusion Oratory / Daeva in a Dream are Hero steps — not this seal.",
  "Prison of Exiles": "Not Den of Exiles on the later Altgard list.",
  "Konutin's Cave": "Last of the week-one Elyos hideout tiers.",

  "Altar of Hope": "Canyon / altar hideout after the Astin desk.",
  "Balaur Scouts Outpost": "Scout hideout. Sabga Balaur Campsite is the fort.",
  "Broken Danuar Mysticarium": "Broken Danuar mysticarium on the Fire Temple road.",
  "Canyon Library": "Later sister to Marsh Library. Not Canyon Thieves Den.",
  "Deep and Dark Pit": "Pit hideout on the later canyon / altar chapter.",
  "Experimental Prison Compound": "Not Homish's Prison Compound and not the Azrakar story jail.",
  "Guardian's Armory": "Guardian armory on the mid-game Verteron band.",
  "Kidnapper's Hold": "After the Astin week-one desk.",
  "Kius' Residence": "Named residence on the later Verteron band.",
  "Klaw Den": "Karat's Nest was the lv 20 queen — this Klaw seal is later.",
  "Kraka's Altar": "Not Red Dragon Altar (lv 25).",
  "Looted Pilgrim's Rest": "Not Looted Repository, the lv 15 granary.",
  "Renegade Base": "Hideout. Renegade Hideout on the fort layer is the camp.",
  "Rift Cave": "Elyos canyon seal. Land of Rifts is an Asmodian Hero step.",
  "Scribe's Room": "Zumion Temple tablets. Paper records are gone.",
  "Targoth's Cave": "Targos mutated here after eating the poisoned dead.",
  "Balaur Scouts Campsite": "Not the lv 30 Outpost, not the Sabga fort.",
  "Cave of the Defeated": "Not Cave of the Desperate in Cantas.",
  "Dratona Outpost": "Looted Repository was the lv 15 granary.",
  "Laborers Training Ground": "After the Fire Temple push starts.",
  "Dehinon's Hideout": "Dehinon fled a Nahid Brigade Sura conversion and is losing his mind here.",
  "Grave of the Wrathful Dead": "Not Fortress Grave under the lv 20 ruins.",
  "Illusionary Ruins": "Still Verteron — recommended 40.",
  "Krall Barracks": "Krall also hold Fortress Jail in week one — different instance.",
  "Plantation Storage": "Not Filth Pit on the lv 15 Elun ring.",

  "Romlon's Hideout": "The name says hideout — this pin is a fort. Stones are in the seals.",
  "Forest Shade Execution Site": "Forest-shade fort on the Daminu / Cantas walk.",
  "Renegade Hideout": "Fort. Renegade Base is the later hideout.",
  "Plateau Hill Base": "Fort on the Cantas plateau.",
  "Ugaros Thieves Campsite": "Thieves fort. Akilo Thieves Den is the hideout.",
  "Poacher's Base": "Fort next to Poacher's Den. Den is the cave; this is the camp.",
  "Gargos Thieves Campsite": "Thieves fort on the canyon side of Verteron.",
  "Canyon Thieves Den": "Canyon fort, not Canyon Library.",
  "Cohta Outpost": "Named outpost fort on the eastern Verteron walk.",
  "Mantasch Patrol Base": "Patrol fort on the eastern stretch.",
  "Sehna Outpost": "Eastern outpost fort, near Maktashan.",
  "Sabga Balaur Campsite": "Balaur camp that still counts as a fort. Scout Outpost / Campsite are hideouts.",
  "Maktashan Outpost": "Easternmost named Elyos fort on this map.",

  "Fafnir Fortress": "Prologue fortress. This is not a farm.",
  "Aldelle Village": "Fog village after Ishalgen. Wings drop here at lv 6.",
  "Azrakar Brigade Camp": "Story jail. Homish's Prison Compound is a later hideout, not this desk.",
  "Safe Haven": "Early Altgard bind. Daevanion opens at 12. Haven seals are a different walk from Shadow Hall.",
  "Shadow Hall":
    "Nearby lv 10 seals are a different walk from the Haven graves. The Altgard monolith is the lv 16 callback — don't start it at 10. 560 Empyrean Traces on this map feed that pillar.",
  "Gravekeeper Camp": "Cemetery desk. The lv 15 seals cluster around Tagar's chapter.",
  "Fang Hideout": "Hero camp. The nearby lv 20 pins are instances, not this desk.",
  "Elim's Rest": "Elim grove desk. Stigmas open at 23. Grove seals are lv 25.",
  "Odar's Shade": "Grove next to Elim's Rest. Finish the lv 25 Elim seals before Minushan.",
  "Minushan Site": "Last week-one Asmodian desk. Nornir Assembly is lv 26.",
  "Nornir Assembly": "Fate-sisters desk after the energy gate.",
  "Steel Hammer Workcamp": "Fafnite desk after week one. Lagta Fafnite Storage is the lv 40 seal, not this camp.",
  "Idun's Lake": "Story climax after week one. Still Altgard.",

  "Abandoned One's Grave": "First of the Haven grave ring.",
  "Dratona Cave": "Haven lv 10. Dratona Assembly Area is the later pin.",
  "Dusk Pit": "Pit on the early Altgard graves / ruins ring.",
  "Hidden Vein Cave": "Vein cave around Safe Haven.",
  "Lost Ruins": "Lost ruins on the early Altgard stretch.",
  "Old Graveyard": "Haven graveyard. Finish this ring before Shadow Hall.",
  "Ossuary of the Noble": "Noble ossuary on the Haven grave ring.",
  "Poisonous Plant Habitat": "Shadow Hall ring — not Deadly Poison Den (Elyos lv 25).",
  "Smuggler's Cave": "Smuggler cave next to Shadow Hall.",
  "Treasure Hunter's Residence": "Watcher stretch, not the later Watcher's Tent desk.",
  "Trickster's Den": "Shadow Hall seal.",
  "Valka's Nest": "Watcher / Shadow Hall stretch.",
  "Watcher's Temporary Outpost": "This pin is the lv 10 seal. Watcher's Tent is a later Hero desk.",
  "Abandoned Archon Jail": "Cemetery lv 15. Not Azrakar's story jail.",
  "Bloodsoaked Confessional": "Crematorium hideout. Dead Men Tell No Tales is the Hero step next door.",
  "Blue Dragon's Trap": "Cemetery / crypt trap on Tagar's chapter.",
  "Fafnite Storage Room": "Steel Hammer / Lagta Fafnite are later story, not this cave.",
  "Fanatics' Den": "Fanatic den on the cemetery stretch.",
  "Fortuneteller's Grave": "Fortuneteller grave on the cemetery band.",
  "Homish's Prison Compound": "Hideout. Azrakar Brigade Camp is the lv 7 Hero jail.",
  "Howling Den": "Cemetery stretch, next to Victims' Cave.",
  "Library of Foresight": "Patience and Wisdom are later sisters. This one is lv 15.",
  "Prison of Oblivion": "Not Prison of Exiles (Elyos lv 25).",
  "Victims' Cave": "Buried Atrocities is the crypt Hero step — this pin is the seal.",
  "Abandoned Memorial Room": "Fang Hideout next door is the Hero camp — this pin is the instance.",
  "Closed Hideout": "Fang / dumpsite ring.",
  "Destroyed Scriptorium": "Scriptorium near Fang.",
  "Lamnah Base": "Dumpsite hideout. Imminent Threat is the Sanctum Dumpsite Hero step.",
  "Predator's Lair": "Fang-band lair.",
  "Unstable Cave": "Unstable cave near the dumpsite.",
  "Worshiper's Underground Cave": "Last of the Fang lv 20 ring before the groves.",
  "Dark Root Cave": "Elim grove lv 25. Finish the grove before Minushan.",
  "Drana Depository": "Drana store by Elim's Rest / Odar's Shade.",
  "High Priest's Ruins": "The High Priest Slumbers is the later Nornir Hero quest — this seal is lv 25.",
  "Skurv Laborer Den": "Skurv den on the Elim stretch.",
  "Twisted Pit": "Last week-one Asmodian hideout. Nornir is later.",

  "All-Curing Cave": "Contaminated Sacred Tree is the Hero step — this pin is the instance.",
  "Dratona Assembly Area": "Dratona Cave was the lv 10 Haven pin.",
  "Final Haven": "Hideout. Safe Haven is the week-one bind.",
  "Insectoid Tunnel": "After Nornir, on the later Altgard band.",
  "Library of Patience": "Sister to Foresight (lv 15) and Wisdom. Recommended 30.",
  "Library of Wisdom": "Sister to Patience. Recommended 30.",
  "Rift Fissure": "Land of Rifts (lv 29 Hero) is the story step; this seal is 30.",
  "Destruction Archons Armory": "Story walks those ruins in the mid-30s; this pin is the hideout.",
  "Empty Cave": "Later Altgard band. Recommended 35.",
  "Fungie Habitat": "Not Mysterious Mushroom Cave (Elyos lv 10).",
  "Lonely Rock Chasm": "Not Solitary Rock Tomb (Elyos lv 25).",
  "Odylium Marauder Den": "Not Abandoned Odylium Cave (Elyos lv 25).",
  "Pirate's Treasure Storage": "Later Altgard band. Recommended 35.",
  "Place of Rest": "Warriors' Rest is the lv 40 Zikel sanctum.",
  "Rock Cave": "Canyon / workcamp band. Recommended 35.",
  "Scale Altar": "After Nornir. Recommended 35.",
  "Shulak Cave": "Hero parks at the Shulak Street Stall in the mid-30s.",
  "Ascetic's Cave": "Jonas hid here after fleeing the Blades.",
  "Den of Exiles": "Not Prison of Exiles (Elyos lv 25). Still Altgard.",
  "Kumbahum's Cave": "Named cave on the later Altgard band.",
  "Lagta Fafnite Storage": "Fafnite Storage Room was lv 15; the story desk is Steel Hammer.",
  "Spider Cave": "Later Altgard band. Recommended 40.",
  "Tayga Breeding Ground": "Later Altgard band. Recommended 40.",
  "Warriors' Rest":
    "Zikel's Destruction Archon sanctum. The Safety First title and the Illusion Wings scraps are unique to this pin.",
};

const doByName: Record<string, string> = {
  "Ishtar Castle":
    "Run Infiltrate Ishtar Castle and walk out. Next desk is Dawn Legion Forward Base.",
  "Dawn Legion Forward Base":
    "Run the lv 3–9 Hero line here. When Withered Tree Daminu sends you, take Fledgling Wings immediately.",
  "Daminu Forest":
    "The Power in the Lake with Daminu, then Fledgling Wings with Asahr. Come back to Nania at the Forward Base.",
  "Dawn Legion Base":
    "All Geared Up with Nania. Odyle Collection with Kaidros next. Empyrean Monolith with Luteros is the lv 16 callback — don't start it at 10. Turn Verteron feathers in at that pillar.",
  "Cantas Valley Base":
    "Bird's-eye View with Gabru. If the five Cantas Exploration quests are still in the log, clear them before you walk east.",
  "Coastal Camp":
    "Valley of Hope and Soaring Free with Luteros and Nania.",
  "Eastern Cantas Campsite":
    "Collapsed Barrier Tower with Rohin, then Rampaging Spirits and Beyond Etheria with Ione.",
  "Marsh Outpost":
    "Awakened Hope with Hithanya. Empyrean Monolith sends you back to Luteros at Dawn Legion Base.",
  "Verteron Fortress Ruins":
    "Fortress Ruins Infiltration with Cecilia. Transformation Prep is the desk in front of the ruins, not this camp.",
  "Dawn Legion Temporary Outpost":
    "Precious Minerals and Mutual Benefit with Bao and Caelid. Slot Stigmas before the mercenary chase.",
  "Wind Breeze Merchant HQ":
    "Mercenary Pursuit with Arin.",
  "Astin Mercenaries Base":
    "Weapon's Owner with Astin, then Best Served Cold and Hidden Scheme with Baison.",

  "Poacher's Den":
    "Clear it with Mysterious Mushroom Cave, Cave of the Desperate, Lupyllini Habitat, and Chilly Hideout.",
  "Mysterious Mushroom Cave":
    "Run it with the other four Cantas lv 10 seals.",
  "Cave of the Desperate":
    "Run it with the other four Cantas lv 10 seals.",
  "Lupyllini Habitat":
    "Walk it with Chilly Hideout, then head to Coastal Camp.",
  "Chilly Hideout":
    "Close the Cantas ring, then wait for the lv 15 Elun seals — don't start Spirit Flower Cave yet.",
  "Spirit Flower Cave":
    "Hit Cursed Hideout and Filth Pit on the same marsh walk.",
  "Cursed Hideout":
    "Same walk as Filth Pit and Spirit Flower Cave.",
  "Filth Pit":
    "Same walk as Cursed Hideout and Spirit Flower Cave.",
  "Corrupted Spiritmaster's Residence":
    "Clear it while you are on the Marsh Library walk.",
  "Looted Repository":
    "Clear it with the Elun lv 15 ring.",
  "Marsh Library":
    "Do Forest Library and Bibliophile's Grave on the same Elun pass.",
  "Akilo Thieves Den":
    "Clear it on the Elun library walk.",
  "Deep Underground Cave":
    "Clear it with the library stretch.",
  "Anguish Hideout":
    "Clear it with the rest of the marsh seals.",
  "Bibliophile's Grave":
    "Run it with Marsh Library and Forest Library.",
  "Forest Library":
    "When this ring is done, Empyrean Monolith sends you back to Luteros at Dawn Legion Base.",
  "Distorted Cave":
    "Open it during Cecilia's Fortress Ruins Infiltration.",
  "Karat's Nest":
    "Clear it with Cecilia's lv 20 infiltration.",
  "Fortress Jail":
    "Clear it with Fortress Grave and the Collapsed Basement during the infiltration.",
  "Fortress Grave":
    "Clear it with the Jail and the Basement during Cecilia's chapter.",
  "Hidden Ruins Altar":
    "Clear it with the other five lv 20 ruin seals.",
  "Collapsed Fortress Basement":
    "Finish the ruin ring, then walk to the Temporary Outpost.",
  "Hidden Valley":
    "Pair with Herb Cave and Solitary Rock Tomb around the Temporary Outpost.",
  "Abandoned Odylium Cave":
    "Clear it with the temp-outpost lv 25 ring.",
  "Solitary Rock Tomb":
    "Same walk as Hidden Valley and Herb Cave.",
  "Cave Storage":
    "Same walk as Hidden Valley and Solitary Rock Tomb.",
  "Deadly Poison Den":
    "Do Herb Cave on the same pass.",
  "Herb Cave":
    "Do Deadly Poison Den before you leave the Temporary Outpost.",
  "Red Dragon Altar":
    "Clear it with the Aullaeu lv 25 ring from Wind Breeze.",
  "Wild Biruta Habitat":
    "Do Wild Kuru Habitat on the same Aullaeu walk.",
  "Fissure Cave":
    "Same circuit as Red Dragon Altar.",
  "Wild Kuru Habitat":
    "Do Wild Biruta Habitat on the same Aullaeu walk.",
  "Aullaeu Oratory":
    "Clear it with the mercenary lv 25 ring.",
  "Prison of Exiles":
    "Last week-one Elyos cluster — run it with Konutin's Cave.",
  "Konutin's Cave":
    "Finish this ring, then leave the recommended-30 Verteron seals.",

  "Altar of Hope": "Come back at 30 with the canyon / altar chapter.",
  "Balaur Scouts Outpost": "Come back at 30 on the scout stretch.",
  "Broken Danuar Mysticarium": "Come back at 30.",
  "Canyon Library": "Come back at 30 with the later library band.",
  "Deep and Dark Pit": "Come back at 30 with the canyon chapter.",
  "Experimental Prison Compound": "Come back at 30.",
  "Guardian's Armory": "Come back at 30 after Astin.",
  "Kidnapper's Hold": "Come back at 30 after Astin.",
  "Kius' Residence": "Come back at 30.",
  "Klaw Den": "Come back at 30 — after Karat's Nest.",
  "Kraka's Altar": "Come back at 30 on the Aullaeu / Fire Temple stretch.",
  "Looted Pilgrim's Rest": "Come back at 30.",
  "Renegade Base": "Come back at 30.",
  "Rift Cave": "Come back at 30 on the Elyos canyon band.",
  "Scribe's Room": "Come back at 30 with Zumion / Fire Temple.",
  "Targoth's Cave": "Come back at 30 after Astin.",
  "Balaur Scouts Campsite": "Come back at 35.",
  "Cave of the Defeated": "Come back at 35.",
  "Dratona Outpost": "Come back at 35.",
  "Laborers Training Ground": "Come back at 35.",
  "Dehinon's Hideout": "Come back at 40.",
  "Grave of the Wrathful Dead": "Come back at 40.",
  "Illusionary Ruins": "Come back at 40.",
  "Krall Barracks": "Come back at 40.",
  "Plantation Storage": "Come back at 40.",

  "Romlon's Hideout": "Grab it on the Cantas lv 10 walk.",
  "Forest Shade Execution Site": "Grab it when the Hero line is already on the Daminu ridge.",
  "Renegade Hideout": "Grab it when you pass this camp.",
  "Plateau Hill Base": "Grab it if you walk the Cantas ridge.",
  "Ugaros Thieves Campsite": "Grab it on the Elun stretch.",
  "Poacher's Base": "Do it with Poacher's Den on the same Cantas circuit.",
  "Gargos Thieves Campsite": "Grab Canyon Thieves Den if you are already in the canyon.",
  "Canyon Thieves Den": "Grab it on the canyon walk.",
  "Cohta Outpost": "Grab it when the Hero line is already east.",
  "Mantasch Patrol Base": "Grab it when you pass the seals around it.",
  "Sehna Outpost": "Grab it with Maktashan if you are already east.",
  "Sabga Balaur Campsite": "Grab it when you pass this camp.",
  "Maktashan Outpost": "Grab it on the eastern walk if you skipped the other forts.",

  "Fafnir Fortress":
    "Run Ishalgen — Infiltrate Fafnir Fortress and leave. Next desk is Aldelle Village.",
  "Aldelle Village":
    "Spread Your Wings at lv 6 with Asahr — take it the moment it drops. Then walk to Azrakar.",
  "Azrakar Brigade Camp":
    "Prison Compound Infiltration Plan with Garlond, then the operation with Anders at the jail door.",
  "Safe Haven":
    "Survival Supplies with Hans, Gathering Essentials with VeKauf.",
  "Shadow Hall":
    "Finding Nemon here. Turn Altgard Empyrean Traces in at the monolith on this camp — the lv 16 callback, not a lv 10 farm.",
  "Gravekeeper Camp":
    "Back on the Scent with Tagar. Dead Men Tell No Tales is at the Neglected Crematorium.",
  "Fang Hideout":
    "A New Lead and Broken Fang with Menrik. Imminent Threat is at Sanctum Dumpsite.",
  "Elim's Rest":
    "In the Elims' Name with Nemon. Children of the Elim is at the Collapsed Chasm just before. Slot Stigmas here.",
  "Odar's Shade":
    "Verdant Melody, Daeva in a Dream, Disturbed Balance with Nemon and Ecco.",
  "Minushan Site":
    "Finding Stolen Relics with Hadala, Voice of Rage with Gohok.",
  "Nornir Assembly":
    "The High Priest Slumbers and Striving for Coexistence with Urd.",
  "Steel Hammer Workcamp":
    "Powder of Death, Frozen Fafnite, Inevitable Encounter (Mannikiki, Crobakhi).",
  "Idun's Lake":
    "An Ill Fate's Resolution / Mirror of Greed on the cliff.",

  "Abandoned One's Grave":
    "Run Old Graveyard and Ossuary of the Noble on the same pass.",
  "Dratona Cave":
    "Clear it with the Haven grave ring.",
  "Dusk Pit":
    "Same pass as Hidden Vein Cave and Lost Ruins.",
  "Hidden Vein Cave":
    "Same pass as Dusk Pit and Lost Ruins.",
  "Lost Ruins":
    "Same pass as Dusk Pit and Hidden Vein Cave.",
  "Old Graveyard":
    "Close the Haven graves, then walk to Shadow Hall.",
  "Ossuary of the Noble":
    "Finish the Haven lv 10 seals before you chase Shadow Hall's set.",
  "Poisonous Plant Habitat":
    "Clear it with the other Shadow Hall lv 10 seals.",
  "Smuggler's Cave":
    "Do Trickster's Den and Valka's Nest on the same walk.",
  "Treasure Hunter's Residence":
    "Do Watcher's Temporary Outpost on the same walk.",
  "Trickster's Den":
    "Do Smuggler's Cave on the same walk.",
  "Valka's Nest":
    "Do Smuggler's Cave on the Watcher walk.",
  "Watcher's Temporary Outpost":
    "Clear the seal now. Creeping Shadow later uses Watcher's Tent.",
  "Abandoned Archon Jail":
    "Clear it with Tagar's cemetery chapter.",
  "Bloodsoaked Confessional":
    "Clear it while you are at the crematorium.",
  "Blue Dragon's Trap":
    "Do Fanatics' Den on the same cemetery walk.",
  "Fafnite Storage Room":
    "Clear it with the cemetery lv 15 ring.",
  "Fanatics' Den":
    "Do Howling Den on the same cemetery walk.",
  "Fortuneteller's Grave":
    "Do Library of Foresight on the same graves walk.",
  "Homish's Prison Compound":
    "Clear it with the cemetery lv 15 ring.",
  "Howling Den":
    "Do Victims' Cave on the same cemetery walk.",
  "Library of Foresight":
    "Clear it at 15. Leave Patience and Wisdom for later.",
  "Prison of Oblivion":
    "Clear it with the cemetery / crypt lv 15 ring.",
  "Victims' Cave":
    "Clear it at the crematorium while you are on Tagar's chapter.",
  "Abandoned Memorial Room":
    "Do Destroyed Scriptorium on the same Fang walk.",
  "Closed Hideout":
    "Do Predator's Lair on the same dumpsite walk.",
  "Destroyed Scriptorium":
    "Do Abandoned Memorial Room on the same Fang walk.",
  "Lamnah Base":
    "Clear it with the dumpsite lv 20 ring.",
  "Predator's Lair":
    "Do Unstable Cave on the same Fang walk.",
  "Unstable Cave":
    "Do Worshiper's Underground Cave on the same lv 20 ring.",
  "Worshiper's Underground Cave":
    "Finish this ring, then walk to Elim's Rest.",
  "Dark Root Cave":
    "Do Drana Depository on the same grove walk.",
  "Drana Depository":
    "Do High Priest's Ruins while you are at Elim's Rest.",
  "High Priest's Ruins":
    "Clear it with the Elim grove lv 25 ring.",
  "Skurv Laborer Den":
    "Do Twisted Pit on the same Elim walk.",
  "Twisted Pit":
    "Close the week-one Asmodian hideouts here.",

  "All-Curing Cave": "Come back at 30 after the Healing Spring chapter.",
  "Dratona Assembly Area": "Come back at 30.",
  "Final Haven": "Come back at 30.",
  "Insectoid Tunnel": "Come back at 30 after Nornir.",
  "Library of Patience": "Run Wisdom with it when you actually reach 30.",
  "Library of Wisdom": "Run Patience with it at 30.",
  "Rift Fissure": "Come back at 30 after Land of Rifts.",
  "Destruction Archons Armory": "Come back at 35 with that ruin walk.",
  "Empty Cave": "Come back at 35.",
  "Fungie Habitat": "Come back at 35.",
  "Lonely Rock Chasm": "Come back at 35.",
  "Odylium Marauder Den": "Come back at 35.",
  "Pirate's Treasure Storage": "Come back at 35.",
  "Place of Rest": "Come back at 35.",
  "Rock Cave": "Come back at 35 on the canyon / workcamp band.",
  "Scale Altar": "Come back at 35 after Nornir.",
  "Shulak Cave": "Come back at 35.",
  "Ascetic's Cave": "Come back at 40.",
  "Den of Exiles": "Come back at 40.",
  "Kumbahum's Cave": "Come back at 40.",
  "Lagta Fafnite Storage": "Come back at 40 from Steel Hammer.",
  "Spider Cave": "Come back at 40.",
  "Tayga Breeding Ground": "Come back at 40.",
  "Warriors' Rest": "Come back at 40 for the unique title and wing scraps.",
};

const districtFlavor: Record<string, string> = {
  cantas: "Cantas Valley hideout around the Dawn Legion Base.",
  marsh: "Elun swamp / library stretch.",
  ruins: "Under or beside Verteron Fortress Ruins.",
  temp: "Field hideout around the Dawn Legion temporary desk.",
  merc: "Mercenary / Aullaeu stretch.",
  "later-v": "Later Verteron band (lv 30–40).",
  haven: "Early Altgard graves and ruins around Safe Haven.",
  shadow: "Around Shadow Hall / Watcher camps.",
  graves: "Cemetery / crematorium hideout.",
  fang: "Fang / dumpsite instance.",
  elim: "Elim grove around Elim's Rest and Odar's Shade.",
  "later-a": "Later Altgard band (lv 30–40).",
};

function uniqueChips(chips: string[]) {
  return [...new Set(chips.filter(Boolean))];
}

const traceFlavorByStretch: Record<string, string> = {
  "Dawn Legion Base": "Feather on the Cantas bind yard. Check roofs and the backside of the desks.",
  "Western Cantas": "Feather on the west Cantas walk around the valley camp.",
  "Eastern Cantas": "Feather on the east Cantas / barrier-tower stretch.",
  "Elun Marsh": "Feather in the Elun swamp. Water and library edges hide a few.",
  "Elun Meadow": "Feather on the Elun meadow above the marsh.",
  "Elun Midstream": "Feather along the Elun midstream between meadow and swamp.",
  "Fortress Ruins": "Feather in the old fortress. Corners under the ruin and the wall walk.",
  "Tolbas Forest": "Feather in Tolbas around the temporary desk / Wind Breeze walk.",
  "Northern Tolbas": "Feather on the north Tolbas fringe.",
  "Southern Tolbas": "Feather on the south Tolbas fringe toward Astin.",
  "Eastern Tolbas": "Feather on the east Tolbas fringe.",
  "Forest of Exiles": "Feather in the exile woods on the mercenary stretch.",
  Aullaeu: "Feather in Aullaeu village. Roofs and the funeral-island edge.",
  "Aullaeu Funeral Island": "Feather on the small island off Aullaeu.",
  "Scarlet Forest": "Feather in the scarlet woods on the later eastern band.",
  "Drana Plantation": "Feather on the later plantation band.",
  "Kraka Footpath": "Feather on the Kraka hill path — later Verteron.",
  "Zumion Village": "Feather in Zumion. Village corners and NPC backs.",
  "Pilgrim's Ridge": "Feather on pilgrim ridge after the temporary desk.",
  "Artamia Canyon": "Feather in Artamia Canyon. Cliff ledges.",
  "Eastern Artamia": "Feather on the east Artamia highland.",
  "Western Artamia": "Feather on the west Artamia highland.",
  "Southern Artamia": "Feather on the south Artamia highland.",
  "Garden of the Illusion God": "Feather in the illusion garden on the later band.",
  "Nahid Brigade Fortress": "Feather on the Nahid fortress structures.",
  "Crimson Isle": "Feather on Crimson Isle — later island, not the Cantas walk.",
  "Eternal Isle": "Feather on Eternal Isle. Painted near Poeta on this parchment; it is not the prologue farm.",
  "Safe Haven": "Feather around the early Altgard bind. Turn the stack in at Shadow Hall.",
  "Nameless Cemetery": "Feather in the nameless graves around Gravekeeper Camp.",
  "Dredgion Crash Site": "Feather on the crash-site stretch between Haven and Shadow Hall.",
  "Silent Hill": "Feather on Silent Hill, west toward the Fang / dumpsite band.",
  "Sanctum Outpost": "Feather around Sanctum Outpost / the dumpsite walk.",
  "Calderon Canyon": "Feather in Calderon Canyon near Shadow Hall.",
  "Tranein Highland": "Feather on Tranein Highland above the Shadow Hall walk.",
  "Moslan Forest": "Feather in Moslan Forest on the Elim grove band.",
  Uruthumheim: "Feather in Uruthumheim around the Minushan stretch.",
  "Nornir Assembly": "Feather at Nornir Assembly — after the energy gate.",
  "Purifying Forest": "Feather in the purifying / healing-spring woods. Later Altgard.",
  Dranactus: "Feather in Dranactus on the later north band.",
  "Battlescar Mound": "Feather on Battlescar Mound.",
  "Basfelt Waterfall": "Feather at Basfelt Waterfall.",
  "Basfelt Ruins": "Feather in the Basfelt ruins.",
  "Lagta Fortress": "Feather at Lagta Fortress on the late Altgard band.",
  "Black Claw Village": "Feather in Black Claw Village.",
  "Impetusium Square": "Feather across Impetusium Square — a dense late cluster.",
  "Fafnite Deposit": "Feather at the Fafnite deposit on the Steel Hammer band.",
  "Western Gribade": "Feather on western Gribade toward Idun's Lake.",
  "Eastern Gribade": "Feather on eastern Gribade.",
  "Southern Gribade": "Feather on southern Gribade.",
  "Idun's Lake": "Feather around Idun's Lake.",
  "Mahindel Cliff": "Feather on Mahindel Cliff.",
  "Spirit Isle": "Feather on Spirit Isle — later island.",
  "Immortal Isle": "Feather on Immortal Isle. Painted near Ishalgen on this parchment; it is not the prologue farm.",
};

const vendorGuide: Record<VendorKind, { flavor: string; why: string; do: string }> = {
  goods: {
    flavor: "Repair, potions, and the usual camp stall.",
    why: "General Goods. The desk that keeps a camp usable when bags are full of junk.",
    do: "Sell trash and top potions here. Craft benches live in the two towns, not at every camp.",
  },
  alchemy: {
    flavor: "Town alchemy bench. Potions and morph fuel get made here.",
    why: "Alchemy Table. One of the two town benches on this map — not a field camp desk.",
    do: "Park crafts on this character’s weekly counts. Odyle morphs sit with the Morph Merchant, not this table.",
  },
  armor: {
    flavor: "Town armor bench. Plate and leather work happens here.",
    why: "Armor Table. Same two-town pattern as the other craft benches.",
    do: "Use it when a recipe wants the armor station. The Crafting Merchant next to it sells kits.",
  },
  blacksmith: {
    flavor: "Town smith bench. Weapons and metal work.",
    why: "Blacksmith Table. Dawn Legion Base / Zumion on Verteron, Safe Haven / Nornir on Altgard.",
    do: "Smith here, then stash extras in Storage on the same plaza.",
  },
  cooking: {
    flavor: "Town cooking bench. Food that actually lasts a pull.",
    why: "Cooking Table. The other town has the twin bench if this one is crowded.",
    do: "Cook the week’s food on the character who will eat it. Alts keep their own weekly craft counts.",
  },
  handicraft: {
    flavor: "Town handicraft bench. Accessories and odds.",
    why: "Handicraft Table. Same two-town set as alchemy and smith.",
    do: "Make the small crafts here. Kits come from the Crafting Merchant on this plaza.",
  },
  craft: {
    flavor: "Kits, tools, and the shop that feeds the benches.",
    why: "Crafting Merchant. Camps keep one; the two towns keep the full bench set beside them.",
    do: "Buy what the nearby table needs, then walk three steps. Do not fly back to town for a needle.",
  },
  morph: {
    flavor: "Substance Morph desk. Odyle and leftover gear go through here.",
    why: "Morph Merchant. One in the early town, one in the later town.",
    do: "Dump spare Odyle and dungeon leftovers into the morph you actually need this week.",
  },
  storage: {
    flavor: "Personal stash at this camp.",
    why: "Storage. Towns plus a couple of later desks so you are not flying feathers across the map.",
    do: "Park monolith keys, feathers, and craft kits here. The cube layer is a different chest.",
  },
};

function vendorKind(pin: MapPin): VendorKind | null {
  const kind = pin.kind;
  return kind && kind in vendorGuide ? (kind as VendorKind) : null;
}

function fallbackFlavor(pin: MapPin): string {
  const district = districtById(pin.faction, pin.district);
  const where = district ? `${district.label} — ${district.hint}` : pin.district;
  if (pin.layer === "trace") {
    return `${pin.name} is an Empyrean Trace on this stretch.`;
  }
  if (pin.layer === "cube") {
    return `${pin.name} is a Hidden Cube on this stretch.`;
  }
  if (pin.layer === "kibelisk") {
    return `${pin.name.replace(/^Kibelisk · /, "")} is the teleport pad on this stretch.`;
  }
  if (pin.layer === "vendor") {
    const kind = vendorKind(pin);
    return kind ? vendorGuide[kind].flavor : `${pin.name} is a camp desk.`;
  }
  if (pin.layer === "gather") {
    const meta = gatherMeta(pin.kind);
    const stretch = gatherStretch(pin);
    return `${meta?.label ?? "A node"} on the ${stretch} stretch.`;
  }
  if (pin.layer === "sealed") {
    return `${pin.name} is a recommended lv ${pin.level} sealed hideout in ${where}.`;
  }
  if (pin.layer === "stronghold") {
    return `${pin.name} is a named fort on this stretch.`;
  }
  return pin.note || `${pin.name}. Hero-quest camp in ${where}.`;
}

function fallbackWhy(pin: MapPin): string {
  if (pin.layer === "trace") {
    const zone = pin.faction === "elyos" ? "Verteron" : "Altgard";
    return `One ${zone} Empyrean Trace. That zone’s monolith takes 560 feathers to reach level 30.`;
  }
  if (pin.layer === "cube") {
    return "Hidden Cube. Monolith keys open it. Mark it found after you loot it.";
  }
  if (pin.layer === "kibelisk") {
    return "Kibelisk. Unlock this pad when you reach the camp, then hop instead of walking the same road twice.";
  }
  if (pin.layer === "vendor") {
    const kind = vendorKind(pin);
    return kind ? vendorGuide[kind].why : "Camp desk.";
  }
  if (pin.layer === "gather") {
    return gatherMeta(pin.kind)?.why ?? "Field node on this stretch.";
  }
  if (pin.layer === "sealed") {
    return pin.weekOne
      ? `Recommended lv ${pin.level} hideout on this stretch.`
      : `Recommended ${pin.level}. After the week-one band.`;
  }
  if (pin.layer === "stronghold") {
    return "Named fort on this stretch.";
  }
  return pin.weekOne ? "Hero-quest camp." : "Hero-quest camp after week one.";
}

function hubChips(pin: MapPin): string[] {
  return uniqueChips([
    "Hub",
    pin.id.includes("daminu") || pin.id.includes("aldelle") ? "Ascension" : "",
    pin.id.includes("dawn-legion-base") || pin.id.includes("safe-haven") ? "Bind" : "",
    pin.id.includes("dawn-legion-base") || pin.id.includes("shadow-hall") ? "Empyrean Monolith" : "",
  ]);
}

function traceChips(): string[] {
  return uniqueChips([lootItem.trace, lootItem.wisdom, lootItem.amulet, lootItem.cubeKey]);
}

function hideoutChips(pin: MapPin): string[] {
  const extra = (extraLootByName[pin.name] ?? []).map((row) => row.item);
  return uniqueChips([
    "Hideout",
    lootItem.stones,
    lootItem.crystals,
    lootItem.title,
    lootItem.scrap,
    ...extra,
  ]);
}

function fortChips(): string[] {
  return uniqueChips(["Fort", lootItem.belt, lootItem.manastones]);
}

function cubeChips(): string[] {
  return uniqueChips([lootItem.cube, lootItem.cubeKey]);
}

function cubeStretch(pin: MapPin) {
  return pin.name.replace(/^Hidden Cube · /, "").replace(/ \d+$/, "");
}

export function pinGuide(pin: MapPin): PinGuide {
  const stretch = pin.layer === "trace" ? traceStretch(pin) : pin.layer === "cube" ? cubeStretch(pin) : "";
  const flavor =
    pin.layer === "trace"
      ? (traceFlavorByStretch[stretch] ?? fallbackFlavor(pin))
      : pin.layer === "vendor" || pin.layer === "gather"
        ? fallbackFlavor(pin)
        : (flavorByName[pin.name] ?? districtFlavor[pin.district] ?? fallbackFlavor(pin));
  const why = whyByName[pin.name] ?? fallbackWhy(pin);
  const specificDo = doByName[pin.name];

  if (pin.layer === "trace") {
    const hub = pin.faction === "elyos" ? "Dawn Legion Base" : "Shadow Hall";
    return {
      flavor,
      why,
      do: pin.weekOne
        ? `Pick it up when you pass it. Turn the stack in at the monolith at ${hub}. Mark it found here so the rest stay easy to see.`
        : `This stretch is after the week-one band. Leave roofs, pond floors, and high ledges until you can fly the gap. Turn in at ${hub}.`,
      chips: traceChips(),
      loot: [],
    };
  }

  if (pin.layer === "cube") {
    return {
      flavor,
      why,
      do: pin.weekOne
        ? "Open it when you have a Hidden Cube key from the monolith. Mark it found so the remaining chests stay easy to see."
        : "This stretch is after the week-one band. Leave high ledges and later towns until you can fly the gap.",
      chips: cubeChips(),
      loot: [],
    };
  }

  if (pin.layer === "kibelisk") {
    return {
      flavor,
      why,
      do: pin.weekOne
        ? "Walk to the pad once. After it lights, use it to skip the road back to this camp."
        : "Later-band pad. Unlock it when the Hero quest actually sends you here.",
      chips: uniqueChips(["Kibelisk", "Teleport"]),
      loot: [],
    };
  }

  if (pin.layer === "vendor") {
    const kind = vendorKind(pin);
    const meta = kind ? vendorKindMeta[kind] : null;
    return {
      flavor,
      why,
      do: specificDo ?? (kind ? vendorGuide[kind].do : "Use the desk, then get back on the Hero quest."),
      chips: uniqueChips([meta?.label ?? "Vendor", pin.weekOne ? "Week one" : "Later town"]),
      loot: [],
    };
  }

  if (pin.layer === "gather") {
    const meta = gatherMeta(pin.kind);
    return {
      flavor,
      why,
      do:
        pin.kind === "odyle"
          ? "Hover and channel. Empty wings mid-channel is a fail. Stack Odyle first, then get back on the road."
          : "Channel the node. Three attempts. Put the stack on the crafter who will use it, then get back on the road.",
      chips: uniqueChips([meta?.label ?? "Gather", pin.weekOne ? "Week one" : "Later stretch"]),
      loot: [],
    };
  }

  if (pin.layer === "sealed") {
    return {
      flavor,
      why,
      do: specificDo ?? (pin.weekOne ? "Run it with the rest of this tier." : `Leave it until recommended ${pin.level}.`),
      chips: hideoutChips(pin),
      loot: hideoutLoot(pin),
    };
  }

  if (pin.layer === "stronghold") {
    return {
      flavor,
      why,
      do: specificDo ?? "Clear this fort when you pass it.",
      chips: fortChips(),
      loot: fortLoot(),
    };
  }

  return {
    flavor,
    why,
    do:
      specificDo ??
      "Park on the yellow Hero quest that names this camp. If a story fight walls you, clear the matching hideout tier and come back.",
    chips: hubChips(pin),
    loot: [],
  };
}

export function hasResearchedFlavor(name: string) {
  return Object.prototype.hasOwnProperty.call(flavorByName, name);
}

export function hasResearchedDo(name: string) {
  return Object.prototype.hasOwnProperty.call(doByName, name);
}
