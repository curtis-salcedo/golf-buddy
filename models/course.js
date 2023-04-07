const mongoose = require('mongoose');
const Schema = mongoose.Schema

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  courseLocation: {
    type: String,
    required: true
  },
  courseScorecard: [{
    hole: {
      type: Number,
      required: true
    },
    yardage: {
      type: Number,
      required: true
    },
    par: {
      type: Number,
      required: true
    }
  }]
});


module.exports = mongoose.model('Course', courseSchema)