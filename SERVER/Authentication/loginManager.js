// import { createNewPlayerWithPassword, getPlayerPassword, getPlayerByName } from '../Dal/playerDal.js';
// import bcrypt from 'bcrypt';
// import { getToken } from './tokenHandler.js';

// export async function signup(req, res) {
// 	if (req.body.password && req.body.username) {
// 		const { username, password } = req.body;
// 		let role = req.body.role;
// 		console.log(username, password, role);
// 		const hashpassword = await bcrypt.hash(password, 12);
// 		try {
// 			const result = await createNewPlayerWithPassword(username, hashpassword, role);
// 			if (result === 'success') {
// 				res.status(201).json({ message: 'Player created', result });
// 			} else {
// 				res.status(200).json({ message: result });
// 			}
// 		} catch (error) {
// 			console.error(error.message);
// 			res.send(error.message);
// 		}
// 	} else {
// 		res.status(400).json({ message: 'Check your password or username', status: 'Bad Request' });
// 	}
// }

// export async function login(req, res) {
// 	if (req.body.password && req.body.username) {
// 		const { username, password } = req.body;
// 		let hashpassword = await getPlayerPassword(username);
// 		if (hashpassword != null) {
// 			hashpassword = hashpassword['password'];
// 			const verify = await bcrypt.compare(password, hashpassword);
// 			console.log(verify);
// 			if (verify) {
// 				try {
// 					const token = await getToken(username);
// 					return res.status(200).send({ message: 'Login successful', token });
// 				} catch (error) {
// 					console.log(error);
// 					return res.status(500).send('Server error');
// 				}
// 			} else {
// 				return res.status(401).send('Check your password or username or signup');
// 			}
// 		}
// 	} else {
// 		return res.status(401).send('Check your password or username');
// 	}
// }
