const User = require('../models/user')
const Time = require('../models/time');
const Course = require('../models/course')
const Scorecard = require('../models/scorecard')

module.exports = {
  index, 
}

async function index(req, res) {
  try {
  const scores = await Scorecard.find({ user: req.user._id})
  .populate('time')
  .populate('courseId')
  res.render('users/index', {scores})
} catch (err) {
    console.log(err)
  }
}