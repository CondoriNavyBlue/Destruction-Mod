const EffectedRegenAbility = require("ability");
const items = require('items');
const rand = new Rand();

const Destructed = extend(StatusEffect,"Destructed",{
    localizedName: "Destructed",
    speedMultiplier: 0.5,
    healthMultiplier: 0.75,
    damageMultiplier: 0.75,
    reloadMultiplier: 0.6,
    color: Color.valueOf("ff0000"),
    effect: Fx.flakExplosion,
    intervalDamage: 200,
    intervalDamageTime: 6,
    effectChance: 0.1
});

//Destructor Gamma
const Gamma = extend(UnitType, "Destructor_Gamma", {
    localizedName: "Destructor Gamma",
    isEnemy: false,
    lowAltitude: true,
    flying: true,
    mineSpeed: 12,
    mineTier: 4,
    buildSpeed: 7.5,
    drag: 0.05,
    speed: 5,
    rotateSpeed: 24,
    accel: 0.11,
    itemCapacity: 100,
    health: 1200,
    engineOffset: 6,
    hitSize: 11,
    armor: 50,
    trailLength: 15,
    trailColor: Color.valueOf("ed655a"),
    engineColor: Color.valueOf("ed655a"),
    lightRadius: 50.3,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Gamma.DR)-1;
    }
});
Gamma.constructor = () => extend(UnitEntity, {});
Gamma.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Gamma.DR
);
Gamma.aiController = () => extend(BuilderAI, {});
Gamma.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Gamma.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Small_Mount_Weapon",{
        top: false,
        reload: 15,
        x: 1,
        y: 2,
        shoot: extend(ShootSpread,{
            shots: 3,
            shotDelay: 1.2,
            spread: 0.75
        }),
        inaccuracy: 3,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootScatter,
        bullet: extend(BasicBulletType,5,11,{
            width: 4,
            height: 12,
            lifetime: 72,
            shootEffect: Fx.shootSmall,
            smokeEffect: Fx.shootSmallSmoke,
            buildingDamageMultiplier: 0.01,
            homingPower: 0.15,
            splashDamage: 44,
            splashDamageRadius: 24
        })
    })
);
Gamma.abilities.add(EffectedRegenAbility(500));

//Destructor Dagger
const Dagger = extend(UnitType, "Destructor_Dagger", {
    localizedName: "Destructor Dagger",
    speed: 0.6,
    hitSize: 8,
    health: 790,
    stepSoundVolume: 0.4,
    armor: 20,
    lightRadius: 36.8,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.1,
    update(unit){
        unit.healthMultiplier += 1/(1-Dagger.DR)-1;
    }
});
Dagger.constructor = () => extend(MechUnit, {});
Dagger.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Dagger.DR
);
Dagger.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Dagger.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Large_Weapon",{
        reload: 20,
        x: 4,
        y: 2,
        top: false,
        ejectEffect: Fx.casing1,
        inaccuracy: 2.5,
        shoot: extend(ShootPattern,{
            shots: 3,
            shotDelay: 1.25
        }),
        bullet: extend(BasicBulletType, 3.2, 32, {
            width: 8,
            height: 10,
            lifetime: 50,
            makeFire: true,
            frontColor: Pal.lightishOrange,
            backColor: Pal.lightOrange,
            hitColor: Pal.lightOrange,
            status: StatusEffects.burning,
            statusDuration: 8*60
        })
    })
);
Dagger.abilities.add(EffectedRegenAbility(62.5));

//Destrutor Mace
const Mace = extend(UnitType, "Destructor_Mace",{
    localizedName: "Destructor Mace",
    speed: 0.6,
    hitSize: 10,
    health: 2150,
    armor: 20,
    lightRadius: 46,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.2,
    update(unit){
        unit.healthMultiplier += 1/(1-Mace.DR)-1;
    }
});
Mace.constructor = () => extend(MechUnit, {});
Mace.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Mace.DR
);
Mace.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Mace.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Flamethrower", {
        top: false,
        shootSound: Sounds.shootFlame,
        shootY: 2,
        reload: 12,
        recoil: 1,
        ejectEffect: Fx.none,
        bullet: extend(BulletType, 5, 150, {
            hitSize: 7,
            lifetime: 16,
            pirce: true,
            pierceBuilding: true,
            pierceCap: 3,
            statusDuration: 300,
            shootEffect: extend(Effect, 32, 80, e=>{
                Draw.color(Color.valueOf("ff968a"), Color.valueOf("ed655a"), Color.gray, e.fin());

                Angles.randLenVectors(e.id, 18, e.finpow() * 80, e.rotation, 10, (x, y) => {
                    Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
                });
            },{followParent:false}),
            hitEffect: Fx.hitFlameSmall,
            despawnEffect: Fx.none,
            status: StatusEffects.burning,
            keepVelocity: false,
            hittable: false
        })
    })
);
Mace.abilities.add(EffectedRegenAbility(125));

//Destructor Fortress
const Fortress = extend(UnitType, "Destructor_Fortress",{
    localizedName: "Destructor Fortress",
    speed: 0.51,
    hitSize: 13,
    rotateSpeed: 3.33,
    targetAir: false,
    health: 8900,
    armor: 30,
    mechFrontSway: 0.55,
    stepSound: Sounds.mechStepSmall,
    stepSoundPitch: 0.8,
    stepSoundVolume: 0.65,
    lightRadius: 59.8,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.3,
    update(unit){
        unit.healthMultiplier += 1/(1-Fortress.DR)-1;
    }
});
Fortress.constructor = () => extend(MechUnit, {});
Fortress.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Fortress.DR
);
Fortress.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Fortress.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Artillery", {
        top: false,
        x: 9,
        y: 1,
        reload: 60,
        recoil: 4,
        shake: 2,
        ejectEffect: Fx.casing2,
        shootSound: Sounds.shootArtillery,
        bullet: extend(ArtilleryBulletType, 4, 100, "shell", {
            hitEffect: Fx.blastExplosion,
            knockback: 0.8,
            lifetime: 60,
            width: 20,
            height: 20,
            collides: true,
            collidesTiles: true,
            splashDamage: 180,
            splashDamageRadius: 40,
            backColor: Pal.blastAmmoBack,
            frontColor: Pal.blastAmmoFront,
            status: StatusEffects.blasted,
            statusDuration: 300,
            fragBullets: 1,
            fragBullet: extend(ArtilleryBulletType, 0, 40, "shell", {
                hitEffect: Fx.blastExplosion,
                knockback: 0.8,
                lifetime: 10,
                width: 20,
                height: 20,
                collides: false,
                collidesTiles: false,
                splashDamage: 140,
                splashDamageRadius: 40,
                backColor: Pal.blastAmmoBack,
                frontColor: Pal.blastAmmoFront,
                status: StatusEffects.blasted,
                statusDuration: 300,
                fragBullets: 1,
                fragBullet: extend(ArtilleryBulletType, 0, 40, "shell", {
                    hitEffect: Fx.blastExplosion,
                    knockback: 0.8,
                    lifetime: 10,
                    width: 20,
                    height: 20,
                    collides: false,
                    collidesTiles: false,
                    splashDamage: 140,
                    splashDamageRadius: 40,
                    backColor: Pal.blastAmmoBack,
                    frontColor: Pal.blastAmmoFront,
                    status: StatusEffects.blasted,
                    statusDuration: 300,
                    fragBullets: 1,
                    fragBullet: extend(ArtilleryBulletType, 0, 40, "shell", {
                        hitEffect: Fx.blastExplosion,
                        knockback: 0.8,
                        lifetime: 10,
                        width: 20,
                        height: 20,
                        collides: false,
                        collidesTiles: false,
                        splashDamage: 140,
                        splashDamageRadius: 40,
                        backColor: Pal.blastAmmoBack,
                        frontColor: Pal.blastAmmoFront,
                        status: StatusEffects.blasted,
                        statusDuration: 300,
                        fragBullets: 1,
                        fragBullet: extend(ArtilleryBulletType, 0, 40, "shell", {
                            hitEffect: Fx.blastExplosion,
                            knockback: 0.8,
                            lifetime: 10,
                            width: 20,
                            height: 20,
                            collides: false,
                            collidesTiles: false,
                            splashDamage: 140,
                            splashDamageRadius: 40,
                            backColor: Pal.blastAmmoBack,
                            frontColor: Pal.blastAmmoFront,
                            status: StatusEffects.blasted,
                            statusDuration: 300
                        })
                    })
                })
            })
        })
    })
);
Fortress.abilities.add(EffectedRegenAbility(250));

//Destructor Scepter
const Scepter = extend(UnitType, "Destructor_Scepter", {
    localizedName: "Destructor Scepter",
    speed : 0.5,
    hitSize: 22,
    rotateSpeed: 2.85,
    health: 29000,
    armor: 50,
    mechStepParticles: true,
    stepShake: 0.15,
    drownTimeMultiplier: 1.75,
    mechFrontSway: 1,
    stepSound: Sounds.mechStep,
    stepSoundPitch: 0.9,
    stepSoundVolume: 0.35,
    singleTarget: true,
    lightRadius: 101.2,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Scepter.DR)-1;
    }
});
Scepter.constructor = () => extend(MechUnit, {});
Scepter.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Scepter.DR
);
Scepter.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Scepter.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Scepter_Weapon",{
        top: false,
        y: 1,
        x: 16,
        shootY: 8,
        reload: 45,
        recoil: 5,
        shake: 2,
        ejectEffect: Fx.casing3,
        shootSound: Sounds.shootScepter,
        shootSoundVolume: 0.95,
        inaccuracy: 3,
        shoot: extend(ShootPattern, {
            shots: 3,
            shotDelay: 3
        }),
        bullet: extend(BasicBulletType,9,180,{
            width: 12.5,
            height: 22,
            lifetime: 32,
            shrinkX: 0.4,
            shrinkY: 0,
            shootEffect: Fx.shootBig,
            hitEffect: Fx.blastExplosion,
            trailParm: 0.5,
            lightning: 3,
            lightningLength: 8,
            lightningColor: Pal.surge,
            lightningDamage: 100,
            despawnSound: Sounds.shockBullet,
            bulletInterval: 3,
            intervalBullet: extend(LightningBulletType,{
                damage: 50,
                lightningLength: 4,
                lightningLengthRand: 4,
                lightningColor: Pal.surge,
                hitEffect: Fx.hitLancerLow
            })
        })
    }),
    extend(Weapon,{
        top: false,
        y: 1,
        x: 16,
        shootY: 8,
        reload: 75,
        recoil: 5,
        shake: 2,
        ejectEffect: Fx.casing3,
        shootSound: Sounds.shootScepter,
        shootSoundVolume: 0.95,
        shoot: extend(ShootPattern, {
            shots: 6,
        }),
        inaccuracy: 6,
        velocityRnd: -0.25,
        bullet: extend(ArtilleryBulletType, 5, 80, "shell",{
            hitEffect: Fx.blastExplosion,
            knockback: 0.8,
            lifetime: 56,
            width: 14,
            height: 14,
            collides: true,
            collidesTiles: true,
            collidesAir: true,
            splashDamageRadius: 40,
            splashDamage: 120,
            backColor: Pal.blastAmmoBack,
            frontColor: Pal.blastAmmoFront,
            status: StatusEffects.blasted,
            statusDuration: 300
        })
    }),
);
Scepter.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Scepter_Mount",{
        reload: 8,
        x: 8.5,
        y: 6,
        rotate: true,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootScepterSecondary,
        rotateSpeed: 3,
        bullet: extend(BasicBulletType, 12, 75,{
            width: 4.5,
            height: 35,
            lifetime: 28*8/12,
            pierce: true,
            pierceCap: 3,
            shrinkX: 0.6,
            shrinkY: 0,
            shrinkInterp: Interp.slope,
            trailChance: 1/6,
            trailColor: Pal.bulletYellowBack,
            trailEffect: Fx.bulletSparkSmokeTrailSmall,
            trailSpread: 12,
            shootEffect: Fx.shootScepterSecondary,
            hitEffect: Fx.hitScepterSecondary
        })
    }),
    extend(Weapon,"destructionmod-Destructor_Scepter_Mount",{
        reload: 12,
        x: 8.5,
        y: -7,
        rotate: true,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootScepterSecondary,
        rotateSpeed: 3,
        bullet: extend(BasicBulletType, 12, 75,{
            pierce: true,
            pierceCap: 3,
            pierceBuilding: true,
            width: 4.5,
            height: 35,
            lifetime: 32*8/12,
            shrinkX: 0.6,
            shrinkY: 0,
            shrinkInterp: Interp.slope,
            trailChance: 1/6,
            trailColor: Pal.bulletYellowBack,
            trailEffect: Fx.bulletSparkSmokeTrailSmall,
            trailSpread: 12,
            shootEffect: Fx.shootScepterSecondary,
            hitEffect: Fx.hitScepterSecondary
        })
    })
);
Scepter.abilities.add(
    ShieldRegenFieldAbility(100, 2000, 30, 80),
    EffectedRegenAbility(500)
);

//Destructor Reign
const Reign = extend(UnitType, "Destructor_Reign", {
    localizedName: "Destructor Reign",
    speed : 0.55,
    hitSize: 30,
    rotateSpeed: 2,
    health: 74000,
    armor: 100,
    mechStepParticles: true,
    stepShake: 0.75,
    drownTimeMultiplier: 2,
    mechFrontSway: 1.9,
    mechSideSway: 0.6,
    stepSound: Sounds.mechStepHeavy,
    stepSoundPitch: 0.9,
    stepSoundVolume: 0.45,
    lightRadius: 138,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.5,
    update(unit){
        unit.healthMultiplier += 1/(1-Reign.DR)-1;
    }
});
Reign.constructor = () => extend(MechUnit, {});
Reign.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Reign.DR
);
Reign.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Reign.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Reign_Weapon",{
        top: false,
        x: 21.5,
        y: 1,
        shootY: 11,
        reload: 15,
        recoil: 5,
        shake: 2,
        ejectEffect: Fx.casing4,
        shootSound: Sounds.shootReign,
        shoot: extend(ShootPattern, {
            shots: 4,
            shotDelay: 3.2
        }),
        bullet: extend(BasicBulletType, 14, 240, {
            reflectable: false,
            pierce: true,
            pierceCap: 10,
            width: 14,
            height: 33,
            lifetime: 24,
            shootEffect: Fx.shootBig,
            fragVelocityMin: 0.4,
            hitEffect: Fx.blastExplosion,
            splashDamage: 120,
            splashDamageRadius: 30,
            fragBullets: 5,
            fragLifeMin: 0,
            fragRandomSpread: 30,
            despawnSound: Sounds.explosion,
            backColor: Pal.blastAmmoBack,
            frontColor: Pal.blastAmmoFront,
            status: StatusEffects.blasted,
            statusDuration: 300,
            fragBullet: extend(BasicBulletType, 9, 66, {
                width: 10,
                height: 10,
                pierce: true,
                pierceBuilding: true,
                pierceCap: 5,
                lifetime: 20,
                hitEffect: Fx.flakExplosion,
                splashDamage: 40,
                splashDamageRadius: 16,
                backColor: Pal.blastAmmoBack,
                frontColor: Pal.blastAmmoFront
            })
        })
    }),
    extend(Weapon, {
        top: false,
        x: 21.5,
        y: 1,
        shootY: 11,
        recoil: 5,
        shake: 6,
        shootSound: Sounds.shootBeamPlasmaSmall,
        reload: 180,
        useAttackRange: false,
        bullet: extend(BasicBulletType, 1, 1000, "mine-bullet", {
            reflectable: false,
            width: 48,
            height: 48,
            spin: 6,
            shrinkY: 0,
            backColor: Color.valueOf("789aff"),
            frontColor: Color.valueOf("d5e9ff"),
            drag: -0.05,
            splashDamage: 5000,
            splashDamageRadius: 160,
            shootEffect: Fx.shockwave,
            lifetime: 60,
            hitShake: 10,
            hitSound: Sounds.explosionReactor,
            keepVelocity: false,
            status: Destructed,
            statusDuration: 600,
            hitEffect: new MultiEffect(
                extend(Effect, 60, 160, e => {
                    Draw.color(Color.valueOf("789aff"));
                    Lines.stroke(e.fout() * 3);
                    let circleRad = 6 + e.finpow() * 120;
                    Lines.circle(e.x, e.y, circleRad);
                    rand.setSeed(e.id);
                    for(let i = 0; i < 24; i++){
                        let angle = rand.random(360);
                        let lenRand = rand.random(0.5, 1);
                        Lines.lineAngle(e.x, e.y, angle, e.foutpow() * 100 * rand.random(1, 0.6) + 2, e.finpow() * 140 * lenRand + 6);
                    }
                },{}),
                extend(Effect, 150, 150, b => {
                    let intensity = 8;
                    Draw.color(Color.valueOf("789aff"), 0.7);
                    for(let i = 0; i < 4; i++){
                        rand.setSeed(b.id * 2 + i);
                        let lenScl = rand.random(0.5, 1);
                        let fi = i;
                        b.scaled(b.lifetime * lenScl, e => {
                            Angles.randLenVectors(e.id + fi - 1, Math.floor(2.9 * intensity), 22 * intensity * e.fin(Interp.pow10Out), (x, y) => {
                                let fout = e.fout(Interp.pow5Out) * rand.random(0.5, 1);
                                let rad = fout * ((2 + intensity) * 2.35);
                                Fill.circle(e.x + x, e.y + y, rad);
                                Drawf.light(e.x + x, e.y + y, rad * 2.5, Color.valueOf("789aff"), 0.5);
                            });
                        });
                    }
                },{})
            )
        })
    })
);
Reign.abilities.add(EffectedRegenAbility(1000));

