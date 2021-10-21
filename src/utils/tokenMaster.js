const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const { JWT_SECRET_KEY } = process.env;

const generateToken = (payload) => {
  delete payload.password;
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1d" });
  return `Bearer ${token}`;
}

module.exports = { generateToken };