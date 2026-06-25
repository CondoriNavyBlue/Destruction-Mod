const items = require('items');
const units = require('units');
const liquids = require("liquids");

const ironAmmoBack = Color.valueOf("c0c0c0");
const ironAmmoFront = Color.valueOf("ffffff");
const goldAmmoBack = Color.valueOf("f7f279");
const goldAmmoFront = Color.valueOf("f7f6e7");
const diamondAmmoBack = Color.valueOf("79f7f2");
const diamondAmmoFront = Color.valueOf("e7f7f6");
const sodiumAmmoBack = Color.valueOf("888888");
const sodiumAmmoFront = Color.valueOf("aaaaaa");
const batteryAmmoBack = Color.valueOf("aaaaaa");
const batteryAmmoFront = Color.valueOf("cccccc");

//------------------------------Ore------------------------------

//Iron Ore
const IronOre = extend(OreBlock, "ore-Iron", {
    itemDrop: items.iron,
    oreDefault: true,
    variants: 3
});

//Gold Ore
const GoldOre = extend(OreBlock, "ore-Gold", {
    itemDrop: items.gold,
    oreDefault: true,
    variants: 3
});

//Diamond Ore
const DiamondOre = extend(OreBlock, "ore-Diamond", {
    itemDrop: items.diamond,
    oreDefault: true,
    playerUnmineable: true,
    variants: 6
});

//------------------------------Wall------------------------------

//Sodium Wall
const SodiumWall = extend(Wall, "Sodium_Wall", {
    localizedName: "Sodium Wall",
    health: 450,
    size: 1,
    buildCostMultiplier: 1.5,
    category: Category.defense,
    requirements: ItemStack.with(items.sodium,4),
    buildVisibility: BuildVisibility.shown
});

//Large Sodium Wall
const SodiumWallLarge = extend(Wall, "Sodium_Wall_Large", {
    localizedName: "Large Sodium Wall",
    health: 1800,
    size: 2,
    buildCostMultiplier: 1.5,
    category: Category.defense,
    requirements: ItemStack.with(items.sodium,16),
    buildVisibility: BuildVisibility.shown
});

//Iron Wall
const IronWall = extend(Wall, "Iron_Wall", {
    localizedName: "Iron Wall",
    health: 1000,
    size: 1,
    absorbLasers: true,
    chanceDeflect: 5,
    buildCostMultiplier: 5,
    category: Category.defense,
    requirements: ItemStack.with(items.iron,8),
    buildVisibility: BuildVisibility.shown
});

//Large Iron Wall
const IronWallLarge = extend(Wall, "Iron_Wall_Large", {
    localizedName: "Large Iron Wall",
    health: 4000,
    absorbLasers: true,
    chanceDeflect: 5,
    size: 2,
    buildCostMultiplier: 5,
    category: Category.defense,
    requirements: ItemStack.with(items.iron,32),
    buildVisibility: BuildVisibility.shown
});

//Gold Wall
const GoldWall = extend(Wall, "Gold_Wall", {
    localizedName: "Gold Wall",
    health: 2000,
    size: 1,
    absorbLasers: true,
    chanceDeflect: 2.5,
    buildCostMultiplier: 5,
    category: Category.defense,
    requirements: ItemStack.with(items.gold,8),
    buildVisibility: BuildVisibility.shown
});

//Large Gold Wall
const GoldWallLarge = extend(Wall, "Gold_Wall_Large", {
    localizedName: "Large Gold Wall",
    health: 8000,
    absorbLasers: true,
    chanceDeflect: 3,
    size: 2,
    buildCostMultiplier: 5,
    category: Category.defense,
    requirements: ItemStack.with(items.gold,32),
    buildVisibility: BuildVisibility.shown
});

//Diamond Wall
const DiamondWall = extend(Wall, "Diamond_Wall", {
    localizedName: "Diamond Wall",
    health: 3000,
    size: 1,
    chanceDeflect: 15,
    buildCostMultiplier: 5,
    category: Category.defense,
    requirements: ItemStack.with(items.diamond,8),
    buildVisibility: BuildVisibility.shown
});

//Large Diamond Wall
const DiamondWallLarge = extend(Wall, "Diamond_Wall_Large", {
    localizedName: "Large Diamond Wall",
    health: 12000,
    chanceDeflect: 3,
    size: 2,
    buildCostMultiplier: 20,
    category: Category.defense,
    requirements: ItemStack.with(items.diamond,32),
    buildVisibility: BuildVisibility.shown
});

//Destruction Wall
const DestructionWall = extend(Wall, "Destruction_Wall", {
    localizedName: "Destruction Wall",
    health: 5000,
    size: 1,
    absorbLasers: true,
    chanceDeflect: 25,
    lightningChance: 0.2,
    lightningDamage: 48,
    lightningLength: 24,
    lightningColor: Color.valueOf("ed655a"),
    flashHit: true,
    flashColor: Color.valueOf("ed655a"),
    buildCostMultiplier: 7.5,
    category: Category.defense,
    requirements: ItemStack.with(items.iron,8 , items.gold,8 , items.diamond,8),
    buildVisibility: BuildVisibility.shown
});

//Large Destruction Wall
const DestructionWallLarge = extend(Wall, "Destruction_Wall_Large", {
    localizedName: "Large Destruction Wall",
    health: 20000,
    size: 2,
    absorbLasers: true,
    chanceDeflect: 30,
    lightningChance: 0.2,
    lightningDamage: 64,
    lightningLength: 30,
    lightningColor: Color.valueOf("ed655a"),
    flashHit: true,
    flashColor: Color.valueOf("ed655a"),
    buildCostMultiplier: 7.5,
    category: Category.defense,
    requirements: ItemStack.with(items.iron,32 , items.gold,32 , items.diamond,32),
    buildVisibility: BuildVisibility.shown
});

//------------------------------Core------------------------------

//Core : Destruction
const CoreDestruction = extend(CoreBlock, "Core_Destruction", {
    localizedName: "Core: Destruction",
    unitType: units.Gamma,
    health: 24000,
    itemCapacity: 24000,
    size: 6,
    thrusterLength: 48/4,
    unitCapModifier: 32,
    researchCostMultiplier: 0.125,
    requirements: ItemStack.with(Items.copper,12000 , Items.lead,12000 , Items.silicon,8000 , Items.thorium,6000 , items.iron,6000 , items.gold,5000 , items.diamond,3000),
    category: Category.effect,
    buildVisibility: BuildVisibility.shown
});

//------------------------------Storage------------------------------

//Destruction Container
const DestructionContainer = extend(StorageBlock, "Destruction_Container", {
    localizedName: "Destruction Container",
    health: 2500,
    itemCapacity: 900,
    size: 2,
    requirements: ItemStack.with(items.iron,200),
    category: Category.effect,
    buildVisibility: BuildVisibility.shown
});

//Destruction Vault
const DestructionVault = extend(StorageBlock, "Destruction_Vault", {
    localizedName: "Destruction Vault",
    health: 3950,
    itemCapacity: 2500,
    size: 3,
    requirements: ItemStack.with(items.iron,250 , items.gold,500),
    category: Category.effect,
    buildVisibility: BuildVisibility.shown
});

//------------------------------Conveyor------------------------------

//Destruction Conveyor
const DestructionConveyor = extend(Conveyor, "Destruction_Conveyor", {
    localizedName: "Destruction Conveyor",
    health: 800,
    speed: 0.18,
    displayedSpeed: 25,
    category: Category.distribution,
    requirements: ItemStack.with(items.iron,1 , items.gold,1 , items.diamond,1),
    buildVisibility: BuildVisibility.shown
});

//Destruction Armored Conveyor
const DestructionArmoredConveyor = extend(ArmoredConveyor, "Destruction_Armored_Conveyor", {
    localizedName: "Destruction Armored Conveyor",
    health: 1000,
    speed: 0.18,
    displayedSpeed: 25,
    category: Category.distribution,
    requirements: ItemStack.with(items.iron,2 , items.gold,2 , items.diamond,1),
    buildVisibility: BuildVisibility.shown
});

//------------------------------Drill------------------------------

//Iron Drill
const IronDrill = extend(Drill, "Iron_Drill", {
    localizedName: "Iron Drill",
    category: Category.production,
    requirements: ItemStack.with(Items.copper,20 , items.iron,15),
    tier: 3,
    size: 2,
    rotateSpeed: -3,
    drillTIme: 320,
    health: 800,
    buildVisibility: BuildVisibility.shown
});
IronDrill.consumeLiquid(Liquids.water,0.0666666666).boost();

//Gold Drill
const GoldDrill = extend(Drill, "Gold_Drill", {
    localizedName: "Gold Drill",
    category: Category.production,
    requirements: ItemStack.with(Items.copper,45 , Items.silicon,20 , Items.graphite,20 , items.gold,30),
    tier: 4,
    size: 3,
    health: 1200,
    rotateSpeed: -5,
    drillTime: 200,
    updateEffect: Fx.pulverizeMedium,
    drillEffect: Fx.mineBig,
    hasPower: true,
    liquidBoostIntensity: 1.7,
    buildVisibility: BuildVisibility.shown
});
GoldDrill.consumePower(1.5);
GoldDrill.consumeLiquid(Liquids.water,0.085).boost();

//Diamond Drill
const DiamondDrill = extend(Drill, "Diamond_Drill", {
    localizedName: "Diamond Drill",
    category: Category.production,
    requirements: ItemStack.with(Items.copper,80 , Items.silicon,50 , Items.thorium,60 , items.diamond,45),
    tier: 5,
    size: 4,
    drawRim: true,
    health: 2910,
    drillTime: 180,
    updateEffect: Fx.pulverizeRed,
    drillEffect: Fx.mineHuge,
    hasPower: true,
    liquidBoostIntensity: 2,
    rotateSpeed: -6,
    buildVisibility: BuildVisibility.shown,
    itemCapacity: 20,
    liquidCapacity: 30
});
DiamondDrill.consumePower(3.5);
DiamondDrill.consumeLiquid(Liquids.cryofluid,0.02).boost();

//Destruction Drill
const DestructionDrill = extend(Drill, "Destruction_Drill", {
    localizedName: "Destruction Drill",
    category: Category.production,
    requirements: ItemStack.with(Items.copper,300 , Items.silicon,250 , Items.thorium,100 , items.iron,150 , items.gold,100 , items.diamond,60),
    tier: 10,
    size: 4,
    drawRim: true,
    health: 4880,
    drillTime: 90,
    updateEffect: Fx.pulverizeRed,
    drillEffect: Fx.mineHuge,
    hasPower: true,
    liquidBoostIntensity: 2.1,
    rotateSpeed: -7,
    buildVisibility: BuildVisibility.shown,
    itemCapacity: 50,
    liquidCapacity: 30
});
DestructionDrill.consumePower(6);
DestructionDrill.consumeLiquid(Liquids.slag,0.025).boost();

