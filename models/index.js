const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize"); //constructor

//Create new instant from class
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST, //Default Value "local host"
  dialect: dbConfig.DIALECT, ////Default Value "mysql"
  timezone: dbConfig.TIMEZONE,
});

//authenticate to database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `connection successful // connected to "${sequelize.config.database}" database`
        .cyan.underline
    );
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline.bold);
  }
};

// initiate db object
const db = {};

//add sequelize instance to db object
db.sequelize = sequelize;

// making user model to db object
db.user = require("./userModel")(sequelize, DataTypes);

//sync all the table in database (OPTIONAL)
const syncTables = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("table sync successful".cyan.underline);
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline.bold);
  }
};

connectDB();
// syncTables(); // optional -  When create new table

//define Relationships
//one to many relationship between user and tickets

// db.user.hasMany(db.ticket);
// db.ticket.belongsTo(db.user);

//export db object
module.exports = db;
