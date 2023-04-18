var express = require('express');
var router = express.Router();
var scorecardsRouter = require('../controllers/scorecards');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routers here start with /times
router.get('/times/:id/scorecards', ensureLoggedIn, scorecardsRouter.new)
router.get('/scorecards/:id/show', ensureLoggedIn, scorecardsRouter.show)
router.get('/scorecards/:id/index', ensureLoggedIn, scorecardsRouter.index)
router.get('/scorecards/:id/edit', ensureLoggedIn, scorecardsRouter.edit)
router.post('/scorecards', ensureLoggedIn, scorecardsRouter.create)

module.exports = router;