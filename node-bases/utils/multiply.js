const muliply = (base, limit) => {
    let data = `Base ${ base } multiplication table:\n\n`;

    limit = limit === null || limit === undefined ? 10 : limit;

    for (let i = 1; i <= limit; i++) {
        data = data + `${ base } * ${ i } = ${ base * i }\n`;
    }

    return data;
}

module.exports = muliply;