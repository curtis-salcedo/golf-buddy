const Course = require('../models/course');
const Time = require('../models/time')
const course = require('../models/course');

module.exports = {
  index,
  new: newCourse,
  show,
  scorecard,
  history,
}

async function history(req, res) {
  const courseId = req.params.id
  const times = await Time.find({course: courseId}).populate('course','courseName')
  res.render(`courses/history`, {times, courseId})
}

// Render the "Scorecard" for the course selected
async function scorecard(req, res) {
  const course = await Course.findById(req.params.id)
  res.render(`scorecards/show`, { title: 'Scorecard', course})
}

// Render the "Course Information" page
async function show(req, res) {
  const course = await Course.findById(req.params.id)
  res.render(`courses/show`, {title: 'Course Information', course})
}

// Working Properly
async function index(req, res) {
  const courses = await Course.find( {} );
  res.render('courses/index', {title: 'Course List', courses})
}

async function newCourse(req, res) {
  try {
    const course = await Course.find();
    await course.save();
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/courses/${course._id}`, { title: 'View Course', course})
}