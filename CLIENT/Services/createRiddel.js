
export function askForRiddle() {

    const prompt = PromptSync();
    const name = prompt("enter name: ");
    const taskDescription = prompt("enter taskDescription: ");
    const difficulty = prompt("enter difficulty: ");
    const correctAnswer = prompt("enter correctAnswer: ");
    const timeLimit = prompt("enter timeLimit: ");
    return {
        id: 0,
        name: name,
        difficulty: difficulty,
        taskDescription: taskDescription,
        correctAnswer: correctAnswer,
        timeLimit: timeLimit

    }
};
