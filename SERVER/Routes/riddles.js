import express from 'express';
import { insertNewRiddel, getAllRiddeles, deletedByQuestion } from '../Dal/riddeslDal.js'

const router = express.Router();

// getting all riddels
router.get('/riddles', async (req, res) => {
    let data = await getAllRiddeles()
    data = JSON.stringify(data);
    res.send(data)
});



// create a new riddle with a Post method
router.post('/riddles', async (req, res) => {
    try {
        const riddle = await req.body;
        let newer = await insertNewRiddel(await riddle);
        res.send("success");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


// router.put('/riddles/:id', async (req, res) => {
//     // console.log(req.body)
//     res.end(await updateRiddleById(req.params.id, req.body)
//     )
// })


router.delete('/riddles/:Question', async (req, res) => {
    res.send(await deletedByQuestion(req.params.Question));

})


// getting one riddle by id
router.get('/riddles/:id', async (req, res) => {
    res.json(found);
});

export default router;
