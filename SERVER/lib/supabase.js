import { createClient } from '@supabase/supabase-js'


export async function PlayersDB(){
    let supabase = null;
    try {
        supabase = createClient('https://ocovsegnbznppkruyuvw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jb3ZzZWduYnpucHBrcnV5dXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NTgxMzgsImV4cCI6MjA2ODEzNDEzOH0.EnOdBLgQ02IrY97mwlYCMhWk-jEfa6Nfg4udZHueLgA')
    console.log('supabase connected!')
    } catch (error) {
        console.log(error)
    }
    return supabase;
}

// const conn = await supabaseClient()

// const data = await supabase.from('players').insert({username:"david"});
// const {data,error} = await conn.from('players').select();
// console.log(data)



