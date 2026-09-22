export type NamedSkill = { name: string; note: string };

export type ClassSheet = {
  job: number;
  priority: NamedSkill[];
  rotation: string[];
  rotationNote: string;
  hold: string[];
  holdNote: string;
  press: string[];
  pressNote: string;
  highlight: string[];
  boardNote: string;
};

export const classSheets: Record<string, ClassSheet> = {
  templar: {
    job: 3,
    priority: [
      { name: "Taunt", note: "Hold the boss" },
      { name: "Poach", note: "The pull on Nezekan" },
      { name: "Shield of Protection", note: "The soak" },
      { name: "Judgment", note: "Push this to 20" },
    ],
    rotation: ["Taunt", "Battlefield Banner", "Vicious Strike", "Judgment", "Empyrean Lord's Punishment"],
    rotationNote: "Face the boss away from the party. Banner is a fight buff. Punishment is the groggy dump.",
    hold: ["Vicious Strike", "Judgment", "Warding Strike", "Shield Smite", "Pummel"],
    holdNote: "Hold this sequence. Shield Smite lights Judgment. Delay floor is 50 ms.",
    press: ["Taunt", "Capture", "Battlefield Banner", "Shield of Protection", "Empyrean Lord's Punishment", "Doom Shield"],
    pressNote: "These stay on keys. Capture is the other yank. Doom Shield is the charged shield follow-up.",
    highlight: ["Judgment", "Vicious Strike", "Warding Strike", "Shield Smite", "Pummel", "Punishment", "Poach"],
    boardNote: "Walk out from the center to Judgment, the shield weave, and Poach. Combat Speed and Cooldown Reduction are the orange corners.",
  },
  gladiator: {
    job: 2,
    priority: [
      { name: "Frenzied Wave", note: "The pack clear" },
      { name: "Keen Strike", note: "Mana refill" },
      { name: "Overhead Slam", note: "Push this to 20" },
      { name: "Zikel's Blessing", note: "Party amp" },
    ],
    rotation: ["Zikel's Blessing", "Frenzied Wave", "Crushing Wave", "Overhead Slam"],
    rotationNote: "Blessing, walk into the pack, wave, then dump on groggy. Crushing Wave resets when a crit lands.",
    hold: ["Keen Strike", "Crushing Wave"],
    holdNote: "Hold Keen Strike into the strong swing so the greatsword recovery is cut. Afterimage means the cancel landed.",
    press: ["Zikel's Blessing", "Frenzied Wave", "Fracturing Rush", "Tenaciousness", "Blade Toss"],
    pressNote: "Fracturing Rush is the stigma closer. Tenaciousness shares a lockout with Cleric Salvation and Chanter Barrier Spell.",
    highlight: ["Keen Strike", "Crushing Wave", "Overhead Slam", "Rush Strike"],
    boardNote: "Keen Strike, Crushing Wave, and Overhead Slam are on this board. Frenzied Wave comes from the skill window, not a Nezekan node.",
  },
  assassin: {
    job: 5,
    priority: [
      { name: "Shadow Walk", note: "Stealth" },
      { name: "Ambush", note: "The back attack" },
      { name: "Savage Roar", note: "The mark" },
      { name: "Shadowstep", note: "Leave or reset" },
    ],
    rotation: ["Shadow Walk", "Savage Roar", "Ambush", "Shadowstrike"],
    rotationNote: "Stealth in, mark, Ambush the back, burst, leave. Front-facing is a large damage loss.",
    hold: ["Quick Slice"],
    holdNote: "Weak and strong weave only. A leftover swing still playing means the opener is dead.",
    press: ["Shadow Walk", "Savage Roar", "Ambush", "Shadowstep"],
    pressNote: "Do not put stealth, Ambush, or Shadowstep in the hold sequence. Reservation often off.",
    highlight: ["Ambush", "Quick Slice", "Savage Roar", "Shadowstrike"],
    boardNote: "Ambush and the mark are on Nezekan. Shadow Walk and Shadowstep are not. Azphel is the later PvP board.",
  },
  ranger: {
    job: 4,
    priority: [
      { name: "Rapid Fire", note: "The hold" },
      { name: "Snipe", note: "The other weave" },
      { name: "Snare Shot", note: "The leave" },
      { name: "Deadshot", note: "The heavy" },
    ],
    rotation: ["Snare Shot", "Rapid Fire", "Snipe", "Deadshot", "Griffon Arrow"],
    rotationNote: "Snare first. Hold Rapid Fire. Tap Deadshot and Griffon Arrow when they light. Keep the back angle.",
    hold: ["Rapid Fire", "Snipe"],
    holdNote: "Hold so the left and right cancel runs while you move. If a shot eats, raise the delay from 50 ms to 60–70.",
    press: ["Deadshot", "Griffon Arrow", "Gale Arrow", "Snare Shot", "Supporting Fire"],
    pressNote: "Park the heavies on tap slots. Supporting Fire when the party is on one target. Reservation on in PvE, off in open-world PvP.",
    highlight: ["Snipe", "Snare Shot", "Deadshot", "Gale Arrow", "Drill Dart"],
    boardNote: "Snipe, Snare Shot, and Deadshot are on this board. Rapid Fire is the hold, and it is not a Nezekan node.",
  },
  sorcerer: {
    job: 7,
    priority: [
      { name: "Flame Arrow", note: "Mana and the weave" },
      { name: "Ice Chain", note: "The lock" },
      { name: "Curse: Tree", note: "Then the nuke" },
      { name: "Hellfire", note: "The burst" },
    ],
    rotation: ["Ice Chain", "Curse: Tree", "Hellfire", "Flame Arrow"],
    rotationNote: "Lock, tree, Hellfire. Weave Flame Arrow between casts or mana and damage both drop.",
    hold: ["Flame Arrow"],
    holdNote: "Hold Flame Arrow into the next cast. Afterimage means the cancel landed.",
    press: ["Ice Chain", "Curse: Tree", "Hellfire", "Hibernation"],
    pressNote: "Hibernation is the panic button. It never goes in the hold sequence. Reservation on for long fights.",
    highlight: ["Flame Arrow", "Ice Chain", "Hellfire"],
    boardNote: "Flame Arrow, Ice Chain, and Hellfire are on Nezekan. Curse: Tree and Hibernation are later presses.",
  },
  spiritmaster: {
    job: 6,
    priority: [
      { name: "Summon: Fire Spirit", note: "Before the pull" },
      { name: "Summon: Water Spirit", note: "Before the pull" },
      { name: "Summon: Wind Spirit", note: "Before the pull" },
      { name: "Summon: Earth Spirit", note: "Before the pull" },
    ],
    rotation: ["Summon: Fire Spirit", "Summon: Water Spirit", "Elemental Fusion", "Jointstrike: Curse", "Cry of Terror"],
    rotationNote: "Four spirits up, then your own hits. Cry of Terror is the fear. Ancient Spirit is a burst summon, not the loop.",
    hold: ["Jointstrike: Curse", "Elemental Fusion", "Combustion"],
    holdNote: "Put a spirit skill on the strong-attack slot. Left-click only is a dead parse.",
    press: ["Summon: Fire Spirit", "Summon: Water Spirit", "Summon: Wind Spirit", "Summon: Earth Spirit", "Cry of Terror", "Command: Proxy"],
    pressNote: "Summon before the pull. Fear and Command: Proxy are manual. Proxy while you are the target.",
    highlight: ["Summon: Fire Spirit", "Summon: Water Spirit", "Summon: Wind Spirit", "Summon: Earth Spirit", "Elemental Fusion", "Jointstrike: Curse"],
    boardNote: "The four summons and Elemental Fusion are on this board. Do not spend the board on a path that replaces a summon.",
  },
  cleric: {
    job: 8,
    priority: [
      { name: "Healing Light", note: "The heal" },
      { name: "Light of Regeneration", note: "Party regen" },
      { name: "Chain of Torment", note: "The shred" },
      { name: "Condemnation", note: "After the shred" },
    ],
    rotation: ["Light of Regeneration", "Chain of Torment", "Earth's Retribution", "Condemnation", "Healing Light"],
    rotationNote: "Regen and the shred stay up. Weave Earth's Retribution into Condemnation between heals.",
    hold: ["Earth's Retribution"],
    holdNote: "Hold Earth's Retribution into the strong swing so spirit does not die between heals.",
    press: ["Healing Light", "Light of Regeneration", "Chain of Torment", "Summon Resurrection", "Salvation", "Judgment Thunder"],
    pressNote: "Heals, ally rez, and Salvation stay on keys. Judgment Thunder helps groggy. It is not every cooldown.",
    highlight: ["Earth's Retribution", "Healing Light", "Light of Regeneration", "Chain of Torment", "Condemnation", "Debilitating Mark"],
    boardNote: "The heal, the regen, and the shred are on Nezekan. Ally rez is Summon Resurrection, a separate button from your self-rez stigma.",
  },
  chanter: {
    job: 9,
    priority: [
      { name: "Undefeated Mantra", note: "Before the pull" },
      { name: "Healing Touch", note: "The off-heal" },
      { name: "Rushing Smash", note: "The dash" },
      { name: "Power of the Storm", note: "On groggy" },
    ],
    rotation: ["Undefeated Mantra", "Rushing Smash", "Onslaught", "Power of the Storm", "Healing Touch"],
    rotationNote: "Mantra up, dash in, stay on the boss. Power of the Storm on groggy. Healing Touch when someone dips.",
    hold: ["Onslaught"],
    holdNote: "Hold the staff weave. The cancel is for spirit, not a second heal bar.",
    press: ["Undefeated Mantra", "Power of the Storm", "Rushing Smash", "Healing Touch", "Barrier Spell"],
    pressNote: "Mantras and Barrier Spell stay off the hold sequence. Barrier Spell is a short floor, not an immunity.",
    highlight: ["Onslaught", "Charging Smash"],
    boardNote: "Onslaught and Charging Smash are the nodes on this board. The mantras and Barrier Spell are presses, not Nezekan tiles.",
  },
};
