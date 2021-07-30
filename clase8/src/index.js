/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
import express from 'express';
import { productos, Producto } from './producto';

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Escuchando desde puerto: ${port}`);
});

server.on('error', (error) =>
  console.log(`Error del servidor ${console.log(error)}`)
);

app.get('/api/productos/listar', (req, res) => {
  if (productos.length == []) {
    return res.status(404).json({
      Error: 'No hay productos cargados',
    });
  }
  res.json(productos);
});

app.get('/api/productos/listar/:id', (req, res) => {
  const id = req.params.id;
  if (id <= 0 || id > productos.length) {
    return res.status(404).json({
      Error: 'El producto no existe',
    });
  }
  const producto = productos.find((idProd) => idProd.id == id);

  res.json(producto);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/productos/guardar', (req, res) => {
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
