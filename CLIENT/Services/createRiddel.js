export async function askForRiddle(input) {
    console.log('Creating a new riddle...');
    
    const name = await input.ask('Enter riddle name: ');
    const taskDescription = await input.ask('Enter the question: ');
    const difficulty = await input.getDifficulty();
    const correctAnswer = await input.ask('Enter correct answer: ');
    const timeLimit = await input.ask('Enter time limit (seconds, default 30): ');

    return {
        id: 0,
        name: name,
        difficulty: difficulty,
        taskDescription: taskDescription,
        correctAnswer: correctAnswer,
        timeLimit: parseInt(timeLimit) || 30
    };
}