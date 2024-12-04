const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  projectTopics: String,
  phone: Number,
  password: String,
});

const admin = mongoose.model("admins", adminSchema);

module.exports = admin;
