const { getProjects, createNewProject, updateProject, deleteProject } = require("../controllers/projectController");
const { isAuthenticated } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", getProjects);
router.post("/", isAuthenticated, createNewProject);
router.put("/:id", isAuthenticated, updateProject);
router.delete("/:id", isAuthenticated, deleteProject);

module.exports = router;