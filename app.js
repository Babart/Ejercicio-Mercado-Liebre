const express = require('express');

const app = express();

//como no puedo ver las imagenes xq mi computador es Vruto como yo, entonces tengo que hacer app.use//

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(3009, () => {
    console.log("Puerto escuchando en 3009") 
});

 
