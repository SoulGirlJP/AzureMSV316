importPackage(Packages.server.life);
function enter(pi) {
    var map = pi.getPlayer().getMap();
    if (map.getReactor(2408003).getState() <= 0) {
        var pos = map.getReactor(2408003).getPosition();
        var mob = null;
        if (pi.getPlayer().getMapId() == 240060100) {
            mob = MapleLifeProvider.getMonster(8810025);
        } else if (pi.getPlayer().getMapId() == 240060101) {
            mob = MapleLifeProvider.getMonster(8810129);
        } else {
            mob = MapleLifeProvider.getMonster(8810213);
        }
        pi.getPlayer().getMap().spawnMonsterOnGroundBelow(mob, pos);
        map.getReactor(2408003).setState(1);
        pi.mapMessage(6, "동굴이 울리면서 거대한 생물체가 다가오고 있습니다.")
    }
    return false;
}