const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  course: { 
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  scorecards: {
    type: Schema.Types.ObjectId,
    ref: 'Scorecard'
  },
  shots: [{
    type: Schema.Types.ObjectId,
    ref: 'Shot'
  }]

}, {
  timestamps: true
})

module.exports = mongoose.model('Time', timeSchema);