//Destructor Flare
const Flare = extend(UnitType, "Destructor_Flare", {
    localizedName: "Destructor Flare",
    speed: 3.33,
    accel: 0.08,
    drag: 0.04,
    flying: true,
    health: 710,
    engineOffset: 5.75,
    targetFlags: [BlockFlag.generator, null],
    hitSize: 9,
    itemCapacity: 30,
    circleTarget: true,
    omniMovement: false,
    rotateSpeed: 8,
    circleTargetRadius: 80,
    wreckSoundVolume: 0.7,
    moveSound: Sounds.loopThruster,
    moveSoundPitchMin: 0.3,
    moveSoundPitchMax: 1.5,
    moveSoundVolume: 0.2,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 25,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 41.4,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.1,
    update(unit){
        unit.healthMultiplier += 1/(1-Flare.DR)-1;
    }
});
Flare.constructor = () => extend(UnitEntity, {});
Flare.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Flare.DR
);
Flare.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Flare.weapons.add(
    extend(Weapon,{
        x: 0,
        y: 1,
        minShootVelocity: 1.5,
        shootCone: 10,
        reload: 4,
        ejectEffect: Fx.casing1,
        mirror: false,
        inaccuracy: 4,
        bullet: extend(BasicBulletType, 3, 24, {
            width: 8,
            height: 11,
            lifetime: 32,
            shootEffect: Fx.shootSmall,
            smokeEffect: Fx.shootSmallSmoke,
            makeFire: true,
            frontColor: Pal.lightishOrange,
            backColor: Pal.lightOrange,
            hitColor: Pal.lightOrange,
            status: StatusEffects.burning,
            statusDuration: 8*60
        })
    })
);
Flare.abilities.add(EffectedRegenAbility(62.5));

//Destructor Horizon
const Horizon = extend(UnitType, "Destructor_Horizon", {
    localizedName: "Destructor Horizon",
    health: 1940,
    speed: 1.8,
    accel: 0.08,
    drag: 0.03,
    flying: true,
    hitSize: 11,
    targetAir: false,
    engineOffset: 7.8,
    range: 140,
    faceTarget: false,
    autoDropBombs: true,
    armor: 20,
    itemCapacity: 0,
    targetFlags: [BlockFlag.factory, null],
    circleTarget: true,
    omniMovement: false,
    rotateSpeed: 5,
    circleTargetRadius: 60,
    moveSound: Sounds.loopThruster,
    moveSoundPitchMin: 0.6,
    moveSoundVolume: 0.4,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 20,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 50.56,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.2,
    update(unit){
        unit.healthMultiplier += 1/(1-Horizon.DR)-1;
    }
});
Horizon.constructor = () => extend(UnitEntity, {});
Horizon.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Horizon.DR
);
Horizon.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Horizon.weapons.add(
    extend(Weapon, {
        minShootVelocity: 0.8,
        x: 3,
        shootY: 0,
        reload: 4.5,
        shootCone: 180,
        ejectEffect: Fx.none,
        inaccuracy: 15,
        ignoreRotation: true,
        shootSound: Sounds.shootHorizon,
        soundPitchMMax: 1.2,
        bullet: extend(BombBulletType, {
            sprite: "circle-bullet",
            damage: 44,
            splashDamage: 50,
            splashDamageRadius: 32,
            width: 10,
            height: 10,
            shrinkX: 0.5,
            shrinkY: 0.5,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.white,
            hitEffect: Fx.flakExplosion,
            shootEffect: Fx.none,
            smokeEffect: Fx.none,
            status: StatusEffects.blasted,
            statusDuration: 60
        })
    })
);
Horizon.abilities.add(EffectedRegenAbility(125));

//Destructor Zenith
const Zenith = extend(UnitType, "Destructor_Zenith", {
    localizedName: "Destructor Zenith",
    health: 8700,
    speed: 2,
    accel: 0.04,
    drag: 0.016,
    flying: true,
    hitSize: 20,
    lowAltitude: true,
    forceMultiTarget: true,
    armor: 30,
    targetFlags: [BlockFlag.launchPad, BlockFlag.storage, BlockFlag.battery, null],
    engineOffset: 12,
    engineSize: 3,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 20,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 92,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.3,
    update(unit){
        unit.healthMultiplier += 1/(1-Zenith.DR)-1;
    }
});
Zenith.constructor = () => extend(UnitEntity, {});
Zenith.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Zenith.DR
);
Zenith.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Zenith.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Zenith_Missile",{
        reload: 30,
        x: 7,
        rotate: true,
        shake: 1,
        shoot: extend(ShootPattern,{
            shots: 2
        }),
        inaccuracy: 5,
        velocityRnd: -0.2,
        shootSound: Sounds.shootMissileLong,
        bullet: extend(MultiBulletType,{
            bullets: [
                extend(MissileBulletType, 5.5, 100, {
                    width: 10,
                    height: 10,
                    shrinkY: 0,
                    drag: -0.0003,
                    homingRange: 60,
                    scaleKeepVelocity: true,
                    splashDamageRadius: 32,
                    splashDamage: 20,
                    lifetime: 40,
                    trailColor: Color.valueOf("d06b53"),
                    backColor: Color.valueOf("d06b53"),
                    frontColor: Color.valueOf("ffa665"),
                    hitEffect: extend(Effect,22, e => {
                        Draw.color(Color.valueOf("ffa665"));
                        e.scaled(6, i => {
                            Lines.stroke(3 * i.fout());
                            Lines.circle(e.x, e.y, 3 + i.fin() * 15);
                        });
                        Draw.color(Color.gray);
                        Angles.randLenVectors(e.id, 5, 2 + 23 * e.finpow(), (x, y) => {
                            Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                        });
                        Draw.color(Color.valueOf("d06b53"));
                        Lines.stroke(e.fout());
                    
                        Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                        });
                        Drawf.light(e.x, e.y, 45, Color.valueOf("d06b53"), 0.8 * e.fout());
                    },{}),
                    despawnEffect: extend(Effect,22, e => {
                        Draw.color(Color.valueOf("ffa665"));
                        e.scaled(6, i => {
                            Lines.stroke(3 * i.fout());
                            Lines.circle(e.x, e.y, 3 + i.fin() * 15);
                        });
                        Draw.color(Color.gray);
                        Angles.randLenVectors(e.id, 5, 2 + 23 * e.finpow(), (x, y) => {
                            Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                        });
                        Draw.color(Color.valueOf("d06b53"));
                        Lines.stroke(e.fout());
                    
                        Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                        });
                        Drawf.light(e.x, e.y, 45, Color.valueOf("d06b53"), 0.8 * e.fout());
                    },{}),
                    weaveScale: 6,
                    weaveMag: 1
                }),
                extend(MissileBulletType, 4.5, 50, {
                    width: 10,
                    height: 10,
                    shrinkY: 0,
                    drag: -0.0003,
                    homingRange: 60,
                    scaleKeepVelocity: true,
                    splashDamageRadius: 60,
                    splashDamage: 50,
                    lifetime: 49,
                    trailColor: Color.valueOf("6bd053"),
                    backColor: Color.valueOf("6bd053"),
                    frontColor: Color.valueOf("a6ff65"),
                    hitEffect: extend(Effect,22, e => {
                        Draw.color(Color.valueOf("a6ff65"));
                        e.scaled(6, i => {
                            Lines.stroke(3 * i.fout());
                            Lines.circle(e.x, e.y, 3 + i.fin() * 15);
                        });
                        Draw.color(Color.gray);
                        Angles.randLenVectors(e.id, 5, 2 + 23 * e.finpow(), (x, y) => {
                            Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                        });
                        Draw.color(Color.valueOf("6bd053"));
                        Lines.stroke(e.fout());
                    
                        Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                        });
                        Drawf.light(e.x, e.y, 45, Color.valueOf("6bd053"), 0.8 * e.fout());
                    },{}),
                    despawnEffect: extend(Effect,22, e => {
                        Draw.color(Color.valueOf("a6ff65"));
                        e.scaled(6, i => {
                            Lines.stroke(3 * i.fout());
                            Lines.circle(e.x, e.y, 3 + i.fin() * 15);
                        });
                        Draw.color(Color.gray);
                        Angles.randLenVectors(e.id, 5, 2 + 23 * e.finpow(), (x, y) => {
                            Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                        });
                        Draw.color(Color.valueOf("6bd053"));
                        Lines.stroke(e.fout());
                    
                        Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                        });
                        Drawf.light(e.x, e.y, 45, Color.valueOf("6bd053"), 0.8 * e.fout());
                    },{}),
                    weaveScale: 6,
                    weaveMag: 1
                }),
                extend(MissileBulletType, 3.5, 10, {
                    width: 10,
                    height: 10,
                    shrinkY: 0,
                    drag: -0.0003,
                    homingRange: 60,
                    scaleKeepVelocity: true,
                    splashDamageRadius: 25,
                    splashDamage: 100,
                    lifetime: 63,
                    trailColor: Color.valueOf("536bd0"),
                    backColor: Color.valueOf("536bd0"),
                    frontColor: Color.valueOf("65a6ff"),
                    hitEffect: extend(Effect,22, e => {
                        Draw.color(Color.valueOf("65a6ff"));
                        e.scaled(6, i => {
                            Lines.stroke(3 * i.fout());
                            Lines.circle(e.x, e.y, 3 + i.fin() * 15);
                        });
                        Draw.color(Color.gray);
                        Angles.randLenVectors(e.id, 5, 2 + 23 * e.finpow(), (x, y) => {
                            Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                        });
                        Draw.color(Color.valueOf("536bd0"));
                        Lines.stroke(e.fout());
                    
                        Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                        });
                        Drawf.light(e.x, e.y, 45, Color.valueOf("536bd0"), 0.8 * e.fout());
                    },{}),
                    despawnEffect: extend(Effect,22, e => {
                        Draw.color(Color.valueOf("65a6ff"));
                        e.scaled(6, i => {
                            Lines.stroke(3 * i.fout());
                            Lines.circle(e.x, e.y, 3 + i.fin() * 15);
                        });
                        Draw.color(Color.gray);
                        Angles.randLenVectors(e.id, 5, 2 + 23 * e.finpow(), (x, y) => {
                            Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                        });
                        Draw.color(Color.valueOf("536bd0"));
                        Lines.stroke(e.fout());
                    
                        Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                            Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                        });
                        Drawf.light(e.x, e.y, 45, Color.valueOf("536bd0"), 0.8 * e.fout());
                    },{}),
                    weaveScale: 6,
                    weaveMag: 1
                })
            ]
        })
    })
);
Zenith.abilities.add(EffectedRegenAbility(250));

//Destructor Antumbra
const Antumbra = extend(UnitType, "Destructor_Antumbra", {
    localizedName: "Destructor Antumbra",
    speed: 0.9,
    accel: 0.04,
    drag: 0.04,
    rotateSpeed: 2,
    flying: true,
    lowAltitude: true,
    health: 27200,
    engineOffset: 21,
    engineSize: 5.3,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 40,
    trailColor: Color.valueOf("ed655a"),
    hitSize: 46,
    armor: 50,
    targetFlags: [BlockFlag.generator, BlockFlag.core, null],
    loopSound: Sounds.loopHover,
    lightRadius: 211.6,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Antumbra.DR)-1;
    }
});
Antumbra.constructor = () => extend(UnitEntity, {});
Antumbra.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Antumbra.DR
);
Antumbra.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Antumbra.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Super_Missile_Mount",{
        x: 22,
        y: 0,
        reload: 160,
        shoot: extend(ShootPattern,{
            shots: 32,
            shotDelay: 1.2
        }),
        shootY: 4,
        shootCone: 100,
        inaccuracy: 10,
        velocityRnd: -0.33,
        rotate: true,
        rotateSpeed: 2.25,
        shootSound: Sounds.shootArtillery,
        shadow: 6,
        shake: 1,
        bullet: extend(MissileBulletType, {
            hitShake: 1.5,
            speed: 3,
            damage: 75,
            width: 8,
            height: 8,
            drag: -0.003,
            homingRange: 60,
            keepVelocity: false,
            splashDamageRadius: 32,
            splashDamage: 180,
            lifetime: 70,
            trailColor: Color.valueOf("d06b53"),
            backColor: Color.valueOf("d06b53"),
            frontColor: Color.valueOf("ffa665"),
            hitEffect: Fx.blastExplosion,
            despawnEffect: Fx.blastExplosion,
            weaveScale: 6,
            weaveMag: 1,
            status: StatusEffects.blasted,
            statusDuration: 60
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Large_Bullet_Mount", {
        x: 10,
        y: 2,
        shootY: 10,
        reload: 6,
        shake: 1,
        rotateSpeed: 2,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootSpectre,
        rotate: true,
        shadow: 8,
        bullet: extend(BasicBulletType, 9, 260,{
            width: 12,
            height: 20,
            lifetime: 32,
            shootEffect: Fx.shootBig,
            pierce: true,
            pierceBuilding: true,
            pierceCap: 2
        })
    })
);
Antumbra.abilities.add(EffectedRegenAbility(500));

