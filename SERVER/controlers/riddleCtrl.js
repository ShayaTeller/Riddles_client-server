export async function addNewRiddle(req) {
    try {
        const riddle = await req.body;
    let newer = await insertNewRiddle(riddle);
        return "success";
    } catch (err) {
        return console.error().status(200) + "Internal Server Error"
    }
}