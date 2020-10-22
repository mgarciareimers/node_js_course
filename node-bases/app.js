const createFile = require('./utils/createFile');


createFile(5)
    .then(result => console.log(`File ${ result } has been saved!`))
    .catch(error => console.log(error));