//Destructor Eclipse
const Eclipse = extend(UnitType, "Destructor_Eclipse", {
    localizedName: "Destructor Eclipse",
    speed: 0.8,
    accel: 0.05,
    drag: 0.05,
    rotateSpeed: 1.4,
    flying: true,
    lowAltitude: true,
    health: 72000,
    engineOffset: 38,
    engineSize:7.4,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 50,
    trailColor: Color.valueOf("ed655a"),
    hitSize: 58,
    armor: 100,
    targetFlags: [BlockFlag.reactor, BlockFlag.battery, BlockFlag.core, null],
    loopSound: Sounds.loopHover,
    lightRadius: 266.8,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.5,
    update(unit){
        unit.healthMultiplier += 1/(1-Eclipse.DR)-1;
    }
});
Eclipse.constructor = ()=> extend(UnitEntity,{});
Eclipse.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Eclipse.DR
);
Eclipse.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Eclipse.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Large_Artillery",{
        x: 11,
        y: 27,
        rotateSpeed: 3,
        reload: 15,
        shootSound: Sounds.shootCyclone,
        shadow: 7,
        rotate: true,
        recoil: 0.5,
        shoot: extend(ShootPattern, {
            shots: 5
        }),
        inaccuracy: 5,
        velocityRnd: -0.25,
        bullet: extend(FlakBulletType, 6.6, 140, {
            shootEffect: Fx.shootBig,
            ammoMultiplier: 4,
            splashDamage: 120,
            splashDamageRadius: 48,
            collidesGround: true,
            lifetime: 40,
            reflectable: false,
            status: StatusEffects.blasted,
            statusDuration: 300,
            fragBullets: 2,
            backColor: Pal.blastAmmoBack,
            frontColor: Pal.blastAmmoFront,
            hitEffect: extend(Effect,30, e => {
                Draw.color(Pal.blastAmmoBack);
                e.scaled(6, i => {
                    Lines.stroke(3 * i.fout());
                    Lines.circle(e.x, e.y, 3 + i.fin() * 25);
                });
                Draw.color(Color.gray);
                Angles.randLenVectors(e.id, 6, 2 + 23 * e.finpow(), (x, y) => {
                    Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                });
                Draw.color(Pal.blastAmmoBack);
                Lines.stroke(e.fout());
                Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                });
                Drawf.light(e.x, e.y, 60, Pal.blastAmmoBack, 0.7 * e.fout());
            },{}),
            fragBullet: extend(BasicBulletType,12,50,{
                width: 3,
                height: 3,
                backColor: Pal.blastAmmoBack,
                frontColor: Pal.blastAmmoFront,
                lifetime: 4
            })
        })
    }),
    extend(Weapon,"destructionmod-Destructor_Large_Artillery",{
        x: 20,
        y: -13,
        rotateSpeed: 3,
        reload: 20,
        shootSound: Sounds.shootCyclone,
        shadow: 7,
        rotate: true,
        recoil: 0.5,
        shoot: extend(ShootPattern, {
            shots: 5
        }),
        inaccuracy: 5,
        velocityRnd: -0.25,
        bullet: extend(FlakBulletType, 6.6, 110, {
            shootEffect: Fx.shootBig,
            ammoMultiplier: 4,
            splashDamage: 105,
            splashDamageRadius: 48,
            collidesGround: true,
            reflectable: false,
            lifetime: 51,
            status: StatusEffects.freezing,
            statusDuration: 300,
            fragBullets: 2,
            backColor: Color.valueOf("56ddff"),
            frontColor: Color.valueOf("c8ddff"),
            hitEffect: extend(Effect,30, e => {
                Draw.color(Color.valueOf("56ddff"));
                e.scaled(6, i => {
                    Lines.stroke(3 * i.fout());
                    Lines.circle(e.x, e.y, 3 + i.fin() * 25);
                });
                Draw.color(Color.gray);
                Angles.randLenVectors(e.id, 6, 2 + 23 * e.finpow(), (x, y) => {
                    Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                });
                Draw.color(Color.valueOf("56ddff"));
                Lines.stroke(e.fout());
                Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
                    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
                });
                Drawf.light(e.x, e.y, 60, Color.valueOf("56ddff"), 0.7 * e.fout());
            },{}),
            fragBullet: extend(BasicBulletType,12,30,{
                width: 3,
                height: 3,
                backColor: Color.valueOf("56ddff"),
                frontColor: Color.valueOf("c8ddff"),
                lifetime: 4
            })
        })
    }),
    extend(Weapon,"destructionmod-Destructor_Large_Laser_Mount",{
        shake: 4,
        shootY: 12,
        x: 18,
        y: 5,
        rotateSpeed: 1.8,
        reload: 45,
        recoil: 4,
        chargeSound: Sounds.chargeVela,
        shootSound: Sounds.beamPlasma,
        initialShootSound: Sounds.shootEclipse,
        shadow: 20,
        rotate: true,
        continuous: true,
        cooldownTime: 90,
        parentizeEffects: true,
        shoot: extend(ShootPattern, {
            firstShotDelay: 39
        }),
        bullet: extend(ContinuousLaserBulletType,{
            applyDamage(b){
                this.super$applyDamage(b);
                let resultLength = this.currentLength(b);
                let rot = b.rotation();
                if (this.lightningSpacing > 0) {
                    let idx = 0;
                    for (let i = 0; i <= resultLength; i += this.lightningSpacing) {
                        let cx = b.x + Angles.trnsx(rot, i);
                        let cy = b.y + Angles.trnsy(rot, i);
                        let f = idx++;
                        Mathf.signs.forEach(s => {
                            Time.run(f * this.lightningDelay, () => {
                                if (b.isAdded() && b.type === this) {
                                    Lightning.create(b, this.lightningColor,
                                        this.lightningDamage < 0 ? this.damage : this.lightningDamage,
                                        cx, cy, rot + 90 * s + Mathf.range(this.lightningAngleRand),
                                        this.lightningLength + Mathf.random(this.lightningLengthRand));
                                }
                            });
                        });
                    }
                }
            },
            draw(b){
                let fout = Mathf.clamp(b.time > b.lifetime - this.fadeTime ? 1 - (b.time - (this.lifetime - this.fadeTime)) / this.fadeTime : 1);
                let realLength = Damage.findLength(b, this.currentLength(b), this.laserAbsorb, this.pierceCap);
                let rot = b.rotation();

                for(let i = 0; i < this.colors.length; i++){
                    Draw.color(Tmp.c1.set(this.colors[i]).mul(1 + Mathf.absin(Time.time, 1, 0.1)));
                
                    let colorFin = i / (this.colors.length - 1);
                    let baseStroke = Mathf.lerp(this.strokeFrom, this.strokeTo, colorFin);
                    let stroke = (this.width + Mathf.absin(Time.time, this.oscScl, this.oscMag)) * fout * baseStroke;
                    let ellipseLenScl = Mathf.lerp(1 - i / (this.colors.length), 1, this.pointyScaling);
                
                    Lines.stroke(stroke);
                    Lines.lineAngle(b.x, b.y, rot, Math.max(0, realLength - this.frontLength), false);

                    Drawf.flameFront(b.x, b.y, this.divisions, rot + 180, this.backLength, stroke / 2);

                    Tmp.v1.trnsExact(rot, Math.max(0, realLength - this.frontLength));
                    Drawf.flameFront(b.x + Tmp.v1.x, b.y + Tmp.v1.y, this.divisions, rot, this.frontLength * ellipseLenScl, stroke / 2);
                }
            
                Tmp.v1.trns(b.rotation(), realLength * 1.1);
            
                Drawf.light(b.x, b.y, b.x + Tmp.v1.x, b.y + Tmp.v1.y, this.lightStroke, this.lightColor, this.lightOpacity);
                Draw.reset();
            },
            currentLength(b){
                let rot = b.rotation();

                let baseLength = this.length; 
                let data = { length: baseLength };
            
                let endX = b.x + Angles.trnsx(rot, baseLength);
                let endY = b.y + Angles.trnsy(rot, baseLength);

                Vars.world.raycastEachWorld(b.x, b.y, endX, endY, (x, y) => {
                    let tile = Vars.world.tile(x, y);
                    if (tile != null && tile.build != null) {
                        let blockName = tile.block().name;

                        if (tile.build.team != b.team && (blockName === "destructionmod-Destruction_Wall_Large" || blockName === "destructionmod-Destruction_Wall")) {
                            let dist = b.dst(tile.build.x, tile.build.y);
                            if (dist < data.length) {
                                data.length = dist;
                            }
                            return true;
                        }
                    }
                    return false;
                });

                let resultLength = data.length;

                return resultLength;
            },
            rangeOverride: 320,
            lightColor: Color.valueOf("ed655a"),
            lightningColor: Color.valueOf("ed655a"),
            lightningLength: 2,
            lightningDamage: 50,
            lightningAngleRand: 40,
            lightningLengthRand: 10,
            lightningSpacing: 30,
            lightningDelay: 0,
            laserAbsorb: false,
            damage: 3660/12,
            length: 320,
            width: 5,
            lifetime: 180,
            shootEffect: Fx.shockwave,
            colors: [Color.valueOf("ed655a"),Color.valueOf("ff968a"),Color.valueOf("ffffff")],
            status: Destructed,
            statusDuration: 300,
            despawnEffect: Fx.smokeCloud,
            smokeEffect: Fx.none,
            incendChance: 0.1,
            incendSpread: 5,
            incendAmount: 1,
            hitEffect: extend(Effect, 12, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 2);

                Angles.randLenVectors(e.id, 6, e.finpow() * 18, (x, y) => {
                    let ang = Mathf.angle(x, y);
                    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
                });
            },{}),
            chargeEffect: extend(Effect, 40, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fin() * 2);
                Lines.circle(e.x, e.y, e.fout() * 50);
            },{followParent: true, rotWithParent: true})
        })
    })
);
Eclipse.abilities.add(EffectedRegenAbility(1000));

//Destructor Nova
const Nova = extend(UnitType, "Destructor_Nova",{
    localizedName: "Destructor Nova",
    canBoost: true,
    boostMultiplier: 1.5,
    speed: 0.65,
    hitSize: 8,
    health: 760,
    armor: 10,
    engineOffset: 1.65,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 20,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 36.8,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.1,
    update(unit){
        unit.healthMultiplier += 1/(1-Nova.DR)-1;
    }
});
Nova.constructor = () => extend(MechUnit, {});
Nova.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Nova.DR
);
Nova.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Nova.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Heal_Weapon",{
        top: false,
        shootY: 2,
        reload: 24,
        x: 4.5,
        alternate: false,
        ejectEffect: Fx.none,
        recoil: 2,
        shootSound: Sounds.shootLancer,
        shootSoundVolume: 0.3,
        bullet: extend(LaserBulletType, {
            length: 140,
            width: 10,
            colors: [Color.valueOf("ed655a"),Color.valueOf("ff968a"),Color.valueOf("ffffff")],
            damage: 36
        })
    })
);
Nova.abilities.add(EffectedRegenAbility(62.5));

//Destructor Pulsar
const Pulsar = extend(UnitType, "Destructor_Pulsar", {
    localizedName: "Destructor Pulsar",
    canBoost: true,
    boostMultiplier: 1.6,
    speed: 0.82,
    hitSize: 11,
    health: 1920,
    armor: 20,
    riseSpeed: 0.14,
    descentSpeed: 0.14,
    engineOffset: 2,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 25,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 50.56,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.2,
    update(unit){
        unit.healthMultiplier += 1/(1-Pulsar.DR)-1;
    }
});
Pulsar.constructor = () => extend(MechUnit, {});
Pulsar.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Pulsar.DR
);
Pulsar.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Pulsar.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Heal_Shotgun_Weapon",{
        top: false,
        x: 5,
        shake: 2.2,
        y: 0.5,
        shootY: 2.5,
        reload: 6,
        inaccuracy: 15,
        shoot: extend(ShootPattern, {
            shots: 3,
            shotDelay: 2
        }),
        ejectEffect: Fx.none,
        recoil: 2.5,
        shootSound: Sounds.shootPulsar,
        bullet: extend(LightningBulletType, {
            lightningColor: Color.valueOf("ed655a"),
            hitColor: Color.valueOf("ed655a"),
            damage: 44,
            lightningLength: 12,
            lightningLengthRand: 7,
            shootEffect: extend(Effect, 8, e=>{
                Draw.color(Color.valueOf("ed655a"));
                let w = 1 + 5 * e.fout();
                Drawf.tri(e.x, e.y, w, 17 * e.fout(), e.rotation);
                Drawf.tri(e.x, e.y, w, 4 * e.fout(), e.rotation + 180);
            },{}),
            lightningType: extend(BulletType, 0.0001, 0 , {
                lifetime: Fx.lightning.lifetime,
                hitEffect: Fx.hitLancer,
                despawnEffect: Fx.none,
                status: StatusEffects.shocked,
                statusDuration: 10,
                hittable: false
            })
        })
    })
);
Pulsar.abilities.add(
    EffectedRegenAbility(125),
    ShieldRegenFieldAbility(40, 200, 60 * 2.5, 80)
);

//Destructor Quasar
const Quasar = extend(UnitType, "Destructor_Quasar",{
    localizedName: "Destructor Quasar",
    health: 8640,
    boostMultiplier: 2,
    canBoost: true,
    armor: 30,
    mechLandShake: 2,
    riseSpeed: 0.05,
    descentSpeed: 0.05,
    mechFrontSway: 0.55,
    stepSound: Sounds.mechStepSmall,
    stepSoundPitch: 0.9,
    stepSoundVolume: 0.6,
    speed: 0.66,
    hitSize: 13,
    drawShields: false,
    engineOffset: 3,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 30,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 59.8,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.3,
    update(unit){
        unit.healthMultiplier += 1/(1-Quasar.DR)-1;
    }
});
Quasar.constructor = () => extend(MechUnit, {});
Quasar.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Quasar.DR
);
Quasar.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Quasar.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Beam_Weapon",{
        top: false,
        shake: 2,
        shootY: 4,
        x: 6.5,
        reload: 55,
        recoil: 4,
        shootSound: Sounds.shootLancer,
        shoot: extend(ShootPattern,{
            shots: 3,
            shotDelay: 1.25
        }),
        inaccuracy: 2,
        bullet: extend(LaserBulletType,{
            damage: 100,
            recoil: 0,
            sideAngle: 30,
            sideWidth: 2,
            sideLength: 80,
            length: 200,
            colors: [Color.valueOf("ed655a"),Color.valueOf("ff968a"),Color.valueOf("ffffff")],
            width: 18,
            lightningColor: Color.valueOf("ed655a"),
            lightColor: Color.valueOf("ed655a"),
            lightningLength: 2,
            lightningDamage: 50,
            lightningAngleRand: 40,
            lightningLengthRand: 5,
            lightningSpacing: 40
        })
    })
);
Quasar.abilities.add(
    EffectedRegenAbility(250),
    ForceFieldAbility(100, 1.5, 1000, 300, 5, 9)
);

//Desructor Vela
const Vela = extend(UnitType, "Destructor_Vela", {
    localizedName: "Destructor Vela",
    hitSize: 24,
    rotateSpeed: 2,
    mechFrontSway: 1,
    stepShake: 0.15,
    lowAltitude: true,
    speed: 0.55,
    boostMultiplier: 2.4,
    engineOffset: 12,
    engineSize: 6,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 35,
    trailColor: Color.valueOf("ed655a"),
    riseSpeed: 0.04,
    descentSpeed: 0.04,
    health: 28200,
    armor: 50,
    canBoost: true,
    mechLandShake: 4,
    singleTarget: true,
    stepSound: Sounds.mechStep,
    stepSoundPitch: 0.9,
    stepSoundVolume: 0.25,
    lightRadius: 110.4,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Vela.DR)-1;
    }
});
Vela.constructor = () => extend(MechUnit, {});
Vela.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Vela.DR
);
Vela.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Vela.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Vela_Weapon",{
        mirror: false,
        top: false,
        shake: 4,
        shootY: 14,
        x: 0,
        y: 0,
        shoot: extend(ShootPattern,{
            firstShotDelay: 39
        }),
        parentizeEffects: true,
        reload: 120,
        recoil: 0,
        chargeSound: Sounds.chargeVela,
        shootSound: Sounds.beamPlasma,
        initialShootSound: Sounds.shootBeamPlasma,
        continuous: true,
        cooldownTime: 120,
        shootStatus: StatusEffects.slow,
        shootStatusDuration: 199,
        bullet: extend(ContinuousLaserBulletType, {
            damage: 2200/12,
            length: 290,
            hitEffect: extend(Effect,12, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 2);

                Angles.randLenVectors(e.id, 6, e.finpow() * 18, (x, y) => {
                    let ang = Mathf.angle(x, y);
                    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
                })
            },{}),
            drawSize: 420,
            lifetime: 160,
            shake: 1,
            despawnEffect: Fx.smokeCloud,
            smokeEffect: Fx.none,
            chargeEffect: extend(Effect, 40, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fin() * 2);
                Lines.circle(e.x, e.y, e.fout() * 50);
            },{followParent: true, rotWithParent: true}),
            incendChance: 0.1,
            incendSpread: 5,
            incendAmount: 1,
            colors: [Color.valueOf("ed655aaa"),Color.valueOf("ed655a75"),Color.valueOf("ed655a"),Color.white]
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Repair_Beam_Weapon_Center_Large",{
        x: 11,
        y: -7.5,
        shootY: 6,
        rotateSpeed: 3,
        rotate: true,
        reload: 40,
        shootSound: Vars.tree.loadSound("railgun_D"),
        bullet: extend(PointBulletType, {
            damage: 1200,
            shootEffect: extend(Effect,24, e => {
                e.scaled(10, b => {
                    Draw.color(Color.white, Color.valueOf("ed655a"), b.fin());
                    Lines.stroke(b.fout() * 3 + 0.2);
                    Lines.circle(b.x, b.y, b.fin() * 30);
                });
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 10 * e.fout(), 30, e.rotation + 90);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 50, e.rotation + 20);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 30, e.rotation - 90);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 50, e.rotation - 20);
                Drawf.light(e.x, e.y, 180, Color.valueOf("ed655a"), 0.9 * e.fout());
            },{}),
            hitEffect: extend(Effect,20, 200, e => {
                Draw.color(Color.valueOf("ed655a"));
                for(let i = 0; i < 2; i++){
                    Draw.color(i == 0 ? Color.valueOf("ed655a") : Color.valueOf("eda096"));
                    let m = i == 0 ? 1 : 0.5;
                    for(let j = 0; j < 5; j++){
                        let rot = e.rotation + Mathf.randomSeedRange(e.id + j, 50);
                        let w = 12 * e.fout() * m;
                        Drawf.tri(e.x, e.y, w, (40 + Mathf.randomSeedRange(e.id + j, 40)) * m, rot);
                        Drawf.tri(e.x, e.y, w, 10 * m, rot + 180);
                    }
                }
                e.scaled(10, c => {
                    Draw.color(Color.valueOf("eda096"));
                    Lines.stroke(c.fout() * 2 + 0.2);
                    Lines.circle(e.x, e.y, c.fin() * 30);
                });
                e.scaled(12, c => {
                    Draw.color(Color.valueOf("ed655a"));
                    Angles.randLenVectors(e.id, 25, 5 + e.fin() * 80, e.rotation, 60, (x, y) => {
                        Fill.square(e.x + x, e.y + y, c.fout() * 3, 45);
                    });
                });
            },{}),
            smokeEffect: Fx.shootBig2,
            trailEffect: extend(Effect,30, e => {
                for(let i = 0; i < 2; i++){
                    Draw.color(i == 0 ? Color.valueOf("ed655a") : Color.valueOf("eda096"));
                    let m = i == 0 ? 1 : 0.5;
                    let rot = e.rotation + 180;
                    let w = 8 * e.fout() * m;
                    Drawf.tri(e.x, e.y, w, (20 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
                    Drawf.tri(e.x, e.y, w, 8 * m, rot + 180);
                }
                Drawf.light(e.x, e.y, 60, Color.valueOf("ed655a"), 0.6 * e.fout());
            },{}),
            despawnEffect: extend(Effect, 15, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 4);
                Lines.circle(e.x, e.y, 4 + e.finpow() * 20);
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 6, 80 * e.fout(), i*90 + 45);
                }
                Draw.color();
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i*90 + 45);
                }
                Drawf.light(e.x, e.y, 150, Color.valueOf("ed655a"), 0.9 * e.fout());
            },{}),
            trailSpacing: 20,
            speed: 240,
            hitShake: 4,
            lifetime: 1
        })
    })
);
Vela.abilities.add(EffectedRegenAbility(500));

