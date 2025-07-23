import { PlayersDB } from '../../lib/supabase.js';

const conn = await PlayersDB();


export async function creatNewPlayer(UserName) {
    try {
        const { data, error } = await conn.from('players')
            .insert({ username: UserName })
            .select('id');
        console.log(data)
        if (data == null) { return 'user name exsist in database chooce another username' };
        if (error) console.error('insert to db fiald')
        return data;

    } catch (error) {
        return error;

    }
}

export async function getAllPlayers() {
    const { data, error } = await conn.from('players').select("*");
    return data;
}

export async function getPlayerByName(name) {
    const { data, error } = await conn.from('players').select("*").eq('username', name)
    return data || error;
}



export async function writeToPlayerScores(playerID, riddelID, solveTime) {
    const { data, error } = await conn.from('player_scores').insert({ player_id: playerID, riddle_id: riddelID, time_to_solve: solveTime }).select();
    // console.log(data)

}

// true or false
export async function checkIfExsist(name) {

    const { data, error } = await conn.from('players').select('username').eq('username', name);
    if (data && data.length > 0) {
        if (data[0]['username'] === name) {
            const id = data[0]['id'];
            return true
        }
    }
    else {
        return false
    }
}

export async function deletePlayerByName(name) {
    const { data, error } = await conn.from('players').delete().eq('username', name)
}

export async function getBestTimeById(ID) {
    const { data, error } = await conn.from('players').select('best_time').eq('id', ID);
    console.log(data[0]['best_time'])

}

// await getBestTimeById(62);

// let result = await checkIfExsist("pini");
// if(result==true){
//     result = await getPlayerId("pini");
//     console.log(result);
//     await getBestTimeById(result);
// }


export async function getPlayerId(name) {
    const { data, error } = await conn
        .from('players')
        .select('id')
        .eq('username', name)
        .single();
    return data;

    if (error) {
        console.error('DB Error:', error);
        return null;
    }

    return data ? data.id : null;
}


// await deletePlayerByName("david");


// await writeToPlayerScores(1,"2",13);
// const exsist = await checkIfExsist("iiiii")
// console.log(exsist)
// await creatNewPlayer("ariall123");

// const a = await getAllPlayers()
// console.log(a);

// const id = await getPlayerId("david");
// console.log(id)

// const result = await creatNewPlayer("iiiii");
// console.log(result);
