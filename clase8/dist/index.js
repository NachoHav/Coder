'use strict';

var _express = _interopRequireDefault(require('express'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const app = (0, _express.default)();
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Escuchando desde puerto: ${port}`);
});
server.on('error', (error) =>
  console.log(`Error del servidor ${console.log(error)}`)
);
const productos = [];
