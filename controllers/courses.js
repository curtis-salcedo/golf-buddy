const Course = require('../models/course');
const { render } = require('../server');

module.exports = {
  index,
  new: newCourse,
  show,
  scorecard
}

// Render the "Scorecard" for the course selected
async function scorecard(req, res) {
  const course = await Course.findById(req.params.id)
  console.log(course)
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