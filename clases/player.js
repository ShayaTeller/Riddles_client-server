export default

class Player{
    constructor(name){
        this.name = name
        this.times = [];


    }
    recordTime = function(start,end){
        this.times.push(end-start)}


// return the sum of seconds that taks for the pleyer to answer all riddles
    showStats = function(){
        let result =0;
        for (let index = 0; index < this.times.length; index++) {
           result += this.times[index];            
        return result;// = number
            
        }
    
    }
}
