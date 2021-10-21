const { createNewAuthor, updateAuthor } = require("../controllers/authorController");
const { isExistingAuthor } = require("../middlewares/author");

const router = require("express").Router();

router.post("/", isExistingAuthor, createNewAuthor);
router.put('/:id', updateAuthor);

module.exports = router;