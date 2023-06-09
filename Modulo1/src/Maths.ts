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

/////////////// Undertanding import/export in ES6 /////////////////////////

function somar(x: number, y: number): number {
  return x + y;
}

function subtrair(x: number, y: number): number {
  return x - y;
}

function multiplicar(x: number, y: number): number {
  return x * y;
}

export default {
  somar,
  subtrair,
  multiplicar
};
