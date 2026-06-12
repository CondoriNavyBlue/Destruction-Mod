const EffectedRegenAbility = require("ability");
const items = require('items');
const rand = new Rand();
const v = new Vec2();
const addTechTree = require('addTechTree');

const Destructed = extend(StatusEffect,"Destructed",{
    localizedName: "Destructed",
    speedMultiplier: 0.5,
    healthMultiplier: 0.75,
    damageMultiplier: 0.75,
    reloadMultiplier: 0.6,
    color: Color.valueOf("ff0000"),
    effect: Fx.flakExplosion,
    intervalDamage: 100,
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
    trailLength: 5,
    trailColor: Color.valueOf("ed655a"),
    engineColor: Color.valueOf("ed655a"),
    lightRadius: 50.3,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1
});
Gamma.constructor = () => extend(UnitEntity, {});
Gamma.aiController = () => extend(BuilderAI, {});
Gamma.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Gamma.abilities.add(EffectedRegenAbility(500));
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
        bullet: extend(BasicBulletType,5,55,{
            width: 4,
            height: 12,
            lifetime: 72,
            shootEffect: Fx.shootSmall,
            smokeEffect: Fx.shootSmallSmoke,
            buildingDamageMultiplier: 0.01,
            homingPower: 0.15
        })
    })
);

