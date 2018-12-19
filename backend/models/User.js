const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

const ModelClass = mongoose.model('users', userSchema)

ModelClass.updateAddress = (newAddress) => {
    ModelClass.findOne((err, user) => {
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
                    console.log('jawn cena')
                }
            })
        }
    });
}

module.exports = ModelClass