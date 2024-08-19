const user = {
  email: "jhon@gmail.com",
  password: "123",
};

const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === user.email && password === user.password) {
    showAlert("success", "Inicio existoso");
  } else {
    showAlert("danger", "Usuario o contraseña invalidos");
  }
});

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
