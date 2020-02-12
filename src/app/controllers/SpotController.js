const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {

  async index(req, res) {
    const { tech } = req.query
    const spots = await Spot.find({ techs: tech })// O mongo verifica se existe essa string dentro do array*

    res.json(spots)
  },

  async store(req, res) {
    const { filename } = req.file
    const { company, techs, price } = req.body
    const { user_id } = req.headers

    const user = await User.findById(user_id)
    if (!user) {
      res.status(400).json({ error: true })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price
    })

    res.json(spot)

  }
}