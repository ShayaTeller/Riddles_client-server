import PromptSync from 'prompt-sync';
import { playGame } from './game.js'
import { askForRiddle } from './createRiddel.js'
import { fetchNewRiddle, fetchToReadRiddleDB, fetchToReadRiddleById, fetchToDeleteRiddleByQuestion } from './api.js'


export async function authenticationMenu() {
    try {
        const prompt = PromptSync();
        const value = prompt(`welcome to riddles system:\n press:\n1. to login\n2. to singup\n3. to Play as a guest`)
        switch (value) {
            case "1":

                let userName = prompt(`enter your user name: `)
                let password = prompt(`enter your password: `)
                break;
            case "2":
                console.log('welcome!')
                userName = prompt(`enter your user name: `)
                password = prompt(`enter a password`)
                break;
            case "3":
                await playGame();

                break;

            default:
                break;
        }


    } catch (error) {

    }

}

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
                const riddele = askForRiddle();
                //    console.log(riddele)
                await fetchNewRiddle(JSON.stringify(riddele))

                break;

            case "3":
                // const data = await readRiddleDB()
                console.log(await fetchToReadRiddleDB());
                break;

            case "4":
                let Question = prompt("enter the Question that you whont deleted")
                await fetchToDeleteRiddleByQuestion(Question);
                break;

            case "5":
                // fetchNewRiddle(askForRiddle)
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

