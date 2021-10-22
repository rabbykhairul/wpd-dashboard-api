const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const { JWT_SECRET_KEY } = process.env;

const generateToken = (payload) => {
  delete payload.password;
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1d" });
  return `Bearer ${token}`;
}

const validateToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  } catch (err) {
    console.log("\n---");
    console.log("error in token validation");
    console.log("err: ", err);
    console.log("---\n");
    return null;
  }
};

module.exports = { generateToken, validateToken };