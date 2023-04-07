var express = require('express');
var router = express.Router();
var coursesCtrl = require('../controllers/courses');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// All routes here begin with /courses
router.get('/', ensureLoggedIn, coursesCtrl.index)
router.get('/new', ensureLoggedIn, coursesCtrl.new)
router.get('/:id', ensureLoggedIn, coursesCtrl.show)

module.exports = router;