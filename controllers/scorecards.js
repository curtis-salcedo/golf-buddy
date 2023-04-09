const User = require('../models/user')
const Time = require('../models/time');
const Course = require('../models/course');
const Scorecard = require('../models/scorecard');

module.exports = {
  index,
  show,
  create
}

async function create(req, res) {
  const time = await Time.findById(req.params.id)
  console.log(time)
  const scorecard = await Scorecard.create({
    user: req.body.user,
    course: req.body.course,
    time: time.id
  })
  try {
    await scorecard.save()
    res.redirect('/times')
  } catch (err) {
    console.log(err)
    res.redirect('/times')
  }
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