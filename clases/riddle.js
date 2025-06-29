import PromptSync from 'prompt-sync';

export default
class Riddle{
    
    constructor(riddle){
        this.id = riddle.id;
        this.name = riddle.name;
        this.difficulty = riddle.difficulty;
        this.taskDescription = riddle.taskDescription;
        this.correctAnswer = riddle.correctAnswer;
        this.answer;

    }
    
    ask(){
        const prompt = PromptSync();


    if(this.answer !=this.correctAnswer){

        while(this.answer !=this.correctAnswer){
            this.answer = prompt(this.taskDescription)
            continue;
        }}
        else
        {
   
            console.log("good job!")          
    }
    }}