//Destructor Corvus
const Corvus = extend(UnitType, "Destructor_Corvus", {
    localizedName: "Destructor Corvus",
    hitSize: 29,
    health: 68000,
    armor: 100,
    landShake: 1.5,
    rotateSpeed: 2.25,
    legCount: 4,
    legLength: 14,
    legBaseOffset: 11,
    legMoveSpace: 1.5,
    legForwardScl: 0.58,
    hovering: true,
    drownTimeMultiplier: 2,
    shadowElevation: 0.2,
    groundLayer: Layer.legUnit,
    speed: 0.5,
    drawShields: false,
    stepSound: Sounds.walkerStep,
    stepSoundVolume: 1.1,
    stepSoundPitch: 0.9,
    lightRadius: 133.4,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    range: 532,
    researchCostMultiplier: 1/2,
    DR: 0.5,
    update(unit){
        unit.healthMultiplier += 1/(1-Corvus.DR)-1;
    }
});
Corvus.constructor = () => extend(LegsUnit, {});
Corvus.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Corvus.DR
);
Corvus.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Corvus.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Corvus_Weapon",{
        shootSound: Sounds.shootCorvus,
        chargeSound: Sounds.chargeCorvus,
        soundPitchMin: 1,
        top: false,
        mirror: false,
        shake: 14,
        shootY: 5,
        x: 0,
        y: 0,
        reload: 300,
        recoil: 0,
        cooldownTime: 280,
        shootStatusDuration: 180,
        shootStatus: StatusEffects.unmoving,
        parentizeEffects: true,
        heatColor: Color.red,
        shoot: extend(ShootPattern, {
            firstShotDelay: 80
        }),
        range(){
            return this.bullet.length;
        },
        bullet: extend(LaserBulletType, {
            init(b) {
                if (!b) return;
            
                let rot = b.rotation();
                let baseLength = this.length;
                let data = { length: baseLength };
            
                let endX = b.x + Angles.trnsx(rot, baseLength);
                let endY = b.y + Angles.trnsy(rot, baseLength);
            
                Vars.world.raycastEachWorld(b.x, b.y, endX, endY, (x, y) => {
                    let tile = Vars.world.tile(x, y);
                    if (tile != null && tile.build != null) {
                        let blockName = tile.block().name;
                        
                        if (tile.build.team != b.team && (blockName === "destructionmod-Destruction_Wall_Large" || blockName === "destructionmod-Destruction_Wall")) { 
                            let dist = b.dst(tile.build.x, tile.build.y);
                            if (dist < data.length) {
                                data.length = dist;
                            }
                            return true;
                        }
                    }
                    return false;
                });

                let resultLength = Damage.collideLaser(b, data.length, this.largeHit, this.laserAbsorb, this.pierceCap);

                this.laserEffect.at(b.x, b.y, rot, resultLength * 0.75);

                if (this.lightningSpacing > 0) {
                    let idx = 0;
                    for (let i = 0; i <= resultLength; i += this.lightningSpacing) {
                        let cx = b.x + Angles.trnsx(rot, i);
                        let cy = b.y + Angles.trnsy(rot, i);
                        let f = idx++;
                        Mathf.signs.forEach(s => {
                            Time.run(f * this.lightningDelay, () => {
                                if (b.isAdded() && b.type === this) {
                                    Lightning.create(b, this.lightningColor,
                                        this.lightningDamage < 0 ? this.damage : this.lightningDamage,
                                        cx, cy, rot + 90 * s + Mathf.range(this.lightningAngleRand),
                                        this.lightningLength + Mathf.random(this.lightningLengthRand));
                                }
                            });
                        });
                    }
                }                
            },
            laserAbsorb: false,
            length: 532,
            damage: 5250,
            width: 80,
            lifetime: 65,
            lightningSpacing: 35,
            lightningLength: 5,
            lightningDelay: 1.1,
            lightningLengthRand: 15,
            lightningDamage: 300,
            lightningAngleRand: 40,
            largeHit: true,
            lightColor: Color.valueOf("ed655a"),
            lightningColor: Color.valueOf("ed655a"),
            sideAngle: 15,
            sideWidth: 0,
            sideLength: 0,
            status: Destructed,
            statusDuration: 600,
            colors: [Color.valueOf("ed655a"),Color.valueOf("ff968a"),Color.valueOf("ffffff")],
            shootEffect: extend(Effect, 65, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 4);
                Lines.circle(e.x, e.y, 4 + e.fin() * 60);
                Fill.circle(e.x, e.y, e.fout() * 20);
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 15*e.fout(), 80, i*90);
                }
            }, {followParent: true, rotWithParent: true}),
            chargeEffect: extend(Effect, 80, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fin() * 4);
                Lines.circle(e.x, e.y, 4 + e.fout() * 100);
                Fill.circle(e.x, e.y, e.fin() * 20);
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 7.5 + 5*e.fin(), 10+40*e.fin(), i*90+180*3*e.fout());
                }
                Angles.randLenVectors(e.id, 20, 40 * e.fout(), (x, y) => {
                    Fill.circle(e.x + x, e.y + y, e.fin() * 5);
                    Drawf.light(e.x + x, e.y + y, e.fin() * 15, Color.valueOf("ed655a"), 0.7);
                });
                Draw.color();
                Fill.circle(e.x, e.y, e.fin() * 10);
                Drawf.light(e.x, e.y, e.fin() * 20, Color.valueOf("ed655a"), 0.7);
            }, {followParent: true, rotWithParent: true})
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Plasma_Laser_Mount", {
        rotate: true,
        x: 14,
        y: -4,
        reload: 30,
        shake: 3,
        rotateSpeed: 3.5,
        shadow: 15,
        shootY: 7,
        recoil: 4,
        cooldownTime: 20,
        shootSound: Sounds.shootNavanax,
        useAttackRange: false,
        bullet: extend(EmpBulletType, {
            reflectable: false,
            damage: 400,
            splashDamage: 800,
            splashDamageRadius: 96,
            speed: 10,
            lifetime: 35,
            width: 8,
            height: 8,
            shrinkY: 0,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.white,
            hitColor: Color.valueOf("ed655a"),
            lightColor: Color.valueOf("ed655a"),
            lightRadius: 96,
            lightOpacity: 0.7,
            trailLength: 10,
            trailWidth: 3,
            trailColor: Color.valueOf("ed655a"),
            trailInterval: 3,
            trailRotation: true,
            scaleLife: true,
            unitDamageScl: 1,
            timeIncrease: 3,
            timeDuration: 1200,
            powerDamageScl: 3,
            powerSclDecrease: 0.5,
            hitShake: 2,
            hitSound: Sounds.explosionNavanax,
            sprite: "circle-bullet",
            status: extend(StatusEffect, "CorvusElectrifiedRed", {
                color: Color.valueOf("ed655a"),
                speedMultiplier: 0.8,
                reloadMultiplier: 0.6,
                effectChance: 0.15,
                effect: extend(Effect, 40, e => {
                    Draw.color(Color.valueOf("ed655a"));
                    Angles.randLenVectors(e.id, 2, 1 + e.fin() * 2, (x, y) => {
                        Fill.square(e.x + x, e.y + y, e.fslope() * 1.1, 45);
                    });
                }, {followParent: true, rotWithParent: true})
            }),
            trailEffect: extend(Effect, 8, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 5, 30 * e.fslope(), e.rotation + 90);
                Drawf.tri(e.x, e.y, 5, 30 * e.fslope(), e.rotation - 90);
            }, {
                followParent: true,
                rotWithParent: true
            }),
            shootEffect: extend(Effect, 40, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 1.6);
                Angles.randLenVectors(e.id, 18, e.finpow() * 27, e.rotation, 360, (x, y) => {
                    let ang = Mathf.angle(x, y);
                    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 1);
                });
            }, {followParent: true, rotWithParent: true}),
            hitEffect: extend(Effect, 50, 100, e => {
                e.scaled(7, b => {
                    Draw.color(Color.valueOf("ed655a"), b.fout());
                    Fill.circle(e.x, e.y, 96);
                });
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 3);
                Lines.circle(e.x, e.y, 96);
                let offset = Mathf.randomSeed(e.id, 360);
                for(let i = 0; i < 10; i++){
                    let angle = i * 360 / 10 + offset;
                    Drawf.tri(e.x + Angles.trnsx(angle, 96), e.y + Angles.trnsy(angle, 96), 6, 30 * e.fout(), angle);
                }
                Fill.circle(e.x, e.y, 12 * e.fout());
                Draw.color();
                Fill.circle(e.x, e.y, 6 * e.fout());
                Drawf.light(e.x, e.y, 96 * 1.6, Color.valueOf("ed655a"), e.fout());
            }, {followParent: true, rotWithParent: true})
        })
    })
);
Corvus.abilities.add(EffectedRegenAbility(1000));

//Destructor Crawler
const Crawler = extend(UnitType, "Destructor_Crawler", {
    localizedName: "Destructor Crawler",
    speed: 2,
    hitSize: 8,
    health: 790,
    mechSideSway: 0.25,
    range: 40,
    stepSound: Sounds.walkerStepTiny,
    stepSoundVolume: 0.2,
    lightColor: Color.valueOf("0000ff"),
    lightRadius: 36.8,
    lightOpacity: 1,
    DR: 0.1,
    update(unit){
        unit.healthMultiplier += 1/(1-Crawler.DR)-1;
    }
});
Crawler.constructor = () => extend(MechUnit, {});
Crawler.aiController = () => extend(SuicideAI, {});
Crawler.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Crawler.DR
);
Crawler.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Crawler.weapons.add(
    extend(Weapon,{
        targetUnderBlocks: false,
        reload: 30,
        shootCone: 180,
        ejectEffect: Fx.none,
        shootSound: Sounds.explosionCrawler,
        shootSoundVolume: 0.5,
        x: 0,
        shootY: 0,
        mirror: false,
        bullet: extend(BulletType, {
            collidesTiles: false,
            collides: false,
            rangeOverride: 30,
            hitEffect: Fx.flakExplosion,
            speed: 0,
            splashDamageRadius: 60,
            instantDisappear: true,
            splashDamage: 80,
            hittable: false,
            collidesAir: true
        })
    })
);
Crawler.abilities.add(EffectedRegenAbility(125));

//Destructor Atrax
const Atrax = extend(UnitType, "Destructor_Atrax", {
    localizedName: "Destructor Atrax",
    speed: 0.725,
    hitSize: 13,
    rotateSpeed: 4,
    targetAir: false,
    health: 2200,
    stepSound: Sounds.walkerStepSmall,
    stepSoundPitch: 1,
    stepSoundVolume: 0.25,
    legCount: 4,
    legLength: 9,
    legForwardScl: 0.6,
    legMoveSpace: 1.4,
    hovering: true,
    armor: 20,
    shadowElevation: 0.2,
    groundLayer: Layer.legUnit-1,
    lightColor: Color.valueOf("0000ff"),
    lightRadius: 59.8,
    lightOpacity: 1,
    DR: 0.2,
    update(unit){
        unit.healthMultiplier += 1/(1-Atrax.DR)-1;
    }
});
Atrax.constructor = () => extend(LegsUnit, {});
Atrax.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Atrax.DR
);
Atrax.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Atrax.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Atrax_Weapon", {
        top: false,
        shootY: 3,
        reload: 9,
        ejectEffect: Fx.none,
        recoil: 1,
        x: 7,
        shootSound: Sounds.shootAtrax,
        shoot: extend(ShootSpread, {
            shots: 3,
            spread: 7.5
        }),
        bullet: extend(LiquidBulletType, Liquids.slag, {
            damage: 56,
            speed: 3,
            drag: 0.009,
            shootEffect: Fx.shootSmall,
            lifetime: 60,
            collidesAir: false
        })
    })
);
Atrax.abilities.add(EffectedRegenAbility(125));

//Destructor Spiroct
const Spiroct = extend(UnitType, "Destructor_Spiroct",{
    localizedName: "Destructor Spiroct",
    speed: 0.6,
    drag: 0.4,
    hitSize: 15,
    rotateSpeed: 3,
    health: 9000,
    legCount: 6,
    legLength: 13,
    legForwardScl: 0.8,
    legMoveSpace: 1.4,
    legBaseOffset: 2,
    hovering: true,
    armor: 30,
    shadowElevation: 0.3,
    groundLayer: Layer.legUnit,
    stepSound: Sounds.walkerStepSmall,
    stepSoundPitch: 0.7,
    stepSoundVolume: 0.35,
    lightColor: Color.valueOf("0000ff"),
    lightRadius: 69,
    lightOpacity: 1,
    DR: 0.3,
    update(unit){
        unit.healthMultiplier += 1/(1-Spiroct.DR)-1;
    }
});
Spiroct.constructor = () => extend(LegsUnit, {});
Spiroct.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Spiroct.DR
);
Spiroct.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Spiroct.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Spiroct_Weapon", {
        shootY: 4,
        reload: 12.5,
        ejectEffect: Fx.none,
        recoil: 2,
        rotate: true,
        shootSound: Sounds.shootSap,
        x: 8.5,
        y: -1.5,
        bullet: extend(SapBulletType,{
            sapStrength: 0.5,
            length: 80,
            damage: 96,
            shootEffect: Fx.shootSmall,
            hitColor: Color.valueOf("ed655a"),
            color: Color.valueOf("ed655a"),
            despawnEffect: Fx.none,
            width: 0.54,
            lifetime: 35,
            knockback: -1.24
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Mount_Purple_Weapon", {
        reload: 16,
        rotate: true,
        shootSound: Sounds.shootSap,
        x: 4,
        y: 3,
        bullet: extend(SapBulletType,{
            sapStrength: 0.8,
            length: 60,
            damage: 81,
            shootEffect: Fx.shootSmall,
            hitColor: Color.valueOf("ed655a"),
            color: Color.valueOf("ed655a"),
            despawnEffect: Fx.none,
            width: 0.4,
            lifetime: 25,
            knockback: -0.65
        })
    }),
    extend(Weapon,{
        x: 0,
        y: 0,
        shootY: 6.5,
        reload: 60,
        mirror: false,
        rotate: false,
        shake: 1,
        shootSound: Sounds.explosionObviate,
        velocityRnd: -0.25,
        inaccuracy: 5,
        shoot: extend(ShootPattern, {
            shots: 3,
        }),
        bullet: extend(BasicBulletType,5,160,{
            shootEffect: new MultiEffect(
                Fx.shootTitan,
                extend(WaveEffect,{
                    colorTo: Pal.sapBulletBack,
                    sizeTo: 26,
                    lifetime: 14,
                    strokeFrom: 4
                })
            ),
            smokeEffect: Fx.shootSmokeTitan,
            hitColor: Pal.sapBullet,
            despawnSound: Sounds.explosionArtilleryShock,
            sprite: "large-orb",
            trailEffect: Fx.missileTrail,
            trailInterval: 3,
            trailParam: 4,
            lifetime: 40,
            width: 15,
            height: 15,
            backColor: Pal.sapBulletBack,
            frontColor: Pal.sapBullet,
            shrinkX: 0,
            shrinkY: 0,
            trailColor: Pal.sapBulletBack,
            trailLength: 12,
            trailWidth: 2.2,
            despawnEffect: extend(ExplosionEffect, {
                waveColor: Pal.sapBullet,
                smokeColor: Color.gray,
                sparkColor: Pal.sap,
                waveStroke: 4,
                waveRad: 40
            }),
            hitEffect: extend(ExplosionEffect, {
                waveColor: Pal.sapBullet,
                smokeColor: Color.gray,
                sparkColor: Pal.sap,
                waveStroke: 4,
                waveRad: 40
            }),
            intervalBullet: extend(LightningBulletType,{
                damage: 60,
                collidesAir: true,
                ammoMultiplier: 1,
                lightningColor: Pal.sapBullet,
                lightningLength: 3,
                lightningLengthRand: 6,
                lightningType: extend(BulletType,0.0001, 0, {
                    lifetime: Fx.lightning.lifetime,
                    hitEffect: Fx.hitLancer,
                    despawnEffect: Fx.none,
                    status: StatusEffects.shocked,
                    statusDuration: 10,
                    hittable: false,
                    lightColor: Color.white,
                    buildingDamageMultiplier: 0.25
                })
            }),
            bulletInterval: 4,
            lightningColor: Pal.sapBullet,
            lightningDamage: 70,
            lightning: 3,
            lightningLength: 8,
            lightningLengthRand: 8
        })
    }),
);
Spiroct.abilities.add(EffectedRegenAbility(250));

