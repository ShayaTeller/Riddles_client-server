import { readRiddleDB } from "./read.js";
// import { createNewRiddle } from "./create.js";
import { writeFile } from "fs/promises";

export async function deleteRiddleBiId(id) {
    let pooledData = await readRiddleDB();
    for (let index = 0; index < pooledData.length; index++) {
        if(pooledData[index]["id"]==id){
            pooledData.splice(index,index)
        }
    }
        console.log(pooledData)

        pooledData = await JSON.stringify(pooledData,null,2)
    writeFile('dataBase/riddleDB.txt',pooledData)
    }

