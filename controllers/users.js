const User = require('../models/user')
const Time = require('../models/time');
const Course = require('../models/course')
const Scorecard = require('../models/scorecard')

module.exports = {
  index,
  edit,
  update
}

async function update(req, res) {
  try {
    const bag = {
      ball: req.body,
      clubs: req.body
    }
    await Time.findByIdAndUpdate(user.id, bag)
    res.redirect(`/times/${req.params.id}`)
  } catch (err) {
    console.log(err)
    res.render(`users/${user._id}`)
  }
}

async function edit(req, res) {
  try {
    const user = await User.findById(req.user.id)
    res.render('users/edit', {user})
  } catch(err) {
    console.log(err, 'error at user/edit')
  }
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