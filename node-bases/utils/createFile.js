const fs = require('fs');
const muliply = require('./multiply');

const createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The base ${ base } is not a number`);
            return;
        }

        fs.writeFile(`data/multiplication_table_base_${ base }_limit_${ limit }.txt`, muliply(base, limit), (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(`multiplication_table_base_${ base }_limit_${ limit }.txt`);
        });
    });
}

module.exports = createFile;