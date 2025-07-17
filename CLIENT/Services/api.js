

// this fetch return all riddles
export async function fetchToReadRiddleDB() {
    const dataInFile = await fetch(`https://express-0w22.onrender.com/riddles`)
    let pooledData = await dataInFile.json()
    return pooledData
}

// this fetch return ine riddle bi given an id in the params 

export async function fetchToReadRiddleById(id) {
    let data = await fetch(`http://localhost:3000/riddles/${id}`)
    data = await data.json()
    return data
    // let pooledData = await returendRiddle

}


// this send an new riddle , the body needs to להכיל an riddle-object and write  tham to the DB txt
export async function fetchNewRiddle(fn) {
    const newriddle = fn()
    await fetch("https://express-0w22.onrender.com/riddles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newriddle)
    })
}

export async function fetchToUpdateRiddleById(id, UPriddle) {
    fetch(`http://localhost:3000/riddles/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(UPriddle)
    })
}
export async function fetchToDeleteRiddleById(id) {
    fetch(`http://localhost:3000/riddles/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })

}

// console.log(await fetchToReadRiddleDB())
// console.log(await fetchToReadRiddleById(2))
// fetchToDeleteRiddleById(4);
