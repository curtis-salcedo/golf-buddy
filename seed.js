require('dotenv').config();
require('./config/database');

const Course = require('./models/course');
const Schedule = require('./models/schedule');
const User = require('./models/user');

const data = require('./data');

