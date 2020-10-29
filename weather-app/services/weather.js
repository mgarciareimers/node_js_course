const axios = require('axios');

const getCurrentWeatherData = async (lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=042c5ada6cd85f3dbb07aa93c49040ee&units=metric`);
    return response.data;
}

module.exports = {
    getCurrentWeatherData,
}