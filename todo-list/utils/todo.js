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

// Method that loads the database.
const loadDatabase = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}

// Method that creates a new task.
const create = (description) => {
    loadDatabase();

    let todo = { description: description, completed: false };

    todoList.push(todo);
    saveDatabase();

    return todo;
}

// Method that gets the tasks.
const getTasks = () => {
    loadDatabase();

    return todoList;
}

// Method that updates a task.
const update = (description, completed = true) => {
    loadDatabase();
    
    let index = -1;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].description === description) {
            index = i;
            break;
        }
    }

    if (index < 0) {
        return false;
    }

    todoList[index].completed = completed;
    saveDatabase();

    return true;
}

// Method that deletes a task.
const deleteTask = (description) => {
    loadDatabase();
    
    let index = -1;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].description === description) {
            index = i;
            break;
        }
    }

    if (index < 0) {
        return false;
    }

    todoList.splice(index, 1);
    saveDatabase();

    return true;
}

module.exports = {
    create,
    getTasks,
    update,
    deleteTask,
}