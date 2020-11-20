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
      var aux = []

      aux.push(name);
      aux.push(email);

      if (password == confirm) {
        aux.push(password);
        aux.push(confirm);

        data.push(aux);

        storage.setItem("data", JSON.stringify(data));

        $("input").val("");
        window.location.href = "../HTML/login.html";
      } else {
        alert("Preencha os campos obigatórios! Tente novamente!");
        $("#password").val("");
        $("#confirm").val("");
      }
    }
  });
}

