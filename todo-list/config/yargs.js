const createOptions = { 
    description: { 
        demand: true, 
        alias: 'd',
        desc: 'Description of the task'
    },
};

const updateOptions = { 
    description: { 
        demand: true, 
        alias: 'd',
        desc: 'Description of the task'
    },
    completed: {
        alias: 'c',
        default: true,
        desc: 'State (completed or not) of the task'
    },
};

const argv = require('yargs')
    .command('create', 'Creates a todo-list item', createOptions)
    .command('update', 'Updates the state of a todo-list item', updateOptions)
    .command('list', 'Shows the todo-list', {})
    .help()
    .argv;

module.exports = {
    argv,
};