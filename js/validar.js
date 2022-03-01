window.onload=iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debes introducir un nombre")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaApellidos() {
    var elemento = document.getElementById("apellido");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debes introducir tus apellidos")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "Los apellidos deben tener entre 50 y 80 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaEmail() {
    document.getElementById('email').addEventListener('input', function() {
        campo = event.target;
        valido = document.getElementById('emailOK');

        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(campo.value)) {
          valido.innerText = "válido";
        } else {
          valido.innerText = "incorrecto";
        }
    });
}

function validaMessagge() {
    var elemento = document.getElementById("mensaje").value;
    if(elemento == '') {
        alert("El mensaje no puede estar vacío");
        break;
    }else {
        return false;
    }
    return true;
}

function validar(e) {
    borrarError();
    if ( validaNombre() && validaApellidos() && validaEmail() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML =
    elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje){
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for(var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}
