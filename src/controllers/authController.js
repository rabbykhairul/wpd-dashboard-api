const Users = require("../models/Users");

const handleUserRegistration = async (req, res) => {
  try {
    const newUser = new Users(req.body);
    await newUser.save();
    return res.status(200).json({ success: true, statusCode: 200, message: "User registered successfully"});
  } catch (err) {
    console.log("Error while registering new user: ", err);
    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later."});
  }
}

module.exports = { handleUserRegistration };