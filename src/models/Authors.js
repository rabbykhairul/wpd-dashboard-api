const mongoose = require("mongoose");

const authorSchema = ({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  role: String,
  level: String,
  status: { type: String, default: "Offline" },
  joiningDate: { type: Date, default: new Date() }
}, { timestamps: true });

module.exports = new mongoose.model("Authors", authorSchema);