/*
  handles all interaction with the sidepanel
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'text!templates/sidepanel.html',
],
function($, _, Backbone, Mustache, template) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'sidepanel hide',

    initialize: function(options) {
    },

    context: function() {
      return {
      };
    },

    render: function() {
      this.$el.html(Mustache.render(template, this.context()));

      return this;
    },
  });
});
