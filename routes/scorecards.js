var express = require('express');
var router = express.Router();
var scorecardsRouter = require('../controllers/scorecards');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routers here start with /
router.get('/courses/:id/scorecards', ensureLoggedIn, scorecardsRouter.show)
router.post('/courses/:id/scorecards/new', ensureLoggedIn, scorecardsRouter.create)

module.exports = router;