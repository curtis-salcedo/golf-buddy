const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    groupSize: { type: Number, min: 1, max: 4, },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    scorecards: {
      type: Schema.Types.ObjectId,
      ref: 'Scorecard'
    }
}, {
  timestamps: true
})

module.exports = mongoose.model('Time', timeSchema);