import express from 'express';
import { readRiddleDB } from '../../Dal/RiddelDAL/read.js'
import { idSorter } from '../../Dal/RiddelDAL/create.js';
import { writeFile } from 'fs/promises';


const router = express.Router();

router.get('/getallriddles', async (req, res) => {
    console.log(req.method, req.url)
    let data = await readRiddleDB('../dataBase/riddleDB.txt')
    res.end(JSON.stringify(data))
});

router.post('/createNewRiddle', async (req, res) => {
    const riddle = req.body;
    console.log(riddle)
    let dataInFile1 = await readRiddleDB('../dataBase/riddleDB.txt')
    dataInFile1.push(riddle)
    idSorter(dataInFile1);
    // await writeFile('../../dataBase/riddleDB.txt', JSON.stringify(pooledData, null, 2));
    console.log(dataInFile1)
    console.log("Riddle saved successfully!");

    await writeFile('../dataBase/riddleDB.txt', JSON.stringify(dataInFile1))
    res.end("succses")
})

// export async function createNewRiddle(newRiddle) {
//     try {


//         await writeFile('../../../dataBase/riddleDB.txt', JSON.stringify(pooledData, null, 2));
//         console.log("Riddle saved successfully!");
//     } catch (error) {
//         console.error("Error writing to DB:", error);
//     }
// }





export default router;
