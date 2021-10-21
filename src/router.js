const authRoutes = require("./routes/auth");
const router = require("express").Router();

router.get("/", (req, res) => res.send("<h1>Hello from purity-ui-api</h1>"));

router.use("/auth", authRoutes);

module.exports = router;