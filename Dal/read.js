import {readFile} from 'fs/promises'
import Riddle from '../clases/riddle.js';


export async function readDB(){
    const dataInFile = await readFile('dataBase/riddleDB.txt', 'utf-8');
    let pooledData =await JSON.parse(dataInFile)
    return pooledData;

    
    // for (let index = 0; index < pooledData.length; index++) {
    //     const riddle = new Riddle(pooledData[index]);
    //     // riddlesArr.push(riddle)   
    //     // console.log(riddlesArr)  
    //     return riddle
    // }
}


