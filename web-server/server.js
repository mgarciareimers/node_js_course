const express = require('express');
const hbs = require('hbs');
const helpers = require('./hbs/helpers');

const app = express();

// Create middleware that shows a static content.
app.use(express.static(__dirname + '/public'));

// Express handlebars engine.
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index.hbs', {
        name: 'miguel',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', { });
});

app.get('/data', (req, res) => {
    res.send('Hello data!');
});

app.listen(3000, () => console.log('Running PORT 3000'));