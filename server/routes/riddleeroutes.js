import express from 'express';
import { readRiddleDB } from '../../CLIENT/Dal/RiddelDAL/read.js'
import { idSorter} from '../../CLIENT/Dal/RiddelDAL/create.js'
import { writeFile, readFile } from 'fs/promises';
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



router.get('/riddles', async (req, res) => {
    // C:\dev\jsNew\RiddlesClientServer\CLIENT\dataBase\riddleDB.txt

    let pulledData = await readRiddleDB('../CLIENT/dataBase/riddleDB.txt')
    res.end(JSON.stringify(pulledData))

})



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
    res.end("succses")})
    

        // res.write("create new riddle succeful")});

        




router.put('/riddles/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    const updatedRiddle = req.body;
    console.log(updatedRiddle)

    let dataInFile1 = await readRiddleDB('../CLIENT/dataBase/riddleDB.txt')
    for (let index = 0; index < dataInFile1.length; index++) {
        if (dataInFile1[index]["id"] == id) {
            dataInFile1[index] = updatedRiddle
            await writeFile('../dataBase/riddleDB.txt', dataInFile1)
            res.end("succses")
        }
    }
    res.end("faild!")
})

// router.delete()

// export async function createNewRiddle(newRiddle) {
//     try {


//         await writeFile('../../../dataBase/riddleDB.txt', JSON.stringify(pooledData, null, 2));
//         console.log("Riddle saved successfully!");
//     } catch (error) {
//         console.error("Error writing to DB:", error);
//     }
// }





export default router;
