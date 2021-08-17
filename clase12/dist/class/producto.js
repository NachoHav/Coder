"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Producto {
  constructor(title, price, thumbnail, id) {
    this.title = title;
    this.price = parseFloat(price);
    this.thumbnail = thumbnail;
    this.id = id;
  }

}

exports.default = Producto;