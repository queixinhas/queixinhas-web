define([
  'jquery',
  'underscore',
  'backbone',
  'models/report',
  'views/report',
  'views/root',
],
function($, _, Backbone, ReportModel, ReportView, RootView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '':              'rootHandler',
      'sign_up':       'signUpHandler',
      'sign_in':       'signInHandler',
      'reports':       'reportsHandler',
      'reports/:id':   'reportHandler',

      '*actions':       'defaultAction'
    }
  });

  var initialize = function() {
    var router = new AppRouter;

    router.on('route:rootHandler', function() {
      console.log('rootHandler');
      var v = new RootView().render();
    });

    router.on('route:signUpHandler', function() {
      console.log('signUpHandler');
    });

    router.on('route:signInHandler', function() {
      console.log('signInHandler');
    });

    router.on('route:reportsHandler', function() {
      console.log('Queixinhas: router.reportsHandler');
    });

    router.on('route:reportHandler', function() {
      console.log('Queixinhas: router.reportHandler');

      // test code
      // var m = new ReportModel();
      // var v = new ReportView({model: m}).render();
      // $('.container').html(v.$el);
    });

    router.on('route:defaultAction', function(actions) {
      console.log('Queixinhas: router.defaultAction');
    });

    Backbone.history.start();
    console.log('Queixinhas: router started');
  };

  return {
    initialize: initialize
  };
});