//Destructor Arkid
const Arkyid = extend(UnitType, "Destructor_Arkyid", {
    localizedName: "Destructor Arkyid",
    drag: 0.1,
    speed: 0.7,
    hitSize: 23,
    health: 28000,
    armor: 50,
    rotateSpeed: 3,
    legCount: 6,
    legMoveSpace: 1,
    legPairOffset: 3,
    legLength: 30,
    legExtension: -15,
    legBaseOffset: 10,
    stepShake: 1,
    leglengthScl: 0.96,
    rippleScale: 2,
    legSpeed: 0.2,
    stepSound: Sounds.walkerStep,
    stepSoundVolume: 0.85,
    stepSoundPitch: 1.1,
    legSplashDamage: 80,
    legSplashRange: 40,
    hovering: true,
    shadowElevation: 0.65,
    groundLayer: Layer.legUnit,
    lightRadius: 105.8,
    lightColor: Color.valueOf("0000ff"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Arkyid.DR)-1;
    }
});
Arkyid.constructor = () => extend(LegsUnit, {});
Arkyid.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Arkyid.DR
);
Arkyid.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
let ArkyidSap = extend(SapBulletType,{
    sapStrength: 0.85,
    length: 80,
    damage: 110,
    shootEffect: Fx.shootSmall,
    hitColor: Color.valueOf("ed655a"),
    color: Color.valueOf("ed655a"),
    daspawnEffect: Fx.none,
    lifetime: 30,
    knockback: -1,
    drownTimeMultiplier: 2
});
Arkyid.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Spiroct_Weapon",{
        reload: 9,
        x: 4,
        y: 8,
        rotate: true,
        shootSound: Sounds.shootSap,
        bullet: ArkyidSap
    }),
    extend(Weapon,"destructionmod-Destructor_Spiroct_Weapon",{
        reload: 14,
        x: 9,
        y: 6,
        rotate: true,
        shootSound: Sounds.shootSap,
        bullet: ArkyidSap
    }),
    extend(Weapon,"destructionmod-Destructor_Spiroct_Weapon",{
        reload: 22,
        x: 14,
        y: 0,
        rotate: true,
        shootSound: Sounds.shootSap,
        bullet: ArkyidSap
    }),
    extend(Weapon,"destructionmod-Destructor_Large_Purple_Mount",{
        x: 9,
        y: -7,
        shootY: 7,
        reload: 30,
        shake: 3,
        rotateSpeed: 2.2,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootArtillerySap,
        rotate: true,
        shadow: 8,
        recoil: 3,
        alternate: false,
        bullet: extend(ArtilleryBulletType,3,120,{
            hitEffect: Fx.sapExplosion,
            despawnSound: Sounds.explosionArtilleryShock,
            knockback: 0.8,
            lifetime: 100,
            width: 20,
            height: 20,
            collidesTiles: true,
            ammoMultiplier: 4,
            splashDamageRadius: 70,
            splashDamage: 180,
            backColor: Pal.sapBulletBack,
            frontColor: Pal.sapBullet,
            lightningColor: Pal.sapBullet,
            lightning: 6,
            lightningLength: 12,
            lightningLengthRand: 4,
            lightnigDamage: 50,
            smokeEffect: Fx.shootBigSmoke2,
            shake: 5,
            status: StatusEffects.sapped,
            statusDuration: 600
        })
    })
)
Arkyid.abilities.add(
    EffectedRegenAbility(500),
    extend(ShieldArcAbility,{
        region: "tecta-shield",
        radius: 45,
        angle: 80,
        regen: 300/60,
        cooldown: 60*10,
        max: 6000,
        y: -20,
        width: 6,
        whenShooting: false,
        chanceDeflect: 1,
        localized(){
            return "Shield Arc";
        }
    })
);

//Destructor Toxopid
const Toxopid = extend(UnitType, "Destructor_Toxopid", {
    localizedName: "Destructor Toxopid",
    drag: 0.1,
    speed: 0.68,
    hitSize: 26,
    stepSound: Sounds.walkerStep,
    stepSoundVolume: 1.1,
    health: 72000,
    armor: 100,
    drownTimeMultiplier: 3,
    lightRadius: 280,
    rotateSpeed: 2.1,
    legCount: 8,
    legMoveSpace: 0.8,
    legPairOffset: 3,
    legLength: 75,
    legExtension: -20,
    legBaseOffset: 8,
    stepShake: 1,
    legLengthScl: 0.93,
    rippleScale: 3,
    legSpeed: 0.19,
    legSplashDamage: 200,
    legSplashRange: 80,
    shadowElevation: 0.95,
    groundLayer: 75,
    hovering: true,
    lightColor: Color.valueOf("0000ff"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.5,
    update(unit){
        unit.healthMultiplier += 1/(1-Toxopid.DR)-1;
    }
});
Toxopid.constructor = () => extend(LegsUnit, {});
Toxopid.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Toxopid.DR
);
Toxopid.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Toxopid.weapons.add(
    extend(Weapon,{
        draw(unit, mount) {
            let Z = Draw.z();
            Draw.z(109);
            let rotation = unit.rotation;
            let centerX = unit.x + Angles.trnsx(rotation, 13);
            let centerY = unit.y + Angles.trnsy(rotation, 13);
            let orthoAngle = rotation + 90;
            let x1 = centerX + Angles.trnsx(orthoAngle, -3);
            let y1 = centerY + Angles.trnsy(orthoAngle, -3);
            let x2 = centerX + Angles.trnsx(orthoAngle, 3);
            let y2 = centerY + Angles.trnsy(orthoAngle, 3);
            let C = Math.floor(Math.random()*3);
            Draw.color(C == 0 ? Color.valueOf("ffffff") : C == 1 ? Pal.sapBullet : Pal.sapBulletBack);
            Lines.stroke(1);
            const segments = 5;
            let px = x1;
            let py = y1;
            for(let i = 1; i <= segments; i++){
                let t = i / segments;
                let nx = Mathf.lerp(x1, x2, t);
                let ny = Mathf.lerp(y1, y2, t);
                if(i < segments){
                    let dx = x2 - x1;
                    let dy = y2 - y1;
                    let len = Mathf.len(dx, dy);
                    if(len > 0){
                        dx /= len;
                        dy /= len;
                        let ox = -dy;
                        let oy = dx;
                        let offset = Mathf.range(1.5);
                        nx += ox * offset;
                        ny += oy * offset;
                    }
                }
                Lines.line(px, py, nx, ny);
                px = nx;
                py = ny;
            }
            Draw.z(Z);
        },
        x: 0,
        y: 0,
        shootY: 12,
        reload: 100,
        mirror: false,
        rotate: false,
        shoot: extend(ShootSpread,{
            shots: 13,
            spread: 8,
            shotDelay: 1
        }),
        shake: 1,
        shootSound: Sounds.explosionObviate,
        bullet: extend(BasicBulletType,5,660,{
            shootEffect: new MultiEffect(
                Fx.shootTitan,
                extend(WaveEffect,{
                    colorTo: Pal.sapBulletBack,
                    sizeTo: 26,
                    lifetime: 14,
                    strokeFrom: 4
                })
            ),
            smokeEffect: Fx.shootSmokeTitan,
            hitColor: Pal.sapBullet,
            despawnSound: Sounds.explosionArtilleryShock,
            sprite: "large-orb",
            trailEffect: Fx.missileTrail,
            trailInterval: 3,
            trailParam: 4,
            lifetime: 40,
            width: 15,
            height: 15,
            backColor: Pal.sapBulletBack,
            frontColor: Pal.sapBullet,
            shrinkX: 0,
            shrinkY: 0,
            trailColor: Pal.sapBulletBack,
            trailLength: 12,
            trailWidth: 2.2,
            despawnEffect: extend(ExplosionEffect, {
                waveColor: Pal.sapBullet,
                smokeColor: Color.gray,
                sparkColor: Pal.sap,
                waveStroke: 4,
                waveRad: 40
            }),
            hitEffect: extend(ExplosionEffect, {
                waveColor: Pal.sapBullet,
                smokeColor: Color.gray,
                sparkColor: Pal.sap,
                waveStroke: 4,
                waveRad: 40
            }),
            intervalBullet: extend(LightningBulletType,{
                damage: 30,
                collidesAir: true,
                ammoMultiplier: 1,
                lightningColor: Pal.sapBullet,
                lightningLength: 3,
                lightningLengthRand: 6,
                lightningType: extend(BulletType,0.0001, 0, {
                    lifetime: Fx.lightning.lifetime,
                    hitEffect: Fx.hitLancer,
                    despawnEffect: Fx.none,
                    status: StatusEffects.shocked,
                    statusDuration: 10,
                    hittable: false,
                    lightColor: Color.white,
                    buildingDamageMultiplier: 0.25
                })
            }),
            bulletInterval: 4,
            lightningColor: Pal.sapBullet,
            lightningDamage: 100,
            lightning: 3,
            lightningLength: 8,
            lightningLengthRand: 5
        })
    }),
    extend(Weapon,"destructionmod-Destructor_Large_Purple_Mount",{
        x: 11,
        y: -5,
        shootY: 7,
        reload: 20,
        shake: 4,
        rotateSpeed: 2,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootToxopidShotgun,
        shootSoundVolume: 0.8,
        rotate: true,
        shadow: 12,
        recoil: 3,
        shoot: extend(ShootSpread,3,20,{}),
        bullet: extend(ShrapnelBulletType,{
            length: 200,
            damage: 500,
            width: 25,
            serrationLenScl: 7,
            serrationSpaceOffset: 60,
            serrationFadeOffset: 0,
            serrations: 10,
            serrationWidth: 6,
            fromColor: Color.valueOf("ed655a"),
            toColor: Pal.sapBulletBack,
            shootEffect: Fx.sparkShoot,
            smokeEffect: Fx.sparkShoot,
            status: Destructed,
            statusDuration: 450,
        })
    }),
    extend(Weapon,"destructionmod-Destructor_Toxopid_Cannon",{
        x: 0,
        y: -14,
        shootY: 22,
        mirror: false,
        reload: 210,
        shake: 10,
        recoil: 10,
        rotateSpeed: 1.5,
        ejectEffect: Fx.casing3,
        shootSound: Sounds.shootArtillerySapBig,
        rotate: true,
        shadow: 30,
        rotationLimit: 80,
        bullet: extend(ArtilleryBulletType,10,500,"circle-bullet",{
            shrinkX: 0,
            shrinkY: 0,
            despawnSound: Sounds.explosionArtilleryShockBig,
            hitEffect: Fx.sapExplosion,
            knockback: 0.8,
            lifetime: 100,
            width: 50,
            height: 50,
            drag: 0.025,
            collidesTiles: true,
            collides: true,
            ammoMultiplier: 4,
            splashDamage: 600,
            splashDamageRadius: 140,
            backColor: Pal.sapBulletBack,
            frontColor: Pal.sapBullet,
            lightningColor: Pal.sapBullet,
            lightning: 10,
            lightningLength: 25,
            lightningDamage: 100,
            smokeEffect: Fx.shootBigSmoke2,
            hitShake: 10,
            lightRadius: 80,
            lightColor: Pal.sap,
            lightOpacity: 0.6,
            status: Destructed,
            statusDuration: 600,
            keepVelocity: false,
            reflectable: false,
            fragLifeMin: 1,
            fragVelocityMin: 1,
            fragVelocityMax: 1,
            fragRandomSpread: 0,
            fragAngle: 0,
            fragSpread: 360/8,
            fragBullets: 8,
            fragBullet: extend(ArtilleryBulletType, 0.1, 250, "circle-bullet", {
                despawnSound: Sounds.explosionArtilleryShockBig,
                hitEffect: Fx.sapExplosion,
                knockback: 0.8,
                lifetime: 60,
                width: 35,
                height: 35,
                drag: -0.085,
                shrinkX: 0,
                shrinkY: 0,
                collidesTiles: true,
                collides: true,
                splashDamage: 400,
                splashDamageRadius: 100,
                backColor: Pal.sapBulletBack,
                frontColor: Pal.sapBullet,
                lightningColor: Pal.sapBullet,
                lightning: 5,
                lightningLength: 10,
                lightningDamage: 80,
                hitShake: 5,
                lightRadius: 40,
                lightOpacity: 0.6,
                smokeEffect: Fx.shootBigSmoke2,
                status: Destructed,
                statusDuration: 300,
                reflectable: false,
                fragLifeMin: 0.3,
                fragBullets: 4,
                fragBullet: extend(ArtilleryBulletType, 2.3, 125, {
                    despawnSound: Sounds.explosionArtilleryShock,
                    hitEffect: Fx.sapExplosion,
                    knockback: 0.8,
                    lifetime: 90,
                    width: 20,
                    height: 20,
                    collidesTiles: false,
                    splashDamage: 200,
                    splashDamageRadius: 80,
                    backColor: Pal.sapBulletBack,
                    frontColor: Pal.sapBullet,
                    lightningColor: Pal.sapBullet,
                    lightning: 3,
                    lightningLength: 6,
                    lightningDamage: 60,
                    smokeEffect: Fx.shootBigSmoke2,
                    hitShake: 5,
                    lightRadius: 40,
                    lightOpacity: 0.6,
                    status: Destructed,
                    statusDuration: 180
                })
            })
        })
    }),
);
Toxopid.abilities.add(EffectedRegenAbility(1000));

const Mono = extend(UnitType, "Miner_Mono", {
    localizedName: "Miner Mono",
    defaultCommand: UnitCommand.mineCommand,
    flying: true,
    drag: 0.06,
    accel: 0.12,
    speed: 2,
    health: 740,
    engineSize: 1.8,
    engineOffset: 5.7,
    range: 80,
    isEnemy: false,
    controlSelectGlobal: false,
    wreckSoundVolume: 0.7,
    deathSoundVolume: 0.7,
    mineTier: 4,
    mineSpeed: 6,
    itemCapacity: 30,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 17.5,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 27.6,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.1,
    update(unit){
        unit.healthMultiplier += 1/(1-Mono.DR)-1;
    }
});
Mono.constructor = () => extend(UnitEntity, {});
Mono.aiController = () => extend(MinerAI, {});
Mono.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Mono.DR
);
Mono.immunities.addAll(StatusEffects.burning, StatusEffects.melting);

//Builder Poly
const Poly = extend(UnitType, "Builder_Poly", {
    localizedName: "Builder Poly",
    defaultCommand: UnitCommand.rebuildCommand,
    flying: true,
    drag: 0.05,
    speed: 3.2,
    rotateSpeed: 15,
    accel: 0.1,
    range: 130,
    health: 2000,
    buildSpeed: 3,
    engineOffset: 6.5,
    hitSize: 9,
    lowAltitude: true,
    wreckSoundVolume: 0.9,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 15,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 41.4,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.2,
    update(unit){
        unit.healthMultiplier += 1/(1-Poly.DR)-1;
    }
});
Poly.constructor = () => extend(UnitEntity, {});
Poly.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Poly.DR
);
Poly.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Poly.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Poly_Weapon",{
        top: false,
        y: -2.5,
        x: 3.75,
        reload: 40,
        ejectEffect: Fx.none,
        recoil: 1,
        shootSound: Sounds.shootMissilePlasmaShort,
        velocityRnd: 0.5,
        inaccuracy: 15,
        alternate: true,
        shoot: extend(ShootPattern,{
            shots: 3,
            shotDelay: 3.333
        }),
        bullet: extend(MissileBulletType, 4, 30,{
            homingPower: 0.08,
            weaveMag: 4,
            weaveScale: 4,
            lifetime: 50,
            scaleKeepVelocity: true,
            shootEffect: extend(Effect, 8, e => {
                Draw.color(Color.valueOf("ff80bd"));
                let w = 1 + 5 * e.fout();
                Drawf.tri(e.x, e.y, w, 17 * e.fout(), e.rotation);
                Drawf.tri(e.x, e.y, w, 4 * e.fout(), e.rotation + 180);
            },{}),
            smokeEffect: Fx.hitLaserColor,
            hitEffect: Fx.hitLaserColor,
            despawnEffect: Fx.hitLaserColor,
            hitColor: Color.valueOf("ff80bd"),
            frontColor: Color.valueOf("ffa8bd"),
            backColor: Color.valueOf("ff80bd"),
            hitSound: Sounds.none,
            healPercent: 5,
            collidesTeam: true,
            reflectable: false,
            trailColor: Color.valueOf("ff80bd"),
            healColor: Color.valueOf("ff80bd")
        })
    })
);
Poly.abilities.add(EffectedRegenAbility(125));

//Destructor Mega
const Mega = extend(UnitType, "Destructor_Mega",{
    localizedName: "Destructor Mega",
    health: 8460,
    armor: 30,
    speed: 2.6,
    accel: 0.06,
    drag: 0.017,
    lowAltitude: true,
    flying: true,
    engineOffset: 10.5,
    faceTarget: false,
    hitSize: 16.05,
    engineSize: 3,
    payloadCapacity: 2.2*2.2*Vars.tilePayload,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 20,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 73.83,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.3,
    update(unit){
        unit.healthMultiplier += 1/(1-Mega.DR)-1;
    }
});
Mega.constructor = () => extend(PayloadUnit, {});
Mega.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Mega.DR
);
Mega.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Mega.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Heal_Weapon_Mount",{
        shootSound: Sounds.shootLaser,
        reload: 36,
        x:8,
        y:-6,
        rotate: true,
        shoot: extend(ShootPattern, {
            shots: 8,
            shotDelay: 2
        }),
        bullet: extend(LaserBoltBulletType, 6, 30, {
            lifetime: 38,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.white,
            smokeEffect: Fx.hitLaserColor,
            hitEffect: Fx.hitLaserColor,
            despawnEffect: Fx.hitLaserColor,
            lightColor: Color.valueOf("ed655a"),
            hitColor: Color.valueOf("ed655a"),
            lightning: 2,
            lightningLength: 5,
            lightningLengthRand: 8,
            lightningColor: Color.valueOf("ed655a"),
            lightningDamage: 20
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Heal_Weapon_Mount",{
        shootSound: Sounds.shootLaser,
        reload: 60,
        x: 4,
        y: 5,
        rotate: true,
        shoot: extend(ShootSpread, {
            shots: 9,
            spread: 5
        }),
        bullet: extend(LaserBoltBulletType, 6, 60, {
            lifetime: 28,
            backColor: Color.valueOf("789aff"),
            frontColor: Color.white,
            smokeEffect: Fx.hitLaserColor,
            hitEffect: Fx.hitLaserColor,
            despawnEffect: Fx.hitLaserColor,
            lightColor: Color.valueOf("789aff"),
            hitColor: Color.valueOf("789aff"),
            lightning: 2,
            lightningLength: 5,
            lightningLengthRand: 8,
            lightningColor: Color.valueOf("789aff"),
            lightningDamage: 36
        })
    })
);
Mega.abilities.add(EffectedRegenAbility(250));

