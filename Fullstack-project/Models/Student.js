const mongoose = require('mongoose')

// Schema Design
const studentsSchema = new mongoose.Schema({
    name: String,
  });
  
  
  // Collection Define
  const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;