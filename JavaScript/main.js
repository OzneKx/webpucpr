var storage = window.localStorage;
var data;


$(document).ready(function() {
  data = JSON.parse(storage.getItem('user'));
});
