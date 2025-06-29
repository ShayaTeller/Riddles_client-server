
import AllRiddles from './riddlesindex.js';
import Riddle from './clases/riddle.js';
import Player from './clases/player.js';
import PromptSync from 'prompt-sync';



const prompt = PromptSync();



const level = prompt('Choose difficulty: easy / medium / hard: ');
const riddleList = AllRiddles

let filtertRiddleList = riddleList.filter((item) => item.difficulty === level);

const name = prompt(`enter yor name!`)
const pley1 = new Player(name)

filtertRiddleList.forEach(element => {
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