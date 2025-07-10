
export async function fetchToReadRiddleDB() {
    const dataInFile = await fetch(`http://localhost:3000/riddles`)
    let pooledData = await dataInFile.json()
    return pooledData
}

export async function fetchToReadRiddleById(id) {
    let data = await fetch(`http://localhost:3000/riddles/${id}`)
    data = await data.json()
    return data
    // let pooledData = await returendRiddle

}


export async function fetchNewRiddle(fn) {
    const newriddle = fn()
    fetch("http://localhost:3000/riddles", {
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
