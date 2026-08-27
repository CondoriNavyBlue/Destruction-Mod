const addTechTree = (content, research) => {
    if (!content) {
        throw new Error('子内容为空!,');
    }

    if (!research.parent) {
        throw new Error('研究。父母为空!');
    }

    var researchName = research.parent;
    var customRequirements = research.requirements;
    var objectives = research.objectives;

    var lastNode = TechTree.all.find(boolf(t => t.content == content));

    if (lastNode != null) {
        lastNode.remove();
    }

    var requirements;

    if (customRequirements !== undefined) {
        requirements = customRequirements.map(req =>
            new ItemStack(req.item, req.amount)
        );
    } else {
        var originalRequirements = content.researchRequirements();

        requirements = originalRequirements.map(req =>
            new ItemStack(req.item, req.amount)
        );
    }

    var node = new TechTree.TechNode(
        null,
        content,
        requirements
    );

    var currentMod = Vars.mods.getMod("destructionmod");

    if (objectives) {
        node.objectives.addAll(objectives);
    }

    if (node.parent != null) {
        node.parent.children.remove(node);
    }

    var parent = TechTree.all.find(
        boolf(t =>
            t.content.name.equals(researchName) ||
            t.content.name.equals(currentMod.name + "-" + researchName)
        )
    );

    if (parent == null) {
        throw new Error(
            "'内容 '" +
            researchName +
            " 不在科技树上, 但 '" +
            content.name +
            "'需要对其研究."
        );
    }

    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }

    node.parent = parent;
};


const items = require("DestructionModScripts/items");
const blocks = require("DestructionModScripts/blocks");
const units = require("DestructionModScripts/units");
const sectors = require("DestructionModScripts/sectors");

//------------------------------Items------------------------------
addTechTree(items.iron,{
    parent: "sand",
    objectives: Seq.with(new Objectives.Produce(items.iron))
});

addTechTree(items.gold,{
    parent: "Iron",
    objectives: Seq.with(new Objectives.Produce(items.gold))
});

addTechTree(items.diamond,{
    parent: "Gold",
    objectives: Seq.with(new Objectives.Produce(items.diamond))
});

addTechTree(items.sodium,{
    parent: "water",
    objectives: Seq.with(new Objectives.Produce(items.sodium))
});

addTechTree(items.sodiumBattery,{
    parent: "Sodium",
    objectives: Seq.with(new Objectives.Produce(items.sodiumBattery))
});

addTechTree(items.hdThorium,{
    parent: "thorium",
    objectives: Seq.with(new Objectives.Produce(items.hdThorium))
});

//------------------------------Unit Factorys------------------------------

addTechTree(blocks.Factory,{
    parent: "ground-factory"
});

addTechTree(blocks.ReconstructorTo2,{
    parent: "ground-factory"
});

addTechTree(blocks.ReconstructorTo3,{
    parent: "Destruction_Additive_Reconstructor"
});

addTechTree(blocks.ReconstructorTo4,{
    parent: "Destruction_Multiplicative_Reconstructor"
});

addTechTree(blocks.ReconstructorTo5,{
    parent: "Destruction_Exponential_Reconstructor"
});

//------------------------------Units------------------------------

const UnitTable = [
    [units.Dagger, units.Mace, units.Fortress, units.Scepter, units.Reign],
    [units.Crawler, units.Atrax, units.Spiroct, units.Arkyid, units.Toxopid],
    [units.Nova, units.Pulsar, units.Quasar, units.Vela, units.Corvus],
    [units.Flare, units.Horizon, units.Zenith, units.Antumbra, units.Eclipse],
    [units.Mono, units.Poly, units.Mega, units.Quad, units.Oct],
    [units.Risso, units.Minke, units.Bryde, units.Sei, units.Omura],
    [units.Retusa, units.Oxynoe, units.Cyerce, units.Aegires, units.Navanax]
]

for(let i = 0; i < UnitTable.length; ++i){
    for(let j = 0; j < 5; ++j){
        if(j == 0){
            addTechTree(UnitTable[i][j],{
                parent: "Destruction_Factory"
            });
        }else{
            addTechTree(UnitTable[i][j],{
                parent: UnitTable[i][j-1].name
            });
        }
    }
}

//------------------------------Walls------------------------------

addTechTree(blocks.SodiumWall,{
    parent: "titanium-wall"
});

addTechTree(blocks.SodiumWallLarge,{
    parent: "Sodium_Wall"
});

addTechTree(blocks.IronWall,{
    parent: "Sodium_Wall"
});

addTechTree(blocks.IronWallLarge,{
    parent: "Iron_Wall"
});

addTechTree(blocks.GoldWall,{
    parent: "Iron_Wall"
});

addTechTree(blocks.GoldWallLarge,{
    parent: "Gold_Wall"
});

addTechTree(blocks.DiamondWall,{
    parent: "Gold_Wall"
});

addTechTree(blocks.DiamondWallLarge,{
    parent: "Diamond_Wall"
});

addTechTree(blocks.DestructionWall,{
    parent: "Diamond_Wall"
});

addTechTree(blocks.DestructionWallLarge,{
    parent: "Destruction_Wall"
});

//------------------------------Cores------------------------------

addTechTree(blocks.CoreDestruction,{
    parent: "core-nucleus"
});

