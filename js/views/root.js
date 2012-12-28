/*
  view for root handler ("/")
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'gmaps',
],
function($, _, Backbone, Mustache, gmaps) {
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
      // TEST: adding a marker on the main map (australia)
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-25.363882, 131.044922),
        map: gmaps.map,
        title: 'Hello World!'
      });

      $('.sidepanel').toggleClass('show').toggleClass('hide');
      // var t = Mustache.render(template, this.context());
      // this.$el.html(t);

      return this;
    },
  });
});


