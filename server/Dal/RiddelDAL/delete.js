// import { createNewRiddle } from "./create.js";
import { writeFile, readFile } from "fs/promises";

export async function deleteRiddleBiId(id) {
    let dataInFile = await readFile('./../CLIENT/dataBase/riddleDB.txt', 'utf-8');
    dataInFile = JSON.parse(dataInFile)
    for (let index = 0; index < dataInFile.length; index++) {
        if (dataInFile[index]["id"] == id) {
            console.log('Deleting:', dataInFile[index]);
            dataInFile.splice(index, 1)
        }}
    //    return "riddle not found!"

    dataInFile = await JSON.stringify(dataInFile, null, 2)
   await writeFile('./../CLIENT/dataBase/riddleDB.txt', dataInFile)
}



// export async function deleteRiddleBiId(id) {
//     try {
//         let dataInFile = await readFile('./../CLIENT/dataBase/riddleDB.txt', 'utf-8');
//         dataInFile = JSON.parse(dataInFile);

//         let found = false;
//         for (let index = 0; index < dataInFile.length; index++) {
//             if (dataInFile[index]["id"] == id) {
//                 console.log('Deleting:', dataInFile[index]);
//                 dataInFile.splice(index, 1);
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             return "riddle not found!";
//         }

//         await writeFile('./../CLIENT/dataBase/riddleDB.txt', JSON.stringify(dataInFile, null, 2));
//         return "deleted successfully";
//     } catch (err) {
//         console.error(err);
//         return "error deleting riddle";
//     }
// }
