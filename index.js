const Sequelize = require("sequelize"); //constructor
const mysql = require("mysql2");

//Create new instant from class
const sequelize = new Sequelize("sequelize_test", "root", "0542222175", {
    //host:localhost, //Default Value
    //port: 3306, //Default Value
    dialect: "mysql",
});

// async function myFunction() {
//     await sequelize.authenticate()
//     console.log('connection successful')
// }

// myFunction();

//authenticate to database
sequelize
    .authenticate()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log("error connecting to database");
    });

//sync all the table in database (OPTIONAL)
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("database sync");
//   })
//   .catch((err) => {
//     console.log("error in database sync");
//   });

//Create new table
const User = sequelize.define(
    "user",
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.DataTypes.STRING,
        },
        age: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 25,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);


// Insert Data into the Tables

//-------------------------------------------------------------------------

// Method 01
//Using build method to add data to database

// User.sync({ alter: true })
//   .then(() => {
//     const user = User.build({
//       username: "John",
//       password: "12345",
//       age: 25,
//     });
//     //build method use for if there any condition add before save like validation or any other condition these can be added before .save method

//     return user.save();
//     //save method is used to save the data in database
//     //return used for chaining the promise
//   })
//   .then((data) => {
//     console.log(data.toJSON());
//   })

//   .catch((err) => {
//     console.log(err);
//   });




// Method 02
// use create method to add data to database

// User.sync({ alter: true })
//   .then(() => {
//     return User.create({
//       username: "John",
//       password: "12345",
//       age: 25,
//     });
//     //return used for chaining the promise
//     //create method is used to add data to database no need to .save method
//   })
//   .then((data) => {
//     //console.log(data.toJSON());
//     // data.username = "John Doe"; //if we want to update data in previous block, it can be done in this stage also
//     // data.age = 30;
//     //data.decrement({ age: 2 }); //decrement method is used to decrement the value of integer
//     data.increment({ age: 2 }); //increment method is used to increment the value of integer

//     //return data.save(); // save method is used to save the data in database
//     //return data.destroy(); // destroy method is used to delete the data from database
//     //return data.reload(); // reload method is used to update recode with original data. not updated in this block
//     // return data.save({fields : ['username']}); // fields attribute is used to update only specific field in database
//   })
//   // .then((data) => {
//   //   console.log("Data updated");
//   //   console.log(data.toJSON());
//   // })

//   .catch((err) => {
//     console.log(err);
//   });



// Method 03
// use BulkCreate method to add data to database

// User.sync({ alter: true })
//     .then(() => {
//         return User.bulkCreate([{
//             username: "John",
//             password: "12345",
//             age: 25,
//         },
//         {
//             username: 'Darshana',
//             password: 123456,
//             age: 25
//         },
//         {
//             username: 'pubudu',
//             password: 654321,
//             age: 29
//         }]);
//         //return used for chaining the promise
//     })
//     .then((data) => { //return because of array has to be use forEach method
//         data.forEach(element => {
//             console.log(element.toJSON());
//         });


//     })
//     // .then((data) => {
//     //   console.log("Data updated");
//     //   console.log(data.toJSON());
//     // })

//     .catch((err) => {
//         console.log(err);
//     });


//----------------------------------------------------------------------------------------

// Model Querying

//Method 01 
//Get all the element in table


User.sync({ alter: true })
    .then(() => {
        //return User.findAll() //return all the data in table
        //return User.findAll({ attributes: [['username', 'username'], ['password', 'pwd']] }) // return data from specific specific column // 2nd argument is in the array is column heading ('alias') 
        return User.findAll({ attributes: [[sequelize.fn('SUM', sequelize.col('age')), 'howOld']] })
    }).then((data) => {
        data.forEach(element => {
            console.log(element.toJSON())
        });
    })
    .catch((err) => {
        console.log(err);
    });