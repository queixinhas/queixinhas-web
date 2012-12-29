/*
  handles all interaction with the map
  ATTN: this is a "singleton"
  ATTN: this is not a backbone view
*/
define([
  'jquery',
  'mustache',
  'gmaps',
],
function($, Mustache, gmaps) {
  var MapView = (function() {
    function MapView() {
    }

    MapView.prototype.initialize = function() {
      this.$el = $('<div id="mapCanvas"></div>')
      this.el = this.$el.get(0);
      // keep a reference to the gmaps object
      this.gmapObj = this.renderGoogleMaps(this.el);

      return this;
    }

    MapView.prototype.renderGoogleMaps = function(mapContainer) {
      var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(38.7511, -9.133),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
      };

      return new google.maps.Map(mapContainer, mapOptions);
    };

    return MapView;
  })();

  return new MapView;
});
