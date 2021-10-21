const { handleUserRegistration } = require("./../controllers/authController");
const { isDuplicateUser } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/register", isDuplicateUser, handleUserRegistration);

module.exports = router;