const fs = require('fs');
const muliply = require('./multiply');

const createFile = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The base ${ base } is not a number`);
            return;
        }

        fs.writeFile(`data/multiplication_table_base_${ base }.txt`, muliply(base), (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(`multiplication_table_base_${ base }.txt`);
        });
    });
}

module.exports = createFile;