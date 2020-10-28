const fs = require('fs');

let todoList = [];

const saveDatabase = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error ('An error occured while saving the data', err);
        }
    });
}

const loadDatabase = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}

const create = (description) => {
    loadDatabase();

    let todo = { description: description, completed: false };

    todoList.push(todo);
    saveDatabase();

    return todo;
}

const getTasks = () => {
    loadDatabase();

    return todoList;
}

module.exports = {
    create,
    getTasks,
}