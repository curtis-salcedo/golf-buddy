var express = require('express');
var router = express.Router();
var coursesCtrl = require('../controllers/courses');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// const { courses } = require('../data');


// All routes here begin with /courses
router.get('/courses', ensureLoggedIn, coursesCtrl.index)
// router.get('/courses/new', ensureLoggedIn, coursesCtrl.new)
router.get('/courses/:id', ensureLoggedIn, coursesCtrl.show)
router.get('/courses/:id/scorecard', ensureLoggedIn, coursesCtrl.scorecard)
router.get('/courses/:id/history', ensureLoggedIn, coursesCtrl.history)

module.exports = router;