//Destructor Quad
const Quad = extend(UnitType, "Destructor_Quad", {
    localizedName: "Destructor Quad",
    armor: 50,
    health: 26000,
    speed: 1.4,
    rotateSpeed: 2.2,
    accel: 0.05,
    drag: 0.017,
    lowAltitude: false,
    flying: true,
    autoDropBombs: true,
    circleTarget: true,
    engineOffset: 13,
    engineSize: 7,
    faceTarget: false,
    hitSize: 36,
    payloadCapacity: 4*4 * Vars.tilePayload,
    range: 140,
    targetAir: false,
    targetFlags: [BlockFlag.battery, BlockFlag.factory, null],
    loopSound: Sounds.loopHover,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 40,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 165.6,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Quad.DR)-1;
    }
})
Quad.constructor = () => extend(PayloadUnit, {});
Quad.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Quad.DR
);
Quad.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Quad.weapons.add(
    extend(Weapon,{
        x: 0,
        y: 0,
        mirror: false,
        reload: 60,
        ignoreRotation: true,
        shootCone: 180,
        ejectEffect: Fx.none,
        minShootVelocity: 0.01,
        soundPitchMin: 1,
        shootSound: Sounds.shootQuad,
        bullet: extend(BasicBulletType, 0, 1000, "large-bomb", {
            width: 50,
            height: 50,
            maxRange: 50,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.white,
            mixColorTo: Color.white,
            hitSound: Sounds.explosionQuad,
            hitSoundVolume: 0.9,
            hitShake: 4,
            collidesAir: false,
            lifetime: 70,
            despawnEffect: extend(Effect,40, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 2);
                let circleRad = 4 + e.finpow() * 112;
                Lines.circle(e.x, e.y, circleRad);
                Draw.color(Color.valueOf("ed655a"));
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 8, 132 * e.fout(), i*90);
                }
                Draw.color();
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 4, 132/3 * e.fout(), i*90);
                }
                Drawf.light(e.x, e.y, circleRad * 1.6, Color.valueOf("ed655a"), e.fout());
            },{}),
            hitEffect: Fx.massiveExplosion,
            keepVelocity: false,
            spin: -4,
            shrinkX: 0.7,
            shrinkY: 0.7,
            collides: false,
            splashDamage: 200,
            splashDamageRadius: 112
        })
    }),
    extend(Weapon,{
        x: 0,
        y: 0,
        mirror: false,
        reload: 70,
        ignoreRotation: true,
        shootCone: 180,
        ejectEffect: Fx.none,
        minShootVelocity: 0.01,
        soundPitchMin: 1,
        shootSound: Sounds.shootQuad,
        bullet: extend(BasicBulletType, 0, 50, "large-bomb", {
            width: 50,
            height: 50,
            maxRange: 50,
            backColor: Color.valueOf("789aff"),
            frontColor: Color.white,
            mixColorTo: Color.white,
            hitSound: Sounds.explosionQuad,
            hitSoundVolume: 0.9,
            hitShake: 4,
            collidesAir: false,
            lifetime: 65,
            despawnEffect: extend(Effect,40, 100, e => {
                Draw.color(Color.valueOf("789aff"));
                Lines.stroke(e.fout() * 2);
                let circleRad = 4 + e.finpow() * 64;
                Lines.circle(e.x, e.y, circleRad);
                Draw.color(Color.valueOf("789aff"));
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 8, 84 * e.fout(), i*90);
                }
                Draw.color();
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 4, 84/3 * e.fout(), i*90);
                }
                Drawf.light(e.x, e.y, circleRad * 1.6, Color.valueOf("789aff"), e.fout());
            },{}),
            hitEffect: Fx.massiveExplosion,
            keepVelocity: false,
            spin: -4,
            shrinkX: 0.7,
            shrinkY: 0.7,
            collides: false,
            splashDamage: 800,
            splashDamageRadius: 64
        })
    }),
    extend(Weapon,{
        x: 0,
        y: 0,
        mirror: false,
        reload: 50,
        ignoreRotation: true,
        shootCone: 180,
        ejectEffect: Fx.none,
        minShootVelocity: 0.01,
        soundPitchMin: 1,
        shootSound: Sounds.shootQuad,
        bullet: extend(BasicBulletType, 0, 330*0.7, "large-bomb", {
            width: 50,
            height: 50,
            maxRange: 50,
            backColor: Pal.heal,
            frontColor: Color.white,
            mixColorTo: Color.white,
            hitSound: Sounds.explosionQuad,
            hitSoundVolume: 0.9,
            hitShake: 4,
            collidesAir: false,
            lifetime: 75,
            despawnEffect: extend(Effect,40, 100, e => {
                Draw.color(Pal.heal);
                Lines.stroke(e.fout() * 2);
                let circleRad = 4 + e.finpow() * 160;
                Lines.circle(e.x, e.y, circleRad);
                Draw.color(Pal.heal);
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 8, 180 * e.fout(), i*90);
                }
                Draw.color();
                for(let i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 4, 180/3 * e.fout(), i*90);
                }
                Drawf.light(e.x, e.y, circleRad * 1.6, Pal.heal, e.fout());
            },{}),
            hitEffect: Fx.massiveExplosion,
            keepVelocity: false,
            spin: -4,
            shrinkX: 0.7,
            shrinkY: 0.7,
            collides: false,
            splashDamage: 400,
            splashDamageRadius: 160
        })
    })
);
Quad.abilities.add(EffectedRegenAbility(500));

//Patron Oct
const Oct = extend(UnitType, "Patron_Oct", {
    localizedName: "Patron Oct",
    armor: 100,
    health: 74000,
    speed: 1,
    rotateSpeed: 1,
    accel: 0.04,
    drag: 0.018,
    flying: true,
    engineOffset: 46,
    engineSize: 7.8,
    faceTarget: false,
    hitSize: 66,
    payloadCapacity: 6*6*Vars.tilePayload,
    buildSpeed: 8,
    drawShilds: false,
    lowAltitude: true,
    buildBeamOffset: 43,
    ammoCapacity: 1,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 50,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 303.6,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.75,
    update(unit){
        unit.healthMultiplier += 1/(1-Oct.DR)-1;
    }
});
Oct.constructor = () => extend(PayloadUnit, {});
Oct.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Oct.DR
);
Oct.aiController = () => extend(DefenderAI, {});
Oct.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Oct.abilities.add(
    ForceFieldAbility(200,1000/60,25000,900,10,0),
    EffectedRegenAbility(1000)
);

//Destructor Risso
const Risso = extend(UnitType, "Destructor_Risso",{
    localizedName: "Destructor Risso",
    speed: 1.2,
    drag: 0.13,
    hitSize: 10,
    health: 920,
    armor: 10,
    accel: 0.4,
    rotateSpeed: 4,
    faceTarget: false,
    trailLength: 20,
    waveTrailX: 4,
    trailScl: 1.3,
    moveSoundVolume: 0.4,
    moveSound: Sounds.shipMove,
    lightColor: Color.valueOf("ff0000"),
    lightRadius: 46,
    lightOpacity: 1,
    DR: 0.1,
    update(unit){
        unit.healthMultiplier += 1/(1-Risso.DR)-1;
    }
});
Risso.constructor = () => extend(UnitWaterMove, {});
Risso.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Risso.DR
);
Risso.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Risso.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Mount_Weapon",{
        reload: 10,
        x: 4,
        shootY: 4,
        y: 1.5,
        rotate: true,
        ejectEffect: Fx.casing1,
        bullet: extend(BasicBulletType, 3, 30,{
            width: 7,
            height: 9,
            pierce: true,
            pierceBuilding: true,
            pierceCap: 2,
            lifetime: 60,
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Missile_Mount", {
        mirror: false,
        reload: 10,
        x: 0,
        y: -5,
        rotate: true,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootMissileShort,
        bullet: extend(MissileBulletType, 3, 45, "missile", {
            keepVelocity: true,
            width: 8,
            height: 8,
            shrinkY: 0,
            drag: -0.003,
            homingRange: 60,
            splashDamageRadius: 25,
            splashDamage: 50,
            lifetime: 65,
            trailColor: Color.gray,
            backColor: Pal.bulletYellowBack,
            frontColor: Pal.bulletYellow,
            hitEffect: Fx.blastExplosion,
            despawnEffect: Fx.blastExplosion,
            weaveScale: 8,
            weaveMag: 2
        })
    })
);
Risso.abilities.add(EffectedRegenAbility(62.5));

//Destructor Minke
const Minke = extend(UnitType, "Destructor_Minke", {
    localizedName: "Destructor Minke",
    health: 2200,
    speed: 1,
    drag: 0.15,
    hitSize: 13,
    armor: 4,
    accel: 0.3,
    rotateSpeed: 2.6,
    faceTarget: false,
    moveSound: Sounds.shipMove,
    moveSoundVolume: 0.55,
    moveSoundPitchMin: 0.9,
    moveSoundPitchMax: 0.9,
    trailLength: 20,
    waveTrailX: 5.5,
    waveTrailY: -4,
    trailScl: 1.9,
    lightColor: Color.valueOf("ff0000"),
    lightRadius: 59.8,
    lightOpacity: 1,
    DR: 0.2,
    update(unit){
        unit.healthMultiplier += 1/(1-Minke.DR)-1;
    }
});
Minke.constructor = () => extend(UnitWaterMove, {});
Minke.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Minke.DR
);
Minke.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Minke.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Mount_Weapon",{
        reload: 8,
        x: 5,
        y: 3.5,
        rotate: true,
        rotateSpeed: 5,
        inaccuracy: 6,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootDuo,
        bullet: extend(FlakBulletType, 5, 20, {
            lifetime: 45,
            shootEffect: Fx.shootSmall,
            width: 6,
            height: 8,
            hitEffect: Fx.flakExplosion,
            splashDamage: 55,
            splashDamageRadius: 24
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Artillery_Mount", {
        reload: 30,
        x: 5,
        y: -5,
        rotate: true,
        inaccuracy: 10,
        rotateSpeed: 2,
        shake: 1.5,
        ejectEffect: Fx.casing2,
        shootSound: Sounds.shootArtillerySmall,
        velocityRnd: -0.25,
        shoot: extend(ShootPattern,{
            shots: 3
        }),
        bullet: extend(ArtilleryBulletType, 4, 66, "shell",{
            hitEffect: Fx.flakExplosion,
            knockback: 0.8,
            lifetime: 60,
            width: 12.5,
            height: 12.5,
            collidesTiles: false,
            splashDamageRadius: 40,
            splashDamage: 66,
            homingPower: 0.08,
            homingRange: 60
        })
    })
);
Minke.abilities.add(EffectedRegenAbility(125));

//Destructor Bryde
const Bryde = extend(UnitType, "Destructor_Bryde", {
    localizedName: "Destructor Bryde",
    health: 8910,
    speed: 0.9,
    accel: 0.2,
    rotateSpeed: 2,
    drag: 0.17,
    hitSize: 20,
    armor: 30,
    faceTarget: false,
    moveSoundVolume: 0.7,
    moveSoundPitchMin: 0.77,
    moveSoundPitchMax: 0.77,
    moveSound: Sounds.shipMove,
    traillength: 22,
    waveTrailX: 7,
    waveTrailY: -9,
    trailScl: 1.5,
    lightRadius: 303.6,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    DR: 0.3,
    update(unit){
        unit.healthMultiplier += 1/(1-Bryde.DR)-1;
    }
});
Bryde.constructor = () => extend(UnitWaterMove, {});
Bryde.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Bryde.DR
);
Bryde.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Bryde.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Missile_Mount", {
        reload: 8,
        x: 8.5,
        y: -9,
        shadow: 6,
        rotateSpeed: 5,
        rotate: true,
        shoot: extend(ShootPattern, {
            shots: 2
        }),
        inaccuracy: 5,
        velocityRnd: 0.1,
        shootSound: Sounds.shootMissile,
        ejectEffect: Fx.none,
        bullet: extend(MissileBulletType, 3, 50, {
            width: 8,
            height: 8,
            shrinkY: 0,
            drag: -0.003,
            homingRange: 60,
            keepVelocity: false,
            splashDamage: 50,
            splashDamageRadius: 24,
            lifetime: 80,
            trailColor: Color.gray,
            backColor: Pal.bulletYellowBack,
            frontColor: Pal.bulletYellow,
            hitEffect: Fx.blastExplosion,
            despawnEffect: Fx.blastExplosion,
            weaveScale: 8,
            weaveMag: 1
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Large_Artillery", {
        reload: 56.25,
        cooldownTime: 50,
        mirror: false,
        x:0,
        y:-3.5,
        rotateSpeed: 2,
        rotate: true,
        shootY: 7,
        shake: 3,
        recoil: 4,
        shadow: 12,
        shootSound: Sounds.shootOmura,
        ejectEffect: Fx.none,
        shoot: extend(ShootPattern, {
            shots: 3,
            shotDelay: 12.5
        }),
        bullet: extend(RailBulletType, {
            shootEffect: Fx.railShoot,
            length: 260,
            pointEffectSpace: 40,
            pierceEffect: Fx.railHit,
            pointEffect: Fx.railTrail,
            hitEffect: Fx.massiveExplosion,
            smokeEffect: Fx.shootBig2,
            damage: 500,
            pierceDamageFactor: 0.22
        })
    })
);
Bryde.abilities.add(
    EffectedRegenAbility(250),
    ShieldRegenFieldAbility(50, 1000, 30, 60)
);

//Destructor Sei
const Sei = extend(UnitType, "Destructor_Sei",{
    localizedName: "Destructor Sei",
    health: 31000,
    armor: 50,
    speed: 0.82,
    drag: 0.17,
    hitSize: 39,
    accel: 0.2,
    rotateSpeed: 1.42,
    faceTarget: false,
    moveSoundVolume: 1,
    moveSound: Sounds.shipMoveBig,
    moveSoundPitchMin: 0.95,
    moveSoundPitchMax: 0.95,
    trailLength: 50,
    waveTrailX: 18,
    waveTrailY: -21,
    trailScl: 3,
    lightRadius: 179.4,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Sei.DR)-1;
    }
});
Sei.constructor = () => extend(UnitWaterMove, {});
Sei.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Sei.DR
);
Sei.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Sei.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Large_Bullet_Mount",{
        reload: 18,
        cooldown: 60,
        x: 70/4,
        y: -66/4,
        rotateSpeed: 4.5,
        rotate: true,
        shootY:7,
        shake: 2,
        recoil: 3,
        shadow: 12,
        ejectEffect: Fx.casing3,
        shootSound: Sounds.shootSpectre,
        shoot: extend(ShootPattern,{
            shots: 3,
            shotDelay: 6
        }),
        inaccuracy: 1,
        bullet: extend(BasicBulletType, 8,120, {
            width: 14,
            height: 20,
            shootEffect: Fx.shootBig,
            lifetime: 36,
            pierce: true,
            pierceBuilding: true,
            pierceCap: 2
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Sei_Launcher",{
        x: 0,
        y: 0,
        rotate: true,
        rotateSpeed: 5,
        mirror: false,
        shadow: 20,
        shootY: 4.5,
        recoil: 4,
        reload: 60,
        inaccuracy: 0,
        ejectEffect: Fx.none,
        shake: 1,
        shootSound: Sounds.shootMissileLong,
        shoot: extend(ShootAlternate,{
            shots: 6,
            shotDelay: 0,
            spread: 2.5,
            barrels: 6
        }),
        bullet: extend(MissileBulletType, 1,100, {
            homingPower: 0,
            homingRange: 0,
            pierce: true,
            pierceCap: 5,
            pierceBuilding: true,
            width: 14,
            height: 14,
            shrinkX: 0,
            shrinkY: 0,
            drag: -0.075,
            keepVelocity: false,
            splashDamageRadius: 40,
            splashDamage: 60,
            lifetime: 45,
            trailColor: Pal.blastAmmoBack,
            backColor: Pal.blastAmmoBack,
            frontColor: Pal.blastAmmoFront,
            hitEffect: Fx.blastExplosion,
            weaveScale: 0,
            weaveMag: 0
        })
    })
);
Sei.abilities.add(EffectedRegenAbility(500));

