const { getProjects, createNewProject, updateProject } = require("../controllers/projectController");

const router = require("express").Router();

router.get("/", getProjects);
router.post("/", createNewProject);
router.put("/:id", updateProject);

module.exports = router;