const place = require('./place/place');

const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Address of the place to get the weather'
        }
    }).argv;

    place.getPlace(argv.address)
        .then(console.log);

