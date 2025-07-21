import PromptSync from 'prompt-sync';


export function askForRiddle() {

    const prompt = PromptSync();
    const level = prompt("enter level: ");
    const question = prompt("enter question: ");
    const answer = prompt("enter answer: ");
    return {
        level: level,
        question: question,
        answer: answer,
    }
};
