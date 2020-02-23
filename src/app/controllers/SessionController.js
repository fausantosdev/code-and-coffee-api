const User = require('../models/User')

const errors = {}

module.exports = {
  async store(req, res) {

    const { email } = req.body

    let user = await User.findOne({ email })

    if(user == null){
       user = await User.create(req.body)

       return res.json(user)
    }

    return res.json(user)
  }
}