//Destructor Omura
const Omura = extend(UnitType, "Destructor_Omura", {
    localizedName: "Destructor Omura",
    health: 72000,
    speed: 0.7,
    drag: 0.18,
    hitSize: 58,
    armor: 100,
    accel: 0.19,
    rotateSpeed: 1.1,
    faceTarget: false,
    trailLength: 70,
    waveTrailX: 23,
    waveTrailY: -32,
    trailScl: 3.5,
    moveSoundVolume: 1.1,
    moveSound: Sounds.shipMoveBig,
    moveSoundPitchMin: 0.9,
    moveSoundPitchMax: 0.9,
    lightRadius: 266.8,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.5,
    update(unit){
        unit.healthMultiplier += 1/(1-Omura.DR)-1;
    }
});
Omura.constructor = () => extend(UnitWaterMove, {});
Omura.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Omura.DR
);
Omura.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Omura.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Large_Artillery", {
        y: -18,
        x: 18,
        reload: 4,
        recoil: 0.33,
        rotateSpeed: 8,
        rotate: true,
        shootSound: Sounds.shootSpectre,
        inaccuracy: 1.5,
        controllable: false,
        autoTarget: true,
        targetInterval: 0,
        targetSwitchInterval: 1,
        bullet: extend(BasicBulletType,12,200, {
            reflectable: false,
            width: 16,
            height: 23,
            lifetime: 16,
            shootEffect: Fx.shootBig,
            pierceCap: 2,
            pierceBuilding: true,
            knockback: 0.7
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Large_Artillery", {
        y: 20,
        x: 12,
        reload: 4,
        recoil: 0.33,
        rotateSpeed: 8,
        rotate: true,
        shootSound: Sounds.shootSpectre,
        inaccuracy: 1.5,
        controllable: false,
        autoTarget: true,
        bullet: extend(BasicBulletType,12,200, {
            reflectable: false,
            width: 16,
            height: 23,
            lifetime: 16,
            shootEffect: Fx.shootBig,
            pierceCap: 2,
            pierceBuilding: true,
            knockback: 0.7
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Big_Missile", {
        x: 22,
        y: 2,
        reload: 20,
        recoil: 1.2,
        rotateSpeed: 2,
        rotate: true,
        shootSound: Sounds.shootMissileLong,
        inaccuracy: 15,
        shoot: extend(ShootPattern, {
            shots: 2,
            shotDelay: 7.5
        }),
        bullet: extend(MissileBulletType, {
            reflectable: false,
            speed: 6,
            damage: 500,
            homingPower: 0.07,
            homingRange: 100,
            sprite: "missile-large",
            width: 14,
            height: 14,
            shrinkY: 0,
            drag: -0.003,
            keepVelocity: false,
            splashDamage: 300,
            splashDamageRadius: 40,
            lifetime: 60,
            trailColor: Color.valueOf("d06b53"),
            backColor: Color.valueOf("d06b53"),
            frontColor: Color.valueOf("ffa665"),
            hitEffect: Fx.blastExplosion,
            despawnEffect: Fx.blastExplosion,
            weaveScale: 8,
            weaveMag: 3,
            status: StatusEffects.blasted,
            statusDuration: 300,
        })
    })
);
Omura.weapons.add(
    extend(Weapon, {
        draw(unit, mount){
            let Z = Draw.z();
            Draw.z(109);
            let rotation = unit.rotation - 90,
            realRecoil = Mathf.pow(mount.recoil, this.recoilPow) * this.recoil,
            weaponRotation  = rotation + (this.rotate ? mount.rotation : this.baseRotation),
            wx = unit.x + Angles.trnsx(rotation, this.x, this.y) + Angles.trnsx(weaponRotation, 0, -realRecoil),
            wy = unit.y + Angles.trnsy(rotation, this.x, this.y) + Angles.trnsy(weaponRotation, 0, -realRecoil);
            Draw.color(Color.valueOf("ed655a"));
            for(let i = 0; i < 4; i++){
                Drawf.tri(wx, wy, 5, 15, i*90+Time.time);
            }
            Fill.circle(wx, wy, 5.5);
            Draw.color();
            Fill.circle(wx, wy, 3.5);
            Draw.z(Z);
        },
        reload: 200,
        cooldownTime: 90,
        mirror: false,
        x: 0,
        y: -3.5,
        rotateSpeed: 5,
        rotate: true,
        shootY: 0,
        shake: 2,
        recoil: 0,
        shootSound: Sounds.shootOmura,
        shoot: extend(ShootSpread, {
            shots: 24,
            spread: 360/24,
            shotDelay: 200/24
        }),
        bullet: extend(RailBulletType, {
            length: 300,
            damage: 2500,
            pierceDamageFactor: 0,
            pointEffectSpace: 40,
            status: Destructed,
            statusDuration: 450,
            shootEffect: extend(Effect, 24, e => {
                e.scaled(10, b => {
                    Draw.color(Color.red, Color.lightGray, b.fin());
                    Lines.stroke(b.fout() * 3 + 0.2);
                    Lines.circle(b.x, b.y, b.fin() * 50);
                });
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation + 90);
                Drawf.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation - 90);
            }, {followParent: true, rotWithParent: true}),
            pointEffect: extend(Effect, 16, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 10 * e.fout(), 24, e.rotation + 180);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 24, e.rotation);
                Drawf.light(e.x, e.y, 60 * e.fout(), Color.valueOf("ed655a"), 0.5);
            }, {followParent: true, rotWithParent: true}),
            pierceEffect: extend(Effect, 18, 200, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation + 140);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation - 140);
            }, {followParent: true, rotWithParent: true}),
            hitEffect: extend(Effect, 30, e => {
                Draw.color(Color.valueOf("ed655a"));
                e.scaled(7, i => {
                    Lines.stroke(3 * i.fout());
                    Lines.circle(e.x, e.y, 4 + i.fin() * 30);
                });
                Draw.color(Color.gray);
                Angles.randLenVectors(e.id, 8, 2 + 30 * e.finpow(), (x, y) => {
                    Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                });
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout());
                Angles.randLenVectors(e.id + 1, 6, 1 + 29 * e.finpow(), (x, y) => {
                    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 4);
                });
                Drawf.light(e.x, e.y, 50, Color.valueOf("ed655a"), 0.8 * e.fout());
            }, {followParent: true, rotWithParent: true})
        })
        
    }),
    extend(Weapon, "destructionmod-Destructor_Omura_Cannon", {
        reload: 40,
        cooldownTime: 90,
        mirror: false,
        x: 0,
        y: -3.5,
        rotateSpeed: 1.7,
        rotate: true,
        shootY: 23,
        shake: 6,
        recoil: 10.5,
        shadow: 50,
        shootSound: Vars.tree.loadSound("railgun_D"),
        ejectEffect: Fx.none,
        heatColor: Color.red,
        shoot: extend(ShootPattern, {
            shots: 3,
            shotDelay: 6
        }),
        bullet: extend(RailBulletType, {
            length: 544,
            damage: 1250,
            pierceDamageFactor: 0.1,
            pointEffectSpace: 44,
            smokeEffect: Fx.shootBig2,
            status: Destructed,
            statusDuration: 450,
            shootEffect: extend(Effect, 24, e => {
                e.scaled(10, b => {
                    Draw.color(Color.red, Color.lightGray, b.fin());
                    Lines.stroke(b.fout() * 3 + 0.2);
                    Lines.circle(b.x, b.y, b.fin() * 50);
                });
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation + 90);
                Drawf.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation - 90);
            }, {followParent: true, rotWithParent: true}),
            pointEffect: extend(Effect, 16, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 12.5 * e.fout(), 25, e.rotation + 180);
                Drawf.tri(e.x, e.y, 12.5 * e.fout(), 25, e.rotation);
                Drawf.light(e.x, e.y, 60 * e.fout(), Color.valueOf("ed655a"), 0.5);
            }, {followParent: true, rotWithParent: true}),
            pierceEffect: extend(Effect, 18, 200, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation + 140);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation - 140);
            }, {followParent: true, rotWithParent: true}),
            hitEffect: extend(Effect, 30, e => {
                Draw.color(Color.valueOf("ed655a"));
                e.scaled(7, i => {
                    Lines.stroke(3 * i.fout());
                    Lines.circle(e.x, e.y, 4 + i.fin() * 30);
                });
                Draw.color(Color.gray);
                Angles.randLenVectors(e.id, 8, 2 + 30 * e.finpow(), (x, y) => {
                    Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
                });
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout());
                Angles.randLenVectors(e.id + 1, 6, 1 + 29 * e.finpow(), (x, y) => {
                    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 4);
                });
                Drawf.light(e.x, e.y, 50, Color.valueOf("ed655a"), 0.8 * e.fout());
            }, {followParent: true, rotWithParent: true})
        })
    })
);
Omura.abilities.add(EffectedRegenAbility(1000));

//Destructor Retusa
const Retusa = extend(UnitType, "Destructor_Retusa", {
    localizedName: "Destructor Retusa",
    speed: 1,
    drag: 0.14,
    hitSize: 11,
    health: 910,
    accel: 0.4,
    rotateSpeed: 5.5,
    trailLength: 20,
    waveTrailX: 5,
    trailScl: 1.3,
    faceTarget: false,
    range: 120,
    armor: 10,
    moveSoundVolume: 0.4,
    moveSound: Sounds.shipMove,
    lightRadius: 50.6,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.1,
    update(unit){
        unit.healthMultiplier += 1/(1-Retusa.DR)-1;
    }
});
Retusa.constructor = () => extend(UnitWaterMove, {});
Retusa.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Retusa.DR
);
Retusa.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Retusa.weapons.add(
    extend(Weapon, "destructionmod-Repair_Beam_Weapon_Center", {
        shootSound: Sounds.shootLaser,
        x: 0,
        y: -5.5,
        shootY: 6,
        mirror: false,
        reload: 30,
        rotate: true,
        ignoreRotation: true,
        shoot: extend(ShootSpread, {
            shots: 16,
            spread: 360/16,
            shotDelay: 30/16
        }),
        bullet: extend(LaserBoltBulletType, 5.2, 30, {
            lifetime: 20,
            backColor: Color.valueOf("789aff"),
            frontColor: Color.white,
            smokeEffect: Fx.hitLaserColor,
            hitEffect: Fx.hitLaserColor,
            despawnEffect: Fx.hitLaserColor,
            lightColor: Color.valueOf("789aff"),
            hitColor: Color.valueOf("789aff")
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Heal_Weapon_Mount",{
        shootSound: Sounds.shootLaser,
        reload: 30,
        x: 4.5,
        y: -3.5,
        rotateSpeed: 5,
        mirror: true,
        rotate: true,
        shoot: extend(ShootPattern, {
            shots: 3,
            shotDelay: 3
        }),
        bullet: extend(LaserBoltBulletType, 5.4, 30, {
            lifetime: 30,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.white,
            smokeEffect: Fx.hitLaserColor,
            hitEffect: Fx.hitLaserColor,
            despawnEffect: Fx.hitLaserColor,
            lightColor: Color.valueOf("ed655a"),
            hitColor: Color.valueOf("ed655a")
        })
    }),
    extend(Weapon, {
            mirror: false,
            rotate: true,
            reload: 90,
            x: 0,
            y: 0,
            shootX: 0,
            shootY: 0,
            shootSound: Sounds.shootRetusa,
            rotateSpeed: 180,
            shootSoundVolume: 0.9,
            shoot: extend(ShootPattern, {
                shots: 3,
                shotDelay: 7
            }),
            ignoreRotation: true,
            bullet: extend(BasicBulletType,{
                sprite: "mine-bullet",
                width: 8,
                height: 8,
                layer: Layer.scorch,
                shootEffect: Fx.none,
                smokeEffect: Fx.none,
                maxRange: 50,
                backColor: Color.valueOf("ed655a"),
                frontColor: Color.white,
                mixColorTo: Color.white,
                hitSound: Sounds.explosionPlasmaSmall,
                underwater: true,
                ejectEffect: Fx.none,
                hitSize: 22,
                collidesAir: false,
                lifetime: 87,
                hitEffect: new MultiEffect(
                    Fx.blastExplosion, 
                    extend(Effect, 80, e => {
                        Draw.color(Color.valueOf("ed655a"));
                        Angles.randLenVectors(e.id, 7, 9 * e.fin(), (x, y, fin, fout) => {
                            Fill.circle(e.x + x, e.y + y, 5 * fout);
                        });
                    },{})
                ),
                keepVelocity: false,
                shrinkX: 0,
                shrinkY: 0,
                inaccuracy: 2,
                weaveMag: 5,
                weaveScale: 4,
                speed: 0.7,
                drag: -0.017,
                homingPower: 0.05,
                collideFloor: true,
                trailColor: Color.valueOf("ed655a"),
                trailWidth: 3,
                trailLength: 8,
                splashDamage: 50,
                splashDamageRadius: 32
            })
        })
);
Retusa.abilities.add(EffectedRegenAbility(62.5));

//Destructor Oxynoe
const Oxynoe = extend(UnitType, "Destructor_Oxynoe", {
    localizedName: "Destructor Oxynoe",
    health: 2160,
    speed: 0.83,
    drag: 0.14,
    hitSize: 14,
    armor: 20,
    accel: 0.4,
    rotateSpeed: 5,
    faceTarget: false,
    moveSoundVolume: 0.55,
    moveSoundPitchMax: 0.9,
    moveSoundPitchMin: 0.9,
    moveSound: Sounds.shipMove,
    trailLength: 22,
    waveTrailX: 5.5,
    waveTrailY: -4,
    trailScl: 1.9,
    lightRadius: 64.4,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.2,
    update(unit){
        unit.healthMultiplier += 1/(1-Oxynoe.DR)-1;
    }
});
Oxynoe.constructor = () => extend(UnitWaterMove, {});
Oxynoe.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Oxynoe.DR
);
Oxynoe.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Oxynoe.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Plasma_Mount_Weapon", {
        reload: 5,
        x: 4.5,
        y: 6.5,
        rotate: true,
        rotateSpeed: 5,
        inaccuracy: 10,
        ejectEffect: Fx.casing1,
        shootSound: Sounds.shootFlamePlasma,
        shootSoundVolume: 0.9,
        shootCone: 30,
        bullet: extend(BulletType, 8, 120, {
            hitSize: 7,
            lifetime: 12,
            pirce: true,
            pierceBuilding: true,
            pierceCap: 3,
            statusDuration: 300,
            shootEffect: extend(Effect, 32, 80, e=>{
                Draw.color(Color.valueOf("ff968a"), Color.valueOf("ed655a"), Color.gray, e.fin());

                Angles.randLenVectors(e.id, 18, e.finpow() * 100, e.rotation, 10, (x, y) => {
                    Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
                });
            },{followParent:false}),
            hitEffect: extend(Effect,14, e => {
                Draw.color(Color.valueOf("ffffff"), Color.valueOf("ed655a"), e.fin());
                Lines.stroke(0.5 + e.fout());

                Angles.randLenVectors(e.id, 2, 1 + e.fin() * 15, e.rotation, 50, (x, y) => {
                    let ang = Mathf.angle(x, y);
                    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 3 + 1);
                });
            },{}),
            despawnEffect: Fx.none,
            status: StatusEffects.burning,
            keepVelocity: false,
            hittable: false
        })
    }),
    extend(PointDefenseWeapon, "destructionmod-Destructor_Point_Defense_Mount", {
        mirror: false,
        x: 0,
        y: -1,
        reload: 8,
        targetInterval: 10,
        targetSwitchInterval: 15,
        bullet: extend(BulletType, {
            shootEffect: Fx.sparkShoot,
            hitEffect: Fx.pointHit,
            maxRange: 140,
            damage: 24
        })
    })
);
Oxynoe.abilities.add(EffectedRegenAbility(125));

