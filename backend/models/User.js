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
        //   distance: Number,
        //   time: Number
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

// ModelClass.update = (user, newAddress, res) => {
//     googleMapsClient.geocode({address: newAddress}, (err, resp) => {
//         if (!err) {

//             const location = {
//                 address: resp.json.results[0].formatted_address,
//                 coords: resp.json.results[0].geometry.location
//             }
            
            // ModelClass.findOneAndUpdate({email: user.email}, {location: location}, (err, user) => {
            //     if (err) { 
            //         console.log(err);
            //     } else {
            //         user.location = location
            //         !!res && res.status(200).json(user);
            //     }
            // })
//         }
//     })
// }

ModelClass.update = (user, newAddress, res) => {
    googleMapsClient.geocode({address: newAddress}).asPromise()
    .then((resp) => {
        const location = {
                            address: resp.json.results[0].formatted_address,
                            coords: resp.json.results[0].geometry.location
                        }
        ModelClass.findOneAndUpdate({email: user.email}, {location: location}, (err, user) => {
            if (err) { 
                console.log(err);
            } else {
                user.location = location
                !!res && res.status(200).json(user);
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

//hardcoded for testing purposes 


// googleMapsClient.placesNearby({location: "29.7720111,-95.4125428",
// type: "restaurant", keyword: "hamburger,burger,burgers", rankby: "distance",
// maxprice: 2, opennow: true}, (err, resp) => {
//     if (!err) {
//         let myPlaces = []
//         resp.json.results.slice(0,6).forEach(place => {
//             let burger = {} 
//             burger.name = place.name 
//             burger.location = place.geometry.location
//             myPlaces.push(burger)
//         })
//         console.log(myPlaces)

    
//     }
// })



module.exports = ModelClass