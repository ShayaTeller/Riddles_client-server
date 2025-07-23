import Riddle from '../clases/riddle.js';
import Player from '../clases/player.js';
import PromptSync from 'prompt-sync';
// import { CheckIfExistInFile } from './api.js'
import { fetchToReadRiddleDB, CheckIfExistInFile, CreateNewPlayer, addToPlayerScore } from './api.js'
// import { fetchToReadRiddleDB, CheckIfExistInFile, CreateNewPlayer, addToPlayerScore } from './api.js'
// ask the user what level he whant


export async function playGame() {
    const prompt = PromptSync();

    let level;
    while (true) {
        level = prompt('Choose difficulty: easy / medium / hard:');
        level.toLowerCase();
        if (level == `easy` | level == `medium` | level == `hard`) {
            break;
        }
        else {
            console.log(`Wrong answer, try again.(easy / medium / hard)`)
            continue;
        }
    }


    // const allRiddles = await readRiddleDB()
    let allRiddles = await fetchToReadRiddleDB()
    // console.log(await allRiddles)
    // initilyze the riddles list filterd by riddle-level
    let filtertRiddleList = allRiddles.filter((item) => item.level === level);
    console.log(filtertRiddleList)
    //  allRiddles = allRiddles.j

    // taks user name
    const name = prompt(`enter your name!`);
    // initilyze a new pleyer (instance) whit "name"
    const player = await playerForGame(name);




    // runing whit foreach of the correntRiddlelist, in each step he do:
    filtertRiddleList.forEach(async element => {
        // console.log(element.question)
        // create new instance of Riidle class
        const riddle = new Riddle(element);
        // const riddle = new Riddle(element.level,element.,element.answer);
        let start = Date.now();
        riddle.ask(start);
        let endtime = Date.now();
        const time = player.recordTime(start, endtime);
        const riddelid = riddle.id
        const playerid = player.id.id
        try {
            const result =await addToPlayerScore(playerid, riddelid, time)
            // console.log(result)
        } catch (error) {
            // console.log(error)
        }
        // console.log(riddle)
        // console.log(`playerID:${playerid}, riddleID:${riddelid}, time: ${time}`)

    })



    player.lowestTimeCheck()
    // console.log(player)
    // await writePlay/r(player)

    console.log(`hello pleyr: ${player.name}\nyou win!\nlook of your information:`)
    console.log(`the total time is: ${player.showStats() / 1000}, seconds`)
    console.log(`the average of answer one riddle is:${player.showStats() / player.times.length / 1000} seconds`)

}






async function playerForGame(name) {
    let id = await CheckIfExistInFile(name)
    console.log(id)
    if ( id === false) {
        const p = await CreateNewPlayer(name);
        console.log(p)
        id = await CheckIfExistInFile(name);
        console.log(id)
    }
    return new Player(name, id);
}



// const playertest = await CreateNewPlayer("iddii");
// const playertest = await playerForGame("pppp8pp");

// console.log(playertest.id);