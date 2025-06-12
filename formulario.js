function authlogin(event) { 
    // Evita que se envíe el formulario
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    let msg = "";

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (username === "") {
        msg += "El nombre de usuario no puede estar vacío. <br>";
    }
    if (password.trim() === "") {
        msg += "La contraseña no puede estar vacía. <br>";
    } else if (!regex.test(password)) {
        msg += "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial. <br>";
    }

    if (msg.length > 0) {
        document.getElementById("msgError").innerHTML = msg;
        return false;
    }

    if (username === "Ivana" && password === "1vanA%123") {
        sessionStorage.setItem("username", username);
        window.location.href = "Dashboard.html";
    } else {
        document.getElementById("msgError").innerHTML = "Usuario o contraseña incorrectos";
        return false;
    }
}
  function validarFormulario(event) {
    event.preventDefault(); // Prevenir envío del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const privacidad = document.getElementById("privacidad").checked;
    const errorMsg = document.getElementById("msgError");

    let msg = "";

    // Validar campos vacíos
    if (nombre === "") {
      msg += "El nombre no puede estar vacío. <br>";
    }

    if (email === "") {
      msg += "El correo electrónico no puede estar vacío. <br>";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg += "El correo electrónico no tiene un formato válido. <br>";
    }

    if (mensaje === "") {
      msg += "El mensaje no puede estar vacío. <br>";
    }

    if (!privacidad) {
      msg += "Debe aceptar la política de privacidad. <br>";
    }

    // Mostrar errores si hay
    if (msg.length > 0) {
      errorMsg.innerHTML = msg;
      return false;
    }

    // Guardar datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("mensaje", mensaje);

    // Redirigir
    window.location.href = "gracias.html";
}
function validarSuscripcion(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const privacidad = document.getElementById("privacidad").checked;
    const msgDiv = document.getElementById("msgError");

    let msg = "";

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (nombre === "") {
      msg += "El nombre no puede estar vacío.<br>";
    }

    if (email === "") {
      msg += "El email no puede estar vacío.<br>";
    } else if (!emailRegex.test(email)) {
      msg += "El formato del email no es válido.<br>";
    }

    if (!privacidad) {
      msg += "Debe aceptar la política de privacidad.<br>";
    }

    if (msg) {
      msgDiv.innerHTML = msg;
      return;
    }

    // Guardar en localStorage y redirigir
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    window.location.href = "Subscripcion completada.html";
  }
  function authLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    const mantenerSesion = document.getElementById("mantenerSesion").value.trim().toUpperCase();
    const msgError = document.getElementById("msgError");

    let msg = "";

    if (usuario === "") {
      msg += "El campo usuario no puede estar vacío.<br>";
    }

    if (contrasena === "") {
      msg += "La contraseña no puede estar vacía.<br>";
    }

    if (mantenerSesion !== "NO" && mantenerSesion !== "SI") {
      msg += "Debe escribir SI o NO para mantener la sesión iniciada.<br>";
    }

    if (msg) {
      msgError.innerHTML = msg;
      return;
    }

    // Simulación de login exitoso
    if (usuario === "ivana123@gmail.com" && contrasena === "1vanA%") {
      sessionStorage.setItem("usuario", usuario);
      sessionStorage.setItem("mantenerSesion", mantenerSesion);
      window.location.href = "Sesion fake.html";
    } else {
      msgError.innerHTML = "Credenciales incorrectas.";
    }
  }
document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
  });

  document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("passwordRepeat").value;
    const nombreCompleto = document.getElementById("nombreCompleto").value.trim();
    const acepto = document.getElementById("acepto").checked;
    const errorMensaje = document.getElementById("errorMensaje");

    errorMensaje.textContent = "";

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!usuario || !email || !password || !passwordRepeat || !nombreCompleto) {
      errorMensaje.textContent = "Todos los campos son obligatorios.";
      return;
    }

    if (!emailRegex.test(email)) {
      errorMensaje.textContent = "El correo no es válido.";
      return;
    }

    if (password !== passwordRepeat) {
      errorMensaje.textContent = "Las contraseñas no coinciden.";
      return;
    }

    if (!acepto) {
      errorMensaje.textContent = "Debes aceptar los Términos y Condiciones.";
      return;
    }

    // Guardar en localStorage
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
    localStorage.setItem("nombreCompleto", nombreCompleto);
    localStorage.setItem("password", password);


    // Redirigir
    window.location.href = "Pagina de acceso.html";
  });
});
