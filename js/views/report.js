/*
  view for single report information
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'views/map',
  'views/sidepanel',
  'models/report',
  'text!templates/report_small.html',
  'text!templates/report_full.html',
],
function($, _, Backbone, Mustache, MapView, Sidepanel, ReportModel, templateSmall, templateFull) {
  return Backbone.View.extend({
    tagName: 'div',
    className: 'report',

    initialize: function(options) {
      this.model = options.model;
      this.type = options.type;
    },

    context: function() {
      return {
        title: this.model.get('title'),
        date: this.model.get('date'),
        address: this.model.get('address'),
        description: this.model.get('description'),
      };
    },

    render: function() {
      var template;
      if(this.type == 'full') {
        this.$el.addClass('reportFull');
        template = templateFull;
      }
      else {
        this.$el.addClass('reportSmall');
        template = templateSmall;
      }

      this.$el.html(Mustache.render(template, this.context()));

      return this;
    },
  });
});
