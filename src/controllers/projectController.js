const Projects = require("../models/Projects");
const { saveUploadedFile, getBase64String } = require("../utils/fileMaster");

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
    const { body, files } = req;

    const newProject = new Projects(body);

    const uploadedFilePath = files ? await saveUploadedFile(files?.projectLogo) : "";
    const base64Image = uploadedFilePath? getBase64String(uploadedFilePath, files?.projectLogo?.mimetype) : "";
    newProject.projectLogo = base64Image;

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

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Projects.findOneAndDelete({ _id: id });

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Project deleted successfully",
    })
  } catch (err) {
    console.log("Error while deleting project: ", err);
    console.log("project id: ", req.params.id);

    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
}

module.exports = { getProjects, createNewProject, updateProject, deleteProject };