//------------------------------Power------------------------------

//Sodium Storage Battery
const SodiumStorageBattery = extend(Battery, "Sodium_Storage_Battery", {
    localizedName: "Sodium Storage Battery",
    size: 1,
    buildCostMultiplier: 0.3252032520325204,
    category: Category.power,
    requirements: ItemStack.with(Items.titanium,20 , Items.lead,40 , Items.silicon,20 , items.sodiumBattery,25),
    buildVisibility: BuildVisibility.shown,
    baseExplosiveness: 2
});
SodiumStorageBattery.consumePowerBuffered(25000);

//Sodium Storage Battery Large
const SodiumStorageBatteryLarge = extend(Battery, "Sodium_Storage_Battery_Large", {
    localizedName: "Large Sodium Storage Battery",
    size: 3,
    buildCostMultiplier: 0.36585365853658547,
    category: Category.power,
    requirements: ItemStack.with(Items.titanium,120 , Items.lead,100 , Items.silicon,75 , items.sodiumBattery,100),
    buildVisibility: BuildVisibility.shown,
    baseExplosiveness: 8
});
SodiumStorageBatteryLarge.consumePowerBuffered(250000);

//------------------------------Crafter------------------------------

//Sodium Extractor
const NaExtractor = extend(GenericCrafter, "Sodium_Extractor", {
    localizedName: "Sodium Extractor",
    size: 2,
    health: 330,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    liquidCapacity: 160,
    itemCapacity: 10,
    craftTime: 60,
    updateEffect: Fx.wet,
    buildCostMultiplier: 0.13636363636363638,
    requirements: ItemStack.with(Items.copper,200 , Items.lead,200 , Items.graphite,50 , Items.metaglass,100),
    outputItem: new ItemStack(items.sodium,1),
    outputLiquid: new LiquidStack(liquids.wasteWater,0.5),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown,
    ambientSound: Sounds.loopElectricHum,
    ambientSoundVolume: 0.05
});
NaExtractor.consumePower(1.25);
NaExtractor.consumeLiquid(Liquids.water,0.5333333333333333);
NaExtractor.buildType = () => extend(GenericCrafter.GenericCrafterBuild, NaExtractor, {
	draw(){
		Draw.rect(NaExtractor.region, this.x, this.y);
		Draw.color(Liquids.water.color);
		Draw.alpha(this.liquids.get(Liquids.water) / NaExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(NaExtractor.name + "-lquid"), this.x, this.y);
		Draw.color(liquids.wasteWater.color);
		Draw.alpha(this.liquids.get(liquids.wasteWater) / NaExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(NaExtractor.name+ "-lquid2"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(NaExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	}
});

//Sand Sieve Machine
const SSM = extend(Separator, "Sand_Sieve_Machine", {
    localizedName: "Sand Sieve Machine",
    size: 3,
    health: 560,
    hasPower: true,
    hasItems: true,
    itemCapacity: 30,
    craftTime: 30,
    buildCostMultiplier: 0.19815059445178335,
    requirements: ItemStack.with(Items.copper,200 , Items.lead,200 , Items.graphite,50 , Items.phaseFabric,50),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown,
    results: ItemStack.with(items.iron,5 , items.gold,2),
    ambientSound: Sounds.loopGrind,
    ambientSoundVolume: 0.02
});
SSM.consumePower(2);
SSM.consumeItem(Items.sand,5);
SSM.buildType = () => extend(Separator.SeparatorBuild, SSM, {
	draw(){
		Draw.rect(SSM.region, this.x, this.y);
		Draw.color();
		var A = this.items.get(Items.sand) / 10;
		if(A>1){
			A=1;
		}
		Draw.alpha(A * 0.8);
		Draw.rect(Core.atlas.find(SSM.name + "-sand"), this.x, this.y, this.totalProgress*0.5);
		Draw.color();
		Draw.rect(Core.atlas.find(SSM.name + "-spinner"), this.x, this.y, this.totalProgress * 2);
		Draw.reset();
	}
});

//HPHT Synthesizer
const HPHT = extend(GenericCrafter, "HPHT", {
    description: "The [red]heat [lightgray]should be kept high.\nKeep the amount of slag above 80% of capacity.",
    localizedName: "HPHT Synthesizer",
    size: 5,
    health: 2400,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    liquidCapacity: 1500,
    itemCapacity: 40,
    craftTime: 300,
    craftEffect: Fx.bigShockwave,
    buildCostMultiplier: 0.5,
    requirements: ItemStack.with(Items.copper,500 , items.iron,1000 , Items.silicon,600 , Items.graphite,500 , items.sodiumBattery,1000 , Items.metaglass,200),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown,
    outputItem: new ItemStack(items.diamond,5),
    ambientSound: Sounds.loopSmelter,
    ambientSoundVolume: 1
});
HPHT.consumeItem(Items.graphite, 20);
HPHT.consumeLiquid(Liquids.slag, 0.5);
HPHT.consumePower(16.666666666666668);
HPHT.buildType = () => extend(GenericCrafter.GenericCrafterBuild, HPHT, {
	draw(){
		Draw.rect(HPHT.region, this.x, this.y);
		Draw.color(Liquids.slag.color);
		Draw.alpha(this.liquids.get(Liquids.slag) / HPHT.liquidCapacity);
		Draw.rect(Core.atlas.find(HPHT.name + "-liquid"), this.x, this.y);
		Draw.color(1,0,0,1);
		Draw.alpha(this.liquids.get(Liquids.slag) / HPHT.liquidCapacity);
    	Draw.rect(Core.atlas.find(HPHT.name + "-heat"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(HPHT.name + "-top"), this.x, this.y);
		Draw.alpha(this.liquids.get(Liquids.slag) / HPHT.liquidCapacity);
		Draw.rect(Core.atlas.find(HPHT.name + "-heat2"), this.x, this.y);
		Draw.reset();
		if((this.liquids.get(Liquids.slag) / HPHT.liquidCapacity) < 0.8){
		    this.progress = 0;
		}
	}
});

//Electric HPHT
const ElectricHPHT = extend(GenericCrafter, "ElectricHPHT", {
    localizedName: "Electric HPHT",
    description: "generate heat with electricity\nMore convenient than HPHT synthesizer.\nBut uses a lot of electricity.",
    size: 3,
    health: 1800,
    hasPower: true,
    hasItems: true,
    itemCapacity: 40,
    craftTime: 240,
    craftEffect: Fx.smeltsmoke,
    buildCostMultiplier: 0.3,
    drawer: new DrawMulti(new DrawDefault(),new DrawFlame(Color.valueOf("ed655a"))),
    ambientSound: Sounds.loopSmelter,
    ambientSoundVolume: 0.5,
    requirements: ItemStack.with(Items.lead,500 , Items.silicon,1000 , Items.graphite,300 , items.sodiumBattery,2000 , items.gold,650),
    category: Category.crafting,
    outputItem: new ItemStack(items.diamond,4),
    buildVisibility: BuildVisibility.shown
});
ElectricHPHT.consumeItem(Items.graphite, 20);
ElectricHPHT.consumePower(40);

//Sodium Battery Machine
const SodiumBatteryMachine = extend(GenericCrafter, "Sodium_Battery_Machine", {
    localizedName: "Sodium Battery Machine",
    size: 2,
    hasPower: true,
    hasItem: true,
    hasLiquid: false,
    itemCapacity: 10,
    craftTime: 60,
    craftEffect: Fx.smeltsmoke,
    buildCostMultiplier: 0.19083969465648856,
    drawer: new DrawMulti(new DrawDefault(),new DrawFlame(Color.valueOf("c0c0c0"))),
    ambientSound: Sounds.loopSmelter,
    ambientSoundVolume: 0.2,
    requirements: ItemStack.with(Items.copper,200 , Items.lead,200 , Items.graphite,50 , items.sodium,25),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown,
    outputItem: new ItemStack(items.sodiumBattery,1)
});
SodiumBatteryMachine.consumePower(1.6666666666666667);
SodiumBatteryMachine.consumeItems(ItemStack.with(Items.titanium,1 , Items.coal,1 , items.sodium,1));

//Iron_Melter
const IronMelter = extend(GenericCrafter, "Iron_Melter", {
    size: 1,
    hasPower: true,
    hasLiquid: true,
    liquidCapacity: 30,
    itemCapacity: 10,
    craftTime: 30,
    craftEffect: Fx.none,
    drawers: new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.slag), new DrawDefault()),
    requirements: ItemStack.with(Items.copper,50 , Items.lead,50 , Items.graphite,50 , items.iron,20),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown,
    outputLiquid: new LiquidStack(Liquids.slag,0.5)
});
IronMelter.consumePower(2);
IronMelter.consumeItem(items.iron,1);

//------------------------------Unit Related------------------------------

//ArrayConverter
function toJavaUnitArray(jsArray) {
    var javaArray = java.lang.reflect.Array.newInstance(UnitType, jsArray.length);
    for (var i = 0; i < jsArray.length; i++) {
        javaArray[i] = jsArray[i];
    }
    return javaArray;
}

//Destruction Factory
const Factory = extend(UnitFactory, "Destruction_Factory", {
    localizedName: "Destruction Factory",
    health: 1000,
    size: 3,
    requirements: ItemStack.with(Items.copper,30 , Items.silicon,100 , items.iron,60),
    category: Category.units,
    buildVisibility: BuildVisibility.shown,
    plans: Seq.with(
        extend(UnitFactory.UnitPlan, units.Dagger, 60*22.5, ItemStack.with(Items.silicon,12 , items.iron,15),{}),
        extend(UnitFactory.UnitPlan, units.Crawler, 60*15, ItemStack.with(Items.silicon,10 , Items.coal,8 , items.iron,5),{}),
        extend(UnitFactory.UnitPlan, units.Nova, 60*60, ItemStack.with(Items.silicon,20 , Items.titanium,10 , items.iron,20),{}),
        extend(UnitFactory.UnitPlan, units.Flare, 60*22.5, ItemStack.with(items.iron,10),{}),
        extend(UnitFactory.UnitPlan, units.Mono, 60*52.5, ItemStack.with(Items.silicon,30 , items.iron,20),{}),
        extend(UnitFactory.UnitPlan, units.Risso, 60*67.5, ItemStack.with(Items.silicon,30 , Items.metaglass,30 , items.iron,20),{}),
        extend(UnitFactory.UnitPlan, units.Retusa, 60*52.5, ItemStack.with(Items.silicon,20, Items.titanium,20 , items.iron,20),{})
    )
});
Factory.consumePower(120/60);

//Destruction Additive Reconstructor
const ReconstructorTo2 = extend(Reconstructor, "Destruction_Additive_Reconstructor",{
    localizedName: "Destruction Additive Reconstructor",
    health: 1000,
    size: 3,
    requirements: ItemStack.with(Items.copper,250 , Items.silicon,120 , items.iron,100),
    category: Category.units,
    buildVisibility: BuildVisibility.shown,
    constructTime: 60*30,
    upgrades: Seq.with(
        toJavaUnitArray([units.Dagger, units.Mace]),
        toJavaUnitArray([units.Crawler, units.Atrax]),
        toJavaUnitArray([units.Nova, units.Pulsar]),
        toJavaUnitArray([units.Flare, units.Horizon]),
        toJavaUnitArray([units.Mono, units.Poly]),
        toJavaUnitArray([units.Risso, units.Minke]),
        toJavaUnitArray([units.Retusa, units.Oxynoe])
    )
});
ReconstructorTo2.consumePower(200/60);
ReconstructorTo2.consumeItems(ItemStack.with(Items.silicon,50 , items.sodiumBattery,40));

//Destruction Multiplicative Reconstructor
const ReconstructorTo3 = extend(Reconstructor, "Destruction_Multiplicative_Reconstructor",{
    localizedName: "Destruction Multiplicative Reconstructor",
    health: 2000,
    size: 5,
    requirements: ItemStack.with(Items.silicon,660 , items.gold,300 , items.sodiumBattery,450),
    category: Category.units,
    buildVisibility: BuildVisibility.shown,
    constructTime: 60*90,
    upgrades: Seq.with(
        toJavaUnitArray([units.Mace, units.Fortress]),
        toJavaUnitArray([units.Atrax, units.Spiroct]),
        toJavaUnitArray([units.Pulsar, units.Quasar]),
        toJavaUnitArray([units.Horizon, units.Zenith]),
        toJavaUnitArray([units.Poly, units.Mega]),
        toJavaUnitArray([units.Minke, units.Bryde]),
        toJavaUnitArray([units.Oxynoe, units.Cyerce])
    )
});
ReconstructorTo3.consumePower(400/60);
ReconstructorTo3.consumeItems(ItemStack.with(Items.silicon,160 , items.sodiumBattery,80 , items.gold, 50));

//Destruction Exponential Reconstructor
const ReconstructorTo4 = extend(Reconstructor, "Destruction_Exponential_Reconstructor",{
    localizedName: "Destruction Exponential Reconstructor",
    health: 4000,
    size: 7,
    requirements: ItemStack.with(items.iron,1800 , items.gold,1000 , items.sodiumBattery,800 , Items.silicon,1200, Items.plastanium, 700, Items.phaseFabric,800 ),
    category: Category.units,
    buildVisibility: BuildVisibility.shown,
    constructTime: 60*240,
    upgrades: Seq.with(
        toJavaUnitArray([units.Fortress, units.Scepter]),
        toJavaUnitArray([units.Spiroct, units.Arkyid]),
        toJavaUnitArray([units.Quasar, units.Vela]),
        toJavaUnitArray([units.Zenith, units.Antumbra]),
        toJavaUnitArray([units.Mega, units.Quad]),
        toJavaUnitArray([units.Bryde, units.Sei]),
        toJavaUnitArray([units.Cyerce, units.Aegires])
    )
});
ReconstructorTo4.consumePower(900/60);
ReconstructorTo4.consumeItems(ItemStack.with(Items.silicon,800 , Items.thorium,750 , items.sodiumBattery,600 , items.gold, 650));
ReconstructorTo4.consumeLiquid(Liquids.slag, 1);

//Destruction Tetrative Reconstructor
const ReconstructorTo5 = extend(Reconstructor, "Destruction_Tetrative_Reconstructor",{
    localizedName: "Destruction Tetrative Reconstructor",
    health: 8000,
    size: 9,
    requirements: ItemStack.with(items.iron,2400 , items.gold,1800 , items.sodiumBattery,2000 , Items.silicon,3600, Items.plastanium, 1000, Items.phaseFabric,800 , Items.surgeAlloy,1200 , items.diamond,500),
    category: Category.units,
    buildVisibility: BuildVisibility.shown,
    constructTime: 60*600,
    upgrades: Seq.with(
        toJavaUnitArray([units.Scepter, units.Reign]),
        toJavaUnitArray([units.Arkyid, units.Toxopid]),
        toJavaUnitArray([units.Vela, units.Corvus]),
        toJavaUnitArray([units.Antumbra, units.Eclipse]),
        toJavaUnitArray([units.Quad, units.Oct]),
        toJavaUnitArray([units.Sei, units.Omura]),
        toJavaUnitArray([units.Aegires, units.Navanax])
    )
});
ReconstructorTo5.consumePower(3000/60);
ReconstructorTo5.consumeItems(ItemStack.with(Items.silicon,1200 , items.sodiumBattery,1000 , items.iron,1000 , items.gold,850 , items.diamond,700));
ReconstructorTo5.consumeLiquid(Liquids.slag, 3);

//------------------------------Turrets------------------------------

//Destrutor Duo
const Duo = extend(ItemTurret, "Destructor_Duo", {
    localizedName: "Destructor Duo",
    requirements: ItemStack.with(items.iron,50),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    shoot: extend(ShootAlternate, 3.5,{}),
    recoils: 2,
    drawer: extend(DrawTurret, {
        parts: Seq.with(
            extend(RegionPart,"-barrel-l",{
                progress: DrawPart.PartProgress.recoil,
                recoilIndex: 0,
                under: true,
                moveY: -1.5
            }),
            extend(RegionPart,"-barrel-r",{
                progress: DrawPart.PartProgress.recoil,
                recoilIndex: 1,
                under: true,
                moveY: -1.5
            })
        )
    }),
    shootSound: Sounds.shootDuo,
    recoil: 0.5,
    shootY: 3,
    reload: 16,
    range: 200,
    shootCone: 15,
    ammoUseEffect: Fx.casing1,
    health: 1275,
    inaccuracy: 2,
    rotateSpeed: 12,
    coolantMultiplier: 10,
    depositCooldown: 2
});
Duo.consumeCoolant(0.1);
Duo.ammo(
    Items.copper, extend(BasicBulletType, 3, 22.5, {
        width: 8,
        height: 9,
        lifetime: 210/3,
        ammoMultiplier: 3,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: Pal.copperAmmoBack,
        backColor: Pal.copperAmmoBack,
        trailColor: Pal.copperAmmoBack,
        frontColor: Pal.copperAmmoFront,
        pierce: true,
        pierceCap: 2
    }),
    Items.graphite, extend(BasicBulletType, 4, 45, {
        width: 10,
        height: 12,
        ammoMultiplier: 5,
        lifetime: 234/4,
        reloadMultiplier: 0.9,
        rangeChange: 24,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: Pal.graphiteAmmoBack,
        backColor: Pal.graphiteAmmoBack,
        trailColor: Pal.graphiteAmmoBack,
        frontColor: Pal.graphiteAmmoFront,
        pierce: true,
        pierceCap: 3
    }),
    Items.silicon, extend(BasicBulletType, 3.5, 30, {
        width: 8,
        height: 9,
        lifetime: 210/3.5,
        homingPower: 0.25,
        reloadMultiplier: 1.6,
        ammoMultiplier: 6,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: Pal.siliconAmmoBack,
        backColor: Pal.siliconAmmoBack,
        trailColor: Pal.siliconAmmoBack,
        frontColor: Pal.siliconAmmoFront,
        trailLength: 5,
        trailWidth: 1.5,
        pierce: true,
        pierceCap: 2
    }),
    items.iron, extend(BasicBulletType, 5, 50, {
        width: 10,
        height: 12,
        ammoMultiplier: 3,
        lifetime: 250/5,
        reloadMultiplier: 0.75,
        rangeChange: 40,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: ironAmmoBack,
        backColor: ironAmmoBack,
        trailColor: ironAmmoBack,
        frontColor: ironAmmoFront,
        pierce: true,
        pierceCap: 5,
        armorMultiplier: 0.75
    }),
    items.sodium, extend(BasicBulletType, 4, 36, {
        width: 10,
        height: 10,
        ammoMultiplier: 4,
        lifetime: 210/4,
        reloadMultiplier: 1.1,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: sodiumAmmoBack,
        backColor: sodiumAmmoBack,
        trailColor: sodiumAmmoBack,
        frontColor: sodiumAmmoFront,
        splashDamage: 36,
        splashDamageRadius: 24,
        status: StatusEffects.burning,
        statusDuration: 60*5
    })
);

//Destructor Scatter
const Scatter = extend(ItemTurret, "Destructor_Scatter", {
    localizedName: "Destructor Scatter",
    requirements: ItemStack.with(Items.lead,100 , items.iron,75 , items.sodium,50),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    drawer: extend(DrawTurret,{
        parts: Seq.with(
            extend(RegionPart, "-mid", {
                progress: DrawPart.PartProgress.recoil,
                under: false,
                moveY: -1.25
            })
        )
    }),
    reload: 12,
    range: 260,
    size: 2,
    targetGround: false,
    shoot: extend(ShootPattern,{
        shots: 3,
        shotDelay: 3
    }),
    recoil: 1,
    rotateSpeed: 17.5,
    inaccuracy: 15,
    shootCone: 35,
    health: 1820,
    shootSound: Sounds.shootScatter,
    depositCooldown: 0.5
});
Scatter.consumeCoolant(0.2),
Scatter.ammo(
    Items.scrap, extend(FlakBulletType, 6, 7.5, {
        lifetime: 270/6,
        ammoMultiplier: 6,
        shootEffect: Fx.shootSmall,
        reloadMultiplier: 0.75,
        width: 7,
        height: 8,
        hitEffect: Fx.flakExplosion,
        splashDamage: 82.5,
        splashDamageRadius: 32,
        frontColor: Pal.scrapAmmoFront,
        backColor: Pal.scrapAmmoBack,
        hitColor: Pal.scrapAmmoBack,
        despawnEffect: Fx.hitBulletColor
    }),
    Items.lead, extend(FlakBulletType, 6.4, 7.5, {
        lifetime: 270/6,
        ammoMultiplier: 5,
        shootEffect: Fx.shootSmall,
        width: 7,
        height: 8,
        hitEffect: Fx.flakExplosion,
        splashDamage: 101.25,
        splashDamageRadius: 26
    }),
    Items.metaglass, extend(FlakBulletType, 6, 7.5, {
        backColor: Pal.glassAmmoBack,
        trailColor: Pal.glassAmmoBack,
        hitColor: Pal.glassAmmoFront,
        frontColor: Pal.glassAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        lifetime: 270/6,
        ammoMultiplier: 6,
        shootEffect: Fx.shootSmall,
        reloadMultiplier: 0.9,
        width: 7,
        height: 8,
        hitEffect: Fx.flakExplosion,
        splashDamage: 112.5,
        splashDamageRadius: 30,
        fragBullets: 8,
        fragBullet: extend(BasicBulletType, 4, 12.5, {
            widht: 3,
            height: 12,
            shrinkY: 0.8,
            lifetime: 20,
            backColor: Pal.glassAmmoBack,
            trailColor: Pal.glassAmmoBack,
            hitColor: Pal.glassAmmoFront,
            frontColor: Pal.glassAmmoFront,
            despawnEffect: Fx.none,
            collidesGround: false,
            pierce: true,
            pireceCap: 2
        })
    }),
    items.sodium, extend(FlakBulletType, 5, 20, {
        backColor: sodiumAmmoBack,
        frontColor: sodiumAmmoFront,
        trailColor: sodiumAmmoBack,
        hitColor: sodiumAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        lifetime: 270/5,
        ammoMultiplier: 5,
        shootEffect: Fx.shootSmall,
        width: 10,
        height: 10,
        hitEffect: Fx.flakExplosion,
        splashDamage: 125,
        splashDamageRadius: 48,
        status: StatusEffects.burning,
        statusDuration: 300
    })
);

//Destructor Scorch
const Scorch = extend(ItemTurret, "Destructor_Scorch", {
    localizedName: "Destructor Scorch",
    requirements: ItemStack.with(items.sodium,65 , Items.graphite,80),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    recoil: 0,
    reload: 5,
    coolantMultiplier: 1.5,
    range: 120,
    shootY: 3,
    shootCone: 50,
    targetAir: false,
    ammoUseEffect: Fx.none,
    health: 1380,
    shootSound: Sounds.shootFlame,
    depositCooldown: 1
});
Scorch.consumeCoolant(0.1),
Scorch.ammo(
    Items.coal, extend(BulletType, 8, 40, {
        ammoMultiplier: 4,
        hitSize: 7,
        lifetime: 16,
        pirece: true,
        collidesAir: false,
        statusDuration: 300,
        shootEffect: extend(Effect, 32, 80, e=>{
            Draw.color(Pal.lightFlame, Pal.darkFlame, Color.gray, e.fin());

            Angles.randLenVectors(e.id, 36, e.finpow() * 128, e.rotation, 5, (x, y) => {
                Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
            });
        },{followParent:false}),
        hitEffect: Fx.hitFlameSmall,
        despawnEffect: Fx.none,
        status: StatusEffects.burning,
        hittable: false
    }),
    Items.pyratite, extend(BulletType, 8, 80, {
        ammoMultiplier: 12,
        hitSize: 7,
        lifetime: 16,
        pirece: true,
        collidesAir: false,
        statusDuration: 300,
        shootEffect: extend(Effect, 32, 80, e=>{
            Draw.color(Pal.lightPyraFlame, Pal.darkPyraFlame, Color.gray, e.fin());

            Angles.randLenVectors(e.id, 36, e.finpow() * 128, e.rotation, 5, (x, y) => {
                Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
            });
        },{followParent:false}),
        hitEffect: Fx.hitFlameSmall,
        despawnEffect: Fx.none,
        status: StatusEffects.burning,
        hittable: false
    }),
    items.sodium, extend(BulletType, 8, 60, {
        ammoMultiplier: 8,
        hitSize: 7,
        lifetime: 16 + 60/8,
        rangeChange: 60,
        pirece: true,
        collidesAir: false,
        statusDuration: 300,
        shootEffect: extend(Effect, 32, 80, e=>{
            Draw.color(Color.valueOf("fff7c0"), Color.valueOf("ffd21f"), Color.gray, e.fin());

            Angles.randLenVectors(e.id, 36, e.finpow() * 188, e.rotation, 5, (x, y) => {
                Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
            });
        },{followParent:false}),
        hitEffect: Fx.hitFlameSmall,
        despawnEffect: Fx.none,
        status: StatusEffects.burning,
        hittable: false
    })
);

//Destructor Hail
const Hail = extend(ItemTurret, "Destructor_Hail", {
    localizedName: "Destructor Hail",
    requirements: ItemStack.with(items.iron,60 , Items.graphite,50),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    targetAir: false,
    reload: 45,
    recoil: 2,
    range: 290,
    inaccuracy: 1.25,
    shootCone: 10,
    health: 1590,
    shootSound: Sounds.shootArtillerySmall,
    coolantMultiplier: 10,
    depositCooldown: 2,
    shoot: extend(ShootPattern, {
        shots: 2
    })
});
Hail.consumeCoolant(0.2),
Hail.ammo(
    Items.graphite, extend(ArtilleryBulletType, 4.5, 50, {
        knockback: 0.8,
        lifetime: 300/4.5,
        width: 12,
        height: 12,
        collidesTiles: false,
        splashDamage: 82.5,
        splashDamageRadius: 24,
        hitColor: Pal.graphiteAmmoBack,
        backColor: Pal.graphiteAmmoBack,
        trailColor: Pal.graphiteAmmoBack,
        frontColor: Pal.graphiteAmmoFront,
        despawnEffect: Fx.hitBulletColor
    }),
    Items.silicon, extend(ArtilleryBulletType, 4.5, 50, {
        knockback: 0.8,
        lifetime: 300/4.5,
        width: 12,
        height: 12,
        collidesTiles: false,
        reloadMultiplier: 1.2,
        ammoMultiplier: 3,
        splashDamage: 82.5,
        splashDamageRadius: 24,
        hitColor: Pal.siliconAmmoBack,
        backColor: Pal.siliconAmmoBack,
        trailColor: Pal.siliconAmmoBack,
        frontColor: Pal.siliconAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        homingPower: 0.08,
        homingRange: 60,
        trailLength: 7,
        trailWidth: 3,
    }),
    Items.pyratite, extend(ArtilleryBulletType, 4.5, 62.5, {
        hitEffect: Fx.blastExplosion,
        knockback: 0.8,
        lifetime: 300/4.5,
        width: 12,
        height: 12,
        collidesTiles: false,
        ammoMultiplier: 4,
        splashDamage: 112.5,
        splashDamageRadius: 24,
        hitColor: Pal.lightishOrange,
        backColor: Pal.lightishOrange,
        trailColor: Pal.lightishOrange,
        frontColor: Pal.lightOrange,
        despawnEffect: Fx.hitBulletColor,
        makeFire: true,
        trailEffect: Fx.incendTrail
    }),
    items.sodiumBattery, extend(ArtilleryBulletType, 4.5, 80, {
        knockback: 0.8,
        lifetime: 300/4.5,
        width: 12,
        height: 12,
        collidesTiles: false,
        splashDamage: 150,
        splashDamageRadius: 24,
        ammoMultiplier: 5,
        hitColor: batteryAmmoBack,
        backColor: batteryAmmoBack,
        trailColor: batteryAmmoBack,
        frontColor: batteryAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        lightning: 3,
        lightningLength: 3,
        lightningLengthRand: 5,
        lightningDamage: 20
    })
);

//Destrutor Wave
const Wave = extend(LiquidTurret, "Destructor_Wave", {
    localizedName: "Destructor Wave",
    requirements: ItemStack.with(Items.copper,100 , items.iron,50 , Items.metaglass,50),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    size: 2,
    recoil: 0,
    reload: 2,
    inaccuracy: 2.5,
    shootCone: 50,
    liquidCapacity: 20,
    shootEffect: Fx.shootLiquid,
    range: 180,
    health: 1740
});
Wave.ammo(
    Liquids.water, extend(LiquidBulletType, Liquids.water, {
        knockback: 0.8,
        drag: 0.01,
        layer: Layer.bullet - 2,
        damage: 6,
        speed: 8,
        lifetime: 190/8
    }),
    Liquids.slag, extend(LiquidBulletType, Liquids.slag, {
        drag: 0.01,
        damage: 10,
        speed: 8,
        lifetime: 190/8
    }),
    Liquids.cryofluid, extend(LiquidBulletType, Liquids.cryofluid, {
        drag: 0.01,
        damage: 8,
        speed: 8,
        lifetime: 190/8
    }),
    Liquids.oil, extend(LiquidBulletType, Liquids.oil, {
        drag: 0.01,
        layer: Layer.bullet - 2,
        damage: 8,
        speed: 8,
        lifetime: 190/8
    })
);

//Destructor Lancer
const Lancer = extend(PowerTurret, "Destructor_Lancer", {
    localizedName: "Destructor Lancer",
    requirements: ItemStack.with(Items.lead,100 , Items.silicon,100 , items.gold,50 , Items.titanium,40),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    range: 220,
    shoot: extend(ShootPattern, {
        firstShotDelay: 20
    }),
    recoil: 2,
    reload: 60,
    shake: 2,
    shooteffect: Fx.lancerLaserShoot,
    smokeEffect: Fx.none,
    heatColor: Color.red,
    size: 2,
    health: 2222,
    targetAir: false,
    moveWhileCharging: false,
    accurateDelay: true,
    shootSound: Sounds.shootLancer,
    chargeSound: Sounds.chargeLancer,
    shootType: extend(LaserBulletType, 420,{
        colors: [Color.valueOf("f7f27966"), goldAmmoFront, Color.valueOf("ffffff")],
        chargeEffect: new MultiEffect(
            extend(Effect, 18, e => {
                Draw.color(goldAmmoBack);
                Angles.randLenVectors(e.id, 14, 1 + 20 * e.fout(), e.rotation, 120, (x, y) => {
                    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 3 + 1);
                });
            },{}),
            extend(Effect, 40, e=>{
                let margin = 1 - Mathf.curve(e.fin(), 0.9);
                let fin = Math.min(margin, e.fin());

                Draw.color(goldAmmoBack);
                Fill.circle(e.x, e.y, fin * 3);

                Draw.color();
                Fill.circle(e.x, e.y, fin * 2);
            },{})
        ),
        buildingDamageMultiplier: 0.5,
        hitEffect: Fx.hitLancer,
        hitSize: 6,
        lifetime: 16,
        drawSize: 400,
        length: 230,
        width: 24,
        ammoMultiplier: 1
    })
});
Lancer.consumeCoolant(0.2);
Lancer.consumePower(8);

//Destructor Arc
const Arc = extend(PowerTurret, "Destructor_Arc", {
    localizedName: "Destructor Arc",
    requirements: ItemStack.with(Items.lead,150 , items.iron,80),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    reload: 20,
    shootCone: 40,
    rotateSpeed: 10,
    range: 140,
    shootEffect: Fx.lightningShoot,
    heatColor: Color.red,
    recoil: 1,
    size: 1,
    health: 1111,
    shootSound: Sounds.shootArc,
    shoot: extend(ShootPattern, {
        shots: 2
    }),
    shootType: extend(LightningBulletType, {
        damage: 50,
        lightningLenght: 36,
        ammoMultiplier: 1,
        buildingDamageMultiplier: 0.5,
        lightningType: extend(BulletType, 0.0001,0,{
            lifetime: Fx.lightning.lifetime,
            hiteffect: Fx.hitLancer,
            despawnEffect: Fx.none,
            status: StatusEffects.shocked,
            hittable: false,
            lightColor: Color.white,
            buildingDamageMultiplier: 0.5,
            shieldDamageMultiplier: 0.5
        })
    })
});
Arc.consumeCoolant(0.1);
Arc.consumePower(4);

//Destructor Parallax
const Parallax = extend(TractorBeamTurret, "Destructor_Parallax", {
    localizedName: "Destructor Parallax",
    requirements: ItemStack.with(Items.silicon,200 , Items.titanium,120 , items.gold,50 , items.sodiumBattery,100),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    hasPower: true,
    size: 2,
    force: 32,
    scaledForce: 12,
    range: 348,
    damage: 2.5,
    health: 1530,
    rotateSpeed: 14
});
Parallax.consumePower(6);

//Destructor Swarmer
const Swarmer = extend(ItemTurret, "Destructor_Swarmer", {
    localizedName: "Destructor Swarmer",
    requirements: ItemStack.with(Items.graphite,120 , Items.thorium,80 , Items.plastanium,100 , items.sodiumBattery,90  , items.gold,120),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    shoot: extend(ShootBarrel, {
        barrels: [-4, -1.25, 0, 0, 0, 0, 4, -1.25, 0],
        shots: 5,
        shotDelay: 3
    }),
    shootY: 4.5,
    reload: 30,
    inaccuracy: 10,
    size: 2,
    health: 2620,
    shootSound: Sounds.shootMissile,
    depositCooldown: 2.0,
    range: 320
});
Swarmer.consumeCoolant(0.3);
Swarmer.ammo(
    Items.blastCompound, extend(MissileBulletType, 6, 30, {
        width: 9,
        height: 9,
        shrinkY: 0,
        splashDamageRadius: 40,
        splashDamage: 135,
        ammoMultiplier: 7,
        lifetime: 330/6,
        hitEffect: Fx.blastExplosion,
        despawnEffect: Fx.blastExplosion,
        status: StatusEffects.blasted,
        hitColor: Pal.blastAmmoBack,
        backColor: Pal.blastAmmoBack,
        trailColor: Pal.blastAmmoBack,
        frontColor: Pal.blastAmmoFront
    }),
    Items.pyratite, extend(MissileBulletType, 6, 30, {
        frontColor: Pal.lightishOrange,
        backColor: Pal.lightOrange,
        widht: 8,
        height: 8,
        shrinkY: 0,
        lifetime: 330/6,
        homingPower: 0.8,
        splashDamageRadius: 32,
        splashDamage: 135,
        makeFire: true,
        ammoMultiplier: 8,
        hitEffect: Fx.blastExplosion,
        status: StatusEffects.burning
    }),
    Items.surgeAlloy, extend(MissileBulletType, 6, 54, {
        width: 9,
        height: 9,
        shrinkY: 0,
        splashDamageRadius: 40,
        splashDamage: 105,
        ammoMultiplier: 6,
        lightningDamage: 30,
        lightning: 3,
        lifetime: 330/6,
        lightningLength: 12,
        hitColor: Pal.surgeAmmoBack,
        backColor: Pal.surgeAmmoBack,
        trailColor: Pal.surgeAmmoBack,
        frontColor: Pal.surgeAmmoFront
    }),
    items.diamond, extend(MissileBulletType, 8, 80, {
        width: 9,
        height: 9,
        shrinkY: 0,
        lifetime: 330/8,
        splashDamageRadius: 40,
        splashDamage: 160,
        hitColor: diamondAmmoBack,
        backColor: diamondAmmoBack,
        trailColor: diamondAmmoBack,
        frontColor: diamondAmmoFront,
        fragBullets: 7,
        fragLifeMin: 0.3,
        armorMultiplier: 0.5, 
        fragBullet: extend(BasicBulletType, 6, 64, {
            widht: 2,
            height: 2,
            lifetime: 18,
            despawnEffect: Fx.none,
            backColor: diamondAmmoBack,
            frontColor: diamondAmmoFront,
            pierce: true,
            buildingDamageMultiplier: 0.1
        })
    })
);

//Destructor Salvo
const Salvo = extend(ItemTurret, "Destructor_Salvo", {
    localizedName: "Destructor Salvo",
    requirements: ItemStack.with(Items.graphite,150 , Items.titanium,100 , items.iron,120),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    drawer: extend(DrawTurret, {
        parts: Seq.with(
            extend(RegionPart, "-side",{
                progress: DrawPart.PartProgress.warmup,
                moveX: 0.6,
                moveRot: -15,
                mirror: true,
                layerOffset: 0.001,
                moves: Seq.with(extend(DrawPart.PartMove, DrawPart.PartProgress.recoil, 0.5,-0.5,-8 ,{}))
            }),
            extend(RegionPart, "-barrel", {
                progress: DrawPart.PartProgress.recoil,
                moveY: -2.5
            })
        )
    }),
    size: 2,
    range: 270,
    reload: 30,
    consumeAmmoOnce: false,
    ammoEjectBack: 3,
    recoil: 0,
    shake: 1,
    shoot: extend(ShootPattern, {
        shots: 6,
        shotDelay: 1.5
    }),
    ammoUseEffect: Fx.casing2,
    health: 1990,
    shootSounde: Sounds.shootSalvo,
    depositCooldown: 2
});
Salvo.consumeCoolant(0.2);
Salvo.ammo(
    Items.copper, extend(BasicBulletType, 4, 52.5, {
        width: 7,
        height: 9,
        lifetime: 280/4,
        ammoMultiplier: 6,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: Pal.copperAmmoBack,
        backColor: Pal.copperAmmoBack,
        trailColor: Pal.copperAmmoBack,
        frontColor: Pal.copperAmmoFront,
        pierce: true,
        pierceCap: 2
    }),
    Items.graphite, extend(BasicBulletType, 5, 108.5, {
        width: 10,
        height: 13,
        lifetime: 320/5,
        rangeChange: 40,
        ammoMultiplier: 5,
        reloadMultiplier: 0.9,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: Pal.graphiteAmmoBack,
        backColor: Pal.graphiteAmmoBack,
        trailColor: Pal.graphiteAmmoBack,
        frontColor: Pal.graphiteAmmoFront,
        pierce: true,
        pierceCap: 2
    }),
    Items.pyratite, extend(BasicBulletType, 4, 87.5, {
        widht: 11,
        height: 12,
        frontColor: Pal.lightishOrange,
        hitColor: Pal.lightishOrange,
        backColor: Pal.lightOrange,
        status: StatusEffects.burning,
        hitEffect: new MultiEffect(Fx.hitBulletColor, Fx.fireHit),
        ammoMultiplier: 6,
        splashDamage: 52.5,
        splashDamageRadius: 30,
        makeFire: true,
        lifetime: 280/4,
        pierce: true,
        pierceCap: 2
    }),
    Items.silicon, extend(BasicBulletType, 4.5, 52.5, {
        width: 9,
        height: 10,
        lifetime: 280/4.5,
        ammoMultiplier: 7,
        reloadMultiplier: 1.5,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: Pal.siliconAmmoBack,
        backColor: Pal.siliconAmmoBack,
        trailColor: Pal.siliconAmmoBack,
        frontColor: Pal.siliconAmmoFront,
        homingPower: 0.3,
        trailLength: 5,
        trailWidth: 1.5,
        pierce: true,
        pierceCap: 2
    }),
    Items.thorium, extend(BasicBulletType, 6, 98, "bullet", {
        width: 10,
        height: 15,
        lifetime: 280/6,
        ammoMultiplier: 5,
        armorMultiplier: 0.8,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: Pal.thoriumAmmoBack,
        backColor: Pal.thoriumAmmoBack,
        trailColor: Pal.thoriumAmmoBack,
        frontColor: Pal.thoriumAmmoFront,
        pierce: true,
        pierceCap: 2,
        shootEffect: Fx.shootBig,
        smokeEffect: Fx.shootBigSmoke
    }),
    items.gold, extend(BasicBulletType, 6, 122, "bullet", {
        width: 10,
        height: 15,
        lifetime: 280/6,
        ammoMultiplier: 6,
        armorMultiplier: 0.667,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: goldAmmoBack,
        backColor: goldAmmoBack,
        trailColor: goldAmmoBack,
        frontColor: goldAmmoFront,
        pierce: true,
        pierceCap: 3,
        shootEffect: Fx.shootBig,
        smokeEffect: Fx.shootBigSmoke
    }),
    items.diamond, extend(BasicBulletType, 6, 165, "bullet", {
        width: 10,
        height: 15,
        lifetime: 280/6,
        ammoMultiplier: 8,
        armorMultiplier: 0.5,
        hitEffect: Fx.hitBulletColor,
        despawnEffect: Fx.hitBulletColor,
        hitColor: diamondAmmoBack,
        backColor: diamondAmmoBack,
        trailColor: diamondAmmoBack,
        frontColor: diamondAmmoFront,
        pierce: true,
        pierceCap: 5,
        shootEffect: Fx.shootBig,
        smokeEffect: Fx.shootBigSmoke,
        fragBullets: 3,
        fragLifeMin: 0.3,
        fragBullet: extend(BasicBulletType, 6, 44, {
            widht: 2,
            height: 2,
            lifetime: 18,
            despawnEffect: Fx.none,
            backColor: diamondAmmoBack,
            frontColor: diamondAmmoFront,
            buildingDamageMultiplier: 0.2
        })
    })
);

//Destructor Segment
const DSegment = extend(PointDefenseTurret, "Destructor_Segment",{
    localizedName: "Destructor Segment",
    hasPower: true,
    size: 2,
    range: 240,
    bulletDamage: 64,
    health: 2110,
    reload: 1,
    shootLength: 10,
    requirements: ItemStack.with(Items.silicon,300 , Items.thorium,160 , Items.phaseFabric,150, items.gold,120 , items.sodiumBattery,280),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown
});
DSegment.consumePower(8);

//Destructor Tsunami
const Tsunami = extend(LiquidTurret, "Destructor_Tsunami", {
    localizedName: "Destructor Tsunami",
    requirements: ItemStack.with(Items.metaglass,300 , Items.thorium,150 , Items.phaseFabric,50, items.iron,80 , items.sodiumBattery,120),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    size: 3,
    shoot: extend(ShootPattern, {
        shots: 32
    }),
    reload: 30,
    inaccuracy: 30,
    shootSound: Vars.tree.loadSound("Dspray"),
    loopSound: Sounds.none,
    velocityRnd: 0.25,
    recoil: 3,
    shootCone: 45,
    liquidCapacity: 60,
    shootEffect: Fx.shootLiquid,
    range: 280,
    health: 3330
});
Tsunami.consumePower(4);
Tsunami.ammo(
    Liquids.water, extend(LiquidBulletType, Liquids.water, {
        lifetime: 50,
        speed: 5.8,
        puddleSize: 10,
        orbSize: 5,
        drag: 0.001,
        ammoMultiplier: 0.033,
        statusDuration: 360,
        damage: 2,
        layer: Layer.bullet - 2,
        knockback: 1.7
    }),
    Liquids.slag, extend(LiquidBulletType, Liquids.slag, {
        lifetime: 50,
        speed: 5.8,
        knockback: 1.3,
        puddleSize: 10,
        orbSize: 5,
        drag: 0.001,
        ammoMultiplier: 0.033,
        statusDuration: 360,
        damage: 5
    }),
    Liquids.cryofluid, extend(LiquidBulletType, Liquids.cryofluid, {
        lifetime: 50,
        speed: 5.8,
        knockback: 1.3,
        puddleSize: 10,
        orbSize: 5,
        drag: 0.001,
        ammoMultiplier: 0.033,
        statusDuration: 360,
        damage: 2
    }),
    Liquids.oil, extend(LiquidBulletType, Liquids.oil, {
        lifetime: 50,
        speed: 5.8,
        knockback: 1.3,
        puddleSize: 10,
        orbSize: 5,
        drag: 0.001,
        ammoMultiplier: 0.033,
        statusDuration: 360,
        damage: 2,
        layer: Layer.bullet - 2
    })
);

//Destructor Fuse
const Fuse = extend(ItemTurret, "Destructor_Fuse", {
    localizedName: "Destructor Tsunami",
    requirements: ItemStack.with(items.iron,400 , items.gold,300 , Items.graphite,300 , Items.thorium,225),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    reload: 28,
    shake: 4,
    range: 150,
    shootCone: 30,
    shoot: extend(ShootSpread, {
        shots: 5,
        spread: 10
    }),
    size: 3,
    health: 4250,
    shootSound: Sounds.shootFuse,
    shootSoundVolume: 0.9,
    depositCooldown: 1
});
Fuse.consumeCoolant(0.3);
Fuse.ammo(
    Items.titanium, extend(ShrapnelBulletType,{
        length: 160,
        damage: 165,
        ammoMultiplier: 4,
        reloadMultiplier: 1.3
    }),
    Items.thorium, extend(ShrapnelBulletType,{
        length: 160,
        damage: 262.5,
        ammoMultiplier: 5,
        toColor: Pal.thoriumPink,
        shootEffect: Fx.thoriumShoot,
        smokeEffect: Fx.thoriumShoot,
        reloadMultiplier: 1.1
    }),
    items.gold, extend(ShrapnelBulletType, {
        length: 160,
        damage: 330,
        ammoMultiplier: 4,
        toColor: goldAmmoBack,
        shootEffect: extend(Effect, 12, e => {
            Draw.color(Color.white, goldAmmoBack, e.fin());
            Lines.stroke(e.fout() * 1.2 + 0.5);
            Angles.randLenVectors(e.id, 7, 25 * e.finpow(), e.rotation, 50, (x, y) => {
                Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fin() * 5 + 2);
            });
        },{}),
        smokeEffect: extend(Effect, 12, e => {
            Draw.color(Color.white, goldAmmoBack, e.fin());
            Lines.stroke(e.fout() * 1.2 + 0.5);
            Angles.randLenVectors(e.id, 7, 25 * e.finpow(), e.rotation, 50, (x, y) => {
                Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fin() * 5 + 2);
            });
        },{}),
    }),
    items.diamond, extend(ShrapnelBulletType, {
        length: 160,
        damage: 480,
        ammoMultiplier: 3,
        toColor: diamondAmmoBack,
        shootEffect: extend(Effect, 12, e => {
            Draw.color(Color.white, diamondAmmoBack, e.fin());
            Lines.stroke(e.fout() * 1.2 + 0.5);
            Angles.randLenVectors(e.id, 7, 25 * e.finpow(), e.rotation, 50, (x, y) => {
                Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fin() * 5 + 2);
            });
        },{}),
        smokeEffect: extend(Effect, 12, e => {
            Draw.color(Color.white, diamondAmmoBack, e.fin());
            Lines.stroke(e.fout() * 1.2 + 0.5);
            Angles.randLenVectors(e.id, 7, 25 * e.finpow(), e.rotation, 50, (x, y) => {
                Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fin() * 5 + 2);
            });
        },{}),
    })
);

