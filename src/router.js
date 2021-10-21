const authRoutes = require("./routes/auth");
const authorRoutes = require("./routes/auther");
const projectRoutes = require("./routes/project");
const router = require("express").Router();

router.get("/", (req, res) => res.send("<h1>Hello from purity-ui-api</h1>"));

router.use("/auth", authRoutes);
router.use("/authors", authorRoutes);
router.use("/projects", projectRoutes);

module.exports = router;