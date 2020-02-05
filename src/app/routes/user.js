const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("OK!")
})

router.post('/', (req, res) => {
  res.json(req.body)
})

router.put('/', (req, res) => {
  res.send("OK!")
})

router.delete('/', (req, res) => {
  res.send("OK!")
})

module.exports = router