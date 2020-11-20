var data = [];
var storage = window.localStorage;

$(document).ready(function () {
  clickEvent();
});

function clickEvent() {
  $("#enter").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email == "" || password == "") {
      alert("Preencha os campos obigatórios! Tente novamente!");
      cleanInputFields();
    } else {
      aux.push(email);
      aux.push(password);

      data.push(aux);

      sdata = JSON.parse(storage.getItem("user"));

      window.location.href = "../HTML/main.html";
    }
  });
}

