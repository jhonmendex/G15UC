import { EventEmitter } from "node:events";

const evento = new EventEmitter();

//escribir un evento que salude

evento.on("saludar", (nombre) => {
  console.log(`Hola ${nombre}`);
});

//evventos para errores
evento.on("error", (err) => {
  console.log(err);
});

//emitir un evento
evento.emit("saludar", "Jhon Mendez");
evento.emit("saludar", "javier");
evento.emit("error", new Error("esto es un error"));
