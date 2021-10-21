const Projects = require("../models/Projects");

const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find({});

    return res.status(200).json({
      success: true,
      statusCode: 200,
      projects
    })
  } catch (err) {
    console.log("Error while getting the list of projects: ", err);

    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
};

const createNewProject = async (req, res) => {
  try {
    const newProject = new Projects(req.body);
    await newProject.save();

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "New project created successfully",
      project: newProject,
    })
  } catch (err) {
    console.log("Error while creating new project: ", err);
    console.log("project payload: ", req.body);

    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
}

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Projects.findOneAndUpdate({ _id: id }, req.body, { new: true });

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Project updated successfully",
      project: updatedProject,
    })
  } catch (err) {
    console.log("Error while updating project: ", err);
    console.log("project payload: ", req.body);

    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
}

module.exports = { getProjects, createNewProject, updateProject };