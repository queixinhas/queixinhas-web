define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'views/map',
  'views/sidepanel',
  'routers/router',
],
function($, _, Backbone, Mustache, MapView, SidepanelView, Router) {
  var initialize = function() {
    // setup our initial application view
    initializeAppView();

    // setup the routes for our application
    Router.initialize();
  }

  var initializeAppView = function() {
    // renders the map view and correctly positions it in the DOM
    var map = new MapView().render();
    $('.container').html(map.$el);

    // renders the sidepanel view and correctly positions it in the DOM
    var sidepanel = new SidepanelView().render();
    $('.header').after(sidepanel.$el);
  };

  return {
    initialize: initialize
  };
});
