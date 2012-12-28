/*
  sets up the initial view for our application
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'gmaps',
  'text!templates/index.html',
],
function($, _, Backbone, Mustache, gmaps, template) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'indexContainer',

    initialize: function(options) {
    },

    context: function() {
      return {
      };
    },

    render: function() {
      var t = Mustache.render(template, this.context());
      this.$el.html(t);
      gmaps.map = this.renderGoogleMaps(this.$('#mapCanvas').get(0));

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
