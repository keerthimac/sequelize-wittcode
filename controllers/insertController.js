const asyncHandler = require("express-async-handler");
const db = require("../models");
const User = db.users;

// Method 01
// @desc Using build method to add data to database
// @route POST/api/build
const buildMethod = asyncHandler(async (req, res) => {
  const user = User.build({
    username: "John",
    password: "12345",
    age: 25,
  });
  //build method use for if there any condition add before save like validation or any other condition these can be added before .save method
  await user.save();
  res.status(201).json(user);
});

// Method 02
// @desc Using create method to add data to database
// @route POST/api/create
const createMethod = asyncHandler(async (req, res) => {
  const user = await User.create({
    username: "pubudu",
    password: "12",
    age: 25,
  });
  //create method is used to add data to database no need to .save method

  //user.username = "John Doe"; //if we want to update user in previous block, it can be done in this stage also
  //user.age = 30;
  //user.decrement({ age: 2 }); //decrement method is used to decrement the value of integer
  //user.increment({ age: 2 }); //increment method is used to increment the value of integer

  //after modifying data need to use one of following method to update database

  // await user.save(); // save method is used to save the user in database
  // await user.destroy(); // destroy method is used to delete the user from database
  // await user.reload(); // reload method is used to update recode with original user. not updated in this block
  // await user.save({fields : ['username']}); // fields attribute is used to update only specific field in database

  res.status(201).json({ user });
});

// Method 03
// @desc Using build method to add data to database
// @route POST/api/build
const bulkMethod = asyncHandler(async (req, res) => {
  const user = await User.bulkCreate([
    {
      username: "John",
      password: "12345",
      age: 25,
    },
    {
      username: "Darshana",
      password: 123456,
      age: 25,
    },
    {
      username: "pubudu",
      password: 654321,
      age: 29,
    },
  ]);

  res.status(201).json(user);
});

module.exports = {
  buildMethod,
  createMethod,
  bulkMethod,
};
