require('dotenv').config();
require('./config/database');

const Course = require('./models/course');
const data = require('./data');

Promise.all([])
.then(function(results) {
  return Course.create(data.courses);
})
.then(function(courses) {
  console.log(courses)
})
.then(process.exit);
