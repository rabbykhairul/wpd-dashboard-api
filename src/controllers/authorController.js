const Authors = require("../models/Authors");

const createNewAuthor = async (req, res) => {
  try {
    const newAuthor = new Authors(req.body);
    await newAuthor.save();

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Author created successfully!",
      author: newAuthor
    })
  } catch (err) {
    console.log("Error while creating new author: ", err);
    console.log("author payload: ", req.body);

    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
}

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAuthor = await Authors.findOneAndUpdate({ _id: id }, req.body, { new: true });

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Author updated successfully!",
      author: updatedAuthor
    })
  } catch (err) {
    console.log("Error while updating author: ", err);
    console.log("author payload: ", req.body);

    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    await Authors.findOneAndDelete({ _id: id });

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Auther deleted successfully!"
    })
  } catch (err) {
    console.log("Error while deleting author: ", err);
    console.log("author id: ", req.params.id);

    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
}

const getAuthors = async (req, res) => {
  try {
    const authors = await Authors.find({});
    return res.status(200).json({
      success: true,
      statusCode: 200,
      authors
    })
  } catch (err) {
    console.log("Error while getting authors: ", err);

    res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later"});
  }
}

module.exports = { createNewAuthor, updateAuthor, deleteAuthor, getAuthors };