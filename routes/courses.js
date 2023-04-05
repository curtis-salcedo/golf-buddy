var express = require('express');
var router = express.Router();
var coursesCtrl = require('../controllers/courses');


// All routes here begin with /courses
router.get('/', coursesCtrl.index)
router.get('/new', coursesCtrl.new)

module.exports = router;