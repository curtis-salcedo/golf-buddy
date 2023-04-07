const Scorecard = require('../models/scorecard');
const Course = require('../models/course')
const Schedule = require('../models/schedule');

module.exports = {
  show,
  create,
  new: newScorecard,
  index,
}


// Create / edit scorecard for a specific course selected by ID
async function create(req, res) {
  
}

// Show current scorecard for specific course selected by ID
async function show(req, res) {
  let course = await Course.find( {} )
  let scorecard = await Scorecard.find( {} );
  res.render(`courses/${course._id}/scorecards`, { title: 'Scorecard', scorecard} )
}

// TBD if needed
async function newScorecard(req, res) {
  
}

// TBD if needed
async function index(req, res) {

}
