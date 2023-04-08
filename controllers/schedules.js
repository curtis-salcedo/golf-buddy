const Schedule = require('../models/schedule');
const User = require('../models/user')
const Course = require('../models/course');
const course = require('../models/course');

module.exports = {
  index,
  show,
  create,
  new: newSchedule,
}

async function newSchedule(req, res) {
  try {
    const course = await Course.find()
  res.render('schedules/new', {title: 'New', course})
  } catch (err) {
    next(err)
  }
}

async function create(req, res) {
  const course = await Course.find({})
  const newTeeTime = {
    date: req.body.date,
    time: req.body.time,
    groupSize: req.body.groupSize,
    course: req.body.course
  }
  // const courseTeeTime = {
  //   date: req.body.date,
  //   time: req.body.time,
  //   groupSize: req.body.groupSize,
  // }
  try {
    const schedule = await Schedule.create({})
    schedule.teeTime.push(newTeeTime)
    // course.teeTime.push(courseTeeTime)
    await schedule.save();
    res.redirect(`/schedules`)
  } catch (err) {
    console.log(err)
    res.render('schedules/new', {errorMsg: err.message})
  }
}

async function show(req, res) {
  // const schedule = await Schedule.find()
  // const check = await User.findById(req.user.id)
  // const user = await User.find()
  // if (!check || check.email !== 'curtissalcedo@gmail.com') {
  //   return res.status(403).send(`Nice Try!`)
  // } 
  // res.render('schedules/show', { title: 'Edit Schedule', schedule, user})
}

async function index(req, res) {
  const schedule = await Schedule.find({}).populate('teeTime.date')
  console.log(schedule)
  let group;
  let fullDate;
  let time;
  let date;
  for (let key in schedule) {
    // console.log(schedule[key]._id)
    // console.log(schedule[key].teeTime[0].groupSize)
    // console.log(schedule[key].teeTime[0].time)
    // console.log(schedule[key].teeTime[0].course)
    // console.log(schedule[key].teeTime[0].date)
    id = schedule[key].teeTime[0]._id
    group = schedule[key].teeTime[0].groupSize
    fullDate = schedule[key].teeTime[0].date
    let month = fullDate.getMonth() + 1;
      let day = fullDate.getDate();
      let year = fullDate.getFullYear();
      date =`${month}/${day}/${year}`;
    time = schedule[key].teeTime[0].time
  }
  // console.log()
  res.render('schedules/index', {title: 'Schedule', schedule, group, date, time})
}