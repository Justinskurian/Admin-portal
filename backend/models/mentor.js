const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: {type: String,required: true,},
  email: {type: String,required: true,unique: true,},
  phone: {type: String,required: true,},
  password: {type: String,required: true,},
  projects: [
    {
      title: {type: String,required: true,},
      submissions: [
        {
          studentName: {type: String,required: true,},
          evaluationStatus: {type: String,enum: ['Pending', 'Completed', 'Evaluated'],default: 'Pending',},
          marks: {type: Number,default: null,},
          comments: {type: String,default: '',},
          submissionDate: {type: Date,default: Date.now,},
        },
      ],
    },
  ],
  referenceMaterials: [
    {
      title: {type: String,required: true,},
      link: {type: String,required: true,},
    },
  ],
});



const mentor=mongoose.model('mentors',mentorSchema);;
module.exports = mentor;
