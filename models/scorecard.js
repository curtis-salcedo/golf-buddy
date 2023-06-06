const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scorecardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    // required: true
  },
  score: [{
    hole: {
      type: Number,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    putts: {
      type: Number,
      required: true
    },
  }],
  teeTime: {
    type: Schema.Types.ObjectId,
    ref: 'Time',
    required: true
  },
  shots: [{
    type: Schema.Types.ObjectId,
    ref: 'Shot'
  }],
}, {
  timestamps: true
})

module.exports = mongoose.model('Scorecard', scorecardSchema);