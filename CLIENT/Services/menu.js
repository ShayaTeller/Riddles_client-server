import InputHandler from "./inputHandler.js";
import { playGame } from "./game.js";
import { askForRiddle } from "./createRiddel.js";
import {
  fetchNewRiddle,
  fetchToReadRiddleDB,
  fetchToReadRiddleById,
  fetchToDeleteRiddleByQuestion,
  CreateNewPlayerAndPassword,
  loginPlayerAndPassword,
  loginPlayerAndPasswordAndToken,
} from "./api.js";

// export async function authenticationMenu() {
//   try {
//     let userName, password;
//     const prompt = PromptSync();
//     console.clear();
//     const value = prompt(
//       `welcome to riddles system:\n press:\n1. to login\n2. to signup\n3. to Play as a guest`
//     );
//     console.clear();
//     switch (value) {
//       case "1":
//         let result;
//         userName = prompt(`enter your user name: `);
//         password = prompt(`enter your password: `);
//         await loginPlayerAndPassword(userName, password);
//         mainMenu();

//         break;
//       case "2":
//         console.log("welcome!");
//         userName = prompt(`enter your user name: `);
//         password = prompt(`enter a password: `);
//         const id = await CreateNewPlayerAndPassword(userName, password);
//         break;
//       case "3":
//         await playGame();

//         break;

//       default:
//         break;
//     }
//   } catch (error) {
//     console.error("Error in authentication menu:", error);
//   }
// }

export async function mainMenu() {

  const input = new InputHandler();

  try {
    console.log("Welcome to Riddles Game!");

    const choice = await input.getMainMenuChoice();
    
    switch (choice) {
      case "Play the game":
        await playGame(input);
        break;

      case "Create a new riddle":
        const newRiddle = await askForRiddle(input);
        //    console.log(riddele)
        await fetchNewRiddle(newRiddle);
        console.log(newRiddle)
        console.log("Riddle created successfully!");
        break;

      case "Read all riddles":
        console.log("Loading riddles...");
        const riddles = await fetchToReadRiddleDB();
        console.log("All Riddles:");
        riddles.forEach((riddle, index) => {
          console.log(
            `${index + 1}. [${riddle.difficulty}] ${riddle.taskDescription}`
          );
        });
        break;

      case "Delete a riddle":
        const Question = await input.ask("Enter riddle Question to delete: ");
        await fetchToDeleteRiddleByQuestion(Question);
        console.log("Riddle deleted!");
        break;

      case "Update an existing riddle":
        console.log("Update feature coming soon...");
        break;

      case "View leaderboard":
        console.log("Leaderboard coming soon...");
        break;

      default:
        break;
    }

    const continueGame = await input.ask("\nDo you want to continue? (y/n): ");
    if (continueGame.toLowerCase() === "y") {
      input.close();
      await mainMenu(); // התחל מחדש
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    input.close();
  }
}
