const express = require('express')
const multer = require('multer')

const router = express.Router()

const uploadConfig = require('../../config/upload')
const upload = multer(uploadConfig)

const SpotController = require('../controllers/SpotController')
const BookingController = require('../controllers/BookingController')


router.get('/', SpotController.index)

router.post('/', upload.single('thumbnail'), SpotController.store)

router.post('/:spot_id/bookings', BookingController.store)
/*
router.delete('/', (req, res) => {
  res.send("OK!")
})*/

module.exports = router