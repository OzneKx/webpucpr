var data = [];
var storage = window.localStorage;
var globalFieldStatusValidation = false;

$(document).ready(function () {
  clickEvent();
});

function clickEvent() {
  $('#enter').click(function () {
    var email = $('#email').val();
    var password = $('#password').val();

    var aux = [];

    if (globalFieldStatusValidation == true) {
      aux.push(email);
      aux.push(password);

      data.push(aux);

      storage.setItem('user', JSON.stringify(data));

      storage.href = '../HTML/main.html';
    } else {
      alert("Dados Inválidos! Tente novamente!");
      cleanInputFields();
    }
  });
}

function cleanPasswordFields() {
  $("input").val("");
}
