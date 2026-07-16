const Destructed = extend(StatusEffect,"Destructed",{
    localizedName: "Destructed",
    color: Color.valueOf("ff0000"),
    effect: Fx.flakExplosion,
    effectChance: 0.15,
    update(unit, entry){
        if(!Vars.headless && this.effect != Fx.none && Mathf.chanceDelta(this.effectChance) && !unit.inFogTo(Vars.player.team())){
            Tmp.v1.rnd(Mathf.range(unit.type.hitSize/2));
            this.effect.at(unit.x + Tmp.v1.x, unit.y + Tmp.v1.y, 0, this.color, this.parentizeEffect ? unit : null);
            unit.damage(0);
        }
        unit.health-=1000/60*Time.delta;
        unit.speedMultiplier *= 0.5;
        unit.healthMultiplier *= 0.75;
        unit.damageMultiplier *= 0.75;
        unit.reloadMultiplier *= 0.5;
    }
});
Destructed.stats.addMultModifier(extend(Stat, "Damage Multiplier", {localized(){return "Damage Multiplier";}}), 0.75);
Destructed.stats.addMultModifier(extend(Stat, "Health Multiplier", {localized(){return "Health Multiplier";}}), 0.75);
Destructed.stats.addMultModifier(extend(Stat, "Speed Multiplier", {localized(){return "Speed Multiplier";}}), 0.5);
Destructed.stats.addMultModifier(extend(Stat, "Reload Multiplier", {localized(){return "Reload Multiplier";}}), 0.5);

const MiniElectrified = extend(StatusEffect, "MiniElectrified", {
    localizedName: "mini electrified",
    color: Color.valueOf("ed655a"),
    speedMultiplier: 0.85,
    reloadMultiplier: 0.75,
    effectChance: 0.15,
    effect: extend(Effect, 40, e => {
        Draw.color(Color.valueOf("ed655a"));
        Angles.randLenVectors(e.id, 2, 1 + e.fin() * 2, (x, y) => {
            Fill.square(e.x + x, e.y + y, e.fslope() * 1.1, 45);
        });
    }, {followParent: true, rotWithParent: true})
});

module.exports = {
    destructed: Destructed,
    miniElectrified: MiniElectrified
}