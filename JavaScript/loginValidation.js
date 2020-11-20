var data = [];
var storage = window.localStorage;

$(document).ready(function () {
  clickEvent();
});


function clickEvent() {
  $("#enter").click(function() {
    var email = $("#email").val();
    var password = $("#password").val();

    user = JSON.parse(localStorage.getItem('data'));

    if (email == "" || password == "") {
      alert("Preencha os campos obigatórios! Tente novamente!");
    } else {
      for (var c = 0; c < user.length; c++) {
        if (user[c][1] == email && user[c][2] == password) {
          cleanInputFields();
          window.location.href = "../HTML/main.html";
        } else {
          alert("Usuário não encontrado! Cadastre-se.");
        }
      }
    }
  });
}


function cleanInputFields() {
  $("input").val("");
}

