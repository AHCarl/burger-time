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

ModelClass.find({}, (err, users) => {
    if (err) {
        console.log(err);
    } else if (users.length === 0) {
        const user1 = new ModelClass({
            email: 'test@example.com',
            password: '1234',
            userName: 'Alan',
            preferences: {time: 11, price: 2},
            location: {
                address: '',
                coords: {
                    lat: null,
                    lng: null
                }
            },
            burgers: [
                {
                    name: "Hubcap",
                    location: {},
                    distance: 11,
                    time: 3
                },
                {
                    name: "McDicks",
                    location: {},
                    distance: 1,
                    time: 2
                }
            ]

        })

        googleMapsClient.geocode({address: "708 Main St Houston TX"}, (err, resp) => {
            if (!err) {
                user1.location = {
                    address: resp.json.results[0].formatted_address,
                    coords: resp.json.results[0].geometry.location
                };
                user1.save();
            }
        })
    }
})

module.exports = ModelClass