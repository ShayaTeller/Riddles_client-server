import PromptSync from 'prompt-sync';
import { playGame } from './game.js'
import { readRiddleDB } from '../Dal/read.js'
import { updateRiddleById } from '../Dal/update.js'
import { deleteRiddleBiId } from '../Dal/delete.js'
import { createNewRiddle, askForRiddle } from '../Dal/create.js'
import { log } from 'console';

export async function mainMenu() {

    try {
        const prompt = PromptSync();
        const value = prompt(`What do you want to do?
1. Play the game
2. Create a new riddle
3. Read all riddles
4. Delete a riddle
5. Update an existing riddle
6. View leaderboard\n`)
        switch (value) {
            case "1":
                playGame()
                break;

            case "2":
                createNewRiddle(askForRiddle());
                break;

            case "3":
                const data = await readRiddleDB()
                console.log(data)
                break;

            case "4":
                let id = prompt("enter riddle id that you whont deleted")
                deleteRiddleBiId(id)
                break;

            case "5":
                let num = prompt("enter riddle id that you whont update");
                updateRiddleById(num);
                break;

            default:
                break;
        }
    }
    catch {
        console.log(Error);

    }

}

