const argv = require('./config/yargs').argv;

const todo = require('./utils/todo');

const command = argv._[0];

switch(command) {
    case 'create':
        const result = todo.create(argv.description);
        console.log(result);
        break;
    case 'update': console.log('Update');  break;
    case 'list': console.log('Show tasks'); break;
    default: console.log(`${ command } is an unrecognized command.`); break;
}