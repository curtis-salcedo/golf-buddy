var express = require('express');
var router = express.Router();
var scorecardsRouter = require('../controllers/scorecards');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routers here start with /times
router.get('/times/:id/scorecards', ensureLoggedIn, scorecardsRouter.new)
router.get('/:id', ensureLoggedIn, scorecardsRouter.show)
router.post('/scorecards', ensureLoggedIn, scorecardsRouter.create)

module.exports = router;