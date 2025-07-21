import express from 'express'
import riddlesRouter from './routes/riddles.js'
import playerRouter from './routes/players.js';


const server = express();
const PORT = 3002;


server.use(express.json());
server.use('/', (req, res,next) => {
    console.log(req.method, req.url, res.statusCode);
    next();
})

server.get('/', (req, res) => {
    res.end("welcome")
})

server.use('/', riddlesRouter);
server.use('/',playerRouter );

// the server is "on", 
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})

