import { FunctionsRelayError } from '@supabase/supabase-js';
import { PlayersDB } from '../lib/supabase.js';

const conn = await PlayersDB();


export async function create(collection,username,role) {
    const { data , error } = await conn.from(collection)
        .insert({ username: username, role: role })
        if(error){return error.message};
        if(data){return data}
    
}

export async function read(collection) {
    const { data , error } = await conn.from(collection).select('*');
        if(error){return error.message};
        if(data){return data}
    
}
    // const data = await read('players')
    // console.log( data)
    
export async function update(collection,updatekey,updatevalue,username) {
    const { data , error } = await conn.from(collection).update({[updatekey]:updatevalue}).eq('username',username)
        if(error){return error.message};
        if(data){return data}
    
}

export async function deleteone(collection,deleteValue,username) {
    const { data , error } = await conn.from(collection).delete(deleteValue).eq('username',username)
        if(error){return error.message};
        if(data){return data}
    
}

// const data = await deleteone('players','*','username');

// const data = update('players','best_time',60,'dudi');
// console.log(await data)

export async function creatNewPlayer(UserName, role) {
    try {
        const { data, error } = await conn.from('players')
            .insert({ username: UserName, role: role })
            .select('id');
        if (data == null) { return 'user name exsist in database chooce another username' };
        if (error) console.error('insert to db fiald')
        return data;

    } catch (error) {
        return error;

    }
}




export async function creatNewPlayerAndPassword(UserName, password, role) {
    try {
        const { data, error } = await conn.from('players')
            .insert({ username: UserName, password: password, role: role })
            .select('id');

        console.log(data)
        if (data === null) {
            return 'user exsist try to login'
        };
        if (error) {
            console.log('insert to db fiald')
        }
        else {
            return data;
        }

    } catch (error) {
        return error;

    }
}

export async function getAllPlayers() {
    const { data, error } = await conn.from('players').select("*");
    if(data){
        return data;
    }
    if(error){
        return error.message
    }
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

export async function updatePlayerBestTime(player, best_time) {
    const { data, error } = await conn.from('players')
        .update({ 'best_time': best_time })
        .eq('id', player);

    if (error) {
        return error
    }
    else {
        return data
    }
}


// await getBestTimeById(62);

// let result = await checkIfExsist("pini");
// if(result==true){
//     result = await getPlayerId("pini");
//     console.log(result);
//     await getBestTimeById(result);
// }


export async function getPlayerId(username) {
    const { data, error } = await conn
        .from('players')
        .select('password')
        .eq('username', username)
        .single();
    if (error) {
        console.error('DB Error:', error);
        return error.message;
    }

    return data
}

export async function getPlayerPassword(username) {
    const { data, error } = await conn
        .from('players')
        .select('password')
        .eq('username', username)
        .single();


    if (error) {
        console.error('DB Error:', error);
        return null;
    }

    return data;
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

    // let result = await create('players','dudi','admin');
    // console.log(result)
    