const dialog = document.querySelector('#dialogo-1');
dialogPolyfill.registerDialog(dialog);
document.querySelector('#show-modal').onclick = function() {
  dialog.showModal();
};
document.querySelector('#close').onclick = function() {
  dialog.close();
};
