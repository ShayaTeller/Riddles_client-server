import jwt from 'jsonwebtoken'

const secretKey = '44346'
export async function tokerCreator(player) {
    const payload = {
        playerId: player.id,
        username: player.username,
        role: player.role
    }
    const options = {
        expiresIn: '2m',
        issuer: 'riddle-System',
    }
    const token = jwt.sign(payload, secretKey, options);
    return token

}

export async function tokenVeryfayer(req, res, next) {
    try {
        const token = req.body.token
        const decoded = jwt.verify(token, secretKey)
        if (decoded) {
            res.end("login succesfuli")
        }
        else {
            res.send("token expierd login agen!")
        }
        console.log(decoded);
    } catch (error) {
        res.end("error")

    }



}

export default tokerCreator;