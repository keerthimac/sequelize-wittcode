const asyncHandler = require("express-async-handler");
const db = require("../models");
const sequelize = db.sequelize;
const User = db.user;

// Model.findAll Method
// @desc Get all the element in table
// @route GET/api/find_all
const findAllMethod = asyncHandler(async (req, res) => {
  //   const user = await User.findAll(); //return all the data in table

  //   const user = await User.findAll({
  //     attributes: [
  //       ["username", "username"],
  //       ["password", "pwd"],
  //     ],
  //   }); // return data from specific specific column // 2nd argument is in the array is column heading ('alias')

  //   const user = await User.findAll({
  //     attributes: [[sequelize.fn("SUM", sequelize.col("age")), "howOld"]],
  //   }); // aggregate functions can be run like this "SUM" "AVG" "MAX" "MIN" "COUNT"

  //   const user = await User.findAll({ attributes: { exclude: ["password"] } }); // exclude attribute is used to exclude specific column from database

  //   const user = await User.findAll({ where: { username: "John", age: 25 } }); // where attribute is used to filter data from database

  //   const user = await User.findAll({ limit: 2, offset: 5 }); // limit and offset attribute is used to limit the data from database

  //   const user = await User.findAll({ order: [["age", "DESC"]] }); // order attribute is used to sort the data from database
  //   const user = await User.findAll({ order: [["age", "ASC"]] });
  res.status(200).json(user);
});

module.exports = {
  findAllMethod,
};
