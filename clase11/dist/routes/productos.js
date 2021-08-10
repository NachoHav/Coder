"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _producto = require("../public/producto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/listar', (req, res) => {
  if (_producto.productos.length == []) {
    return res.status(404).json({
      Error: 'No hay productos cargados'
    });
  } // res.json(productos);


  res.render('main', {
    productos: _producto.productos
  });
});
router.get('/listar/:id', (req, res) => {
  const id = req.params.id;

  if (id <= 0 || id > _producto.productos.length) {
    return res.status(404).json({
      Error: 'El producto no existe'
    });
  }

  const producto = _producto.productos.find(idProd => idProd.id == id);

  res.json(producto);
});
router.get('/cargar', (req, res) => {
  res.render('./partials/cargarProductos', {
    layout: 'index'
  });
});
router.post('/guardar', (req, res) => {
  const body = req.body;

  if (body == {}) {
    return res.status(404).json({
      Error: 'Producto vacio'
    });
  }

  _producto.productos.push({
    id: _producto.productos.length + 1,
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail
  }); // res.render('main', { productos });


  res.render('./partials/cargarProductos', {
    layout: 'index'
  });
});
router.put('/actualizar/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  _producto.productos[id - 1] = {
    id: id,
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail
  };
  const producto = _producto.productos[id - 1];
  res.json({
    producto
  });
});
router.delete('/eliminar/:id', (req, res) => {
  const id = req.params.id;
  const producto = _producto.productos[id - 1];

  _producto.productos.splice(id - 1, 1);

  res.json({
    producto
  });
});
var _default = router;
exports.default = _default;