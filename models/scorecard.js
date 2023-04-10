const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scorecardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    // required: true
  },
  scorecard: [{
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
  }],
  time: {
    type: Schema.Types.ObjectId,
    ref: 'Time',
    // required: true
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Scorecard', scorecardSchema);