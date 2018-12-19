const UserController = require('../controllers/userController');

module.exports = (app) => {
    app.get('/api/test', (req, res) => {
        res.send({ msg: 'oh herrrrrrro!' })
    })

    app.get('/api/users', UserController.index)
    app.patch('/api/users', UserController.update)
}