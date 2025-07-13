import express from 'express';
import { createNewRiddle } from '../Dal/RiddelDAL/create.js'
import { readRiddleDB } from '../Dal/RiddelDAL/read.js'
import { updateRiddleById } from '../Dal/RiddelDAL/update.js'
import { deleteRiddleBiId } from '../Dal/RiddelDAL/delete.js'

// import Riddle from '../../clases/riddle.js'

const router = express.Router();


// getting one riddle by id
router.get('/riddles/:id', async (req, res) => {
    const id = Number(req.params.id);
    let pulledData = await readRiddleDB('../CLIENT/dataBase/riddleDB.txt')
    const found = pulledData.find(r => r.id === id);
    if (!found) {
        return res.status(404).json({ error: `not found` });
    }
    res.json(found);
});


// this route dfine a request whit GET method , the respons wiil be a json with all riddles.
router.get('/riddles', async (req, res) => {
    let data = await readRiddleDB()
    res.end(JSON.stringify(data))
})


// create a new riddle with a Post method
router.post('/riddles', async (req, res) => {
    const riddle = req.body;
    createNewRiddle(riddle);
    res.end("succses")
})

router.put('/riddles/:id', async (req, res) => {
    // console.log(req.body)
    res.end(await updateRiddleById(req.params.id,req.body)
    )
})


router.delete('/riddles/:id', async (req, res) => {
    res.send(deleteRiddleBiId(req.params.id)
    )
})



export default router;
