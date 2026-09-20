/** Rebuild lib/mapFindData.ts from aion2-interactive-map CC BY-NC 4.0 marker YAML.
 * Expects World_L_A.yaml and World_D_A.yaml in %TEMP% (not committed).
 */
import fs from "node:fs";

const outPath = new URL("../lib/mapFindData.ts", import.meta.url);

const KIBELISK_EN = {
  黎明军团基地: "Dawn Legion Base",
  溪谷监视哨所: "Valley Watch Post",
  坎塔斯溪谷西部营地: "Western Cantas Camp",
  海岸营帐: "Coastal Camp",
  沼泽监视哨所: "Marsh Watch Post",
  倒塌的斐尔特朗结界塔: "Collapsed Feltron Barrier Tower",
  坎塔斯溪谷东部营地: "Eastern Cantas Camp",
  精灵休息处: "Spirit Rest",
  幻影天培尔营地: "Phantom Temper Camp",
  遗迹探险营地: "Ruin Expedition Camp",
  废墟前藏身处: "Ruin Hideout",
  倒塌的柱子: "Collapsed Pillar",
  黎明军团临时哨所: "Dawn Legion Temporary Outpost",
  微风商会总部: "Wind Breeze Merchant HQ",
  南部树古车站: "Southern Shugo Station",
  托儿巴斯森林外围: "Tolbas Forest Outskirts",
  亚斯汀佣兵团据点: "Astin Mercenaries Base",
  东部树古车站: "Eastern Shugo Station",
  阿尔拉乌部落边境: "Aullaeu Border",
  废弃微风分所: "Abandoned Breeze Branch",
  祖米昂村庄: "Zumion Village",
  岩石山丘监视哨所: "Rocky Hill Watch Post",
  峡谷营地: "Canyon Camp",
  清醒的警戒哨所: "Lucid Watch Post",
  净化之丘: "Purification Hill",
  诺托斯军团哨所: "Notos Legion Outpost",
  奴工休息处: "Laborer Rest",
  德拉那运输哨所: "Drana Transport Outpost",
  野兽猎人营地: "Beast Hunter Camp",
  朝圣者休息处: "Pilgrim's Rest",
  红色森林观察地: "Scarlet Forest Lookout",
  纳西德废弃物处理场: "Nahid Waste Yard",
  红玉之岛哨所: "Crimson Isle Outpost",
  库拉卡坡道废水下游: "Kraka Slope Downstream",
  法莫斯的农场: "Famos Farm",
  坎塔斯溪谷蘑菇树顶部: "Cantas Mushroom Tree",
  幻影祈祷室入口: "Phantom Oratory Entrance",
  艾尔倫河中游池塘: "Elun Midstream Pond",
  流放者之森: "Forest of Exiles",
  阿尔拉乌葬礼岛: "Aullaeu Funeral Island",
  高原尽头营地: "Highland End Camp",
  坎塔斯溪谷空中岛: "Cantas Sky Isle",
  坎塔斯溪谷蘑菇树顶端: "Cantas Mushroom Crown",
  艾尔倫河沼泽峭壁: "Elun Marsh Cliff",
  艾尔倫河中游高原: "Elun Midstream Highland",
  斐尔特朗要塞山谷: "Feltron Fortress Valley",
  阿尔拉乌部落空中岛: "Aullaeu Sky Isle",
  阿尔拉乌部落山谷: "Aullaeu Valley",
  祖米昂石像: "Zumion Statue",
  祖米昂神殿朝圣之路: "Zumion Temple Road",
  阿尔塔米亚高原遗迹地: "Artamia Highland Ruins",
  昔日祖米昂神殿遗址: "Old Zumion Temple",
  峡谷空中岛: "Canyon Sky Isle",
  风之伤痕: "Wind Scar",
  阿尔塔米亚南部海岸峭壁: "Southern Artamia Cliff",
  库拉卡坡道营地: "Kraka Slope Camp",
  库拉卡上坡: "Kraka Uphill",
  纳希德军团要塞山丘: "Nahid Fortress Hill",
  红落叶树林: "Red Fall Woods",
  幻影神庭西侧观景台: "Illusion Garden West",
  幻影神庭东侧观景台: "Illusion Garden East",
  逃亡者村庄: "Fugitive Village",
  逃亡者村庄峭壁: "Fugitive Village Cliff",
  加罗利克检查站: "Garolik Checkpoint",
  临时调查基地: "Temporary Survey Base",
  克雷恩营地: "Crane Camp",
  奎灵营地: "Quiling Camp",
  守墓人营帐: "Gravekeeper Camp",
  泥泞营地: "Mud Camp",
  临时避难所: "Temporary Refuge",
  闲置火葬场: "Idle Crematorium",
  监视者帐篷: "Watcher Tent",
  獠牙藏身处: "Fang Hideout",
  奥达尔之影: "Odar's Shade",
  倒塌的缝隙: "Collapsed Fissure",
  以琳休息处: "Elim's Rest",
  森林藏身处: "Forest Hideout",
  废弃遗址: "Abandoned Ruins",
  米努亚遗址: "Minushan Site",
  胜战守护者石像: "Victory Guardian Statue",
  诺尔尼尔集会所: "Nornir Assembly",
  引导人休息处: "Guide's Rest",
  褐色树桩: "Brown Stump",
  恢复之泉: "Healing Spring",
  寒风避难处: "Cold Wind Refuge",
  隐身洞穴: "Hidden Cave",
  巴斯斐尔特瀑布: "Basfelt Waterfall",
  盗墓者营地: "Tomb Robber Camp",
  缝隙洞穴: "Fissure Cave",
  斯拉克摊位: "Shulak Stall",
  玛辛戴尔峭壁: "Mahindel Cliff",
  钢铁之锤贸易团总部: "Steel Hammer Trade HQ",
  钢铁之锤作业场: "Steel Hammer Workcamp",
  废弃营地: "Abandoned Camp",
  阿蒙塔藏身处: "Amonta Hideout",
  钢铁之锤临时交易站: "Steel Hammer Exchange",
  伊顿湖: "Idun's Lake",
  库莉卡的地下室: "Kulika's Basement",
  引导人处所: "Guide's Place",
  寂静山丘海岸峭壁: "Silent Hill Coast",
  尽头摊位: "End Stall",
  倒塌的名誉殿堂: "Collapsed Hall of Honor",
  寂静山丘蘑菇岩: "Silent Hill Mushroom Rock",
  简卡卡之坟: "Jankaka's Grave",
  秘密会面点: "Secret Meeting Point",
  圣所监视哨所空中岛: "Sanctum Watch Sky Isle",
  玛斯兰森林乾枯阴影: "Moslan Dry Shade",
  孤岛: "Lone Isle",
  波涛汹涌的峭壁: "Surging Cliff",
  巴斯斐尔特瀑布拱形地带: "Basfelt Waterfall Arch",
  巴斯斐尔特废墟峭壁: "Basfelt Ruin Cliff",
  玛斯兰森林峭壁: "Moslan Forest Cliff",
  净化之森照射阳光山丘: "Purifying Forest Sun Hill",
  葛利巴德丘陵地岔路: "Gribade Fork",
  激战之丘峭壁尽头: "Battlescar Cliff End",
  净化之森海岸峭壁: "Purifying Forest Coast",
  德拉那克图斯海岸: "Dranactus Coast",
  葛利巴德丘陵地东部悬崖: "Eastern Gribade Cliff",
  特拉内因丘陵地桥墩下: "Tranein Under-bridge",
  葛利巴德丘陵地东部尾岛: "Eastern Gribade Isle",
  因派图西姆下面的路: "Impetusium Underroad",
  乌尔通海姆峭壁: "Uruthumheim Cliff",
};

