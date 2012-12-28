/*
  view for root handler ("/")
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'gmaps',
  // 'text!templates/.html',
],
function($, _, Backbone, Mustache, gmaps) {//, template) {
  return Backbone.View.extend({
    initialize: function(options) {
      // TODO:
      // detect location
      // retrieve X nearest+popular reports
      // put markers on the map
      // render left sidebar with report list
    },

    context: function() {
      return {
      };
    },

    render: function() {
      var myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
      var marker = new google.maps.Marker();
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: gmaps.map,
        title: 'Hello World!'
      });

      // var t = Mustache.render(template, this.context());
      // this.$el.html(t);

      return this;
    },
  });
});


