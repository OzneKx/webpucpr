var mapa;
var data;
var storage = window.localStorage;


$(document).ready(function() {
  data = JSON.parse(storage.getItem('user'));
  initMap();
});


function initMap() {

  var configuracoes = {
    center: {lat: 11.551536855884436, lng: 92.24415040434234},
    zoom: 15
  }

  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: 11.551536855884436, lng: 92.24415040434234},
    title: "Ilha Sentilena do Norte",
    map: mapa
  });
}
