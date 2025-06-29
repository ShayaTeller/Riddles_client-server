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
        // this.startRiddle = Date.now()/1000;
        // this.endRiddle;
        // this.totalTime = this.endRiddle - this.startRiddle


    }
    
    ask(){
        const prompt = PromptSync();
        // console.log(this.startRiddle )
        // console.log(this.totalTime)

    if(this.answer !=this.correctAnswer){

        while(this.answer !=this.correctAnswer){
            this.answer = prompt(this.taskDescription)
            continue;
        }}
        else{
            // this.endRiddle = Date.now()/1000
            // console.log(this.endRiddle )
            // console.log(this.totalTime)
            console.log("good job!")  
        //     console.log(this.endRiddle - this.startRiddle)
        // }
        
    }
    

}}