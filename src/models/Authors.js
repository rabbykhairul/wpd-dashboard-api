const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  role: String,
  level: String,
  status: { type: String, default: "Offline" },
  joiningDate: { type: Date, default: new Date() },
  profilePic: String,
}, { timestamps: true });

module.exports = new mongoose.model("Authors", authorSchema);