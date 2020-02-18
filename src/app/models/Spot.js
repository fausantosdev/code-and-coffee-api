const mongoose = require('mongoose')

const localhost = 'http://localhost:3000'
const serverhost = 'https://code-and-coffee-api.herokuapp.com'

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
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

SpotSchema.virtual('thumbnail_url').get(function () {
  return `${serverhost}/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema)
