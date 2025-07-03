import { readDB } from "./read.js";
import { createNewRiddle } from "./create.js";
import { writeFile } from "fs/promises";


export async function deleteRiddleBiId(id) {
    let pooledData = await readDB();
    for (let index = 0; index < pooledData.length; index++) {
        if(pooledData[index]["id"]==id){
            pooledData.splice(index,index+1)
        }
    }
        console.log(pooledData)

        pooledData = await JSON.stringify(pooledData)
    writeFile('dataBase/riddleDB.txt',pooledData)
    }

