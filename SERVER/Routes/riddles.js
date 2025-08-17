import express from 'express';
import { insertNewRiddel, getAllRiddeles, deletedByQuestion } from '../Dal/riddlesDal.js'
import { tokenVerifier, authorizeRoles } from '../Authentication/tokenHandler.js'
import {addNewRiddle} from '../controlers/riddleCtrl.js'
const router = express.Router();

// getting all riddels
router.get('/riddles', async (req, res) => {
    let data = await getAllRiddeles();
    res.json(data);
});

// create a new riddle with a Post method
router.post('/riddles', async (req, res) => {
    res.send(await insertNewRiddel(req));
});

router.delete('/riddles/:question', async (req, res) => {
    res.send(await deletedByQuestion(req.params.question));
});

export default router;



// router.put('/riddles/:id', async (req, res) => {
//     // console.log(req.body)
//     res.end(await updateRiddleById(req.params.id, req.body)
//     )
// })

// getting one riddle by id
// router.get('/riddles/:id', async (req, res) => {
//     res.json(found);
// });
