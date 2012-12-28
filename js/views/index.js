/*
  sets up the initial view for our application
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'views/map',
],
function($, _, Backbone, MapView) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'indexContainer',

    initialize: function(options) {
      this.map = new MapView();
    },

    context: function() {
      return {
      };
    },

    render: function() {
      this.$el.html(this.map.render().el);

      return this;
    },
  });
});
