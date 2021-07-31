"use strict";

var _express = _interopRequireDefault(require("express"));

var _mascotas = _interopRequireDefault(require("../routers/mascotas.js"));

var _personas = _interopRequireDefault(require("../routers/personas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.listen(8080, () => {
  console.log('Server up - Port: 8080');
});
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/api/mascotas', _mascotas.default);
app.use('/api/personas', _personas.default);