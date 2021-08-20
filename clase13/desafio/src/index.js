import express from 'express';
import path from 'path';
import routerApi from './routes/api.js';
import handlebars from 'express-handlebars';
import { productos } from './modules/data.js';
import * as http from 'http';
import { initWsServer } from './services/websocket.js';

/** Configuración para EXPRESS */
const app = express();
const puerto = 8080;

//Iniciando la carpeta public
const publicPath = path.resolve(__dirname, './../public');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Configurando Handlebars */
//Estableciendo los path de los views para Handlebars
const layoutDirPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.hbs');
const partialDirPath = path.resolve(__dirname, '../views/partials');

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

const myServer = http.Server(app);

initWsServer(myServer);

myServer.listen(puerto, () => console.log('Server up en puerto', puerto));

app.use('/api', routerApi);

app.get('/', (req, res) => {
  const data = { mostrarForm: true, mostrarList: true, productos };
  res.render('main', data);
});

app.get('/productos/vista', (req, res) => {
  const data = { mostrarVista: true, productos };
  res.render('main', data);
});
