const express = require('express')

const router = express.Router()

const SessionController = require('../controllers/SessionController')
const DashboardController = require('../controllers/DashboardController')

router.get('/', (req, res) => {
  res.send("OK!")
})

router.post('/session', SessionController.store)

router.put('/', (req, res) => {
  res.send("OK!")
})

router.delete('/', (req, res) => {
  res.send("OK!")
})

router.get('/dashboard', DashboardController.show)

module.exports = router