const express = require('express');

const app = express();

//como no puedo ver las imagenes xq mi computador es Vruto como yo, entonces tengo que hacer app.use//

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(3005, () => {
    console.log("Puerto escuchando en 3005")
});
