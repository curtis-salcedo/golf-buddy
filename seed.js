require('dotenv').config();
require('./config/database');

const Course = require('./models/course');
// const Schedule = require('./models/schedule');
// const User = require('./models/user');

const data = require('./data');


// Course.deleteMany({})
// .then(function(results){
//   console.log(results)
// })
// .then(function() {
//   process.exit();
// })

// const c1 = Course.deleteMany({})


Promise.all([c1])
.then(function(results) {
  console.log(results);
  return Course.create(data.courses);
})
.then(function(courses) {
  console.log(courses)
})
.then(process.exit);
