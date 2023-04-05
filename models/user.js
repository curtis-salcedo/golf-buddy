const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
firstName: String,
lastName: String,
password: String
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);