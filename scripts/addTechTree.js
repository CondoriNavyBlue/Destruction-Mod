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

    var node = new TechTree.TechNode(null, content, customRequirements !== undefined ? customRequirements : content.researchRequirements());
    var currentMod = Vars.mods.getMod("destructionmod");
    if (objectives) {
        node.objectives.addAll(objectives);
    }

    if (node.parent != null) {
        node.parent.children.remove(node);
    }

    // find parent node.
    var parent = TechTree.all.find(boolf(t => t.content.name.equals(researchName) || t.content.name.equals(currentMod.name + "-" + researchName)));

    // if (parent == null) {
    //     throw new Error("Content '" + researchName + "' isn't in the tech tree, but '" + content.name + "' requires it to be researched.");
    // }
    if (parent == null) {
        throw new Error("'内容 '" + researchName + "' 不在科技树上, 但 '" + content.name + "'需要对其研究.");
    }
    // add this node to the parent
    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }
    // reparent the node
    node.parent = parent;
};

//DaRealMonika's Code
//Thank you


const items = require("items");
const blocks = require("blocks");
const units = require("units");

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

addTechTree(blocks.CoreDestruction,{
    parent: "core-nucleus"
});

addTechTree(blocks.DestructionContainer,{
    parent: "container"
});

addTechTree(blocks.DestructionVault,{
    parent: "Destruction_Container"
});

addTechTree(blocks.DestructionConveyor,{
    parent: "armored-conveyor"
});

addTechTree(blocks.DestructionArmoredConveyor,{
    parent: "Destruction_Conveyor"
});

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

addTechTree(blocks.SodiumStorageBattery,{
    parent: "battery-large"
});

addTechTree(blocks.SodiumStorageBatteryLarge,{
    parent: "Sodium_Storage_Battery"
});

addTechTree(blocks.NaExtractor,{
    parent: "graphite-press"
});

addTechTree(blocks.SSM,{
    parent: "kiln"
});

addTechTree(blocks.HPHT,{
    parent: "Sand_Sieve_Machine"
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