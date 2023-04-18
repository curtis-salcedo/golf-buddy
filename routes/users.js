var express = require('express');
var router = express.Router();
var usersRouter = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/users', ensureLoggedIn, usersRouter.index)
router.get('/users/:id', ensureLoggedIn, usersRouter.edit)

module.exports = router;
