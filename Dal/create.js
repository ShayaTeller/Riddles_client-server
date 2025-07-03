import { readFile, writeFile } from 'fs/promises'
import PromptSync from 'prompt-sync';


export async function createNewRiddle(newRiddle) {
        try {
            const dataInFile = await readFile('dataBase/riddleDB.txt', 'utf-8');
            let pooledData = JSON.parse(dataInFile);
            pooledData.push(newRiddle);
            idSorter(pooledData);

            pooledData = JSON.stringify(pooledData);
            writeFile('dataBase/riddleDB.txt', pooledData);
        }
         catch(error){
            console.log(error);
         }  }







// sort the id from 0>>.. last_riddle, when i send back to the databese
function idSorter(DBdata) {
    let counter = 0
    for (let index = 0; index < DBdata.length; index++) {
        counter++;
        DBdata[index]["id"] = counter;
    }
};

// asking the user to insert the information of the new riddle
export function askForRiddle() {

    const prompt = PromptSync();
    const name = prompt("enter name: ");
    const taskDescription = prompt("enter taskDescription: ");
    const difficulty = prompt("enter difficulty: ");
    const correctAnswer = prompt("enter correctAnswer: ");
    const timeLimit = prompt("enter timeLimit: ");
    return {
        id: 0,
        name: name,
        difficulty: difficulty,
        taskDescription: taskDescription,
        correctAnswer: correctAnswer,
        timeLimit: timeLimit

    }
};