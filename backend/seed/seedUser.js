const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/burgertime",{ useNewUrlParser: true });

const User = require("../models/User");
const googleMapsClient = require("../googleApi/googleMapsClient");

User.find({}, (err, users) => {
    if (err) {
        console.log(err);
    } else if (users.length === 0) {
        const user1 = new User({
            email: 'test@example.com',
            password: '1234',
            userName: 'Alan',
            preferences: { time: 11, price: 2 },
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

        googleMapsClient.geocode({ address: "708 Main St Houston TX" }, (err, resp) => {
            if (!err) {
                user1.location = {
                    address: resp.json.results[0].formatted_address,
                    coords: resp.json.results[0].geometry.location
                };
                user1.save();
            }
        })
        console.log('yay we seeded')
    }
})