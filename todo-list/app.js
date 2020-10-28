const argv = require('./config/yargs').argv;
const colors = require('colors');

const todo = require('./utils/todo');

const command = argv._[0];

switch(command) {
    case 'create':
        const result = todo.create(argv.description);
        console.log(result);
        break;
    case 'update': console.log('Update');  break;
    case 'list':
        const list = todo.getTasks();

        console.log('===================================='.rainbow);
        console.log(`Total tasks: ${ list.length }`);
        console.log('===================================='.rainbow);
        list.forEach(task => {
            console.log(`Task: ${ task.description }`);
            console.log(`State: ${ task.completed ? 'Completed'.green : 'Pending'.yellow }`);
            console.log('===================================='.rainbow);
        });

        break;
    default: console.log(`${ command } is an unrecognized command.`); break;
}