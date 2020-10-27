const muliply = require('./multiply');

const listTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The base ${ base } is not a number`);
            return;
        }

        resolve(muliply(base, limit));
    });
}

module.exports = listTable;