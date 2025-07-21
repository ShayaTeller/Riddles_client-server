import PromptSync from 'prompt-sync';

// this class is the pattern for a riidle
export default class Riddle {
    // the constractor thaks a object 
    constructor(riddle) {
            this.level = riddle.level,
            this.question = riddle.question,
            this.answer = riddle.answer
            this.res = '';
    }


    // this function ask the player the riddle and save the answer and checking it , stop asking when the answer is correct
    ask(start) {
        const prompt = PromptSync();
        while (this.res != this.answer) {
            this.res = prompt(this.question + ' ');

            if (this.res != this.answer) {
                console.log('Wrong answer, try again.');
            }
        }
    }
}
