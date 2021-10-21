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

module.exports = { createNewAuthor };