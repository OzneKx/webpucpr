$(document).ready(function () {
  clickEvent();
});


function clickEvent() {
  $("#addCart").click(function() {
    $("#content").append('<div class="cart"><div class="product-name"><img src="../assets/images/logo.jpg" /><p><b>NOME DO PRODUTO</b></p><div class="quantidade"><strong>Quantidade</strong><div class="cart-items"><i class="fas fa-plus"></i><input type="text" placeholder="2"><i class="fas fa-minus"></i></div></div></div>');
  });
}



