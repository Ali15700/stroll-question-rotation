const mongoose = require('mongoose');

const cycleSchema = new mongoose.Schema({
    region: String,
    cycleDurationDays: Number, 
    currentQuestionIndex: Number, 
    lastUpdate: Date, 
  });
  
  const Cycle = mongoose.model('Cycle', cycleSchema);
  module.exports = Cycle;
  