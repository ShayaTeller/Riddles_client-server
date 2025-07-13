import { readFile, writeFile } from 'fs/promises'
import PromptSync from 'prompt-sync';

export async function createNewRiddle(newRiddle) {
    const dataInFile = await readFile('./../CLIENT/dataBase/riddleDB.txt', 'utf-8');
    console.log(dataInFile)
    let pooledData = JSON.parse(dataInFile);
    pooledData.push(newRiddle);
    idSorter(pooledData);

    pooledData = JSON.stringify(pooledData);
    writeFile('./../CLIENT/dataBase/riddleDB.txt', pooledData);

}

// export async function createNewRiddle(newRiddle) {
//         try {
//             const dataInFile = await readFile('dataBase/riddleDB.txt', 'utf-8');
//             let pooledData = JSON.parse(dataInFile);
//             pooledData.push(newRiddle);
//             idSorter(pooledData);

//             pooledData = JSON.stringify(pooledData);
//             writeFile('dataBase/riddleDB.txt', pooledData);
//         }
//          catch(error){
//             console.log(error);
//          }  }
// export async function createNewRiddle(newRiddle) {
//     try {
//         const dataInFile = await readFile('../../dataBase/riddleDB.txt', 'utf-8');
//         let pooledData = [];

//         if (dataInFile.trim()) {
//             pooledData = JSON.parse(dataInFile); // קובץ שמור כ-array שלם
//         }

//         pooledData.push(newRiddle);
//         idSorter(pooledData);

//         await writeFile('../../../dataBase/riddleDB.txt', JSON.stringify(pooledData, null, 2));
//         console.log("Riddle saved successfully!");
//     } catch (error) {
//         console.error("Error writing to DB:", error);
//     }
// }




// sort the id from 0>>.. last_riddle, when i send back to the databese
export function idSorter(DBdata) {
    let counter = 0
    for (let index = 0; index < DBdata.length; index++) {
        counter++;
        DBdata[index]["id"] = counter;
    }
};

// asking the user to insert the information of the new riddle
export function askFornewRiddle() {

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



// export async function fetchNewRiddle(fn) {
//     const newriddle = fn()
//     fetch("http://localhost:3000/createNewRiddle", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newriddle)
//     })














// .then(response => response.json())
// .then(data => {
//   console.log("result:", data);
// })
// .catch(err => {
//   console.error("error:", err);
// });


// }
// const riddles = [ /* המערך שלך כפי ששלחת למעלה */ ];

// // נמיר כל אובייקט לשורת JSON אחת
// const lines = riddles.map(obj => JSON.stringify(obj)).join('\n');

// writeFile('riddles.txt', lines, (err) => {
//   if (err) {
//     console.error('שגיאה בכתיבה:', err);
//   } else {
//     console.log('נשמר בהצלחה!');
//   }
// });
