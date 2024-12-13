const mongoose = require("mongoose");
const referenceSchema = new mongoose.Schema({
  title: String,
  file: String
});

const referenceMaterials = mongoose.model(
  "materials",
  referenceSchema
);

module.exports = referenceMaterials;