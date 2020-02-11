const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  techs: [{
    type: String,
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
}, {
  toJSON: {
    virtuals: true
  }
})

SpotSchema.virtual('thumbnail_url').get(function () {
  return `https://code-and-coffee-api.herokuapp.com/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema) 