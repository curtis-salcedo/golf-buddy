const Course = require('../models/course');
const { render } = require('../server');

module.exports = {
  index,
  new: newCourse
}

async function index(req, res) {
  const course = await Course.find( {} );
  res.render('courses/index', {title: 'COURSE CONTROLLER > COURSES/INDEX', course})
}

function newCourse(req, res) {
  res.render('courses/new', { title: 'COURSE CONTROLLER > COURSES/NEW'})
}