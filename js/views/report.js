/*
  view for single report information

  TODO:
  receives model in options
  renders its view with the values
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/report',
  'text!templates/report.html'
],
function($, _, Backbone, Mustache, ReportModel, template) {
  return Backbone.View.extend({
    initialize: function(options) {
      this.model = options.model;
    },

    context: function() {
      return {
        title: this.model.get('title'),
        description: this.model.get('description'),
        address: this.model.get('address'),
      };
    },

    render: function() {
      var c = this.context();
      var t = Mustache.render(template, c);
      this.$el.html(t);

      return this;
    },
  });
});
