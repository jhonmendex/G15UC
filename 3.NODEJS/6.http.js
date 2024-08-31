import http from "node:http";

//recurso
const libros = [
  { id: 1, titulo: "El señor de los anillos" },
  { id: 2, titulo: "Juego de tronos" },
  { id: 3, titulo: "El hobbit" },
];

//crear un servidor
const servidor = http.createServer((req, res) => {
  if (req.method == "GET") {
    console.log(req.method);
    console.log(req.url); //path
    console.log(req.headers);
    console.log(req.body);

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(libros));
  } else if (req.method == "POST") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ mensaje: "Libro creado" }));
  }
});
//puerto de conexion
const puerto = 3000;
//escuchar el servidor
servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
