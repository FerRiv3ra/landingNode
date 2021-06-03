require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando Rivera',
        titulo: 'Curso de NODE'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Fernando Rivera',
        titulo: 'Curso de NODE'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Fernando Rivera',
        titulo: 'Curso de NODE'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });
// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))