const googleMaps = require("@google/maps");
const keys = require("../config/keys");

const googleMapsClient = googleMaps.createClient({
    key: keys.API_KEY,
    Promise: Promise
})

module.exports = googleMapsClient