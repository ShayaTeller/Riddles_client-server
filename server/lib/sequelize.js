import { use } from "react";
import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize('mysql://root@localhost:3306/test', {
    dialect: 'mysql'
})

// class User extends Model { };
// User.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     email:{
//         type:DataTypes.STRING,
//         allowNull:false,

//     }

// },{sequelize}
// )

// create the object like the table, and now i define the table schema..
const Player = sequelize.define('players', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lowestTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
})

sequelize.sync();

// this function creating a new player
export async function creatNewPlayer(player) {

    const newplayer = await Player.create({
        name: player.name,
        lowestTime: player.lowestTime
    });
}


export async function getAllPlayers() {
    const [players] = await Player.findAll();
    return players["dataValues"];
}

export async function getPlayerById(Id) {
    const [player] = await Player.findAll({ where: { id: Id } });
    return player["dataValues"];
}

// export async function getAllLowestTimes() {
//     const [result] = await Player

// }


export async function updateLowestTime(player) {
    const updatePlayer = await Player.update(
        { lowestTime: player.lowestTime },
        { where: { name: player.name } });
    return succes;

}
