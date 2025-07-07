import { readFile, writeFile } from 'fs/promises';
import { idSorter } from '../PlayerDAL/read.js';

export async function writePlayr(player) {
    let newPlayer = {
        id: 0,
        name: player.name,
        lowestTime: player.lowestTime
    };

    const dataInFile = await readFile('./dataBase/playerDB.txt', 'utf-8');
    let pooledData = JSON.parse(dataInFile);

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
