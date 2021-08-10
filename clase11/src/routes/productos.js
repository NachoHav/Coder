/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import express from 'express';
// eslint-disable-next-line no-unused-vars
import { productos, Producto } from '../public/producto';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('main');
});

router.get('/listar', (req, res) => {
  if (productos.length == []) {
    return res.status(404).json({
      Error: 'No hay productos cargados',
    });
  }
  // res.json(productos);
  res.render('listaProductos', { productos });
});

router.get('/listar/:id', (req, res) => {
  const id = req.params.id;
  if (id <= 0 || id > productos.length) {
    return res.status(404).json({
      Error: 'El producto no existe',
    });
  }
  const producto = productos.find((idProd) => idProd.id == id);

  res.json(producto);
});

router.get('/cargar', (req, res) => {
  res.render('./cargarProductos', { layout: 'index' });
});

router.post('/guardar', (req, res) => {
  const body = req.body;

  if (body == {}) {
    return res.status(404).json({
      Error: 'Producto vacio',
    });
  }

  productos.push({
    id: productos.length + 1,
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail,
  });

  // res.render('main', { productos });
  res.render('./cargarProductos', { layout: 'index' });
});

router.put('/actualizar/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  productos[id - 1] = {
    id: id,
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail,
  };
  const producto = productos[id - 1];
  res.json({ producto });
});

router.delete('/eliminar/:id', (req, res) => {
  const id = req.params.id;

  const producto = productos[id - 1];
  productos.splice(id - 1, 1);

  res.json({ producto });
});

export default router;
