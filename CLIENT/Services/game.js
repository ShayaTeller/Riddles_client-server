import Riddle from "../classes/riddle.js";
import Player from "../classes/player.js";
// import { CheckIfExistInFile } from './api.js'
import {
  fetchToReadRiddleDB,
  CheckIfExistInFile,
  CreateNewPlayer,
  addToPlayerScore,
  updeatLowestTime,
} from "./api.js";
// import { fetchToReadRiddleDB, CheckIfExistInFile, CreateNewPlayer, addToPlayerScore } from './api.js'
// ask the user what level he whant

export async function playGame(input) {
  let level;
  let allRiddles;
  let filtertRiddleList;

  level = await input.getDifficulty();

  // const allRiddles = await readRiddleDB()
  allRiddles = await fetchToReadRiddleDB();
  console.log(allRiddles)

  // initilyze the riddles list filterd by riddle-level
  filtertRiddleList = allRiddles.filter((item) => item.level === level);

  const name = await input.ask(`enter your name!`);

  const player = await playerForGame(name);

  // runing whit foreach of the correntRiddlelist, in each step he do:
  filtertRiddleList.forEach(async (element) => {
    // console.log(element.question);
    // create new instance of Riidle class
    const riddle = new Riddle(element);
    console.log(riddle)
    // const riddle = new Riddle(element.level,element.,element.answer);
    let start = Date.now();
    riddle.ask(input);
    let endtime = Date.now();
    const time = player.recordTime(start, endtime);
    const riddelid = riddle.id;
    const playerid = player.id.id;
    console.log(time);
    try {
      const result = await addToPlayerScore(playerid, riddelid, time);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // console.log(riddle)
    // console.log(`playerID:${playerid}, riddleID:${riddelid}, time: ${time}`)
  });

  let lwoesttime = player.lowestTimeCheck();
  // await updeatLowestTime(player,lwoesttime);

  // console.log(player)
  // await writePlay/r(player)

  console.log(
    `hello pleyr: ${player.name}\nyou win!\nlook of your information:`
  );
  console.log(`the total time is: ${player.showStats() / 1000}, seconds`);
  console.log(
    `the average of answer one riddle is:${
      player.showStats() / player.times.length / 1000
    } seconds`
  );
}

async function playerForGame(name) {
  let player = await CheckIfExistInFile(name);
  let id = player[0].id;
  if (id === false) {
    const p = await CreateNewPlayer(name);
    id = await CheckIfExistInFile(name);
  }
  return new Player(name, id);
}

// const playertest = await CreateNewPlayer("iddii");
// const playertest = await playerForGame("pppp8pp");

// console.log(playertest.id);

// playGame(input);
