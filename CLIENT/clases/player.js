/**
 * this class is used to pleyng white a player, 
 * and given the option to log the history of lowest time answer 
 */
export default class Player {
    constructor(name,id) {
        this.id = id
        this.name = name
        this.times = [];
        this.lowestTime = 0;
    }

    /**
    * records the total time that was take the user to answer
    * for evry single riddle
     */
    recordTime = function (start, end) {
        this.times.push(end - start)
    }

    /**
     * return the sum of seconds that taks for the pleyer to answer all riddles
     */
    showStats = function () {
        let result = 0;
        for (let index = 0; index < this.times.length; index++) {
            result += this.times[index];
        }
        return result;

    }
    /**
     * this function thaks the total time that take the user to answer
     * and compare beatwen the lowest time that taks for heam to answer
     * if the new result is lower than the last lowest time 
     * he update the lowest time to the new result
         */
    lowestTimeCheck() {
        let result = this.times.reduce((acc, val) => acc + val, 0);

        if (this.lowestTime === 0 || result < this.lowestTime) {
            this.lowestTime = result;
            console.log(`✅ your lowest time is updated: ${this.lowestTime / 1000} seconds`);
        } else {
            console.log(`ℹ️  your time now: ${result / 1000} seconds. lowest time remains: ${this.lowestTime / 1000} seconds`);
        }
    }
}

