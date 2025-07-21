import Riddle from '../clases/riddle.js';
import Player from '../clases/player.js';
import PromptSync from 'prompt-sync';
// import { CheckIfExistInFile } from './playercheck.js'
import { fetchToReadRiddleDB ,CheckIfExistInFile, CreateNewPlayer} from './api.js'
import { all } from 'proxy-addr';
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
    console.log(await allRiddles)
    // initilyze the riddles list filterd by riddle-level
    let filtertRiddleList = allRiddles.filter((item) => item.level === level);
    console.log(filtertRiddleList)
    //  allRiddles = allRiddles.j

    // taks user name
    const name = prompt(`enter your name!`)
    // initilyze a new pleyer (instance) whit "name"
    
    let id = await CheckIfExistInFile(name)
    if (await id==false){
        await CreateNewPlayer(name);
        id = await CheckIfExistInFile(name);
    }
    


    // runing whit foreach of the correntRiddlelist, in each step he do:
    filtertRiddleList.forEach(element => {
        // console.log(element.question)
        // create new instance of Riidle class
        const riddle =  new Riddle(element);
        // const riddle = new Riddle(element.level,element.,element.answer);
        let start = Date.now();
        riddle.ask(start);
        let endtime = Date.now();
        player.recordTime(start, endtime);
    })



    player.lowestTimeCheck()
    console.log(player)
    // await writePlay/r(player)
    console.log(`hello pleyr: ${player.name}\nyou win!\nlook of your information:`)
    console.log(`the total time is: ${player.showStats() / 1000}, seconds`)
    console.log(`the average of answer one riddle is:${player.showStats() / player.times.length / 1000} seconds`)

}



