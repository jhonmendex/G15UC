//callbacks
/*
function suma(a, b, mostrarResultado) {
  let resultado = a + b;
  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  console.log("El resultado es: " + resultado);
}

suma(2, 3, mostrarResultado);
setTimeout(mostrarResultado, 3000);
*/
/*promesas: forma de asincronia con estados:
pendiente: la operacion no ha terminado
resuelta: la operacion se ha completado correctamente
rechazada: la operacion no se pudo completar correctamente
*/
/*
function resta(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject("No se pueden realizar operaciones con valores no numericos");
    } else {
      let resultado = a - b;
      resolve(resultado);
    }
  });
}

//usar una promesa, then o trycatch async await
const promesa = resta("a", "b");
promesa
  .then((resultado) => {
    console.log("El resultado es: " + resultado);
  })
  .catch((error) => {
    console.log("no se resolvio la promesa", error);
  });
console.log("1");
console.log("2");
console.log("3");

async function promesa2() {
  try {
    const resultado = await resta(1, 2);
    console.log("El resultado es: " + resultado);
  } catch (error) {
    console.log("no se resolvio la promesa", error);
  }
}

promesa2();

const promesa3 = async () => {
  await resta(1, 2);
};

promesa3();
*/

//api fetch: resuelve promesas basada en http
const consultarAleatorio = document.getElementById("consultar-aleatorio");
const imagenPerro = document.getElementById("imagen-perro");

consultarAleatorio.addEventListener("click", consultarPerro);

function consultarPerro() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((datos) => {
      console.log(datos["message"]);
      imagenPerro.src = datos["message"];
    })
    .catch((error) => {
      console.log(error);
    });
}

const consultarRaza = document.getElementById("consultar-raza");
consultarRaza.addEventListener("keyup", (evento) => {
  if (evento.key === "Enter") {
    consulta(evento.target.value);
  }
});

//async await
const consulta = async (raza) => {
  try {
    const consulta = await fetch(
      `https://dog.ceo/api/breed/${raza}/images/random`
    );
    const datos = await consulta.json();
    imagenPerro.src = datos["message"];
  } catch (error) {
    console.log("errro en la consulta:", error);
  }
};

const consultarUsuarios = async () => {
  const consulta = await fetch("users.json");
  const datos = await consulta.json();
  console.log(datos);
};

consultarUsuarios();
