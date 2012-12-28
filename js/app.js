define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'routers/router',
  'views/map',
  'views/sidepanel',
],
function($, _, Backbone, Mustache, Router, MapView, SidepanelView) {
  var initialize = function() {
    // setup our initial application view
    initializeAppView();

    // setup the routes for our application
    Router.initialize();
  }

  var initializeAppView = function() {
    // renders the map view and correctly positions it in the DOM
    var map = MapView.initialize()
    $('.container').html(map.$el);

    // renders the sidepanel view and correctly positions it in the DOM
    var sidepanel = new SidepanelView().render();
    $('.header').after(sidepanel.$el);
  };

  return {
    initialize: initialize
  };
});
