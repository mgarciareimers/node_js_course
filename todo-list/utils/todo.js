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

const create = (description) => {
    let todo = { description: description, completed: false };

    todoList.push(todo);
    saveDatabase();

    return todo;
}

module.exports = {
    create,
}