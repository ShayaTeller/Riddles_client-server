import express from 'express'
import dotenv from 'dotenv';
import riddlesRouter from './routes/riddles.js'
import playerRouter from './routes/players.js';
import { logger }from './controlers/logingMiddelware.js';
import cors from 'cors'
import {Login, SignUp} from './Authentication/loginManager.js'
import cookieParser from "cookie-parser";

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use(cors({
  origin:process.env.CLIENT_ORIGIN,
  credentials: true
}
));

server.use('/',logger)
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());


server.use('/signup', SignUp)
server.use('/login', Login)




server.use('/', riddlesRouter);
server.use('/', playerRouter);

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})

