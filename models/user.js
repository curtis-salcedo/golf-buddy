const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  teeTimes: {
    type: Schema.Types.ObjectId,
    ref: 'time'
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);