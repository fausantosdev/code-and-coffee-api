require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const users = require('../app/routes/user')
const spot = require('../app/routes/spot')

const app = express()

// Connection
require('./mongoose')

// Config
app.use(cors({
  origin: 'https://dev-radar-api-0.herokuapp.com',
  optionsSuccessStatus: 200
}))
app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

// Routes
app.get('/', (req, res) => {
  return res.json({
    "name": "Api para a aplicação Code and Coffee",
    "version": "0.1",
    "author": [
      {
        "name": "Fall Santos",
        "rule": "Fullstack developer",
        "email": "fallsantosdev@hotmail.com",
        "github": "https://github.com/fallsantos",
        "linkedin": "https://www.linkedin.com/in/fall-santos-23bb87103/"
      }
    ]
  })
})

app.use('/users', users)
app.use('/spot', spot)

app.set('port', process.env.PORT)

module.exports = app