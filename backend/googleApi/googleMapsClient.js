const googleMaps = require("@google/maps");
const API_KEY = require("./API_KEY");

const googleMapsClient = googleMaps.createClient({
    key: API_KEY
})

module.exports = googleMapsClient