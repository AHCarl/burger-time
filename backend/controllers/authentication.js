const jwt = require('jwt-simple')
const User = require('../models/User')
const config = require('../config/keys')
const googleMapsClient = require("../googleApi/googleMapsClient");

const tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.jwtSecret)
}

exports.signin = (req, res, next) => {
  const token = tokenForUser(req.user)
  const user = req.user
  res.json({
    token: token,
    user: user
  })
}

exports.signup = (req, res, next) => {
  const email = req.body.email
  const userName = req.body.userName
  const password = req.body.password
  const address = req.body.address

  if (!email || !userName || !password || !address) {
    return res.status(422).send({ error: 'You must provide an email, username, password, and address.' })
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err)
    }
    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use.'})
    }


    const user = new User({
      email: email,
      password: password,
      userName: userName,
      location: {
        address: address
      },
      burgers: []
    })

    user.save((err) => {
      if (err) {
        return next(err)
      }
      user.password = 'HIDDEN'
      token = tokenForUser(user)
      res.json({token: token})
    })

    User.update(user, address);
  })
}
