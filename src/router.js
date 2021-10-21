const authRoutes = require("./routes/auth");
const authorRoutes = require("./routes/auther");
const router = require("express").Router();

router.get("/", (req, res) => res.send("<h1>Hello from purity-ui-api</h1>"));

router.use("/auth", authRoutes);
router.use("/authors", authorRoutes);

module.exports = router;