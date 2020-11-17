var products = [];

$(document).ready(function () {
  clickEvent();
});

function showUserData() {
  for (var c = 0; c < products.length; c++) {
    $("#content").append('<div class="cart">' + c + '</div>');
  }
}
