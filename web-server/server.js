const express = require('express');

const app = express();

// Create middleware that shows a static content.
app.use(express.static(__dirname + '/public'));

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