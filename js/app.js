define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'views/index',
  'views/sidepanel',
  'routers/router',
],
function($, _, Backbone, Mustache, IndexView, SidepanelView, Router) {
  var initialize = function() {
    // setup our initial application view
    initializeAppView();

    // setup the routes for our application
    Router.initialize();
  }

  var initializeAppView = function() {
    // renders the index view and correctly positions it in the DOM
    var index = new IndexView().render();
    $('.container').html(index.$el);

    // renders the sidepanel view and correctly positions it in the DOM
    var sidepanel = new SidepanelView().render();
    $('.header').after(sidepanel.$el);
  };

  return {
    initialize: initialize
  };
});
