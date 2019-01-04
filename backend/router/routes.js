const UserController = require('../controllers/userController');
const Authentication = require('../controllers/authentication');

const passport = require('../services/passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})



module.exports = (app) => {

    app.get('/api/auth', requireAuth, (req, res) => {
        res.send({ user: req.user })
    })

    app.post('/api/user/signup', Authentication.signup)
    app.post('/api/user/signin', requireSignin, Authentication.signin)

    // app.get('/api/users', UserController.index)
    app.patch('/api/users', UserController.update)
}