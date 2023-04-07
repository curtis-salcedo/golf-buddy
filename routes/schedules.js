var express = require('express');
var router = express.Router();
var schedulesRouter = require('../controllers/schedules');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routers here start with /
router.get('/schedules', ensureLoggedIn, schedulesRouter.index)
router.get('/schedules/new', ensureLoggedIn, schedulesRouter.new)
router.post('/schedules', ensureLoggedIn, schedulesRouter.create)
router.get('/schedules', ensureLoggedIn, schedulesRouter.show)

module.exports = router;