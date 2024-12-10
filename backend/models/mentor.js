const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  email:{ type:String, unique: true},
  phone: Number,
  password: String,
  assignedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }]
});

const mentor = mongoose.model("mentors", mentorSchema);

module.exports = mentor;
