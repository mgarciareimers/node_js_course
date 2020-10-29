const place = require('./services/place');
const weather = require('./services/weather');

const colors = require('colors');
const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Address of the place to get the weather'
        }
    }).argv;

    place.getPlace(argv.address)
        .then(response => {
            weather.getCurrentWeatherData(response.lat, response.lng)
                .then(response => {
                    console.log('*****************************');
                    console.log(`*  W E A T H E R __ A P P  **`);
                    console.log('*****************************');
                    console.log(` Temperature (ºC): ${ colors.green(response.main.temp) } `.yellow);
                    console.log(` Humidity (%): ${ colors.green(response.main.humidity) } `.yellow);
                    console.log('*****************************');
                }).catch(error => console.log(`An error occurred while fetching the weather of ${ argv.address }`.red));
        }).catch(error => console.log(`An error occurred while fetching the coordinates of ${ argv.address }`.red));

