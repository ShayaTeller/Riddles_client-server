import express from 'express'
import riddlesRouter from './routes/riddles.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import tokerCreator from './Authentication/tokenHandler.js'
import playerRouter from './routes/players.js';
dotenv.config();




const server = express();
const PORT = process.env.PORT;



server.use(express.json());

server.use('/', (req, res, next) => {
    console.log(req.method, req.url);
    next();
})

server.use('/', riddlesRouter);
server.use('/', playerRouter);

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})

