const Users = require("../models/Users");
const { getHashedPassowrd, comparePassword } = require("../utils/passwordMaster");
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

const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    const plainUser = user?.toObject();

    if (plainUser) {
      const passwordMatched = await comparePassword(password, plainUser.password);
      if (passwordMatched) {
        delete plainUser.password;

        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Login successfull",
          user: plainUser,
          token: generateToken(plainUser)
        });
      } else return res.status(400).json({ success: false, statusCode: 400, message: "Wrong email or password" });
    } else return res.status(400).json({ success: false, statusCode: 400, message: "Wrong email or password" });
  } catch (err) {
    console.log("Error while logging in user: ", err);
    return res.status(500).json({ success: false, statusCode: 500, message: "Something went wrong. Please try again later."});
  }
};

module.exports = { handleUserRegistration, handleUserLogin };