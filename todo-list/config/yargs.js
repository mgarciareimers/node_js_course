const description = { 
    demand: true, 
    alias: 'd',
    desc: 'Description of the task'
};

const completed = {
    alias: 'c',
    default: true,
    desc: 'State (completed or not) of the task'
};

const createOptions = { description: description };
const updateOptions = { description: description, completed : completed};
const deleteOptions = { description : description };

const argv = require('yargs')
    .command('create', 'Creates a todo-list item', createOptions)
    .command('update', 'Updates the state of a todo-list item', updateOptions)
    .command('list', 'Shows the todo-list', {})
    .command('delete', 'Deletes an element of the todo-list', deleteOptions)
    .help()
    .argv;

module.exports = {
    argv,
};