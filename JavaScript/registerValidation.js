var data = [];
var storage = window.localStorage;
var globalStatusValidation = false;


$(document).ready(function () {
  clickEvents();
});


function clickEvent() {
  $("#register").click(function() {
    var name = individualValidation("#name");
    var email = individualValidation("#email");
    var password = individualValidation("#password");
    var confirm = individualValidation("#confirm");

    if (globalStatusValidation) {
      var aux = []

      aux.push(name);
      aux.push(email);
      aux.push(password);
      aux.push(confirm);

      data.push(aux);
      storage.setItem("user", JSON.stringify(data));

      window.localStorage.href = "../HTML/login.html";
    } else {
      alert("Dados inválidos! Tente novamente!");
    }
  })
}


function individualValidation(idField) {
  var value = $(idField).val();

  if (value == "") {
    globalStatusValidation = true;
    alert("Preencher todos os campos obrigatórios!");
  }
}