//Destructor Ripple
const Ripple = extend(ItemTurret, "Destructor_Ripple", {
    localizedName: "Destructor Ripple",
    requirements: ItemStack.with(Items.copper,300 , Items.graphite,400 , Items.surgeAlloy,100 , items.iron,250 , items.gold,150),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    targetAir: false,
    size: 3,
    shoot: extend(ShootPattern,{
        shots: 8
    }),
    inaccuracy: 10,
    reload: 80,
    ammoEjectBack: 5,
    ammoUseEffect: Fx.casing3Double,
    ammoPerShot: 2,
    velocityRnd: 0.2,
    scaleLifetimeOffset: 1/9,
    recoil: 6,
    shake: 2,
    range: 400,
    minRange: 50,
    health: 4770,
    depositCooldown: 2,
    shootSound: Sounds.shootRipple
});
Ripple.consumeCoolant(0.3),
Ripple.ammo(
    Items.graphite, extend(ArtilleryBulletType, 6, 100, {
        hitEffect: new MultiEffect(Fx.flakExplosion, Fx.shockwaveSmaller),
        knockback: 0.8,
        lifetime: 410/6,
        width: 14,
        height: 14,
        collidesTiles: false,
        splashDamageRadius: 32,
        splashDamage: 175,
        ammoMultiplier: 3,
        backColor: Pal.graphiteAmmoBack,
        hitColor: Pal.graphiteAmmoBack,
        trailColor: Pal.graphiteAmmoBack,
        frontColor: Pal.graphiteAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        lifeScaleRandMax: 1.1,
        lifeScaleRandMin: 0.92
    }),
    Items.silicon, extend(ArtilleryBulletType, 6,100,{
        hitEffect: new MultiEffect(Fx.flakExplosion, Fx.shockwaveSmaller),
        knockback: 0.8,
        lifetime: 410/6,
        widht: 14,
        height: 14,
        collidesTiles: false,
        splashDamageRadius: 32,
        splashDamage: 175,
        reloadMultiplier: 1.2,
        homingPower: 0.08,
        homingRange: 50,
        trailLength: 9,
        trailWidth: 3.1,
        ammoMultiplier: 4,
        despawnEffect: Fx.hitBulletColor,
        backColor: Pal.siliconAmmoBack,
        hitColor: Pal.siliconAmmoBack,
        trailColor: Pal.siliconAmmoBack,
        frontColor: Pal.siliconAmmoFront,
        lifeScaleRandMax: 1.1,
        lifeScaleRandMin: 0.92
    }),
    Items.pyratite, extend(ArtilleryBulletType,6,120,{
        reflectable: false,
        hitEffect: new MultiEffect(Fx.flakExplosion, Fx.shockwaveSmaller),
        knockback: 0.8,
        lifetime: 410/6,
        widht: 15,
        height: 15,
        collidesTiles: false,
        splashDamageRadius: 32,
        splashDamage: 225,
        status: StatusEffects.burning,
        statusDuration: 60*12,
        frontColor: Pal.lightishOrange,
        backColor: Pal.lightOrange,
        hitColor: Pal.lightOrange,
        makeFire: true,
        trailEffect: Fx.incendTrail,
        ammoMultiplier: 4,
        despawnEffect: Fx.hitBulletColor,
        lifeScaleRandMax: 1.1,
        lifeScaleRandMin: 0.92
    }),
    Items.blastCompound, extend(ArtilleryBulletType, 4, 100, "shell", {
        reflectable: false,
        hitEffect: new MultiEffect(Fx.flakExplosion, Fx.shockwaveSmaller),
        knockback: 0.8,
        lifetime: 410/4,
        widht: 16,
        height: 16,
        collidesTiles: false,
        splashDamageRadius: 56,
        splashDamage: 225,
        ammoMultiplier: 4,
        status: StatusEffects.blasted,
        lifeScaleRandMax: 1.1,
        lifeScaleRandMin: 0.92,
        despawnEffect: Fx.hitBulletColor,
        backColor: Pal.blastAmmoBack,
        hitColor: Pal.blastAmmoBack,
        trailColor: Pal.blastAmmoBack,
        frontColor: Pal.blastAmmoFront
    }),
    Items.plastanium, extend(ArtilleryBulletType, 6.8, 100, "shell", {
        reflectable: false,
        hitEffect: new MultiEffect(Fx.flakExplosion, Fx.shockwaveSmaller),
        knockback: 1,
        lifetime: 410/6.8,
        widht: 15,
        height: 15,
        collidesTiles: false,
        splashDamageRadius: 40,
        splashDamage: 225,
        ammoMultiplier: 3,
        fragBullet: extend(BasicBulletType, 3, 32, "bullet", {
            widht: 10,
            height: 12,
            shrinkY: 1,
            lifetime: 15,
            backColor: Pal.plastaniumBack,
            frontColor: Pal.plastaniumFront,
            despawnEffect: Fx.none,
            collidesAir: false,
            buildingDamageMultiplier: 0.5
        }),
        fragBullets: 15,
        backColor: Pal.plastaniumBack,
        frontColor: Pal.plastaniumFront,
        lifeScaleRandMax: 1.1,
        lifeScaleRandMin: 0.92
    }),
    Items.surgeAlloy, extend(ArtilleryBulletType, 6, 80, {
        reflectable: false,
        hitEffect: new MultiEffect(Fx.flakExplosion, Fx.shockwaveSmaller),
        knockback: 0.8,
        lifetime: 410/6,
        width: 12,
        height: 12,
        collidesTiles: false,
        splashDamageRadius: 40,
        splashDamage: 240,
        ammoMultiplier: 3,
        backColor: Pal.surgeAmmoBack,
        hitColor: Pal.surgeAmmoBack,
        trailColor: Pal.surgeAmmoBack,
        frontColor: Pal.surgeAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        lifeScaleRandMax: 1.1,
        lifeScaleRandMin: 0.92,
        lightning: 3,
        lightningLength: 6,
        lightningLengthRand: 6
    }),
    items.diamond, extend(ArtilleryBulletType, 8, 155, "shell", {
        reflectable: false,
        hitEffect: new MultiEffect(Fx.flakExplosion, Fx.shockwaveSmaller),
        knockback: 0.8,
        lifetime: 410/8,
        width: 16,
        height: 16,
        collidesTiles: false,
        splashDamageRadius: 56,
        splashDamage: 300,
        ammoMultiplier: 4,
        backColor: diamondAmmoBack,
        hitColor: diamondAmmoBack,
        trailColor: diamondAmmoBack,
        frontColor: diamondAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        lifeScaleRandMax: 1.1,
        lifeScaleRandMin: 0.92,
        fragBullets: 6,
        fragBullet: extend(BasicBulletType, 5, 48, {
            width: 3,
            height: 15,
            shrinkY : 0,
            lifetime: 15,
            frontColor: diamondAmmoBack,
            backColor: diamondAmmoFront,
            despawnEffect: Fx.none,
            pierce: true,
            collidesAir: false
        })
    }),
);

