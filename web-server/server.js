const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const output = {
        name : 'Miguel',
        url: req.url,
    }
    res.send(output);
});

app.get('/data', (req, res) => {
    res.send('Hello data!');
});

app.listen(3000, () => console.log('Running PORT 3000'));