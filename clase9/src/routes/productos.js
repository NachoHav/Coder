import express from 'express';
import { productos, Producto } from '../producto.js';

const router = express.Router();

router.get('/listar', (req, res) => {
  if (productos.length == []) {
    return res.status(404).json({
      Error: 'No hay productos cargados',
    });
  }
  res.json(productos);
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

  res.json(productos);
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
