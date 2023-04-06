var express = require('express');
var router = express.Router();
var schedulesRouter = require('../controllers/schedules');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routers here start with /schedules
router.get('/', ensureLoggedIn, schedulesRouter.index)

module.exports = router;