const { createNewAuthor, updateAuthor, deleteAuthor } = require("../controllers/authorController");
const { isExistingAuthor } = require("../middlewares/author");

const router = require("express").Router();

router.post("/", isExistingAuthor, createNewAuthor);
router.put('/:id', updateAuthor);
router.delete("/:id", deleteAuthor);

module.exports = router;