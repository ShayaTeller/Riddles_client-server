import PromptSync from 'prompt-sync';
import { playGame } from './game.js'
import { readRiddleDB } from '../Dal/RiddelDAL/read.js'
import { deleteRiddleBiId } from '../Dal/RiddelDAL/delete.js'
import { askFornewRiddle } from '../Dal/RiddelDAL/create.js'
import { askForRiddle } from '../Dal/RiddelDAL/update.js'
import { fetchNewRiddle, fetchToReadRiddleDB, fetchToReadRiddleById ,fetchToDeleteRiddleById} from './api.js'
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
                fetchNewRiddle(askFornewRiddle)

                break;

            case "3":
                // const data = await readRiddleDB()
                console.log(await fetchToReadRiddleDB());
                break;

            case "4":
                let id = prompt("enter riddle id that you whont deleted")
                await fetchToDeleteRiddleById(id)
                break;

            case "5":
                fetchNewRiddle(askForRiddle)
                // const obj = askForRiddle()
                // console.log(obj)


                break;

            default:
                break;
        }
    }
    catch {
        console.log(Error);

    }

}

