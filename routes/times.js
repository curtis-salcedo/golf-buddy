var express = require('express');
var router = express.Router();
var timesRouter = require('../controllers/times');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routers here start with /times
router.get('/times', ensureLoggedIn, timesRouter.index)
router.get('/times/new', ensureLoggedIn, timesRouter.new)
router.get('/times/:id', ensureLoggedIn, timesRouter.show)
router.get('/times/edit/:id', ensureLoggedIn, timesRouter.edit)
router.post('/times', ensureLoggedIn, timesRouter.create)
router.get('/times/:id', ensureLoggedIn, timesRouter.update)
router.delete('/times/delete/:id', ensureLoggedIn, timesRouter.delete)

module.exports = router;