import express from 'express'
import riddlesRouter from './routes/riddles.js'
import playerRouter from './routes/players.js';
import dotenv from 'dotenv';
dotenv.config();


const server = express();
const PORT = process.env.PORT;


server.use(express.json());
server.use('/', (req, res, next) => {
    console.log(req.method, req.url);
    next();
})

server.get('/', (req, res) => {
    res.end("welcome")
})

server.use('/', riddlesRouter);
server.use('/', playerRouter);

// the server is "on", 
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})

