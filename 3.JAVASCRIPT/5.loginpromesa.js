import User from "./5.usuario.js";

const userFront = new User();

const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  validarCredencial(userFront);
});

async function validarCredencial(user) {
  const consulta = await fetch("users.json");
  const users = await consulta.json();
  console.log(users);
}
