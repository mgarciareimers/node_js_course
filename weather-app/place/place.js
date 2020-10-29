const axios = require('axios');

const getPlace = async (input) => {
    const request = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURI(input) }.json`,
        params: { 'access_token': 'pk.eyJ1IjoibWdhcmNpYXJlaW1lcnMiLCJhIjoiY2tndXRoZnhhMGR3NTJ3cnlqaHVuZzdtMCJ9.LYMywPSKXdRfB0TuNmyBOw' }
    });
    
    const response = await request.get();

    if (response.data.features.length <= 0) {
        throw new Error(`No results for ${ address } have been found.`);
    }

    const data = response.data.features[0];
    const address = data.place_name;
    const lat = data.geometry.coordinates[0];
    const lng = data.geometry.coordinates[1];

    return {
        address: address,
        lat: lat,
        lng: lng,
    }
}

module.exports = {
    getPlace,
}