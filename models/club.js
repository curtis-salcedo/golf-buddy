const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: String,
  brand: String,
  range: Number,
  distance: Number,
  notes: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Club', clubSchema);