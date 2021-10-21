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

module.exports = { getProjects };