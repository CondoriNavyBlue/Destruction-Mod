const items = require('items');
const units = require('units');
const liquids = require("liquids");

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
const DestructionArmoredConveyor = extend(Conveyor, "Destruction_Armored_Conveyor", {
    localizedName: "Destruction Armored Conveyor",
    health: 1000,
    speed: 0.18,
    displayedSpeed: 25,
    category: Category.distribution,
    requirements: ItemStack.with(items.iron,2 , items.gold,2 , items.diamond,1),
    buildVisibility: BuildVisibility.shown
});

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

//Sodium Storage Battery
const SodiumStorageBattery = extend(Battery, "Sodium_Storage_Battery", {
    localizedName: "Sodium Storage Battery",
    size: 1,
    buildCostMultiplier: 0.3252032520325204,
    category: Category.power,
    requirements: ItemStack.with(Items.titanium,20 , Items.lead,40 , Items.silicon,20 , items.sodiumBattery,25),
    buildVisibility: BuildVisibility.shown
});
SodiumStorageBattery.consumePowerBuffered(25000);

//Sodium Storage Battery Large
const SodiumStorageBatteryLarge = extend(Battery, "Sodium_Storage_Battery_Large", {
    localizedName: "Large Sodium Storage Battery",
    size: 3,
    buildCostMultiplier: 0.36585365853658547,
    category: Category.power,
    requirements: ItemStack.with(Items.titanium,100 , Items.lead,80 , Items.silicon,50 , items.sodiumBattery,50),
    buildVisibility: BuildVisibility.shown
});
SodiumStorageBattery.consumePowerBuffered(250000);

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
    buildVisibility: BuildVisibility.shown
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
    results: ItemStack.with(items.iron,5 , items.gold,2)
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
    outputItem: new ItemStack(items.diamond,5)
});
HPHT.consumeItem(Items.graphite, 20);
HPHT.consumeLiquid(Liquids.slag, 0.5);
HPHT.consumePower(1000/60);
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
	},
});

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
    Factory: Factory,
    ReconstructorTo2: ReconstructorTo2,
    ReconstructorTo3: ReconstructorTo3,
    ReconstructorTo4: ReconstructorTo4,
    ReconstructorTo5: ReconstructorTo5
};