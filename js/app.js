define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'views/index',
  'routers/router',
],
function($, _, Backbone, Mustache, IndexView, Router) {
  var initialize = function() {
    // setup our initial application view
    initializeAppView();

    // setup the routes for our application
    Router.initialize();
  }

  var initializeAppView = function() {
    var v = new IndexView().render();
    $('.container').html(v.$el);
  };

  return {
    initialize: initialize
  };
});
