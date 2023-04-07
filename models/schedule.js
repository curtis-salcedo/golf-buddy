const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  teeTime: [{
    date: { type: Date, required: true },
    time: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    groupSize: { type: Number, min: 1, max: 4, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
}],
}, {
  timestamps: true
})

module.exports = mongoose.model('Schedule', scheduleSchema);