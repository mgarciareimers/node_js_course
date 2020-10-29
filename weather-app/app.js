const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Address of the place to get the weather'
        }
    }).argv;

console.log(argv.address);

