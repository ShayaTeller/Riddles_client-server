export async function getPlayerByName(req) {
    let name = req.params.name;
    console.log(name)
    const playerId = await getPlayerId(name);

    if (playerId) {
        return playerId;
    } else {
        return playerId;
    }
}



export async function updatePlayerLtime(req) {
    let id = req.body.id;
    let lowesttime = req.body.lowesttime;
    console.log(id, lowesttime)
    let result = await updatePlayerBestTime(id, lowesttime);
    if (result) {
        return "update succes"
    }
}



export async function addNewPlayer(req) {
    const name = req.body.name;
    const role = req.body.role;
    const id = await creatNewPlayer(name, role);
    return id;

}

export async function addPlayerScore(req) {
    console.log(req.body);
    const id = req.body.id
    const riddelid = req.body.riddelid
    const solvetime = req.body.solvetime
    const result = await writeToPlayerScores(id, riddelid, solvetime);
    if (result) {
        return 'succes'
    }
}