const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shotSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  scorecard: {
    type: Schema.Types.ObjectId,
    ref: 'Scorecard',
    required: true
  },
  clubUsed: {
    type: Schema.Types.ObjectId,
    ref: 'Club',
  },
  distance: {
    type: Number,
    min: 0,
    max: 400,
  },
  direction: {
    type: String,
    enum: ['Left', 'Center', 'Right']
  },
  outcome: {
    type: String,
    enum: ['Short', 'Long']
  },
  details: {
    shotType: {
      type: String,
      enum: ['Drive', 'Approach', 'Chip', 'Putt']
    },
    lieCondition: {
      type: String,
      enum: ['Fairway', 'Rough', 'Bunker', 'Green']
    }
  },
  notes: String,

}, {
  timestamps: true
})

module.exports = mongoose.model('Shot', shotSchema);