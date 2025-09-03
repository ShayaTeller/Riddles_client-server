import PromptSync from 'prompt-sync';

// this class is the pattern for a riidle
export default class Riddle {
    // the constractor thaks a object 
    constructor(riddle) {
        this.id = 0,
        this.name =riddle.name,
        this.difficulty = riddle.difficulty,
        this.taskDescription = riddle.taskDescription,
        this.correctAnswer = riddle.correctAnswer,
        this.timeLimit = riddle.parseInt(timeLimit) || 30
    }


    // this function ask the player the riddle and save the answer and checking it , stop asking when the answer is correct
    ask(input) {
        while (this.response != this.correctAnswer) {
            this.response = input.ask(this.taskDescription + ' ');

            if (this.response != this.correctAnswer) {
                console.log('Wrong answer, try again.');
            }
        }
        console.log('good answer!')
    }
}
