const Users = require("../models/Users");
const { getHashedPassowrd } = require("../utils/passwordMaster");
const { generateToken } = require("../utils/tokenMaster");

const handleUserRegistration = async (req, res) => {
  try {
    const { fullName, email, password: plainPassword } = req.body;
    const password = await getHashedPassowrd(plainPassword);

    const newUser = new Users({ fullName, email, password });
    await newUser.save();

    const user = { fullName, email };
    const token = generateToken(user);
    
    return res.status(200).json({ 
      success: true, 
      statusCode: 200, 
      message: "User registered successfully",
      user,
      token
    });
  } catch (err) {
    console.log("Error while registering new user: ", err);
    return res.status(500).json({ success: false, statusCode: 500, message: "Internal server error. Please try again later."});
  }
}

module.exports = { handleUserRegistration };