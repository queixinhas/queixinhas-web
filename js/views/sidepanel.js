/*
  handles all interaction with the sidepanel

  ATTN: this is a "singleton"
  ATTN: this is not a backbone view
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'text!templates/sidepanel.html',
],
function($, _, Backbone, Mustache, template) {
  var Sidepanel = (function() {
    function Sidepanel() {

    }

    Sidepanel.prototype.initialize = function() {

      return this;
    }

    Sidepanel.prototype.context = function() {

    }

    Sidepanel.prototype.render = function() {
      this.$el = $('<div class="sidepanel"></div>');
      this.el = this.$el.get(0);

      this.$el.html(Mustache.render(template, this.context()));

      return this;
    }

    Sidepanel.prototype.setReport = function(element) {
      var container = $('.reportContainer');
      container.html(element);
      container.addClass('show');
      container.removeClass('hide');

      $('.reportsContainer').toggleClass('hide').toggleClass('show');
    }

    Sidepanel.prototype.setReportList = function(element) {
      var container = $('.reportsContainer');
      container.html(element);
      container.addClass('show');
      container.removeClass('hide');

      $('.reportContainer').toggleClass('hide').toggleClass('show');
    }

    return Sidepanel;
  })();

  return new Sidepanel;
});
