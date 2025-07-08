import { readFile, writeFile } from 'fs/promises';
import { idSorter } from '../PlayerDAL/read.js';


/**
 * this genegal function write the player daetailes into the data base,
 * chacking if it exsist ..go in to see..
 */
export async function writePlayr(player) {
    let newPlayer = {
        id: 0,
        name: player.name,
        lowestTime: player.lowestTime
    };

    // read the existing players from the db , to compare and update detailes,the type now is "string"
    const dataInFile = await readFile('./dataBase/playerDB.txt', 'utf-8');
    //pars the existing data from string to an json object
    let pooledData = JSON.parse(dataInFile);
//*******all the code down is from chat GPT i'm sorry */
    // חפש אם כבר קיים שחקן עם אותו שם
    const existingIndex = pooledData.findIndex(p => p.name === newPlayer.name);

    if (existingIndex !== -1) {
        // אם קיים - עדכן את השחקן
        pooledData[existingIndex] = newPlayer;
    } else {
        // אם לא קיים - הוסף אותו
        pooledData.push(newPlayer);
    }

    // מיין לפי ID
    idSorter(pooledData);

    // כתוב לקובץ
    await writeFile('./dataBase/playerDB.txt', JSON.stringify(pooledData, null, 2)); // עם ריווח יפה
}
