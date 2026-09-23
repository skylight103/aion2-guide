export type SkillTooltip = {
  kind: "Active" | "Passive" | "Stigma";
  description: string | null;
  cooldown?: number;
  mp?: number;
  hp?: number;
  dp?: number;
  cast?: number;
};

export const skillTooltips: Record<string, Record<string, SkillTooltip>> = {
  "gladiator": {
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Equip Gladiator Weapon": {
      "kind": "Passive",
      "description": "Allows equipping Gladiator weapons.\n[Applicable weapons]\nGreatsword, Longsword, Dagger, Mace, Bow"
    },
    "Rending Blow": {
      "kind": "Active",
      "description": "Deals 1691-1691 damage to up to 4 enemies within 4m and increases Enmity.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Keen Strike": {
      "kind": "Active",
      "description": "Deals 989-989 damage to up to 4 enemies within 4m and increases Enmity. Restores 100 MP."
    },
    "Rupture Strike": {
      "kind": "Active",
      "description": "Deals 1124-1124 damage to up to 4 enemies within 4m and increases Enmity. Restores 100 MP."
    },
    "Wrathful Strike": {
      "kind": "Active",
      "description": "Strikes down the target 4 times, each dealing ?-? damage. Increases Physical Skill Damage Boost by ?% and Combat Speed by ?% for ?.",
      "cooldown": 30,
      "mp": 200
    },
    "Crushing Wave": {
      "kind": "Active",
      "description": "Deals 2497-2497 damage to up to 4 enemies within 5m of the caster.\n\n5 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 250
    },
    "Frenzied Wave": {
      "kind": "Active",
      "description": "Deals 2973-2973 damage to up to 4 enemies within 5m of the caster.\n\n5 Stagger Gauge Damage",
      "cooldown": 1,
      "mp": 250
    },
    "Blade Toss": {
      "kind": "Stigma",
      "description": "Deals 1692-1692 damage to a target within 20m and reduces Defense by 30% and Incoming Heal by 50% for 10s.\n\n5 Stagger Gauge Damage",
      "cooldown": 20
    },
    "Blade Dance": {
      "kind": "Active",
      "description": "Deals 2068-2068 damage to a target within 20m.\n\n5 Stagger Gauge Damage",
      "cooldown": 1
    },
    "Ruinous Blow": {
      "kind": "Active",
      "description": "Rushes to a target within 7.5m to deal 17011-17011 damage to up to 4 enemies nearby and grants Prepare for Battle for 20s.\nPrepare for Battle: Increases PvE Damage Boost by 20%, PvP Damage Boost by 10%, Critical Hit by 100, and Status Effect Chance by 15%\n\n25 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 250
    },
    "Focused Block": {
      "kind": "Stigma",
      "description": "Temporarily increases Block Damage Reduction by 100% and guarantees Parry. Restores 350 MP and Stamina once on Parry.",
      "cooldown": 20
    },
    "Blood Absorption": {
      "kind": "Passive",
      "description": "The caster has a 50% chance to restore 350-420 HP and 5.5% Max HP on landing an attack.\nImmediately restores 65% Max HP when HP drops to 50% or less.\n\nCooldown: 1s\nInstant Healing Cooldown: 60s"
    },
    "Armor of Balance": {
      "kind": "Stigma",
      "description": "Increases Impact-type Resist by 50% for 22.5s.",
      "cooldown": 90
    },
    "Intimidating Roar": {
      "kind": "Active",
      "description": "Intimidates nearby targets, reducing their Damage Boost by ?% for ? and generating ? Enmity.",
      "cooldown": 45
    },
    "Overhead Slam": {
      "kind": "Active",
      "description": "Deals 3744-3744 damage to a target afflicted with Knockdown within 4m and increases Enmity.\nHas a 7% chance to trigger when attacking a target with Incapacitated Immunity.\n\n5 Stagger Gauge Damage",
      "cooldown": 5
    },
    "Reckless Strike": {
      "kind": "Active",
      "description": "Deals 2807-2807 damage to up to 4 enemies within 4m and increases Enmity. Restores 150 MP."
    },
    "Leaping Slam": {
      "kind": "Active",
      "description": "Leaps to a target within 20m and deals 2580-2580 damage.\n\n10 Stagger Gauge Damage",
      "cooldown": 15
    },
    "Ankle Slice": {
      "kind": "Active",
      "description": "Selects a target within 4m and deals 3568-3568 damage to up to 4 enemies within 4m with a 50% chance to inflict Root for 3s on Block.\n100% chance to inflict Root on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 10
    },
    "Ankle Smash": {
      "kind": "Active",
      "description": "Deals 4639-4639 damage to a target within 4m."
    },
    "Rush": {
      "kind": "Active",
      "description": "To prepare for fast combat, increases the caster's Combat Speed by ?% for ?.",
      "cooldown": 120,
      "mp": 200
    },
    "Wrath Wave": {
      "kind": "Stigma",
      "description": "Deals 3385-3385 damage to up to 4 enemies within 5m of the caster and has a 50% chance to inflict Knockdown for 3s.\n100% chance to inflict Knockdown on NPC targets.\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Zikel's Blessing": {
      "kind": "Stigma",
      "description": "Increases the caster's Attack by 20% and Accuracy by 100 for 22.5s.",
      "cooldown": 120
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Survival Stance": {
      "kind": "Passive",
      "description": "Increases the caster's HP by 8000. Increases Max HP by an additional 85%, Natural HP Regen by 800, PvE Damage Tolerance by 25%, and PvP Damage Tolerance by 12.5%."
    },
    "Sword Aura Rampage": {
      "kind": "Active",
      "description": "Deals 1925-1925 damage to a target afflicted with Stagger within 4m."
    },
    "Mocking Blade": {
      "kind": "Active",
      "description": "Deals 4449-4449 damage to a target within 4m and inflicts Knockdown for 3s. Changes skill motion when attacking targets with Incapacitated Immunity.\n\n15 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 200
    },
    "Aerial Snare": {
      "kind": "Active",
      "description": "Deals 4399-4399 damage to a target afflicted with Knockdown within 4m with a 50% chance to inflict Airborne for 3s.\n100% chance to inflict Airborne on NPC targets.\nHas a 5% chance to trigger on attacking a target with Incapacitated Immunity.\n\n20 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 150
    },
    "Forced Fall": {
      "kind": "Active",
      "description": "Strikes down on a target afflicted with Airborne, dealing 5279-5279 damage and inflicting Knockdown for 3s.",
      "cooldown": 0.5,
      "mp": 150
    },
    "Doom Advent": {
      "kind": "Active",
      "description": "Deals ?-? damage to up to 6 enemies within 10m and inflicts Knockdown.",
      "cooldown": 300,
      "mp": 500
    },
    "Wrath Burst": {
      "kind": "Active",
      "description": "Deals 3268-3268 damage to a target within 4m and inflicts Knockdown for 3s.",
      "cooldown": 42
    },
    "Madness Blow": {
      "kind": "Active",
      "description": "Deals ?-? damage twice to a Stagger target."
    },
    "Lifestealing Blade": {
      "kind": "Stigma",
      "description": "Deals 4822-4822 damage to up to 4 enemies within 4m and absorbs 10% HP.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Rush Strike": {
      "kind": "Active",
      "description": "Moves to a target within 10m and deals 3030-3030 damage with a 30% chance to inflict Knockdown for 3s after using [Dodge] or while flying.\n100% chance to inflict Knockdown on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 20
    },
    "Tenaciousness": {
      "kind": "Stigma",
      "description": "The caster becomes immune to damage and status effects for 3s. Increases PvE Damage Tolerance by 50% and PvP Damage Tolerance by 25% for 3s when the effect ends.\n\nCannot block certain powerful attacks. Unaffected by cooldown increase effects.\nTenaciousness, Salvation, and Barrier Spell effects cannot be applied for 30s if Invincibility stacking is blocked.",
      "cooldown": 102
    },
    "Rage Burst": {
      "kind": "Stigma",
      "description": "Deals 4205-4205 damage to a target within 4m. Inflicts Wounded for 10s on hit, reducing the enemy's Attack by 10%, and increases the caster's PvE Damage Boost by 10% and PvP Damage Boost by 5% for 10s. Triggers [Overhead Slam] on the target for 10s on hit.\nWounded does not stack with the Shrink effect from the Templar skill [Taunt].\n\n20 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 100
    },
    "Lunge Stance": {
      "kind": "Stigma",
      "description": "Increases the caster's Combat Speed by 20% for 22.5s.",
      "cooldown": 60
    },
    "Wave Armor": {
      "kind": "Stigma",
      "description": "Deals 655-655 Damage over Time to up to 4 enemies within 3m of the caster for 22.5s.",
      "cooldown": 60,
      "mp": 200
    },
    "Smashing Blow": {
      "kind": "Active",
      "description": "Deals 1921-1921 damage to up to 4 enemies within 4m and increases Enmity.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Forced Restraint": {
      "kind": "Stigma",
      "description": "Deals 3356-3356 damage to a target within 4m with a 75% chance to inflict Seal for 5s.\n100% chance to inflict Seal on NPC targets. \n\n20 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 100
    },
    "Upward Strike": {
      "kind": "Active",
      "description": "Deals 3930-3930 damage to a target within 4m and increases Enmity.\n5 Stagger Gauge Damage",
      "cooldown": 0.5
    },
    "Fracturing Rush": {
      "kind": "Stigma",
      "description": "Rushes forward 10m and deals 3086-3086 damage to up to 4 enemies on the path, with a 60% chance to inflict Root for 3s.\n100% chance to inflict Root on NPC targets.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 100
    },
    "Destructive Rush": {
      "kind": "Active",
      "description": "Rushes forward 10m to deal 3395-3395 damage to up to 4 enemies on the path with a 60% chance to inflict Root for 3s.\n100% chance to inflict Root on NPC targets.",
      "cooldown": 0.5,
      "mp": 100
    },
    "Unsheathing Rush": {
      "kind": "Active",
      "description": "Rushes forward 10m to deal 3703-3703 damage to up to 4 enemies on the path with a 60% chance to inflict Root for 3s.\n100% chance to inflict Root on NPC targets.",
      "cooldown": 0.5,
      "mp": 100
    },
    "Assault Strike": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3163-3163 damage up to 4 enemies within 4m of the target, with a 30% chance to inflict Knockdown for 3s.\n100% chance to inflict Knockdown on NPC targets.\n\nIncreases Defense by up to 20% proportional to the number of targets hit.",
      "cooldown": 120
    },
    "Protection Armor": {
      "kind": "Passive",
      "description": "Increases the caster's Block by 200 and restores 1158-1390 HP on Block.\n\nCooldown: 1s"
    },
    "Identify Weakness": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Hit by 490 and Perfect Chance by 20%."
    },
    "Attack Preparation": {
      "kind": "Passive",
      "description": "Increases the caster's PvE Damage Boost by 25%, PvP Damage Boost by 12.5%, Defense by 80%, and Accuracy by 100."
    },
    "Impact Hit": {
      "kind": "Passive",
      "description": "Increases the caster's Impact-type Chance by 58% and Double Chance by 12%."
    },
    "Destructive Impulse": {
      "kind": "Passive",
      "description": "Deals 829-829 extra damage to targets afflicted with Stagger or an Impact-type status."
    },
    "Experienced Counterstrike": {
      "kind": "Passive",
      "description": "Increases Front Attack Damage Boost by 16%. Increases PvE Damage Boost by 21%, PvP Damage Boost by 10.5% for 20s for the caster and party members on Block.\n\nPvE Damage Boost and PvP Damage Boost does not stack with Templar's [Fury] effect."
    },
    "Survival Willpower": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases PvE Damage Tolerance by 90% and PvP Damage Tolerance by 45% for 5s when afflicted with Stun, Knockdown, Airborne, Frost, or Fear. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\n\nDamage Tolerance Increase Cooldown: 60s\nStatus Effect Resist Increase Cooldown: 1s"
    },
    "Murderous Burst": {
      "kind": "Passive",
      "description": "Grants a stack of Menace for 3s when landing an attack. Removes Menace at 5 stacks and deals 2066-2066 damage to up to 4 enemies within 5m of the caster and increases the caster's Critical Damage Boost by 25% for 3s."
    }
  },
  "templar": {
    "Vicious Strike": {
      "kind": "Active",
      "description": "Deals 2024-2024 damage to up to 4 enemies within 4m and increases Enmity. Restores 100 MP."
    },
    "Pummel": {
      "kind": "Active",
      "description": "Deals 2545-2545 damage to up to 4 enemies within 4m and increases Enmity.\n\n3 Stagger Gauge Damage",
      "mp": 120
    },
    "Punishing Benediction": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Hit by 490 and grants Punishing Benediction for 10s when landing an attack.\nPunishing Benediction: Has a 50% chance to deal 849-849 extra damage to the target when landing an attack.\n\nCooldown: 1s"
    },
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Decisive Strike": {
      "kind": "Active",
      "description": "Deals 2378-2378 damage to up to 4 enemies within 4m and increases Enmity. Restores 100 MP."
    },
    "Desperate Strike": {
      "kind": "Active",
      "description": "Deals 2834-2834 damage to up to 4 enemies within 4m and increases Enmity. Restores 120 MP."
    },
    "Punishing Strike": {
      "kind": "Active",
      "description": "Deals 2945-2945 damage to up to 4 enemies within 4m and increases Enmity.\n\n5 Stagger Gauge Damage",
      "mp": 120
    },
    "Doom Shield": {
      "kind": "Stigma",
      "description": "Rushes to a target within 20m and deals 3974-3974 damage. Has a 75% chance to inflict Knockdown for 3s. Grants a Protective Shield that blocks damage equaling 5% Max HP for 5s on hit. Triggers [Judgment] for 3s.\n100% chance to inflict Knockdown on NPC targets.\n\n20 Stagger Gauge Damage",
      "cooldown": 30
    },
    "Punishment": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 9078-27236 damage to up to 4 enemies within 4m of the target and grants the Executor effect to the caster for 20s.\nExecutor: Increases Accuracy by 200, PvE Damage Boost by 20%, and PvP Damage Boost by 10%\n\nMax 3 Charge Levels\n20-35 Stagger Gauge Damage",
      "cooldown": 30,
      "mp": 200
    },
    "Shield Smite": {
      "kind": "Active",
      "description": "Deals 3151-3151 damage to up to 4 enemies within 4m. Has a 60% chance to inflict Stun on the target for 3s. Triggers [Judgment] for 2s.\n100% chance to inflict Stun on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 10,
      "mp": 100
    },
    "Shield of Protection": {
      "kind": "Stigma",
      "description": "Temporarily increases Block Damage Reduction by 100% and guarantees Block. Restores 350 MP and Stamina once on Block.",
      "cooldown": 20
    },
    "Taunt": {
      "kind": "Stigma",
      "description": "Deals 2813-2813 damage to a target within 20m and increases Enmity by 44000. Inflict Shrink for 15s on hit and has a 50% chance to inflict Taunt for 3s if the target is a player.\nShrink: Reduces Accuracy by 200 and Attack by 10%\n\n20 Stagger Gauge Damage",
      "cooldown": 30
    },
    "Poach": {
      "kind": "Active",
      "description": "Deals 1845-1845 damage to a target within 20m and pulls them in front of the caster, with a 75% chance to inflict Root for 2s.\n100% chance to inflict Root on NPC targets. \n\n10 Stagger Gauge Damage",
      "cooldown": 15
    },
    "Second Skin": {
      "kind": "Stigma",
      "description": "Increases PvE Damage Tolerance by 30% and PvP Damage Tolerance by 15% for 22.5s.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 90
    },
    "Armor of Balance": {
      "kind": "Stigma",
      "description": "Increases Impact-type Resist by 50% for 22.5s.",
      "cooldown": 90
    },
    "Grapple": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3312-3312 damage to up to 4 enemies within 7m of the target, pulling them in front of the caster. Inflicts Root for 3s.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Noble Armor": {
      "kind": "Stigma",
      "description": "Increases Max HP by 15% for 300s and immediately restores HP by 15% of Max HP.\n\nNot affected by buff dispel effects.",
      "cooldown": 300
    },
    "Judgment": {
      "kind": "Active",
      "description": "Deals 4936-4936 damage to a target within 4m and increases Enmity.\n\n5 Stagger Gauge Damage",
      "cooldown": 5
    },
    "Comrade in Arms": {
      "kind": "Stigma",
      "description": "Increases the caster's PvE Damage Tolerance by 20% and PvP Damage Tolerance by 10% and redirects damage taken by a party member within 40m each time they are attacked, sharing 26% to the caster and 26% to the attacked party member for 6s.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 120
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Debilitating Smash": {
      "kind": "Active",
      "description": "Deals 4112-4112 damage to up to 4 enemies within 4m and inflicts Debilitate for 5s on Block.\nDebilitate: Reduces Defense by 25%\n\n10 Stagger Gauge Damage",
      "cooldown": 10
    },
    "Annihilate": {
      "kind": "Active",
      "description": "Deals 6660-6660 damage to a target afflicted with Stun or Knockdown within 4m with a 30% chance to inflict Knockdown for 3s.\n100% chance to inflict Knockdown on NPC targets.\nHas a 5% chance to trigger when attacking a target with Incapacitated Immunity.\n\n10 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 200
    },
    "Empyrean Lord's Punishment": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 2976-2976 damage to up to 4 enemies within 4m of the target. Has a 50% chance to inflict Stun for 3s.\n100% chance to inflict Stun on NPC targets.\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Nezekan's Shield": {
      "kind": "Stigma",
      "description": "Grants a Protective Shield that blocks damage equaling 65% of Max HP for 3s to the caster and nearby party members within 40m.",
      "cooldown": 60
    },
    "Capture": {
      "kind": "Active",
      "description": "Deals 2868-2868 damage to an enemy within 20m. Pulls the target to inflict Root for 3s with a 75% chance to inflict Stun for 3s.\n100% chance to land Stun on NPC targets.",
      "cooldown": 42
    },
    "Flash Rampage": {
      "kind": "Active",
      "description": "Deals 2368-2368 damage to a target afflicted with Stagger within 4m and increases Enmity."
    },
    "Warding Strike": {
      "kind": "Active",
      "description": "Deals 4313-4313 damage to up to 4 enemies within 5m of the caster. Immediately restores 3161-3477 HP and grants Warding to the caster for 10s. Triggers [Judgment] for 2s.\nWarding: Increases PvE Damage Tolerance by 20% and PvP Damage Tolerance by 10%\n\n5 Stagger Gauge Damage",
      "cooldown": 30,
      "mp": 200
    },
    "Executing Blade": {
      "kind": "Stigma",
      "description": "Deals 4228-4228 damage to up to 4 enemies within 4m and reduces Defense by 30% for 5s. Deals 20% more damage on attacking a target inflicted with Impact-type status.\n\n20 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 100
    },
    "Blade Storm": {
      "kind": "Active",
      "description": "Selects a target within 10m and deals 1174-1174 damage to up to 4 enemies on the route with a 50% chance to inflict Stun for 2s.\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Shield Rush": {
      "kind": "Active",
      "description": "Rushes to a target within 10m and deals 2390-2390 damage after using [Dodge] or while flying. Has a 30% chance to inflict Stun for 3s. Triggers [Judgment] for 2s.\n100% chance to inflict Stun on NPC targets.\n\n20 Stagger Gauge Damage",
      "cooldown": 20
    },
    "Threatening Blow": {
      "kind": "Active",
      "description": "Deals 5643-5643 damage to up to 4 enemies within 4m and increases Enmity. Restores 150 MP."
    },
    "Battlefield Banner": {
      "kind": "Stigma",
      "description": "Increases Attack proportional to Defense for 22.5s.",
      "cooldown": 90
    },
    "Assault Fury": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3012-3012 damage to up to 4 enemies within 4m with a 30% chance to inflict Stun for 3s.\n100% chance to inflict Stun on NPC targets.\n\nIncreases Defense by up to 20% proportional to the number of targets hit.",
      "cooldown": 120
    },
    "Enhance Health": {
      "kind": "Passive",
      "description": "Increases the caster's HP by 10000. Increases Max HP by an additional 105% and Incoming Heal by 45%."
    },
    "Warding Shield": {
      "kind": "Passive",
      "description": "Increases the caster's Block by 200 and restores 1158-1390 HP on Block.\n\nCooldown: 3s"
    },
    "Ironclad Defense": {
      "kind": "Passive",
      "description": "Increases the caster's Defense by 85% and Endurance by 40%."
    },
    "Guarding Seal": {
      "kind": "Passive",
      "description": "Grants a Guarding Seal that blocks damage equaling 60% of Max HP for 30s when HP is 50% or less.\n\nCooldown: 60s"
    },
    "Impact Hit": {
      "kind": "Passive",
      "description": "Increases the caster's Impact-type Chance by 58% and Double Chance by 12%."
    },
    "Insulting Roar": {
      "kind": "Passive",
      "description": "Increases Enmity Boost by 100% for the caster and increases Attack by 25% for 5s on landing a Front Attack.\n\nCooldown: 5s"
    },
    "Fury": {
      "kind": "Passive",
      "description": "Increases Front Attack Damage Boost by 12% for the caster, and increases PvE Damage Boost by 25% and PvP Damage Boost by 12.5% for 20s for the caster and party members on Block.\n\nCooldown: 1s"
    },
    "Survival Willpower": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases PvE Damage Tolerance by 90% and PvP Damage Tolerance by 45% for 5s when afflicted with Stun, Knockdown, Airborne, Frost, or Fear. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\n\nDamage Tolerance Increase Cooldown: 60s\nStatus Effect Resist Increase Cooldown: 1s"
    },
    "Block Pain": {
      "kind": "Passive",
      "description": "Grants Block Pain for 10s when struck by an enemy.\nBlock Pain: Increases PvE Damage Tolerance by 50% and PvP Damage Tolerance by 25%\n\nCooldown: 20s"
    }
  },
  "ranger": {
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Deadshot": {
      "kind": "Active",
      "description": "Deals 4294-12884 damage to a target within 20m. Increases damage by 35% if the caster has Precision.\n\nMax 3 Charge Levels\n10-16 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 200
    },
    "Snipe": {
      "kind": "Active",
      "description": "Deals 846-846 damage to a target within 20m and restores 120 MP."
    },
    "Rapid Fire": {
      "kind": "Active",
      "description": "Deals 957-957 damage to a target within 20m and restores 120 MP."
    },
    "Spiral Arrow": {
      "kind": "Active",
      "description": "Deals 1113-1113 damage to a target within 20m and restores 150 MP."
    },
    "Drill Dart": {
      "kind": "Passive",
      "description": "Selects a target within 20m and deals 112-112 damage to up to 4 enemies within 4m of the target and restores 100 MP on landing a Critical Hit. Inflicts Bleed on targets, dealing 43-43 damage every 1s for 6s and reducing Incoming Heal by 60%.\n\nIncoming Heal reduction from [Drill Dart], [Debilitating Smash], and [Firestorm] does not stack.\n\n5 Stagger Gauge Damage"
    },
    "Griffon Arrow": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 4112-4112 damage to up to 4 enemies within 4m. Inflicts Crimson Flames for 10s.\nCrimson Flames: Takes 2056-2056 Fire Damage over Time every 1s. Damage over Time amount increases when targets move.\n\n20 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 200
    },
    "Suppressing Arrow": {
      "kind": "Active",
      "description": "Deals 3360-3360 damage to a target within 20m with a 40% chance to inflict Stun for 3s while Precision is active.\n100% chance to inflict Stun on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 20
    },
    "Burst Arrow": {
      "kind": "Active",
      "description": "Selects a target afflicted with Slow or Root within 20m and deals 5051-5051 damage to up to 4 enemies within 4m of the target.\n\n15 Stagger Gauge Damage",
      "cooldown": 20
    },
    "Marking Shot": {
      "kind": "Active",
      "description": "Deals 3095-3095 damage to a target within 20m. Moves the caster in the input direction and grants Precision for 10s.\nPrecision: Increases Critical Hit by 300\n\n7 Stagger Gauge Damage",
      "cooldown": 10,
      "mp": 50
    },
    "Tempest Arrow": {
      "kind": "Active",
      "description": "Deals 2200-2200 damage to a target within 20m and restores 180 MP."
    },
    "Gale Arrow": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 4474-4474 damage to up to 4 enemies within 4m of the target. Grants Gale to the caster for 10s.\nGale: Increases Combat Speed by 7%, PvE Damage Boost by 7%, and PvP Damage Boost by 3.5%\n\n10 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 200
    },
    "Ambush Kick": {
      "kind": "Stigma",
      "description": "Moves behind a target within 5m and deals 3655-3655 damage and inflicts Knock Back. The caster moves back.",
      "cooldown": 30
    },
    "Snare Shot": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2262-2262 damage to up to 4 enemies within 4m of the target. Inflicts Slow, reducing Move Speed by 40% for 5s.\n\n10 Stagger Gauge Damage",
      "cooldown": 15,
      "mp": 150
    },
    "Shackling Arrow": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2940-2940 damage to up to 4 enemies within 4m of the target. Has a 75% chance to inflict Root for 3s.\n100% chance to inflict Root on NPC targets.",
      "mp": 150
    },
    "Illusory Arrow": {
      "kind": "Stigma",
      "description": "Deals 4690-4690 to a target within 20m and inflicts Blind for 3s.\n\n15 Stagger Gauge Damage",
      "cooldown": 30,
      "mp": 200
    },
    "Sealing Arrow": {
      "kind": "Stigma",
      "description": "Deals 4449-4449 damage to a target within 20m. Has a 75% chance to inflict Seal for 5s.\n100% chance to inflict Seal on NPC targets.\n\n20 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Explosion Trap": {
      "kind": "Active",
      "description": "Sets an explosive trap at the caster's location. The trap lasts for 10 seconds and deals 4222-4222 damage to up to 4 enemies within 5m when stepped on. Has a 40% chance to inflict Stun for 3s.\n100% chance to inflict Stun on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 200
    },
    "Ensnaring Trap": {
      "kind": "Stigma",
      "description": "Sets an explosive trap at the caster's location. The trap lasts for 30 seconds and deals 5195-5195 damage to up to 4 enemies within 5m when stepped on. Inflicts Airborne for 3s.\n\n20 Stagger Gauge Damage",
      "cooldown": 90
    },
    "Stealth": {
      "kind": "Stigma",
      "description": "Enter Stealth for 10s.\nCannot be used in combat and the Stealth effect is removed upon entering combat.",
      "cooldown": 3
    },
    "Guerilla Strike": {
      "kind": "Active",
      "description": "Deals 5411-5411 damage to a target within 20m and the caster moves back."
    },
    "Eye of Rapid Burst": {
      "kind": "Active",
      "description": "Triggers the rapid-firing ability, reducing Bow range by 142100m but increasing Damage Boost by 3% and Physical Accuracy by 20.",
      "cooldown": 3
    },
    "Bow of Blessing": {
      "kind": "Stigma",
      "description": "Increases the caster's Critical Hit by 200 and Accuracy by 100 for 30s.",
      "cooldown": 120
    },
    "Explosive Arrow": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 6085-6085 damage to up to 4 enemies within 4m. Increases damage by 20% to targets afflicted with Slow or Root.\n\n20 Stagger Gauge Damage",
      "cooldown": 45
    },
    "Afterimage": {
      "kind": "Active",
      "description": "Creates an Afterimage to resist one Skill Attack for 3s",
      "cooldown": 20
    },
    "Hunters Resolve_active": {
      "kind": "Active",
      "description": "Resolves one's destined will, increasing Physical Critical Damage Boost by 20% for 10s.",
      "cooldown": 60
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Arrow Storm": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 5051-5051 damage to up to 4 enemies within 4m of the target. Has a 50% chance to inflict Stun for 3s.\n100% chance to inflict Stun on NPC targets.\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Arrow of Space-time": {
      "kind": "Active",
      "description": "Fires an arrow that pierces space-time, dealing damage to up to 6 targets along its path and Damage Bonus equal to 30% of a target's missing HP.",
      "cooldown": 60
    },
    "Dust Arrow": {
      "kind": "Active",
      "description": "Deals 125-125 damage to an enemy within 20m and reduces 20 Stagger Points. Enemies have 75% chance to be inflicted with Blind for 5s.",
      "cooldown": 20,
      "mp": 100
    },
    "Vaizel's Authority": {
      "kind": "Stigma",
      "description": "Increases the caster's Attack by 20% for 30s.",
      "cooldown": 60
    },
    "Impact Kick": {
      "kind": "Active",
      "description": "Deals 518-518 damage to a target within 20m.",
      "cooldown": 120
    },
    "Arrow Scattershot": {
      "kind": "Active",
      "description": "Deals 1510-1510 damage to a target afflicted with Stagger within 20m."
    },
    "Tempest Shot": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 1201-1201 damage to up to 4 enemies within 4m of the target.\n\n1 Stagger Gauge Damage",
      "mp": 120
    },
    "Mother Nature's Breath": {
      "kind": "Stigma",
      "description": "Increases the caster's PvE Damage Tolerance by 20%, PvP Damage Tolerance by 10%, and Critical Hit Resist by 200 for 6s. Grants Mother Nature's Embrace for the duration.\nMother Nature's Embrace: The caster has a 50% chance to absorb 25% of damage taken as HP.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 12
    },
    "Lightning Arrow": {
      "kind": "Active",
      "description": "Deals 2938-2938 damage to a target within 20m and inflicts Stun for 3s.",
      "cooldown": 42
    },
    "Supporting Fire": {
      "kind": "Stigma",
      "description": "Summons an orb that provides supporting fire for 15s near the caster. The orb has a 25% chance to fire a shot dealing 1039-1039 damage and absorbing 1.5% HP.\n\nFiring Cooldown: 0.5s",
      "cooldown": 90
    },
    "Assault Smite": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3848-3848 damage to up to 4 enemies within 4m of the target. Has a 30% chance to inflict Stun for 3s.\n100% chance to inflict Stun on NPC targets.\n\nIncreases Defense by up to 20% proportional to the number of targets hit.",
      "cooldown": 120
    },
    "Vigilant Eye": {
      "kind": "Passive",
      "description": "Increases the caster's Evasion by 200, Max HP by 45%, and restores 1853-2224 HP on Evasion.\n\nCooldown: 3s"
    },
    "Concentrated Fire": {
      "kind": "Passive",
      "description": "Has a 50% chance to deal 686-686 damage to a target taking Damage over Time.\n\nCooldown: 1s"
    },
    "Wind Vigor": {
      "kind": "Passive",
      "description": "Increases Max Stamina by 600. Increases Move Speed by 49% for 4.8s when attacked.\n\nCooldown: 5s"
    },
    "Focused Eye": {
      "kind": "Passive",
      "description": "Increases the caster's Accuracy by 100, PvE Damage Boost by 40%, PvP Damage Boost by 20%, and Double Chance by 8%."
    },
    "Hunter's Resolve": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Damage Boost by 45%."
    },
    "Unyielding Resolve": {
      "kind": "Passive",
      "description": "Increases the caster's Ailment-type Resist and Impact-type Resist by 58%."
    },
    "Rooting Eye": {
      "kind": "Passive",
      "description": "Has a 50% chance to deal 812-812 damage when landing an attack on a target afflicted with Slow or Root.\n\nCooldown: 1s"
    },
    "Melee Fire": {
      "kind": "Passive",
      "description": "Has a 25% chance to inflict 634-634 extra damage when landing an attack. Has a 5% chance to inflict Knock Back when landing an attack on a target within 5m.\n\nCooldown: 1s"
    },
    "Revitalization Contract": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\nImmediately restores 74% Max HP when HP is 10% or less.\n\nHealing Cooldown: 60s\nStatus Effect Resist Cooldown: 1s"
    },
    "Hunter's Soul": {
      "kind": "Passive",
      "description": "Has a 50% chance to deal 1316-1316 damage on a Critical Hit.\n\nCooldown: 1s"
    }
  },
  "assassin": {
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Quick Slice": {
      "kind": "Active",
      "description": "Deals 1278-1278 damage to up to 4 enemies within 4m and restores 100 MP."
    },
    "Throw Shadowblade": {
      "kind": "Stigma",
      "description": "Deals 3314-3314 damage to a target within 20m and inflicts Slow, which reduces Move Speed by 40% for 5s.\n\n15 Stagger Gauge Damage",
      "cooldown": 30
    },
    "Breaking Slice": {
      "kind": "Active",
      "description": "Deals 1416-1416 damage to up to 4 enemies within 4m and restores 105 MP."
    },
    "Swift Slice": {
      "kind": "Active",
      "description": "Deals 1683-1683 damage to up to 4 enemies within 4m and restores 120 MP."
    },
    "Flash Slice": {
      "kind": "Active",
      "description": "Moves to the opposite side of a target within 4m and deals 2237-2237 damage to up to 4 enemies, with a 40% chance to inflict Blind for 3s.\n100% chance to inflict Blind on NPC targets.\n\n7 Stagger Gauge Damage",
      "cooldown": 10,
      "mp": 50
    },
    "Ambush": {
      "kind": "Active",
      "description": "Deals 2777-2777 damage to a target within 4m. Increases damage by 30% on landing as a Back attack.\n\n7 Stagger Gauge Damage",
      "cooldown": 10,
      "mp": 100
    },
    "Shadowstrike": {
      "kind": "Active",
      "description": "Moves behind a target within 20m and deals 1974-1974 damage, rotates, and inflicts Stun for 3s.\n\n10 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 150
    },
    "Evasion Stance": {
      "kind": "Stigma",
      "description": "Grants guaranteed evasion of all damage for a brief duration. Restores 500 MP and Stamina once on Evasion.",
      "cooldown": 20
    },
    "Shadowblade Pursuit": {
      "kind": "Active",
      "description": "Moves to a target within 20m and deals 3646-3646 damage.\n\n15 Stagger Gauge Damage"
    },
    "Savage Roar": {
      "kind": "Active",
      "description": "Deals 1673-1673 damage to up to 4 enemies within 4m and engraves 1 Insignia for 10s.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Savage Back Kick": {
      "kind": "Active",
      "description": "Deals 1831-1831 damage to up to 4 enemies within 4m and engraves 1 Insignia for 10s.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Savage Smash": {
      "kind": "Active",
      "description": "Deals 2018-2018 damage to up to 4 enemies within 4m and engraves 1 Insignia for 10s.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Insignia Explosion": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 4348-4348 damage to up to 4 enemies within 4m, inflicting Stun for 3s.\nStun chance is doubled on NPC targets.\n\nDamage and Stun chance increase based on Insignia stacks.\n1 stack: 4870-4870 damage, 10% Stun chance\n2 stacks: 5392-5392 damage, 20% Stun chance\n3 stacks: 5914-5914 damage, 30% Stun chance\n4 stacks: 6436-6436 damage, 40% Stun chance\n5 stacks: 6958-6958 damage, 50% Stun chance\n\n7 Stagger Gauge Damage",
      "cooldown": 10,
      "mp": 200
    },
    "Shadowstep": {
      "kind": "Stigma",
      "description": "Deals 3543-3543 damage to a target within 4m. The caster moves back and gains Stealth for 3s.",
      "cooldown": 45,
      "mp": 100
    },
    "Frenzied Accord": {
      "kind": "Active",
      "description": "Increases PvE Damage Boost by 20% and PvP Damage Boost by 10% for the caster and nearby party members within 40m for 30s.",
      "cooldown": 120
    },
    "Apply Poison": {
      "kind": "Passive",
      "description": "Has a 15% chance to reduce the target's Incoming Heal by 90% and inflict Poison for 10s on landing an attack. Poison deals 2885~2885 Damage over Time every 1s.\n\nCooldown: 1s"
    },
    "Surging Bloodlust": {
      "kind": "Active",
      "description": "Increases damage of 1 skill by 120% and restores 300 MP for 10s.",
      "cooldown": 60
    },
    "Shadow Walk": {
      "kind": "Stigma",
      "description": "Grants Stealth for 20s.\nCannot be used in combat and the effect is removed upon entering combat.",
      "cooldown": 3
    },
    "Whirlwind Slice": {
      "kind": "Active",
      "description": "Deals 3701-3701 damage to a target within 4m with a 40% chance to rotate and inflict Stun for 3s on Evasion.\n100% to inflict Stun on NPC targets.\n\n7 Stagger Gauge Damage",
      "cooldown": 10
    },
    "Shadow Fall": {
      "kind": "Passive",
      "description": "Moves to a target afflicted with Stun within 10m, deals 465-465 damage, and inflicts Knockdown for 3s.\nHas a 5% chance to trigger on attacking a target with Incapacitated Immunity.\n\n10 Stagger Gauge Damage"
    },
    "Aerial Bind": {
      "kind": "Stigma",
      "description": "Deals 3566-3566 damage to a target within 4m, with a 50% chance to inflict Airborne for 3s. Has a 100% chance to inflict Airborne for 3s on targets with 5 stacks of Insignia.\n100% chance to inflict Airborne on NPC targets.\n\n20 Stagger Gauge Damage",
      "cooldown": 120,
      "mp": 150
    },
    "Aerial Slaughter": {
      "kind": "Active",
      "description": "Deals 5349-5349 damage to a target within 4m, making them fall and inflicting Knockdown for 3s.",
      "mp": 150
    },
    "Smoke Bomb": {
      "kind": "Stigma",
      "description": "Deals 4114-4114 to a target within 10m and inflicts Blind for 5s.\n\n15 Stagger Gauge Damage",
      "cooldown": 30,
      "mp": 100
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Savage Fang": {
      "kind": "Stigma",
      "description": "Deals 4572-4572 damage to up to 4 enemies within 4m and engraves 5 Insignias for 10s.\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Spiral Slice": {
      "kind": "Stigma",
      "description": "Rushes to a target within 20m and deals 4572-4572 damage, removing 1 buff.\n\nDeals 1645-1645 extra damage based on the number of buffs removed.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Prepare to Assassinate": {
      "kind": "Active",
      "description": "Grants Stealth for 20s.\nCannot be used in combat and the effect is removed upon entering combat.",
      "cooldown": 300
    },
    "Triniel's Dagger": {
      "kind": "Stigma",
      "description": "Deals 5852-5852 damage to a target within 4m and increases all of the target's skill cooldowns by 5% of their duration. Increases damage by 30% if attacking from behind the target.\n\n20 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 200
    },
    "Illusive Clone": {
      "kind": "Stigma",
      "description": "Removes [Heart Gore] cooldown and deals 20% of damage dealt as extra damage for 30s.",
      "cooldown": 90,
      "mp": 200
    },
    "Storm Slice": {
      "kind": "Active",
      "description": "Deals 2936-2936 damage to up to 4 targets within 4m and rotates and inflicts Stun for 3s.",
      "cooldown": 42
    },
    "Storm Rampage": {
      "kind": "Active",
      "description": "Deals 1692-1692 damage to a target afflicted with Stagger within 4m."
    },
    "Heart Gore": {
      "kind": "Passive",
      "description": "Triggers on landing a Critical Hit, dealing 111-111 damage to up to 4 enemies within 4m and restores 100 MP.\n\n5 Stagger Gauge Damage"
    },
    "Infiltrate": {
      "kind": "Active",
      "description": "Moves behind a target within 10m and deals 2236-2236 damage with a 50% chance to inflict Blind for 3s after using [Dodge] or while flying.\n100% chance to inflict Blind on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 20
    },
    "Evasion Contract": {
      "kind": "Stigma",
      "description": "Removes Slow and Root from the caster and increases the caster's Evasion by 200 for 30s. Grants Slow and Root Immunity.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 90
    },
    "Dark Strike": {
      "kind": "Active",
      "description": "Deals 2907-2907 damage to a target within 4m and push them for 10m."
    },
    "Swift Contract": {
      "kind": "Stigma",
      "description": "Increases the caster's Combat Speed by 20% for 30s.",
      "cooldown": 60
    },
    "Assault Ambush": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 4160-4160 damage to up to 4 enemies within 4m, with a 30% chance to inflict Blind for 5s.\n100% chance to inflict Blind on NPC targets.\n\nIncreases Defense by up to 20% proportional to the number of targets hit.",
      "cooldown": 120
    },
    "Heightened Sixth Sense": {
      "kind": "Passive",
      "description": "Increases the caster's Evasion by 200 and HP by 6000. Increases Max HP by an extra 60% and restores 1853-2224 HP on Evasion.\n\nCooldown: 3s"
    },
    "Exploit Weakness": {
      "kind": "Passive",
      "description": "Increases caster's Critical Hit by 490. Has a 25% chance to increase Attack by 25% for 10s, and a 7% chance to summon up to 5 clones on landing a Critical Hit. Each clone deals 279-279 damage and inflicts Insignia that lasts for 10s (up to 5 Insignia stacks).\n\nClone cooldown: 1s\nAttack increase cooldown: 1s"
    },
    "Rear Smite": {
      "kind": "Passive",
      "description": "Increases the caster's Back Attack Damage Boost by 22.5%, PvE Damage Boost by 22.5%, and PvP Damage Boost by 11.25%."
    },
    "Assault Stance": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Damage Boost by 45%."
    },
    "Impact Hit": {
      "kind": "Passive",
      "description": "Increases the caster's Impact-type Chance by 58% and Double Chance by 12%."
    },
    "Ambush Stance": {
      "kind": "Passive",
      "description": "Grants Ambush Stance for 10s when using skills that rush or involve movement.\nAmbush Stance: Has a 50% chance to deal 861-861 damage on landing an attack.\n\nCooldown: 1s"
    },
    "Defense Break": {
      "kind": "Passive",
      "description": "Reduces the target's Defense by 90% and Status Effect Resist by 50% for 10s when landing an attack on a target afflicted with Stagger or an Impact-type status.\n\nCooldown: 20s"
    },
    "Revitalization Contract": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\nImmediately restores 74% Max HP when HP is 10% or less.\n\nHealing Cooldown: 60s\nStatus Effect Resist Cooldown: 1s"
    },
    "Determination": {
      "kind": "Passive",
      "description": "Deals 871-871 damage when landing an attack on a target with 69% HP or less.\n\nCooldown: 1s"
    }
  },
  "spiritmaster": {
    "Spiritmaster Weapon Equip": {
      "kind": "Passive",
      "description": "Allows equipping Spiritmaster weapons.\n\n[Applicable weapons]\nOrb, Spellbook"
    },
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Return: All Spirits": {
      "kind": "Active",
      "description": "Returns all summoned Spirits to the Spirit Realm.\nClick the Returm icon to return the Spirits."
    },
    "Cold Shock": {
      "kind": "Active",
      "description": "Deals 1111-1111 Water damage to a target within 20m and restores 100 MP."
    },
    "Vacuum Explosion": {
      "kind": "Active",
      "description": "Deals 1242-1242 Wind damage to a target within 20m and restores 100 MP."
    },
    "Earth Tremor": {
      "kind": "Active",
      "description": "Deals 1464-1464 Earth damage to a target within 20m and restores 150 MP."
    },
    "Combustion": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 1443-1443 Fire damage to up to 4 enemies within 4m of the target.\n\n3 Stagger Gauge Damage",
      "mp": 120
    },
    "Ashy Call": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2239-2239 Fire damage to up to 4 enemies within 4m of the target.",
      "mp": 120
    },
    "Siphon": {
      "kind": "Stigma",
      "description": "Deals 3738-3738 damage and 300 MP damage to a target within 20m. Absorbs 10% HP and restores 300 MP.",
      "cooldown": 30
    },
    "Soul's Cry": {
      "kind": "Active",
      "description": "Deals 2277-2277 damage to a target within 20m, with a 70% chance to inflict Fear for 5s.\n100% chance to inflict Fear on NPC targets. \n\n15 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 150
    },
    "Cry of Terror": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 2722-2722 damage to up to 4 enemies within 4m of the target, with a 50% chance to inflict Fear for 5s.\n100% chance to inflict Fear on NPC targets.",
      "cooldown": 90,
      "mp": 200
    },
    "Magic Backflow": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 1733-1733 damage every 1s for 10s, removing up to 3 buffs.\n\nDeals extra damage based on the number of buffs removed.\n1 Removed: 1155-1155 Damage\n2 Removed: 1386-1386 Damage\n3 Removed: 1733-1733 Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Summon: Fire Spirit": {
      "kind": "Active",
      "description": "Summons a Fire Spirit.\nThe Fire Spirit rushes towards a target within 20m and uses a skill that deals 2530-2530 damage to up to 4 enemies within 5m.\nThe Fire Spirit fights alongside the caster using basic attacks, with a 15% chance to use its skill each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Fire Spirit's Attack and Defense by 2%.\n\n7 Stagger Gauge Damage\nSpirit Skill Cooldown: 3s",
      "cooldown": 15,
      "mp": 150
    },
    "Use Spirit Summon Skill": {
      "kind": "Active",
      "description": null
    },
    "Summon: Water Spirit": {
      "kind": "Active",
      "description": "Summons a Water Spirit.\nThe Water Spirit uses a skill that deals 3118-3118 Water damage to a target within 20m.\nThe Water Spirit fights alongside the caster using basic attacks, with a 15% chance to use its skill and restoring 20 of the Spiritmaster's MP each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Water Spirit's Attack and Critical Hit by 2%.\n\n7 Stagger Gauge Damage\nSpirit Skill Cooldown: 3s",
      "cooldown": 15,
      "mp": 150
    },
    "Summon: Wind Spirit": {
      "kind": "Active",
      "description": "Summons a Wind Spirit.\nThe Wind Spirit selects a target within 20m and uses a skill that deals 2527-2527 Wind damage to up to 4 enemies within 5m of the target and restores 1831-2014 HP to the Spiritmaster.\nThe Wind Spirit fights alongside the caster using basic attacks, with a 10% chance to use its skill and restores 1.5% of the Spiritmaster's HP each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Wind Spirit's Accuracy and Critical Hit by 2%.\n\n7 Stagger Gauge Damage\nSpirit Skill Cooldown: 3s",
      "cooldown": 15,
      "mp": 150
    },
    "Summon: Earth Spirit": {
      "kind": "Active",
      "description": "Summons an Earth Spirit.\nThe Earth Spirit uses a skill that deals 3017-3017 Earth damage to a target within 20m and increases Enmity by 33000. Has a 30% chance to inflict Taunt for 2s if the target is a player.\nThe Earth Spirit fights alongside the caster using basic attacks, with a 10% chance to use its skill and increasing Enmity each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Earth Spirit's Defense and HP by 2%.\n\n7 Stagger Gauge Damage\nSpirit Skill Cooldown: 3s",
      "cooldown": 15,
      "mp": 150
    },
    "Jointstrike: Curse": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 1613-1613 damage to up to 4 enemies within 4m of the target, and inflicts Curse.\n\nCurse: Deals 3226-3226 Damage over Time every 1s and reduces damage dealt to the Spiritmaster by 10% for 5s.\n\nThe Spirit joins for a coordinated assault.\nFire: 2172-2172 AoE damage\nWater: 2602-2602 damage\nEarth: 2000-2000 damage and reduces Status Effect Resist by 10%\nWind: 645-645 AoE damage and 1290-1290 Damage over Time\nAncient: 3710-3710 AoE damage\n\n10 Stagger Gauge Damage",
      "cooldown": 10,
      "mp": 80
    },
    "Jointstrike: Corrode": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 1361-1361 damage to up to 4 enemies within 4m of the target, inflicting Corrode for 20s.\n\nCorrode: Increases damage taken from the Spirit by 10% and deals 2722-2722 Damage over Time every 1s\n\nThe Spirit joins for a coordinated assault.\nFire: 1724-1724 AoE damage and Knockdown\nWater: 2069-2069 damage and Slow\nEarth: 1869-1869 damage and Seal\nWind: 1551-1551 AoE damage and Stun\nAncient: 2931-2931 AoE damage and Knockdown\n\n10 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 200
    },
    "Fire Spirit: Rage Burst": {
      "kind": "Active",
      "description": "Selects a target within 4m and deals 1724-1724 damage to up to 4 enemies within 5m of the target, inflicting Knockdown.",
      "cooldown": 2
    },
    "Water Spirit: Ice Chain": {
      "kind": "Active",
      "description": "Deals 2069-2069 damage to a target within 20m and reduces Move Speed by -40%.",
      "cooldown": 2
    },
    "Earth Spirit: Taunt": {
      "kind": "Active",
      "description": "Taunts a target within 4m for 1.87s, and increases Enmity dealt by the Earth Spirit by 50% for 10s.",
      "cooldown": 2
    },
    "Wind Spirit: Gale": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 1551-1551 damage to up to 4 enemies within 4m of the target, inflicting Stun.",
      "cooldown": 2
    },
    "Ancient Spirit: Break": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2931-2931 damage to up to 4 enemies within 5m of the target, inflicting Knockdown.",
      "cooldown": 2
    },
    "Spirit Protection": {
      "kind": "Passive",
      "description": "Increases the caster's Defense by 80% and Spirit's Defense by 80%."
    },
    "Command: Proxy": {
      "kind": "Stigma",
      "description": "Increases the Spirit's PvE Damage Tolerance by 20% and PvP Damage Tolerance by 10% for 4s, and redirects damage taken each time the Spiritmaster is attacked, sharing 26% to the Spiritmaster and 26% to the Spirit.\nThis effect is applied to the summoned Spirit with the highest HP. If HP is equal, it will be applied to the closer target. Damage is only shared if the Spirit is within 25m.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 60
    },
    "Spirit Momentum": {
      "kind": "Active",
      "description": "Apply 30% Combat Speed, 30% Spell Action Speed, 110 Magic Attack Bonus effects to the caster and spirit summons for 15s.",
      "cooldown": 90
    },
    "Enhance: Spirit's Benediction": {
      "kind": "Stigma",
      "description": "Increases PvE Damage Boost by 20%, PvP Damage Boost by 10%, PvE Damage Tolerance by 20%, PvP Damage Tolerance by 10%, and restores 7150-7865 HP every 1s for 10s to the caster and Spirit.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 60
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Curse of Despair": {
      "kind": "Active",
      "description": "Deals 2951-2951 damage to a target within 20m with a 75% chance to inflict Fear and Root for 5s.\n100% chance to inflict Fear and Root on NPC targets.",
      "cooldown": 42
    },
    "Cursed Cloud": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 1905-1905 damage to up to 4 enemies within 4m, and deals 3811-3811 Damage over Time every 1s for 10s.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Seize Magic": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3267-3267 damage to up to 4 enemies within 4m of the target, removing up to 2 buffs.\n\nDeals 1176-1568 extra damage based on the number of buffs removed.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Jointstrike: Destructive Attack": {
      "kind": "Stigma",
      "description": "Deals 1815-1815 damage to a target within 20m.\n\nThe Spirit joins you in a coordinated assault.\nFire: 2105-2105 AoE damage\nWater: 2526-2526 damage\nEarth: 2315-2315 damage\nWind: 1894-1894 AoE damage\nAncient: 3368-3368 AoE damage\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Summon: Ancient Spirit": {
      "kind": "Stigma",
      "description": "Summons an Ancient Spirit for 30s and grants Four Elements status each time the Ancient Spirit uses its skill.\nThe Ancient Spirit uses a skill on a target within 20m, dealing 3430-3430 damage to up to 4 enemies within 4m.\nThe Ancient Spirit fights alongside the caster using basic attacks and reuses its skill after 7 basic attacks. It is dismissed upon selecting the summon icon.\nEach skill level increases the Ancient Spirit's Attack, Defense, Accuracy, and Critical Hit by 2%.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Magic Block": {
      "kind": "Stigma",
      "description": "Deals 3394-3394 damage to a target within 20m, with a 75% chance to inflict Seal for 5s.\n\n20 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Elemental Replenishment": {
      "kind": "Active",
      "description": "Consumes own HP to restore 3281-3828 HP to the summoned spirit.",
      "cooldown": 30
    },
    "Continuous Impact": {
      "kind": "Active",
      "description": "Deals damage to a Stagger target."
    },
    "Dismiss: Fire Spirit": {
      "kind": "Active",
      "description": "Returns the Fire Spirit to the Spirit Realm.\nThe Fire Spirit rushes towards a target within 20m and uses a skill which deals 2530-2530 damage to up to 4 enemies within 5m.\nContinues fighting using basic attacks with a 15% chance to use its skill each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Fire Spirit's Attack and Defense by 2%.\n\n7 Stagger Gauge Damage"
    },
    "Dismiss: Water Spirit": {
      "kind": "Active",
      "description": "Returns the Water Spirit to the Spirit Realm.\nThe Water Spirit uses a skill which deals 3118-3118 Water damage to a target within 20m.\nContinues fighting using basic attacks with a 15% chance to use its skill and restores 20 of the Spiritmaster's MP each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Water Spirit's Attack and Critical Hit by 2%.\n\n7 Stagger Gauge Damage"
    },
    "Dismiss: Earth Spirit": {
      "kind": "Active",
      "description": "Returns the Earth Spirit to the Spirit Realm.\nThe Earth Spirit uses a skill which deals 3017-3017 Earth damage to a target within 20m and increases Enmity by 33000. Has a 30% chance to inflict Taunt for 2s if the target is a player.\nContinues fighting using basic attacks with a 10% chance to use its skill and increases Enmity each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Earth Spirit's Defense and HP by 2%.\n\n7 Stagger Gauge Damage"
    },
    "Dismiss: Wind Spirit": {
      "kind": "Active",
      "description": "Returns the Wind Spirit to the Spirit Realm.\nThe Wind Spirit selects a target within 20m and uses a skill that deals 2527-2527 Wind damage to up to 4 enemies within 5m of the target and restores 1831-2014 HP to the Spiritmaster.\nContinues fighting using basic attacks with a 10% chance to use its skill and restores 1.5% of the Spiritmaster's HP each time an attack lands. It is dismissed upon selecting the summon icon.\nEach skill level increases the Wind Spirit's Accuracy and Critical Hit by 2%.\n\n7 Stagger Gauge Damage"
    },
    "Dismiss: Ancient Spirit": {
      "kind": "Active",
      "description": "Returns the Ancient Spirit to the Spirit Realm.\nThe Ancient Spirit uses a skill on a target within 20m which deals 3430-3430 damage to up to 4 enemies.\nAfter using the skill, it continues fighting using basic attacks and reuses its skill after 7 basic attacks. It is dismissed upon selecting the summon icon.\nEach skill level increases the Spirit's Attack, Defense, Accuracy, and Critical Hit by 2%.\n\n20 Stagger Gauge Damage"
    },
    "Elemental Fusion": {
      "kind": "Passive",
      "description": "The Spiritmaster receives an element each time a Spirit uses its skill. Grants Four Elements status and the ability to use the [Elemental Fusion] skill upon reaching 4 stacks. [Elemental Fusion] can only be used when granted Four Elements, and using [Elemental Fusion] will immediately remove Four Elements. Cannot receive additional elements while in Four Elements status.\n\nDeals 1075-1075 damage to a target within 20m.\n\n10 Stagger Gauge Damage"
    },
    "Extract Vitality": {
      "kind": "Active",
      "description": "Deals 1551-1551 damage to the target and\nrestores summoned Spirit's HP by 3281-3828.",
      "cooldown": 20
    },
    "Dimensional Control": {
      "kind": "Active",
      "description": "A skill that is triggered briefly each time a Spirit uses its skill.\nSelects a target within 20m and deals 1922-1922 damage to up to 4 enemies within 4m of the target and inflicts Slow, reducing Move Speed by 40% for 3s on hit. Restores 100 MP.\n\n5 Stagger Gauge Damage"
    },
    "Rapid Scattershot": {
      "kind": "Active",
      "description": "Deals 1532-1532 damage to a target afflicted with Stagger within 20m."
    },
    "Soul Decimation": {
      "kind": "Active",
      "description": "Deals 722-722 damage to a Stagger target.",
      "cooldown": 0.5
    },
    "Kaisinel's Power": {
      "kind": "Stigma",
      "description": "Increases Status Effect Chance by 20% and Status Effect Resist by 20% for the caster for 22.5s.",
      "cooldown": 60
    },
    "Flame Blessing": {
      "kind": "Stigma",
      "description": "Has a 50% chance to deal 744-744 extra damage to enemies on landing an attack for 22.5s.\n\nCooldown: 1s",
      "cooldown": 60
    },
    "Assault Terror": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 2976-2976 damage to up to 4 enemies within 4m of the target, with a 30% chance to inflict Fear for 5s.\n100% chance to inflict Fear on NPC targets.\n\nIncreases Defense by up to 20% proportional to the number of targets hit.",
      "cooldown": 120
    },
    "Spirit Strike": {
      "kind": "Passive",
      "description": "Increases the caster's PvE Damage Boost by 45%, PvP Damage Boost by 22.5%, and Perfect Chance by 16%. Increases the Spirit's PvE Damage Boost by 45%, PvP Damage Boost by 22.5%, and Perfect Chance 16%."
    },
    "Spirit's Descent": {
      "kind": "Passive",
      "description": "Has a 50% chance to deal 575-575 extra damage whenever the Spiritmaster's attacks land within 10 seconds of summoning a Spirit. Duration is increased to 30s when an Ancient Spirit is summoned.\n\nCooldown: 1s"
    },
    "Corrode": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Hit by 490, with a 50% chance to deal 1149-1149 damage on landing a Critical Hit.\n\nCooldown: 1s"
    },
    "Spirit Revitalization": {
      "kind": "Passive",
      "description": "Has a 50% chance to reduce the cooldown of Spirit summon skills by 1s on hit. Immediately heals the Spirit for 90% of its Max HP when its HP is 50% or less.\n\nCooldown: 1s\nSpirit Healing Cooldown: 30s",
      "cooldown": 30
    },
    "Mental Focus": {
      "kind": "Passive",
      "description": "Increases the caster's Mental-type Chance(s) by 50% and Double Chance by 12%."
    },
    "Spirit Communion": {
      "kind": "Passive",
      "description": "Increases the caster's Accuracy by 100. Has a 10% chance to restore the caster's and Spirit's HP by 1191-1310 when landing an attack.\n\nCooldown: 1s"
    },
    "Element Unification": {
      "kind": "Passive",
      "description": "Increases Critical Damage Boost by 5% for the caster and Spirit for 10s upon landing a Spirit skill attack. Stacks up to 5 times.\n\nCooldown: 1s"
    },
    "Revitalization Contract": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\nImmediately restores 74% Max HP when HP is 10% or less.\n\nHealing Cooldown: 60s\nStatus Effect Resist Cooldown: 1s"
    },
    "Consecutive Countercurrent": {
      "kind": "Passive",
      "description": "Has a 50% chance to deal 554-554 extra damage on landing an attack on a target that is taking Damage over Time.\n\nCooldown: 1s"
    }
  },
  "sorcerer": {
    "Equip Sorcerer Weapon": {
      "kind": "Passive",
      "description": "Allows equipping Sorcerer weapons.\n\n[Applicable weapons]\nSpellbook, Jewel"
    },
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Flame Scattershot": {
      "kind": "Active",
      "description": "Deals 1867-1867 Fire damage to a target afflicted with Stagger within 20m."
    },
    "Firebomb": {
      "kind": "Active",
      "description": "Throws a firebomb to deal damage.\nTarget takes ?-? Damage over Time every 1s for ?.\nThe caster moves 6m in the entered direction.",
      "cooldown": 12,
      "mp": 150
    },
    "Burst": {
      "kind": "Active",
      "description": "Deals 1553-1553 Fire damage to a target within 20m and restores 100 MP."
    },
    "Firestorm": {
      "kind": "Active",
      "description": "Deals 4189-4189 Fire damage to a target within 20m.\n\n5 Stagger Gauge Damage",
      "cooldown": 5,
      "mp": 250
    },
    "Blaze": {
      "kind": "Active",
      "description": "Deals 4289-4289 Fire damage to a target afflicted with Fire Mark within 20m and restores 100 MP.\n\n7 Stagger Gauge Damage",
      "cooldown": 5
    },
    "Hellfire": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 8121-24364 Fire damage to up to 4 enemies within 4m of the target.\n\nMax 3 Charge Levels\n20-35 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 200
    },
    "Cold Snap": {
      "kind": "Passive",
      "description": "Has a 50% chance to deal 530-530 extra damage when landing an attack on a target afflicted with Slow.\n\nCooldown: 1s"
    },
    "Ice Chain": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2038-2038 Water damage to up to 4 enemies within 4m of the target and inflicts Slow, reducing Move Speed by 40% for 5s.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Cold Wave": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2266-2266 Water damage to up to 4 enemies within 4m of the target.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Winter's Shackles": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 3345-3345 Water damage to up to 4 enemies within 4m. Inflicts Slow for 3s.",
      "cooldown": 45,
      "mp": 200
    },
    "Glacial Smite": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 4680-4680 Water damage to up to 4 enemies within 4m of the target.\n\n20 Stagger Gauge Damage",
      "cooldown": 90,
      "mp": 200
    },
    "Soul Freeze": {
      "kind": "Stigma",
      "description": "Deals 3285-3285 Water damage to a target within 20m with a 75% chance to inflict Seal for 5s.\n100% chance to inflict Seal on NPC targets. \n\n20 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Curse: Tree": {
      "kind": "Stigma",
      "description": "Polymorphs a target within 20m into a tree for 10s, reducing their Fire Tolerance by 20%, while the caster moves back. Polymorph is canceled if the target is attacked.\n\n20 Stagger Gauge Damage",
      "cooldown": 66
    },
    "Frost": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2168-2168 Water damage to up to 4 enemies within 4m of the target, with a 50% chance to inflict Frost on the target for 3s.\n100% chance to inflict Frost on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 30,
      "mp": 100
    },
    "Steel Barrier": {
      "kind": "Stigma",
      "description": "Grants a 40% Max HP Protective Shield for 60s. Increases PvE Damage Tolerance by 10% and PvP Damage Tolerance by 5% for the shield's duration, and restores 300 Stamina when the effect ends.",
      "cooldown": 60
    },
    "Vaizel's Wisdom": {
      "kind": "Active",
      "description": "With Vaizel's Grace, gains wisdom to increase Spell Action Speed by ?% and all Elemental Boosts by ?%.",
      "cooldown": 60
    },
    "Cold Storm": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 2995-2995 Water damage, inflicting Slow on up to 4 enemies within 5m. Summons a Cold Storm at the target's location for 7s, inflicting Frostbite.\nFrostbite: Deals 1497-1497 Water Damage over Time every 1s for 10s. The Damage over Time amount increases when targets move.\n\n20 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Flame Arrow": {
      "kind": "Active",
      "description": "Deals 1396-1396 Fire damage to a target within 20m and restores 100 MP."
    },
    "Frost Burst": {
      "kind": "Active",
      "description": "Selects a target afflicted with Frost within 20m and deals 3643-3643 Water damage to up to 4 enemies within 4m of the target. Has a 7% chance to trigger on attacking a target with Incapacitated Immunity.\n\n7 Stagger Gauge Damage",
      "cooldown": 10
    },
    "Arctic Armor": {
      "kind": "Stigma",
      "description": "Increases the caster's PvE Damage Tolerance by 20%, PvP Damage Tolerance by 10%, and grants a 5% chance to inflict Frost for 3s on enemies that attack the caster from within 7m for 22.5s. Grants Magic Displacement while MP is 50% or more for the duration.\nMagic Displacement: Damage taken by the caster is divided, directing 50% to HP and 10% to MP.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 90
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Pyroclasm": {
      "kind": "Active",
      "description": "Deals 1809-1809 Fire damage to a target within 20m and restores 120 MP."
    },
    "Summon Flame": {
      "kind": "Active",
      "description": "Deals damage by expanding the air around the target.",
      "cooldown": 1,
      "mp": 200
    },
    "Bittercold Wind": {
      "kind": "Active",
      "description": "Selects a target within 20m and summons a Bittercold Wind lasting for 2s at their location. Deals 5155-5155 Water damage to up to 4 enemies within 4m of the Bittercold Wind, with a 60% chance to inflict Root for 3s.\n100% chance to inflict Root on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 15,
      "mp": 150
    },
    "Illusion": {
      "kind": "Active",
      "description": "Covers the caster with Illusion Aura to resist one Skill Attack for ?.",
      "cooldown": 20
    },
    "Lumiel's Space": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3163-3163 damage to up to 4 enemies within 4m of the target, with a 75% chance to inflict Airborne for 3s.\n100% chance to inflict Airborne on NPC targets.",
      "cooldown": 90,
      "mp": 300
    },
    "Wish of Concentration": {
      "kind": "Active",
      "description": "Increases the caster's Attack by 10% and Accuracy by 100 for 30s.",
      "cooldown": 60,
      "mp": 100
    },
    "Delayed Explosion": {
      "kind": "Stigma",
      "description": "Deals 3538-3538 Fire damage to a target within 20m after 4s. Increases damage taken from the caster by 15% during the delay.",
      "cooldown": 30,
      "mp": 200
    },
    "Winter's Illusion": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 4348-4348 Water damage to up to 4 enemies within 4m of the target.",
      "cooldown": 0.5,
      "mp": 200
    },
    "Curse: Old Tree": {
      "kind": "Active",
      "description": "Polymorphs a target within 20m into a tree for 7s, reducing their Fire Tolerance by 20%, while the caster moves back. Polymorph is canceled if the target is attacked.",
      "cooldown": 42
    },
    "Magic Energy Blast": {
      "kind": "Active",
      "description": "Launches explosive magic at a Staggered target, dealing damage."
    },
    "Divine Burst": {
      "kind": "Stigma",
      "description": "Deals 3613-3613 Fire damage to a target within 20m.\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Lumiel's Authority": {
      "kind": "Active",
      "description": "Removes 1 Status Effect from the caster and nearby party members within 40m and grants Status Effect Immunity for 3s",
      "cooldown": 120
    },
    "Fire Wall": {
      "kind": "Stigma",
      "description": "Summon a Fire Wall that lasts for 3s at the location of a target within 20m. Deals 4118-4118 Fire damage and inflicts Embers on up to 4 enemies within the Fire Wall area (1x10m) for 10s.\nEmbers: Deals 2059-2059 Fire Damage over Time every 1s for 10s. Damage over Time amount increases when targets move.",
      "cooldown": 60,
      "mp": 200
    },
    "Element Enhancement": {
      "kind": "Stigma",
      "description": "Increases the caster's Fire Attack by 20% and Water Attack by 20% for 22.5s.",
      "cooldown": 60
    },
    "Hibernation": {
      "kind": "Stigma",
      "description": "Grants Hibernation to the caster for 5s. The caster becomes immune to damage and status effects while Hibernation is active.\nUsing [Remove Hibernation] while Hibernation is active immediately removes the effect, restores 20% Max HP, and moves the caster backward.\n\nCannot block certain powerful attacks and is unaffected by cooldown increase effects.",
      "cooldown": 132
    },
    "Remove Hibernation": {
      "kind": "Passive",
      "description": "Immediately removes the caster's Hibernation status and the caster moves back."
    },
    "Assault Bombardment": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 2808-2808 damage to up to 4 enemies within 4m, with a 30% chance to inflict Frost for 3s.\n100% chance to land Frost on NPC targets.\n\nIncreases Defense by up to 20% proportional to the number of targets hit.",
      "cooldown": 120
    },
    "Fire Mark": {
      "kind": "Passive",
      "description": "Has a 20% chance to inflict Fire Mark for 5s on landing a Fire attack.\nFire Mark: Has a 20% chance to take 1161-1161 extra damage when taking Fire damage while afflicted with Fire Mark.\n\nCooldown: 1s"
    },
    "Robe of Earth": {
      "kind": "Passive",
      "description": "Increases Max MP by 85% and Natural MP Regen by 200. Increases Critical Hit by 300 when MP is 50% or more."
    },
    "Robe of Flame": {
      "kind": "Passive",
      "description": "Increases the caster's Accuracy by 100, PvE Damage Boost by 40%, PvP Damage Boost by 20%, and Double Chance by 8%."
    },
    "Robe of Cold": {
      "kind": "Passive",
      "description": "Increases the caster's Defense by 40% and Critical Hit Resist by 250 and inflicts Slow on an enemy when struck by them, reducing the enemy's Move Speed by 85% for 12s.\n\nCooldown: 10s"
    },
    "Absorb Essence": {
      "kind": "Passive",
      "description": "Increases Ailment-type and Mental-type Chance by 38% and restores 220 MP on landing an attack.\n\nCooldown: 1s"
    },
    "Grace of Resistance": {
      "kind": "Passive",
      "description": "Increases the caster's Mental-type Resist and Impact-type Resist by 58%."
    },
    "Grace of Enhancement": {
      "kind": "Passive",
      "description": "Increases the caster's PvE Damage Boost by 20% and PvP Damage Boost by 10% when the caster's MP is 25% or more, and has a 50% chance to deal 454-454 damage on landing an attack.\n\nCooldown: 1s"
    },
    "Revitalization Contract": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\nImmediately restores 74% Max HP when HP is 10% or less.\n\nHealing Cooldown: 60s\nStatus Effect Resist Cooldown: 1s"
    },
    "Vitality Evaporation": {
      "kind": "Passive",
      "description": "Deals 1001-1001 damage on hit if the target's HP is above 31%.\n\nCooldown: 1s"
    }
  },
  "cleric": {
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Earth's Retribution": {
      "kind": "Active",
      "description": "Deals 978-978 Earth damage to a target within 20m and restores 110 MP."
    },
    "Thunder and Lightning": {
      "kind": "Active",
      "description": "Deals 1040-1040 Wind damage to a target within 20m and restores 110 MP."
    },
    "Discharge": {
      "kind": "Active",
      "description": "Deals 4025-4025 Wind damage to a target within 20m and restores 150 MP."
    },
    "Judgment Thunder": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2168-2168 Wind damage to up to 4 enemies within 4m of the target.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Divine Punishment": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2304-2304 Wind damage to up to 4 enemies within 4m of the target.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Bolt": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 7105-21316 Wind damage to up to 4 enemies within 4m of the target.\n\nMax 3 Charge Levels\n20-35 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 300
    },
    "Chain of Torment": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 3055-3055 Earth damage to up to 4 enemies within 4m of the target. Reduces enemy PvE Damage Tolerance by 5%, PvP Damage Tolerance by 2.5%, and deals 3819 Damage over Time every 1s for 10s.\n\n10 Stagger Gauge Damage",
      "cooldown": 20,
      "mp": 150
    },
    "Debilitating Mark": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 2236-2236 Wind damage to up to 4 enemies within 4m of the target. Reduces enemy PvE Damage Boost by 5%, PvP Damage Boost by 2.5%, and deals 2801 Damage over Time every 1s for 10s.\n\n10 Stagger Gauge Damage",
      "cooldown": 10,
      "mp": 100
    },
    "Light of Regeneration": {
      "kind": "Active",
      "description": "Restores 7139-8567 HP every 2s for 30s to the caster and party members within 40m.",
      "cooldown": 30
    },
    "Healing Light": {
      "kind": "Active",
      "description": "Restores 1675-1843 HP to the caster and the party member with the lowest HP within 40m.",
      "cooldown": 6,
      "mp": 50
    },
    "Radiant Recovery": {
      "kind": "Active",
      "description": "Restores 3305-3636 HP and removes 1 debuff for the caster and party members within 40m.",
      "cooldown": 12
    },
    "Divine Aura": {
      "kind": "Active",
      "description": "Summons a Divine Aura near the caster that lasts for 5s. The Aura is stationary and periodically deals 8677 Earth damage to a selected target within 20m.",
      "cooldown": 30
    },
    "Benevolence": {
      "kind": "Stigma",
      "description": "Grants Benevolence to the caster for 20s. Restores 595-715 HP every 2s to the caster and party members within 40m for the duration.",
      "cooldown": 90
    },
    "Root": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 2976-2976 Earth damage to up to 4 enemies within 4m of the target. Has a 75% chance to inflict Root for 10s.\n100% chance to inflict Root on NPC targets.\n\n15 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Salvation": {
      "kind": "Stigma",
      "description": "The caster is immune to damage and status effects for 3s.\n\nCannot block certain powerful attacks. Unaffected by cooldown increase effects.\nTenaciousness, Salvation, Barrier Spell effects, and Unstoppable effect cannot be applied for 30s if Invincibility stacking is blocked.",
      "cooldown": 102
    },
    "Power Burst": {
      "kind": "Stigma",
      "description": "Deals 3657-3657 Earth damage to a target within 20m.\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Absolution": {
      "kind": "Stigma",
      "description": "Removes up to 2 debuffs and restores 3967-4364 HP to the caster and party members within 40m.",
      "cooldown": 90
    },
    "Voice of Doom": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3487-3487 Earth damage to up to 4 enemies within 4m of the target. Deals 9066 damage every 1s and reduces enemy Incoming Heal and HP Potion Recovery by 60% for 20s.",
      "cooldown": 60,
      "mp": 200
    },
    "Blessing of Regeneration": {
      "kind": "Active",
      "description": "Restores the caster's HP by 9604-10564 and MP by 40%.",
      "cooldown": 42
    },
    "Condemnation": {
      "kind": "Active",
      "description": "Selects a target within 20m afflicted with Chain of Torment and deals 4015-4015 Earth damage to up to 4 enemies within 4m of the target.\n\n7 Stagger Gauge Damage",
      "cooldown": 3
    },
    "Lightning Strike Scattershot": {
      "kind": "Active",
      "description": "Deals 2318-2318 damage to a target afflicted with Stagger within 20m."
    },
    "Summon Resurrection": {
      "kind": "Stigma",
      "description": "Resurrects a fallen party member within 40m near the caster.",
      "cooldown": 72
    },
    "Earth Punishment": {
      "kind": "Stigma",
      "description": "Deals 3759-3759 Earth damage to a target within 20m and 3759 damage every 1s for 10s.\n\n20 Stagger Gauge Damage",
      "cooldown": 30,
      "mp": 200
    },
    "Light of Protection": {
      "kind": "Stigma",
      "description": "Increases PvE Damage Boost and PvE Damage Tolerance by 22.5% and PvP Damage Boost and PvP Damage Tolerance by 11.25% for the caster and nearby party members.\n\nDoes not stack with the Damage Boost effect from the Chanter skill [Undefeated Mantra] and only the highest skill level effect applies. If both skills are the same level, Undefeated Mantra will be applied.",
      "cooldown": 5
    },
    "Yustiel's Power": {
      "kind": "Stigma",
      "description": "Increases PvE Damage Tolerance by 20% and PvP Damage Tolerance by 10% for 22.5s for the caster and party members within 40m.\n\nUnaffected by cooldown increase effects.",
      "cooldown": 60
    },
    "Prayer of Amplification": {
      "kind": "Stigma",
      "description": "Increases Attack by 20% for 22.5s.",
      "cooldown": 60
    },
    "Noble Aura": {
      "kind": "Stigma",
      "description": "Summons a Noble Aura near the caster that lasts for 300s. The Aura follows the caster and attacks their target together.\n\nDeals 1496-1496 damage to a target within 20m.\nAura Attack Cooldown: 2s",
      "cooldown": 60
    },
    "Assault Mark": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 2823-2823 damage to up to 4 enemies within 4m with a 30% chance to inflict Root.\n100% chance to inflict Root on NPC targets.\n\nIncreases Defense by max 20% proportional to hit targets.",
      "cooldown": 120
    },
    "Warm Benediction": {
      "kind": "Passive",
      "description": "Increases the caster's Max HP by 45% and Max MP by 85."
    },
    "Empyrean Lords' Benediction": {
      "kind": "Passive",
      "description": "Increases the caster's Block by 200 and restores 739-887 HP on Block.\n\nCooldown: 3s"
    },
    "Empyrean Lord's Grace": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Hit by 295, Double Chance by 8% and deals 878-878 extra damage on landing an attack on a target.\n\nCooldown: 1s"
    },
    "Healing Enhancement": {
      "kind": "Passive",
      "description": "Increases the caster's Heal Boost by 38000% of Attack."
    },
    "Immortal Veil": {
      "kind": "Passive",
      "description": "Increases the caster's Defense by 80% and Critical Hit Resist by 490."
    },
    "Heal Block": {
      "kind": "Passive",
      "description": "Has a 7% chance to reduce the target's Incoming Heal by 110% for 5s on landing an attack.\n\nCooldown: 5s"
    },
    "Prayer of Concentration": {
      "kind": "Passive",
      "description": "Forms a Protective Shield which blocks 4640 damage and increases the caster's Heal Boost by 20% for 30s when HP is 50% or less.\n\nCooldown: 60s"
    },
    "Earth's Grace": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Damage Boost by 30% and Accuracy by 100."
    },
    "Survival Willpower": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases PvE Damage Tolerance by 90% and PvP Damage Tolerance by 45% for 5s when afflicted with Stun, Knockdown, Airborne, Frost, or Fear. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\n\nDamage Tolerance Increase Cooldown: 60s\nStatus Effect Resist Increase Cooldown: 1s"
    },
    "Radiant Benediction": {
      "kind": "Passive",
      "description": "Restores 1162-1394 HP to the caster and party members within 40m on landing an attack.\n\nCooldown: 5s"
    },
    "Reincarnating Touch": {
      "kind": "Stigma",
      "description": "Grants Reincarnating Touch to the caster. Can resurrect with 50% HP and MP upon dying while Reincarnating Touch is active."
    }
  },
  "chanter": {
    "Dodge": {
      "kind": "Active",
      "description": "Evade by moving quickly in the desired direction.",
      "cooldown": 0.5
    },
    "Onslaught": {
      "kind": "Active",
      "description": "Deals 1857-1857 damage to up to 4 enemies within 4m and restores 100 MP."
    },
    "Resonance Crush": {
      "kind": "Active",
      "description": "Deals 2161-2161 damage to up to 4 enemies within 4m and restores 100 MP."
    },
    "Bolt Crush": {
      "kind": "Active",
      "description": "Deals 2958-2958 damage to up to 4 enemies within 4m and restores 120 MP."
    },
    "Incandescent Blow": {
      "kind": "Active",
      "description": "Deals 5004-5004 damage to up to 4 enemies within 4m.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Bursting Blow": {
      "kind": "Active",
      "description": "Deals 5568-5568 damage to up to 4 enemies within 4m.\n\n2 Stagger Gauge Damage",
      "mp": 120
    },
    "Impactful Crush": {
      "kind": "Active",
      "description": "Deals 4848-4848 damage to a target within 20m. Has a 60% chance to inflict Stun for 3s.\n100% chance to inflict Stun on NPC targets.\n\n[Dark Crush] becomes available for 2s on skill use.\n10 Stagger Gauge Damage",
      "cooldown": 15,
      "mp": 100
    },
    "Crushing Blow": {
      "kind": "Active",
      "description": "Deals 5574-5574 damage to a target within 20m. Lands as Multi-Hit on targets afflicted with Stun."
    },
    "Wave Blow": {
      "kind": "Passive",
      "description": "Deals 538-538 damage to a target afflicted with Stun within 4m and inflicts Knockdown for 3s.\nHas a 7% chance to trigger on attacking a target with Incapacitated Immunity, changing the skill motion.\n\n10 Stagger Gauge Damage"
    },
    "Rushing Smash": {
      "kind": "Active",
      "description": "Rushes at a target within 20m and deals 4113-4113 damage to up to 4 enemies and restores 100 MP.\n\n10 Stagger Gauge Damage",
      "cooldown": 15
    },
    "Dark Crush": {
      "kind": "Active",
      "description": "Deals 4878-4878 damage to a target within 20m.\n\n5 Stagger Gauge Damage",
      "cooldown": 5
    },
    "Recuperation": {
      "kind": "Active",
      "description": "Restores 2032-2235 HP and removes 1 debuff(s) for the caster and party members within 40m. Restores 2032 HP every 2s for 8s.",
      "cooldown": 15
    },
    "Fracturing Blow": {
      "kind": "Stigma",
      "description": "Rushes to a target within 20m and deals 4080-4080 damage and reduces their Defense by 30% for 5s. Increases damage by 20% to targets afflicted with an Impact-type status.\n\n20 Stagger Gauge Damage",
      "cooldown": 45,
      "mp": 100
    },
    "Focused Defense": {
      "kind": "Stigma",
      "description": "Temporarily increases Block Damage Reduction by 100% and guarantees Block. Restores 350 MP and Stamina once on Block.",
      "cooldown": 20
    },
    "Heat Wave Blow": {
      "kind": "Active",
      "description": "Selects a target within 4m and deals 4198-4198 damage to up to 4 enemies within 4m with a 40% chance to inflict Seal for 3s on Block.\n100% chance to inflict Seal on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 10
    },
    "Sprint Mantra": {
      "kind": "Stigma",
      "description": "Increases Move Speed by 22.5% and grants a 15% chance to restore 310-341 HP on landing an attack to the caster and nearby party members.\n\nHealing Cooldown: 1s",
      "cooldown": 5
    },
    "Healing Touch": {
      "kind": "Stigma",
      "description": "Restores 2265-2492 HP for the caster and party members within 40m.",
      "cooldown": 30
    },
    "Undefeated Mantra": {
      "kind": "Stigma",
      "description": "Increases PvE Damage Boost and PvE Damage Tolerance by 22.5% and PvP Damage Boost and PvP Damage Tolerance by 11.25% for the caster and nearby party members.\n\nDoes not stack with the Damage Boost effect from the Cleric skill [Light of Protection]; only the higher-level skill effect applies. If both skills are the same level, Undefeated Mantra takes precedence.",
      "cooldown": 5
    },
    "Defiance": {
      "kind": "Active",
      "description": "Removes Stun, Knockdown, Airborne, Grab, Frost, and Fear from the caster and grants Tenacity for 5s.\nTenacity: Grants Status Effect Immunity\n\nUnaffected by cooldown reduction effects.",
      "cooldown": 21
    },
    "Tremor Crush": {
      "kind": "Active",
      "description": "Move to a target within 10m and deal 2397-2397 damage with a 50% chance to inflict Stun for 3s after using [Dodge] or while flying.\n100% chance to inflict Stun on NPC targets.\n\n10 Stagger Gauge Damage",
      "cooldown": 20
    },
    "Obliterate": {
      "kind": "Stigma",
      "description": "Deals 3416-3416 damage to up to 4 enemies within 4m of the target, with a 50% chance to inflict Knockdown.\n100% chance to land Knockdown on NPC targets.\n\n50 Stagger Gauge Damage",
      "cooldown": 60,
      "mp": 200
    },
    "Ensnaring Mark": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3276-3276 damage to up to 4 enemies within 4m, with a 50% chance to inflict Seal for 5s.\n100% chance to inflict Seal on NPC targets.\n\n[Dark Crush] becomes available for 3s on skill use.",
      "cooldown": 60,
      "mp": 200
    },
    "Impeding Authority": {
      "kind": "Stigma",
      "description": "Grants a Protective Shield that blocks damage equaling 40% of Max HP for 20s to the caster and nearby party members within 40m.",
      "cooldown": 90
    },
    "Power of the Storm": {
      "kind": "Stigma",
      "description": "Increases Combat Speed by 20% and reduces skill cooldowns by 20% for 22.5s.\nIncreases Combat Speed by 20% and reduces skill cooldowns by 10% for party members within 40m.\n\nCannot receive effect of [Power of the Storm] if Cleric skill [Earth's Blessing] effect is active.",
      "cooldown": 120
    },
    "Spinning Strike": {
      "kind": "Active",
      "description": "Selects a target within 20m and deals 16761-16761 damage to up to 4 enemies nearby. Increases the caster's Critical Damage Boost by 15% for 30s on hit. Stacks up to 2 times.\n\n[Dark Crush] becomes available for 2s on skill use.\n15 Stagger Gauge Damage",
      "cooldown": 30,
      "mp": 250
    },
    "Gust Rampage": {
      "kind": "Active",
      "description": "Deals 1867-1867 damage to a target afflicted with Stagger within 4m."
    },
    "Marchutan's Wrath": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 4386-4386 damage to up to 4 enemies within 4m.\n\n[Dark Crush] becomes available for 3s on skill use.",
      "cooldown": 30
    },
    "Storm Chain": {
      "kind": "Active",
      "description": "Deals 6426-6426 damage to up to 4 enemies within 4m and restores 180 MP."
    },
    "Surging Strike": {
      "kind": "Active",
      "description": "Deals 3116-3116 damage to a target within 4m with a 30% chance to inflict Airborne for 3s to targets afflicted with Stun."
    },
    "Piercing Strike": {
      "kind": "Active",
      "description": "Deals 7266-7266 damage to a target within 20m.\n\n5 Stagger Gauge Damage"
    },
    "Crushing Strike": {
      "kind": "Active",
      "description": "Selects a target within 4m and deals 3050-3050 damage to up to 4 enemies. Inflicts Stun for 3s.",
      "cooldown": 42
    },
    "Guardian Blessing": {
      "kind": "Stigma",
      "description": "Increases the caster's Max HP by 15% for 300s and immediately restores 15% HP.\n\nNot affected by buff dispel effects.",
      "cooldown": 300
    },
    "Barrier Spell": {
      "kind": "Stigma",
      "description": "Prevents the HP of the caster and party members within 40m from falling below 10% for 3s.\n\nCannot block certain powerful attacks. Unaffected by cooldown increase effects.\nTenaciousness, Salvation, Barrier Spell effects, and Unstoppable effect cannot be applied for 30s if Invincibility stacking is blocked.",
      "cooldown": 132
    },
    "Assault Shock": {
      "kind": "Stigma",
      "description": "Selects a target within 20m and deals 3126-3126 damage to up to 4 enemies within 4m with a 30% chance to inflict Stun for 3s.\n100% chance to inflict Stun on NPC targets.\n\nIncreases Defense by up to 20% proportional to the number of targets hit.",
      "cooldown": 120
    },
    "Blessing of Life": {
      "kind": "Passive",
      "description": "Increases the caster's HP by 27000. Increases Max HP by an additional 60% and Heal Boost by 27000% of Attack."
    },
    "Crossguard": {
      "kind": "Passive",
      "description": "Increases the caster's Block by 200 and restores 1158-1274 HP on Block.\n\nCooldown: 1s"
    },
    "Protection Circle": {
      "kind": "Passive",
      "description": "Grants a Protection Circle that lasts for 5s on landing an attack. Removes the Protection Circle at 10 stacks and grants Divine Barrier to the caster and party members, which blocks damage equaling 7% of Max HP for 10s. The Divine Barrier refreshes upon reaching 10 stacks of Protection Circle while Divine Barrier is active.\nGrants a Noble Protective Shield for 5s that blocks 60% damage when the caster's HP drops below 50%.\n\nProtection Circle Cooldown: 0.5s\nNoble Protective Shield Cooldown: 60s"
    },
    "Inspiring Spell": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Hit by 490 and Perfect Chance by 20%."
    },
    "Attack Preparation": {
      "kind": "Passive",
      "description": "Increases the caster's PvE Damage Boost by 25%, PvP Damage Boost by 12.5%, Defense by 80%, and Accuracy by 100."
    },
    "Impact Hit": {
      "kind": "Passive",
      "description": "Increases the caster's Impact-type Chance by 58% and Double Chance by 12%."
    },
    "Raging Spell": {
      "kind": "Passive",
      "description": "Deals 828-828 extra damage to targets afflicted with Stagger or an Impact-type status.\n\nCooldown: 1s"
    },
    "Earth's Promise": {
      "kind": "Passive",
      "description": "Reduces the target's PvE Damage Tolerance by 21% and PvP Damage Tolerance by 10.5% for 5s each time an attack lands.\n\n[Earth's Promise]'s PvE/PvP Damage Tolerance reduction effect does not apply when used together with the Cleric skill [Chain of Torment].\n\nCooldown: 10s"
    },
    "Survival Willpower": {
      "kind": "Passive",
      "description": "Increases the caster's Status Effect Resist by 95%. Increases PvE Damage Tolerance by 90% and PvP Damage Tolerance by 45% for 5s when afflicted with Stun, Knockdown, Airborne, Frost, or Fear. Increases Status Effect Resist by 10% for 5s when hit while afflicted with Stun, Knockdown, Airborne, Frost, or Fear (up to 10 stacks).\n\nDamage Tolerance Increase Cooldown: 60s\nStatus Effect Resist Increase Cooldown: 1s"
    },
    "Wind's Promise": {
      "kind": "Passive",
      "description": "Increases the caster's Critical Damage Boost by 33% and has a 50% chance to deal 2120-2120 extra damage to the target on landing a Critical Hit.\n\nExtra Damage Cooldown: 1s"
    }
  }
};
