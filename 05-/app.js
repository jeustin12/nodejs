const express = require('express');
const app = express();
const port = 8080;

//contenido estatico

app.use(express.static('public'));

app.get('/hoa', (req, res) => {
    res.send('World');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