//Destructor Cyclone
const Cyclone = extend(ItemTurret, "Destructor_Cyclone", {
    localizedName: "Destructor Cyclone",
    requirements: ItemStack.with(Items.copper,400 , Items.plastanium,250 , Items.surgeAlloy,125 , items.diamond,150),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    shootY: 10,
    shoot: extend(ShootBarrel, {
        barrels: [0, 1, 0, 3, 0, 0, -3, 0, 0]
    }),
    recoils: 3,
    drawer: extend(DrawTurret, {
        parts: Seq.with(
            extend(RegionPart, "-barrel-1", {
                progress: DrawPart.PartProgress.recoil,
                recoilIndex: 0,
                under: true,
                moveY: -2
            }),
            extend(RegionPart, "-barrel-2", {
                progress: DrawPart.PartProgress.recoil,
                recoilIndex: 1,
                under: true,
                moveY: -2
            }),
            extend(RegionPart, "-barrel-3", {
                progress: DrawPart.PartProgress.recoil,
                recoilIndex: 2,
                under: true,
                moveY: -2
            }),
        )
    }),
    reload: 6,
    range: 320,
    size: 3,
    recoil: 1.5,
    recoilTime: 10,
    rotateSpeed: 10,
    inaccuracy: 6,
    shootCone: 30,
    shootSound: Sounds.shootCyclone,
    health: 5525,
    depositCooldown: 2
});
Cyclone.consumeCoolant(0.3);
Cyclone.ammo(
    Items.blastCompound, extend(FlakBulletType, 6, 24, {
        reflectable: false,
        lifetime: 330/6,
        shootEffect: Fx.shootBig,
        ammoMultiplier: 5,
        splashDamage: 135,
        splashDamageRadius: 68,
        collidesGround: true,
        status: StatusEffects.blasted,
        backColor: Pal.blastAmmoBack,
        hitColor: Pal.blastAmmoBack,
        trailColor: Pal.blastAmmoBack,
        frontColor: Pal.blastAmmoFront,
        despawnEffect: Fx.hitBulletColor
    }),
    Items.plastanium, extend(FlakBulletType, 6,24, {
        reflectable: false,
        lifetime: 330/6,
        ammoMultiplier: 4,
        splashDamageRadius: 48,
        splashDamage: 112.5,
        fragBullet: extend(BasicBulletType, 3, 36, "bullet",{
            width: 10,
            height: 12,
            shrinkY: 1,
            lifetime: 15,
            backColor: Pal.plastaniumBack,
            frontColor: Pal.plastaniumFront,
            despawnEffect: Fx.none
        }),
        fragBullets: 8,
        hitEffect: Fx.plasticExplosion,
        backColor: Pal.plastaniumBack,
        frontColor: Pal.plastaniumFront,
        shootEffect: Fx.shootBig,
        collidesGround: true,
        explodeRange: 20,
        despawnEffect: Fx.hitBulletColor
    }),
    Items.surgeAlloy, extend(FlakBulletType,7,39,{
        reflectable: false,
        lifetime: 330/7,
        ammoMultiplier: 5,
        splashDamage: 225,
        splashDamageRadius: 46,
        lightning: 3,
        lightningLenght: 8,
        shootEffect: Fx.shootBig,
        collidesGround: true,
        explodeRange: 20,
        backColor: Pal.surgeAmmoBack,
        hitColor: Pal.surgeAmmoBack,
        trailColor: Pal.surgeAmmoBack,
        frontColor: Pal.surgeAmmoFront,
        despawnEffect: Fx.hitBulletColor
    }),
    items.diamond, extend(FlakBulletType, 8,57, {
        reflectable: false,
        lifetime: 330/8,
        ammoMultiplier: 8,
        splashDamageRadius: 72,
        splashDamage: 256,
        fragBullet: extend(BasicBulletType, 3, 48, "bullet",{
            width: 5,
            height: 12,
            shrinkY: 1,
            lifetime: 15,
            backColor: diamondAmmoBack,
            frontColor: diamondAmmoFront,
            despawnEffect: Fx.none,
            pierce: true
        }),
        fragBullets: 8,
        backColor: diamondAmmoBack,
        hitColor: diamondAmmoBack,
        trailColor: diamondAmmoBack,
        frontColor: diamondAmmoFront,
        despawnEffect: Fx.hitBulletColor,
        shootEffect: Fx.shootBig,
        collidesGround: true,
        explodeRange: 20,
        pierce: true,
        pierceCap: 3
    })
);

