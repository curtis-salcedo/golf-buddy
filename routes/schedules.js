var express = require('express');
var router = express.Router();
var schedulesRouter = require('../controllers/schedules');

// All routers here start with /schedules
router.get('/', schedulesRouter.index)

module.exports = router;