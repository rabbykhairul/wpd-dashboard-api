const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String,
  email: { required: true, type: String },
  password: String,
}, { timestamps: true });

module.exports = new mongoose.model("Users", userSchema);