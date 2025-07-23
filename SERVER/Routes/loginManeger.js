import { creatNewPlayerAndPassword, getPlayerPassword, getPlayerByName } from '../Dal/PlayerDAL/playerDal.js';
import {tokerCreator} from './tokenHandler.js'
import bcrypt from 'bcrypt';




export async function authenticationSingUp(req, res) {
    const { username, password } = await req.body;
    console.log(username, password)
    const hashpassword = await bcrypt.hash(password, 12)
    console.log(hashpassword)
    try {
        const result = await creatNewPlayerAndPassword(username, hashpassword)
        res.send(result)
    } catch (error) {
        res.send(error.message)

        console.error(error.message)
    }
}

export async function authenticationLogin(req, res) {

    const { username, password } = await req.body;
    console.log(username, password)
    let hashpassword = await getPlayerPassword(username);
    console.log(hashpassword)
    hashpassword = hashpassword['password']
    console.log(hashpassword)
    const verify = await bcrypt.compare(password, hashpassword)
    if (verify) {
        const player = await getPlayerByName(username);
        const token = tokerCreator(player)
        console.log(`the token is:${await token}`)
        res.end("login succesfuli")
    }
    
    else{
        console.log(await verify)
        res.end("you need to singin")

    }
}






// server.post('/singup', async (req, res) => {
//     const { username, password } = await req.body;
//     console.log(username, password)
//     const hashpassword = await bcrypt.hash(password, 12)
//     console.log(hashpassword)
//     try {
//         const result = await creatNewPlayerAndPassword(username, hashpassword)
//         res.send(result)
//     } catch (error) {
//         res.send(error.message)

//         console.error(error.message)
//     }
// })