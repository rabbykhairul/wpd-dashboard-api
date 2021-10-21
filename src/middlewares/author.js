const Authors = require("../models/Authors");

const isExistingAuthor = async (req, res, next) => {
  const { email } = req.body;
  const authorExistsByEmail = await Authors.findOne({ email });

  if (authorExistsByEmail)
    return res.status(400).json({ success: false, statusCode: 400, message: "An author alread exists with the email."});
  else next();
};

module.exports = { isExistingAuthor };