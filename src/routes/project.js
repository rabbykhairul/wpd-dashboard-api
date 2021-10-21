const { getProjects, createNewProject } = require("../controllers/projectController");

const router = require("express").Router();

router.get("/", getProjects);
router.post("/", createNewProject);

module.exports = router;