// models/questionSchema.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  region: String,
  questionId: Number,
  content: String,
  
});

module.exports = mongoose.model('Question', questionSchema);
