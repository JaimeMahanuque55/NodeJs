"use strict";
// let nome: string = "Jaime";
// let idade: number = 15;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const validator_1 = __importDefault(require("validator"));
let ip = '127.255.0.1';
console.log(validator_1.default.isEmail('jamesgrizzly55@gmail.com'));
console.log(validator_1.default.isIP(ip));
