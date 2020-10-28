const argv = require('yargs').argv;


console.log(argv);

const command = arv._[0];

switch(command) {
    case 'create': console.log('Create'); break;
    case 'list': console.log('Show tasks'); break;
    case 'update': console.log('Create');  break;
    default: console.log(`${ command } is an unrecognized command.`); break;
}