const colors = require('colors');

const createFile = require('./utils/createFile');
const listTable = require('./utils/listTable');

const argv = require('./config/yargs');

const command = argv._[0];

switch(command) {
    case 'list': 
        listTable(argv.base, argv.limit)
            .then(result => console.log(result.green))
            .catch(error => console.log(error.red));
        break;
    case 'create': 
        createFile(argv.base, argv.limit)
            .then(result => console.log(colors.green(`File ${ result.yellow } has been saved!`)))
            .catch(error => console.log(error.red));
        break;
    default: console.log(`${ command } is an unrecognized command.`); break;
}
