const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const addUser = async data => {
  const user = await new User(data);
  user.save();

  return user;
};

const getUser = async id => {
  const user = await User.findById(id);

  return user;
};

const getUserByGithubId = async () => {
  const user = await User.findOne({ githubID: keys.githubOnlyID });

  return user;
};

const updateUser = async data => {
  const user = await getUserByGithubId();

  const result = await User.updateOne(
    { githubID: keys.githubOnlyID + "" },
    data
  );

  console.log(result);

  return result.nModified;
};

module.exports = {
  addUser,
  getUser,
  getUserByGithubId,
  updateUser
};
