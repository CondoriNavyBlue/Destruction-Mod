const SelfRegenerationAbility = (RPS)=>{
    return extend(RegenAbility,{
        percentAmount: 0,
        amount: RPS/60,
        draw(unit){
            this.super$draw(unit);

            let damaged = unit.damaged();
            let color = damaged ? unit.team.color : Color.valueOf("c0c0c060");
            let white = damaged ? Color.white : Color.valueOf("ffffff60");

            // 定数計算をループ外にまとめる（除算を事前に計算）
            let hs = unit.hitSize;
            let hsDiv36 = hs / 36;
            let radStep = 1.5 * Math.PI / 180;
            let time = Time.time;

            let OR = hs + 4 * hsDiv36 + Math.cos(time * radStep) * 2 * hsDiv36;
            let IR = hs - 4 * hsDiv36 + Math.sin(time * radStep) * 2 * hsDiv36;

            let ux = unit.x, uy = unit.y;

            Draw.z(109);

            // --- 1. リングの描画 ---
            Draw.color(color);
            Lines.stroke(1.5 * hsDiv36);
            Lines.circle(ux, uy, IR);
            if(RPS >= 500){
                Lines.stroke(2 * hsDiv36);
                Lines.circle(ux, uy, OR);
            }

            Draw.color(white);
            Lines.stroke(0.75 * hsDiv36);
            Lines.circle(ux, uy, IR);
            if(RPS >= 500){
                Lines.stroke(1 * hsDiv36);
                Lines.circle(ux, uy, OR);
            }

            // --- 2. 内側のパーツ (IR) の描画 ---
            let time05 = time * 0.5;
            let irCircleRad = 3 * hsDiv36;
            let irWhiteCircleRad = 1.5 * hsDiv36;
            let irTriLen = -8 * hsDiv36;
            let irWhiteTriLen = -6 * hsDiv36;

            // 【色ごとに一括描画】して Draw Call を減らす
            Draw.color(color);
            for(let i = 0; i < 8; i++){
                let a3 = i * 45 + time05;
                let px = ux + Angles.trnsx(a3, IR);
                let py = uy + Angles.trnsy(a3, IR);
                Fill.circle(px, py, irCircleRad);
                Drawf.tri(px, py, irCircleRad, irTriLen, a3);
            }
        
            Draw.color(white);
            for(let i = 0; i < 8; i++){
                let a3 = i * 45 + time05;
                let px = ux + Angles.trnsx(a3, IR);
                let py = uy + Angles.trnsy(a3, IR);
                Fill.circle(px, py, irWhiteCircleRad);
                Drawf.tri(px, py, irWhiteCircleRad, irWhiteTriLen, a3);
            }

            if(RPS >= 500){
                // --- 3. 外側のパーツ (OR) の描画 ---
                let time1 = time * 1;
                let orCircleRad = 4 * hsDiv36;
                let orWhiteCircleRad = 2 * hsDiv36;
                let orTriLen = -16 * hsDiv36;
                let orWhiteTriLen = -14 * hsDiv36;
                
                Draw.color(color);
                for(let i = 0; i < 8; i++){
                    let a = i * 45 + time1;
                    let px = ux + Angles.trnsx(a, OR);
                    let py = uy + Angles.trnsy(a, OR);
                    Fill.circle(px, py, orCircleRad);
                    Drawf.tri(px, py, orCircleRad, orTriLen, a);
                }
            
                Draw.color(white);
                for(let i = 0; i < 8; i++){
                    let a = i * 45 + time1;
                    let px = ux + Angles.trnsx(a, OR);
                    let py = uy + Angles.trnsy(a, OR);
                    Fill.circle(px, py, orWhiteCircleRad);
                    Drawf.tri(px, py, orWhiteCircleRad, orWhiteTriLen, a);
                }
            }
        
            Draw.reset();
        },
        localized(){
            return "Self Regeneration";
        }
    });
}

const Rage = (Multiplier)=>{
    return extend(Ability,{
        update(unit){
            let Rate = unit.health/unit.maxHealth;
            unit.damageMultiplier *= 1+(Multiplier-1)*(1-Rate);
            unit.armor = unit.type.armor + (Multiplier-1)*unit.type.armor*(1-Rate);
            unit.healthMultiplier *= 1+(Multiplier-1)*(1-Rate);
        },
        localized(){
            return "Rage";
        }
    });
}

module.exports = {
    regen: SelfRegenerationAbility,
    rage: Rage
}