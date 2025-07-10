import {readFile} from 'fs/promises'
// import Riddle from '../clases/riddle.js';

export async function readRiddleDB(path){
    const dataInFile = await readFile(path, 'utf-8');
    let pooledData =await JSON.parse(dataInFile)
    return pooledData;

}


// export async function fetchToReadRiddleDB(){
//     const dataInFile = await fetch(`http://localhost:3000/getallriddles`)
//     let pooledData =await dataInFile.json()
//     // console.log()
//     console.log(pooledData)
//     return pooledData
// }






