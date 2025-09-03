import express from "express";
import { getAllPlayers, createNewPlayer, checkIfExsist, getPlayerId, writeToPlayerScores, updatePlayerBestTime } from "../Dal/playerDal.js";
// import { tokenCreator, tokenVerifier, verifyTokenOnly, authorizeRoles, checkExistingToken } from '../Authentication/tokenHandler.js'
// import { login, singUp } from '../Authentication/loginManeger.js'
import { getPlayerByName, updatePlayerLtime, addNewPlayer, addPlayerScore } from '../controlers/playersCtrl.js'
const router = express.Router();


// this endpoint getting all players
router.get('/players', async (req, res) => {
    let data = await getAllPlayers()
    res.json(data)
});


// this and point bring a player by name
router.get('/player/:name', async (req, res) => {
    console.log(req.body)
    res.send(await getPlayerByName(req));
});


// sedt an new player to db
router.post('/player', async (req, res) => {
    res.send(await addNewPlayer(req));
});

// post the history of plaeys by players
router.post('/player/addScore', async (req, res) => {
    res.send(await addPlayerScore(req));
});

// router.post('/player/singup', async (req, res) => {
//     let result = await singUp(req, res);
//     res.send(result)
// });


// update the besttime by player (use if is lower from lowest time)
router.put('/player/updateltime', async (req, res) => {
    res.send(await updatePlayerLtime(req));
});



// this endpoint create a new player 

// router.post('/player', tokenVeryfayer, async (req, res) => {
//     const Name = req.body.name;
//     const id = await creatNewPlayer(Name);
//     res.json(id);
// });
//  router.post('/player/login',authorizeRoles("user"), async (req, res) => {
// await login(req, res)
//  })

// router.post('/player/addScore', async (req, res) => {
//     console.log(req.body);
//     const id = req.body.id
//     const riddelid = req.body.riddelid
//     const solvetime = req.body.solvetime
//     const result = await writeToPlayerScores(id, riddelid, solvetime);
//     res.send('succes')
// });

// router.post('submit-score', async (req, res) => {

// })


// רק User/Admin יכולים לראות שחקנים/חידות

export default router;















// router.post('/player/login',async(req,res,next)=>{
//     await authenticationLogin(req,res)
// })













// if exsist return true;
// router.get('/player/:name', async (req, res) => {
// /-/     const name = req.params.name;
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
