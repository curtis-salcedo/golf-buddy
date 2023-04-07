const Course = require('../models/course');
const { render } = require('../server');

module.exports = {
  index,
  new: newCourse,
  show
}

async function show(req, res) {
  let course = await Course.findById(req.params.id)
  res.render(`courses/show`, {title: 'Course just edited', course})
}

async function index(req, res) {
  const courses = await Course.find( {} );
  res.render('courses/index', {title: 'Course Listings', courses})
}

function newCourse(req, res) {
  res.render('courses/new', { title: 'Add / Edit Course'})
}