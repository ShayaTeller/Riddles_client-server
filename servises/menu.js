import PromptSync from 'prompt-sync';
import {playGame} from './game.js'

export async function mainMenu() {
    

    const prompt = PromptSync();
    const value = prompt(`What do you want to do?
1. Play the game
2. Create a new riddle
3. Read all riddles
4. Update an existing riddle
5. Delete a riddle
6. View leaderboard`)
    switch (value) {
        case "1":
            playGame()
        break;

        case "2":
            riddleObj.difficulty = prompt(`enter new the difficulty: `)
            break;

        case "3":
            riddleObj.taskDescription = prompt(`enter the new taskDescription`)
            break;

        case "4":
            riddleObj.correctAnswer = prompt(`enter new the correctAnswer`)
            break;

        default:
            break;
    }
}
