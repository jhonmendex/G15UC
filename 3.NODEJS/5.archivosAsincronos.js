//forma asincrona de leer archivos
import { read, readFile } from "node:fs";

console.log("operacion 1");

readFile("archivos/archivo1.txt", "UTF-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("operacion 2");

readFile("archivos/archivo2.txt", "UTF-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("operacion 3");

readFile("archivos/archivos3.txt", "UTF-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
