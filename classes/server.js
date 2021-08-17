"use strict";
exports.__esModule = true;
var express_1 = require("express");
var enviroment_1 = require("../global/enviroment");
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var socket = require("../sockets/socket");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1["default"]();
        this.port = enviroment_1.SERVER_PORT;
        this.httpServer = new http_1["default"].Server(this.app);
        this.io = new socket_io_1["default"].Server(this.httpServer, { cors: { origin: true, credentials: true } });
        this.escucharSockets();
    }
    Object.defineProperty(Server, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    Server.prototype.escucharSockets = function () {
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', function (cliente) {
            console.log('Cliente Conectado');
            //
            socket.mensaje(cliente);
            //Desconectar
            socket.desconectar(cliente);
        });
    };
    Server.prototype.start = function (callback) {
        this.httpServer.listen(this.port, callback);
    };
    return Server;
}());
exports["default"] = Server;
