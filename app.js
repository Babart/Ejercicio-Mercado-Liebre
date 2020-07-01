const express = require('express');

const app = express()

app.listen(3005, (req, res) => {
    console.log("Servidor escuchando en el puerto 3005")
}

