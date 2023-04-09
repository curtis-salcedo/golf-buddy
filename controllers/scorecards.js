const User = require('../models/user')
const Time = require('../models/time');
const Course = require('../models/course');

module.exports = {
  index,
  show
}

async function index(req, res) {
  const time = await Time.findById(req.params.id)
  .populate('scorecards')
  const course = await Course.findById(time.course)
  const users = await User.find({})
  res.render('scorecards/index', {time, course, users})
}

async function show(req, res) {

}