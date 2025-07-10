export async function fetchToReadRiddleDB(){
    const dataInFile = await fetch(`http://localhost:3000/getallriddles`)
    let pooledData =await dataInFile.json()
    // console.log()
    return pooledData
}

export async function fetchNewRiddle(fn) {
    const newriddle = fn()
    fetch("http://localhost:3000/createNewRiddle", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newriddle)
    })}

    