//Destructor Forehadow
const Foreshadow = extend(ItemTurret, "Destructor_Foreshadow", {
    localizedName: "Destructor Foreshadow",
    requirements: ItemStack.with(Items.copper,1400, Items.silicon,1000 , Items.metaglass,800 , Items.plastanium,500 , Items.surgeAlloy,1000 , items.gold,800 , items.diamond,600 , items.sodiumBattery,1000),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    maxAmmo: 50,
    ammoPerShot: 5,
    rotateSpeed: 2.25,
    reload: 200,
    ammoUseEffect: Fx.casing3Double,
    recoil: 5,
    cooldownTime: 200,
    shake: 4,
    size: 4,
    shootCone: 2,
    shootSound: Vars.tree.loadSound("railgun_D"),
    unitSort: UnitSorts.strongest,
    coolantMultiplier: 0.4,
    liquidCapacity: 60,
    health: 10000,
    depositCooldown: 2,
    range: 600
});
Foreshadow.consumeCoolant(1),
Foreshadow.consumePower(30)
Foreshadow.ammo(
    Items.surgeAlloy, extend(RailBulletType, {
        shootEffect: extend(Effect, 24, e => {
            e.scaled(10, b => {
                Draw.color(Color.white, Color.valueOf("ed655a"), b.fin());
                Lines.stroke(b.fout() * 3 + 0.2);
                Lines.circle(b.x, b.y, b.fin() * 50);
            });
            Draw.color(Color.valueOf("ed655a"));
            let signs = [-1,1]
            for(let i in signs){
                Drawf.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation + 90 * signs[i]);
                Drawf.tri(e.x, e.y, 13 * e.fout(), 50, e.rotation + 20 * signs[i]);
            }
            Drawf.light(e.x, e.y, 180, Color.valueOf("ed655a"), 0.9 * e.fout());
        },{}),
        hitEffect: extend(Effect,20, 200, e => {
            Draw.color(Color.valueOf("ed655a"));
            for(let i = 0; i < 2; i++){
                Draw.color(i == 0 ? Color.valueOf("ed655a") : Color.valueOf("eda096"));
                let m = i == 0 ? 1 : 0.5;

                for(let j = 0; j < 5; j++){
                    let rot = e.rotation + Mathf.randomSeedRange(e.id + j, 50);
                    let w = 23 * e.fout() * m;
                    Drawf.tri(e.x, e.y, w, (80 + Mathf.randomSeedRange(e.id + j, 40)) * m, rot);
                    Drawf.tri(e.x, e.y, w, 20 * m, rot + 180);
                }
            }
            e.scaled(10, c => {
                Draw.color(Color.valueOf("eda096"));
                Lines.stroke(c.fout() * 2 + 0.2);
                Lines.circle(e.x, e.y, c.fin() * 30);
            });
            e.scaled(12, c => {
                Draw.color(Color.valueOf("ed655a"));
                Angles.randLenVectors(e.id, 25, 5 + e.fin() * 80, e.rotation, 60, (x, y) => {
                    Fill.square(e.x + x, e.y + y, c.fout() * 3, 45);
                });
            });
        },{}),
        pierceEffect: extend(Effect, 18, 200, e => {
            Draw.color(Color.valueOf("eda096"));
            let signs = [-1,1]
            for(let i in signs){
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation + 140 * signs[i]);
            }
        },{}),
        smokeEffect: Fx.smokeCloud,
        pointEffect: extend(Effect, 30, e => {
            for(let i = 0; i < 2; i++){
                Draw.color(i == 0 ? Color.valueOf("ed655a") : Color.valueOf("eda096"));

                let m = i == 0 ? 1 : 0.5;

                let rot = e.rotation + 180;
                let w = 15 * e.fout() * m;
                Drawf.tri(e.x, e.y, w, (30 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
                Drawf.tri(e.x, e.y, w, 10 * m, rot + 180);
            }
            Drawf.light(e.x, e.y, 60, Color.valueOf("ed655a"), 0.6 * e.fout());
        },{}),
        despawnEffect: extend(Effect, 15, 100, e => {
            Draw.color(Color.valueOf("ed655a"));
            Lines.stroke(e.fout() * 4);
            Lines.circle(e.x, e.y, 4 + e.finpow() * 20);
            for(let i = 0; i < 4; i++){
                Drawf.tri(e.x, e.y, 6, 80 * e.fout(), i*90 + 45);
            }
            Draw.color();
            for(let i = 0; i < 4; i++){
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i*90 + 45);
            }
            Drawf.light(e.x, e.y, 150, Color.valueOf("ed655a"), 0.9 * e.fout());
        },{}),
        pointEffectSpace: 20,
        damage: 2900,
        pierceDamageFactor: 1,
        length: 640,
        hitShake: 6,
        ammoMultiplier: 1,
        buildingDamageMultiplier: 0.2
    }),
    items.diamond, extend(RailBulletType, {
        shootEffect: extend(Effect, 24, e => {
            e.scaled(10, b => {
                Draw.color(Color.white, diamondAmmoBack, b.fin());
                Lines.stroke(b.fout() * 3 + 0.2);
                Lines.circle(b.x, b.y, b.fin() * 50);
            });
            Draw.color(diamondAmmoBack);
            let signs = [-1,1]
            for(let i in signs){
                Drawf.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation + 90 * signs[i]);
                Drawf.tri(e.x, e.y, 13 * e.fout(), 50, e.rotation + 20 * signs[i]);
            }
            Drawf.light(e.x, e.y, 180, diamondAmmoBack, 0.9 * e.fout());
        },{}),
        hitEffect: extend(Effect,20, 200, e => {
            Draw.color(diamondAmmoBack);
            for(let i = 0; i < 2; i++){
                Draw.color(i == 0 ? diamondAmmoBack : diamondAmmoFront);
                let m = i == 0 ? 1 : 0.5;

                for(let j = 0; j < 5; j++){
                    let rot = e.rotation + Mathf.randomSeedRange(e.id + j, 50);
                    let w = 23 * e.fout() * m;
                    Drawf.tri(e.x, e.y, w, (80 + Mathf.randomSeedRange(e.id + j, 40)) * m, rot);
                    Drawf.tri(e.x, e.y, w, 20 * m, rot + 180);
                }
            }
            e.scaled(10, c => {
                Draw.color(diamondAmmoFront);
                Lines.stroke(c.fout() * 2 + 0.2);
                Lines.circle(e.x, e.y, c.fin() * 30);
            });
            e.scaled(12, c => {
                Draw.color(diamondAmmoBack);
                Angles.randLenVectors(e.id, 25, 5 + e.fin() * 80, e.rotation, 60, (x, y) => {
                    Fill.square(e.x + x, e.y + y, c.fout() * 3, 45);
                });
            });
        },{}),
        pierceEffect: extend(Effect, 18, 200, e => {
            Draw.color(diamondAmmoFront);
            let signs = [-1,1]
            for(let i in signs){
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation + 140 * signs[i]);
            }
        },{}),
        smokeEffect: Fx.smokeCloud,
        pointEffect: new MultiEffect(
            extend(Effect, 30, e => {
                for(let i = 0; i < 2; i++){
                    Draw.color(i == 0 ? diamondAmmoBack : diamondAmmoFront);

                    let m = i == 0 ? 1 : 0.5;

                    let rot = e.rotation + 180;
                    let w = 15 * e.fout() * m;
                    Drawf.tri(e.x, e.y, w, (30 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
                    Drawf.tri(e.x, e.y, w, 10 * m, rot + 180);
                }
                Drawf.light(e.x, e.y, 60, diamondAmmoBack, 0.6 * e.fout());
            },{}),
            extend(Effect, 60, 80, e => {
                Draw.color(diamondAmmoBack, Color.white, e.fin());
                Angles.randLenVectors(e.id, 5, e.finpow() * 48, e.rotation, 360, (x, y) => {
                    Fill.circle(e.x + x, e.y + y, 0.4 + e.fout() * 1.5);
                });
            },{})
        ),
        despawnEffect: extend(Effect, 15, 100, e => {
            Draw.color(diamondAmmoBack);
            Lines.stroke(e.fout() * 4);
            Lines.circle(e.x, e.y, 4 + e.finpow() * 20);
            for(let i = 0; i < 4; i++){
                Drawf.tri(e.x, e.y, 6, 80 * e.fout(), i*90 + 45);
            }
            Draw.color();
            for(let i = 0; i < 4; i++){
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i*90 + 45);
            }
            Drawf.light(e.x, e.y, 150, diamondAmmoBack, 0.9 * e.fout());
        },{}),
        pointEffectSpace: 20,
        damage: 2900,
        pierceDamageFactor: 0.5,
        length: 640,
        hitShake: 6,
        ammoMultiplier: 1,
        status: units.Debuff,
        statusDuration: 200,
        buildingDamageMultiplier: 0.2
    })
);

