import Riddle from './clases/riddle.js';
import Player from './clases/player.js';
import PromptSync from 'prompt-sync';
import { readDB } from './Dal/read.js'
import { updateRiddleById } from './Dal/update.js'
import { deleteRiddleBiId } from './Dal/delete.js'
import { createNewRiddle, askForRiddle } from './Dal/create.js'
import { readFile } from 'fs';
// ask the user what level he whant
export async function playGame() {
    const prompt = PromptSync();


    const level = prompt('Choose difficulty: easy / medium / hard:');

    const allRiddles = await readDB()
    console.log(typeof allRiddles)
    // initilyze the riddles list filterd by riddle-level
    let filtertRiddleList = allRiddles.filter((item) => item.difficulty === level);

// taks user name
    const name = prompt(`enter yor name!`)

    // initilyze a new pleyer (instance) whit "name"
    const player = new Player(name)

    // runing whit foreach of the correntRiddlelist, in each step he do:
    filtertRiddleList.forEach(element => {
        // create new instance of Riidle class
        const riddle = new Riddle(element);
        let start = Date.now()
        riddle.ask(start)
        let endtime = Date.now()
        player.recordTime(start, endtime)
    }
    )

    console.log(`hello pleyr: ${player.name}\nyou win!\nlook of your information:`)
    console.log(`the total time is: ${player.showStats() / 1000} seconds`)
    console.log(`the average of answer one riddle is:${player.showStats() / player.times.length / 1000} seconds`)

}



