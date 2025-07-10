import { readRiddleDB } from "./read.js";
import { writeFile } from "fs/promises";
import Riddle from "../../clases/riddle.js";
import PromptSync from 'prompt-sync';
import { log } from "console";
import {fetchToReadRiddleById,fetchToUpdateRiddleById} from '../../Services/api.js'



// export async function updateRiddleById(id) {
//             const oldRiddle = await fetchToReadRiddleById(id);

//             // const updateRiddle =  askToUpdate(oldRiddle)
//             // await fetchToUpdateRiddleById(id,updateRiddle)
//         }






// export function askToUpdate(){
//             const prompt = PromptSync();
        //     const id =  prompt("enter riddle id that you whont update");
        //     const value = prompt(`to update :
        //                 name 1
        //                 difficulty 2
        //                 taskDescription 3
        //                 correctAnswer 4
        //                 enter your choosing`);
        //         let riddleObj ={};
        //     switch (value) {
        //         case "1":
        //             riddleObj.name = prompt(`enter the new name: `)
        //             console.log(`you change from name: ${oldname.toUpperCase()}, to new the name: ${riddleObj.name.toUpperCase()}`);
                    
        //             break;

        //         case "2":
        //             riddleObj.difficulty = prompt(`enter new the difficulty: `)
        //             console.log(`you change from difficulty: ${oldDifficulty.toUpperCase()}, to the new difficulty: ${riddleObj.difficulty.toUpperCase()}`);

        //             break;

        //         case "3":
        //             riddleObj.taskDescription = prompt(`enter the new taskDescription`)
        //             console.log(`you change from taskDescription: ${oldTaskDescription.toUpperCase()}, to the new taskDescription: ${riddleObj.taskDescription.toUpperCase()}`);

        //             break;

        //         case "4":
        //             riddleObj.correctAnswer = prompt(`enter new the correctAnswer`)
        //             console.log(`you change from oldCorrectAnswer: ${oldCorrectAnswer.toUpperCase()}, to the new taskDescription: ${riddleObj.correctAnswer.toUpperCase()}`);
        //             break;

        //         default:
        //             console.log("warning")
        //             break;
        //         return riddleObj
        //     }
        // }
    export function askForRiddle() {
    
        const prompt = PromptSync();
        const id = prompt("enter id: ");
        const name = prompt("enter name: ");
        const taskDescription = prompt("enter taskDescription: ");
        const difficulty = prompt("enter difficulty: ");
        const correctAnswer = prompt("enter correctAnswer: ");
        const timeLimit = prompt("enter timeLimit: ");
        return {
            id: id,
            name: name,
            difficulty: difficulty,
            taskDescription: taskDescription,
            correctAnswer: correctAnswer,
            timeLimit: timeLimit
    
        }

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


