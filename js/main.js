// Require.js shortcut alias

require.config({
  baseUrl: './js',

  paths: {
    'mustache':     'libs/mustache/mustache',
    'jquery':       'libs/jquery/jquery-1.8.3.min',
    'underscore':   'libs/underscore/underscore-min',
    'backbone':     'libs/backbone/backbone-min',
    'text':         'libs/require/text',
    'async':        'libs/require/async',
    'gmaps':        'libs/google/gmaps',
    'templates':    '../templates'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

require([
  'jquery',
  'underscore',
  'backbone',
  'app'
],
function($, _, Backbone, App) {
  console.log("jQuery exists:      ", typeof($) !== "undefined");
  console.log("Underscore version: ", _.VERSION);
  console.log("Backbone version:   ", Backbone.VERSION);
  App.initialize();
});
