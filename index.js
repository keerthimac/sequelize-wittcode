const Sequelize = require("sequelize"); //constructor 
const mysql = require("mysql2");


//Create new instant from class
const sequelize = new Sequelize('sequelize_test', 'root', '0542222175', {
    //host:localhost, //Default Value
    //port: 3306, //Default Value
    dialect: 'mysql'
})

// async function myFunction() {
//     await sequelize.authenticate()
//     console.log('connection successful')
// }

// myFunction();


//authenticate to database

sequelize.authenticate().then(() => {
    console.log('connection successful')
}).catch((err) => {
    console.log("error connecting to database")
})

const User = sequelize.define('user', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 25
    }
},
    {
        freezeTableName: true,
        timestamps: false
    })

User.sync({ force: true }).then((data) => {
    console.log('Table and model synced successful', data)
}).catch((err) => {
    console.log('Error syncing the table and model', err)
})