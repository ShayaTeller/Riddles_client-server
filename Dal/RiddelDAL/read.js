import {readFile} from 'fs/promises'
// import Riddle from '../clases/riddle.js';

export async function readRiddleDB(){
    const dataInFile = await readFile('dataBase/riddleDB.txt', 'utf-8');
    let pooledData =await JSON.parse(dataInFile)
    return pooledData;

}



