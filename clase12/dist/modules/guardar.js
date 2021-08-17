"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guardarFromForm = guardarFromForm;

var _producto = _interopRequireDefault(require("../class/producto.js"));

var _data = require("./data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function guardarFromForm(data) {
  let flagError = false;
  const msgErrorParametros = 'Parámetros no validos';

  if (data.title === undefined || data.title === '') {
    flagError = true;
  }

  if (data.price === undefined || data.price === '') {
    flagError = true;
  }

  if (isNaN(parseFloat(data.price))) {
    flagError = true;
  }

  if (data.thumbnail === undefined || data.thumbnail === '') {
    flagError = true;
  }

  if (flagError) {
    return 400;
  } else {
    _data.lastID.lastID = _data.lastID.lastID + 1; // Se incrementa el lastID por que se va a guarda un nuevo valor.

    const objProducto = new _producto.default(data.title, data.price, data.thumbnail, _data.lastID.lastID);

    _data.productos.push(objProducto);

    _data.dbIDs.push(_data.lastID.lastID);

    return 200;
  }
}