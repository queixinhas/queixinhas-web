define([
  'jquery',
  'underscore',
  'backbone',
  'models/report',
  'collections/reports',
  'views/sidepanel',
  'views/map',
  'views/report',
],
function($, _, Backbone, ReportModel, ReportCollection, Sidepanel, MapView, ReportView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '':                   'rootHandler',

      'sign_up':            'signUpHandler',
      'sign_in':            'signInHandler',
      'sign_out':           'signOutHandler',

      'reports/nearest/:n': 'reportsNearestHandler',
      'reports/:id':        'reportHandler',

      'search':             'searchHandler',

      '*actions':           'defaultAction'
    }
  });

  var initialize = function() {
    var router = new AppRouter;

    // default router
    router.on('route:rootHandler', function() {
      console.log('rootHandler');
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

      // TEST: adding multiple reports
      // TODO: create a view for this (ReportsListView)
      var r1 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r2 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r3 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r4 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r5 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r6 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r7 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r8 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r9 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var r10 = new ReportView({model:new ReportModel({id:0}), type:'small'}).render();
      var x = $('<div></div>');
      x.append(r1.$el);
      x.append(r2.$el);
      x.append(r3.$el);
      x.append(r4.$el);
      x.append(r5.$el);
      x.append(r6.$el);
      x.append(r7.$el);
      x.append(r8.$el);
      x.append(r9.$el);
      x.append(r10.$el);
      Sidepanel.setReportList(x);
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
      // get the model associated with the report id
      var m = new ReportModel({id:reportId});
      // create the full report view and render it
      var r = new ReportView({model:m, type:'full'}).render();
      // position the report sidepanel it in the dom
      Sidepanel.setReport(r.$el);
      // highlight the marker in the map TODO: and whatever else we need
      // MapView.hightlightMarker(m.get('latitude'), m.get('longitude'));
    });

    // map move

    // search

    // filter

    // 404
    router.on('route:defaultAction', function(actions) {
      console.log('Queixinhas: router.defaultAction');
    });

    // start your engines!
    Backbone.history.start();
    console.log('Queixinhas: router started');
  };

  return {
    initialize: initialize
  };
});
