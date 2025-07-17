
import { platform } from 'os';
import Player from '../clases/player.js';

export async function CheckIfExistInFile(name) {
    
    for (let index = 0; index < exsistplayers.length; index++) {
        if (exsistplayers[index]["name"] === name) {
            let Player1 = new Player(name);
            Player1.id = exsistplayers[index]["id"];
            Player1.name = exsistplayers[index]["name"];
            Player1.lowestTime = exsistplayers[index]["lowestTime"]; // ✅ תיקון השם
            return Player1;
        }
    }

    // אם לא מצאנו אף אחד – מחוץ ללולאה
    let Player2 = new Player(name);
    return Player2;
}

