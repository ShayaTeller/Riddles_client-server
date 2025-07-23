import express from 'express'
import riddlesRouter from './routes/riddles.js'
import playerRouter from './routes/players.js';
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
// import { creatNewPlayerAndPassword } from './Dal/PlayerDAL/playerDal.js'
import { authenticationSingUp, authenticationLogin } from './routes/loginManeger.js'
import tokerCreator from './routes/tokenHandler.js'
dotenv.config();


const server = express();
const PORT = process.env.PORT;


server.use(express.json());
server.use('/', (req, res, next) => {
    console.log(req.method, req.url);
    next();
})

// server.use('/player/signup',async(req,res,next)=>{await authenticationSingUp(req,res),next()})

// server.use('/player/login',async(req,res,next)=>{await authenticationLogin(req,res),next()})



server.get('/', (req, res) => {
    res.end("welcome")
})

server.use('/', riddlesRouter);
server.use('/', playerRouter);

// the server is "on", 
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})

