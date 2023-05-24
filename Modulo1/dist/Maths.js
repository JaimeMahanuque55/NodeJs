"use strict";
//////////// Understanding import/export in CommonJS ////
/*

function somar(x: number, y: number): number {
  return x + y;
}

function subtrair(x: number, y: number): number {
  return x - y;
}

function multiplicar(x: number, y: number): number {
  return x * y;
}

module.exports.somar = somar;
module.exports.multiplicar = multiplicar;
module.exports.subtrair = subtrair;
*/
Object.defineProperty(exports, "__esModule", { value: true });
/////////////// Undertanding import/export in ES6 /////////////////////////
function somar(x, y) {
    return x + y;
}
function subtrair(x, y) {
    return x - y;
}
function multiplicar(x, y) {
    return x * y;
}
exports.default = {
    somar,
    subtrair,
    multiplicar
};
