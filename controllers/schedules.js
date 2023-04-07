const Schedule = require('../models/schedule');

module.exports = {
  index
}

function index(req, res) {
  res.render('schedules/index', {title: 'Schedule'})
}