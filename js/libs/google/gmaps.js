define('gmaps', [
  'async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCPrvi7nzXynWOclZ8fgVPlQr_EHK39yI0&sensor=false&libraries=places',
  'jquery',
  'underscore',
  'backbone',
  'text!templates/index.html',
],
function() {
  // return the gmaps namespace for brevity
  return window.google.maps;
});
