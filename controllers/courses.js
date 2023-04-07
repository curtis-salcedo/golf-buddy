const Course = require('../models/course');
const { render } = require('../server');

module.exports = {
  index,
  new: newCourse,
  show,
}

// Render the "Course Information" page
async function show(req, res) {
  let course = await Course.findById(req.params.id)
  res.render(`courses/show`, {title: 'Course Information', course})
}

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