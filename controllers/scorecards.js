const User = require('../models/user')
const Time = require('../models/time');
const Course = require('../models/course');
const Scorecard = require('../models/scorecard');
const { render } = require('ejs');

module.exports = {
  show,
  create,
  new: newScorecard,
  index,
  edit
}


async function index (req, res) {
  let scorecard = await Scorecard.findById(req.params.id)
  .populate('courseId')
  const course = await Course.findById(scorecard.courseId)
  res.render(`scorecards/index`, {scorecard, course})
}

async function edit (req, res) {
  res.render(`scorecards/${req.params.id}/edit`)
}

async function create(req, res) {
  try {
    const scorecard = await Scorecard.create(req.body)
    await scorecard.save()
    const time = await Time.findById(scorecard.time._id)
    time.scorecards = scorecard._id
    await time.save()
    res.redirect('/times')
  } catch (err) {
    console.log('there is an error at controllers/scorecard/create')
  }
}

async function newScorecard(req, res) {
  const scores = await Scorecard.find({})
  const time = await Time.findById(req.params.id)
  const course = await Course.findById(time.course)
  const users = await User.find({})
  res.render('scorecards/new', {time, course, users, scores})
}

async function show(req, res) {
  let scorecard = await Scorecard.findById(req.params.id)
  .populate('courseId')
  .populate('time')
  let course = await Course.find({})
  let time = await Time.find({})
  res.render('scorecards/show',{scorecard, course, time})
}