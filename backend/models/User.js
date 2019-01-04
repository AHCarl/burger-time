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
          distance: String,
          time: String
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


ModelClass.update = (user, newAddress, res) => {
    googleMapsClient.geocode({address: newAddress}).asPromise()
    .then((resp) => {
        const location = {
                            address: resp.json.results[0].formatted_address,
                            coords: resp.json.results[0].geometry.location
                        }
        return location
        // ModelClass.findOneAndUpdate({email: user.email}, {location: location}, (err, user) => {
        //     if (err) { 
        //         console.log(err);
        //     } else {
        //         user.location = location
        //         !!res && res.status(200).json(user);
        //     }
        // })
    })
    .then((resp) => {
        let location = [resp.coords.lat, resp.coords.lng]
        googleMapsClient.placesNearby({location: location,
        type: "restaurant", keyword: "hamburger,burger,burgers", rankby: "distance",
        maxprice: 2, opennow: true}).asPromise()
        .then((re) => {
            let myPlaces = re.json.results.slice(0,6)
            let burgs = myPlaces.map((place) => {
                let burg = {}
                burg.name = place.name 
                burg.location = place.geometry.location
                return burg
            })
            location.push(burgs)
            return location
        })
        .then( r => {
            let origins = [`${r[0]},${r[1]}`]
            const myBurgers = r[2]
            let destinations = myBurgers.map(destination => {
                let lat = destination.location.lat 
                let lng = destination.location.lng
                return `${lat},${lng}`
            })
            googleMapsClient.distanceMatrix({origins, destinations}).asPromise()
            .then( response => {

                var i 
                for (i = 0; i < 6; i++) {
                    myBurgers[i].distance = response.json.rows[0].elements[i].distance.text
                    myBurgers[i].time = response.json.rows[0].elements[i].duration.text
                }

                ModelClass.findOneAndUpdate({email: user.email}, {location: location, burgers: myBurgers}, (err, user) => {
                    if (err) { 
                        console.log(err);
                    } else {
                        user.location = location
                        user.burgers = myBurgers
                        !!res && res.status(200).json(user);
                    }
                })
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}

module.exports = ModelClass