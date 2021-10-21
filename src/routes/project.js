const { getProjects, createNewProject, updateProject, deleteProject } = require("../controllers/projectController");

const router = require("express").Router();

router.get("/", getProjects);
router.post("/", createNewProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;