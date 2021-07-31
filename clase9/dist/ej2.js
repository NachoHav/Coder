"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const server = app.listen(8080, () => {
  console.log('serverup8080');
});

const publicPath = _path.default.resolve(__dirname, '../public');

console.log(publicPath);
app.use(_express.default.static(publicPath));