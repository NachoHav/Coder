/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-path-concat */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import productos from '../src/routes/productos.js';
import * as http from 'http';
import io from 'socket.io';

const app = express();

const myServer = http.Server(app);

myServer.listen(8080, () => {
  console.log('Server up, port 8080');
});

const layoutDirPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.hbs');
const partialDirPath = path.resolve(__dirname, '../views/partials');
const publicPath = path.resolve(__dirname, './public');

app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    layoutsDir: layoutDirPath,
    partialsDir: partialDirPath,
  })
);

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/productos', productos);

const myWSServer = io(myServer);

myWSServer.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');
});

// app.get('/', (req, res) => {
//   res.render('main', { layout: 'index' });
// });
