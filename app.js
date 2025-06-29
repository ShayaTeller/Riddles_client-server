
import AllRiddles from './riddlesindex.js';
import Riddle from './clases/riddle.js';
import Player from './clases/player.js';
import PromptSync from 'prompt-sync';



const prompt = PromptSync();


// ask the user what level he whant
const level = prompt('Choose difficulty: easy / medium / hard: ');
// saved the import riddleslist in a vaireble
const riddleList = AllRiddles
// initilyze the riddles list filterd by riddle-level
let filtertRiddleList = riddleList.filter((item) => item.difficulty === level);
// taks user name
const name = prompt(`enter yor name!`)
// initilyze a new pleyer (instance) whit "name"
const pley1 = new Player(name)

// runing whit foreach of the correntRiddlelist, in each step he do:
filtertRiddleList.forEach(element => {
    // create new instance of Riidle class
    const riddle1 = new Riddle(element);
    let start = Date.now()
    riddle1.ask()
    let endtime = Date.now()
    pley1.recordTime(start,endtime)}
)

console.log(`hello pleyr: ${pley1.name}\nyou win!\nlook of your information:`)
console.log(`the total time is: ${pley1.showStats()} seconds`)
console.log(`the average of answer one riddle is:${pley1.showStats()/pley1.times.length} seconds`)

















// const p1 = new Player()


// r03.ask()
// r04.ask()
// r05.ask()
// r06.ask()
// r07.ask()
// p1.showStats()



// r01.ask()
// r02.ask()