//Map 1
const IronValley = extend(SectorPreset, "IronValley", Planets.serpulo, 218,{
    localizedName: "Iron Valley",
    difficulty: 3.9,
    captureWave: 50
});
IronValley.generator = new FileMapGenerator(IronValley);

module.exports = {
    IronValley: IronValley
}