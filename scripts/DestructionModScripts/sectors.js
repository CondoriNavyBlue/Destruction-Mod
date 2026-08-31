//Map 1
const IronValley = extend(SectorPreset, "IronValley", Planets.serpulo, 218,{
    localizedName: "Iron Valley",
    difficulty: 5,
    captureWave: 50
});

const GoldMine = extend(SectorPreset, "GoldMine", Planets.serpulo, 84,{
    localizedName: "Gold Mine",
    difficulty: 9,
    captureWave: 30
});

const DiamondVolcano = extend(SectorPreset, "DiamondVolcano", Planets.serpulo, 203,{
    localizedName: "Diamond Volcano",
    difficulty: 10,
    captureWave: 11
});

const Cove = extend(SectorPreset, "Cove", Planets.serpulo, 216,{
    localizedName: "Cove",
    difficulty: 10,
    captureWave: 30
});

module.exports = {
    IronValley: IronValley,
    GoldMine: GoldMine,
    DiamondVolcano: DiamondVolcano,
    Cove: Cove
}