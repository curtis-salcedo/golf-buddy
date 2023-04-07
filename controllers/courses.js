const Course = require('../models/course');
const Scorecard = require('../models/scorecard');
const { render } = require('../server');

module.exports = {
  index,
  new: newCourse,
  show,
}

async function show(req, res) {
  let course = await Course.findById(req.params.id)
  res.render(`courses/show`, {title: 'Course Information', course})
}

async function index(req, res) {
  const courses = await Course.find( {} );
  res.render('courses/index', {title: 'Course Listings', courses})
}

async function newCourse(req, res) {
  const course = await Course.find ( {} );
  try {
    await course.save();
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/courses/${course._id}`, { title: 'Add / Edit Course', course})
}