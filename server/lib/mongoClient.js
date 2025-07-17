import { MongoClient } from "mongodb"
const uri = 'mongodb+srv://ydt009:j3yDhDhixlZkE4a8@cluster0.vizwzcb.mongodb.net'

export const mongoclientdb = new MongoClient(uri);

try {
    await mongoclientdb.connect();
    console.log('Connected to MongoDB');

} catch (err) {
    console.error('Error connecting to MongoDB:', err);
}

export default mongoclientdb