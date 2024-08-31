import { readFile } from "node:fs/promises";

async function leerArchivo() {
  const archivo1 = await readFile("archivos/archivo1.txt", "utf-8");
  console.log(archivo1);
}

console.log("operacion 1");
leerArchivo();
console.log("operacion 2");
//funcion autoinvocable
(async () => {
  const archivo2 = await readFile("archivos/archivo2.txt", "utf-8");
  console.log(archivo2);
})();
console.log("operacion 3");
