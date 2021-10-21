const Users = require("../models/Users");
const { getHashedPassowrd } = require("../utils/passwordMaster");

const handleUserRegistration = async (req, res) => {
  try {
    const { fullName, email, password: plainPassword } = req.body;
    const password = await getHashedPassowrd(plainPassword);

    const newUser = new Users({ fullName, email, password });
    await newUser.save();
    
    return res.status(200).json({ success: true, statusCode: 200, message: "User registered successfully"});
  } catch (err) {
    console.log("Error while registering new user: ", err);
    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later."});
  }
}

module.exports = { handleUserRegistration };