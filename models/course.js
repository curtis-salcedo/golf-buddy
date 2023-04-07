const mongoose = require('mongoose');
const Schema = mongoose.Schema

const courseSchema = new Schema({
  courseName: String,
  courseLocation: String,
  courseScorecard: [{
    type: Schema.Types.ObjectId,
    ref: 'Scorecard'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Course', courseSchema);