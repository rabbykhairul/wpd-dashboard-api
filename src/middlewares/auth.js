const Users = require("./../models/Users");

const isDuplicateUser = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await Users.findOne({ email });

  if (userExists) {
    res.status(400).json({ success: false, statusCode: 400, message: `An user already exists by the email ${email}`});
  } else next();
}

module.exports = { isDuplicateUser };