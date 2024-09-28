//donde quiero renderizar un elemento?
const div = document.getElementById("saludo");

//què quiero renderizar?
const saludo = document.createElement("h1");
saludo.textContent = "Hola Mundo";
saludo.style.color = "red";

const boton = document.createElement("button");
boton.textContent = "Click aqui";

//renderizar
div.appendChild(saludo);
div.appendChild(boton);

//eventos, comportamiento
boton.addEventListener("click", function () {
  alert("Hola");
});
