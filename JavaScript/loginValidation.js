var data = [];
var storage = window.localStorage;
var globalFieldStatusValidation = false;

$(document).ready(function () {
  clickEvent();
});

function clickEvent() {
  $("#enter").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    var aux = [];

    if (email == "" || password == "") {
      alert("Dados Inválidos! Tente novamente!");
      cleanInputFields();
    } else {
      aux.push(email);
      aux.push(password);

      data.push(aux);

      console.log(data);

      storage.setItem("user", JSON.stringify(data));

      window.location.href = "../HTML/main.html";
    }
  });
}

function cleanInputFields() {
  $("input").val("");
}
