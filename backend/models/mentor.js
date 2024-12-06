const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  email:{ type:String, unique: true},

  phone: Number,
  password: String,
  projects: [
    {
      title: { type: String, required: true },
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
    },
  ],

});

const mentor = mongoose.model("mentors", mentorSchema);

module.exports = mentor;
