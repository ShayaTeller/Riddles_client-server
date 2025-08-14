import { MongoClient } from "mongodb"
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI
// console.log(uri)


export const mongoclientdb = new MongoClient(uri);
mongoclientdb.connect()
try {
    await mongoclientdb.connect();
    console.log('Connected to MongoDB');

} catch (err) {
    console.error('Error connecting to MongoDB:', err);
}


export default mongoclientdb