//Destructor Spectre
const Spectre = extend(ItemTurret, "Destructor_Spectre", {
    localizedName: "Destructor Spectre",
    requirements: ItemStack.with(Items.copper,1220, Items.graphite,1000 , Items.thorium,800 , Items.plastanium,850 , Items.surgeAlloy,900 , items.iron,1000 , items.diamond,600 , items.sodiumBattery,800),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    reload: 6,
    recoilTime: 12,
    coolantMultiplier: 0.5,
    liquidCapacity: 120,
    ammoUseEffect: Fx.casing3,
    range: 360,
    inaccuracy: 1.5,
    recoil: 3,
    shoot: extend(ShootAlternate,8,{}),
    shake: 2,
    size: 4,
    shootCone: 24,
    shootSound: Sounds.shootSpectre,
    health: 9900,
    depositCooldown: 2
});
Spectre.consumeCoolant(1);
Spectre.ammo(
    Items.thorium, extend(BasicBulletType, 12, 320, {
        pierceDamageFactor: 0,
        pierceBuilding: false,
        reflectable: false,
        lifetime: 370/12,
        hitSize: 5,
        width: 18,
        height: 25,
        shootEffect: Fx.shootBig,
        pierce: true,
        knockback: 0.7,
        backColor: Pal.thoriumAmmoBack,
        hitColor: Pal.thoriumAmmoBack,
        trailColor: Pal.thoriumAmmoBack,
        frontColor: Pal.thoriumAmmoFront
    }),
    Items.pyratite, extend(BasicBulletType, 10, 280, {
        pierceDamageFactor: 0,
        pierceBuilding: false,
        reflectable: false,
        lifetime: 370/10,
        hitSize: 5,
        width: 18,
        height: 23,
        frontColor: Pal.lightishOrange,
        backColor: Pal.lightOrange,
        status: StatusEffects.burning,
        hitEffect: new MultiEffect(Fx.hitBulletSmall, Fx.fireHit),
        shootEffect: Fx.shootBig,
        makeFire: true,
        pierce: true,
        knockback: 0.6,
        ammoMultiplier: 3,
        splashDamage: 80,
        splashDamageRadius: 32
    }),
    items.sodiumBattery, extend(BasicBulletType, 14, 200, {
        pierceDamageFactor: 0,
        pierceBuilding: false,
        reflectable: false,
        lifetime: 370/14,
        hitSize: 5,
        width: 18,
        height: 24,
        backColor: batteryAmmoBack,
        hitColor: batteryAmmoBack,
        trailColor: batteryAmmoBack,
        frontColor: batteryAmmoFront,
        intervalBullet: extend(LightningBulletType,{
            damage: 36,
            collidesAir: true,
            ammoMultiplier: 1,
            lightningColor: Color.valueOf("ffffff"),
            lightningLength: 4,
            lightningLengthRand: 6,
            lightningType: extend(BulletType,0.0001, 0, {
                lifetime: Fx.lightning.lifetime,
                hitEffect: Fx.hitLancer,
                despawnEffect: Fx.none,
                status: StatusEffects.shocked,
                statusDuration: 100,
                hittable: false,
                lightColor: Color.white,
                buildingDamageMultiplier: 0.25
            })
        }),
        bulletInterval: 3,
        lightning: 5,
        lightningLength: 12,
        lightningDamage: 48,
        pierce: true,
        shootEffect: Fx.shootBig,
        knockback: 0.5,
        status: StatusEffects.shocked
    }),
    items.diamond, extend(BasicBulletType, 14, 330, {
        pierceDamageFactor: 0,
        pierceBuilding: false,
        reflectable: false,
        lifetime: 370/14,
        hitSize: 6,
        width: 16,
        height: 25,
        shootEffect: Fx.shootBig,
        pierce: true,
        knockback: 0.7,
        backColor: diamondAmmoBack,
        hitColor: diamondAmmoBack,
        trailColor: diamondAmmoBack,
        frontColor: diamondAmmoFront,
        splashDamage: 180,
        splashDamageRadius: 48,
        fragBullets: 5,
        ammoMultiplier: 8,
        reloadMultiplier: 1.25,
        fragBullet: extend(BasicBulletType, 10, 100, {
            width: 3,
            height: 16,
            shrinkY: 0,
            lifetime: 9,
            backColor: diamondAmmoBack,
            frontColor: diamondAmmoFront,
            despawnEffect: Fx.none,
            pierce: true
        })
    })
);

