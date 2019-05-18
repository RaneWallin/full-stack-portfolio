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
  const project = Project.findOne({ id });

  return project;
};

const addProject = async data => {
  // stuff
  const project = await new Project(data).save();

  return project;
};

const updateProject = async (id, data) => {
  // stuff
  const result = await Project.updateOne({ id }, data);

  return result.nModified;
};

const deleteProject = async id => {
  // stuff
  const result = await Project.deleteOne({ id });

  return result.nModified;
};

module.exports = {
  getProject,
  getProjects,
  addProject,
  updateProject,
  deleteProject
};
