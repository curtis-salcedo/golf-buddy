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

// async function create(req, res) {
//   try {
//     const scorecard = await Scorecard.create(
//       req.body
//     )
//       await scorecard.save()
//       res.redirect(`/times`)
//   } catch (err) {
//     console.log("scorecard create error: " + err)
//     res.redirect('/times')
//   }
// }

async function index (req, res) {
  render(`scorecards/${req.params.id}/index`)
}

async function edit (req, res) {
  render(`scorecards/${req.params.id}/edit`)
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
  render('scorecards/show')
}