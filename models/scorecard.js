const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scorecardSchema = new Schema({
  name: String,
  front: {
    one: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    two: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    three: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    four: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    five: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    six: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    seven: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    eight: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    nine: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },
  },
  back: {
    ten: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    eleven: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    twelve: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    thirteen: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    fourteen: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    fifteen: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    sixteen: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    seventeen: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },

    eighteen: {
      yardage: Number,
      par:{
        type: Number,
        min: 3,
        max: 5
      },
      handicap: Number,
    },
  },
}, {
  timestamps: true
});


module.exports = mongoose.model('Scorecard', scorecardSchema);