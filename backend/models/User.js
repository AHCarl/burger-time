const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const googleMapsClient = require("../googleApi/googleMapsClient");

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    preferences: { time: Number, price: Number },
    location: { 
        address: String,
        coords: {
            lat: Number,
            lng: Number
        }
    },
    burgers: [
        { name: String,
          location: Object,
          distance: Number,
          time: Number
        }
    ]
})

userSchema.pre('save', function(next) {
    const user = this;
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err)
        }
        user.password = hash
        next()
      })
    })
  })

userSchema.methods.comparePassword = function(candidatePassword, callback) {
bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
    return callback(err)
    }
    callback(null, isMatch)
})
}

const ModelClass = mongoose.model('users', userSchema)

ModelClass.update = (user, newAddress) => {
    return ModelClass.findOne({email: user.email}, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            googleMapsClient.geocode({ address: newAddress }, (err, resp) => {
                if (!err) {
                    user.location = {
                        address: resp.json.results[0].formatted_address,
                        coords: resp.json.results[0].geometry.location
                    };
                    user.save();
                }
            })
        }
    })
}

module.exports = ModelClass