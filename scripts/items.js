const Iron = extend(Item,"Iron",{
    localizedName: "iron",
    color: Color.valueOf("DDDDDD"),
    cost: 1.5,
    hardness: 3
});

const Gold = extend(Item,"Gold",{
    localizedName: "gold",
    color: Color.valueOf("FFFF00"),
    cost: 2,
    hardness: 4
});

const Diamond = extend(Item,"Diamond",{
    localizedName: "diamond",
    color: Color.valueOf("00FFFF"),
    cost: 3,
    hardness: 5
});

const Sodium = extend(Item,"Sodium",{
    localizedName: "sodium",
    color: Color.valueOf("797979"),
    flammability: 1.33,
    cost: 1,
    hardness: 2,
});

const Sodium_Battery = extend(Item,"Sodium_Battery",{
    localizedName: "sodium battery",
    color: Color.valueOf("AAAAAA"),
    charge: 3,
    cost: 1
});

const High_Density_Thorium = extend(Item, "High_Density_Thorium", {
    localizedName: "high density thorium",
    color: Color.valueOf("f97fb7"),
    radioactivity: 4.5,
    explosiveness: 0.6,
    cost: 1.5
})

Items.serpuloItems.addAll(Sodium,Sodium_Battery,Iron,Gold,Diamond,High_Density_Thorium);

module.exports = {
    iron: Iron,
    gold: Gold,
    diamond: Diamond,
    sodium: Sodium,
    sodiumBattery: Sodium_Battery,
    hdThorium: High_Density_Thorium
}