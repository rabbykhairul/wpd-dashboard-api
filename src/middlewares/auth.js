const { validateToken } = require("../utils/tokenMaster");
const Users = require("./../models/Users");

const isDuplicateUser = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await Users.findOne({ email });

  if (userExists) {
    res.status(400).json({ success: false, statusCode: 400, message: `An user already exists by the email ${email}`});
  } else next();
}

const isAuthenticated = async (req, res, next) => {
  const bearerToken = req.get("Authorization")?.split(" ")[1];
  const decodedToken = validateToken(bearerToken);

  if (decodedToken) next();
  else return res.status(400).json({
    success: false,
    statusCode: 400,
    message: "Access denied. Try logging in or signing up."
  })
}

module.exports = { isDuplicateUser, isAuthenticated };