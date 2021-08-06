/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
import express from 'express';
import productos from './routes/productos.js';
import path from 'path';

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Escuchando desde puerto: ${port}`);
});

server.on('error', (error) =>
  console.log(`Error del servidor ${console.log(error)}`)
);

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productos);