//Destructor Meltdown
const Meltdown = extend(LaserTurret, "Destructor_Meltdown", {
    localizedName: "Destructor Meltdown",
    requirements: ItemStack.with(Items.copper,600, Items.lead,1000 , Items.graphite,900 , Items.silicon,1200 , Items.surgeAlloy,880 , items.gold,1000 , items.diamond,325 , items.sodiumBattery,1200),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown,
    shootCone: 40,
    recoil: 4,
    size: 4,
    shake: 2,
    range: 340,
    reload: 60,
    firingMoveFract: 0.5,
    shootDuration: 300,
    shootSound: Sounds.shootMeltdown,
    loopSound: Sounds.beamMeltdown,
    loopSoundVolume: 2,
    shootType: extend(ContinuousLaserBulletType, 300, {
        length: 360,
        hitEffect: Fx.hitMeltdown,
        hitColor: Color.valueOf("ed655a"),
        status: StatusEffects.melting,
        drawSize: 420,
        timesclaeDamage: true,
        incendChance: 0.5,
        incendSpread: 5,
        incendAmount: 1,
        ammoMultiplier: 1,
        colors: [Color.valueOf("ed655a"),Color.valueOf("ff968a"),Color.valueOf("ffffff")]
    }),
    health: 12000,
    liquidCapacity: 60
});
Meltdown.consumeCoolant(0.5);
Meltdown.consumePower(24);

