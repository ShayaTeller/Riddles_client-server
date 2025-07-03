import PromptSync from 'prompt-sync';
// this class is the pattern for a riidle
export default class Riddle {

    constructor(riddle) {
        this.id = riddle.id;
        this.name = riddle.name;
        this.difficulty = riddle.difficulty;
        this.taskDescription = riddle.taskDescription;
        this.correctAnswer = riddle.correctAnswer;
        this.answer;
        this.timeLimit;

    }



    // this function ask the player the riddle and save the answer and checking it , stop asking when the answer is correct
    ask(start) {
        const prompt = PromptSync();
        while (this.answer != this.correctAnswer) {
            this.answer = prompt(this.taskDescription + ' ');

            if (this.answer != this.correctAnswer) {
                console.log('Wrong answer, try again.');
            }
        }
    }
}
