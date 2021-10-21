const bcrypt = require("bcrypt");

const getHashedPassowrd = async (plainPassword) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainPassword, salt);
};

module.exports = { getHashedPassowrd };