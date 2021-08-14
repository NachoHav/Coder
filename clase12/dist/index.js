"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _path = _interopRequireDefault(require("path"));

var _productos = _interopRequireDefault(require("../src/routes/productos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable import/extensions */

/* eslint-disable import/no-useless-path-segments */

/* eslint-disable no-path-concat */

/* eslint-disable comma-dangle */

/* eslint-disable prefer-template */

/* eslint-disable no-unused-vars */

/* eslint-disable no-multiple-empty-lines */

/* eslint-disable linebreak-style */
const app = (0, _express.default)();
const server = app.listen(8080, () => {
  console.log('Server up, port 8080');
});

const layoutDirPath = _path.default.resolve(__dirname, '../views/layouts');

const defaultLayerPth = _path.default.resolve(__dirname, '../views/layouts/index.hbs');

const partialDirPath = _path.default.resolve(__dirname, '../views/partials');

const publicPath = _path.default.resolve(__dirname, './public');

app.engine('hbs', (0, _expressHandlebars.default)({
  extname: 'hbs',
  defaultLayout: defaultLayerPth,
  layoutsDir: layoutDirPath,
  partialsDir: partialDirPath
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(_express.default.static(publicPath));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/api/productos', _productos.default); // app.get('/', (req, res) => {
//   res.render('main', { layout: 'index' });
// });