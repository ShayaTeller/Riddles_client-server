import {readFile} from 'fs/promises'
// import Riddle from '../clases/riddle.js';

/***
 * read the exsisting players 
 */
export async function readPlayrDB(){
    const dataInFile = await readFile('dataBase/playerDB.txt', 'utf-8');
    let pooledData =await JSON.parse(dataInFile)
    return pooledData;

}

/**
 * sort the id from 0>>...to the_last_argoment,(hsomthing like aoutomaticly number) 
 * when i send back to the databese
 */ 
export function idSorter(DBdata) {
    let counter = 0
    for (let index = 0; index < DBdata.length; index++) {
        counter++;
        DBdata[index]["id"] = counter;
    }
};



