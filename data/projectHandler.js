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

const addProject = async data => {
  // stuff
  const project = await new Project(data).save();

  return project;
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
