import { time } from "console"
import { resolveAny } from "dns"
// import {globalApi} from './apiToken.js'


// this fetch return all riddles
// מביא את כל החידות 
export async function fetchToReadRiddleDB() {
    const dataInFile =  await fetch('http://localhost:3002/riddles')
    let pooledData = await dataInFile.json();
    
    return pooledData
}

// this fetch return ine riddle bi given an id in the params 
// מביא חידה לפי ID 
export async function fetchToReadRiddleById(id) {
    let data = await fetch(`http://localhost:3000/riddles/${id}`)
    data = await data.json()
    return data
    // let pooledData = await returendRiddle

}

// שולח חידה חדשה 
// this send an new riddle , the body needs to להכיל an riddle-object and write  tham to the DB txt
export async function fetchNewRiddle(newriddle) {
    await fetch("http://localhost:3002/riddles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: newriddle
    })
}

// שולח עדכון לחידה 
export async function fetchToUpdateRiddleById(id, UPriddle) {
    fetch(`http://localhost:3000/riddles/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(UPriddle)
    })
}

// מוחק חידה לפי הQUESTION
export async function fetchToDeleteRiddleByQuestion(question) {
    try {
        const res = await fetch(`http://localhost:3002/riddles/${question}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return res;
    } catch (error) {
    console.log(Error(error.message))

    }
}

// players api

// יוצר שחקן חדש 

export async function CreateNewPlayer(name) {
    const jsonName = { "name": name }
    try {
        const res = await fetch('http://localhost:3002/player', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonName)
        })
        return res.json('id')
    } catch (error) {
        return error

    }
}

export async function CreateNewPlayerAndPassword(username, password) {
    const jsonName = { "username": username, "password": password }
    console.log(jsonName)
    try {
        const res = await fetch('http://localhost:3002/player/singup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonName)
        })
        return res.text()
    } catch (error) {
        return error

    }
}

export async function loginPlayerAndPassword(username, password) {
    const jsonName = { "username": username, "password": password }
    // console.log(jsonName)
 
        const res = await fetch('http://localhost:3002/player/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonName)
        })
        return res.json() 
}
export async function loginPlayerAndPasswordAndToken(username, password,token) {
    const jsonName = { "username": username, "password": password,"token":token }
    console.log(jsonName)
 
        const res = await fetch('http://localhost:3002/player/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonName)
        })
        return res.json() 
}

// בודק האם שחקן קיים במערכת 
export async function CheckIfExistInFile(name) {
    // let jsonName = {"name":name}
    const res = await fetch(`http://localhost:3002/player/${name}`);
    return await res.text()

    // console.log(resultId);



}

console.log(await CheckIfExistInFile("shaya"));


export async function addToPlayerScore(player, riddle, time) {
    const sendBody = {
        id: player,
        riddelid: riddle,
        solvetime: time
    }
    await fetch('http://localhost:3002/player/addScore', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
    });
}

export async function updeatLowestTime(player,lowesTime) {
    console.log(player,lowesTime)
        const sendBody = {
        id: player.id,
        lowesTime: lowesTime,
    }
    await fetch('http://localhost:3002/player/updateLTime', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
    });
    
}


// await addToPlayerScore(1,5,2)
// const res = await CheckIfExistInFile("shuki");
// console.log( res)

// console.log(await fetchToReadRiddleDB())
// console.log(await fetchToReadRiddleById(2))
// fetchToDeleteRiddleById(4);





// http://localhost:3002/player/shuki
// const name = `shaya`
// console.log(await CheckIfExistInFile(name));