//Destructor Cyerce
const Cyerce = extend(UnitType, "Destructor_Cyerce",{
    localizedName: "Destructor Cyerce",
    health: 8870,
    speed: 0.9,
    accel: 0.22,
    rotateSpeed: 2.8,
    drag: 0.16,
    hitSize: 20,
    armor: 30,
    faceTarget: false,
    moveSoundVolume: 0.7,
    moveSoundPitchMin: 0.77, 
    moveSoundPitchMax: 0.77,
    moveSound: Sounds.shipMove,
    trailLength: 23,
    waveTrailX: 9,
    waveTrailY: -9,
    trailScl: 2,
    lightRadius: 92,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    DR: 0.3,
    update(unit){
        unit.healthMultiplier += 1/(1-Cyerce.DR)-1;
    }
});
Cyerce.constructor = () => extend(UnitWaterMove, {});
Cyerce.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Cyerce.DR
);
Cyerce.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Cyerce.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Repair_Beam_Weapon_Center", {
        x: 11,
        y: -10,
        shootY: 6,
        rotate: true,
        rotateSpeed: 5,
        reload: 12,
        bullet: extend(MissileBulletType, 4, 40, {
            homingPower: 0.5,
            weaveMag: 4,
            weaveScale: 4,
            lifetime: 60,
            keepVelocity: false,
            shootEffect: extend(Effect, 8, e => {
                Draw.color(Color.valueOf("ed655a"));
                let w = 1 + 5 * e.fout();
                Drawf.tri(e.x, e.y, w, 17 * e.fout(), e.rotation);
                Drawf.tri(e.x, e.y, w, 4 * e.fout(), e.rotation + 180);
            },{}),
            smokeEffect: Fx.hitLaser,
            splashDamage: 40,
            splashDamageRadius: 30,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.valueOf("ff9999"),
            hitSound: Sounds.none,
            lightColor: Color.valueOf("ed655a"),
            lightRadius: 40,
            lightOpacity: 0.7,
            trailColor: Color.valueOf("ed655a"),
            trailWidht: 2.5,
            trailLength: 20,
            trailChance: -1,
            despawnEffect: Fx.none,
            hitEffect: extend(ExplosionEffect,{
                lifetime: 20,
                waveStroke: 2,
                waveColor: Color.valueOf("ed655a"),
                waveRad: 12,
                smokeSize: 0,
                smokeSizeBase: 0,
                sparkColor: Color.valueOf("ed655a"),
                sparks: 9,
                sparkRad: 35,
                sparkStroke: 1.5,
                sparkLen: 4
            })
        })
    }),
    extend(Weapon, "destructionmod-Destructor_Plasma_Missile_Mount", {
        reload: 55,
        x: 9,
        y: 3,
        shadow: 5,
        rotateSpeed: 5,
        rotate: true,
        inaccuracy: 1,
        velocityRnd: 0.1,
        shootSound: Sounds.shootMissilePlasma,
        ejectEffect: Fx.none,
        bullet: extend(FlakBulletType, 2.7, 80, {
            sprite: "missile-large",
            collidesGround: true,
            collidesAir: true,
            explodeRange: 50,
            width: 12,
            height: 12,
            shrinkY: 0,
            drag: -0.003,
            homingRange: 60,
            keepVelocity: false,
            lightRadius: 60,
            lightOpacity: 0.7,
            lightColor: Color.valueOf("ed655a"),
            despawnSound: Sounds.explosion,
            splashDamage: 80,
            splashDamageRadius: 40,
            lifetime: 80,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.valueOf("ff9999"),
            hitEffect: extend(ExplosionEffect,{
                lifetime: 28,
                waveStroke: 6,
                waveLife: 10,
                waveRadBase: 7,
                waveColor: Color.valueOf("ed655a"),
                waveRad: 30,
                smokes: 6,
                smokeColor: Color.white,
                sparkColor: Color.valueOf("ed655a"),
                sparks: 6,
                sparkRad: 35,
                sparkStroke: 1.5,
                sparkLen: 4
            }),
            weaveScale: 8,
            weaveMag: 1,
            trailColor: Color.valueOf("ed655a"),
            trailWidth: 4.5,
            trailLength: 29,
            fragBullets: 3,
            fragVelocityMin:0.5,
            fragBullet: extend(FlakBulletType,2.5, 60, {
                sprite: "missile-large",
                collidesGround: true,
                collidesAir: true,
                explodeRange: 50,
                width: 12,
                height: 12,
                shrinkY: 0,
                drag: -0.003,
                homingRange: 60,
                keepVelocity: false,
                lightRadius: 60,
                lightOpacity: 0.7,
                lightColor: Color.valueOf("ed655a"),
                despawnSound: Sounds.explosion,
                splashDamage: 60,
                splashDamageRadius: 40,
                lifetime: 40,
                backColor: Color.valueOf("ed655a"),
                frontColor: Color.valueOf("ff9999"),
                hitEffect: extend(ExplosionEffect,{
                    lifetime: 28,
                    waveStroke: 6,
                    waveLife: 10,
                    waveRadBase: 7,
                    waveColor: Color.valueOf("ed655a"),
                    waveRad: 30,
                    smokes: 6,
                    smokeColor: Color.white,
                    sparkColor: Color.valueOf("ed655a"),
                    sparks: 6,
                    sparkRad: 35,
                    sparkStroke: 1.5,
                    sparkLen: 4
                }),
                weaveScale: 8,
                weaveMag: 1,
                trailColor: Color.valueOf("ed655a"),
                trailWidth: 4.5,
                trailLength: 29,
                fragBullets: 8,
                fragVelocityMin:0.5,
                fragBullet: extend(MissileBulletType, 4, 40, {
                    homingPower: 0.5,
                    weaveMag: 4,
                    weaveScale: 4,
                    lifetime: 60,
                    keepVelocity: false,
                    shootEffect: extend(Effect, 8, e => {
                        Draw.color(Color.valueOf("ed655a"));
                        let w = 1 + 5 * e.fout();
                        Drawf.tri(e.x, e.y, w, 17 * e.fout(), e.rotation);
                        Drawf.tri(e.x, e.y, w, 4 * e.fout(), e.rotation + 180);
                    },{}),
                    smokeEffect: Fx.hitLaser,
                    splashDamage: 40,
                    splashDamageRadius: 30,
                    backColor: Color.valueOf("ed655a"),
                    frontColor: Color.valueOf("ff9999"),
                    hitSound: Sounds.none,
                    lightColor: Color.valueOf("ed655a"),
                    lightRadius: 40,
                    lightOpacity: 0.7,
                    trailColor: Color.valueOf("ed655a"),
                    trailWidht: 2.5,
                    trailLength: 20,
                    trailChance: -1,
                    despawnEffect: Fx.none,
                    hitEffect: extend(ExplosionEffect,{
                        lifetime: 20,
                        waveStroke: 2,
                        waveColor: Color.valueOf("ed655a"),
                        waveRad: 12,
                        smokeSize: 0,
                        smokeSizeBase: 0,
                        sparkColor: Color.valueOf("ed655a"),
                        sparks: 9,
                        sparkRad: 35,
                        sparkStroke: 1.5,
                        sparkLen: 4
                    })
                })
            })
        })
    })
);
Cyerce.abilities.add(EffectedRegenAbility(250));

//Destructor Aegires
const Aegires = extend(UnitType, "Destructor_Aegires", {
    localizedName: "Destructor Aegires",
    health: 32000,
    armor: 50,
    speed: 0.81,
    drag: 0.17,
    hitSize: 44,
    accel: 0.2,
    rotateSpeed: 1.6,
    faceTarget: false,
    moveSoundVolume: 1,
    moveSound: Sounds.shipMoveBig,
    moveSoundPitchMin: 0.95,
    moveSoundPitchMax: 0.95,
    clipSize: 250,
    trailLength: 50,
    waveTrailX: 18,
    waveTrailY: -17,
    trailScl: 3.2,
    range: 200,
    maxRange: 200,
    lightRadius: 202.4,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.4,
    update(unit){
        unit.healthMultiplier += 1/(1-Aegires.DR)-1;
    }
});
Aegires.constructor = () => extend(UnitWaterMove, {});
Aegires.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Aegires.DR
);
Aegires.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Aegires.weapons.add(
    extend(PointDefenseWeapon, "destructionmod-Destructor_Point_Defense_Mount",{
        x: 12.5,
        y: -18,
        reload: 3,
        targetInterval: 8,
        targetSwitchInterval: 8,
        bullet: extend(BulletType,{
            shootEffect: Fx.sparkShoot,
            hitEffect: Fx.pointHit,
            maxRange: 200,
            damage: 50
        })
    }),
    extend(PointDefenseWeapon, "destructionmod-Destructor_Point_Defense_Mount",{
        x: 12.5,
        y: 14,
        reload: 3,
        targetInterval: 8,
        targetSwitchInterval: 8,
        bullet: extend(BulletType,{
            shootEffect: Fx.sparkShoot,
            hitEffect: Fx.pointHit,
            maxRange: 200,
            damage: 50
        })
    }),
    extend(Weapon,{
        x: 0,
        y: 0,
        reload: 45,
        rotate: true,
        rotateSpeed: 16,
        shoot: extend(ShootPattern,{
            shots: 32
        }),
        ejectEffect: Fx.none,
        inaccuracy: 180,
        shootSound: Sounds.shootPulsar,
        shootEffect: Fx.none,
        bullet: extend(LightningBulletType,{
            lightningColor: Color.valueOf("ed655a"),
            hitColor: Color.valueOf("ed655a"),
            damage: 200,
            lightningLength: 10,
            lightningLengthRand: 20,
            lightningType: extend(BulletType,0.0001,0,{
                lifetime: Fx.lightning.lifetime,
                hitEffect: Fx.hitLancer,
                despawnEffect: Fx.none,
                status: StatusEffects.shocked,
                statusDuration: 30,
                hittable: false
            })
        })
    })
);
Aegires.abilities.add(
    EffectedRegenAbility(500),
    extend(EnergyFieldAbility, 100, 50, 208, {
        color: Color.valueOf("ed655a"),
        maxTargets: 32,
        healPercent: 1
    })
);

//Destructor Navanax
const Navanax = extend(UnitType, "Destructor_Navanax", {
    localizedName: "Destructor Navanax",
    health: 70000,
    speed: 0.675,
    drag: 0.17,
    hitSize: 58,
    armor: 100,
    accel: 0.2,
    rotateSpeed: 1.25,
    faceTarget: false,
    trailLength: 70,
    waveTrailX: 23,
    waveTrailY: -32,
    trailScl: 3.5,
    lightRadius: 266.8,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1,
    researchCostMultiplier: 1/2,
    DR: 0.5,
    update(unit){
        unit.healthMultiplier += 1/(1-Navanax.DR)-1;
    }
});
Navanax.constructor = () => extend(UnitWaterMove, {});
Navanax.stats.addPercent(
    extend(Stat, "Damage Reduction",{localized(){return "Damage Reduction";}}),
    Navanax.DR
);
Navanax.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
let NavanaxLaserPos = [
    {x: 21, y: -29.25}, {x: -21, y: -29.25},
    {x: 21, y: 12.5}, {x: -21, y: 12.5}
];
NavanaxLaserPos.forEach(pos => {
    Navanax.weapons.add(extend(Weapon, "destructionmod-Destructor_Plasma_Laser_Mount", {
        x: pos.x,
        y: pos.y,
        shadow: 20,
        controllable: false,
        autoTarget: true,
        mirror: false,
        shake: 3,
        shootY: 7,
        rotate: true,
        targetInterval: 20,
        targetSwitchInterval: 35,
        rotateSpeed: 3.5,
        reload: 170,
        recoil: 1,
        shootSound: Sounds.beamPlasmaSmall,
        initialShootSound: Sounds.shootBeamPlasmaSmall,
        continuous: true,
        cooldownTime: 170,
        bullet: extend(ContinuousLaserBulletType, {
            applyDamage(b){
                this.super$applyDamage(b);
                let resultLength = this.currentLength(b);
                let rot = b.rotation();
                if (this.lightningSpacing > 0) {
                    let idx = 0;
                    for (let i = 0; i <= resultLength; i += this.lightningSpacing) {
                        let cx = b.x + Angles.trnsx(rot, i);
                        let cy = b.y + Angles.trnsy(rot, i);
                        let f = idx++;
                        Mathf.signs.forEach(s => {
                            Time.run(f * this.lightningDelay, () => {
                                if (b.isAdded() && b.type === this) {
                                    Lightning.create(b, this.lightningColor,
                                        this.lightningDamage < 0 ? this.damage : this.lightningDamage,
                                        cx, cy, rot + 90 * s + Mathf.range(this.lightningAngleRand),
                                        this.lightningLength + Mathf.random(this.lightningLengthRand));
                                }
                            });
                        });
                    }
                }
            },
            draw(b){
                let fout = Mathf.clamp(b.time > b.lifetime - this.fadeTime ? 1 - (b.time - (this.lifetime - this.fadeTime)) / this.fadeTime : 1);
                let realLength = Damage.findLength(b, this.currentLength(b), this.laserAbsorb, this.pierceCap);
                let rot = b.rotation();

                for(let i = 0; i < this.colors.length; i++){
                    Draw.color(Tmp.c1.set(this.colors[i]).mul(1 + Mathf.absin(Time.time, 1, 0.1)));
                
                    let colorFin = i / (this.colors.length - 1);
                    let baseStroke = Mathf.lerp(this.strokeFrom, this.strokeTo, colorFin);
                    let stroke = (this.width + Mathf.absin(Time.time, this.oscScl, this.oscMag)) * fout * baseStroke;
                    let ellipseLenScl = Mathf.lerp(1 - i / (this.colors.length), 1, this.pointyScaling);
                
                    Lines.stroke(stroke);
                    Lines.lineAngle(b.x, b.y, rot, Math.max(0, realLength - this.frontLength), false);

                    Drawf.flameFront(b.x, b.y, this.divisions, rot + 180, this.backLength, stroke / 2);

                    Tmp.v1.trnsExact(rot, Math.max(0, realLength - this.frontLength));
                    Drawf.flameFront(b.x + Tmp.v1.x, b.y + Tmp.v1.y, this.divisions, rot, this.frontLength * ellipseLenScl, stroke / 2);
                }
            
                Tmp.v1.trns(b.rotation(), realLength * 1.1);
            
                Drawf.light(b.x, b.y, b.x + Tmp.v1.x, b.y + Tmp.v1.y, this.lightStroke, this.lightColor, this.lightOpacity);
                Draw.reset();
            },
            currentLength(b){
                let rot = b.rotation();

                let baseLength = this.length; 
                let data = { length: baseLength };
            
                let endX = b.x + Angles.trnsx(rot, baseLength);
                let endY = b.y + Angles.trnsy(rot, baseLength);

                Vars.world.raycastEachWorld(b.x, b.y, endX, endY, (x, y) => {
                    let tile = Vars.world.tile(x, y);
                    if (tile != null && tile.build != null) {
                        let blockName = tile.block().name;

                        if (tile.build.team != b.team && (blockName === "destructionmod-Destruction_Wall_Large" || blockName === "destructionmod-Destruction_Wall")) {
                            let dist = b.dst(tile.build.x, tile.build.y);
                            if (dist < data.length) {
                                data.length = dist;
                            }
                            return true;
                        }
                    }
                    return false;
                });

                let resultLength = data.length;

                let fout = Mathf.clamp(b.time > b.lifetime - this.fadeTime ? 1 - (b.time - (this.lifetime - this.fadeTime)) / this.fadeTime : 1);
                return resultLength * fout;
            },
            laserAbsorb: false,
            damage: 1600/12,
            length: 160,
            hitEffect: Fx.hitMeltdown,
            drawSize: 200,
            lifetime: 160,
            shake: 1,
            shootEffect: Fx.shootBigSmoke2,
            smokeEffect: Fx.none,
            width: 6,
            incendChance: 0.03,
            incendSpread: 5,
            incendAmount: 1,
            colors: [Color.valueOf("ed655a"), Color.valueOf("ff9999"), Color.white]
        })
    }));
});
Navanax.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Emp_Cannon_Mount", {
        rotate: true,
        x: 17.5,
        y: -6.5,
        reload: 50,
        shake: 3,
        rotateSpeed: 2.2,
        shadow: 30,
        shootY: 7,
        recoil: 4,
        cooldownTime: 60,
        shootSound: Sounds.shootNavanax,
        shoot: extend(ShootPattern, {
            shots: 3,
            shotDelay: 10
        }),
        bullet: extend(EmpBulletType, {
            reflectable: false,
            damage: 500,
            splashDamage: 1200,
            splashDamageRadius: 150,
            speed: 5,
            lifetime: 70,
            width: 12,
            height: 12,
            shrinkY: 0,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.white,
            hitColor: Color.valueOf("ed655a"),
            lightColor: Color.valueOf("ed655a"),
            lightRadius: 150,
            lightOpacity: 0.7,
            trailLength: 20,
            trailWidth: 6,
            trailColor: Color.valueOf("ed655a"),
            trailInterval: 3,
            trailRotation: true,
            scaleLife: true,
            unitDamageScl: 1,
            timeIncrease: 3,
            timeDuration: 1200,
            powerDamageScl: 2.5,
            powerSclDecrease: 0.1,
            hitShake: 4,
            hitSound: Sounds.explosionNavanax,
            sprite: "circle-bullet",
            status: Destructed,
            statusDuration: 300,
            trailEffect: extend(Effect, 16, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 4, 30 * e.fslope(), e.rotation + 90);
                Drawf.tri(e.x, e.y, 4, 30 * e.fslope(), e.rotation - 90);
            }, { followParent: true, rotWithParent: true }),
            shootEffect: extend(Effect, 40, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 1.6);
                Angles.randLenVectors(e.id, 18, e.finpow() * 27, e.rotation, 360, (x, y) => {
                    let ang = Mathf.angle(x, y);
                    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 1);
                });
            }, { followParent: true, rotWithParent: true }),
            hitEffect: extend(Effect, 50, 100, e => {
                e.scaled(7, b => {
                    Draw.color(Color.valueOf("ed655a"), b.fout());
                    Fill.circle(e.x, e.y, 150);
                });
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 3);
                Lines.circle(e.x, e.y, 150);
                let offset = Mathf.randomSeed(e.id, 360);
                for(let i = 0; i < 10; i++){
                    let angle = i * 360 / 10 + offset;
                    Drawf.tri(e.x + Angles.trnsx(angle, 150), e.y + Angles.trnsy(angle, 150), 6, 50 * e.fout(), angle);
                }
                Fill.circle(e.x, e.y, 12 * e.fout());
                Draw.color();
                Fill.circle(e.x, e.y, 6 * e.fout());
                Drawf.light(e.x, e.y, 150 * 1.6, Color.valueOf("ed655a"), e.fout());
            }, {followParent: true, rotWithParent: true})
        })
    })
);
Navanax.abilities.add(EffectedRegenAbility(1000));
Navanax.abilities.add(
    extend(SuppressionFieldAbility,{
        range: 240,
        orbRadius: 5,
        particleSize: 3,
        y: -10,
        particles: 10,
        color: Color.valueOf("ed655a"),
        particleColor: Color.valueOf("ed655a"),
        effectColor: Color.valueOf("ed655a")
    })
);

module.exports = {
    Dagger: Dagger,
    Mace: Mace,
    Fortress: Fortress,
    Scepter: Scepter,
    Reign: Reign,
    Crawler: Crawler,
    Atrax: Atrax,
    Spiroct: Spiroct,
    Arkyid: Arkyid,
    Toxopid: Toxopid,
    Nova: Nova,
    Pulsar: Pulsar,
    Quasar: Quasar,
    Vela: Vela,
    Corvus: Corvus,
    Flare: Flare,
    Horizon: Horizon,
    Zenith: Zenith,
    Antumbra: Antumbra,
    Eclipse: Eclipse,
    Mono: Mono,
    Poly: Poly,
    Mega: Mega,
    Quad: Quad,
    Oct: Oct,
    Risso: Risso,
    Minke: Minke,
    Bryde: Bryde,
    Sei: Sei,
    Omura: Omura,
    Retusa: Retusa,
    Oxynoe: Oxynoe,
    Cyerce: Cyerce,
    Aegires: Aegires,
    Navanax: Navanax,
    Gamma: Gamma,

    Debuff: Destructed
}