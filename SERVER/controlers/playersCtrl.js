import {createNewPlayer, getPlayerId,updatePlayerBestTime,getPlayerByname} from '../Dal/playerDal.js'

export async function getPlayerByName(req) {
    let name = req.params.name;
    console.log(name)
    const playerId = await getPlayerByname(name);
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



export async function addNewPlayer(username,password,role) {
    console.log(username,password,role)
    const id = await createNewPlayer(username, role,password);
    return id;
}



export async function addPlayerScore(req) {
    console.log(req.body);
    const id = req.body.id;
    const riddleID = req.body.riddleID;
    const solveTime = req.body.solveTime;
    const result = await writeToPlayerScores(id, riddleID, solveTime);
    if (result) {
        return 'success';
    }
}