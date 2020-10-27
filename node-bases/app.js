const createFile = require('./utils/createFile');
const listTable = require('./utils/listTable');
const argv = require('./config/yargs');

const command = argv._[0];

switch(command) {
    case 'list': 
        listTable(argv.base, argv.limit)
            .then(result => console.log(result))
            .catch(error => console.log(error));
        break;
    case 'create': 
        createFile(argv.base, argv.limit)
            .then(result => console.log(`File ${ result } has been saved!`))
            .catch(error => console.log(error));
        break;
    default: console.log(`${ command } is an unrecognized command.`); break;
}
