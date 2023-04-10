const User = require('../models/user')
const Time = require('../models/time');
const Course = require('../models/course');
const Scorecard = require('../models/scorecard');

module.exports = {
  show,
  create,
  new: newScorecard
}

async function create(req, res) {
  console.log(req.body.course)
  try {
  const scorecard = await Scorecard.create(
    req.body
  )
    await scorecard.save()
    res.redirect(`/times`)
  } catch (err) {
    console.log("scorecard create error: " + err)
    res.redirect('/times')
  }
}

async function newScorecard(req, res) {
  const time = await Time.findById(req.params.id)
  const course = await Course.findById(time.course)
  const users = await User.find({})
  res.render('scorecards/new', {time, course, users})
}

async function show(req, res) {

}