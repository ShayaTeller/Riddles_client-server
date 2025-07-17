import express from "express";
import { readPlayrDB } from "../Dal/PlayerDAL/read.js";
import { writePlayr } from "../Dal/PlayerDAL/create.js";

const router = express.Router();

// this endpoint getting all players
router.get('/players', async (req, res) => {
    let data = await readPlayrDB()
    res.end(JSON.stringify(data))
})

// this endpoint create a new player 
router.post('/players', async (req, res) => {
    await writePlayr(req.body);
    res.end(succes)
})



export default router;
