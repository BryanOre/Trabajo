function validarFormulario() {
  var nombres = document.getElementById("nombres").value;
  var apellidos = document.getElementById("apellidos").value;
  var correo = document.getElementById("correo").value;
  if (nombres.length == 0) {
    alert("El campo Nombres es obligatorio.");
    return false;
  }

  if (apellidos.length == 0) {
    alert("El campo Apellidos es obligatorio.");
    return false;
  }

  if (correo.length == 0) {
    alert("El campo Correo electrónico es obligatorio.");
    return false;
  }

  if (clave.length == 0) {
    alert("El campo Contraseña es obligatorio.");
    return false;
  }
  return true;
}
document.getElementById("formulario").addEventListener("submit", validarFormulario);
