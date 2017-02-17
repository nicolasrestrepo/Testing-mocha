/*
Module Dependencies
*/

var express = require('express');
var converter = require('../app/converter');

var app = express();

app.get('/toCelcius', function(req, res) {
    var temperature = req.query.temperature;
    res.send(200, converter.toCelsius(temperature));
})

app.get('/toFahrenheit', function(req, res) {
    var temperature = req.query.temperature;
    res.send(200, converter.toFahrenheit(temperature));
})
app.listen(3005);