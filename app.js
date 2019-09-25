'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas

var user_routes = require('./routes/userRoute');
var hotel_routes = require('./routes/hotelRoutes');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors

// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

//rutas
app.use('/api', user_routes);
app.use('/api', hotel_routes);

//exporto la configuración

module.exports = app;