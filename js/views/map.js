/*
  handles all interaction with the map
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'gmaps',
],
function($, _, Backbone, gmaps) {
  return Backbone.View.extend({
    tagName: 'div',
    id: 'mapCanvas',

    initialize: function(options) {
    },

    context: function() {
      return {
      };
    },

    render: function() {
      // render the map and keep a reference to it
      this.gmapObj = this.renderGoogleMaps(this.el);

      return this;
    },

    renderGoogleMaps: function(mapContainer) {
      var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(38.7511, -9.133),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
      };

      return new google.maps.Map(mapContainer, mapOptions);
    },
  });
});
