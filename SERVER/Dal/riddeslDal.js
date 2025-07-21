import 'dotenv/config';
import { MongoClient } from 'mongodb';
import {mongoclientdb} from '../lib/mongoClient.js'
// const clientDB = new MongoClient(uri);
// export default clientDB



// מכניס רפורט חדש
// OK
export async function insertNewRiddel(riddle) {

    const result = await mongoclientdb.db('riddels_game').collection('riddles').insertOne(riddle);
    return result;
}

// מביא את כל החידות הקיימים
// OK

export async function getAllRiddeles() {
    const result = await mongoclientdb.db('riddels_game').collection('riddles').find({}).toArray();
    return result;
}

// מוחק לפי ID
// OK
export async function deletedByQuestion(Question) {
    const result = null;
    try {
        result = await mongoclientdb.db('riddels_game').collection('riddles').deleteMany({ question:Question });
    } catch (error) {
        return Error(error.massage)
    }
    return result;
}





// await deletedByQuestion("4+2");

// const res = await getAllRiddeles()
// console.log( res);

