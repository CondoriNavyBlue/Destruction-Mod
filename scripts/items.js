const addTechTree = require("addTechTree");

const Iron = extend(Item,"Iron",{
    color: Color.valueOf("DDDDDD"),
    cost: 1.5,
    hardness: 3
});
addTechTree(Iron,{
    parent: "sand",
    objectives: Seq.with(new Objectives.Produce(Iron))
});

const Gold = extend(Item,"Gold",{
    color: Color.valueOf("FFFF00"),
    cost: 2,
    hardness: 4
});
addTechTree(Gold,{
    parent: "Iron",
    objectives: Seq.with(new Objectives.Produce(Gold))
});

const Diamond = extend(Item,"Diamond",{
    color: Color.valueOf("00FFFF"),
    cost: 3,
    hardness: 5
    
});
addTechTree(Diamond,{
    parent: "Gold",
    objectives: Seq.with(new Objectives.Produce(Diamond))
});

const Sodium = extend(Item,"Sodium",{
    color: Color.valueOf("797979"),
    flammability: 1.33,
    cost: 1,
    hardness: 2,
});
addTechTree(Sodium,{
    parent: "water",
    objectives: Seq.with(new Objectives.Produce(Sodium))
});

const Sodium_Battery = extend(Item,"Sodium_Battery",{
    color: Color.valueOf("AAAAAA"),
    charge: 3,
    cost: 1
});
addTechTree(Sodium_Battery,{
    parent: "Sodium",
    objectives: Seq.with(new Objectives.Produce(Sodium_Battery))
});

module.exports = {
    iron: Iron,
    gold: Gold,
    diamond: Diamond,
    sodium: Sodium,
    sodiumBattery: Sodium_Battery,
}