const ANCHORS = {
  elyos: [
    { district: "poeta", weekOne: true, x: 18.4, y: 81 },
    { district: "dawn", weekOne: true, x: 36.83, y: 38.29 },
    { district: "cantas", weekOne: true, x: 36.5, y: 43.93 },
    { district: "eastern", weekOne: true, x: 41.13, y: 41.22 },
    { district: "marsh", weekOne: true, x: 47.2, y: 41.48 },
    { district: "coast", weekOne: true, x: 38.37, y: 45.91 },
    { district: "ruins", weekOne: true, x: 51.67, y: 48.9 },
    { district: "temp", weekOne: true, x: 47.05, y: 55.46 },
    { district: "merc", weekOne: true, x: 42.05, y: 60.62 },
    { district: "forward", weekOne: true, x: 38.55, y: 66.4 },
    { district: "daminu", weekOne: true, x: 40.8, y: 31.8 },
    { district: "later-v", weekOne: false, x: 57.47, y: 52.1 },
    { district: "later-v", weekOne: false, x: 61.2, y: 61.1 },
    { district: "later-v", weekOne: false, x: 64.2, y: 45.9 },
    { district: "later-v", weekOne: false, x: 62.1, y: 69.6 },
  ],
  asmodian: [
    { district: "ishalgen", weekOne: true, x: 49.2, y: 71.8 },
    { district: "haven", weekOne: true, x: 39.32, y: 34.29 },
    { district: "shadow", weekOne: true, x: 37.17, y: 45.54 },
    { district: "graves", weekOne: true, x: 31.41, y: 40.5 },
    { district: "fang", weekOne: true, x: 32.79, y: 43.63 },
    { district: "elim", weekOne: true, x: 44.51, y: 56.26 },
    { district: "minushan", weekOne: true, x: 53.52, y: 49.78 },
    { district: "aldelle", weekOne: true, x: 39.03, y: 34.8 },
    { district: "azrakar", weekOne: true, x: 38.29, y: 37.67 },
    { district: "nornir", weekOne: false, x: 59.19, y: 47.44 },
    { district: "hammer", weekOne: false, x: 65.36, y: 55.65 },
    { district: "idun", weekOne: false, x: 67.15, y: 61.96 },
    { district: "later-a", weekOne: false, x: 70.7, y: 38.4 },
    { district: "later-a", weekOne: false, x: 69.1, y: 71.8 },
  ],
};

