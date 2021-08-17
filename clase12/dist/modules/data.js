"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastID = exports.dbIDs = exports.productos = void 0;
const productos = []; //Array de productos

exports.productos = productos;
const dbIDs = []; //Array de los IDs de los productos

exports.dbIDs = dbIDs;
const lastID = {
  lastID: 0
}; //Ultimo ID de producto utilizado

exports.lastID = lastID;