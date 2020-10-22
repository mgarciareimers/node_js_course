const muliply = (base) => {
    let data = `Base ${ base } multiplication table:\n\n`;

    for (let i = 1; i <= 10; i++) {
        data = data + `${ base } * ${ i } = ${ base * i }\n`;
    }

    return data;
}

module.exports = muliply;