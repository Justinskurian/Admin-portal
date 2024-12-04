const mongoose = require("mongoose");
const referenceSchema = new mongoose.Schema({
  title: String,
  link: String,
});

const referenceMaterials = mongoose.model(
  "referenceMaterials",
  referenceSchema
);

module.exports = referenceMaterials;
