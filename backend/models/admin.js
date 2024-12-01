const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {type: String,required: true,},
  email: {type: String,required: true,unique: true,},
  password: {type: String,required: true,},
  projectTopics: [
    {type: String,required: true,},
  ],
  mentors: [
    {
      name: {type: String,required: true,},
      email: {type: String,required: true,unique: true,},
      phone: {type: String,required: true,},
      password: {type: String,required: true,},
      projectTopic: {type: String,required: true,},
    },
  ],
});


module.exports = mongoose.model('Admin', adminSchema);
