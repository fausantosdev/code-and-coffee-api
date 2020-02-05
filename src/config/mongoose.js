require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error: '))

db.once('open', () => {
  console.log("We're connected!")
})

module.exports = db