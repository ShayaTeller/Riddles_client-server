import express from 'express'
import dotenv from 'dotenv';
import riddlesRouter from './routes/riddles.js'
import playerRouter from './routes/players.js';
import { logger }from './controlers/logingMiddelware.js';
dotenv.config();




const server = express();
const PORT = process.env.PORT;



server.use(express.json());
server.use('/',logger)
// server.use('/', (req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// })

server.use('/', riddlesRouter);
server.use('/', playerRouter);

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})

