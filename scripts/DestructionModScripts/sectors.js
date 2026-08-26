//Map 1
const IronValley = extend(SectorPreset, "IronValley", Planets.serpulo, 218,{
    localizedName: "Iron Valley",
    difficulty: 5,
    captureWave: 50
});

const GoldMine = extend(SectorPreset, "GoldMine", Planets.serpulo, 84,{
    localizedName: "Gold Mine",
    difficulty: 8,
    captureWave: 30
});

module.exports = {
    IronValley: IronValley,
    GoldMine: GoldMine
}