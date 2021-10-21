const { createNewAuthor } = require("../controllers/authorController");
const { isExistingAuthor } = require("../middlewares/author");

const router = require("express").Router();

router.post("/", isExistingAuthor, createNewAuthor);

module.exports = router;