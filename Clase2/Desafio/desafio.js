"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
function operacion(n1, n2, op) {
    return new Promise(function (resolve, reject) {
        Promise.resolve().then(function () { return __importStar(require('./funciones.js')); }).then(function (modulo) {
            if (op == 'suma')
                resolve(modulo.suma(n1, n2));
            else
                resolve(modulo.resta(n1, n2));
        });
    });
}
;
var operaciones = function () {
    operacion(10, 20, 'suma')
        .then(function (resultado) {
            console.log(resultado);
        })
    operacion(20, 10, 'resta')
        .then(function (resultado) {
            console.log(resultado);
        })
    .catch((error) => console.log(error));
};
operaciones();
