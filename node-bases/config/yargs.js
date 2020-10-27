const options = { 
    base: { 
        demand: true, 
        alias: 'b',
    },
    limit: {
        alias: 'l',
        default: 10,
    },
};

const argv = require('yargs')
    .command('list', 'Console print the multiplication table', options)
    .command('create', 'Creates a file with the multiplication table', options)
    .help()
    .argv;

module.exports = argv;