export type ClassGuide = {
  slug: string;
  name: string;
  kr: string;
  role: string;
  roleTone: "tank" | "bruiser" | "melee" | "ranged" | "magic" | "heal" | "support";
  weapon: string;
  weaponNote: string;
  identity: string;
  portrait: string;
  portraitAlt: string;
  pve: string[];
  pvp: string[];
  stigma: { en: string; kr: string; note: string; icon?: string };
  habit: string;
  mistake: string;
  skip: string;
  playstyle: string[];
  leveling: string[];
  daevanion: string[];
  macros: string[];
};

export const classGuides: ClassGuide[] = [
  {
    slug: "templar",
    name: "Templar",
    kr: "수호성",
    role: "Main tank",
    roleTone: "tank",
    weapon: "Sword + shield",
    weaponNote: "One-hander and shield. AION 1 greatsword swap is not this class.",
    identity:
      "The party’s shield. You hold the face, the pull, and the peel. Groups take you because the boss is looking at you. Personal meter is not the job.",
    portrait: "/classes/templar-icon.webp",
    portraitAlt: "Templar class icon",
    pve: [
      "You are the pull lead. Capture (포획) yanks. Taunt (도발) pins. Face the boss away from the party.",
      "Shield of Protection (보호의 방패) plus a timed parry is the class. Standing still and never blocking is a dead tank.",
      "Groggy: dump Empyrean Lord’s Punishment (주신의 징벌) and the charged shield follow-up (파멸의 방패). Keep adds off the healer.",
    ],
    pvp: [
      "Open with Capture or Shield Rush (방패 돌격). Land CC, then smash.",
      "If the grab misses in the air, wait — you do not have a second close.",
      "Peel the dive off the Cleric. You win by living and locking, not by chasing a Ranger across the sky.",
    ],
    stigma: {
      en: "Battlefield Banner",
      kr: "전장의 깃발",
      note: "Slot it. Press it as a fight buff. Turns defense into extra offense.",
    },
    habit: "Parry and block are the cancel.",
    mistake: "Never parrying. Pointing the boss at the party. Skipping taunt. Treating tank as AFK.",
    skip: "Ranking Templar on a DPS chart. AION 1 greatsword-swap guides.",
    playstyle: [
      "Pull, face, then hold. Banner goes up as a fight buff, not as a panic.",
      "Weave basics between taunts and blocks so the next soak is ready.",
      "On groggy, dump Punishment and the charged shield. Between windows, peel adds.",
    ],
    leveling: [
      "First: Taunt, Capture, Shield of Protection. You need to hold a pack before you need more damage.",
      "Push Judgment (심판) toward 20 as soon as soul lines and Daevanion allow — it can be most of the tank’s personal damage.",
      "Next: peel and CC so the healer is not eating extras.",
      "Last: personal damage skills, once the boss stays on you.",
    ],
    daevanion: [
      "Walk from the center. Take the blue skill nodes you actually press — Taunt, Capture, Shield of Protection, Judgment (심판). Judgment to 20 is the first skill-level target.",
      "Nezekan first: combat speed and cooldown so the next soak is ready. Then attack, defense, and health. Crit after you can hold a pack.",
      "Skip spirit and crit-resist twigs until the tank skills and the orange cooldown nodes are on. One groggy active is enough.",
    ],
    macros: [
      "Official Skill Macro: Weak Attack (Vicious Strike / 맹렬한 일격) alternating with Strong. Hold the bound key. Delay floor is 50 ms.",
      "Put the Judgment line in the sequence: Judgment → Warding Strike (비호의 일격) → Shield Smite (방패 강타) → Pummel (연속 난타). That keeps Judgment lit.",
      "Press by hand: Taunt, Capture, Banner, Shield of Protection, Empyrean Lord’s Punishment, and charged Punishment. Reservation on in long PvE.",
    ],
  },
  {
    slug: "gladiator",
    name: "Gladiator",
    kr: "검성",
    role: "Melee bruiser",
    roleTone: "bruiser",
    weapon: "Greatsword",
    weaponNote: "Two-hander. Polearm is AION 1 — not this class.",
    identity:
      "Wide-area melee. In a short party you can off-tank if there is no Templar. In a full group you are melee DPS with party buffs and lifesteal. You live in the pack. You do not replace the main tank.",
    portrait: "/classes/gladiator-icon.webp",
    portraitAlt: "Gladiator class icon",
    pve: [
      "Not the pull if a Templar is there. Job is groggy and packs.",
      "Party amp (Zikel's Blessing) → walk into the pack → Frenzied Wave → dump on groggy.",
      "Stand in the mobs. Lifesteal is the sustain kit. Do not play as a turret of one wave skill.",
    ],
    pvp: [
      "Gap-close, knockdown, keep them on the floor. Blade Toss (칼날 날리기) shreds from range if they kite.",
      "The short immunity (근성) shares a lockout with Cleric Salvation and Chanter Barrier — do not stack them.",
      "Fracturing Rush is a ground closer, not an air dash.",
    ],
    stigma: {
      en: "Fracturing Rush",
      kr: "분쇄 돌진",
      note: "Forward rush with bind and groggy chip. Use it to stick, not to fly.",
    },
    habit: "Greatsword recovery is the tax.",
    mistake: "Holding every animation to the end. Skipping the party groggy buff. Playing as the main tank when a Templar is already there.",
    skip: "Polearm guides. Those are AION 1. One-button Frenzied Wave as the whole rotation.",
    playstyle: [
      "Blessing first. Walk in. Frenzied Wave on the pack.",
      "Cancel the light swing into the next skill so the sword is not stuck in recovery.",
      "Groggy is the dump window. Between windows, stay in melee and let lifesteal work.",
    ],
    leveling: [
      "First: Frenzied Wave and a lifesteal skill. Packs are how you live.",
      "Push Overhead Slam (내려찍기) toward 20 early. It can be most of the parse once Specialty slots open.",
      "Next: the party amp and a gap-close.",
      "Last: off-tank tools, only if you are covering a missing Templar.",
    ],
    daevanion: [
      "Skill nodes on Crushing Wave (분쇄파동), Sharp Strike (예리한 일격), Blade Storm (검기난무), and Overhead Slam (내려찍기). Slam to 20 is the first skill-level target.",
      "Nezekan combat speed and cooldown first. Then attack and crit — Crushing Wave resets when a crit lands.",
      "If you are covering a missing Templar, take the Cleaving Blow (절단의 맹타) node. Otherwise skip off-tank twigs.",
    ],
    macros: [
      "Official Skill Macro: hold Weak (Sharp Strike) into Strong so the greatsword recovery is cut. Afterimage means the cancel landed.",
      "Weave Crushing Wave on cooldown. Sharp Strike is the mana refill — Wave-only burns spirit and the reset dies.",
      "Press by hand: Zikel’s Blessing, Frenzied Wave, Fracturing Rush, and the short immunity. If you are off-tanking, mix Cleaving Blow into the weave instead of more Wave.",
    ],
  },
  {
    slug: "assassin",
    name: "Assassin",
    kr: "살성",
    role: "Melee burst DPS",
    roleTone: "melee",
    weapon: "Dagger",
    weaponNote: "Dual daggers. Back-angle is the class.",
    identity:
      "Stealth, back-attack, delete, leave. Precision melee. Fragile. A hard first main if you are also learning flight.",
    portrait: "/classes/assassin-icon.webp",
    portraitAlt: "Assassin class icon",
    pve: [
      "Stay behind the boss. Mark with Savage Roar, detonate the glyph, Ambush to the back, burst.",
      "Isolated targets only. You are not the pack clear. Front-facing is a large damage loss.",
      "If Ambush misses, leave. Before stealth is up, treat every pull as a reset drill.",
    ],
    pvp: [
      "Stealth in. Land Ambush from the back. Burst. Leave.",
      "If the opener misses, reset. Long fights lose.",
    ],
    stigma: {
      en: "Shadowstep",
      kr: "암영보",
      note: "Reposition / vanish. Use it to start the back-angle or to leave a failed opener.",
    },
    habit: "If a leftover swing is still playing, the opener is dead.",
    mistake: "Fighting from the front like a Gladiator. Skipping stealth and Ambush. Standing in melee as a sustained auto-attacker.",
    skip: "A full extra-AoE bar before Ambush and stealth are comfortable.",
    playstyle: [
      "Stealth in. Glyph mark. Ambush the back. Burst. Leave.",
      "Shadowstep is the reset, not a second opener you spam on cooldown.",
      "If you are in the boss’s face, stop swinging and get behind.",
    ],
    leveling: [
      "First: stealth and Ambush. The class does not exist from the front.",
      "Next: the burst follow-up and Shadowstep.",
      "Last: extra AoE. Isolated targets pay more than packs.",
    ],
    daevanion: [
      "Walk toward Ambush, stealth, and the burst follow-up. Skip pack-AoE nodes until those three are on.",
      "Nezekan combat speed and cooldown first. Then attack and crit. The opener wants the next Ambush back, not more HP twigs.",
      "The later PvP board (Azphel) is for after the PvE loop is comfortable. Do not start there.",
    ],
    macros: [
      "Official Skill Macro: Weak / Strong weave only. Hold it between openers so recovery does not eat the next dagger.",
      "Do not put Ambush, stealth, or Shadowstep in the hold sequence. Those are timed presses. A leftover swing still playing means the opener is dead.",
      "Reservation often off so the dive is not queued behind a basic. Stealth in, Ambush the back, burst, leave — by hand.",
    ],
  },
  {
    slug: "ranger",
    name: "Ranger",
    kr: "궁성",
    role: "Ranged physical DPS",
    roleTone: "ranged",
    weapon: "Bow",
    weaponNote: "Bow. Distance is survivability.",
    identity: "Distance, kite, suppress. If melee reaches you, the run gets expensive.",
    portrait: "/classes/ranger-icon.webp",
    portraitAlt: "Ranger class icon",
    pve: [
      "Snare Shot stops the chase. Rapid Fire fills. Deadshot and Griffon Arrow are the heavies.",
      "Keep the back-angle even at range. Standing still in front is a DPS leak.",
    ],
    pvp: [
      "Kite. Snares, roots, stay out of melee. Strong at range, weak in close quarters.",
      "If a gap-closer lands, you are the prey. Flight is the leave button, not a place to turret.",
    ],
    stigma: {
      en: "Supporting Fire",
      kr: "지원 사격",
      note: "Party shot. Press it when the group is hitting the same target.",
    },
    habit: "Hold Rapid Fire, tap the heavy.",
    mistake: "Standing in melee. Leaving reservation on and wondering why the heavy shot or a buff never fires during the weave.",
    skip: "Treating Marksman as a ninth class. Marksman was an old English name for Ranger. Building the bar around Deadshot only.",
    playstyle: [
      "Snare first. Hold Rapid Fire. Tap the heavy.",
      "Supporting Fire when the party is stacked on one target.",
      "If something closes, fly out. Do not turret from the ground in their face.",
    ],
    leveling: [
      "First: Rapid Fire and a snare. You need a loop and a leave.",
      "Next: the heavy arrow.",
      "Last: luxury arrows. Mobility before extra damage toys.",
    ],
    daevanion: [
      "Skill nodes on Rapid Fire and Snipe. Those two are the weave. Snare Shot next.",
      "Nezekan combat speed and cooldown first — Ranger is the class official Skill Macro was built for. Then attack and crit.",
      "Skip luxury-arrow twigs until the loop and a leave button exist.",
    ],
    macros: [
      "Official Skill Macro: hold Weak and Strong (Rapid Fire) so the left / right cancel runs while you move. Delay floor 50 ms; bump to 60–70 ms if a shot eats.",
      "Take Strong Attack off the bar if you want. Park Deadshot, Drill Dart, and Gale Arrow on right-click slots and tap them when they light.",
      "Reservation on in PvE. Off in open-world PvP so the kite stays instant. Supporting Fire is a party press, not a hold-spam.",
    ],
  },
  {
    slug: "sorcerer",
    name: "Sorcerer",
    kr: "마도성",
    role: "Ranged magic burst",
    roleTone: "magic",
    weapon: "Spellbook",
    weaponNote: "Spellbook. Lock, then nuke.",
    identity: "Glass-cannon caster. Fire nuke, ice lock. High burst, low forgiveness. Still not a brain-off class.",
    portrait: "/classes/sorcerer-icon.webp",
    portraitAlt: "Sorcerer class icon",
    pve: [
      "Ice Chain first. Then Curse: Tree into Hellfire.",
      "Weave the fire basic (Flame Arrow) between skills or mana and DPS both die.",
      "You can move on many casts. You are still frail.",
    ],
    pvp: [
      "Root, freeze, or tree, then burst. Distance or die.",
      "Hibernation is a panic button, not a win.",
    ],
    stigma: {
      en: "Hibernation",
      kr: "동면",
      note: "Panic button. Use it to live through a dive, not to win the fight.",
    },
    habit: "Fire basic, then the next skill.",
    mistake: "Dumping fire skills with no weave. Standing in melee and popping Hibernation as if it wins the fight.",
    skip: "Skipping the lock so every pull is a raw fire dump.",
    playstyle: [
      "Lock first. Curse: Tree. Hellfire.",
      "Weave the fire basic between every skill so mana and damage stay up.",
      "Hibernation only when you are about to die. Then get range back.",
    ],
    leveling: [
      "First: a fire nuke and an ice lock. The combo is the class.",
      "Next: Curse: Tree.",
      "Last: Hibernation and extra ice. Survivability after the burst exists.",
    ],
    daevanion: [
      "Skill nodes on Flame Arrow, Ice Chain, and Hellfire. Those keep mana and the nuke cycling.",
      "Nezekan combat speed and cooldown first. Then attack. Crit after the lock-into-fire combo exists.",
      "Skip extra ice twigs until Hibernation and Curse: Tree are on the board you actually press.",
    ],
    macros: [
      "Official Skill Macro: hold Weak (Flame Arrow) into Strong or the next cast. Afterimage means the cancel landed. Standing still to finish a cast is the dead parse.",
      "Ice Chain, Curse: Tree, and Hellfire are timed presses on top of the hold.",
      "Reservation on for long PvE. Off if you need to walk a mechanic mid-cast. Hibernation is a panic button, never in the hold sequence.",
    ],
  },
  {
    slug: "spiritmaster",
    name: "Spiritmaster",
    kr: "정령성",
    role: "Ranged magic + spirits",
    roleTone: "magic",
    weapon: "Orb",
    weaponNote: "Orb. Spirits are part of the rotation, not pets you AFK.",
    identity: "Summoner and control mage. Optimized for solo play. Pets plus DoTs plus fear. Not an AFK class.",
    portrait: "/classes/spiritmaster-icon.webp",
    portraitAlt: "Spiritmaster class icon",
    pve: [
      "Do not start a pull with spirits down. Summon fire, water, wind, and earth first.",
      "Cry of Terror is the fear. Elemental Fusion is the burst once spirits are out. Summon: Ancient Spirit is a burst summon, not the rotation.",
      "Keep buffs up, then burst. Damage drops if spirits die mid-fight.",
    ],
    pvp: [
      "Fear plus distance. Command: Proxy dumps incoming damage onto a spirit.",
      "Fear is chance-based. You lose if spirits are dead and melee is already on you.",
    ],
    stigma: {
      en: "Command: Proxy",
      kr: "명령: 대역",
      note: "Dump incoming damage onto a spirit. Press it when you are the target, not after the spirit is already dead.",
    },
    habit: "Spirits on the Strong Attack slot. Left-click only is a dead parse.",
    mistake: "Left-click only. Letting summons expire.",
    skip: "A damage stigma that replaces a summon. Spirits down is a dead pull.",
    playstyle: [
      "Four spirits up before the pull. Then your own orb hits.",
      "Fear to create space. Elemental Fusion when the spirits are already out.",
      "Proxy when someone is hitting you. Do not start a pull with pets down.",
    ],
    leveling: [
      "First: the four summons. The class does not work without them.",
      "Next: your own elemental hits and a sustain skill.",
      "Last: fear and Proxy, once spirits stay up on their own.",
    ],
    daevanion: [
      "Skill nodes on the four summons and Fusion (융합) first. Spirits down is a dead board.",
      "Nezekan cooldown next so summons and fusion come back. Then attack. Fear and Proxy after pets stay up.",
      "Do not spend toward a damage stigma path that replaces a summon node.",
    ],
    macros: [
      "Official Skill Macro: put a spirit or fusion skill on the Strong Attack slot. Hold Weak + Strong. Left-click only is a dead parse.",
      "A live in-game setup: Strong side Curse → Fusion → the aerial hit (공지), plus Water / Earth / Fire / Corrosion (물·땅·불·부식) in the skill steps.",
      "Summon before the pull. Fear and Command: Proxy are manual. Reservation on so fusion still fires while you weave.",
    ],
  },
  {
    slug: "cleric",
    name: "Cleric",
    kr: "치유성",
    role: "Main healer",
    roleTone: "heal",
    weapon: "Mace + shield",
    weaponNote: "Mace and shield. You heal, then you deal.",
    identity:
      "Primary healer. Unique in-combat ally resurrection. Groups invite you because people stay up. Do not drop heal tools for a solo-quest damage stigma.",
    portrait: "/classes/cleric-icon.webp",
    portraitAlt: "Cleric class icon",
    pve: [
      "Keep the defense-shred brand (약화의 낙인 / 고통의 연쇄) and the party regen light (재생의 빛) up.",
      "Between heals you deal: weave Earth's Retribution into Condemnation. Judgment Thunder helps groggy. It is not every cooldown.",
      "Ally combat rez is Summon Resurrection. Reincarnating Touch is the self-rez stigma.",
    ],
    pvp: [
      "Stay with the pack. Low personal damage, no dash.",
      "Salvation (구원) when focused. Full-heal the dive target. Do not fly first. You lose chases.",
    ],
    stigma: {
      en: "Reincarnating Touch",
      kr: "환생의 손길",
      icon: "/skills/reincarnating-touch.webp",
      note: "Self buff, then self-rez if you die while it is up. Ally rez is a different button.",
    },
    habit: "Earth’s Retribution between heals or spirit dies.",
    mistake: "Heal-bot only — dropping the shred and regen. Never weaving the earth basic. Forgetting Summon Resurrection. Charging Judgment Thunder every time.",
    skip: "A solo-quest damage stigma that deletes a heal tool.",
    playstyle: [
      "Shred and regen stay up. Then you heal the lowest.",
      "Weave Earth’s Retribution into Condemn between heals.",
      "Ally rez is the wipe save. Reincarnating Touch is for you.",
    ],
    leveling: [
      "First: a real heal and the party regen. People staying up is the job.",
      "Next: the shred brand and combat rez.",
      "Last: Judgment Thunder and extra damage, once the tank lives without you staring at the bar.",
    ],
    daevanion: [
      "Skill nodes on a real heal, party regen (재생의 빛), and the shred brand first. People staying up is the board.",
      "Then Earth’s Retribution and Condemn so the weave has somewhere to go. Combat rez next.",
      "Nezekan cooldown so heals come back. Attack after the tank lives without you staring at the bar. Skip a solo-quest damage path that deletes a heal node.",
    ],
    macros: [
      "Official Skill Macro: hold Weak (Earth’s Retribution) into Strong so spirit does not die between heals. Cleric cancel is quieter than Ranger — still do it.",
      "Heals, ally rez, Salvation, and Judgment Thunder stay on keys you press. Do not dump the heal bar into the hold sequence.",
      "Reservation on so the heal still fires after a cancel. Reincarnating Touch is a self buff, not a weave step.",
    ],
  },
  {
    slug: "chanter",
    name: "Chanter",
    kr: "호법성",
    role: "Melee support",
    roleTone: "support",
    weapon: "Staff",
    weaponNote: "Staff. You fight with it in melee.",
    identity:
      "Versatile support. Mantras are the job. You fight in melee and deal more personal damage than a Cleric. Organized groups want both. You are not Cleric number two.",
    portrait: "/classes/chanter-icon.webp",
    portraitAlt: "Chanter class icon",
    pve: [
      "Pre-buff the unbreakable mantra (불패의 진언). That is the reason the class exists.",
      "Time the haste/crit mantra (질풍의 권능) on groggy. Dash in with the staff dash (돌진 격파). Stay on the boss.",
      "Off-heal with the heal chant (쾌유의 주문) when needed. Barrier is a wipe-pattern floor, not a full immunity.",
    ],
    pvp: [
      "Staff dash in. Re-stick after a dodge. Peel with knockdown and the heal chant.",
      "Barrier shares a lockout with Gladiator’s short immunity (근성) and Cleric Salvation — do not stack them.",
      "Do not hover and turret.",
    ],
    stigma: {
      en: "Barrier Spell",
      kr: "결계의 주문",
      note: "Short party floor, not full immunity. Save it for a wipe pattern.",
    },
    habit: "Reservation on in PvE so mantras stay up. Off only for a dash you must time.",
    mistake: "Playing as a backline turret. Dropping mantras. Using Barrier as a panic immunity. Treating Chanter as the eight-man main healer.",
    skip: "A plan that replaces the Cleric. Mantras down is a dead Chanter.",
    playstyle: [
      "Unbreakable mantra before the pull. Dash in. Stay on the boss.",
      "Haste/crit mantra on groggy. Staff weave in between.",
      "Heal chant when someone dips. Barrier for the wipe pattern, not for every scare.",
    ],
    leveling: [
      "First: the unbreakable mantra. That is the class.",
      "Next: the heal chant and the staff dash.",
      "Last: Barrier and extra melee, once the party buffs are automatic.",
    ],
    daevanion: [
      "Skill nodes on the unbreakable mantra (불패의 진언) first. That is the class. Haste/crit mantra (질풍의 권능) next.",
      "Then the heal chant and the staff dash. Nezekan combat speed and cooldown so mantras and the dash come back.",
      "Skip a healer-stat dump that treats Chanter as Cleric number two. Barrier is a late orange, not the first walk.",
    ],
    macros: [
      "Official Skill Macro: hold the staff Weak / Strong weave the same way Gladiator cuts recovery. The cancel is for spirit, not a second heal bar.",
      "Do not put mantras or Barrier in the hold sequence. Pre-buff the unbreakable mantra. Haste/crit mantra on groggy. Dash by hand.",
      "Reservation on in PvE so mantras stay up. Off only for a dash you must time. Heal chant when someone dips.",
    ],
  },
];
