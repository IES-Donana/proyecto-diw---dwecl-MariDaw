var mostrar = document.getElementById('mostrar');
var cerrar = document.getElementById('cerrar');
var dialogo = document.getElementById('dialogo');

mostrar.addEventListener('click', function() {
  dialogo.showModal();
});

// Form cancel button closes the dialog box
cerrar.addEventListener('click', function() {
  dialogo.close();
});