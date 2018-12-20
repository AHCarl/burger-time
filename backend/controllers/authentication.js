const jwt = require('jwt-simple')
const User = require('../models/User')
const config = require('../config/keys')

const tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.jwtSecret)
}

exports.signin = (req, res, next) => {
  const token = tokenForUser(req.user)
  res.json({token: token})
}

exports.signup = (req, res, next) => {
  const email = req.body.email
  const userName = req.body.userName
  const password = req.body.password

  if (!email || !userName || !password) {
    return res.status(422).send({ error: 'You must provide an email, username, and password.' })
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
      userName: userName
    })

    user.save((err) => {
      if (err) {
        return next(err)
      }
      user.password = 'HIDDEN'
      token = tokenForUser(user)
      res.json({token: token})
    })
  })
}
