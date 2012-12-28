define([
  'underscore',
  'backbone'
],
function(_, Backbone) {
  return Backbone.Model.extend({
    defaults: {
      title: "default title",
      description: "default description",
      latitude: "0.0",
      longitude: "0.0",
      address: "default address",
      date: "default date"
    },

    // url: function() {
    //
    // },

    // parse : function(res) {
    //   return res.data;
    // },

    initialize: function(options) {
      return this;
    }
  });
});
