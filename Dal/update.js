import { readDB } from "./read.js";
import { writeFile } from "fs/promises";
import Riddle from "../clases/riddle.js";
import PromptSync from 'prompt-sync';



export async function updateRiddleById(Id) {
    let id = Id;
    let pooledData = await readDB();
    for (let index = 0; index < pooledData.length; index++) {
        if (pooledData[index]["id"] == id) {
            const riddle = pooledData[index];
            const riddleObj = new Riddle(riddle);
            const prompt = PromptSync();

            const value = prompt(`to update :
name -1 
difficulty -2
taskDescription -3
correctAnswer -4
enter your choosing`)

            switch (value) {
                case "1":
                    riddleObj.name = prompt(`enter  the new name: `)
                    break;

                case "2":
                    riddleObj.difficulty = prompt(`enter new the difficulty: `)
                    break;

                case "3":
                    riddleObj.taskDescription = prompt(`enter the new taskDescription`)
                    break;

                case "4":
                    riddleObj.correctAnswer = prompt(`enter new the correctAnswer`)
                    break;

                default:
                    break;
            }
            pooledData[index] = riddleObj
        }

    }
    pooledData = JSON.stringify(pooledData)
    writeFile('dataBase/riddleDB.txt', pooledData)

}