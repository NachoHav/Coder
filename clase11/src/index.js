/* eslint-disable linebreak-style */
/* eslint-disable max-len */

/* eslint-disable import/no-unresolved */

/* eslint-disable import/extensions */

/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-path-concat */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import express from 'express';
import path from 'path';
import Productos from './routes/productos';

const port = 8080;
const app = express();
const viewsPath = path.resolve(__dirname, '../views');

// Se indica directorio de almacenamiento de plantillas
app.set('views', viewsPath);

// Setear el uso del engine de pug
app.set('view engine', 'pug');

// Indica que el servidor esta levantado y corriendo en puerto especificado
const server = app.listen(port, () => {
  console.log(`Server running in port:  ${port}`);
});

// Indicar un error que de el servidor.
server.on('error', (err) => {
  console.error(`There was an error: ${err}`);
});

app.set('json spaces', 2); // Hace una indentacion de la respuesta JSON en el navegador

app.use(express.json()); // Indica que el body viene como JSON
app.use(express.urlencoded({ extended: true })); // Indica que el body puede tener un informacion como no string

// Router de la API Productos
app.use('/api/productos', Productos);
