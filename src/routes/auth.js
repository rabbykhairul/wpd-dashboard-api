const { handleUserRegistration, handleUserLogin } = require("./../controllers/authController");
const { isDuplicateUser } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/register", isDuplicateUser, handleUserRegistration);

router.post("/login", handleUserLogin);

module.exports = router;