//Destructor Fortress
const Fortress = new extend(UnitType, "Destructor_Fortress",{
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
    lightOpacity: 1
});
Fortress.constructor = () => extend(MechUnit, {});
Fortress.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Fortress.weapons.add(
    extend(Weapon, "destructionmod-Destructor_Artillery", {
        top: false,
        x: 9,
        y: 1,
        reload: 70,
        recoil: 4,
        shake: 2,
        ejectEffect: Fx.casing2,
        shootSound: Sounds.shootArtillery,
        bullet: extend(ArtilleryBulletType, 2, 50, "shell", {
            hitEffect: Fx.blastExplosion,
            knockback: 0.8,
            lifetime: 120,
            width: 20,
            height: 20,
            collides: true,
            collidesTiles: true,
            splashDamage: 80,
            splashDamageRadius: 40,
            backColor: Pal.blastAmmoBack,
            frontColor: Pal.blastAmmoFront,
            status: StatusEffects.blasted,
            statusDuration: 300,
            fragBullets: 1,
            fragBullet: extend(ArtilleryBulletType, 0, 20, "shell", {
                hitEffect: Fx.blastExplosion,
                knockback: 0.8,
                lifetime: 10,
                width: 20,
                height: 20,
                collides: false,
                collidesTiles: false,
                splashDamage: 80,
                splashDamageRadius: 40,
                backColor: Pal.blastAmmoBack,
                frontColor: Pal.blastAmmoFront,
                status: StatusEffects.blasted,
                statusDuration: 300,
                fragBullets: 1,
                fragBullet: extend(ArtilleryBulletType, 0, 20, "shell", {
                    hitEffect: Fx.blastExplosion,
                    knockback: 0.8,
                    lifetime: 10,
                    width: 20,
                    height: 20,
                    collides: false,
                    collidesTiles: false,
                    splashDamage: 80,
                    splashDamageRadius: 40,
                    backColor: Pal.blastAmmoBack,
                    frontColor: Pal.blastAmmoFront,
                    status: StatusEffects.blasted,
                    statusDuration: 300,
                    fragBullets: 1,
                    fragBullet: extend(ArtilleryBulletType, 0, 30, "shell", {
                        hitEffect: Fx.blastExplosion,
                        knockback: 0.8,
                        lifetime: 10,
                        width: 20,
                        height: 20,
                        collides: false,
                        collidesTiles: false,
                        splashDamage: 80,
                        splashDamageRadius: 40,
                        backColor: Pal.blastAmmoBack,
                        frontColor: Pal.blastAmmoFront,
                        status: StatusEffects.blasted,
                        statusDuration: 300,
                        fragBullets: 1,
                        fragBullet: extend(ArtilleryBulletType, 0, 30, "shell", {
                            hitEffect: Fx.blastExplosion,
                            knockback: 0.8,
                            lifetime: 10,
                            width: 20,
                            height: 20,
                            collides: false,
                            collidesTiles: false,
                            splashDamage: 80,
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
const Scepter = new extend(UnitType, "Destructor_Scepter", {
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
    lightOpacity: 1
});
Scepter.constructor = () => extend(MechUnit, {});
Scepter.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Scepter.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Scepter_Weapon",{
        top: false,
        y: 1,
        x: 16,
        shootY: 8,
        reload: 50,
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
        bullet: extend(BasicBulletType,9,140,{
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
            lightningDamage: 70,
            despawnSound: Sounds.shockBullet,
            bulletInterval: 3,
            intervalBullet: extend(LightningBulletType,{
                damage: 40,
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
        bullet: extend(ArtilleryBulletType, 5, 60, "shell",{
            hitEffect: Fx.blastExplosion,
            knockback: 0.8,
            lifetime: 56,
            width: 14,
            height: 14,
            collides: true,
            collidesTiles: true,
            splashDamageRadius: 40,
            splashDamage: 100,
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
        bullet: extend(BasicBulletType, 12, 60,{
            width: 4.5,
            height: 35,
            lifetime: 28*8/12,
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
        bullet: extend(BasicBulletType, 12, 60,{
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
    ShieldRegenFieldAbility(40, 800, 30, 80),
    EffectedRegenAbility(500)
);

//Destructor Reign
const Reign = new extend(UnitType, "Destructor_Reign", {
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
    lightOpacity: 1
});
Reign.constructor = () => extend(MechUnit, {});
Reign.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Reign.weapons.add(
    extend(Weapon,"destructionmod-Destructor_Reign_Weapon",{
        top: false,
        x: 21.5,
        y: 1,
        shootY: 11,
        reload: 12,
        recoil: 5,
        shake: 2,
        ejectEffect: Fx.casing4,
        shootSound: Sounds.shootReign,
        shoot: extend(ShootPattern, {
            shots: 3,
            shotDelay: 3.2
        }),
        bullet: extend(BasicBulletType, 14, 220, {
            reflectable: false,
            pierce: true,
            pierceCap: 10,
            width: 14,
            height: 33,
            lifetime: 24,
            shootEffect: Fx.shootBig,
            fragVelocityMin: 0.4,
            hitEffect: Fx.blastExplosion,
            splashDamage: 100,
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
        bullet: extend(BasicBulletType, 1, 2000, "mine-bullet", {
            reflectable: false,
            width: 48,
            height: 48,
            spin: 6,
            shrinkY: 0,
            backColor: Color.valueOf("789aff"),
            frontColor: Color.valueOf("d5e9ff"),
            drag: -0.05,
            splashDamage: 4000,
            splashDamageRadius: 120,
            splashDamagePierce: false,
            shootEffect: Fx.shockwave,
            lifetime: 66,
            hitShake: 10,
            hitSound: Sounds.explosionReactor,
            keepVelocity: false,
            status: Destructed,
            statusDuration: 600,
            hitEffect: new MultiEffect(
                extend(Effect, 60, 160, e => {
                    Draw.color(Color.valueOf("789aff"));
                    Lines.stroke(e.fout() * 3);
                    var circleRad = 6 + e.finpow() * 120;
                    Lines.circle(e.x, e.y, circleRad);
                    rand.setSeed(e.id);
                    for(var i = 0; i < 24; i++){
                        var angle = rand.random(360);
                        var lenRand = rand.random(0.5, 1);
                        Lines.lineAngle(e.x, e.y, angle, e.foutpow() * 100 * rand.random(1, 0.6) + 2, e.finpow() * 140 * lenRand + 6);
                    }
                },{}),
                extend(Effect, 150, 150, b => {
                    var intensity = 6;
                    Draw.color(Color.valueOf("789aff"), 0.7);
                    for(var i = 0; i < 4; i++){
                        rand.setSeed(b.id * 2 + i);
                        var lenScl = rand.random(0.5, 1);
                        var fi = i;
                        b.scaled(b.lifetime * lenScl, e => {
                            Angles.randLenVectors(e.id + fi - 1, Math.floor(2.9 * intensity), 22 * intensity * e.fin(Interp.pow10Out), (x, y) => {
                                var fout = e.fout(Interp.pow5Out) * rand.random(0.5, 1);
                                var rad = fout * ((2 + intensity) * 2.35);
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
addTechTree(Reign, {
    parent: "reign",
    requirements: ItemStack.with(
        Items.silicon, 120000,
        Items.phaseFabric, 75000,
        items.sodiumBattery, 100000,
        items.iron, 50000,
        items.gold, 50000,
        items.diamond, 10000
    )
});

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
    trailLength: 11,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 92,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1
});
Zenith.constructor = () => extend(UnitEntity, {});
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
                extend(MissileBulletType, 5.5, 60, {
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
                extend(MissileBulletType, 4.5, 40, {
                    width: 10,
                    height: 10,
                    shrinkY: 0,
                    drag: -0.0003,
                    homingRange: 60,
                    scaleKeepVelocity: true,
                    splashDamageRadius: 60,
                    splashDamage: 40,
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
                    splashDamage: 60,
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
    trailLength: 36,
    trailColor: Color.valueOf("ed655a"),
    hitSize: 46,
    armor: 50,
    targetFlags: [BlockFlag.generator, BlockFlag.core, null],
    loopSound: Sounds.loopHover,
    lightRadius: 211.6,
    lightColor: Color.valueOf("ff0000"),
    lightOpacity: 1
});
Antumbra.constructor = () => extend(UnitEntity, {});
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
            splashDamage: 100,
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
            shootEffect: Fx.shootBig
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
    lightOpacity: 1
});
Eclipse.constructor = () => extend(UnitEntity, {});
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
        bullet: extend(FlakBulletType, 6.6, 80, {
            shootEffect: Fx.shootBig,
            ammoMultiplier: 4,
            splashDamage: 110,
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
            fragBullet: extend(BasicBulletType,12,40,{
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
        bullet: extend(FlakBulletType, 6.6, 60, {
            shootEffect: Fx.shootBig,
            ammoMultiplier: 4,
            splashDamage: 96,
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
        rotateSpeed: 2.5,
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
            damage: 3200/12,
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
                    var ang = Mathf.angle(x, y);
                    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 4 + 1);
                });
            },{}),
            chargeEffect: extend(Effect, 40, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fin() * 2);
                Lines.circle(e.x, e.y, e.fout() * 50);
            },{
                followParent: true,
                rotWithParent: true
            })
        })
    })
);
Eclipse.abilities.add(EffectedRegenAbility(1000));
addTechTree(Eclipse, {
    parent: "eclipse",
    requirements: ItemStack.with(
        Items.silicon, 120000,
        Items.phaseFabric, 75000,
        items.sodiumBattery, 100000,
        items.iron, 50000,
        items.gold, 50000,
        items.diamond, 10000
    )
});

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
    trailLength: 30,
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
    lightOpacity: 1
});
Vela.constructor = () => extend(MechUnit, {});
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
            damage: 1200/12,
            length: 290,
            hitEffect: extend(Effect,12, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 2);

                Angles.randLenVectors(e.id, 6, e.finpow() * 18, (x, y) => {
                    var ang = Mathf.angle(x, y);
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
            },{
                followParent: true,
                rotWithParent: true
            }),
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
        reload: 60,
        shootSound: Vars.tree.loadSound("railgun_D"),
        bullet: extend(PointBulletType, {
            damage: 600,
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
                for(var i = 0; i < 2; i++){
                    Draw.color(i == 0 ? Color.valueOf("ed655a") : Color.valueOf("eda096"));
                    var m = i == 0 ? 1 : 0.5;
                    for(var j = 0; j < 5; j++){
                        var rot = e.rotation + Mathf.randomSeedRange(e.id + j, 50);
                        var w = 12 * e.fout() * m;
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
                for(var i = 0; i < 2; i++){
                    Draw.color(i == 0 ? Color.valueOf("ed655a") : Color.valueOf("eda096"));
                    var m = i == 0 ? 1 : 0.5;
                    var rot = e.rotation + 180;
                    var w = 8 * e.fout() * m;
                    Drawf.tri(e.x, e.y, w, (20 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
                    Drawf.tri(e.x, e.y, w, 8 * m, rot + 180);
                }
                Drawf.light(e.x, e.y, 60, Color.valueOf("ed655a"), 0.6 * e.fout());
            },{}),
            despawnEffect: extend(Effect, 15, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 4);
                Lines.circle(e.x, e.y, 4 + e.finpow() * 20);
                for(var i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 6, 80 * e.fout(), i*90 + 45);
                }
                Draw.color();
                for(var i = 0; i < 4; i++){
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
    lightOpacity: 1
});
Corvus.constructor = () => extend(LegsUnit, {});
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
        bullet: extend(LaserBulletType, {
            length: 532,
            damage: 4500,
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
            chargeEffect: extend(Effect, 80, 100, e => {
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fin() * 2);
                Lines.circle(e.x, e.y, 4 + e.fout() * 100);
                Fill.circle(e.x, e.y, e.fin() * 20);
                Angles.randLenVectors(e.id, 20, 40 * e.fout(), (x, y) => {
                    Fill.circle(e.x + x, e.y + y, e.fin() * 5);
                    Drawf.light(e.x + x, e.y + y, e.fin() * 15, Color.valueOf("ed655a"), 0.7);
                });
                Draw.color();
                Fill.circle(e.x, e.y, e.fin() * 10);
                Drawf.light(e.x, e.y, e.fin() * 20, Color.valueOf("ed655a"), 0.7);
            }, {
                followParent: true,
                rotWithParent: true
            })
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
        bullet: extend(EmpBulletType, {
            reflectable: false,
            damage: 400,
            splashDamage: 800,
            splashDamageRadius: 80,
            speed: 10,
            lifetime: 35,
            width: 8,
            height: 8,
            shrinkY: 0,
            backColor: Color.valueOf("ed655a"),
            frontColor: Color.white,
            hitColor: Color.valueOf("ed655a"),
            lightColor: Color.valueOf("ed655a"),
            lightRadius: 80,
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
                }, {
                    followParent: true,
                    rotWithParent: true
                })
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
                    var ang = Mathf.angle(x, y);
                    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 1);
                });
            }, {
                followParent: true,
                rotWithParent: true
            }),
            hitEffect: extend(Effect, 50, 100, e => {
                e.scaled(7, b => {
                    Draw.color(Color.valueOf("ed655a"), b.fout());
                    Fill.circle(e.x, e.y, 80);
                });
                Draw.color(Color.valueOf("ed655a"));
                Lines.stroke(e.fout() * 3);
                Lines.circle(e.x, e.y, 80);
                var offset = Mathf.randomSeed(e.id, 360);
                for(var i = 0; i < 10; i++){
                    var angle = i * 360 / 10 + offset;
                    Drawf.tri(e.x + Angles.trnsx(angle, 80), e.y + Angles.trnsy(angle, 80), 6, 30 * e.fout(), angle);
                }
                Fill.circle(e.x, e.y, 12 * e.fout());
                Draw.color();
                Fill.circle(e.x, e.y, 6 * e.fout());
                Drawf.light(e.x, e.y, 80 * 1.6, Color.valueOf("ed655a"), e.fout());
            }, {
                followParent: true,
                rotWithParent: true
            })
        })
    })
);
Corvus.abilities.add(EffectedRegenAbility(1000));
addTechTree(Corvus, {
    parent: "corvus",
    requirements: ItemStack.with(
        Items.silicon, 120000,
        Items.phaseFabric, 75000,
        items.sodiumBattery, 100000,
        items.iron, 50000,
        items.gold, 50000,
        items.diamond, 10000
    )
});

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
    lightOpacity: 1
});
Arkyid.constructor = () => extend(LegsUnit, {});
Arkyid.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
var ArkyidSap = extend(SapBulletType,{
    sapStrength: 0.85,
    length: 80,
    damage: 100,
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
        bullet: extend(ArtilleryBulletType,3,80,{
            hitEffect: Fx.sapExplosion,
            despawnSound: Sounds.explosionArtilleryShock,
            knockback: 0.8,
            lifetime: 100,
            width: 20,
            height: 20,
            collidesTiles: true,
            ammoMultiplier: 4,
            splashDamageRadius: 70,
            splashDamage: 140,
            backColor: Pal.sapBulletBack,
            frontColor: Pal.sapBullet,
            lightningColor: Pal.sapBullet,
            lightning: 6,
            lightningLength: 12,
            lightningLengthRand: 4,
            lightnigDamage: 40,
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
        regen: 250/60,
        cooldown: 60*10,
        max: 5000,
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
    lightOpacity: 1
});
Toxopid.constructor = () => extend(LegsUnit, {});
Toxopid.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Toxopid.weapons.add(
    extend(Weapon,{
        x: 0,
        y: 0,
        shootY: 9.5,
        reload: 100,
        mirror: false,
        rotate: false,
        shoot: extend(ShootSpread,{
            shots:13,
            spread: 8,
            shotDelay: 1
        }),
        shake: 1,
        shootSound: Sounds.explosionObviate,
        bullet: extend(BasicBulletType,5,600,{
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
        bullet: extend(ArtilleryBulletType,10,220,"circle-bullet",{
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
            splashDamage: 400,
            splashDamageRadius: 120,
            backColor: Pal.sapBulletBack,
            frontColor: Pal.sapBullet,
            lightningColor: Pal.sapBullet,
            lightning: 10,
            lightningLength: 25,
            lightningDamage: 90,
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
            fragBullet: extend(ArtilleryBulletType, 0.1, 160, "circle-bullet", {
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
                splashDamage: 250,
                splashDamageRadius: 80,
                backColor: Pal.sapBulletBack,
                frontColor: Pal.sapBullet,
                lightningColor: Pal.sapBullet,
                lightning: 5,
                lightningLength: 10,
                lightningDamage: 60,
                hitShake: 5,
                lightRadius: 40,
                lightOpacity: 0.6,
                smokeEffect: Fx.shootBigSmoke2,
                status: Destructed,
                statusDuration: 300,
                reflectable: false,
                fragLifeMin: 0.3,
                fragBullets: 4,
                fragBullet: extend(ArtilleryBulletType, 2.3, 100, {
                    despawnSound: Sounds.explosionArtilleryShock,
                    hitEffect: Fx.sapExplosion,
                    knockback: 0.8,
                    lifetime: 90,
                    width: 20,
                    height: 20,
                    collidesTiles: false,
                    splashDamage: 125,
                    splashDamageRadius: 60,
                    backColor: Pal.sapBulletBack,
                    frontColor: Pal.sapBullet,
                    lightningColor: Pal.sapBullet,
                    lightning: 3,
                    lightningLength: 6,
                    lightningDamage: 45,
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
addTechTree(Toxopid, {
    parent: "toxopid",
    requirements: ItemStack.with(
        Items.silicon, 120000,
        Items.phaseFabric, 75000,
        items.sodiumBattery, 100000,
        items.iron, 50000,
        items.gold, 50000,
        items.diamond, 10000
    )
});

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
    lightOpacity: 1
})
Quad.constructor = UnitTypes.quad.constructor;
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
                var circleRad = 4 + e.finpow() * 112;
                Lines.circle(e.x, e.y, circleRad);
                Draw.color(Color.valueOf("ed655a"));
                for(var i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 8, 132 * e.fout(), i*90);
                }
                Draw.color();
                for(var i = 0; i < 4; i++){
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
            splashDamage: 180,
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
                var circleRad = 4 + e.finpow() * 64;
                Lines.circle(e.x, e.y, circleRad);
                Draw.color(Color.valueOf("789aff"));
                for(var i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 8, 84 * e.fout(), i*90);
                }
                Draw.color();
                for(var i = 0; i < 4; i++){
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
            splashDamage: 660,
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
                var circleRad = 4 + e.finpow() * 160;
                Lines.circle(e.x, e.y, circleRad);
                Draw.color(Pal.heal);
                for(var i = 0; i < 4; i++){
                    Drawf.tri(e.x, e.y, 8, 180 * e.fout(), i*90);
                }
                Draw.color();
                for(var i = 0; i < 4; i++){
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
            splashDamage: 330,
            splashDamageRadius: 160
        })
    })
);
Quad.abilities.add(EffectedRegenAbility(500));

//Patron Oct
const Oct = extend(UnitType, "Patron_Oct", {
    localizedName: "Patron Oct",
    armor: 100,
    health: 100000,
    speed: 1,
    rotateSpeed: 1,
    accel: 0.04,
    drag: 0.018,
    flying: true,
    engineOffset: 46,
    engineSize: 7.8,
    faceTarget: false,
    hitSize: 66,
    payloadCapacity: 4096,
    buildSpeed: 8,
    drawShilds: false,
    lowAltitude: true,
    buildBeamOffset: 43,
    ammoCapacity: 1,
    engineColor: Color.valueOf("ed655a"),
    trailLength: 36,
    trailColor: Color.valueOf("ed655a"),
    lightRadius: 303.6,
    lightColor: Color.valueOf("ff00ff"),
    lightOpacity: 1
});
Oct.constructor = () => extend(PayloadUnit, {});
Oct.aiController = () => extend(DefenderAI, {});
Oct.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
Oct.abilities.add(
    ForceFieldAbility(200,1000/60,25000,1200,10,0),
    EffectedRegenAbility(1000)
);
addTechTree(Oct, {
    parent: "oct",
    requirements: ItemStack.with(
        Items.silicon, 120000,
        Items.phaseFabric, 75000,
        items.sodiumBattery, 100000,
        items.iron, 50000,
        items.gold, 50000,
        items.diamond, 10000
    )
});

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
    lightOpacity: 1
});
Sei.constructor = () => extend(UnitWaterMove, {});
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
        bullet: extend(BasicBulletType, 8,80, {
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
        bullet: extend(MissileBulletType, 1,50, {
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
            splashDamage: 50,
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
    lightOpacity: 1
});
Omura.constructor = () => extend(UnitWaterMove, {});
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
            }, {
                followParent: true,
                rotWithParent: true
            }),
            pointEffect: extend(Effect, 16, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 12.5 * e.fout(), 25, e.rotation + 180);
                Drawf.tri(e.x, e.y, 12.5 * e.fout(), 25, e.rotation);
                Drawf.light(e.x, e.y, 60 * e.fout(), Color.valueOf("ed655a"), 0.5);
            }, {
                followParent: true,
                rotWithParent: true
            }),
            pierceEffect: extend(Effect, 18, 200, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation + 140);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation - 140);
            }, {
                followParent: true,
                rotWithParent: true
            }),
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
            }, {
                followParent: true,
                rotWithParent: true
            })
        })
    }),
    extend(Weapon, {
        reload: 200,
        cooldownTime: 90,
        mirror: false,
        x: 0,
        y: 0,
        rotateSpeed: 1.7,
        rotate: true,
        shootY: 0,
        shake: 2,
        recoil: 10.5,
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
            }, {
                followParent: true,
                rotWithParent: true
            }),
            pointEffect: extend(Effect, 16, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 10 * e.fout(), 24, e.rotation + 180);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 24, e.rotation);
                Drawf.light(e.x, e.y, 60 * e.fout(), Color.valueOf("ed655a"), 0.5);
            }, {
                followParent: true,
                rotWithParent: true
            }),
            pierceEffect: extend(Effect, 18, 200, e => {
                Draw.color(Color.valueOf("ed655a"));
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation + 140);
                Drawf.tri(e.x, e.y, 10 * e.fout(), 60, e.rotation - 140);
            }, {
                followParent: true,
                rotWithParent: true
            }),
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
            }, {
                followParent: true,
                rotWithParent: true
            })
        })
    })
);
Omura.abilities.add(EffectedRegenAbility(1000));
addTechTree(Omura, {
    parent: "omura",
    requirements: ItemStack.with(
        Items.silicon, 120000,
        Items.phaseFabric, 75000,
        items.sodiumBattery, 100000,
        items.iron, 50000,
        items.gold, 50000,
        items.diamond, 10000
    )
});

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
    lightOpacity: 1
});
Aegires.constructor = () => extend(UnitWaterMove, {});
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
            damage: 45
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
            damage: 45
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
            damage: 100,
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
    extend(EnergyFieldAbility, 60, 45, 200, {
        color: Color.valueOf("ed655a"),
        maxTargets: 32,
        healPercent: 1,
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
    lightOpacity: 1
});
Navanax.constructor = () => extend(UnitWaterMove, {});
Navanax.immunities.addAll(StatusEffects.burning, StatusEffects.melting);
var laserPos = [
    {x: 21, y: -29.25}, {x: -21, y: -29.25},
    {x: 21, y: 12.5}, {x: -21, y: 12.5}
];
laserPos.forEach(pos => {
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
            damage: 80,
            length: 140,
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
            damage: 330,
            splashDamage: 330,
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
            powerDamageScl: 2,
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
                    var ang = Mathf.angle(x, y);
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
                var offset = Mathf.randomSeed(e.id, 360);
                for(var i = 0; i < 10; i++){
                    var angle = i * 360 / 10 + offset;
                    Drawf.tri(e.x + Angles.trnsx(angle, 150), e.y + Angles.trnsy(angle, 150), 6, 50 * e.fout(), angle);
                }
                Fill.circle(e.x, e.y, 12 * e.fout());
                Draw.color();
                Fill.circle(e.x, e.y, 6 * e.fout());
                Drawf.light(e.x, e.y, 150 * 1.6, Color.valueOf("ed655a"), e.fout());
            }, {
                followParent: true,
                rotWithParent: true
            })
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
addTechTree(Navanax, {
    parent: "navanax",
    requirements: ItemStack.with(
        Items.silicon, 120000,
        Items.phaseFabric, 75000,
        items.sodiumBattery, 100000,
        items.iron, 50000,
        items.gold, 50000,
        items.diamond, 10000
    )
});

