"use strict";
exports.__esModule = true;
var server_1 = require("./classes/server");
var enviroment_1 = require("./global/enviroment");
var router_1 = require("./routes/router");
var express_1 = require("express");
var cors_1 = require("cors");
var server = server_1["default"].instance;
//BodyParser
server.app.use(express_1["default"].urlencoded({ extended: true }));
server.app.use(express_1["default"].json());
//CORS
server.app.use(cors_1["default"]({ origin: true, credentials: true }));
//Rutas de serivicios 
server.app.use('/', router_1["default"]);
server.start(function () {
    console.log("Servidor en el puerto " + enviroment_1.SERVER_PORT);
});
