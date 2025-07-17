import 'dotenv/config';
import { MongoClient } from 'mongodb';
import {mongoclientdb} from '../lib/mongoClient.js'
// const clientDB = new MongoClient(uri);
// export default clientDB



// מכניס רפורט חדש
// OK

export async function insertNewRiddel(riddle) {

    const result = await mongoclientdb.db('riddels_game').collection('riddles').insertOne(riddle);
    mongoclientdb.close();
    return result;
}

// const riddle = {
//     "question": "10+20?",
//     "answer": "30",
//     "level": "easy"
// }

// await insertNewRiddel(riddle);


// מביא את כל הרפורטים הקיימים
// OK

export async function getAllRiddeles() {
    const result = await mongoclientdb.db('riddels_game').collection('riddles').find({}).toArray();
    mongoclientdb.close();
    return result;
}

// מוחק לפי ID
// OK
export async function deletedByQuestion(Question) {
    const result = await mongoclientdb.db('riddels_game').collection('riddles').deleteMany({ question:Question });
    return result;
}
