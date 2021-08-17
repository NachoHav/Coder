"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _producto = _interopRequireDefault(require("./../class/producto.js"));

var _app = require("../modules/app.js");

var _data = require("../modules/data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); //Creando algunos Productos para pruebas
//Comentar para verificar el error de no existen productos.


for (let id = 1; id <= 4; id++) {
  const objDatos = (0, _app.contenido)();
  const objProducto = new _producto.default(objDatos.title, objDatos.price, objDatos.thumbnail, id);

  _data.productos.push(objProducto);

  _data.dbIDs.push(id);

  _data.lastID.lastID = id;
}
/**
 * DEFINICION RUTAS BASICAS
 */
//Ruta para Listar todos los producto existentes


router.get('/productos/listar', (req, res) => {
  if (_data.productos.length < 1) {
    return res.status(400).json({
      error: 'No hay productos cargados'
    });
  }

  res.json({
    productos: _data.productos
  });
}); //Ruta para listar un producto especifico por su id

router.get('/productos/listar/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id < _data.dbIDs[0] || id > _data.dbIDs[_data.dbIDs.length - 1]) {
    return res.status(400).json({
      error: 'Producto no encontrado'
    });
  }

  const indexID = _data.dbIDs.findIndex(ID => ID === id);

  if (indexID === -1) {
    return res.status(400).json({
      error: 'Producto no encontrado'
    });
  }

  const product = _data.productos[indexID];
  res.json({
    product
  });
}); //Ruta para guardar un producto nuevo si se cumplen los parámetros necesarios.

router.post('/guardar', (req, res) => {
  const body = req.body;
  const msgErrorParametros = 'Parámetros no validos';

  const errorGuardar = msg => {
    return res.status(400).json({
      error: msg
    });
  };

  if (body.title === undefined) {
    errorGuardar('title no definido');
  }

  if (body.price === undefined) {
    errorGuardar('Precio no definido');
  }

  if (isNaN(parseFloat(body.price))) {
    errorGuardar('Precio letra');
  }

  if (body.thumbnail === undefined) {
    errorGuardar('No imagen');
  }

  _data.lastID.lastID = _data.lastID.lastID + 1; // Se incrementa el lastID.lastID por que se va a guarda un nuevo valor.

  const objProducto = new _producto.default(body.title, body.price, body.thumbnail, _data.lastID.lastID);

  _data.productos.push(objProducto);

  _data.dbIDs.push(_data.lastID.lastID); //Validando si el guarda es usado desde el form o via json/api


  if (body.form === 'true') {
    //Deprecated el form no se usa desde un submit, se reemplaza por websocket
    res.redirect(301, '/');
  } else {
    res.json({
      objProducto
    });
  }
}); //Ruta para actualizar un producto si se cumplen los parámetros necesarios.

router.put('/productos/actualizar/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  const msgErrorID = 'Producto no encontrado';
  const msgErrorParametros = 'Parámetros no validos';
  let flagUpdate = true;

  const errorGuardar = msg => {
    return res.status(400).json({
      error: msg
    });
  };

  if (id < _data.dbIDs[0] || id > _data.dbIDs[_data.dbIDs.length - 1]) {
    flagUpdate = false;
    errorGuardar(msgErrorID);
  }

  const indexID = _data.dbIDs.findIndex(ID => ID === id);

  if (indexID === -1) {
    flagUpdate = false;
    errorGuardar(msgErrorID);
  }

  if (body.title === undefined) {
    flagUpdate = false;
    errorGuardar(msgErrorParametros);
  }

  if (body.price === undefined) {
    flagUpdate = false;
    errorGuardar(msgErrorParametros);
  }

  if (isNaN(parseFloat(body.price))) {
    flagUpdate = false;
    errorGuardar(msgErrorParametros);
  }

  if (body.thumbnail === undefined) {
    flagUpdate = false;
    errorGuardar(msgErrorParametros);
  }

  if (flagUpdate) {
    _data.productos[indexID].title = body.title;
    _data.productos[indexID].price = body.price;
    _data.productos[indexID].thumbnail = body.thumbnail;
    const objProducto = _data.productos[indexID];
    res.json({
      objProducto
    });
  }
}); //Ruta encargada de eliminar un producto

router.delete('/productos/borrar/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const msgErrorID = 'Producto no encontrado';
  let flagDelete = true;

  const errorGuardar = msg => {
    return res.status(400).json({
      error: msg
    });
  };

  if (id < _data.dbIDs[0] || id > _data.dbIDs[_data.dbIDs.length - 1]) {
    flagDelete = false;
    errorGuardar(msgErrorID);
  }

  let indexID = _data.dbIDs.findIndex(ID => ID === id);

  if (indexID === -1) {
    flagDelete = false;
    errorGuardar(msgErrorID);
  }

  if (flagDelete) {
    const product = _data.productos[indexID];

    _data.productos.splice(indexID, 1);

    _data.dbIDs.splice(indexID, 1);

    res.json({
      product
    });
  }
});
var _default = router;
exports.default = _default;