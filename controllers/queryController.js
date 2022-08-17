const asyncHandler = require("express-async-handler");
const db = require("../models");
const { Op } = require("sequelize");
const sequelize = db.sequelize;
const User = db.user;

// Model.findAll Method
// @desc Get all the element in table
// @route GET/api/find_all
const findAllMethod = asyncHandler(async (req, res) => {
  //return all the data in table
  const findAll = await User.findAll();

  // return data from specific specific column // 2nd argument is in the array is column heading ('alias')
  const attributes = await User.findAll({
    attributes: [
      ["username", "username"],
      ["password", "pwd"],
    ],
  });

  // aggregate functions can be run like this "SUM" "AVG" "MAX" "MIN" "COUNT"
  const minMaxCount = await User.findAll({
    attributes: [[sequelize.fn("SUM", sequelize.col("age")), "howOld"]],
  });

  // exclude attribute is used to exclude specific column from database
  const exclude = await User.findAll({ attributes: { exclude: ["password"] } });

  // where attribute is used to filter data from database
  const where1 = await User.findAll({ where: { username: "John", age: 25 } });

  // limit and offset attribute is used to limit the data from database
  const limitAndOffset = await User.findAll({ limit: 2, offset: 5 });

  // order attribute is used to sort the data from database
  const orderDesc = await User.findAll({ order: [["age", "DESC"]] });
  const orderAsc = await User.findAll({ order: [["age", "ASC"]] });

  //Using operators like OR, AND, NOT, BETWEEN, IN, etc.
  const operators1 = await User.findAll({
    where: { [Op.or]: { username: "jhon", age: 25 } },
  });

  //BETWEEN operator is used to filter data from database
  const operators2 = await User.findAll({
    where: { age: { [Op.between]: [25, 30] } },
  });

  // GREATER operator is used to filter data from database
  const operators3 = await User.findAll({ where: { age: { [Op.gt]: 25 } } });

  res.status(200).json(operators2);
});

module.exports = {
  findAllMethod,
};
