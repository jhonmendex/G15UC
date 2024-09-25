import User from "./5.usuario.js";

const userFront = new User();

const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  userFront.setEmail(email);
  userFront.setPassword(password);

  let respuesta = await validarCredencial(userFront);
  debugger;
  if (respuesta) {
    showAlert("success", "Inicio existoso");
  } else {
    showAlert("danger", "Usuario o contraseña invalidos");
  }
});

async function validarCredencial(userFront) {
  const consulta = await fetch("users.json");
  const usuarios = await consulta.json();

  if (
    usuarios.find(
      (usuario) =>
        usuario.email == userFront.getEmail() &&
        usuario.password == userFront.getPassword()
    )
  ) {
    return true;
  } else return false;
}

function showAlert(typeAlert, message) {
  const alert = document.getElementById("alert");
  alert.style.display = "block";

  alert.innerHTML = ` 
  <div class="alert alert-${typeAlert}" role="alert">
    ${message}
  </div>
  `;

  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}
