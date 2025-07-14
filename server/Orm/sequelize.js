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

const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

sequelize.sync();

// const user = await User.create({
//     name:"yeshaya teller",
//     email:"ydt009@gmail.com"
// })
// const [users] = await User.findAll({where: {name:"yossy"}});
// console.log(users["dataValues"])
const one = User.findByPk(1);
console.log(one);



// await User.update({name:"yossy"},{where:{id:"8"}})
// console.log(User)