const mongoose = require("mongoose");
const User = mongoose.model("users");

const addUser = async data => {
  const user = await new User(data);
  user.save();

  return user;
};

const getUser = async id => {
  const user = await User.findById(id);

  return user;
};

const getUserByGithubId = async id => {
  const user = await User.findOne({ githubID: id });

  return user;
};

module.exports = {
  addUser,
  getUser,
  getUserByGithubId
};
