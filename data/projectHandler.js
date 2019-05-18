const mongoose = require("mongoose");
const Project = mongoose.model("projects");

const getProjects = async () => {
  // stuff
  const projects = await Project.find({});

  if (projects && Object.keys(projects).length > 0) return projects;

  return null;
};

const getProject = id => {
  // stuff
};

const addProject = project => {
  // stuff
};

const updateProject = project => {
  // stuff
};

const deleteProject = id => {
  // stuff
};

module.exports = {
  getProject,
  getProjects,
  addProject,
  updateProject,
  deleteProject
};
