import { createInterface } from 'readline';

class InputHandler {
    constructor() {
        this.rl = createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal:false
        });
    }

    async ask(question) {
        return new Promise((resolve) => {
            this.rl.question(question, resolve);
        });
    }

    async selectFromList(question, options) {
        while (true) {
            console.log(`\n${question}`);
            options.forEach((option, index) => {
                console.log(`${index + 1}. ${option}`);
            });
            
            const choice = await this.ask('Enter your choice (number): ');
            const index = parseInt(choice) - 1;
            
            if (index >= 0 && index < options.length) {
                return options[index];
            }
            console.log(' Invalid choice, try again.');
        }
    }

    async getDifficulty() {
        return await this.selectFromList(
            'Choose difficulty:', 
            ['easy', 'medium', 'hard']
        );
    }

    async getMainMenuChoice() {
        const options = [
            'Play the game',
            'Create a new riddle', 
            'Read all riddles',
            'Delete a riddle',
            'Update an existing riddle',
            'View leaderboard'
        ];
        return await this.selectFromList('What do you want to do?', options);
    }

    close() {
        this.rl.close();
    }
}

export default InputHandler;