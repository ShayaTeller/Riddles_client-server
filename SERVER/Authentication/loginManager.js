import { getPlayerPassword } from "../Dal/playerDal.js";
import {addNewPlayer} from '../controlers/playersCtrl.js'
import bcrypt from "bcryptjs";

import { getToken } from './tokenHandler.js';



export async function SignUp(req, res) {
	if (req.body.password && req.body.username) {
        try {
            console.log(req.body)
		const { username, password } = req.body;
		let role = req.body.role;
		const hashpassword = await bcrypt.hash(password, 12);
		
			const result = await addNewPlayer(username,hashpassword,role);
			if (result === 'success') {
				res.status(201).json({ message: 'Player created', result });
			} else {
				res.status(200).json({ message: result });
			}
		} catch (error) {
			console.error(error.message);
			res.send(error.message);
		}
	} else {
		res.status(400).json({ message: 'Check your password or username', status: 'Bad Request' });
	}
}



export async function Login(req, res, next) {
    try {
    
  // first data validation if the body is fool
  if (req.body.password && req.body.username) {
    // now i do deaconstraction for the body
    const { username, password } = req.body;
    // this function checks if the player is in the db and returned the hashpassword
    let hashpassword = await getPlayerPassword(username);

    if (hashpassword != null) {
      hashpassword = hashpassword["password"];
      const verify = bcrypt.compare(password, hashpassword);
      console.log(await verify)
      try {
        const token = await getToken(username);
         return res.cookie("token", token, {
    httpOnly: true, 
    secure: true,    
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 
  }).send('socces')
        
      } catch (error) {
        console.log(error);
        return res.status(500).send("Server error");
      }
    } else
      return res.status(401).send("Check your password or username or signup");
  } else {
    return res.status(401).send("Check your password or username");
  }
      
    } catch (error) {
        
    }
  next()
}

