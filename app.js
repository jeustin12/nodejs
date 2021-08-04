require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jeustin',
        titulo: 'curso de node',
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'jeustin',
        titulo: 'curso de node',
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'jeustin',
        titulo: 'curso de node',
    });
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
