function validacion(){
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var email = document.getElementById("email");
  var mensaje = document.getElementById("mensaje");

	if (nombre.value === "" || nombre.value === null) {
		nombre.setCustomValidity("Ingrese su nombre");
	} else {
		nombre.setCustomValidity(""); 
	}

	if (apellido.value == "" || apellido.value === null) {
		apellido.setCustomValidity("Ingrese su apellido");
	} else {
		apellido.setCustomValidity(""); 
	}

  if (email.value == "" || email.value === null) {
		email.setCustomValidity("Ingrese su email");
	} else {
		email.setCustomValidity(""); 
	}

  if (mensaje.value == "" || mensaje.value === null) {
		mensaje.setCustomValidity("Ingrese su mensaje");
	} else {
		mensaje.setCustomValidity(""); 
	}

}
