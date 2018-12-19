const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    preferences: { time: Number, price: Number },
    location: { name: String, geocode: Number },
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
            location: {name: 'WeWork', geocode: 9121},
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
        // const user2 = new ModelClass({
        //     email: 'test2@example.com',
        //     password: '1234',
        //     userName: 'Josh',
        // })
        user1.save()
        // user2.save()
        console.log('Seeded DB with 2 new users.');
    }
})

module.exports = ModelClass