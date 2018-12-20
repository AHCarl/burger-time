const User = require('../models/User.js')

exports.index = (req, res, next) => {
    User.find((err, users) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: err
            })
        } else {
            res.status(200).json(users)
        }
    })
}

exports.update = (req, res, next) => {
    User.update(req.body.user, req.body.address)
    // might need a .then here:
        // .then(User.find((err, users) => {
        //     if (err) {
        //         res.status(500).json({
        //             success: false,
        //             error: err
        //         })
        //     } else {
        //         res.status(200).json(users)
        //     }
        // }))
}