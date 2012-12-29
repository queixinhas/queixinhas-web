define([
  'jquery',
  'underscore',
  'backbone',
  'models/report',
],
function($, _, Backbone, ReportModel) {
  return new Backbone.Collection.extend({
    model: ReportModel,

    url: '',

    parse: function(response) {
      // TODO: tbi
      return response;
    },

    getReportsByLocation: function(lat, lgt, n) {
      // TODO: tbi

    },
  });
});
