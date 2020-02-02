require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// Config
app.use(cors())
app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  return res.json({
    "name": "Semana OmniStack 0.9",
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

app.set('port', process.env.PORT)

module.exports = app