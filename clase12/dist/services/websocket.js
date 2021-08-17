"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWsServer = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _guardar = require("../modules/guardar.js");

var _data = require("../modules/data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initWsServer = server => {
  const io = (0, _socket.default)(server);
  io.on('connection', socket => {
    console.log('Nueva Conexion establecida!');
    socket.on('new-product', data => {
      let res = (0, _guardar.guardarFromForm)(data);

      if (res === 400) {
        socket.emit('messages', 'Datos no validos en el formulario');
      } else {
        let product = [_data.productos[_data.productos.length - 1]];
        io.emit('update', product);
      }
    });
    socket.on('askProducts', () => {
      console.log('Envie los productos');

      if (_data.productos.length > 0) {
        socket.emit('update', _data.productos);
      }
    });
  });
  return io;
};

exports.initWsServer = initWsServer;