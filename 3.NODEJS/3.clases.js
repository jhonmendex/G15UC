class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.apellido = apellido;
  }

  toString() {
    return this.nombre + " " + this.apellido + " " + this.edad;
  }
}
//estructuracion de un objeto perro
const perro = {
  nombrePerro: "firulais",
  razaPerro: "mestizo",
  edadPerro: 5,
};
//estructuracion de un objeto persona
const persona = new Persona("jhon", "mendez", 25);
persona.nombre = "felipe";

//destructuring
const { nombre, apellido, edad } = persona;

console.log(nombre);
console.log(nombre, apellido, edad);

const { nombrePerro, razaPerro, edadPerro } = perro;
console.log(nombrePerro, razaPerro, edadPerro);
