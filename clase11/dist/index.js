"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _productos = _interopRequireDefault(require("../src/routes/productos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable import/no-unresolved */

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

const viewsPath = _path.default.resolve(__dirname, '../views');

app.set('views', viewsPath);
app.set('view engine', 'pug');
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/api/productos', _productos.default);