const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  date: Date,
  teeTime: Number,
  group: String
  
}, {
  timestamps: true
})