const SelfRegenerationAbility = (RPS)=>{
    return extend(RegenAbility,{
        percentAmount: 0,
        amount: RPS/60,
        draw(unit){
            this.super$draw(unit);
            var color = unit.damaged() ? unit.team.color : Color.valueOf("c0c0c060");
            var white = unit.damaged() ? Color.white : Color.valueOf("ffffff60");
            var OR = unit.hitSize+4*unit.hitSize/36 + Math.cos(Time.time*1.5*Math.PI/180)*2*unit.hitSize/36;
            var IR = unit.hitSize-4*unit.hitSize/36 + Math.sin(Time.time*1.5*Math.PI/180)*2*unit.hitSize/36;
            Draw.z(109);
            Draw.color(color);
            Lines.stroke(1.5*unit.hitSize/36);
            Lines.circle(unit.x, unit.y, IR);
            Draw.color(white);
            Lines.stroke(0.75*unit.hitSize/36);
            Lines.circle(unit.x, unit.y, IR);
            for(var i = 0; i < 8; i++){
                var angle = i* 360 / 8 + Time.time * 1;
                var angle3 = i* 360 / 8 + Time.time * 0.5;
                Draw.color(color);
                Fill.circle(unit.x + Angles.trnsx(angle3, IR), unit.y + Angles.trnsy(angle3, IR), 3*unit.hitSize/36);
                Drawf.tri(unit.x + Angles.trnsx(angle3, IR), unit.y + Angles.trnsy(angle3, IR), 3*unit.hitSize/36, -8*unit.hitSize/36, angle3);
                Draw.color(white);
                Fill.circle(unit.x + Angles.trnsx(angle3, IR), unit.y + Angles.trnsy(angle3, IR), 1.5*unit.hitSize/36);
                Drawf.tri(unit.x + Angles.trnsx(angle3, IR), unit.y + Angles.trnsy(angle3, IR), 1.5*unit.hitSize/36, -6*unit.hitSize/36, angle3);
            }
            Draw.color(color);
            Lines.stroke(2*unit.hitSize/36);
            Lines.circle(unit.x, unit.y, OR);
            Draw.color(white);
            Lines.stroke(1*unit.hitSize/36);
            Lines.circle(unit.x, unit.y, OR);
            for(var i = 0; i < 8; i++){
                var angle = i* 360 / 8 + Time.time * 1;
                var angle3 = i* 360 / 8 + Time.time * 0.5;
                Draw.color(color);
                Fill.circle(unit.x + Angles.trnsx(angle, OR), unit.y + Angles.trnsy(angle, OR), 4*unit.hitSize/36);
                Drawf.tri(unit.x + Angles.trnsx(angle, OR), unit.y + Angles.trnsy(angle, OR), 4*unit.hitSize/36, -16*unit.hitSize/36, angle);
                Draw.color(white);
                Fill.circle(unit.x + Angles.trnsx(angle, OR), unit.y + Angles.trnsy(angle, OR), 2*unit.hitSize/36);
                Drawf.tri(unit.x + Angles.trnsx(angle, OR), unit.y + Angles.trnsy(angle, OR), 2*unit.hitSize/36, -14*unit.hitSize/36, angle);
            }
            Draw.reset();
        },
        localized(){
            return "Self Regeneration";
        }
    });
}
module.exports = SelfRegenerationAbility;