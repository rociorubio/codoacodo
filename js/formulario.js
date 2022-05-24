function validacion(){
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var email = document.getElementById("email");
  var mensaje = document.getElementById("mensaje");
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;



	if (nombre.value === "" || nombre.value === null) {
		nombre.setCustomValidity("Ingrese su nombre");
	} else {
		nombre.setCustomValidity(""); 
	}

	if (apellido.value === "" || apellido.value === null) {
		apellido.setCustomValidity("Ingrese su apellido");
	} else {
		apellido.setCustomValidity(""); 
	}

  if (email.value === "" || email.value === null || !emailRegex.test(email.value)) {
		email.setCustomValidity("Ingrese un email válido");
	} else {
		email.setCustomValidity(""); 
	}

  if (mensaje.value === "" || mensaje.value === null) {
		mensaje.setCustomValidity("Ingrese su mensaje");
	} else {
		mensaje.setCustomValidity(""); 
	}

}
