import express from 'express'
import { readRiddleDB } from '../Dal/RiddelDAL/read.js'
import riddlesRouter from './routes/riddleeroutes.js';


const server = express();
const PORT = 3000;
server.use(express.json());

server.get('/',(req,res)=>{
    res.end("hello world !!!")
})

server.use('/', riddlesRouter);



// the server is "on", 
server.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)})