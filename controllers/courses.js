const Course = require('../models/course');
const { render } = require('../server');

module.exports = {
  index,
  new: newCourse
}

function index(req, res) {
  res.render('courses/index', {title: 'COURSE CONTROLLER > COURSES/INDEX'})
}

function newCourse(req, res) {
  res.render('courses/new', { title: 'COURSE CONTROLLER > COURSES/NEW'})
}