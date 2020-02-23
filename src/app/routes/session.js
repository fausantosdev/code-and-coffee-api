const express = require('express')

const router = express.Router()

const SessionController = require('../controllers/SessionController')

router.post('/new', SessionController.store)

//router.post('/login', SessionController.store)

module.exports = router
