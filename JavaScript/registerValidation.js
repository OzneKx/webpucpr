var data = [];
var storage = window.localStorage;


$(document).ready(function () {
  clickEvent();
});


function clickEvent() {
  $("#register").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirm = $("#confirm").val();

    if (name == "" || email == "" || password == "" || confirm == "") {
      alert("Preencha os campos obigatórios! Tente novamente!");
    } else {
      if (password == confirm) {
        var aux = []

        aux.push(name);
        aux.push(email);
        aux.push(password);
        aux.push(confirm);

        data.push(aux);

        if (data != null || data.length == 0) {
          storage.setItem("data", JSON.stringify(data));
        } else {
          for (c = 0; c < data.length; c++) {
            storage.setItem("data", JSON.stringify(data));
          }
        }
      } else {
        alert("Senhas devem coincidir! Tente novamente!");
        $("#password").val("");
        $("#confirm").val("");
      }

      $("input").val("");
      window.location.href = "../HTML/login.html";
    }
  });
}
