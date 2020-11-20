var data = [];
var storage = window.localStorage;


$(document).ready(function () {
  clickEvents();
});


function clickEvent() {
  $("#register").click(function() {
    var name = individualValidation("#name");
    var email = individualValidation("#email");
    var password = individualValidation("#password");
    var confirm = individualValidation("#confirm");

    if (name == "" || email == "" || password == "" || confirm == "") {
      alert("Preencha os campos obrigatórios! Tente novamente!");
      cleanInputFields();
    } else {
      var aux = []

      aux.push(name);
      aux.push(email);

      if (password == confirm) {
        aux.push(password);
        aux.push(confirm);
      } else {
        alert("As senhas devem coincidir!");
        cleanInputFields();
      }

      data.push(aux);

      storage.setItem("user", JSON.stringify(data));

      window.location.href = "../HTML/login.html";
    }
  });
}


function individualValidation(idField) {
  var value = $(idField).val();

  if (value == "") {
    globalStatusValidation = true;
    alert("Preencher todos os campos obrigatórios!");
  }
}

function cleanInputFields() {
  $("input").val("");
}

