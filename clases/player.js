import { join } from "path";
import { readPlayrDB } from "../Dal/PlayerDAL/read.js";

export default class Player {
    constructor(name) {
        this.name = name
        this.times = [];
        this.lowestTime = 0;
    }

    recordTime = function (start, end) {
        this.times.push(end - start)
    }

    // return the sum of seconds that taks for the pleyer to answer all riddles
    showStats = function () {
        let result = 0;
        for (let index = 0; index < this.times.length; index++) {
            result += this.times[index];
        }
        return result;

    }
lowestTimeCheck() {
    let result = this.times.reduce((acc, val) => acc + val, 0);

    if (this.lowestTime === 0 || result < this.lowestTime) {
        this.lowestTime = result;
        console.log(`✅ your lowest time is updated: ${this.lowestTime / 1000} seconds`);
    } else {
        console.log(`ℹ️ your time now: ${result / 1000} seconds. lowest time remains: ${this.lowestTime / 1000} seconds`);
    }
}
}