const argv = require('yargs')
                .command('list', 'Console print the multiplication table', { 
                    base: { 
                        demand: true, 
                        alias: 'b',
                    },
                    limit: {
                        alias: 'l',
                        default: 10,
                    }
                })
                .help()
                .argv;

const createFile = require('./utils/createFile');

const base = argv.base;

console.log(argv.limit);

createFile(base)
    .then(result => console.log(`File ${ result } has been saved!`))
    .catch(error => console.log(error));
