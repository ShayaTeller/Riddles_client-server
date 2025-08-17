import 'dotenv/config';
import { mongoClientDb } from '../lib/mongoClient.js'
// const clientDB = new MongoClient(uri);
// export default clientDB

// OK
export async function insertNewRiddel(riddle) {

    const result = await mongoClientDb.db('riddels_game').collection('riddles').insertOne(riddle);
    return result;
}

// מביא את כל החידות הקיימים
// OK

export async function getAllRiddeles() {
    const result = await mongoClientDb.db('riddels_game').collection('riddles').find({}).toArray();
    return result;
}

// מוחק לפי ID
// OK
export async function deletedByQuestion(Question) {
    const result = null;
    try {
        result = await mongoClientDb.db('riddels_game').collection('riddles').deleteMany({ question: Question });
    } catch (error) {
        return Error(error.massage)
    }
    return result;
}





// await deletedByQuestion("4+2");

// const res = await getAllRiddeles()
// console.log( res);

