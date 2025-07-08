import { readRiddleDB } from "./read.js";
import { writeFile } from "fs/promises";
import Riddle from "../../clases/riddle.js";
import PromptSync from 'prompt-sync';
import { log } from "console";



export async function updateRiddleById(num) {
    let pulledData = await readRiddleDB();
    for (let index = 0; index < pulledData.length; index++) {
        if (pulledData[index]["id"] == num) {
            const riddleObj = new Riddle(pulledData[index]);
            const prompt = PromptSync();
const value = prompt(`to update :
                        name 1
                        difficulty 2
                        taskDescription 3
                        correctAnswer 4
                        enter your choosing`);

            switch (value) {
                case "1":
                    const oldname = riddleObj.name;
                    riddleObj.name = prompt(`enter the new name: `)
                    console.log(`you change from name: ${oldname.toUpperCase()}, to new the name: ${riddleObj.name.toUpperCase()}`);
                    
                    break;

                case "2":
                    const oldDifficulty = riddleObj.difficulty;
                    riddleObj.difficulty = prompt(`enter new the difficulty: `)
                    console.log(`you change from difficulty: ${oldDifficulty.toUpperCase()}, to the new difficulty: ${riddleObj.difficulty.toUpperCase()}`);

                    break;

                case "3":
                    const oldTaskDescription = riddleObj.taskDescription;
                    riddleObj.taskDescription = prompt(`enter the new taskDescription`)
                    console.log(`you change from taskDescription: ${oldTaskDescription.toUpperCase()}, to the new taskDescription: ${riddleObj.taskDescription.toUpperCase()}`);

                    break;

                case "4":
                    const oldCorrectAnswer = riddleObj.correctAnswer;
                    riddleObj.correctAnswer = prompt(`enter new the correctAnswer`)
                    console.log(`you change from oldCorrectAnswer: ${oldCorrectAnswer.toUpperCase()}, to the new taskDescription: ${riddleObj.correctAnswer.toUpperCase()}`);

                    break;

                default:
                    break;
            }
            pulledData[index] = riddleObj
        }    }
    pulledData = JSON.stringify(pulledData)
   await writeFile('dataBase/riddleDB.txt', pulledData)

}

// export async function updateRiddleById(Id) {
//     // let exsistData = await readDB();
//     // for (let i = 0; i < exsistData.length; i++) {
//     //     if(exsistData[i]["id"]==Id){
//     //     }
//     //     }
        
//     const riddleToUpdate = "a"
//     //  exsistData[i]["id"];
//     console.log(riddleToUpdate)



