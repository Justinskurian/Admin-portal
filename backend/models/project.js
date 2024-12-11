const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
  submissions: [
    {
      studentName: { type: String, required: true },
      evaluationStatus: {
        type: String,
        enum: ["Pending", "Completed", "Evaluated"],
        default: "Pending",
      },
      marks: { type: Number, default: null },
      comments: { type: String, default: "" },
      submissionDate: { type: Date, default: Date.now },
    },
  ],
});
const project = mongoose.model("projects", projectSchema);
module.exports = project;
