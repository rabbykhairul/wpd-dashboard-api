const mongoose = require("mongoose");

const projectSchema = ({
  title: { type: String, required: true },
  budget: { type: Number, default: 0, min: 0 },
  status: { type: String, default: "Working" },
  completionPercentage: { type: Number, default: 0, min: 0, max: 100 }
});

module.exports = new mongoose.model("Projects", projectSchema);