function parse(text) {
  return text.split(/\n- category:/).slice(1).map((raw) => {
    const b = `category:${raw}`;
    const get = (k) => {
      const m = b.match(new RegExp(`(?:^|\\n)\\s*${k}:\\s*(.+)`));
      return m ? m[1].trim().replace(/^'|'$/g, "") : "";
    };
    return {
      id: get("id"),
      name: get("name"),
      subtype: get("subtype"),
      x: Number.parseFloat(get("x")),
      y: Number.parseFloat(get("y")),
    };
  });
}

function pct(x, y) {
  return { x: +(x / 8192 * 100).toFixed(2), y: +(100 - (y / 8192) * 100).toFixed(2) };
}

function nearest(faction, x, y) {
  let best = ANCHORS[faction][0];
  let bestD = Infinity;
  for (const a of ANCHORS[faction]) {
    const d = (a.x - x) ** 2 + (a.y - y) ** 2;
    if (d < bestD) {
      bestD = d;
      best = a;
    }
  }
  return best;
}

function pack(file, faction, subtype) {
  const rows = parse(fs.readFileSync(file, "utf8")).filter((m) => m.subtype === subtype);
  return rows
    .map((t) => {
      const p = pct(t.x, t.y);
      const a = nearest(faction, p.x, p.y);
      const label = subtype === "teleport" ? KIBELISK_EN[t.name] || t.name : "";
      if (subtype === "teleport" && !KIBELISK_EN[t.name]) {
        console.warn("untranslated", t.name);
      }
      return [a.district, label, p.x, p.y, t.id.slice(0, 8), a.weekOne];
    })
    .sort((l, r) => l[0].localeCompare(r[0]) || String(l[1]).localeCompare(String(r[1])) || l[2] - r[2]);
}

function dump(rows) {
  return rows.map((r) => `  ${JSON.stringify(r)},`).join("\n");
}

const temp = process.env.TEMP;
const elyosCubes = pack(`${temp}/World_L_A.yaml`, "elyos", "hiddenCube");
const asmoCubes = pack(`${temp}/World_D_A.yaml`, "asmodian", "hiddenCube");
const elyosPads = pack(`${temp}/World_L_A.yaml`, "elyos", "teleport");
const asmoPads = pack(`${temp}/World_D_A.yaml`, "asmodian", "teleport");

const src = `/** Hidden Cube and Kibelisk percents on the Atlas parchment (origin top-left).
 * In-game markers from aion2-interactive-map (CC BY-NC 4.0), Y-flipped.
 * Packed as [district, label, x, y, id prefix, weekOne].
 */
export type FindSpot = [district: string, label: string, x: number, y: number, id: string, weekOne: boolean];

export const elyosCubeSpots: FindSpot[] = [
${dump(elyosCubes)}
];

export const asmodianCubeSpots: FindSpot[] = [
${dump(asmoCubes)}
];

export const elyosKibeliskSpots: FindSpot[] = [
${dump(elyosPads)}
];

export const asmodianKibeliskSpots: FindSpot[] = [
${dump(asmoPads)}
];
`;

fs.writeFileSync(outPath, src);
console.log("cubes", elyosCubes.length, asmoCubes.length, "pads", elyosPads.length, asmoPads.length);
