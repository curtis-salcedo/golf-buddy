const Time = require('../models/time');
const Course = require('../models/course');

module.exports = {
  index,
  show,
  create,
  new: newTime,
  delete: deleteTime,
  edit,
  update
}

async function update(req, res) {
  try {
    const updates = {
      date: req.body.date,
      time: req.body.time,
      groupSize: req.body.groupSize
    }
    await Time.findByIdAndUpdate(req.params.id, updates)
    res.redirect(`/times/${req.params.id}`)
  } catch (err) {
    console.log(err)
    res.render('times/index')
  }
}

async function edit(req, res) {
  const time =  await Time.findById(req.params.id)
  const course = await Course.findById(time.course)
  res.render('times/edit', {time, course})
}

async function deleteTime(req, res) {
  try {
    const deletedTime = await Time.findOneAndDelete({ _id: req.params.id });
    if (!deletedTime) {
      console.log('no time found')
      return;
    }
    res.redirect('/times');
  } catch (err) {
    console.log(err);
  }
}

async function index(req, res) {
  const times = await Time.find({}).sort('date')
  res.render('times/index', { times })
}

async function show(req, res) {
  const time = await Time.findById(req.params.id)
  const course = await Course.findById(time.course)
  res.render(`times/show`, {time, course})
}

async function newTime(req, res) {
  try {
    const course = await Course.find({})
  res.render('times/new', {title: 'New', course})
  } catch (err) {
    next(err)
  }
}

async function create(req, res) {
  try {
    const time = await Time.create({
        date: req.body.date,
        time: req.body.time,
        groupSize: req.body.groupSize,
        course: req.body.course
    })
    await time.save();
    res.redirect(`/times`)
  } catch (err) {
    console.log(err)
    res.render('times/new', {errorMsg: err.message})
  }
}


