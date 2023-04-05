const mongoose = require('mongoose');
const Schema = mongoose.Schema

const courseSchema = new Schema({
  courseName: String,
  courseLocation: String,
  courseScorecard: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Course', courseSchema);