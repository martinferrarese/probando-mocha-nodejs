var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbAHex", function(req, res) {
    var rojo = parseInt(req.query.rojo, 10);
    var verde = parseInt(req.query.verde, 10);
    var azul = parseInt(req.query.azul, 10);

    var resultadoEnHex = converter.rgbAHex(rojo, verde, azul);
    res.send(resultadoEnHex);
});

app.get("/hexARGB", function(req, res) {
    var valorEnHex = req.query.valorEnHex;

    var valorEnRGB = converter.hexARGB(valorEnHex);
    res.send(JSON.stringify(valorEnRGB));
});

app.listen(3000);