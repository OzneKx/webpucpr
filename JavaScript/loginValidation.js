var data = [];
var storage = window.localStorage;

$(document).ready(function () {
  clickEvent();
});


function clickEvent() {
  var email = $("#email").val();
  var password = $("#password").val();

  $("#register").click(function() {
    for (var c = 0; c < localStorage.length; c++) {
      data = JSON.parse(localStorage.getItem(c + 1));
      if (data[2] == email && data[3] == password) {
        storage.href = "../HTML/main.html";
      } else {
        alert("Preencha os campos necessários! Tente novamente!");
        cleanInputFields();
      }
    }
  });
}


function cleanInputFields() {
  $("input").val("");
}
