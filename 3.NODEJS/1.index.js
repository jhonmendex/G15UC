//VARIABLE GLOBAL THIS, variable global de js, es el homologo al navegador con la varialbe window

//console.log(globalThis);
//global.console.log("hola mundo node");

/*
uso de modulos commonjs
*/
const { suma, resta } = require("./1.suma.js");

console.log(suma(1, 2));
console.log(resta(1, 2));
