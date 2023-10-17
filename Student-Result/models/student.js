const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Sid: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  Physics:{
    type: Number,
    required: true
  },
  Chemestry:{
    type: Number,
    required: true
  },
  Maths:{
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('students', studentSchema)