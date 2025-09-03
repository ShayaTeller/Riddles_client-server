import express from 'express';
import { insertNewRiddel, getAllRiddeles, deletedByQuestion } from '../Dal/riddlesDal.js'
// import { tokenVerifier, authorizeRoles } from '../Authentication/tokenHandler.js'
import {addNewRiddle} from '../controlers/riddleCtrl.js'
const router = express.Router();

// getting all riddels
router.get('/riddles', async (req, res) => {
    let data = await getAllRiddeles();
    res.send(data);
});

// strucore of a new riddle
//      "id": 0,
//     "name": "test1",
//     "difficulty": "easy",
//     "taskDescription": "10+10",
//     "correctAnswer": "2",
//     "timeLimit": 30

// create a new riddle with a Post method
router.post('/riddles', async (req, res) => {
    res.send(await insertNewRiddel(req.body));
});

/***************************************** */
// delete an exsisting riddle by Question in the parrams
router.delete('/riddles/:question', async (req, res) => {
    res.send(await deletedByQuestion(req.params.question));
});

export default router;


