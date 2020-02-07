const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  approved: {
    type: Boolean
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Booking', BookingSchema) 