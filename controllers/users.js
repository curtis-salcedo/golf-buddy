const User = require('../models/user')
const Time = require('../models/time');
const Course = require('../models/course')
const Scorecard = require('../models/scorecard')

module.exports = {
  index, 
}

async function index(req, res) {
  // console.log(req.user._id)
  const scorecard = await Scorecard.find({})
  .populate('time')
  .populate('courseId')
  // console.log(scorecard[0].user._id)
  const userDates = scorecard[0].time.date
  const userTimes = scorecard[0].time.time
  const userCourses = scorecard[0].courseId.courseName
  let userScorecards;
  if (req.user._id.toString() === scorecard[0].user._id.toString()) {
    // console.log("this is scorecard[0]" + scorecard[0])
    userScorecards = scorecard[0]
  }
  res.render('users/index', {userScorecards, userDates, userTimes, userCourses})
}