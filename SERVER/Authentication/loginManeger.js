import { creatNewPlayerAndPassword, getPlayerPassword, getPlayerByName } from '../Dal/playerDal.js';
// import { tokenCreator,tokenVerifier } from './tokenHandler.js'
import bcrypt from 'bcrypt';
import { getToken } from './tokenHandler.js'




export async function singUp(req, res) {
    if (req.body.password && req.body.username) {
        const { username, password } = await req.body;
        let role = req.body.role;
        console.log(username, password, role)
        const hashpassword = await bcrypt.hash(password, 12)
        try {
            const result = await creatNewPlayerAndPassword(username, hashpassword, role)
            if (result == 'succes') {
                res.status(201).json({ message: "player created", result: result })
            }
            else {
                res.status(200).json({ message: result })
            }
        } catch (error) {
            console.error(error.message)
            res.send(error.message)
        }
    }
    else {
        res.status(400).json({ nesaage: "check your password or username", status: "Bad Request" })
    }
}





export async function login(req, res) {

    if (req.body.password && req.body.username) {
        const { username, password } = req.body;
        let hashpassword = await getPlayerPassword(username);
        if (hashpassword != null) {
            hashpassword = hashpassword['password']
            const verify = await bcrypt.compare(password, hashpassword)
            console.log(verify)
            if (verify) {
                try {
                    const token = await getToken(username)
                    return res.status(200).send({ message: "login succesfuli", token: token });
                } catch (error) {
                    console.log(error);
                    return res.status(500).send("server error");
                }
            }
            else {
                return res.status(401).send("check your password or username or singup")
            }
        }
    }
    else {
        return res.status(401).send("check your password or username")
    }
}







