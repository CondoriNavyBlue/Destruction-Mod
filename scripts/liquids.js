const Waste_Water = extend(Liquid, "Waste_Water",{
    localizedName: "Waste Water",
    alwaysUnlocked: true,
    viscosity: 0,
    temperature: 0,
    heatCapacity: 0,
    color: Color.valueOf("7291ee"),
    lightColor: Color.valueOf("7291ee"),
    coolant: false
});

module.exports = {
    wasteWater: Waste_Water,
}