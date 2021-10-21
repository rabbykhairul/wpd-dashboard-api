const { getProjects } = require("../controllers/projectController");

const router = require("express").Router();

router.get("/", getProjects);

module.exports = router;