/*
//conquer
const Conquer = extend(TankUnitType, "Destructor_Conquer", {});
Conquer.constructor = () => extend(TankUnit, {});
Conquer.abilities.add(EffectedRegenAbility(1000));
Blocks.tankAssembler.plans.add(new UnitAssembler.AssemblerUnitPlan(Conquer,60*250,PayloadStack.list(UnitTypes.precept,6,Blocks.reinforcedSurgeWallLarge, 30)));

//disrupt
const Disrupt = extend(ErekirUnitType, "Destructor_Disrupt", {});
Disrupt.constructor = () => extend(PayloadUnit, {});
Disrupt.aiController = () => extend(FlyingFollowAI, {});
const DisruptBulletUnit = extend(MissileUnitType, "Destructor_Disrupt_Missile", {});
DisruptBulletUnit.constructor = () => extend(TimedKillUnit, {});
const DisruptBullet = BulletType();
DisruptBullet.shootEffect = Fx.sparkShoot;
DisruptBullet.smokeEffect = Fx.shootSmokeTitan;
DisruptBullet.hitColor = Color.valueOf("fff340");
DisruptBullet.hitShake = 1.25;
DisruptBullet.speed = 0;
DisruptBullet.keepVelocity = false;
DisruptBullet.spawnUnit = DisruptBulletUnit;
const DisruptWeaponParts = new RegionPart("-blade");
DisruptWeaponParts.heatProgress = p => p.warmup;
DisruptWeaponParts.progress = p => p.warmup;
DisruptWeaponParts.heatColor = Color.valueOf("fff340");
DisruptWeaponParts.x = 1.25;
DisruptWeaponParts.y = 0;
DisruptWeaponParts.moveRot = -33;
DisruptWeaponParts.moveX = -1;
DisruptWeaponParts.moveY = -1;
DisruptWeaponParts.under = true;
DisruptWeaponParts.mirror = true;
const DisruptWeapon = Weapon("destructionmod-Destructor_Disrupt_Weapon");
DisruptWeapon.shootSound = Sounds.missileLarge;
DisruptWeapon.x = 19.5;
DisruptWeapon.y = -2.5;
DisruptWeapon.mirror = true;
DisruptWeapon.rotate = true;
DisruptWeapon.rotateSpeed = 1;
DisruptWeapon.reload = 30;
DisruptWeapon.layerOffset = -20;
DisruptWeapon.recoil = 1;
DisruptWeapon.rotationLimit = 22;
DisruptWeapon.minWarmup = 0.95;
DisruptWeapon.shootWarmupSpeed = 0.1;
DisruptWeapon.shootY = 2;
DisruptWeapon.shootCone = 40;
DisruptWeapon.shoot.shots = 2;
DisruptWeapon.shoot.shotDelay = 15;
DisruptWeapon.inaccuracy = 28;
DisruptWeapon.parts.add(DisruptWeaponParts);
DisruptWeapon.bullet = DisruptBullet;
const DisruptBulletUnit2 = extend(MissileUnitType, "Destructor_Disrupt_Missile_Mini", {});
DisruptBulletUnit2.constructor = () => extend(TimedKillUnit, {});
const DisruptBullet2 = BulletType();
DisruptBullet2.shootEffect = Fx.sparkShoot;
DisruptBullet2.smokeEffect = Fx.shootSmokeTitan;
DisruptBullet2.hitColor = Color.valueOf("fff340");
DisruptBullet2.hitShake = 1.25;
DisruptBullet2.speed = 0;
DisruptBullet2.keepVelocity = false;
DisruptBullet2.spawnUnit = DisruptBulletUnit2;
const DisruptWeapon2 = Weapon();
DisruptWeapon2.shootSound = Sounds.missileLarge;
DisruptWeapon2.x = 0;
DisruptWeapon2.y = 0;
DisruptWeapon2.mirror = false;
DisruptWeapon2.rotate = false;
DisruptWeapon2.reload = 7.5;
DisruptWeapon2.recoil = 1;
DisruptWeapon2.minWarmup = 0.95;
DisruptWeapon2.shootWarmupSpeed = 0.1;
DisruptWeapon2.shootY = 20;
DisruptWeapon2.shootCone = 40;
DisruptWeapon2.inaccuracy = 28;
DisruptWeapon2.bullet = DisruptBullet2;
Disrupt.weapons.add(DisruptWeapon);
Disrupt.weapons.add(DisruptWeapon2);
const DisruptAbility1 = extend(SuppressionFieldAbility,{});
DisruptAbility1.particleColor = Color.valueOf("fff340");
DisruptAbility1.color = Color.valueOf("fff340");
DisruptAbility1.orbRadius = 5;
DisruptAbility1.particleSize = 3;
DisruptAbility1.y = 10;
DisruptAbility1.particles = 10;
const DisruptAbility2 = extend(SuppressionFieldAbility,{});
DisruptAbility2.particleColor = Color.valueOf("fff340");
DisruptAbility2.color = Color.valueOf("fff340");
DisruptAbility2.orbRadius = 5;
DisruptAbility2.particleSize = 3;
DisruptAbility2.y = -8;
DisruptAbility2.x = 10.75;
DisruptAbility2.particles = 10;
DisruptAbility2.display = DisruptAbility2.active = false;
const DisruptAbility3 = extend(SuppressionFieldAbility,{});
DisruptAbility3.particleColor = Color.valueOf("fff340");
DisruptAbility3.color = Color.valueOf("fff340");
DisruptAbility3.orbRadius = 5;
DisruptAbility3.particleSize = 3;
DisruptAbility3.y = -8;
DisruptAbility3.x = -10.75;
DisruptAbility3.particles = 10;
DisruptAbility3.display = DisruptAbility3.active = false;
Disrupt.abilities.add(DisruptAbility1);
Disrupt.abilities.add(DisruptAbility2);
Disrupt.abilities.add(DisruptAbility3);
Disrupt.abilities.add(EffectedRegenAbility(1000));
Blocks.shipAssembler.plans.add(new UnitAssembler.AssemblerUnitPlan(Disrupt,60*250,PayloadStack.list(UnitTypes.obviate,6,Blocks.reinforcedSurgeWallLarge, 30)));

//collaris
const Collaris = extend(ErekirUnitType, "Destructor_Collaris", {});
Collaris.constructor = () => extend(LegsUnit, {});
Collaris.abilities.add(EffectedRegenAbility(1000));
Blocks.mechAssembler.plans.add(new UnitAssembler.AssemblerUnitPlan(Collaris,60*250,PayloadStack.list(UnitTypes.anthicus,6,Blocks.reinforcedSurgeWallLarge, 30)));
*/