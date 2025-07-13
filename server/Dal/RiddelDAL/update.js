import { readRiddleDB } from "./read.js";
import {idSorter}from './create.js'
import {writeFile,readFile} from 'fs/promises'
import PromptSync from 'prompt-sync';



export async function updateRiddleById(id,riddle) {
    const dataInFile = await readFile('./../CLIENT/dataBase/riddleDB.txt', 'utf-8');
    // console.log(dataInFile)
    let pooledData = JSON.parse(dataInFile);
    for (let index = 0; index < pooledData.length; index++) {
        if(pooledData[index]["id"]==id){
            // console.log(pooledData[index])
            pooledData[index] = riddle;
            // console.log(pooledData[index])
            return "succes"
            }
        }
    
    console.log(pooledData)
    idSorter(pooledData);

    pooledData = JSON.stringify(pooledData);
    await writeFile('./../CLIENT/dataBase/riddleDB.txt', pooledData);
}
// updateRiddleById(2,{"poper":"mefager"})


        





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


