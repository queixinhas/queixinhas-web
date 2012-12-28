define([
  'jquery',
  'underscore',
  'backbone',
  'models/report',
  'views/map',
  'views/report',
],
function($, _, Backbone, ReportModel, MapView, ReportView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '':              'rootHandler',
      'sign_up':       'signUpHandler',
      'sign_in':       'signInHandler',
      'reports/:id':   'reportHandler',

      '*actions':       'defaultAction'
    }
  });

  var initialize = function() {
    var router = new AppRouter;

    // default router
    router.on('route:rootHandler', function() {
      console.log('rootHandler', MapView);
      // TODO:
      // detect user location
      // retrieve X nearest+popular reports
      // put markers on the map
      // render left sidebar with report list



      // TEST: adding a marker on the main map (australia)
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-25.363882, 131.044922),
        map: MapView.gmapObj,
        title: 'Hello World!'
      });

      $('.sidepanel').toggleClass('show').toggleClass('hide');

    });

    // executed when user clicks sign-up
    router.on('route:signUpHandler', function() {
      console.log('signUpHandler');
    });

    // executed when user clicks sign-in
    router.on('route:signInHandler', function() {
      console.log('signInHandler');
    });

    // executed when a specific report is selected
    router.on('route:reportHandler', function(reportId) {
      console.log('Queixinhas: router.reportHandler');
      // TODO:
      // get model from id
      // render view for given model
      // position view correctly (e.g. in sidepanel)
      // do whatever else is necessary (e.g. highlight marker, wtv)
    });

    // map move
    // search
    // filter


    // 404
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
