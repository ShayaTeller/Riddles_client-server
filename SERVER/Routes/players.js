import express from "express";
import { getAllPlayers,creatNewPlayer,checkIfExsist,getPlayerId } from "../Dal/PlayerDAL/playerDal.js";

const router = express.Router();

// this endpoint getting all players
router.get('/players', async (req, res) => {
    let data = await getAllPlayers()
    res.end(JSON.stringify(data))
})


// if exsist return true;
// router.get('/player/:name', async (req, res) => {
//     const name = req.params.name;
//     const result = await checkIfExsist(name);

//     if(result==true){
//         const playerID =await getPlayerId(name);
//         console.log(playerID)
//         res.send(playerID);
//     }
//     else{
//         res.send(false);
//     }
// })



router.get('/player/:name', async (req, res) => {
    const name = req.params.name;
    const playerId = await getPlayerId(name);

    if (playerId) {
        console.log('Player ID:', playerId);
        res.send(playerId); // להחזיר מחרוזת אם צריך
    } else {
        res.send(false);
    }
});


// this endpoint create a new player 
router.post('/player', async (req, res) => {
    const Name = req.body.name;
    const id = await creatNewPlayer(Name);
        res.end(id)});
        





router.post('submit-score',async(req,res)=>{

})

export default router;
