const destructedtime = new ObjectMap();
const regentime = new ObjectMap();
Events.run(Trigger.update, () => {
    destructedtime.forEach(entry =>{
        let unit = entry.key;
        if(unit != null){
            if(unit.dead || !unit.isAdded()){
                destructedtime.remove(unit);
            }
        }
    });
    regentime.forEach(entry =>{
        let unit = entry.key;
        let value = entry.value;
        if(unit != null){
            if((unit.dead || !unit.isAdded()) || (Time.time-value) >= 600){
                regentime.remove(unit);
            }
        }
    });
});

Events.on(UnitDamageEvent, e => {
    let unit = e.unit;
    if(unit != null){
        regentime.put(unit,Time.time);
    }
});

module.exports = {
    destructedtime: destructedtime,
    regentime: regentime
}