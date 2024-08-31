//archivos sincronos
import { readFileSync } from "node:fs";

console.log("operacion1");
const archivo1 = readFileSync("archivos/archivo1.txt", "utf-8");
console.log("archivo1:", archivo1);
console.log("operacion2");
const archivo2 = readFileSync("archivos/archivo2.txt", "utf-8");
console.log("archivo2:", archivo2);
console.log("operacion3");
const archivo3 = readFileSync("archivos/archivos3.txt", "utf-8");
console.log(archivo3);
