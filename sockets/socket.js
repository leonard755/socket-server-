"use strict";
exports.__esModule = true;
exports.mensaje = exports.desconectar = void 0;
var desconectar = function (cliente) {
    cliente.on('disconnect', function () {
        console.log('Cliente desconectado');
    });
};
exports.desconectar = desconectar;
// Escuchar Mensajes 
var mensaje = function (cliente) {
    cliente.on('mensaje', function (payload) {
        console.log('Mensaje recibido', payload);
    });
};
exports.mensaje = mensaje;