//------------------------------Storages------------------------------

addTechTree(blocks.DestructionContainer,{
    parent: "container"
});

addTechTree(blocks.DestructionVault,{
    parent: "Destruction_Container"
});

//------------------------------Conveyors------------------------------

addTechTree(blocks.DestructionConveyor,{
    parent: "armored-conveyor"
});

addTechTree(blocks.DestructionArmoredConveyor,{
    parent: "Destruction_Conveyor"
});

addTechTree(blocks.DestructionJunction,{
    parent: "Destruction_Conveyor"
});

addTechTree(blocks.DestructionBridge,{
    parent: "Destruction_Junction"
});

addTechTree(blocks.DestructionPhaseBridge,{
    parent: "Destruction_Bridge"
});

//------------------------------Drills------------------------------

addTechTree(blocks.IronDrill,{
    parent: "pneumatic-drill"
});

addTechTree(blocks.GoldDrill,{
    parent: "Iron_Drill"
});

addTechTree(blocks.DiamondDrill,{
    parent: "Gold_Drill"
});

addTechTree(blocks.DestructionDrill,{
    parent: "Diamond_Drill"
});

//------------------------------Powers------------------------------

addTechTree(blocks.SodiumStorageBattery,{
    parent: "battery-large"
});

addTechTree(blocks.SodiumStorageBatteryLarge,{
    parent: "Sodium_Storage_Battery"
});

addTechTree(blocks.DestructionNode,{
    parent: "power-node"
});

addTechTree(blocks.DestructionLargeNode,{
    parent: "Destruction_Node"
});

addTechTree(blocks.DestructionDiamondNode,{
    parent: "Destruction_Large_Node"
});

addTechTree(blocks.HDTReactor,{
    parent: "thorium-reactor"
});

//------------------------------Craters------------------------------

addTechTree(blocks.NaExtractor,{
    parent: "graphite-press"
});

addTechTree(blocks.SSM,{
    parent: "kiln",
    objectives: Seq.with(
        new Objectives.SectorComplete(sectors.GoldMine)
    )
});

addTechTree(blocks.HPHT,{
    parent: "Sand_Sieve_Machine",
    objectives: Seq.with(
        new Objectives.SectorComplete(sectors.DiamondVolcano)
    )
});

addTechTree(blocks.ElectricHPHT,{
    parent: "HPHT"
});

addTechTree(blocks.SodiumBatteryMachine,{
    parent: "Sodium_Extractor"
});

addTechTree(blocks.IronMelter,{
    parent: "melter"
});

addTechTree(blocks.ThoriumConcentrator,{
    parent: "phase-weaver"
});

//------------------------------Turrets------------------------------


addTechTree(blocks.Duo,{
    parent: "duo"
});

addTechTree(blocks.Scatter,{
    parent: "Destructor_Duo"
});

addTechTree(blocks.Arc,{
    parent: "Destructor_Duo"
});

addTechTree(blocks.Hail,{
    parent: "Destructor_Scatter"
});

addTechTree(blocks.Scorch,{
    parent: "Destructor_Arc"
});

addTechTree(blocks.Salvo,{
    parent: "Destructor_Hail"
});

addTechTree(blocks.Wave,{
    parent: "Destructor_Scorch"
});

addTechTree(blocks.Lancer,{
    parent: "Destructor_Scorch"
});

addTechTree(blocks.Swarmer,{
    parent: "Destructor_Salvo"
});

addTechTree(blocks.Ripple,{
    parent: "Destructor_Salvo"
});

addTechTree(blocks.Parallax,{
    parent: "Destructor_Wave"
});

addTechTree(blocks.Tsunami,{
    parent: "Destructor_Wave"
});

addTechTree(blocks.Meltdown,{
    parent: "Destructor_Lancer",
    objectives: Seq.with(
        new Objectives.SectorComplete(sectors.DiamondVolcano)
    )
});

addTechTree(blocks.Cyclone,{
    parent: "Destructor_Swarmer"
});

addTechTree(blocks.Fuse,{
    parent: "Destructor_Ripple"
});

addTechTree(blocks.Segment,{
    parent: "Destructor_Parallax"
});

addTechTree(blocks.Foreshadow,{
    parent: "Destructor_Meltdown",
});

addTechTree(blocks.Spectre,{
    parent: "Destructor_Cyclone",
    objectives: Seq.with(
        new Objectives.SectorComplete(sectors.DiamondVolcano)
    )
});

//------------------------------Effects------------------------------

addTechTree(blocks.ForceDestruction,{
    parent: "force-projector"
});

addTechTree(blocks.MendDestruction,{
    parent: "mend-projector",
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.impact0078)
    )
});

addTechTree(blocks.OverdriveDiamond,{
    parent: "overdrive-dome"
});

//------------------------------Sectors------------------------------

addTechTree(sectors.IronValley,{
    parent: "stainedMountains",
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.stainedMountains)
    )
});

addTechTree(sectors.GoldMine,{
    parent: "nuclearComplex",
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.nuclearComplex),
        new Objectives.SectorComplete(SectorPresets.coastline),
        new Objectives.SectorComplete(SectorPresets.impact0078),
    )
});

addTechTree(sectors.DiamondVolcano,{
    parent: "littoralShipyard",
});