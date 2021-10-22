const { createNewAuthor, updateAuthor, deleteAuthor, getAuthors } = require("../controllers/authorController");
const { isAuthenticated } = require("../middlewares/auth");
const { isExistingAuthor } = require("../middlewares/author");

const router = require("express").Router();

router.get("/", getAuthors);
router.post("/", isAuthenticated, isExistingAuthor, createNewAuthor);
router.put('/:id', isAuthenticated, updateAuthor);
router.delete("/:id", isAuthenticated, deleteAuthor);

module.exports = router;