module.exports = {
    SodiumWall: SodiumWall,
    SodiumWallLarge: SodiumWallLarge,
    IronWall: IronWall,
    IronWallLarge: IronWallLarge,
    GoldWall: GoldWall,
    GoldWallLarge: GoldWallLarge,
    DiamondWall: DiamondWall,
    DiamondWallLarge: DiamondWallLarge,
    DestructionWall: DestructionWall,
    DestructionWallLarge: DestructionWallLarge,

    CoreDestruction: CoreDestruction,

    DestructionContainer: DestructionContainer,
    DestructionVault: DestructionVault,

    DestructionConveyor: DestructionConveyor,
    DestructionArmoredConveyor: DestructionArmoredConveyor,

    IronDrill: IronDrill,
    GoldDrill: GoldDrill,
    DiamondDrill: DiamondDrill,
    DestructionDrill: DestructionDrill,

    SodiumStorageBattery: SodiumStorageBattery,
    SodiumStorageBatteryLarge: SodiumStorageBatteryLarge,
    NaExtractor: NaExtractor,
    SSM: SSM,
    HPHT: HPHT,
    ElectricHPHT: ElectricHPHT,
    SodiumBatteryMachine: SodiumBatteryMachine,
    IronMelter: IronMelter,

    Factory: Factory,
    ReconstructorTo2: ReconstructorTo2,
    ReconstructorTo3: ReconstructorTo3,
    ReconstructorTo4: ReconstructorTo4,
    ReconstructorTo5: ReconstructorTo5,

    Duo: Duo,
    Scatter: Scatter,
    Scorch: Scorch,
    Hail: Hail,
    Wave: Wave,
    Lancer: Lancer,
    Arc: Arc,
    Parallax: Parallax,
    Swarmer: Swarmer,
    Salvo: Salvo,
    Segment: DSegment,
    Tsunami: Tsunami,
    Fuse: Fuse,
    Ripple: Ripple,
    Cyclone: Cyclone
};