const asyncHandler = require("express-async-handler");
const db = require("../models");
const User = db.users;
const Post = db.posts;

// Helper method to insert data

const oneToMany = asyncHandler(async (req, res) => {
  const user = await User.create({
    username: "keerthi",
    age: 25,
    password: "12345",
  });

  const post1 = await Post.create({
    post: "post1",
  });
  const post2 = await Post.create({
    post: "post2",
  });
  const post3 = await Post.create({
    post: "post3",
  });

  const result = await user.addPosts([post1, post2, post3]);

  res.status(200).json(result);
});

module.exports = {
  oneToMany,
};
