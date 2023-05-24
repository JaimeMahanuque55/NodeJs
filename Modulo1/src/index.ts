// let nome: string = "Jaime";
// let idade: number = 15;

// console.log(`Meu nome e ${nome} e tenho ${idade} anos`);

///////// Understanding import/export in CommonJS ////////////
/*
const Maths = require('./Maths');

let n1: number = 10;
let n2: number = 2;



console.log(`SOMA: ${Maths.somar(n1, n2)}`);
console.log(`SUBTRACAO: ${Maths.subtrair(n1, n2)}`);
console.log(`MULTIPLICACAO: ${Maths.multiplicar(n1, n2)}`);
*/

/////////////// Undertanding import/export in ES6 /////////////////////////
// import * as Maths from './Maths';
// import { somar, subtrair, multiplicar } from "./Maths";
/*
import Maths from './Maths';

let n1: number = 10;
let n2: number = 2;



console.log(`SOMA: ${Maths.somar(n1, n2)}`);
console.log(`SUBTRACAO: ${Maths.subtrair(n1, n2)}`);
console.log(`MULTIPLICACAO: ${Maths.multiplicar(n1, n2)}`);
*/

////////////// Importing third-party files ////////////////
/*
import validator from 'validator';

let ip = '127.255.0.1'

console.log(validator.isEmail('jamesizz55@gmail.com'));
console.log(validator.isIP(ip));
*/

/////////////////// Getting to know Nodemon /////////////////

import validator from "validator";

let name: string = "jaime";

if (validator.isLowercase(name)) {
    console.log(`A string ${name} e toda minuscula.`)
} else {
    console.log(`A string ${name} Nao e toda minuscula`)
}
